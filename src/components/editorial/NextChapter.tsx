import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { SiteRoute } from "@/content/site";

type NextChapterProps = {
  route: SiteRoute;
  prompt: string;
  title: string;
};

export function NextChapter({ route, prompt, title }: NextChapterProps) {
  return (
    <section className="next-chapter" aria-label="Siguiente capítulo">
      <Link to={route.href} className="shell next-chapter__link">
        <span className="next-chapter__meta">
          <span>{route.index}</span>
          {prompt}
        </span>
        <strong>{title}</strong>
        <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  );
}
