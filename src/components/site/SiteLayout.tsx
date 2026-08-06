import { Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export function SiteLayout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const frame = requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <div key={pathname} className="route-document">
          <Outlet />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
