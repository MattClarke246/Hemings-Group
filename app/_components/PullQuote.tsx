import MetallicDivider from "./MetallicDivider";

export default function PullQuote({
  children,
  attribution,
  className = "",
}: {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
}) {
  return (
    <blockquote className={`pull-quote ${className}`}>
      <MetallicDivider width={64} className="mb-8" />
      <p className="pull-quote-text display-it">{children}</p>
      {attribution ? (
        <cite className="pull-quote-cite smallcaps mt-6 block not-italic">{attribution}</cite>
      ) : null}
    </blockquote>
  );
}
