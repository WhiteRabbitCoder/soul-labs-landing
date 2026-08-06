import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { SoulMark } from "@/components/brand/SoulMark";
import { siteRoutes } from "@/content/site";

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);
  const downwardTravel = useRef(0);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    setOpen(false);
    setHidden(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const updateHeader = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollY.current;

      setScrolled(currentScrollY > 12);

      if (open || currentScrollY < 360) {
        downwardTravel.current = 0;
        setHidden(false);
      } else if (delta > 2) {
        downwardTravel.current += delta;

        if (currentScrollY > 520 && downwardTravel.current > 180) {
          setHidden(true);
        }
      } else if (delta < -2) {
        downwardTravel.current = 0;
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
      animationFrame.current = null;
    };

    const onScroll = () => {
      if (animationFrame.current === null) {
        animationFrame.current = window.requestAnimationFrame(updateHeader);
      }
    };

    lastScrollY.current = window.scrollY;
    setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [open]);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${hidden && !open ? " is-hidden" : ""}`}
      onFocusCapture={() => setHidden(false)}
    >
      <div className="shell site-header__inner">
        <SoulMark />

        <nav className="desktop-nav" aria-label="Navegación principal">
          {siteRoutes.slice(1, -1).map((route) => {
            const active = pathname === route.href;
            return (
              <Link
                key={route.href}
                to={route.href}
                className={active ? "is-active" : ""}
                aria-current={active ? "page" : undefined}
              >
                <span aria-hidden="true">{route.index}</span>
                {route.shortLabel}
              </Link>
            );
          })}
        </nav>

        <Link to="/contacto" className="header-contact">
          Hablemos
          <ArrowUpRight aria-hidden="true" />
        </Link>

        <button
          ref={triggerRef}
          type="button"
          className="menu-trigger"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar navegación" : "Abrir navegación"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${open ? " is-open" : ""}`}
        aria-label="Navegación móvil"
        hidden={!open}
      >
        <div className="shell mobile-nav__inner">
          {siteRoutes.map((route) => {
            const active = pathname === route.href;
            return (
              <Link
                key={route.href}
                to={route.href}
                className={active ? "is-active" : ""}
                aria-current={active ? "page" : undefined}
              >
                <span>{route.index}</span>
                <strong>{route.label}</strong>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
