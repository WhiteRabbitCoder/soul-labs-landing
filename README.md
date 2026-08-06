# Soul Labs Landing

Crea una landing page premium, desktop-first y completamente responsiva para **Soul Labs**, una software factory y laboratorio de productos/soluciones de inteligencia artificial aplicada. Usa React + TypeScript, Tailwind CSS, shadcn/ui cuando aporte valor y Framer Motion para animaciones. Debe ser una SPA de una sola página, lista para presentar comercialmente a empresas de tecnología y líderes de operaciones.

La dirección visual debe combinar tres referencias conceptuales: (1) una web editorial oscura con composición de collage, imágenes superpuestas y alternancia zig-zag; (2) una hero clara, tecnológica y comercial, con textura halftone, tipografía enorme y una gran imagen conceptual; (3) el sistema visual de Soul Labs: una quimera pequeña inspirada en liebre, mariposa y astas orgánicas, construida con línea café, crema y acentos naranjas. No copies literalmente ninguna referencia: combina jerarquía, escala tipográfica, uso del espacio, asimetría y sofisticación con una identidad propia.

## Objetivo comercial
Presenta a Soul Labs como una **software factory de IA en general**, capaz de diseñar agentes, automatizaciones, productos y software inteligente a medida. Los proyectos iniciales de educación, contacto masivo, entrevistas y agendamiento son evidencia de aprendizaje, no el límite de la empresa. La promesa central es recuperar tiempo, mejorar procesos y ampliar la capacidad de los equipos sin retirar el criterio humano.

## Fundamentos de marca
- Esencia: tecnología con alma; IA creada para trabajar con las personas, devolverles tiempo y preservar su criterio.
- Propósito: mejorar procesos empresariales a favor de las personas.
- Principio rector: “IA con humanos, no IA en vez de humanos”.
- Eslogan comercial: “Más tiempo para lo humano”.
- Posicionamiento: laboratorio de productos y soluciones de IA aplicada.
- Personalidad: guía experta, cercana, creativa, honesta y ligeramente valiente; nunca fría, agresiva, grandilocuente ni “sabelotodo”.
- Venta consultiva: diagnostica antes de ofrecer y admite cuando una automatización no conviene.
- Diferenciales: personalización real, continuidad inteligente, IA consciente de sus límites, supervisión diseñada y aprendizaje constante.

## Dirección artística
Mezcla de **laboratorio vivo + cuento de bosque digital + revista tecnológica de vanguardia**. Editorial, cálida, experimental, asimétrica, sofisticada y con intención comercial. Debe sentirse creada por un estudio de diseño serio, no como una plantilla SaaS genérica.

Usa composiciones tipo collage, recortes con bordes visibles, módulos geométricos irregulares, líneas técnicas, numeración editorial, pequeños trazos naranjas y texturas digitales sutiles como halftone/grano. La tecnología debe aparecer mediante ritmo, sistema, diagramas, movimiento y transformación; no mediante robots, cerebros con circuitos, galaxias, neón, redes neuronales brillantes, hologramas ni degradados azul-morado.

La estética es otoñal, pero no de cafetería ni vintage rústico. Mantén energía digital con tipografía expresiva, geometría precisa, mucho espacio negativo y naranja nítido.

## Paleta estricta
Configura tokens/variables y Tailwind con:
- luz: #FBF7F0 — fondo principal crema
- papel: #F4EBDD — secciones secundarias y tarjetas
- tierra: #5B3928 — titulares, bordes, secciones oscuras
- tinta: #322A24 — texto de lectura; no usar negro puro ni gris frío
- alma: #E8682A — solo acentos, CTA, focos, subrayados, indicadores y hover

El diseño debe estar dominado por crema, beige y café. El naranja debe ser escaso para que produzca impacto. No uses gradientes.

## Tipografía
- Titulares: display/serif contemporánea con personalidad y excelente legibilidad. Usa Fraunces, Cormorant Garamond o alternativa equivalente.
- Interfaz y cuerpo: Manrope o Inter.
- Titulares muy grandes en desktop, con contraste editorial y saltos de línea intencionales.

## Animación
Usa Framer Motion con movimiento orgánico y controlado:
- reveal por sección: y 30, opacity 0 → y 0, opacity 1, duration aproximada 0.8
- stagger interno
- desplazamientos lentos, respiración, pulso y flotación
- parallax muy sutil en elementos del collage
- hover con pequeños desplazamientos, cambio de borde o acento naranja
- respetar prefers-reduced-motion
- ninguna animación puede romper el layout en móvil ni perjudicar rendimiento/accesibilidad

## Estructura

### 1. Navbar flotante
Isla tipo píldora centrada, fixed, sobre el contenido. Fondo crema translúcido, backdrop blur, borde café tenue y sombra suave. Wordmark “Soul Labs” a la izquierda. Enlaces: Filosofía, Capacidades, Casos, Método. CTA: “Hablar con nosotros”, fondo tierra; hover naranja. En móvil, menú accesible.

### 2. Hero
Composición asimétrica de dos columnas y altura cercana a 100vh.

Copy principal:
**Más tiempo para lo humano.**

Texto:
“Diseñamos agentes, productos y software de IA que recuperan las horas de tu equipo sin retirar el criterio humano.”

CTA primario naranja: “Cuéntanos qué te quita tiempo”
CTA secundario: “Mira cómo trabajamos”

Etiqueta editorial: “SOUL LABS / IA APLICADA / 2026”.

En la parte visual, crea una composición conceptual original en SVG/CSS inspirada en una quimera liebre-mariposa: cuerpo pequeño de liebre dormida o atenta, alas de polilla/mariposa y astas ramificadas elegantes. No debe parecer una mascota infantil ni un animal agresivo. Dibújala con líneas café, superficies crema y acentos naranjas mínimos, dentro de un diagrama/collage de laboratorio con recortes, círculos de medición, notas y textura halftone. Anímala con flotación y respiración suave.

Microtexto: “Tecnología que avanza con las personas”.

### 3. Revelación clara / qué hacemos
Eyebrow: “LABORATORIO DE IA APLICADA”
Titular: “Construimos la inteligencia que tu operación necesita.”
Texto: “No vendemos una automatización genérica. Entendemos el proceso, diseñamos la solución y la llevamos a producción con supervisión, trazabilidad y mejora continua.”

Cuatro capacidades en grid editorial, no tarjetas SaaS idénticas:
- Agentes conversacionales: voz, chat y canales de atención.
- Automatización inteligente: flujos, seguimiento y toma asistida de decisiones.
- Productos de IA: herramientas configurables que nacen de patrones reales.
- Software a medida: plataformas completas con IA integrada al negocio.

Numeración 01–04, diagramas abstractos y microinteracciones.

### 4. Problema / collage
Fondo papel. Título: “Hay talento atrapado en la repetición.”

Collage/masonry con piezas superpuestas:
- “Procesos que empiezan de nuevo.”
- “Horas consumidas antes del trabajo que importa.”
- “Información dispersa y seguimiento manual.”
- “Sistemas que escalan volumen, pero no contexto.”

Conecta piezas con líneas/puntos naranjas sutiles. Añade un elemento conceptual grande “HRS” o “horas recuperables”, sin inventar cifras ni resultados.

### 5. Manifiesto oscuro
Fondo tierra, texto crema.
Titular serif enorme: **IA con humanos, no IA en vez de humanos.**
Texto revelado por líneas:
“Nuestros agentes no fingen ser humanos. Escuchan, organizan, explican, reconocen sus límites y piden ayuda cuando corresponde.”

Separador naranja y tres principios:
- La decisión humana permanece cuando importa.
- Si no lo sabe, no lo inventa.
- Automatizamos lo que deja a las personas en una mejor posición.

### 6. Capacidades / zig-zag
Sección crema tipo portafolio editorial, alternando texto y visuales abstractos.

A — “Agentes que conversan y actúan”
Voz, chat, contacto, clasificación, agenda, soporte y seguimiento con contexto.

B — “Software que entiende el proceso”
Aplicaciones y plataformas a medida donde la IA forma parte del sistema, no un chatbot pegado al final.

C — “Productos que nacen en producción”
Detectamos patrones repetibles, medimos qué funciona y los convertimos en módulos o productos escalables.

Usa ejemplos discretos de operaciones, servicio, talento, ventas consultivas, logística y conocimiento interno. No prometas resolver cualquier cosa.

### 7. Diferenciales / arquetipos
Tres piezas visualmente distintas:
- El Sabio — “Supervisión diseñada: IA que guía, explica e investiga, pero deja la decisión en tus manos.”
- El Cuidador — “Transparencia y límites: las personas saben cuándo hablan con IA y siempre existe una ruta de escalamiento.”
- El Creador — “Experimentación con propósito: combinamos investigación y software para convertir problemas singulares en soluciones nuevas.”

Incluye “Continuidad inteligente”: el sistema registra, conserva contexto, reintenta, coordina el siguiente paso y busca completar el proceso.

### 8. Casos / aprendizaje real
Título: “Lo que funcionó. Lo que falló. Lo que aprendimos.”

Dos casos iniciales:
1. Contacto y agendamiento a gran escala.
2. Selección asistida con comparación de perfiles y entrevistas estructuradas.

Preséntalos como implementaciones iniciales que ayudaron a construir método y capacidades para otros procesos empresariales. No inventes logos de clientes, porcentajes, ahorros ni tasas. Usa etiquetas “EN PRODUCCIÓN”, “APRENDIZAJE” y “SUPERVISIÓN HUMANA”. Comunica honestamente que hubo aciertos, fricciones y mejora continua.

### 9. Método
Ruta horizontal en desktop y vertical en móvil:
01 Escuchar
02 Mapear
03 Cocrear
04 Pilotar
05 Medir
06 Mejorar

Microcopy: “La primera reunión se centra en el problema, no en una demo genérica.”
Nota: “También sabemos decir: esto no deberíamos automatizarlo.”

### 10. CTA consultivo
Fondo papel.
“Un cambio pequeño que se nota.”
“¿Empezamos por mapear tu proceso?”

Texto: “No necesitas saber qué agente quieres. Empieza por contarnos qué le está quitando tiempo a tu equipo.”

Formulario frontend funcional con nombre, correo corporativo y proceso a explorar. Validación accesible y mensaje de éxito local. Botón naranja “Enviar”. Enlace alternativo “Agendar conversación”.

### 11. Footer
Fondo tinta o tierra, wordmark crema, línea naranja mínima. Enlaces: Filosofía, Capacidades, Casos, Contacto, LinkedIn. Copy: “Soul Labs — tecnología que avanza con las personas.” Copyright dinámico. No uses nombres personales.

## Requisitos
- Desktop-first con composición extraordinaria a 1440 px; adaptación cuidada a tablet y móvil.
- Max-width amplio, grilla de 12 columnas y espacio negativo generoso.
- Accesibilidad, HTML semántico, foco visible, teclado y contraste correcto.
- Optimiza rendimiento; evita librerías innecesarias.
- No agregues precios, login, dashboard ni testimonios inventados.
- No uses lorem ipsum, claims de “revolución”, métricas inventadas ni clientes ficticios.
- Debe sentirse comercial y tecnológica, pero cálida, humana y memorable.

Construye la primera versión completa ahora y déjala lista para revisar en preview.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/480171ea-ec2c-4fdd-a265-5ffb765ca696).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
