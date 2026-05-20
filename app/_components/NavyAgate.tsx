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
        {/* Base navy — broader gradient with more midtones */}
        <radialGradient id="agate-base" cx="38%" cy="22%" r="95%">
          <stop offset="0%" stopColor="#34406a" />
          <stop offset="22%" stopColor="#2a3656" />
          <stop offset="50%" stopColor="#1F2A44" />
          <stop offset="80%" stopColor="#131c30" />
          <stop offset="100%" stopColor="#0d1525" />
        </radialGradient>

        {/* Cloudy lighter navy bands */}
        <linearGradient id="agate-cloud-a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a587e" stopOpacity="0" />
          <stop offset="35%" stopColor="#4a587e" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#5a6890" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1F2A44" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="agate-cloud-b" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a3656" stopOpacity="0" />
          <stop offset="50%" stopColor="#3d4a6e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0d1525" stopOpacity="0" />
        </linearGradient>

        {/* Gold veins — richer multi-stop */}
        <linearGradient id="vein-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff5d4" />
          <stop offset="18%" stopColor="#f0d896" />
          <stop offset="40%" stopColor="#d4ae5a" />
          <stop offset="58%" stopColor="#C6A75E" />
          <stop offset="78%" stopColor="#8c6f30" />
          <stop offset="100%" stopColor="#5a4419" />
        </linearGradient>
        <linearGradient id="vein-gold-bright" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fff5d4" />
          <stop offset="50%" stopColor="#f0d896" />
          <stop offset="100%" stopColor="#8c6f30" />
        </linearGradient>
        <linearGradient id="vein-gold-warm" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff5d4" />
          <stop offset="30%" stopColor="#e8c878" />
          <stop offset="65%" stopColor="#a8884a" />
          <stop offset="100%" stopColor="#5a4419" />
        </linearGradient>

        {/* Vein glow */}
        <filter id="vein-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Marbling turbulence */}
        <filter id="marble-turb">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.022"
            numOctaves="2"
            seed="7"
          />
          <feColorMatrix
            values="
              0 0 0 0 0.12
              0 0 0 0 0.16
              0 0 0 0 0.26
              0 0 0 0.42 0"
          />
        </filter>

        {/* Bright specular highlight */}
        <radialGradient id="agate-highlight" cx="20%" cy="15%" r="50%">
          <stop offset="0%" stopColor="#6a7aa0" stopOpacity="0.5" />
          <stop offset="40%" stopColor="#3d4a6e" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1F2A44" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#agate-base)" />

      {/* Cloudy bands */}
      <g opacity={0.9 * intensity}>
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

      {/* Specular highlight */}
      <rect width="1600" height="900" fill="url(#agate-highlight)" />

      {/* Marbling turbulence */}
      <rect
        width="1600"
        height="900"
        filter="url(#marble-turb)"
        opacity={0.35 * intensity}
      />

      {/* Gold veins — denser, more layered */}
      <g filter="url(#vein-glow)" opacity={0.95 * intensity}>
        {/* Lower diagonal master vein */}
        <path
          d="M -40 720 C 220 600 360 660 540 540 S 880 380 1080 440 S 1400 360 1700 220"
          stroke="url(#vein-gold)"
          strokeWidth="3.2"
          fill="none"
        />
        <path
          d="M -40 760 C 260 650 380 700 580 580 S 920 420 1120 480 S 1420 400 1700 260"
          stroke="url(#vein-gold-warm)"
          strokeWidth="1.4"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M -40 700 C 220 590 360 650 540 530 S 880 370 1080 430 S 1400 350 1700 210"
          stroke="url(#vein-gold-bright)"
          strokeWidth="0.7"
          fill="none"
          opacity="0.9"
        />

        {/* Upper vein */}
        <path
          d="M -40 100 C 220 60 360 180 540 140 S 900 280 1100 220 S 1420 320 1700 280"
          stroke="url(#vein-gold-bright)"
          strokeWidth="2.2"
          fill="none"
        />
        <path
          d="M -40 60 C 260 20 380 140 580 100 S 920 240 1120 180 S 1420 280 1700 240"
          stroke="url(#vein-gold)"
          strokeWidth="1.0"
          fill="none"
          opacity="0.7"
        />

        {/* Vertical accent veins */}
        <path
          d="M 220 -20 C 280 200 200 340 320 520 S 400 760 380 920"
          stroke="url(#vein-gold)"
          strokeWidth="1.8"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M 1320 -20 C 1260 220 1380 360 1300 520 S 1240 760 1340 920"
          stroke="url(#vein-gold-bright)"
          strokeWidth="2.2"
          fill="none"
        />
        <path
          d="M 1380 -20 C 1320 220 1440 360 1360 520 S 1300 760 1400 920"
          stroke="url(#vein-gold-warm)"
          strokeWidth="1.0"
          fill="none"
          opacity="0.65"
        />

        {/* Mid drift vein */}
        <path
          d="M -40 400 C 240 340 420 470 640 410 S 980 530 1240 470 S 1500 540 1700 480"
          stroke="url(#vein-gold)"
          strokeWidth="1.4"
          fill="none"
          opacity="0.7"
        />

        {/* Cross vein */}
        <path
          d="M 80 880 C 220 760 460 660 700 580 S 1080 430 1280 350 S 1500 200 1620 120"
          stroke="url(#vein-gold-bright)"
          strokeWidth="0.9"
          fill="none"
          opacity="0.55"
        />
      </g>

      {/* Gold dust */}
      <g fill="url(#vein-gold-bright)" opacity={0.8 * intensity}>
        <circle cx="180" cy="320" r="1.4" />
        <circle cx="260" cy="160" r="1.0" />
        <circle cx="420" cy="640" r="1.6" />
        <circle cx="540" cy="280" r="0.9" />
        <circle cx="780" cy="460" r="1.3" />
        <circle cx="940" cy="180" r="1.5" />
        <circle cx="1080" cy="700" r="1.1" />
        <circle cx="1240" cy="320" r="1.0" />
        <circle cx="1420" cy="540" r="1.4" />
        <circle cx="1500" cy="160" r="1.2" />
        <circle cx="320" cy="780" r="1.2" />
        <circle cx="640" cy="100" r="0.9" />
        <circle cx="1140" cy="540" r="1.3" />
      </g>

      {/* Soft vignette */}
      <radialGradient id="agate-vignette" cx="50%" cy="50%" r="80%">
        <stop offset="55%" stopColor="#0d1525" stopOpacity="0" />
        <stop offset="100%" stopColor="#0d1525" stopOpacity="0.55" />
      </radialGradient>
      <rect width="1600" height="900" fill="url(#agate-vignette)" />
    </svg>
  );
}
