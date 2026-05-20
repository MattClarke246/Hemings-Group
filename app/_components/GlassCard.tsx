import type { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
  corners = false,
  dark = false,
  padding = "p-8 md:p-10",
}: {
  children: ReactNode;
  className?: string;
  corners?: boolean;
  dark?: boolean;
  padding?: string;
}) {
  return (
    <div
      className={`relative ${dark ? "glass-card-dark" : "glass-card"} ${
        corners ? "corners-gold" : ""
      } ${padding} ${className}`}
    >
      {children}
    </div>
  );
}
