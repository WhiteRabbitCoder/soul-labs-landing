# Soul Labs — experiencia narrativa multipágina

Sitio de Soul Labs construido con React, TypeScript, TanStack Start/Router, Vite y Tailwind CSS 4. Presenta a Soul Labs como una empresa de **IA aplicada** que crea agentes, copilotos, productos, sistemas de conocimiento, software y automatización inteligente con un principio rector:

> IA con humanos, no IA en vez de humanos.

La implementación vive en esta carpeta independiente. El repositorio de origen no fue modificado.

## Rutas

| Ruta               | Capítulo   | Función                                            |
| ------------------ | ---------- | -------------------------------------------------- |
| `/`                | Escuchar   | Territorio More Human y definición de la oferta    |
| `/soluciones`      | Comprender | Capacidades, especialidad conversacional y límites |
| `/como-trabajamos` | Avanzar    | Método, puertas de decisión y pilotos              |
| `/more-human`      | Contemplar | Manifiesto, supervisión e incertidumbre            |
| `/laboratorio`     | Aprender   | Estados de evidencia y formato de experimentos     |
| `/contacto`        | Conversar  | Diagnóstico inicial del proceso                    |

Cada capítulo es una ruta real y se carga como un documento independiente del router. La cabecera, el pie, los metadatos y los componentes editoriales son compartidos.

## Ejecutar

Requiere Node.js 20 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

Validación completa:

```bash
pnpm check
```

Comandos individuales:

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm preview
```

El preset local heredado genera un Worker Nitro para Cloudflare en `.output`; por eso `pnpm preview` levanta la aplicación con variables de modo producción en el servidor de Vite, en vez de buscar el layout Node `dist/server` que este target no produce. El artefacto de despliegue se valida con `pnpm build` y, al conectarlo a Cloudflare, con Wrangler usando `.output/server/wrangler.json`.

## Configuración de producción pendiente

El dominio oficial no fue suministrado. Cuando esté confirmado:

1. Define `VITE_SITE_URL` durante el build para generar canonical y `og:url` por página.
2. Genera el sitemap con la misma URL:

   PowerShell:

   ```powershell
   $env:SITE_URL="https://dominio-confirmado.com"
   pnpm sitemap:generate
   ```

   Bash:

   ```bash
   SITE_URL=https://dominio-confirmado.com pnpm sitemap:generate
   ```

3. Añade la URL absoluta de `sitemap.xml` a `public/robots.txt`.

No se ha inventado un dominio, email, perfil social ni endpoint de contacto.

## Contacto sin integración ficticia

`/contacto` prepara un diagnóstico copiable dentro del navegador. No transmite ni almacena datos y lo declara de forma visible. Para convertirlo en envío real hace falta confirmar:

- destino de los datos;
- aviso de privacidad y periodo de retención;
- tratamiento de errores, spam y consentimiento;
- canal de respuesta.

## Assets de marca

```text
src/assets/brand/
├── originals/   # fuentes intactas
├── processed/   # PNG transparente, WebP y manifest.json
└── vectors/     # SVG aprobados que usa el sitio
```

El componente `ChimeraArtwork` usa variantes semánticas (`listening`, `resting`, `contemplating`, `leaping`) en lugar de nombres de archivo. Las páginas ya publican los SVG aprobados; los raster se conservan como fuentes y derivados históricos, sin cargarse en el sitio.

Para regenerar derivados se usa el Python incluido en el entorno de trabajo o cualquier Python con Pillow y NumPy:

```bash
python -m pip install -r tools/brand-assets/requirements.txt
pnpm assets:brand
```

El script `tools/brand-assets/process.py`:

- conserva intactos los originales;
- estima el papel desde el borde;
- usa tolerancia cromática y flood fill conectado al borde;
- preserva detalles crema encerrados por la ilustración;
- limpia únicamente islas de menos de cuatro píxeles;
- calcula bounding box y margen de seguridad;
- conserva la resolución de fuente y no amplía;
- exporta WebP solo si ahorra al menos 10 %;
- documenta el resultado en `processed/manifest.json`.

## Decisiones de diseño

La guía persistente está en [`DESIGN_PHILOSOPHY.md`](./DESIGN_PHILOSOPHY.md). Resume la dirección “El umbral del agua”, los tokens exactos, la narrativa del personaje, el sistema de movimiento, las reglas de accesibilidad y los anti-patrones aprobados.

## Accesibilidad y rendimiento

- enlace de salto y foco visible;
- navegación por teclado y menú móvil con cierre por `Escape`;
- header que se aparta tras un descenso sostenido, reaparece al subir o recibir foco y conserva el menú abierto;
- foco trasladado al contenido al cambiar de ruta;
- ilustraciones con dimensiones reservadas y alternativas útiles;
- carga diferida salvo arte del hero;
- animaciones CSS no esenciales y desactivadas con `prefers-reduced-motion`;
- sin scroll-jacking ni interacción obligatoria por hover;
- contenido esencial visible aunque no exista soporte para animación ligada al viewport;
- 404 y error global en español.

## Evidencia editorial

El laboratorio diferencia contenido confirmado, trabajo en observación y evidencia pendiente. No se incluyen cifras, clientes, logos, testimonios ni resultados sin una fuente verificable.
