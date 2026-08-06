import { motion } from "framer-motion";
import { Reveal, StaggerGroup, revealVariants } from "./motion";

const capacidades = [
  {
    n: "01",
    t: "Agentes conversacionales",
    d: "Voz, chat y canales de atención con contexto y trazabilidad.",
  },
  {
    n: "02",
    t: "Automatización inteligente",
    d: "Flujos, seguimiento y toma asistida de decisiones.",
  },
  {
    n: "03",
    t: "Productos de IA",
    d: "Herramientas configurables que nacen de patrones reales.",
  },
  {
    n: "04",
    t: "Software a medida",
    d: "Plataformas completas con IA integrada al negocio.",
  },
];

function Diagram({ i }: { i: number }) {
  const common = "stroke-tierra/55";
  return (
    <svg viewBox="0 0 120 80" className="h-16 w-28" fill="none" aria-hidden>
      {i === 0 && (
        <>
          <rect x="4" y="10" width="52" height="34" rx="2" className={common} />
          <rect x="62" y="34" width="52" height="34" rx="2" className={common} />
          <path d="M30 44 L30 56 L62 56" className="stroke-alma" strokeDasharray="3 4" />
        </>
      )}
      {i === 1 && (
        <>
          <circle cx="18" cy="40" r="10" className={common} />
          <circle cx="60" cy="24" r="10" className={common} />
          <circle cx="102" cy="52" r="10" className="stroke-alma" />
          <path d="M28 38 L50 27 M70 27 L92 48" className={common} strokeDasharray="3 4" />
        </>
      )}
      {i === 2 && (
        <>
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <circle
                key={`${r}-${c}`}
                cx={12 + c * 24}
                cy={14 + r * 18}
                r={r === 1 && c === 3 ? 5 : 2.4}
                className={r === 1 && c === 3 ? "fill-alma" : "fill-tierra/40"}
              />
            )),
          )}
        </>
      )}
      {i === 3 && (
        <>
          <path d="M8 68 L8 12 L112 12" className={common} />
          <rect x="20" y="40" width="20" height="24" className={common} />
          <rect x="48" y="28" width="20" height="36" className={common} />
          <rect x="76" y="18" width="20" height="46" className="stroke-alma fill-alma/15" />
        </>
      )}
    </svg>
  );
}

export function QueHacemos() {
  return (
    <section id="filosofia" className="relative border-b border-tierra/15 py-24 md:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-6 md:grid-cols-12 lg:px-16">
        <Reveal className="md:col-span-5">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-alma uppercase">
            Laboratorio de IA aplicada
          </p>
          <h2 className="font-display mt-6 text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-tierra">
            Construimos la inteligencia que tu operación necesita.
          </h2>
        </Reveal>
        <Reveal className="self-end md:col-span-6 md:col-start-7" delay={0.15}>
          <p className="max-w-xl text-lg leading-relaxed text-tinta/80">
            No vendemos una automatización genérica. Entendemos el proceso, diseñamos la solución y
            la llevamos a producción con supervisión, trazabilidad y mejora continua.
          </p>
        </Reveal>
      </div>

      <StaggerGroup
        as="ul"
        className="mx-auto mt-20 grid w-full max-w-[1440px] grid-cols-1 gap-px border-y border-tierra/15 bg-tierra/15 px-0 sm:grid-cols-2 lg:grid-cols-4"
      >
        {capacidades.map((c, i) => (
          <motion.li
            key={c.n}
            variants={revealVariants}
            className={`group relative bg-luz p-8 transition-colors duration-300 hover:bg-papel lg:p-10 ${
              i % 2 === 1 ? "lg:pt-20" : ""
            }`}
          >
            <span className="font-display text-sm tracking-widest text-alma">{c.n}</span>
            <div className="mt-6 transition-transform duration-500 group-hover:-translate-y-1">
              <Diagram i={i} />
            </div>
            <h3 className="font-display mt-8 text-2xl leading-tight font-semibold text-tierra">
              {c.t}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-tinta/75">{c.d}</p>
            <span className="mt-6 block h-px w-0 bg-alma transition-all duration-500 group-hover:w-16" />
          </motion.li>
        ))}
      </StaggerGroup>
    </section>
  );
}
