import { motion } from "framer-motion";
import { Reveal, StaggerGroup, revealVariants } from "./motion";

const lineas = [
  "Nuestros agentes no fingen ser humanos.",
  "Escuchan, organizan, explican, reconocen sus límites",
  "y piden ayuda cuando corresponde.",
];

const principios = [
  "La decisión humana permanece cuando importa.",
  "Si no lo sabe, no lo inventa.",
  "Automatizamos lo que deja a las personas en una mejor posición.",
];

export function Manifiesto() {
  return (
    <section className="grain relative overflow-hidden bg-tierra py-28 text-luz md:py-44">
      <div
        className="halftone pointer-events-none absolute inset-0 opacity-25"
        style={{ ["--halftone-color" as string]: "oklch(0.976 0.014 85.5 / 30%)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-16 px-6 md:grid-cols-12 lg:px-16">
        <Reveal className="md:col-span-7">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-alma uppercase">
            Manifiesto
          </p>
          <h2 className="font-display mt-8 text-[clamp(2.4rem,5.8vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-luz">
            IA con humanos, no IA en vez de humanos.
          </h2>
        </Reveal>

        <div className="md:col-span-4 md:col-start-9">
          <StaggerGroup className="space-y-2">
            {lineas.map((l) => (
              <motion.p
                key={l}
                variants={revealVariants}
                className="text-lg leading-relaxed text-luz/85"
              >
                {l}
              </motion.p>
            ))}
          </StaggerGroup>

          <Reveal className="mt-12" delay={0.1}>
            <span className="block h-[3px] w-20 bg-alma" aria-hidden />
          </Reveal>

          <StaggerGroup as="ul" className="mt-10 space-y-6">
            {principios.map((p, i) => (
              <motion.li key={p} variants={revealVariants} className="flex gap-4">
                <span className="font-display shrink-0 text-sm text-alma">0{i + 1}</span>
                <span className="text-base leading-relaxed text-luz/80">{p}</span>
              </motion.li>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
