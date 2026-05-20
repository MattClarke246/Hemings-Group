"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  cx: number;
  cy: number;
  r: number;
  delay: number;
  duration: number;
  driftX: number;
  driftY: number;
};

export default function GoldDust({ count = 30 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate static particle metadata on mount to prevent SSR mismatch
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      cx: Math.random() * 100, // percentage based
      cy: Math.random() * 100,
      r: 0.6 + Math.random() * 1.4, // size in pixels
      delay: Math.random() * -20, // negative delay so they start animated
      duration: 15 + Math.random() * 20, // seconds
      driftX: -10 + Math.random() * 20,
      driftY: -15 - Math.random() * 25,
    }));
    setParticles(generated);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden opacity-60">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="dust-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff5d4" stopOpacity="1" />
            <stop offset="30%" stopColor="#e8c878" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8c6f30" stopOpacity="0" />
          </radialGradient>
        </defs>
        {particles.map((p) => (
          <circle
            key={p.id}
            r={p.r}
            fill="url(#dust-glow)"
            style={{
              transform: `translate(${p.cx}vw, ${p.cy}vh)`,
              animation: `float-dust-${p.id} ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </svg>
      <style jsx global>{`
        ${particles
          .map(
            (p) => `
          @keyframes float-dust-${p.id} {
            0% {
              transform: translate(${p.cx}vw, ${p.cy}vh) opacity(0.3);
            }
            10% {
              opacity: 0.8;
            }
            90% {
              opacity: 0.8;
            }
            100% {
              transform: translate(${p.cx + p.driftX}vw, ${p.cy + p.driftY}vh) opacity(0.3);
            }
          }
        `
          )
          .join("\n")}
      `}</style>
    </div>
  );
}
