import { motion } from "framer-motion";
import { Reveal, StaggerGroup, revealVariants } from "./motion";

const arquetipos = [
  {
    n: "El Sabio",
    t: "Supervisión diseñada",
    d: "IA que guía, explica e investiga, pero deja la decisión en tus manos.",
  },
  {
    n: "El Cuidador",
    t: "Transparencia y límites",
    d: "Las personas saben cuándo hablan con IA y siempre existe una ruta de escalamiento.",
  },
  {
    n: "El Creador",
    t: "Experimentación con propósito",
    d: "Combinamos investigación y software para convertir problemas singulares en soluciones nuevas.",
  },
];

export function Diferenciales() {
  return (
    <section className="border-b border-tierra/15 bg-papel py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-tierra/60 uppercase">
            Diferenciales
          </p>
          <h2 className="font-display mt-6 text-[clamp(2rem,4vw,3.4rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-tierra">
            Tres maneras de estar presentes.
          </h2>
        </Reveal>

        <StaggerGroup as="ul" className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {arquetipos.map((a, i) => (
            <motion.li
              key={a.n}
              variants={revealVariants}
              className={`group relative flex flex-col border-t-2 border-tierra/60 bg-luz p-8 transition-all duration-500 hover:border-alma md:p-10 ${
                i === 1 ? "md:mt-12" : i === 2 ? "md:mt-24" : ""
              }`}
            >
              <span className="font-display text-xs tracking-[0.3em] text-alma uppercase">
                {a.n}
              </span>
              <h3 className="font-display mt-6 text-2xl leading-tight font-semibold text-tierra md:text-[1.9rem]">
                {a.t}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-tinta/80">{a.d}</p>
              <span className="mt-8 block h-px w-10 bg-tierra/30 transition-all duration-500 group-hover:w-24 group-hover:bg-alma" />
            </motion.li>
          ))}
        </StaggerGroup>

        <Reveal className="mt-20" delay={0.1}>
          <div className="grid grid-cols-1 items-center gap-8 border border-tierra/25 bg-luz p-8 md:grid-cols-12 md:p-12">
            <h3 className="font-display md:col-span-4 text-2xl leading-tight font-semibold text-tierra md:text-3xl">
              Continuidad inteligente
            </h3>
            <p className="md:col-span-7 md:col-start-6 text-lg leading-relaxed text-tinta/80">
              El sistema registra, conserva contexto, reintenta, coordina el siguiente paso y busca
              completar el proceso, en lugar de abandonarlo a la mitad.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
