export type SiteRoute = {
  href: "/" | "/soluciones" | "/como-trabajamos" | "/more-human" | "/laboratorio" | "/contacto";
  label: string;
  shortLabel: string;
  index: string;
};

export const siteRoutes: SiteRoute[] = [
  { href: "/", label: "Inicio", shortLabel: "Inicio", index: "00" },
  {
    href: "/soluciones",
    label: "Soluciones",
    shortLabel: "Soluciones",
    index: "01",
  },
  {
    href: "/como-trabajamos",
    label: "Cómo trabajamos",
    shortLabel: "Método",
    index: "02",
  },
  {
    href: "/more-human",
    label: "More Human",
    shortLabel: "Principios",
    index: "03",
  },
  {
    href: "/laboratorio",
    label: "Laboratorio",
    shortLabel: "Laboratorio",
    index: "04",
  },
  {
    href: "/contacto",
    label: "Contacto",
    shortLabel: "Contacto",
    index: "05",
  },
];

export const capabilities = [
  {
    index: "01",
    title: "Agentes y copilotos",
    description:
      "Sistemas que investigan, orientan, redactan, clasifican o coordinan junto a una persona, con límites y escalamiento explícitos.",
    examples: ["Asistencia conversacional", "Continuidad y seguimiento", "Copilotos internos"],
  },
  {
    index: "02",
    title: "Productos de IA",
    description:
      "Experiencias digitales donde la inteligencia artificial resuelve una necesidad concreta y la interfaz hace visibles su alcance e incertidumbre.",
    examples: ["Productos educativos", "Experiencias adaptativas", "Herramientas de trabajo"],
  },
  {
    index: "03",
    title: "Conocimiento y decisión",
    description:
      "Sistemas que conectan información dispersa, recuperan contexto y ayudan a decidir sin convertir la recomendación en una orden automática.",
    examples: ["Búsqueda contextual", "Síntesis trazable", "Apoyo a decisiones"],
  },
  {
    index: "04",
    title: "Software con IA",
    description:
      "Aplicaciones y flujos a medida que integran modelos, datos y reglas de negocio sin forzar una herramienta genérica sobre el proceso.",
    examples: ["Software personalizado", "Integraciones", "Automatización inteligente"],
  },
] as const;

export const methodSteps = [
  {
    index: "01",
    title: "Escuchar",
    text: "Entender a las personas, el trabajo real y lo que hoy consume atención.",
  },
  {
    index: "02",
    title: "Mapear",
    text: "Hacer visibles decisiones, excepciones, datos, riesgos y puntos de transferencia.",
  },
  {
    index: "03",
    title: "Cocrear",
    text: "Definir con el equipo dónde la IA ayuda, dónde debe preguntar y dónde no conviene entrar.",
  },
  {
    index: "04",
    title: "Pilotar",
    text: "Probar la hipótesis en un alcance pequeño, observable y reversible.",
  },
  {
    index: "05",
    title: "Lanzar",
    text: "Integrar el sistema con responsables, límites y rutas de escalamiento claras.",
  },
  {
    index: "06",
    title: "Medir",
    text: "Observar calidad, utilidad, carga humana, fallos y efectos no previstos.",
  },
  {
    index: "07",
    title: "Aprender",
    text: "Contrastar la promesa con el uso real y documentar qué cambió.",
  },
  {
    index: "08",
    title: "Mejorar o pausar",
    text: "Escalar lo que aporta valor, corregir lo frágil o detener lo que no conviene.",
  },
] as const;

export const humanPrinciples = [
  {
    index: "I",
    title: "Criterio antes que obediencia",
    text: "Una salida de IA puede orientar una decisión; no hereda por ello la autoridad ni la responsabilidad humana.",
  },
  {
    index: "II",
    title: "Incertidumbre visible",
    text: "El sistema debe poder expresar límites, pedir contexto y derivar cuando no sabe lo suficiente.",
  },
  {
    index: "III",
    title: "Supervisión proporcional",
    text: "Cuanto mayor sea el impacto sobre una persona, mayor debe ser la capacidad de revisar, explicar e intervenir.",
  },
  {
    index: "IV",
    title: "Valor que también llega al equipo",
    text: "La eficiencia no basta si aumenta la vigilancia, oculta trabajo o degrada la experiencia de quien usa el sistema.",
  },
  {
    index: "V",
    title: "No automatizar también es una decisión",
    text: "Si el riesgo, la ambigüedad o el valor humano del momento lo exigen, recomendamos mantenerlo en manos de una persona.",
  },
] as const;

export const audienceSignals = [
  "Academias y bootcamps",
  "Empresas educativas",
  "Equipos con conversaciones de alto volumen",
  "Operaciones con conocimiento disperso",
] as const;
