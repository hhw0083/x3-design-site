"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const desktopMotion = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    const destroyLenis = () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };

    const updateLenis = () => {
      destroyLenis();

      if (!desktopMotion.matches) {
        return;
      }

      lenisRef.current = new Lenis({
        autoRaf: true,
        anchors: {
          offset: -88,
        },
        lerp: 0.11,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
        stopInertiaOnNavigate: true,
        prevent: (node) => Boolean(node.closest("[data-lenis-prevent]")),
      });
    };

    updateLenis();
    desktopMotion.addEventListener("change", updateLenis);

    return () => {
      desktopMotion.removeEventListener("change", updateLenis);
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    window.requestAnimationFrame(() => lenisRef.current?.resize());
  }, [pathname]);

  return children;
}
