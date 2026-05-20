"use client";

import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
  variant?: "gold" | "white";
}

export default function Logo({ size = 80, className = "", variant = "gold" }: LogoProps) {
  // Filter to convert black to gold (#c6a75e) or white from inverted black
  const logoFilter =
    variant === "gold"
      ? "invert(70%) sepia(35%) saturate(500%) hue-rotate(7deg) brightness(95%) contrast(90%)"
      : "invert(100%)";

  return (
    <div
      className={`relative inline-block overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
        mixBlendMode: "screen", // Removes the black background after inversion
      }}
    >
      <img
        src="/original_bg.jpg"
        alt="Hemings Group Logo"
        width={size}
        height={size}
        className="w-full h-full object-contain"
        style={{
          filter: `invert(100%) ${logoFilter}`, // First invert to get white lines on black, then apply tint filter
        }}
      />
    </div>
  );
}
