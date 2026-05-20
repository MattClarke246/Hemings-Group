export default function GoldSplash({
  className = "",
  size = 320,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 320"
      width={size}
      height={size}
      className={`pointer-events-none ${className}`}
    >
      <defs>
        <radialGradient id="splash-grad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f5e3b5" stopOpacity="1" />
          <stop offset="35%" stopColor="#e8c878" stopOpacity="0.9" />
          <stop offset="65%" stopColor="#c89a3a" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6b4410" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="splash-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fdf2c8" stopOpacity="1" />
          <stop offset="40%" stopColor="#e8c878" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#a87420" stopOpacity="0.3" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="120" fill="url(#splash-grad)" />
      <circle cx="160" cy="160" r="60" fill="url(#splash-core)" opacity="0.85" />
      <g fill="url(#splash-grad)">
        <circle cx="60" cy="80" r="6" opacity="0.7" />
        <circle cx="38" cy="160" r="4" opacity="0.6" />
        <circle cx="280" cy="100" r="5" opacity="0.7" />
        <circle cx="270" cy="220" r="8" opacity="0.8" />
        <circle cx="100" cy="260" r="5" opacity="0.6" />
        <circle cx="200" cy="40" r="3" opacity="0.5" />
        <ellipse cx="20" cy="260" rx="14" ry="3" opacity="0.5" transform="rotate(-30 20 260)" />
        <ellipse cx="290" cy="60" rx="12" ry="3" opacity="0.5" transform="rotate(35 290 60)" />
      </g>
    </svg>
  );
}
