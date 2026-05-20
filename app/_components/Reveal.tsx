"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "scale" | "clip";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: RevealDirection;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              node.setAttribute("data-reveal", "visible");
            }, delay);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      data-reveal="hidden"
      data-reveal-dir={direction}
      className={className}
    >
      {children}
    </div>
  );
}
