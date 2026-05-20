"use client";

import NavyAgate from "./NavyAgate";
import GoldLeaf from "./GoldLeaf";

/**
 * Full-page fixed marble background — renders once behind everything.
 * Placed in layout.tsx so it persists across all pages with no flash.
 */
export default function MarbleBackground() {
  return (
    <div
      aria-hidden="true"
      className="marble-bg-fixed"
    >
      <NavyAgate intensity={1.1} />
      <GoldLeaf density={1.0} />
      {/* secondary gold leaf layer rotated for explosion coverage */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ transform: "rotate(180deg)", opacity: 0.45 }}
      >
        <defs>
          <linearGradient id="gradGoldLeaf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff5d4" />
            <stop offset="22%" stopColor="#f0d896" />
            <stop offset="42%" stopColor="#d4ae5a" />
            <stop offset="60%" stopColor="#8c6f30" />
            <stop offset="78%" stopColor="#d4ae5a" />
            <stop offset="100%" stopColor="#fff5d4" />
          </linearGradient>
          <filter id="leaf-glow-bg" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#leaf-glow-bg)">
          <path
            d="M 600 120 C 700 80, 820 140, 900 120 C 860 180, 780 200, 720 240 C 660 270, 580 250, 560 300 C 600 260, 680 220, 600 120 Z"
            fill="url(#gradGoldLeaf-bg)"
            opacity="0.9"
          />
          <path
            d="M 1100 500 C 1200 470, 1320 530, 1400 510 C 1360 570, 1260 590, 1180 640 C 1120 670, 1040 650, 1100 500 Z"
            fill="url(#gradGoldLeaf-bg)"
            opacity="0.75"
          />
          <path
            d="M 200 680 C 280 650, 360 700, 420 690 C 390 740, 310 760, 250 780 C 190 800, 160 760, 200 680 Z"
            fill="url(#gradGoldLeaf-bg)"
            opacity="0.8"
          />
        </g>
      </svg>
      {/* Deep vignette to anchor edges */}
      <div className="marble-bg-vignette" />
    </div>
  );
}
