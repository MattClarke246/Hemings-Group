export default function NavyAgate({
  className = "",
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        {/* Base navy gradient */}
        <radialGradient id="agate-base" cx="35%" cy="25%" r="90%">
          <stop offset="0%" stopColor="#2a3656" />
          <stop offset="45%" stopColor="#1F2A44" />
          <stop offset="100%" stopColor="#0d1525" />
        </radialGradient>

        {/* Soft cloudy lighter navy bands */}
        <linearGradient id="agate-cloud-a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3d4a6e" stopOpacity="0" />
          <stop offset="40%" stopColor="#3d4a6e" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#4d5a7e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1F2A44" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="agate-cloud-b" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a3656" stopOpacity="0" />
          <stop offset="50%" stopColor="#3d4a6e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0d1525" stopOpacity="0" />
        </linearGradient>

        {/* Gold vein gradients */}
        <linearGradient id="vein-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f1e1ba" />
          <stop offset="22%" stopColor="#dcc28a" />
          <stop offset="50%" stopColor="#C6A75E" />
          <stop offset="78%" stopColor="#a8884a" />
          <stop offset="100%" stopColor="#6e5828" />
        </linearGradient>
        <linearGradient id="vein-gold-bright" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f5e6c0" />
          <stop offset="50%" stopColor="#dcc28a" />
          <stop offset="100%" stopColor="#a8884a" />
        </linearGradient>

        {/* Glow for the gold veins */}
        <filter id="vein-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Subtle marbling turbulence — used as a low-opacity overlay */}
        <filter id="marble-turb">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.025" numOctaves="2" seed="7" />
          <feColorMatrix
            values="
              0 0 0 0 0.15
              0 0 0 0 0.20
              0 0 0 0 0.30
              0 0 0 0.35 0"
          />
        </filter>
      </defs>

      {/* Base */}
      <rect width="1600" height="900" fill="url(#agate-base)" />

      {/* Cloudy bands */}
      <g opacity={0.85 * intensity}>
        <path
          d="M -50 200 Q 400 380 820 260 T 1700 420 L 1700 0 L -50 0 Z"
          fill="url(#agate-cloud-a)"
        />
        <path
          d="M -50 900 Q 320 720 760 800 T 1700 640 L 1700 900 L -50 900 Z"
          fill="url(#agate-cloud-b)"
        />
        <path
          d="M -50 540 Q 280 460 620 540 T 1700 440 L 1700 740 Q 1280 820 880 720 T -50 820 Z"
          fill="url(#agate-cloud-a)"
          opacity="0.55"
        />
      </g>

      {/* Marbling turbulence overlay */}
      <rect width="1600" height="900" filter="url(#marble-turb)" opacity={0.35 * intensity} />

      {/* Major gold veins */}
      <g filter="url(#vein-glow)" opacity={0.95 * intensity}>
        <path
          d="M -40 720 C 220 600 360 660 540 540 S 880 380 1080 440 S 1400 360 1700 220"
          stroke="url(#vein-gold)"
          strokeWidth="2.6"
          fill="none"
          opacity="0.95"
        />
        <path
          d="M -40 760 C 260 650 380 700 580 580 S 920 420 1120 480 S 1420 400 1700 260"
          stroke="url(#vein-gold)"
          strokeWidth="1.1"
          fill="none"
          opacity="0.75"
        />
        <path
          d="M -40 100 C 220 60 360 180 540 140 S 900 280 1100 220 S 1420 320 1700 280"
          stroke="url(#vein-gold-bright)"
          strokeWidth="1.8"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M -40 60 C 260 20 380 140 580 100 S 920 240 1120 180 S 1420 280 1700 240"
          stroke="url(#vein-gold)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.55"
        />

        <path
          d="M 220 -20 C 280 200 200 340 320 520 S 400 760 380 920"
          stroke="url(#vein-gold)"
          strokeWidth="1.6"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 1320 -20 C 1260 220 1380 360 1300 520 S 1240 760 1340 920"
          stroke="url(#vein-gold-bright)"
          strokeWidth="2.0"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M 1380 -20 C 1320 220 1440 360 1360 520 S 1300 760 1400 920"
          stroke="url(#vein-gold)"
          strokeWidth="0.9"
          fill="none"
          opacity="0.55"
        />
      </g>

      {/* Fine gold dust */}
      <g fill="url(#vein-gold-bright)" opacity={0.7 * intensity}>
        <circle cx="180" cy="320" r="1.2" />
        <circle cx="260" cy="160" r="0.9" />
        <circle cx="420" cy="640" r="1.4" />
        <circle cx="540" cy="280" r="0.8" />
        <circle cx="780" cy="460" r="1.1" />
        <circle cx="940" cy="180" r="1.3" />
        <circle cx="1080" cy="700" r="1.0" />
        <circle cx="1240" cy="320" r="0.9" />
        <circle cx="1420" cy="540" r="1.2" />
        <circle cx="1500" cy="160" r="1.0" />
      </g>

      {/* Vignette */}
      <radialGradient id="agate-vignette" cx="50%" cy="50%" r="75%">
        <stop offset="60%" stopColor="#0d1525" stopOpacity="0" />
        <stop offset="100%" stopColor="#0d1525" stopOpacity="0.55" />
      </radialGradient>
      <rect width="1600" height="900" fill="url(#agate-vignette)" />
    </svg>
  );
}
