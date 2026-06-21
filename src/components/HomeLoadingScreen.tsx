"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";

const LOADING_SESSION_KEY = "hhw-home-loading-seen";

function hasSeenHomeLoading() {
  try {
    return window.sessionStorage.getItem(LOADING_SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

function markHomeLoadingSeen() {
  try {
    window.sessionStorage.setItem(LOADING_SESSION_KEY, "true");
  } catch {
    // Storage can be unavailable in private or restricted browser contexts.
  }
}

export function HomeLoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (hasSeenHomeLoading()) {
      document.documentElement.dataset.homeReady = "true";
      setIsVisible(false);
      window.dispatchEvent(new Event("hhw:home-ready"));
      return;
    }

    markHomeLoadingSeen();
    document.documentElement.dataset.homeReady = "false";

    const originalOverflow = document.body.style.overflow;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(
      () => setIsLeaving(true),
      prefersReducedMotion ? 260 : 1040,
    );
    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = originalOverflow;
      document.documentElement.dataset.homeReady = "true";
      window.dispatchEvent(new Event("hhw:home-ready"));
    }, prefersReducedMotion ? 520 : 1320);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return <LoadingScreen isLeaving={isLeaving} autoDismissMs={1500} />;
}
