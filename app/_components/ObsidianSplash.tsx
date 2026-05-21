import type { ReactNode } from "react";
import Container from "./Container";
import GoldSplash from "./GoldSplash";

export default function ObsidianSplash({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`obsidian-splash relative overflow-hidden py-24 sm:py-32 md:py-44 ${className}`}>
      <GoldSplash className="pointer-events-none absolute -right-20 top-1/2 hidden w-[min(50vw,420px)] -translate-y-1/2 opacity-40 md:block" />
      <Container className="relative z-10">{children}</Container>
    </section>
  );
}
