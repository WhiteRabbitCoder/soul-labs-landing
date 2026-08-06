import { motion } from "framer-motion";
import { Reveal, StaggerGroup, revealVariants } from "./motion";

const casos = [
  {
    n: "01",
    t: "Contacto y agendamiento a gran escala",
    tags: ["EN PRODUCCIÓN", "SUPERVISIÓN HUMANA"],
    funciono: "Un agente sostuvo el contacto inicial y la coordinación de agenda con contexto.",
    fallo: "Los primeros guiones eran rígidos y no reconocían bien cuándo detenerse.",
    aprendimos:
      "Diseñamos límites explícitos, rutas de escalamiento y registro de cada conversación.",
  },
  {
    n: "02",
    t: "Selección asistida con comparación de perfiles y entrevistas estructuradas",
    tags: ["APRENDIZAJE", "SUPERVISIÓN HUMANA"],
    funciono: "Estructurar la conversación y ordenar la información hizo comparables los perfiles.",
    fallo: "Sin criterios claros, la asistencia generaba ruido en lugar de claridad.",
    aprendimos: "La decisión permanece humana; la IA prepara, organiza y explica lo que observó.",
  },
];

export function Casos() {
  return (
    <section id="casos" className="scroll-mt-28 border-b border-tierra/15 py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-alma uppercase">
            Casos / aprendizaje real
          </p>
          <h2 className="font-display mt-6 text-[clamp(2rem,4.4vw,3.8rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-tierra">
            Lo que funcionó. Lo que falló. Lo que aprendimos.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-tinta/80">
            Implementaciones iniciales que nos ayudaron a construir método y capacidades aplicables
            a otros procesos empresariales.
          </p>
        </Reveal>

        <StaggerGroup as="ul" className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {casos.map((c) => (
            <motion.li
              key={c.n}
              variants={revealVariants}
              className="group flex flex-col border border-tierra/25 bg-luz p-8 transition-colors duration-300 hover:border-alma md:p-10"
            >
              <div className="flex flex-wrap items-center gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-tierra/30 px-3 py-1 text-[10px] tracking-[0.22em] text-tierra/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="font-display mt-8 text-sm tracking-[0.3em] text-alma">{c.n}</span>
              <h3 className="font-display mt-3 text-2xl leading-tight font-semibold text-tierra md:text-3xl">
                {c.t}
              </h3>
              <dl className="mt-8 space-y-5 border-t border-tierra/15 pt-6">
                {[
                  ["Funcionó", c.funciono],
                  ["Falló", c.fallo],
                  ["Aprendimos", c.aprendimos],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-1 gap-1 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-4">
                    <dt className="text-[11px] tracking-[0.2em] text-tierra/60 uppercase">{k}</dt>
                    <dd className="text-base leading-relaxed text-tinta/80">{v}</dd>
                  </div>
                ))}
              </dl>
            </motion.li>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

const pasos = [
  ["01", "Escuchar"],
  ["02", "Mapear"],
  ["03", "Cocrear"],
  ["04", "Pilotar"],
  ["05", "Medir"],
  ["06", "Mejorar"],
];

export function Metodo() {
  return (
    <section id="metodo" className="scroll-mt-28 border-b border-tierra/15 bg-tinta py-24 text-luz md:py-36">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-alma uppercase">Método</p>
          <h2 className="font-display mt-6 text-[clamp(2rem,4vw,3.4rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-luz">
            Una ruta corta, honesta y medible.
          </h2>
        </Reveal>

        <StaggerGroup
          as="ol"
          className="mt-16 grid grid-cols-1 gap-px bg-luz/15 sm:grid-cols-2 lg:grid-cols-6"
        >
          {pasos.map(([n, t]) => (
            <motion.li
              key={n}
              variants={revealVariants}
              className="group relative bg-tinta p-7 transition-colors duration-300 hover:bg-tierra"
            >
              <span className="font-display text-sm tracking-[0.25em] text-alma">{n}</span>
              <p className="font-display mt-8 text-xl font-semibold text-luz">{t}</p>
              <span className="mt-6 block h-px w-6 bg-luz/30 transition-all duration-500 group-hover:w-14 group-hover:bg-alma" />
            </motion.li>
          ))}
        </StaggerGroup>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="text-lg leading-relaxed text-luz/85">
              La primera reunión se centra en el problema, no en una demo genérica.
            </p>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8" delay={0.1}>
            <p className="border-l-2 border-alma pl-5 text-lg leading-relaxed text-luz/70">
              También sabemos decir: esto no deberíamos automatizarlo.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
