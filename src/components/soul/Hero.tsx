import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Chimera } from "./Chimera";

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -48]);
  const parallaxSlow = useTransform(scrollY, [0, 600], [0, reduced ? 0 : 26]);

  return (
    <section
      id="top"
      className="grain relative overflow-hidden border-b border-tierra/15 pt-32 pb-20 md:flex md:min-h-screen md:items-center md:pt-40 md:pb-24"
    >
      <div className="halftone pointer-events-none absolute inset-x-0 top-0 h-64 opacity-60" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-12 md:gap-8 lg:px-16">
        <motion.div
          style={{ y: parallaxSlow }}
          className="md:col-span-7 lg:col-span-6 lg:col-start-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-tierra/70 uppercase">
            <span className="h-px w-10 bg-alma" aria-hidden />
            Soul Labs / IA aplicada / 2026
          </p>

          <h1 className="font-display mt-8 text-[clamp(3rem,7.6vw,7rem)] leading-[0.92] font-semibold tracking-[-0.03em] text-tierra">
            Más tiempo
            <br />
            para lo{" "}
            <span className="relative inline-block whitespace-nowrap">
              humano
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-alma md:h-[5px]"
              />
              <span className="text-alma">.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-tinta/85 md:text-xl">
            Diseñamos agentes, productos y software de IA que recuperan las horas de tu equipo sin
            retirar el criterio humano.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-alma px-7 py-4 text-sm font-semibold text-luz transition-transform duration-300 hover:-translate-y-0.5"
            >
              Cuéntanos qué te quita tiempo
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center rounded-full border border-tierra/35 px-7 py-4 text-sm font-semibold text-tierra transition-colors duration-300 hover:border-alma hover:text-alma"
            >
              Mira cómo trabajamos
            </a>
          </div>

          <p className="mt-12 flex items-center gap-3 text-sm text-tinta/60">
            <span className="size-1.5 rounded-full bg-alma" aria-hidden />
            Tecnología que avanza con las personas
          </p>
        </motion.div>

        <motion.div
          style={{ y: parallax }}
          className="relative md:col-span-5 lg:col-span-5 lg:col-start-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute -top-6 -left-8 hidden h-40 w-40 border border-tierra/25 lg:block" aria-hidden />
          <Chimera className="relative mx-auto w-full max-w-[520px]" />
          <div className="pointer-events-none absolute -right-6 -bottom-8 hidden h-24 w-24 rounded-full border border-alma/50 lg:block" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
