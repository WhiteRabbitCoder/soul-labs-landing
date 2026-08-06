import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  inverse?: boolean;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <header className={`section-heading${inverse ? " section-heading--inverse" : ""}`}>
      <div className="section-heading__index" aria-hidden="true">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading__content">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}
