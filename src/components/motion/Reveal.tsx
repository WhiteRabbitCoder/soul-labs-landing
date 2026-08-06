import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
  delay?: number;
};

export function Reveal({ children, className = "", as = "div", delay = 0 }: RevealProps) {
  const Tag = as;
  const style = { "--reveal-delay": `${delay}s` } as CSSProperties;

  return (
    <Tag className={`editorial-reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
