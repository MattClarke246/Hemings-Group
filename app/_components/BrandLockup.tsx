import Logo from "./Logo";

export default function BrandLockup({
  variant = "gold",
  className = "",
}: {
  variant?: "gold" | "white";
  className?: string;
}) {
  return (
    <div className={`brand-lockup ${className}`}>
      <Logo
        size={variant === "white" ? 48 : 44}
        variant={variant}
        className={variant === "white" ? "mx-auto" : ""}
      />
      <p className="brand-lockup-name signature">Hemings</p>
      <p className="brand-lockup-line smallcaps">Members Preferred</p>
      <p className="brand-lockup-est smallcaps">Est. 2023 &middot; Birmingham</p>
    </div>
  );
}
