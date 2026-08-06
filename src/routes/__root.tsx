import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { SoulMark } from "@/components/brand/SoulMark";
import { SiteLayout } from "@/components/site/SiteLayout";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import favicon from "@/assets/brand/vectors/favicon-moon.svg";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  useEffect(() => {
    document.title = "Página no encontrada — Soul Labs";
  }, []);

  return (
    <main className="system-page">
      <SoulMark />
      <div className="system-page__code" aria-hidden="true">
        404
      </div>
      <p className="chapter-label">
        <span>Fuera de mapa</span>Página no encontrada
      </p>
      <h1>Esta ruta no forma parte del laboratorio.</h1>
      <p>Puede que el documento haya cambiado de lugar o que la dirección no exista.</p>
      <Link to="/" className="system-page__action">
        Volver al inicio
      </Link>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="system-page">
      <SoulMark />
      <div className="system-page__code" aria-hidden="true">
        ERR
      </div>
      <p className="chapter-label">
        <span>Interrupción</span>Error inesperado
      </p>
      <h1>Este documento no pudo abrirse.</h1>
      <p>Podemos volver a intentarlo o regresar a un punto conocido.</p>
      <div className="system-page__actions">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="system-page__action"
        >
          Intentar de nuevo
        </button>
        <Link to="/" className="system-page__action system-page__action--secondary">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<Record<string, never>>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { title: "Soul Labs — Inteligencia artificial con criterio humano" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Soul Labs" },
      { name: "theme-color", content: "#FBF7F0" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Soul Labs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: favicon, type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-CO">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <SiteLayout />;
}
