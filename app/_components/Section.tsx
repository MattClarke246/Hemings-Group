import type { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  id,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 lg:py-40 ${
        dark ? "bg-navy-950 text-[var(--text-primary-dark)]" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
