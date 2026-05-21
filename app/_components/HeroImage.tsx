"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroImageProps = {
  src: string;
  alt?: string;
  position?: string;
  priority?: boolean;
};

/** Optimized full-bleed hero with subtle desktop parallax */
export default function HeroImage({
  src,
  alt = "",
  position = "center 40%",
  priority = true,
}: HeroImageProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const onScroll = () => {
      if (!mq.matches) {
        setOffset(0);
        return;
      }
      setOffset(Math.min(window.scrollY * 0.18, 120));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <div className="hero-image-wrap absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={priority ? 80 : 70}
        sizes="100vw"
        className="object-cover transition-transform duration-150 ease-out will-change-transform"
        style={{
          objectPosition: position,
          transform: `translate3d(0, ${offset}px, 0) scale(1.06)`,
        }}
      />
    </div>
  );
}
