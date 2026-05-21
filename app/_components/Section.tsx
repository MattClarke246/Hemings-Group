import type { ReactNode } from "react";

type SectionTone = "default" | "glass" | "ivory" | "obsidian";

const toneClass: Record<SectionTone, string> = {
  default: "",
  glass: "glass-panel",
  ivory: "ivory-panel",
  obsidian: "obsidian-splash",
};

export default function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 md:py-36 lg:py-40 ${toneClass[tone]} ${className}`}
    >
      {children}
    </section>
  );
}
