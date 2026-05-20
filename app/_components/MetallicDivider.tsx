export default function MetallicDivider({
  className = "",
  width = 96,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className={`metallic-divider ${className}`}
      style={{ width: `${width}px` }}
    />
  );
}
