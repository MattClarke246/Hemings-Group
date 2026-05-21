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
    <GlassCard className="flex h-full flex-col transition-transform duration-500 md:hover:-translate-y-1">
      <span
        className="display gold-text mb-6 block"
        style={{ fontSize: "var(--t-numeral)", lineHeight: 1 }}
        aria-hidden="true"
      >
        {numeral}
      </span>
      <span
        className="smallcaps mb-3 block"
        style={{ color: "var(--text-gold-dark)" }}
      >
        {eyebrow}
      </span>
      <h3
        className="display mb-5"
        style={{
          fontSize: "var(--t-h3)",
          color: "var(--text-primary-dark)",
        }}
      >
        {title}
      </h3>
      <p className="leading-[1.75]" style={{ color: "var(--text-secondary-dark)" }}>
        {children}
      </p>
    </GlassCard>
  );
}
