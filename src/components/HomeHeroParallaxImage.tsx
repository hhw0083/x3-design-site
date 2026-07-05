"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type HomeHeroParallaxImageProps = {
  src: string;
  alt: string;
};

export function HomeHeroParallaxImage({
  src,
  alt,
}: HomeHeroParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;

    if (!frame) {
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const desktopMotionQuery = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine)",
    );
    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;

      if (reducedMotionQuery.matches || !desktopMotionQuery.matches) {
        frame.style.setProperty("--parallax-y", "0px");
        return;
      }

      const rect = frame.parentElement?.getBoundingClientRect();
      const offset = rect ? Math.min(Math.max(-rect.top * 0.16, 0), 72) : 0;
      frame.style.setProperty("--parallax-y", `${offset}px`);
    };

    const requestUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotionQuery.addEventListener("change", requestUpdate);
    desktopMotionQuery.addEventListener("change", requestUpdate);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotionQuery.removeEventListener("change", requestUpdate);
      desktopMotionQuery.removeEventListener("change", requestUpdate);
    };
  }, []);

  return (
    <div ref={frameRef} className="motion-parallax absolute inset-x-0 -inset-y-10">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  );
}
