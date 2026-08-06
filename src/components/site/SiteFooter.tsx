import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { SoulMark } from "@/components/brand/SoulMark";
import { siteRoutes } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__statement">
          <SoulMark inverse />
          <p>
            Inteligencia artificial para ampliar lo que las personas pueden hacer, no para retirar
            su criterio.
          </p>
        </div>

        <nav aria-label="Navegación del pie">
          <p className="footer-label">Capítulos</p>
          {siteRoutes.slice(1).map((route) => (
            <Link key={route.href} to={route.href}>
              <span>{route.index}</span>
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__contact">
          <p className="footer-label">Punto de partida</p>
          <Link to="/contacto" className="footer-cta">
            Cuéntanos qué te está quitando tiempo
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <p>No necesitas saber qué agente o herramienta quieres.</p>
        </div>
      </div>
      <div className="shell site-footer__base">
        <span>© {new Date().getFullYear()} Soul Labs</span>
        <span>IA con humanos, no en vez de humanos.</span>
      </div>
    </footer>
  );
}
