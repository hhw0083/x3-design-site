"use client";

import type { CSSProperties, ReactNode } from "react";
import { useScrollParallax } from "@/hooks/useScrollParallax";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
  maxOffset?: number;
};

type ParallaxStyle = CSSProperties & {
  "--parallax-y": string;
};

export function ParallaxLayer({
  children,
  className = "",
  speed = 0.06,
  maxOffset = 28,
}: ParallaxLayerProps) {
  const ref = useScrollParallax<HTMLDivElement>({ speed, maxOffset });

  return (
    <div
      ref={ref}
      className={`motion-parallax ${className}`}
      style={{ "--parallax-y": "0px" } as ParallaxStyle}
    >
      {children}
    </div>
  );
}
