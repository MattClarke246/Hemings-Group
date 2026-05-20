import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`smallcaps inline-flex items-center gap-3 ${
        dark ? "text-[var(--text-gold-dark)]" : "text-text-gold"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-block h-px w-8 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
      />
      {children}
    </span>
  );
}
