import NavyAgate from "./NavyAgate";
import GoldLeaf from "./GoldLeaf";

/**
 * Full-page fixed marble background — renders once behind everything.
 * Mobile uses a static CSS gradient; desktop uses layered SVG agate art.
 */
export default function MarbleBackground() {
  return (
    <>
      <div aria-hidden="true" className="marble-bg-lite md:hidden" />

      <div aria-hidden="true" className="marble-bg-fixed hidden md:block">
        <NavyAgate intensity={1.1} />
        <GoldLeaf density={1.0} />
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
          </defs>
          <g opacity="0.85">
            <path
              d="M 600 120 C 700 80, 820 140, 900 120 C 860 180, 780 200, 720 240 C 660 270, 580 250, 560 300 C 600 260, 680 220, 600 120 Z"
              fill="url(#gradGoldLeaf-bg)"
            />
            <path
              d="M 1100 500 C 1200 470, 1320 530, 1400 510 C 1360 570, 1260 590, 1180 640 C 1120 670, 1040 650, 1100 500 Z"
              fill="url(#gradGoldLeaf-bg)"
              opacity="0.75"
            />
          </g>
        </svg>
        <div className="marble-bg-vignette" />
      </div>
    </>
  );
}
