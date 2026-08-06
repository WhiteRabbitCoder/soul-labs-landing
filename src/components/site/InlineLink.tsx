import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { SiteRoute } from "@/content/site";

type InlineLinkProps = {
  to: SiteRoute["href"];
  children: string;
  inverse?: boolean;
};

export function InlineLink({ to, children, inverse = false }: InlineLinkProps) {
  return (
    <Link to={to} className={`inline-link${inverse ? " inline-link--inverse" : ""}`}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}
