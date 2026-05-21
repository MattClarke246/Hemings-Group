"use client";

import { Children, type ReactNode } from "react";
import Reveal from "./Reveal";

export default function RevealGroup({
  children,
  className = "",
  stagger = 120,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  direction?: "up" | "left" | "right" | "scale";
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, i) => (
        <Reveal key={i} delay={i * stagger} direction={direction}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
