"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ParallaxMarble({
  children,
  speed = 0.35,
}: {
  children: ReactNode;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const section = node.parentElement;
    if (!section) return;

    let rafId = 0;
    let pending = false;

    const update = () => {
      pending = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const distance = center - vh / 2;
      const offset = -distance * speed;
      node.style.setProperty("--parallax-y", `${offset}px`);
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={ref} className="parallax-marble">
      {children}
    </div>
  );
}
