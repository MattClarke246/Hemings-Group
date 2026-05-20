"use client";

import { type AnchorHTMLAttributes } from "react";

interface HoverLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  hoverColor?: string;
  baseColor?: string;
}

export default function HoverLink({
  hoverColor = "var(--text-gold-dark)",
  baseColor = "var(--text-primary-dark)",
  style,
  children,
  ...props
}: HoverLinkProps) {
  return (
    <a
      {...props}
      style={{ color: baseColor, ...style }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = hoverColor)}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = baseColor)}
    >
      {children}
    </a>
  );
}
