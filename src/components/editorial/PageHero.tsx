import type { ReactNode } from "react";

type PageHeroProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
  art?: ReactNode;
  tone?: "light" | "paper" | "dark" | "orange";
  footer?: ReactNode;
};

export function PageHero({
  index,
  eyebrow,
  title,
  lead,
  art,
  tone = "light",
  footer,
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${tone}`} aria-labelledby="page-title">
      <div className="shell page-hero__grid">
        <div className="page-hero__copy">
          <p className="chapter-label">
            <span aria-hidden="true">{index}</span>
            {eyebrow}
          </p>
          <h1 id="page-title">{title}</h1>
          <p className="page-hero__lead">{lead}</p>
        </div>
        {art ? <div className="page-hero__art">{art}</div> : null}
        {footer ? <div className="page-hero__footer">{footer}</div> : null}
      </div>
    </section>
  );
}
