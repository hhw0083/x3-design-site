"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { Maximize2, X } from "lucide-react";
import {
  CaseStudyVisualFallback,
  type CaseStudyFallbackKind,
} from "@/components/case-study/CaseStudyVisualFallback";
import type { CaseStudyVisualKind } from "@/data/projects";

type FinalDesignGalleryItem = {
  title: string;
  description: string;
  image?: string;
  visual?: CaseStudyVisualKind;
};

type FinalDesignGalleryProps = {
  items: FinalDesignGalleryItem[];
};

function isProjectFallbackVisual(
  visual?: CaseStudyVisualKind,
): visual is CaseStudyFallbackKind {
  return Boolean(
    visual?.startsWith("tcb-") ||
      visual?.startsWith("rmic-") ||
      visual?.startsWith("jule-"),
  );
}

function EsgFallbackPreview({
  kind,
  compact = false,
}: {
  kind: CaseStudyVisualKind;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative h-full overflow-hidden border border-slate-200 bg-[#f7fbf8] shadow-sm ${
        compact ? "aspect-[16/10]" : "min-h-[24rem] rounded-2xl"
      }`}
    >
      {compact ? <PreviewActionIcon /> : null}
      <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-white px-4">
        <span className="size-2 rounded-full bg-red-300" />
        <span className="size-2 rounded-full bg-amber-300" />
        <span className="size-2 rounded-full bg-emerald-400" />
        <span className="ml-3 h-2 w-28 rounded-full bg-slate-100" />
      </div>
      <div className="h-[calc(100%-2.5rem)] p-4">
        {kind === "map" ? (
          <div className="relative h-full overflow-hidden rounded-xl border border-slate-200 bg-[#e9f5ef]">
            <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_0_46%,rgba(19,125,106,0.18)_46%_48%,transparent_48%_100%),linear-gradient(120deg,transparent_0_58%,rgba(128,202,206,0.3)_58%_60%,transparent_60%_100%)]" />
            <div className="absolute left-4 top-4 w-48 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="h-3 w-24 rounded-full bg-slate-200" />
              <div className="mt-3 space-y-2">
                <div className="h-8 rounded-lg bg-slate-50" />
                <div className="h-8 rounded-lg bg-slate-50" />
              </div>
            </div>
            {[
              ["70%", "28%"],
              ["58%", "62%"],
              ["82%", "52%"],
              ["42%", "38%"],
            ].map(([left, top], index) => (
              <div
                key={`${left}-${top}`}
                className="absolute grid size-9 place-items-center rounded-full bg-cyanline text-xs font-semibold text-white shadow-lg"
                style={{ left, top }}
              >
                {index + 1}
              </div>
            ))}
          </div>
        ) : null}

        {kind === "login" ? (
          <div className="grid h-full place-items-center">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mx-auto size-14 rounded-full bg-teal-50" />
              <div className="mx-auto mt-4 h-4 w-40 rounded-full bg-slate-200" />
              <div className="mt-6 grid gap-3">
                {["企業使用者", "管理者", "一般訪客"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
                  >
                    <div className="size-9 rounded-lg bg-teal-50" />
                    <div className="h-3 w-24 rounded-full bg-slate-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {kind === "list" ? (
          <div className="grid h-full gap-3 md:grid-cols-[13rem_1fr]">
            <aside className="rounded-xl border border-slate-200 bg-white p-3">
              <div className="h-3 w-24 rounded-full bg-slate-200" />
              <div className="mt-5 space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-8 rounded-lg bg-slate-50" />
                ))}
              </div>
            </aside>
            <div className="grid gap-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="grid grid-cols-[7rem_1fr] gap-3 rounded-xl border border-slate-200 bg-white p-3"
                >
                  <div className="rounded-lg bg-gradient-to-br from-emerald-100 to-teal-200" />
                  <div>
                    <div className="h-3 w-40 rounded-full bg-slate-200" />
                    <div className="mt-3 h-3 w-28 rounded-full bg-teal-100" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-8 rounded-lg bg-slate-50" />
                      <div className="h-8 rounded-lg bg-slate-50" />
                      <div className="h-8 rounded-lg bg-slate-50" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {kind === "news" ? (
          <div className="grid h-full gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <div className="h-4 w-36 rounded-full bg-slate-200" />
            <div className="grid gap-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
                >
                  <div className="size-9 rounded-full bg-teal-100" />
                  <div className="flex-1">
                    <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                    <div className="mt-2 h-2 w-1/2 rounded-full bg-slate-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {kind === "certificate" ? (
          <div className="h-full rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="h-4 w-36 rounded-full bg-slate-200" />
                <div className="mt-2 h-3 w-24 rounded-full bg-teal-100" />
              </div>
              <div className="h-10 w-48 rounded-lg border border-slate-200 bg-slate-50" />
            </div>
            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="grid grid-cols-5 gap-3 border-b border-slate-200 p-3 last:border-b-0"
                >
                  <div className="h-3 rounded-full bg-slate-100" />
                  <div className="h-3 rounded-full bg-slate-100" />
                  <div className="h-3 rounded-full bg-slate-100" />
                  <div className="h-3 rounded-full bg-teal-100" />
                  <div className="h-3 rounded-full bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {kind === "home" || !kind ? (
          <div className="grid h-full gap-3 md:grid-cols-[1fr_0.75fr]">
            <div className="rounded-xl bg-gradient-to-br from-teal-700 to-emerald-500 p-4 text-white">
              <div className="h-3 w-24 rounded-full bg-white/45" />
              <div className="mt-8 h-8 w-48 rounded-full bg-white/80" />
              <div className="mt-3 h-3 w-56 rounded-full bg-white/45" />
              <div className="mt-8 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="h-12 rounded-lg bg-white/20" />
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <div className="h-3 w-24 rounded-full bg-slate-200" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="h-14 rounded-lg bg-teal-50" />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <div className="h-3 w-28 rounded-full bg-slate-200" />
                <div className="mt-4 space-y-2">
                  <div className="h-3 rounded-full bg-slate-100" />
                  <div className="h-3 w-3/4 rounded-full bg-slate-100" />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function PreviewActionIcon() {
  return (
    <span
      className="pointer-events-none absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full border border-white/80 bg-white/85 text-slate-950 shadow-sm backdrop-blur-md transition-colors duration-300 group-hover:border-cyanline/30 group-hover:bg-cyanline group-hover:text-white group-focus-visible:border-cyanline/30 group-focus-visible:bg-cyanline group-focus-visible:text-white"
      aria-hidden="true"
    >
      <Maximize2 className="size-4" />
    </span>
  );
}

function VisualPreview({
  item,
  compact = false,
  inModal = false,
}: {
  item: FinalDesignGalleryItem;
  compact?: boolean;
  inModal?: boolean;
}) {
  if (item.image) {
    return (
      <div
        className={`relative overflow-hidden bg-slate-50 ${
          inModal
            ? "min-h-[56vh] rounded-[28px]"
            : "aspect-[16/10] rounded-xl border border-slate-200"
        }`}
      >
        {!inModal ? <PreviewActionIcon /> : null}
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes={inModal ? "90vw" : "(min-width: 768px) 50vw, 100vw"}
          className={inModal ? "object-contain" : "object-cover"}
        />
      </div>
    );
  }

  if (isProjectFallbackVisual(item.visual)) {
    return (
      <div
        className={`relative overflow-hidden bg-white ${
          inModal
            ? "min-h-[56vh] rounded-[28px]"
            : "aspect-[16/10] rounded-xl border border-slate-200"
        }`}
      >
        {!inModal ? <PreviewActionIcon /> : null}
        <CaseStudyVisualFallback kind={item.visual} />
      </div>
    );
  }

  return item.visual ? (
    <EsgFallbackPreview kind={item.visual} compact={compact} />
  ) : null;
}

export function FinalDesignGallery({ items }: FinalDesignGalleryProps) {
  const [selectedItem, setSelectedItem] =
    useState<FinalDesignGalleryItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const dialogTitleId = useId();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedItem) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyOverscroll = document.body.style.overscrollBehavior;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousHtmlOverscroll =
      document.documentElement.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.overscrollBehavior = previousBodyOverscroll;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.overscrollBehavior = previousHtmlOverscroll;
    };
  }, [selectedItem]);

  const modal =
    selectedItem && isMounted
      ? createPortal(
          <div
            data-lenis-prevent
            className="fixed inset-0 z-[9999] grid h-[100dvh] w-[100dvw] place-items-center overflow-hidden bg-slate-950/55 p-4 backdrop-blur-lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedItem(null);
              }
            }}
            onWheel={(event) => {
              event.stopPropagation();
            }}
            onTouchMove={(event) => {
              event.stopPropagation();
            }}
          >
            <div
              data-lenis-prevent
              className="relative max-h-[92dvh] w-full max-w-6xl overflow-y-auto overscroll-contain rounded-[32px] bg-white p-5 shadow-[0_40px_120px_rgba(15,23,42,0.32)] sm:p-7 md:rounded-[40px] md:p-9"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-slate-950 text-white shadow-lg transition hover:bg-cyanline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanline focus-visible:ring-offset-2 md:right-7 md:top-7"
                aria-label="Close modal"
              >
                <X className="size-6" aria-hidden="true" />
              </button>

              <div className="pr-12 md:pr-16">
                <p className="text-sm font-semibold text-slate-500">
                  Final Design
                </p>
                <h3
                  id={dialogTitleId}
                  className="mt-2 text-2xl font-semibold leading-tight text-slate-950 md:text-4xl"
                >
                  {selectedItem.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                  {selectedItem.description}
                </p>
              </div>

              <div className="mt-6">
                <VisualPreview item={selectedItem} inModal />
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelectedItem(item)}
            className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-left shadow-[0_18px_48px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanline focus-visible:ring-offset-2"
          >
            <VisualPreview item={item} compact />
            <h3 className="mt-4 text-lg font-semibold text-slate-950">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {item.description}
            </p>
            <span className="mt-auto inline-flex self-end pt-4 text-sm font-semibold text-slate-950 transition-colors duration-300 group-hover:text-cyanline group-focus-visible:text-cyanline">
              View full screen
            </span>
          </button>
        ))}
      </div>
      {modal}
    </>
  );
}
