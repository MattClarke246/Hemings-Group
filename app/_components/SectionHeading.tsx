import type { ReactNode } from "react";
import MetallicDivider from "./MetallicDivider";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  /** Optional italic gold shimmer phrase — use once per heading */
  accent?: ReactNode;
  size?: "display" | "h1" | "h2";
  align?: "left" | "center";
  divider?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  size = "h1",
  align = "left",
  divider = false,
  className = "",
}: SectionHeadingProps) {
  const fontSize =
    size === "display"
      ? "var(--t-display)"
      : size === "h2"
        ? "var(--t-h2)"
        : "var(--t-h1)";

  return (
    <div
      className={`section-heading ${align === "center" ? "text-center items-center" : ""} ${className}`}
    >
      {divider ? <MetallicDivider width={align === "center" ? 140 : 80} className="mb-8" /> : null}
      <p className="section-eyebrow">{eyebrow}</p>
      <h2
        className="display-airy"
        style={{ fontSize, color: "var(--text-primary-dark)" }}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <span className="display-it gold-text-shimmer">{accent}</span>
          </>
        ) : null}
      </h2>
    </div>
  );
}
