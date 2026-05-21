import Image from "next/image";

type HeroImageProps = {
  src: string;
  alt?: string;
  position?: string;
  priority?: boolean;
};

/** Optimized full-bleed hero background via next/image (AVIF/WebP on supported browsers). */
export default function HeroImage({
  src,
  alt = "",
  position = "center 40%",
  priority = true,
}: HeroImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      quality={priority ? 80 : 70}
      sizes="100vw"
      className="-z-10 object-cover"
      style={{ objectPosition: position }}
    />
  );
}
