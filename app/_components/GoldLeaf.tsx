type Shard = {
  d: string;
  opacity?: number;
  blur?: number;
  glow?: number;
};

const SHARDS: Shard[] = [
  // Large diagonal sweep, upper-left
  {
    d: "M -40 60 C 30 30, 110 90, 180 50 C 240 18, 310 80, 360 70 C 290 110, 220 92, 160 130 C 110 158, 50 140, -10 178 C -50 200, -80 150, -40 60 Z",
    opacity: 0.95,
    glow: 1.2,
  },
  // Mid-right curling shard
  {
    d: "M 980 220 C 1080 200, 1180 260, 1240 250 C 1190 290, 1100 280, 1040 320 C 990 350, 920 340, 880 360 C 920 320, 980 300, 980 220 Z",
    opacity: 0.85,
    glow: 1.1,
  },
  // Smaller flake, lower-left
  {
    d: "M 80 620 C 140 600, 200 640, 240 630 C 220 680, 160 700, 110 720 C 60 740, 20 700, 80 620 Z",
    opacity: 0.85,
    glow: 1.0,
  },
  // Slim ribbon, mid-bottom
  {
    d: "M 540 700 C 640 680, 760 720, 880 700 C 820 740, 720 760, 640 770 C 580 778, 520 760, 540 700 Z",
    opacity: 0.7,
    glow: 0.85,
  },
  // Top-right edge shard
  {
    d: "M 1340 -20 C 1400 20, 1480 -10, 1560 40 C 1500 60, 1430 90, 1380 110 C 1350 60, 1320 30, 1340 -20 Z",
    opacity: 0.85,
    glow: 1.05,
  },
  // Small dust flake mid
  {
    d: "M 720 320 C 760 308, 800 332, 820 348 C 790 366, 752 370, 720 360 C 700 350, 700 332, 720 320 Z",
    opacity: 0.7,
    glow: 0.8,
  },
];

export default function GoldLeaf({
  className = "",
  density = 1,
}: {
  className?: string;
  density?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <linearGradient id="gradGoldLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff5d4" />
          <stop offset="22%" stopColor="#f0d896" />
          <stop offset="42%" stopColor="#d4ae5a" />
          <stop offset="60%" stopColor="#8c6f30" />
          <stop offset="78%" stopColor="#d4ae5a" />
          <stop offset="100%" stopColor="#fff5d4" />
        </linearGradient>
        <linearGradient id="gradGoldLeaf-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff5d4" />
          <stop offset="30%" stopColor="#e8c878" />
          <stop offset="55%" stopColor="#a8884a" />
          <stop offset="80%" stopColor="#f0d896" />
          <stop offset="100%" stopColor="#fff5d4" />
        </linearGradient>
        <filter id="leaf-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="leaf-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="6"
            stdDeviation="12"
            floodColor="#0d1525"
            floodOpacity="0.6"
          />
        </filter>
      </defs>

      <g filter="url(#leaf-shadow)">
        {SHARDS.map((s, i) => (
          <g key={i} filter="url(#leaf-glow)">
            <path
              d={s.d}
              fill={i % 2 === 0 ? "url(#gradGoldLeaf)" : "url(#gradGoldLeaf-2)"}
              opacity={(s.opacity ?? 0.9) * density}
            />
            {/* Inner specular highlight */}
            <path
              d={s.d}
              fill="none"
              stroke="#fff5d4"
              strokeWidth="0.6"
              opacity={0.6 * density}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
