"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  threshold?: number;
  waitForHomeReady?: boolean;
};

type MotionStyle = CSSProperties & {
  "--motion-delay": string;
  "--motion-distance": string;
  "--motion-duration": string;
};

export function MotionReveal({
  children,
  className = "",
  delay = 0,
  distance = 24,
  duration = 720,
  threshold = 0.12,
  waitForHomeReady = false,
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const reveal = () => {
      element.dataset.motionState = "visible";
    };

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    let observer: IntersectionObserver | undefined;
    let readyListener: (() => void) | undefined;

    const observe = () => {
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal();
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            reveal();
            observer?.disconnect();
          }
        },
        {
          threshold,
          rootMargin: "0px 0px -7% 0px",
        },
      );

      observer.observe(element);
    };

    if (
      waitForHomeReady &&
      document.documentElement.dataset.homeReady !== "true"
    ) {
      readyListener = () => observe();
      window.addEventListener("x3:home-ready", readyListener, { once: true });
    } else {
      observe();
    }

    return () => {
      observer?.disconnect();

      if (readyListener) {
        window.removeEventListener("x3:home-ready", readyListener);
      }
    };
  }, [prefersReducedMotion, threshold, waitForHomeReady]);

  return (
    <div
      ref={ref}
      className={`motion-reveal ${className}`}
      data-motion-state="pending"
      style={
        {
          "--motion-delay": `${delay}ms`,
          "--motion-distance": `${distance}px`,
          "--motion-duration": `${duration}ms`,
        } as MotionStyle
      }
    >
      {children}
    </div>
  );
}

export function MotionSection({
  distance = 24,
  ...props
}: MotionRevealProps) {
  return <MotionReveal distance={distance} {...props} />;
}
