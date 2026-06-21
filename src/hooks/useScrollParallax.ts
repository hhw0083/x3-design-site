"use client";

import { useEffect, useRef } from "react";

type ScrollParallaxOptions = {
  speed?: number;
  maxOffset?: number;
};

export function useScrollParallax<T extends HTMLElement>({
  speed = 0.06,
  maxOffset = 28,
}: ScrollParallaxOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    const desktopMotion = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    if (!element) {
      return;
    }

    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.bottom < -120 || rect.top > viewportHeight + 120) {
        return;
      }

      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const offset = Math.max(
        -maxOffset,
        Math.min(maxOffset, (viewportCenter - elementCenter) * speed),
      );

      element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (!desktopMotion.matches) {
        return;
      }

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateParallax);
      }
    };

    const updateMotionMode = () => {
      if (desktopMotion.matches) {
        requestUpdate();
      } else {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        element.style.setProperty("--parallax-y", "0px");
      }
    };

    updateMotionMode();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    desktopMotion.addEventListener("change", updateMotionMode);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      desktopMotion.removeEventListener("change", updateMotionMode);
      window.cancelAnimationFrame(animationFrame);
      element.style.removeProperty("--parallax-y");
    };
  }, [maxOffset, speed]);

  return ref;
}
