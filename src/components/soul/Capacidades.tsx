import { motion } from "framer-motion";
import { Reveal, StaggerGroup, revealVariants } from "./motion";

const bloques = [
  {
    k: "A",
    t: "Agentes que conversan y actúan",
    d: "Voz, chat, contacto, clasificación, agenda, soporte y seguimiento con contexto.",
    tags: ["Servicio", "Operaciones", "Conocimiento interno"],
  },
  {
    k: "B",
    t: "Software que entiende el proceso",
    d: "Aplicaciones y plataformas a medida donde la IA forma parte del sistema, no un chatbot pegado al final.",
    tags: ["Logística", "Ventas consultivas", "Operaciones"],
  },
  {
    k: "C",
    t: "Productos que nacen en producción",
    d: "Detectamos patrones repetibles, medimos qué funciona y los convertimos en módulos o productos escalables.",
    tags: ["Talento", "Servicio", "Conocimiento interno"],
  },
];

function Visual({ k }: { k: string }) {
  return (
    <div className="relative aspect-[5/4] w-full border border-tierra/25 bg-papel">
      <div className="halftone absolute inset-0 opacity-70" aria-hidden />
      <svg viewBox="0 0 200 160" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
        {k === "A" && (
          <>
            <rect x="24" y="30" width="84" height="46" rx="2" className="fill-luz stroke-tierra/60" />
            <rect x="92" y="86" width="84" height="46" rx="2" className="fill-luz stroke-tierra/60" />
            <path d="M40 46 h50 M40 56 h34" className="stroke-tierra/45" />
            <path d="M108 100 h50 M108 110 h30" className="stroke-tierra/45" />
            <path d="M66 76 v20 h26" className="stroke-alma" strokeDasharray="3 4" />
            <circle cx="176" cy="30" r="7" className="fill-alma" />
          </>
        )}
        {k === "B" && (
          <>
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}${c}`}
                  x={20 + c * 42}
                  y={24 + r * 42}
                  width="32"
                  height="32"
                  className={r === 1 && c === 2 ? "fill-alma/20 stroke-alma" : "stroke-tierra/45"}
                />
              )),
            )}
            <path d="M20 132 h160" className="stroke-tierra/60" />
          </>
        )}
        {k === "C" && (
          <>
            <circle cx="100" cy="80" r="58" className="stroke-tierra/40" strokeDasharray="2 7" />
            <circle cx="100" cy="80" r="34" className="stroke-tierra/60" />
            <circle cx="100" cy="80" r="10" className="fill-alma" />
            <path d="M100 22 v-12 M100 138 v12 M42 80 h-12 M158 80 h12" className="stroke-tierra/50" />
          </>
        )}
      </svg>
      <span className="font-display absolute bottom-3 left-4 text-xs tracking-[0.25em] text-tierra/60">
        FIG. {k}
      </span>
    </div>
  );
}

export function Capacidades() {
  return (
    <section id="capacidades" className="scroll-mt-28 border-b border-tierra/15 py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-alma uppercase">
            Capacidades
          </p>
          <h2 className="font-display mt-6 text-[clamp(2rem,4vw,3.4rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-tierra">
            Tres formas de llevar IA a un proceso real.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-24 md:space-y-32">
          {bloques.map((b, i) => (
            <Reveal key={b.k}>
              <article className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
                <div
                  className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2 md:col-start-8" : "md:col-start-1"}`}
                >
                  <Visual k={b.k} />
                </div>
                <div
                  className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}
                >
                  <span className="font-display text-sm tracking-[0.3em] text-alma">{b.k}</span>
                  <h3 className="font-display mt-4 text-[clamp(1.8rem,3.2vw,2.8rem)] leading-[1.06] font-semibold text-tierra">
                    {b.t}
                  </h3>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-tinta/80">{b.d}</p>
                  <StaggerGroup as="ul" className="mt-7 flex flex-wrap gap-2">
                    {b.tags.map((t) => (
                      <motion.li
                        key={t}
                        variants={revealVariants}
                        className="rounded-full border border-tierra/25 px-4 py-1.5 text-xs tracking-wide text-tierra/80 transition-colors duration-300 hover:border-alma hover:text-alma"
                      >
                        {t}
                      </motion.li>
                    ))}
                  </StaggerGroup>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
