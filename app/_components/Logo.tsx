"use client";

interface LogoProps {
  size?: number;
  className?: string;
  variant?: "gold" | "white";
}

export default function Logo({ size = 80, className = "", variant = "gold" }: LogoProps) {
  /*
   * hemings-logo.png is a transparent PNG with black strokes.
   *   - "white" variant: invert(1) turns black strokes to white.
   *   - "gold"  variant: invert + sepia + hue-rotate to tint to metallic gold (#c6a75e).
   *
   * No mix-blend-mode needed — the PNG is already transparent.
   */
  const filter =
    variant === "gold"
      ? "invert(1) sepia(1) saturate(3) hue-rotate(7deg) brightness(0.82)"
      : "invert(1) brightness(1)";

  return (
    <img
      src="/hemings-logo.png"
      alt="Hemings Group Logo"
      width={size}
      height={size}
      className={`pointer-events-none select-none ${className}`}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        filter,
      }}
    />
  );
}
