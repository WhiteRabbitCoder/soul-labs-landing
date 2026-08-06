# Design Philosophy

## Product Thesis

Soul Labs es una empresa de inteligencia artificial aplicada. Diseña agentes, copilotos, productos, sistemas de conocimiento y software con IA para ampliar la capacidad humana de pensar, crear, decidir y operar. La automatización es una capacidad dentro de esa oferta, no su identidad completa.

La promesa central es **IA con humanos, no IA en vez de humanos**. “Más tiempo para lo humano” expresa uno de sus resultados más valiosos: recuperar atención y tiempo sin retirar el criterio, la responsabilidad ni la posibilidad de intervenir.

## Approved Creative Direction

**El umbral del agua**: un laboratorio vivo y editorial donde la precisión técnica se encuentra con pausa, escucha y observación. La quimera atraviesa seis documentos y cambia de estado —escucha, comprensión, impulso, contemplación, aprendizaje y conversación— sin convertirse en mascota infantil.

La experiencia debe sentirse cálida, rigurosa, curiosa y ligeramente inesperada. El sitio usa composiciones de cuaderno de campo, divisores finos, numeración, recortes controlados y amplios silencios visuales. No imita una interfaz SaaS genérica ni una fantasía futurista.

## Conceptual Collision

- Inteligencia artificial aplicada + cuaderno de campo de un naturalista.
- Arquitectura de sistemas + fenomenología de la atención.
- Laboratorio de producto + collage editorial de pruebas, notas y estados.
- Movimiento computacional + respiración orgánica.

La colisión produce una marca tecnológica que observa antes de intervenir y que documenta límites y aprendizajes con la misma seriedad que sus capacidades.

## Narrative Experience

La navegación recorre seis capítulos reales, cada uno con URL propia:

1. `/` — **Escuchar**: abre el territorio More Human y define con claridad la empresa de IA aplicada.
2. `/soluciones` — **Comprender**: traduce problemas en capacidades, no en herramientas predeterminadas.
3. `/como-trabajamos` — **Avanzar con criterio**: muestra el método iterativo de diagnóstico, cocreación y aprendizaje.
4. `/more-human` — **Contemplar límites**: expone el manifiesto ético y los puntos que deben conservar supervisión humana.
5. `/laboratorio` — **Aprender en público**: separa evidencia, hipótesis, experimentos y pendientes sin inventar resultados.
6. `/contacto` — **Conversar**: ayuda a describir el proceso antes de discutir una solución.

Cada capítulo contiene una salida clara al siguiente, pero la cabecera mantiene acceso directo a cualquier ruta.

## UX Principles

- La segunda interacción debe explicar qué hace Soul Labs, aunque el hero comience de forma poética.
- Presentar la IA como herramienta de trabajo, creación y decisión; no reducirla a automatización.
- Diagnosticar antes de recomendar. También debe ser visible la posibilidad de pausar o descartar una automatización.
- Diferenciar hechos confirmados, hipótesis, capacidades y pruebas pendientes.
- No prometer reemplazo total, infalibilidad, automatización al 100 %, métricas sin fuente ni resultados no auditados.
- El CTA principal es consultivo: “Cuéntanos qué te está quitando tiempo”.
- La navegación, el formulario y el contenido esencial funcionan sin hover, parallax ni scroll como requisito.

## Color Tokens

| Token             | Valor                    | Uso                                                      |
| ----------------- | ------------------------ | -------------------------------------------------------- |
| `--color-orange`  | `#E8682A`                | señal, trazo, foco gráfico, superficies con texto oscuro |
| `--color-coffee`  | `#5B3928`                | planos cálidos oscuros, ilustración, texto ocasional     |
| `--color-paper`   | `#F4EBDD`                | superficies editoriales y fichas                         |
| `--color-cream`   | `#FBF7F0`                | fondo luminoso principal                                 |
| `--color-ink`     | `#322A24`                | texto principal y fondos de alto contraste               |
| `--color-clay`    | `#B84D2A`                | acento secundario y estados expresivos                   |
| `--color-muted`   | `#776A61`                | texto secundario solo en tamaños legibles                |
| `--color-border`  | `rgba(50, 42, 36, 0.22)` | divisores y contornos                                    |
| `--color-success` | `#356A50`                | confirmaciones reales                                    |
| `--color-error`   | `#A33B32`                | error y validación                                       |

Combinaciones críticas: tinta sobre crema o papel; crema sobre tinta o café; tinta sobre naranja. No usar crema en tipografía pequeña sobre naranja vivo ni naranja como texto pequeño sobre crema.

## Typography

- **Fraunces**: titulares narrativos, citas y palabras con carga emocional. Se usa con moderación y variación óptica sobria.
- **Manrope**: navegación, cuerpo, etiquetas, formularios y datos.
- Los titulares combinan una escala editorial fluida con líneas cortas; el cuerpo mantiene un ancho aproximado de 60–72 caracteres.
- Las mayúsculas con tracking amplio quedan reservadas para índices, estados y rótulos breves.

## Spatial and Grid System

- Contenedor principal máximo: `88rem` con margen fluido.
- Retícula editorial de 12 columnas en escritorio, 6 en tablet y 4 en móvil.
- Espaciado base: 4, 8, 12, 16, 24, 32, 48, 64, 96 y 144 px mediante tokens fluidos.
- El espacio negativo es parte de la narrativa: no llenar cada zona con tarjetas.
- Los recortes irregulares pueden romper una línea de retícula, pero nunca la lectura ni el orden del foco.
- Radios pequeños o recortes poligonales; evitar una colección uniforme de rectángulos excesivamente redondeados.

## Components and Interaction

- `SiteHeader` y `SiteFooter` son únicos y compartidos entre páginas.
- `ChimeraArtwork` recibe variantes semánticas (`listening`, `resting`, `contemplating`, `leaping`) y oculta el formato del asset.
- `PageHero`, `SectionHeading`, `EditorialNote`, `EvidenceStatus` y `NextChapter` sostienen continuidad sin uniformar todos los capítulos.
- Los enlaces muestran dirección mediante línea, flecha o cambio de contraste; el hover es una mejora, nunca el único indicador.
- Formularios con etiquetas persistentes, instrucciones antes del error y estados honestos. Hasta definir un destino de datos, no se simula un envío exitoso.

## Motion

- Respiración de la quimera: escala/traslación de 1–2 % durante 6–10 s, solo en escenas principales.
- Revelados editoriales: opacidad y desplazamiento de 12–20 px durante 350–650 ms.
- Conectores de método: trazos que aparecen para explicar secuencia, no para premiar el scroll.
- Transición entre rutas: fundido breve y desplazamiento máximo de 8 px; el cambio de documento sigue siendo inmediato y recupera foco.
- La cabecera se aparta solo después de un descenso sostenido y vuelve al subir, abrir el menú o navegar con teclado; su sombra cálida comunica que el plano de navegación flota sobre el documento.
- Parallax opcional máximo de pocos píxeles y únicamente en pantallas grandes con puntero preciso.
- `prefers-reduced-motion: reduce` elimina respiración, trazos animados, desplazamientos y scroll suave; conserva estados instantáneos comprensibles.

## Accessibility

- HTML semántico, orden de encabezados estable, enlace de salto y regiones nombradas.
- Foco visible con contorno de alto contraste y separación suficiente.
- Navegación completa por teclado; el menú móvil restaura foco al cerrarse.
- Ilustraciones narrativas con alternativa útil; decoraciones con `aria-hidden="true"`.
- Contraste WCAG AA en texto y controles. El color nunca comunica un estado por sí solo.
- Dimensiones reservadas para imágenes; carga diferida fuera del primer viewport.
- Objetivos táctiles de al menos 44 px y tipografía base mínima de 16 px.

## Responsive Behavior

- La experiencia comienza en 320 px sin depender de composición de escritorio.
- En móvil, el texto precede al arte cuando la comprensión lo requiere; las fichas pasan a flujo vertical.
- La quimera conserva astas, alas, cola, patas y líneas finas mediante puntos de anclaje por variante y breakpoint.
- El tamaño visual de cada SVG se controla por CSS y conserva los anclajes semánticos establecidos por variante.
- Las navegaciones profundas funcionan con recarga directa y existe un 404 con salida clara.

## Iconography and Imagery

- La quimera es sensible, curiosa, inteligente, vulnerable y cambiante; nunca agresiva, dominante ni infantil.
- Escucha junto al agua: diagnóstico. Reposo: comprensión y cuidado. Luna: criterio e incertidumbre. Salto: cocreación y progreso guiado.
- Los PNG originales y sus derivados transparentes se preservan como historial de fuente, separados de los SVG publicados.
- No presentar láminas de identidad completas como arte final.
- Los SVG aprobados conservan el contrato semántico y los mismos anclajes, sin cambiar el contenido de las páginas.
- Iconos funcionales: una sola familia de trazo. Evitar robots, cerebros con circuitos, hologramas, galaxias, redes brillantes y símbolos genéricos de “IA”.

## Anti-Patterns

- SPA de una sola página simulando rutas con anclas.
- Hero tecnológico genérico con degradado azul–morado.
- Tarjetas idénticas apiladas, exceso de pills, glassmorphism y sombras negras pesadas.
- Copy centrado únicamente en eficiencia, ahorro o reemplazo de puestos.
- Personificar la IA como autoridad infalible.
- Métricas, testimonios, clientes, logos o casos no documentados.
- Animación ornamental constante, scroll-jacking o contenido revelado solo mediante scroll.
- Descargar las cuatro ilustraciones en todas las rutas.

## Approved Exceptions

- La cabecera puede usar una cápsula suave por su función persistente, sin extender ese tratamiento a todo el sistema.
- La portada puede abrir con “More Human” antes de la descripción comercial, siempre que la oferta completa aparezca en la misma primera escena o en la interacción inmediata siguiente.
- El formulario de contacto puede preparar un resumen copiable mientras no exista un endpoint confirmado; debe declarar esta limitación y no fingir recepción.

## Decision Log

- **2026-08-06 — Arquitectura:** seis rutas independientes aprobadas; se descarta una única página apilada.
- **2026-08-06 — Dirección:** “El umbral del agua” y el laboratorio editorial quedan como sistema visual y narrativo.
- **2026-08-06 — Assets y navegación:** las cuatro escenas pasan a SVG aprobados; el header se oculta tras descenso sostenido y recibe una sombra editorial cálida.
- **2026-08-06 — Paleta:** se adopta la paleta de marca suministrada con restricciones de contraste.
- **2026-08-06 — Producto:** se amplía explícitamente el posicionamiento a empresa de IA aplicada. La automatización queda como una capacidad, no como definición total.
- **2026-08-06 — Ética:** la IA se presenta como herramienta de trabajo y amplificación humana, nunca como reemplazo.
- **2026-08-06 — Implementación:** se crea una copia nueva del repositorio para preservar intacto el proyecto original.
