"""Create transparent, reproducible raster derivatives for Soul Labs artwork.

The script never edits files in ``src/assets/brand/originals``. Background
removal uses a colour tolerance plus edge-connected flood fill, so enclosed
cream details inside wings are preserved even when they resemble the page.
"""

from __future__ import annotations

from collections import deque
from dataclasses import asdict, dataclass
import json
from pathlib import Path

import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[2]
ORIGINALS = ROOT / "src" / "assets" / "brand" / "originals"
PROCESSED = ROOT / "src" / "assets" / "brand" / "processed"


@dataclass(frozen=True)
class ArtworkSpec:
    variant: str
    source: str
    output: str
    crop: tuple[int, int, int, int] | None
    alt: str
    anchor_desktop: str
    anchor_mobile: str


SPECS = (
    ArtworkSpec(
        variant="listening",
        source="chimera-listening-original.png",
        output="chimera-listening-raster.png",
        crop=None,
        alt="Quimera de Soul Labs inclinada sobre el agua, observando su reflejo.",
        anchor_desktop="54% 56%",
        anchor_mobile="52% 58%",
    ),
    ArtworkSpec(
        variant="resting",
        source="chimera-resting-board-original.png",
        output="chimera-resting-raster.png",
        crop=(190, 52, 548, 377),
        alt="Quimera de Soul Labs reposando con las alas abiertas.",
        anchor_desktop="48% 52%",
        anchor_mobile="50% 54%",
    ),
    ArtworkSpec(
        variant="contemplating",
        source="chimera-contemplating-original.png",
        output="chimera-contemplating-raster.png",
        crop=None,
        alt="Quimera de Soul Labs sentada y mirando una luna creciente.",
        anchor_desktop="55% 50%",
        anchor_mobile="52% 50%",
    ),
    ArtworkSpec(
        variant="leaping",
        source="chimera-leaping-board-original.png",
        output="chimera-leaping-raster.png",
        crop=(92, 42, 572, 402),
        alt="Quimera de Soul Labs avanzando en un salto sereno.",
        anchor_desktop="48% 50%",
        anchor_mobile="48% 52%",
    ),
)


def border_colour(rgb: np.ndarray) -> np.ndarray:
    """Estimate paper colour from a robust median of the outer border."""
    border = np.concatenate(
        (rgb[0], rgb[-1], rgb[:, 0], rgb[:, -1]), axis=0
    ).astype(np.float32)
    return np.median(border, axis=0)


def edge_connected(mask: np.ndarray) -> np.ndarray:
    """Return only mask pixels connected to an image edge."""
    height, width = mask.shape
    connected = np.zeros_like(mask, dtype=bool)
    queue: deque[tuple[int, int]] = deque()

    for x in range(width):
        if mask[0, x]:
            queue.append((0, x))
        if mask[height - 1, x]:
            queue.append((height - 1, x))
    for y in range(height):
        if mask[y, 0]:
            queue.append((y, 0))
        if mask[y, width - 1]:
            queue.append((y, width - 1))

    while queue:
        y, x = queue.popleft()
        if connected[y, x] or not mask[y, x]:
            continue
        connected[y, x] = True
        if y:
            queue.append((y - 1, x))
        if y + 1 < height:
            queue.append((y + 1, x))
        if x:
            queue.append((y, x - 1))
        if x + 1 < width:
            queue.append((y, x + 1))

    return connected


def remove_isolated_pixels(alpha: np.ndarray, minimum_area: int = 4) -> np.ndarray:
    """Drop only tiny opaque islands; never erode legitimate fine lines."""
    foreground = alpha >= 96
    height, width = foreground.shape
    visited = np.zeros_like(foreground, dtype=bool)

    for start_y, start_x in zip(*np.nonzero(foreground)):
        if visited[start_y, start_x]:
            continue
        queue = [(int(start_y), int(start_x))]
        visited[start_y, start_x] = True
        component: list[tuple[int, int]] = []
        while queue:
            y, x = queue.pop()
            component.append((y, x))
            for next_y, next_x in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
                if (
                    0 <= next_y < height
                    and 0 <= next_x < width
                    and foreground[next_y, next_x]
                    and not visited[next_y, next_x]
                ):
                    visited[next_y, next_x] = True
                    queue.append((next_y, next_x))
        if len(component) < minimum_area:
            for y, x in component:
                alpha[y, x] = 0

    return alpha


def process(spec: ArtworkSpec) -> dict[str, object]:
    source_path = ORIGINALS / spec.source
    image = Image.open(source_path).convert("RGB")
    source_size = image.size
    if spec.crop:
        image = image.crop(spec.crop)

    rgb = np.asarray(image, dtype=np.uint8)
    paper = border_colour(rgb)
    distance = np.linalg.norm(rgb.astype(np.float32) - paper, axis=2)

    # A generous candidate tolerance catches warm paper variation. Requiring
    # edge connectivity prevents matching cream regions enclosed by dark ink.
    tolerance = 58.0
    exterior = edge_connected(distance <= tolerance)
    alpha = np.full(distance.shape, 255, dtype=np.uint8)
    soft = np.clip((distance - 9.0) / (tolerance - 9.0) * 255.0, 0, 255)
    alpha[exterior] = soft[exterior].astype(np.uint8)
    alpha = remove_isolated_pixels(alpha)

    visible_y, visible_x = np.nonzero(alpha > 18)
    if visible_x.size == 0:
        raise RuntimeError(f"No foreground detected for {spec.variant}")

    foreground_box = (
        int(visible_x.min()),
        int(visible_y.min()),
        int(visible_x.max()) + 1,
        int(visible_y.max()) + 1,
    )
    pad = max(12, round(max(image.size) * 0.045))
    left = max(0, foreground_box[0] - pad)
    top = max(0, foreground_box[1] - pad)
    right = min(image.width, foreground_box[2] + pad)
    bottom = min(image.height, foreground_box[3] + pad)
    output_box = (left, top, right, bottom)

    rgba = np.dstack((rgb, alpha))
    result = Image.fromarray(rgba, mode="RGBA").crop(output_box)
    output_path = PROCESSED / spec.output
    result.save(output_path, optimize=True)

    webp_path = output_path.with_suffix(".webp")
    result.save(webp_path, format="WEBP", lossless=True, method=6)
    webp_saved = output_path.stat().st_size - webp_path.stat().st_size
    if webp_saved < output_path.stat().st_size * 0.10:
        webp_path.unlink(missing_ok=True)
        webp_name: str | None = None
    else:
        webp_name = webp_path.name

    return {
        **asdict(spec),
        "source_size": source_size,
        "estimated_background_rgb": [round(float(channel), 2) for channel in paper],
        "tolerance": tolerance,
        "foreground_box_within_crop": foreground_box,
        "output_box_within_crop": output_box,
        "output_size": result.size,
        "png_bytes": output_path.stat().st_size,
        "webp": webp_name,
        "webp_bytes": webp_path.stat().st_size if webp_name else None,
        "scale_note": "Master raster at source resolution; do not upscale beyond intrinsic size.",
    }


def main() -> None:
    PROCESSED.mkdir(parents=True, exist_ok=True)
    records = [process(spec) for spec in SPECS]
    manifest = {
        "generated_by": "tools/brand-assets/process.py",
        "method": "edge-connected colour tolerance with soft alpha fringe",
        "artworks": records,
    }
    (PROCESSED / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    for record in records:
        print(
            f"{record['variant']}: {record['output_size']} -> {record['output']}"
            + (f" + {record['webp']}" if record["webp"] else "")
        )


if __name__ == "__main__":
    main()
