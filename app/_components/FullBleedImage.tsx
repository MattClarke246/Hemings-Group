import Image from "next/image";

export default function FullBleedImage({
  src,
  alt,
  height = "min-h-[50vh]",
  position = "center",
}: {
  src: string;
  alt: string;
  height?: string;
  position?: string;
}) {
  return (
    <div className={`full-bleed-image relative w-full ${height}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        quality={75}
        loading="lazy"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="full-bleed-image-vignette absolute inset-0" aria-hidden="true" />
    </div>
  );
}
