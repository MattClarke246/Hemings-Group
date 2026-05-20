import type { ReactNode } from "react";
import GlassCard from "./GlassCard";

export default function NumeralCard({
  numeral,
  eyebrow,
  title,
  children,
}: {
  numeral: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <GlassCard className="flex h-full flex-col">
      <span
        className="display gold-text mb-6 block"
        style={{ fontSize: "var(--t-numeral)", lineHeight: 1 }}
        aria-hidden="true"
      >
        {numeral}
      </span>
      <span className="smallcaps text-text-gold mb-3 block">{eyebrow}</span>
      <h3
        className="display mb-5 text-text-primary"
        style={{ fontSize: "var(--t-h3)" }}
      >
        {title}
      </h3>
      <p className="text-text-secondary leading-[1.75]">{children}</p>
    </GlassCard>
  );
}
