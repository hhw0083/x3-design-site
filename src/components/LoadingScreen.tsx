"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LoadingScreenProps = {
  isLeaving?: boolean;
  delayed?: boolean;
  delayMs?: number;
  autoDismissMs?: number;
  label?: string;
};

export function LoadingScreen({
  isLeaving = false,
  delayed = false,
  delayMs = 320,
  autoDismissMs,
  label = "Loading X3 Design",
}: LoadingScreenProps) {
  const [shouldShow, setShouldShow] = useState(!delayed);
  const [shouldLeave, setShouldLeave] = useState(isLeaving);

  useEffect(() => {
    if (!delayed) {
      setShouldShow(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setShouldShow(true);
    }, delayMs);

    return () => {
      window.clearTimeout(timer);
    };
  }, [delayed, delayMs]);

  useEffect(() => {
    setShouldLeave(isLeaving);
  }, [isLeaving]);

  useEffect(() => {
    if (!shouldShow || !autoDismissMs) {
      return;
    }

    const leaveTimer = window.setTimeout(() => {
      setShouldLeave(true);
    }, autoDismissMs);
    const removeTimer = window.setTimeout(() => {
      setShouldShow(false);
    }, autoDismissMs + 320);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, [autoDismissMs, shouldShow]);

  if (!shouldShow) {
    return null;
  }

  return (
    <div
      className={`home-loader fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#f7f2ea] ${
        shouldLeave ? "home-loader--leaving" : ""
      }`}
      role="status"
      aria-label={label}
    >
      <div
        className="home-loader__mask absolute left-1/2 top-1/2 aspect-square w-[12vmax] rounded-full bg-[#1d1a17]"
        aria-hidden="true"
      />
      <Image
        src="/images/x-logo-light.svg"
        alt=""
        width={88}
        height={88}
        priority
        className="home-loader__wordmark relative size-16 object-contain sm:size-20"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
