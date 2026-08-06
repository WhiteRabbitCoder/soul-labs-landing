import { motion, useReducedMotion } from "framer-motion";
import { Reveal, StaggerGroup, revealVariants } from "./motion";

const piezas = [
  { t: "Procesos que empiezan de nuevo.", cls: "md:col-span-5 md:col-start-1 md:mt-0" },
  { t: "Horas consumidas antes del trabajo que importa.", cls: "md:col-span-4 md:col-start-8 md:mt-16" },
  { t: "Información dispersa y seguimiento manual.", cls: "md:col-span-4 md:col-start-2 md:-mt-4" },
  { t: "Sistemas que escalan volumen, pero no contexto.", cls: "md:col-span-5 md:col-start-7 md:-mt-6" },
];

export function Problema() {
  const reduced = useReducedMotion();
  return (
    <section className="grain relative overflow-hidden border-b border-tierra/15 bg-papel py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-tierra/60 uppercase">
            El problema
          </p>
          <h2 className="font-display mt-6 max-w-3xl text-[clamp(2.2rem,5vw,4.4rem)] leading-[1] font-semibold tracking-[-0.02em] text-tierra">
            Hay talento atrapado en la repetición.
          </h2>
        </Reveal>

        <div className="relative mt-16 md:mt-24">
          {/* big conceptual element */}
          <motion.span
            aria-hidden
            className="font-display pointer-events-none absolute -top-10 right-0 hidden text-[16rem] leading-none font-semibold text-tierra/8 select-none lg:block"
            animate={reduced ? {} : { opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            HRS
          </motion.span>

          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            aria-hidden
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              d="M18 16 L72 34 L26 56 L78 74"
              className="stroke-alma/50"
              strokeWidth="0.25"
              fill="none"
              strokeDasharray="1 1.4"
            />
          </svg>

          <StaggerGroup as="ul" className="relative grid grid-cols-1 gap-6 md:grid-cols-12">
            {piezas.map((p, i) => (
              <motion.li
                key={p.t}
                variants={revealVariants}
                whileHover={reduced ? undefined : { y: -6 }}
                className={`group relative border border-tierra/25 bg-luz p-7 shadow-[0_20px_50px_-40px_oklch(0.348_0.055_45.5_/_80%)] transition-colors duration-300 hover:border-alma md:p-9 ${p.cls}`}
              >
                <span className="absolute -top-2.5 left-6 bg-papel px-2 text-[11px] tracking-[0.22em] text-alma">
                  0{i + 1}
                </span>
                <p className="font-display text-xl leading-snug text-tierra md:text-2xl">{p.t}</p>
                <span className="absolute right-5 bottom-5 size-1.5 rounded-full bg-alma opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.li>
            ))}
          </StaggerGroup>
        </div>

        <Reveal className="mt-16 flex items-center gap-4" delay={0.1}>
          <span className="h-px w-16 bg-alma" aria-hidden />
          <p className="text-sm tracking-[0.2em] text-tierra/70 uppercase">Horas recuperables</p>
        </Reveal>
      </div>
    </section>
  );
}
