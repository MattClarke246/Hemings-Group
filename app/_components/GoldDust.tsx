"use client";

import { useEffect, useState } from "react";

/**
 * Ambient hero particles — desktop only (SVG filters + many animations stall mobile GPUs).
 */
export default function GoldDust() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const update = () => setShow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!show) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40"
      aria-hidden="true"
    >
      <div className="gold-dust-layer" />
    </div>
  );
}
