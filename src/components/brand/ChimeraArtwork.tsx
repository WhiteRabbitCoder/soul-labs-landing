import type { CSSProperties } from "react";

import contemplatingSvg from "@/assets/brand/vectors/chimera-contemplating.svg";
import leapingSvg from "@/assets/brand/vectors/chimera-leaping.svg";
import listeningSvg from "@/assets/brand/vectors/chimera-listening.svg";
import restingSvg from "@/assets/brand/vectors/chimera-resting.svg";

export type ChimeraVariant = "listening" | "resting" | "contemplating" | "leaping";

type ArtworkRecord = {
  src: string;
  width: number;
  height: number;
  alt: string;
  anchorDesktop: string;
  anchorMobile: string;
};

const artwork: Record<ChimeraVariant, ArtworkRecord> = {
  listening: {
    src: listeningSvg,
    width: 1228,
    height: 806,
    alt: "Quimera de Soul Labs inclinada sobre el agua, observando su reflejo.",
    anchorDesktop: "54% 56%",
    anchorMobile: "52% 58%",
  },
  resting: {
    src: restingSvg,
    width: 1025,
    height: 894,
    alt: "Quimera de Soul Labs reposando con las alas abiertas.",
    anchorDesktop: "48% 52%",
    anchorMobile: "50% 54%",
  },
  contemplating: {
    src: contemplatingSvg,
    width: 1072,
    height: 914,
    alt: "Quimera de Soul Labs sentada y mirando una luna creciente.",
    anchorDesktop: "55% 50%",
    anchorMobile: "52% 50%",
  },
  leaping: {
    src: leapingSvg,
    width: 1344,
    height: 970,
    alt: "Quimera de Soul Labs avanzando en un salto sereno.",
    anchorDesktop: "48% 50%",
    anchorMobile: "48% 52%",
  },
};

type ChimeraArtworkProps = {
  variant: ChimeraVariant;
  className?: string;
  decorative?: boolean;
  eager?: boolean;
  breathe?: boolean;
};

/**
 * Semantic image boundary for every chimera scene.
 *
 * Routes never import a brand filename directly. The semantic resolver keeps
 * content and composition independent from the underlying approved artwork.
 */
export function ChimeraArtwork({
  variant,
  className = "",
  decorative = false,
  eager = false,
  breathe = false,
}: ChimeraArtworkProps) {
  const item = artwork[variant];
  const style = {
    "--chimera-anchor-desktop": item.anchorDesktop,
    "--chimera-anchor-mobile": item.anchorMobile,
  } as CSSProperties;

  return (
    <span
      className={`chimera-artwork chimera-artwork--${variant}${breathe ? " chimera-artwork--breathe" : ""} ${className}`}
      style={style}
    >
      <img
        src={item.src}
        width={item.width}
        height={item.height}
        alt={decorative ? "" : item.alt}
        aria-hidden={decorative ? true : undefined}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
      />
    </span>
  );
}
