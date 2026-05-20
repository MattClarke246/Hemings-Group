export default function GoldBrushstroke({
  className = "",
  opacity = 0.55,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="brush-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5e3b5" />
          <stop offset="22%" stopColor="#e8c878" />
          <stop offset="50%" stopColor="#c89a3a" />
          <stop offset="78%" stopColor="#a87420" />
          <stop offset="100%" stopColor="#6b4410" />
        </linearGradient>
        <filter id="brush-blur">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>
      <g filter="url(#brush-blur)">
        <path
          d="M -20 480 Q 200 360 420 380 T 880 220 Q 1040 160 1240 80"
          stroke="url(#brush-grad)"
          strokeWidth="46"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M -20 510 Q 220 400 460 420 T 900 260 Q 1060 200 1240 130"
          stroke="url(#brush-grad)"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M -20 460 Q 180 320 400 340 T 860 180 Q 1020 120 1240 50"
          stroke="url(#brush-grad)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}
