import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "./motion";

type Errors = Partial<Record<"nombre" | "correo" | "proceso", string>>;

const genericos = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "icloud.com"];

export function Contacto() {
  const [values, setValues] = useState({ nombre: "", correo: "", proceso: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (values.nombre.trim().length < 2) e.nombre = "Escribe tu nombre (mínimo 2 caracteres).";
    const correo = values.correo.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo)) e.correo = "Ingresa un correo válido.";
    else if (genericos.includes(correo.split("@")[1] ?? ""))
      e.correo = "Usa tu correo corporativo, por favor.";
    if (values.proceso.trim().length < 10)
      e.proceso = "Cuéntanos brevemente el proceso (mínimo 10 caracteres).";
    return e;
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setValues({ nombre: "", correo: "", proceso: "" });
    }
  }

  const field =
    "mt-2 w-full border border-tierra/30 bg-luz px-4 py-3.5 text-base text-tinta placeholder:text-tinta/40 transition-colors duration-200 focus:border-alma focus:outline-none";

  return (
    <section id="contacto" className="grain relative bg-papel py-24 md:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 px-6 md:grid-cols-12 lg:px-16">
        <Reveal className="md:col-span-5">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-alma uppercase">
            Un cambio pequeño que se nota
          </p>
          <h2 className="font-display mt-6 text-[clamp(2.2rem,4.6vw,4rem)] leading-[1] font-semibold tracking-[-0.02em] text-tierra">
            ¿Empezamos por mapear tu proceso?
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-tinta/80">
            No necesitas saber qué agente quieres. Empieza por contarnos qué le está quitando tiempo
            a tu equipo.
          </p>
          <span className="mt-10 block h-px w-24 bg-alma" aria-hidden />
        </Reveal>

        <Reveal className="md:col-span-6 md:col-start-7" delay={0.12}>
          <div className="border border-tierra/25 bg-luz p-7 md:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  role="status"
                  className="flex flex-col items-start gap-4 py-10"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-alma text-luz">
                    <Check className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-tierra">
                    Gracias, lo tenemos.
                  </h3>
                  <p className="text-base leading-relaxed text-tinta/80">
                    Revisaremos lo que nos contaste y volveremos con preguntas sobre el proceso,
                    no con una demo genérica.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-2 text-sm font-semibold text-alma underline underline-offset-4"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="nombre" className="text-sm font-semibold text-tierra">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      autoComplete="name"
                      value={values.nombre}
                      onChange={(e) => setValues((v) => ({ ...v, nombre: e.target.value }))}
                      aria-invalid={!!errors.nombre}
                      aria-describedby={errors.nombre ? "err-nombre" : undefined}
                      className={field}
                      placeholder="Tu nombre"
                      maxLength={100}
                    />
                    {errors.nombre && (
                      <p id="err-nombre" className="mt-2 text-sm text-alma">
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="correo" className="text-sm font-semibold text-tierra">
                      Correo corporativo
                    </label>
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      autoComplete="email"
                      value={values.correo}
                      onChange={(e) => setValues((v) => ({ ...v, correo: e.target.value }))}
                      aria-invalid={!!errors.correo}
                      aria-describedby={errors.correo ? "err-correo" : undefined}
                      className={field}
                      placeholder="nombre@empresa.com"
                      maxLength={255}
                    />
                    {errors.correo && (
                      <p id="err-correo" className="mt-2 text-sm text-alma">
                        {errors.correo}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="proceso" className="text-sm font-semibold text-tierra">
                      Proceso a explorar
                    </label>
                    <textarea
                      id="proceso"
                      name="proceso"
                      rows={4}
                      value={values.proceso}
                      onChange={(e) => setValues((v) => ({ ...v, proceso: e.target.value }))}
                      aria-invalid={!!errors.proceso}
                      aria-describedby={errors.proceso ? "err-proceso" : undefined}
                      className={`${field} resize-none`}
                      placeholder="¿Qué tarea repetitiva le quita horas a tu equipo?"
                      maxLength={1000}
                    />
                    {errors.proceso && (
                      <p id="err-proceso" className="mt-2 text-sm text-alma">
                        {errors.proceso}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-5 pt-2">
                    <button
                      type="submit"
                      className="rounded-full bg-alma px-8 py-3.5 text-sm font-semibold text-luz transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Enviar
                    </button>
                    <a
                      href="#metodo"
                      className="text-sm font-semibold text-tierra underline underline-offset-4 transition-colors hover:text-alma"
                    >
                      Agendar conversación
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: "Filosofía", href: "#filosofia" },
    { label: "Capacidades", href: "#capacidades" },
    { label: "Casos", href: "#casos" },
    { label: "Contacto", href: "#contacto" },
    { label: "LinkedIn", href: "https://www.linkedin.com" },
  ];

  return (
    <footer className="bg-tinta text-luz">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-16">
        <span className="block h-px w-20 bg-alma" aria-hidden />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-3xl font-semibold tracking-tight text-luz md:text-4xl">
              Soul Labs
            </p>
            <p className="mt-4 max-w-md text-base text-luz/70">
              Soul Labs — tecnología que avanza con las personas.
            </p>
          </div>
          <nav aria-label="Pie de página" className="md:col-span-4 md:col-start-9">
            <ul className="grid grid-cols-2 gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-luz/75 transition-colors hover:text-alma"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-16 border-t border-luz/15 pt-6 text-xs tracking-wide text-luz/50">
          © {year} Soul Labs. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
