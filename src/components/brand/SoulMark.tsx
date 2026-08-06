import { Link } from "@tanstack/react-router";

import wordmark from "@/assets/brand/vectors/soul-labs-wordmark.svg";

type SoulMarkProps = {
  inverse?: boolean;
};

export function SoulMark({ inverse = false }: SoulMarkProps) {
  return (
    <Link
      to="/"
      className={`soul-mark${inverse ? " soul-mark--inverse" : ""}`}
      aria-label="Soul Labs, ir al inicio"
    >
      <img src={wordmark} alt="" aria-hidden="true" draggable={false} />
    </Link>
  );
}
