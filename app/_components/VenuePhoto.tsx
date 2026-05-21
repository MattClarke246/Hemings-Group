import Image from "next/image";

type VenuePhotoProps = {
  src: string;
  alt: string;
  /** Tailwind aspect ratio class, e.g. aspect-[4/3] */
  aspect?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Framed venue photograph — gold border, subtle hover lift.
 * Images sourced from hemingsgroup.com (Strikingly CDN).
 */
export default function VenuePhoto({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
}: VenuePhotoProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] border transition-all duration-700 hover:shadow-[0_0_50px_rgba(198,167,94,0.2)] ${aspect} ${className}`}
      style={{ borderColor: "rgba(198, 167, 94, 0.35)" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-[1800ms] group-hover:scale-105"
        priority={priority}
      />
    </div>
  );
}
