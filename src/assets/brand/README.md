# Assets de marca

Los archivos de `originals/` son fuentes raster inmutables. `processed/` conserva sus derivados reproducibles y el manifiesto del recorte. `vectors/` contiene los SVG entregados por la marca el 6 de agosto de 2026 y es ahora la fuente visual publicada.

No se deben importar archivos desde `originals/` o `processed/` en las páginas. Toda composición consume el contrato semántico de `src/components/brand/ChimeraArtwork.tsx`.

Correspondencia semántica de los vectores:

- `chimera-listening.svg`: quimera inclinada sobre el agua.
- `chimera-resting.svg`: quimera recogida en reposo.
- `chimera-contemplating.svg`: quimera sentada frente a la luna.
- `chimera-leaping.svg`: quimera avanzando en un salto.
- `soul-labs-wordmark.svg`: wordmark oficial, conservado como fuente de marca.

Los tamaños intrínsecos declarados por `ChimeraArtwork` replican cada `viewBox`, mientras que el tamaño visual sigue controlado por CSS. Esto mantiene estable el layout y permite escalar sin pérdida de definición.
