import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Filosofía", href: "#filosofia" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Casos", href: "#casos" },
  { label: "Método", href: "#metodo" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Principal"
        className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-tierra/20 bg-luz/80 px-4 py-2.5 shadow-[0_18px_40px_-24px_oklch(0.348_0.055_45.5_/_55%)] backdrop-blur-xl sm:px-6"
      >
        <a
          href="#top"
          className="flex min-w-0 shrink-0 items-center gap-2 text-tierra"
          aria-label="Soul Labs, inicio"
        >
          <span className="grid size-6 shrink-0 place-items-center rounded-full border border-tierra/40">
            <span className="size-1.5 rounded-full bg-alma" />
          </span>
          <span className="font-display truncate text-lg font-semibold tracking-tight">
            Soul Labs
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-tinta/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-alma after:transition-transform after:duration-300 hover:text-tierra hover:after:origin-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden rounded-full bg-tierra px-5 py-2.5 text-sm font-semibold text-luz transition-colors duration-300 hover:bg-alma sm:inline-block"
          >
            Hablar con nosotros
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center rounded-full border border-tierra/25 text-tierra transition-colors hover:border-alma md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
            className="mx-auto mt-3 w-full max-w-4xl rounded-3xl border border-tierra/20 bg-luz/95 p-5 shadow-xl backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-tinta transition-colors hover:bg-papel hover:text-tierra"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-tierra px-5 py-3 text-center text-sm font-semibold text-luz transition-colors hover:bg-alma"
                >
                  Hablar con nosotros
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
