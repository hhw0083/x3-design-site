import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  Accessibility,
  ArrowRight,
  Bell,
  Code2,
  Gauge,
  Layers3,
  MapPinned,
  MonitorCog,
  Moon,
  Palette,
  RefreshCw,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  CoreComponentsSection,
  DesignSystemFoundations,
} from "@/components/DesignSystemPage";
import { InteractiveSitemap } from "@/components/InteractiveSitemap";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { DesignGoalsSection } from "@/components/case-study/DesignGoalsSection";
import { CaseStudySectionLayout } from "@/components/case-study/CaseStudySectionLayout";
import { FinalDesignGallery } from "@/components/case-study/FinalDesignGallery";
import { InteractivePrototypeSection } from "@/components/case-study/InteractivePrototypeSection";
import { RmicComponentExtensionBoard } from "@/components/case-study/RmicComponentExtensionBoard";
import { TcbDesignSystemBoard } from "@/components/case-study/TcbDesignSystemBoard";
import {
  CaseStudyVisualFallback,
  type CaseStudyFallbackKind,
} from "@/components/case-study/CaseStudyVisualFallback";
import type {
  CaseStudyCardIcon,
  CaseStudyContentBlock,
  CaseStudyVisualKind,
  Project,
} from "@/data/projects";

type ScreenKind = CaseStudyVisualKind;

const cardIcons = {
  palette: Palette,
  layers: Layers3,
  code: Code2,
  accessibility: Accessibility,
  "map-pinned": MapPinned,
  refresh: RefreshCw,
  sparkles: Sparkles,
  gauge: Gauge,
  monitor: MonitorCog,
  moon: Moon,
  workflow: Workflow,
  bell: Bell,
  server: Server,
} satisfies Record<CaseStudyCardIcon, typeof Palette>;

function isProjectFallbackVisual(
  visual?: CaseStudyVisualKind,
): visual is CaseStudyFallbackKind {
  return Boolean(
    visual?.startsWith("tcb-") ||
      visual?.startsWith("rmic-") ||
      visual?.startsWith("jule-"),
  );
}

function TextCard({
  title,
  description,
  eyebrow,
  icon,
  largeIcon = false,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: ReactNode;
  largeIcon?: boolean;
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        {icon ? (
          <div
            className={`grid shrink-0 place-items-center rounded-lg border border-teal-100 bg-teal-50 text-cyanline ${
              largeIcon ? "size-16" : "size-10"
            }`}
          >
            {icon}
          </div>
        ) : null}
        <div>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanline">
              {eyebrow}
            </p>
          ) : null}
          <h3 className={eyebrow ? "mt-2 text-lg font-semibold text-slate-950" : "text-lg font-semibold text-slate-950"}>
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

function CompactScreenPreview({ kind }: { kind: ScreenKind }) {
  if (kind === "map") {
    return (
      <div className="relative h-full overflow-hidden bg-[#eaf4ef]">
        <div className="absolute inset-0 bg-[linear-gradient(32deg,transparent_0_44%,rgba(19,125,106,0.14)_44%_46%,transparent_46%_100%),linear-gradient(118deg,transparent_0_56%,rgba(128,202,206,0.28)_56%_58%,transparent_58%_100%)]" />
        <div className="absolute inset-x-3 top-3 flex h-9 items-center rounded-lg border border-slate-200 bg-white px-3 text-[10px] text-slate-400 shadow-sm">
          搜尋地區或專案
        </div>
        {[
          ["24%", "32%"],
          ["58%", "26%"],
          ["72%", "52%"],
          ["38%", "66%"],
          ["66%", "78%"],
        ].map(([left, top], index) => (
          <div
            key={`${left}-${top}`}
            className="absolute grid size-8 place-items-center rounded-full border-2 border-white bg-cyanline text-[10px] font-semibold text-white shadow-lg"
            style={{ left, top }}
          >
            {index + 2}
          </div>
        ))}
        <div className="absolute inset-x-3 bottom-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
          <p className="text-[10px] font-semibold text-slate-900">
            臺灣森林專案分布
          </p>
          <div className="mt-2 flex gap-2">
            <span className="rounded-full bg-teal-50 px-2 py-1 text-[9px] text-cyanline">
              80 個標的
            </span>
            <span className="rounded-full bg-amber-50 px-2 py-1 text-[9px] text-amber-700">
              12 個媒合中
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "list") {
    return (
      <div className="h-full bg-slate-50 p-3">
        <div className="flex h-9 items-center rounded-lg border border-slate-200 bg-white px-3 text-[10px] text-slate-400">
          搜尋 ESG 專案
        </div>
        <div className="mt-3 flex gap-1.5">
          {["地區", "類型", "狀態"].map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[9px] text-slate-500"
            >
              {filter}
            </span>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {["森林碳匯共創計畫", "原生林復育專案", "友善林地合作方案"].map(
            (title, index) => (
              <div
                key={title}
                className="grid grid-cols-[4.25rem_1fr] gap-2 rounded-lg border border-slate-200 bg-white p-2 shadow-sm"
              >
                <div className="relative overflow-hidden rounded bg-gradient-to-br from-teal-100 to-emerald-300">
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-emerald-700/25" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-semibold text-slate-900">
                    {title}
                  </p>
                  <p className="mt-1 text-[9px] text-slate-400">
                    {index === 1 ? "花蓮縣 · 86 公頃" : "南投縣 · 120 公頃"}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-medium text-emerald-700">
                      媒合中
                    </span>
                    <span className="text-[8px] font-semibold text-cyanline">
                      查看詳情
                    </span>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  if (kind === "certificate") {
    return (
      <div className="h-full bg-white p-3">
        <div className="rounded-lg bg-teal-50 p-3">
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-cyanline">
            ESG Certificate
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-950">
            憑證查詢
          </p>
          <div className="mt-3 h-9 rounded-lg border border-teal-100 bg-white px-3 py-2 text-[9px] text-slate-400">
            輸入憑證編號或企業名稱
          </div>
        </div>
        <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
          <div className="grid grid-cols-[1.2fr_0.7fr_0.6fr] bg-slate-50 px-2 py-2 text-[8px] font-semibold text-slate-500">
            <span>憑證編號</span>
            <span>有效期限</span>
            <span>狀態</span>
          </div>
          {["ESG-2026-018", "ESG-2026-012", "ESG-2025-086"].map(
            (certificate, index) => (
              <div
                key={certificate}
                className="grid grid-cols-[1.2fr_0.7fr_0.6fr] border-t border-slate-100 px-2 py-3 text-[8px]"
              >
                <span className="font-medium text-slate-700">{certificate}</span>
                <span className="text-slate-400">
                  {index === 2 ? "2026/12" : "2027/06"}
                </span>
                <span className="font-medium text-emerald-700">有效</span>
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-[#f7fbf8]">
      <div className="relative bg-gradient-to-br from-teal-800 to-emerald-600 p-4 text-white">
        <div className="flex items-center justify-between text-[8px]">
          <span className="font-semibold">ESG Platform</span>
          <span className="text-white/70">專案 · 成果 · 登入</span>
        </div>
        <p className="mt-7 text-lg font-semibold leading-tight">
          讓永續專案與
          <br />
          企業需求相遇
        </p>
        <p className="mt-2 text-[9px] leading-4 text-white/70">
          探索森林與自然碳匯合作機會
        </p>
        <div className="mt-4 flex h-9 items-center rounded-lg bg-white px-3 text-[9px] text-slate-400 shadow-sm">
          搜尋地區、類型或關鍵字
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1.5 p-3">
        {[
          ["80", "專案"],
          ["33", "單位"],
          ["12", "媒合"],
          ["8", "企業"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-lg border border-slate-200 bg-white p-2 text-center"
          >
            <p className="text-sm font-semibold text-cyanline">{value}</p>
            <p className="mt-0.5 text-[8px] text-slate-400">{label}</p>
          </div>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2 px-3 pb-3">
        {["精選林地專案", "自然碳匯計畫"].map((title) => (
          <div
            key={title}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white"
          >
            <div className="h-12 bg-gradient-to-br from-teal-100 to-emerald-300" />
            <div className="p-2">
              <p className="text-[9px] font-semibold text-slate-800">{title}</p>
              <p className="mt-1 text-[8px] text-slate-400">媒合中 · 查看詳情</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenMockup({
  kind,
  compact = false,
}: {
  kind: ScreenKind;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-slate-200 bg-[#f7fbf8] shadow-sm ${
        compact ? "aspect-[16/10]" : "aspect-[16/10] rounded-xl"
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 flex items-center gap-2 border-b border-slate-200 bg-white ${
          compact ? "h-8 px-3" : "h-10 px-4"
        }`}
      >
        <span className="size-2 rounded-full bg-red-300" />
        <span className="size-2 rounded-full bg-amber-300" />
        <span className="size-2 rounded-full bg-emerald-400" />
        <span
          className={`ml-3 rounded-full bg-slate-100 ${
            compact ? "h-2 w-20" : "h-3 w-32"
          }`}
        />
      </div>
      <div
        className={`absolute inset-x-0 bottom-0 ${
          compact ? "top-8" : "top-10 p-4"
        }`}
      >
        {compact ? (
          <CompactScreenPreview kind={kind} />
        ) : (
          <>
            {kind === "home" ? <HomePreview /> : null}
            {kind === "login" ? <LoginPreview /> : null}
            {kind === "list" ? <ListPreview /> : null}
            {kind === "map" ? <MapPreview /> : null}
            {kind === "news" ? <NewsPreview /> : null}
            {kind === "certificate" ? <CertificatePreview /> : null}
          </>
        )}
      </div>
    </div>
  );
}

function HomePreview() {
  return (
    <div className="grid h-full gap-3 md:grid-cols-[1fr_0.75fr]">
      <div className="rounded-lg bg-gradient-to-br from-teal-700 to-emerald-500 p-4 text-white">
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
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <div className="h-3 w-24 rounded-full bg-slate-200" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-14 rounded-lg bg-teal-50" />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <div className="h-3 w-28 rounded-full bg-slate-200" />
          <div className="mt-4 space-y-2">
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 w-3/4 rounded-full bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginPreview() {
  return (
    <div className="grid h-full place-items-center">
      <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mx-auto size-12 rounded-full bg-teal-50" />
        <div className="mx-auto mt-4 h-4 w-40 rounded-full bg-slate-200" />
        <div className="mt-6 grid gap-3">
          {["企業使用者", "管理者", "一般訪客"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
              <div className="size-8 rounded-lg bg-teal-50" />
              <div className="h-3 w-24 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ListPreview() {
  return (
    <div className="grid h-full gap-3 md:grid-cols-[13rem_1fr]">
      <aside className="rounded-lg border border-slate-200 bg-white p-3">
        <div className="h-3 w-24 rounded-full bg-slate-200" />
        <div className="mt-5 space-y-3">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-8 rounded-lg bg-slate-50" />
          ))}
        </div>
      </aside>
      <div className="grid gap-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="grid grid-cols-[7rem_1fr] gap-3 rounded-lg border border-slate-200 bg-white p-3">
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
  );
}

function MapPreview() {
  return (
    <div className="relative h-full overflow-hidden rounded-lg border border-slate-200 bg-[#e9f5ef]">
      <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_0_46%,rgba(19,125,106,0.18)_46%_48%,transparent_48%_100%),linear-gradient(120deg,transparent_0_58%,rgba(128,202,206,0.3)_58%_60%,transparent_60%_100%)]" />
      <div className="absolute left-4 top-4 w-56 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        <div className="h-3 w-24 rounded-full bg-slate-200" />
        <div className="mt-3 grid gap-2">
          <div className="h-8 rounded-lg bg-slate-50" />
          <div className="h-8 rounded-lg bg-slate-50" />
        </div>
      </div>
      {[["70%", "28%"], ["58%", "62%"], ["82%", "52%"], ["42%", "38%"]].map(
        ([left, top]) => (
          <div
            key={`${left}-${top}`}
            className="absolute grid size-9 place-items-center rounded-full bg-cyanline text-white shadow-lg"
            style={{ left, top }}
          >
            <MapPinned className="size-4" aria-hidden="true" />
          </div>
        ),
      )}
    </div>
  );
}

function NewsPreview() {
  return (
    <div className="grid h-full gap-3">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <div className="h-4 w-36 rounded-full bg-slate-200" />
        <div className="mt-4 grid gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
              <div className="size-9 rounded-full bg-teal-100" />
              <div className="flex-1">
                <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                <div className="mt-2 h-2 w-1/2 rounded-full bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertificatePreview() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="h-4 w-36 rounded-full bg-slate-200" />
          <div className="mt-2 h-3 w-24 rounded-full bg-teal-100" />
        </div>
        <div className="h-10 w-48 rounded-lg border border-slate-200 bg-slate-50" />
      </div>
      <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="grid grid-cols-5 gap-3 border-b border-slate-200 p-3 last:border-b-0">
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 rounded-full bg-teal-100" />
            <div className="h-3 rounded-full bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

function existingPublicImage(src?: string) {
  if (!src?.startsWith("/")) {
    return undefined;
  }

  return existsSync(join(process.cwd(), "public", src.replace(/^\/+/, "")))
    ? src
    : undefined;
}

function GalleryVisual({
  image,
  visual,
  title,
  compact = false,
}: {
  image?: string;
  visual?: CaseStudyVisualKind;
  title: string;
  compact?: boolean;
}) {
  const existingImage = existingPublicImage(image);

  if (existingImage) {
    return (
      <div
        className={`relative overflow-hidden border-slate-200 bg-white shadow-sm ${
          compact
            ? "aspect-[16/10] border-b"
            : "aspect-[16/10] rounded-xl border"
        }`}
      >
        {compact ? (
          <Image
            src={existingImage}
            alt={title}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <ParallaxLayer
            className="absolute -inset-y-4 inset-x-0"
            speed={0.025}
            maxOffset={14}
          >
            <Image
              src={existingImage}
              alt={title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </ParallaxLayer>
        )}
      </div>
    );
  }

  if (isProjectFallbackVisual(visual)) {
    return (
      <div
        className={`overflow-hidden border-slate-200 bg-white shadow-sm ${
          compact
            ? "aspect-[16/10] border-b"
            : "aspect-[16/10] rounded-xl border"
        }`}
      >
        <CaseStudyVisualFallback kind={visual} />
      </div>
    );
  }

  return visual ? <ScreenMockup kind={visual} compact={compact} /> : null;
}

function CaseStudyBlock({ block }: { block: CaseStudyContentBlock }) {
  switch (block.type) {
    case "facts":
      return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {block.items.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-3 font-semibold leading-7 text-slate-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      );

    case "cards": {
      const columnClass =
        block.columns === 5
          ? "md:grid-cols-2 xl:grid-cols-5"
          : block.columns === 2
            ? "md:grid-cols-2"
            : "md:grid-cols-3";

      return (
        <div className={`grid gap-4 ${columnClass}`}>
          {block.items.map((card) => {
            const Icon = card.icon ? cardIcons[card.icon] : undefined;

            return (
              <TextCard
                key={`${card.eyebrow ?? ""}-${card.title}`}
                title={card.title}
                description={card.description}
                eyebrow={card.eyebrow}
                icon={
                  Icon ? (
                    <Icon
                      className={
                        card.eyebrow?.startsWith("Challenge")
                          ? "size-6"
                          : "size-5"
                      }
                      aria-hidden="true"
                    />
                  ) : undefined
                }
                largeIcon={card.eyebrow?.startsWith("Challenge")}
              />
            );
          })}
        </div>
      );
    }

    case "comparison":
      return (
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="font-semibold text-slate-950">
                {block.sourceTitle}
              </p>
            </div>
            <div className="hidden items-center justify-center text-cyanline md:flex">
              <ArrowRight className="size-5" aria-hidden="true" />
            </div>
            <div className="rounded-lg bg-teal-50 p-4">
              <p className="font-semibold text-slate-950">
                {block.targetTitle}
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-3">
            {block.items.map((item) => (
              <div
                key={item.source}
                className="grid gap-3 rounded-lg border border-slate-200 p-3 md:grid-cols-[1fr_auto_1fr]"
              >
                <p className="text-sm text-slate-600">{item.source}</p>
                <ArrowRight
                  className="hidden size-4 text-cyanline md:block"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-slate-950">
                  {item.target}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    case "design-goals":
      return null;

    case "feature-gallery":
      return (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {block.items.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-[0_18px_48px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)]"
            >
              <GalleryVisual
                image={item.image}
                visual={item.visual}
                title={item.title}
                compact
              />
              <div className="flex flex-1 flex-col p-5">
                {item.eyebrow ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyanline">
                    {item.eyebrow}
                  </p>
                ) : null}
                <h3 className="mt-3 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      );

    case "architecture":
      return (
        <>
          {block.showInteractiveSitemap ? (
            <div>
              <InteractiveSitemap />
            </div>
          ) : null}
        </>
      );

    case "sitemap-tree":
      return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 md:py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center">
            <div className="relative z-10 flex min-h-20 w-full max-w-72 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 px-6 py-4 text-center shadow-sm">
              <p className="text-lg font-semibold text-slate-950">
                {block.root}
              </p>
            </div>

            <div className="hidden w-full md:block">
              <div className="mx-auto h-10 w-px bg-slate-300" />
              <div className="relative grid grid-cols-7 gap-3 pt-10">
                <div className="absolute left-[7.14%] right-[7.14%] top-0 h-px bg-slate-300" />
                {block.items.map((item) => (
                  <div key={item} className="relative">
                    <div className="absolute -top-10 left-1/2 h-10 w-px -translate-x-1/2 bg-slate-300" />
                    <div className="flex min-h-28 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-5 text-center shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
                      <p className="text-sm font-semibold leading-6 text-slate-800">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-6 w-full max-w-lg space-y-3 pl-10 md:hidden">
              <div className="absolute bottom-6 left-4 top-0 w-px bg-slate-300" />
              {block.items.map((item) => (
                <div key={item} className="relative">
                  <div className="absolute -left-6 top-1/2 h-px w-6 bg-slate-300" />
                  <div className="flex min-h-16 items-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 shadow-sm">
                    <p className="text-sm font-semibold text-slate-800">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "flow":
      return (
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid items-stretch gap-3 md:grid-cols-2 xl:grid-cols-7">
            {block.items.map((step, index) => (
              <div key={step} className="relative">
                <div className="flex h-full min-h-32 flex-col justify-center rounded-lg border border-slate-200 bg-slate-50 p-4 xl:min-h-36">
                  <span className="text-xs font-semibold text-cyanline">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-950">
                    {step}
                  </p>
                </div>
                {index < block.items.length - 1 ? (
                  <ArrowRight
                    className="mx-auto my-2 size-4 text-cyanline xl:absolute xl:-right-3 xl:top-1/2 xl:my-0 xl:-translate-y-1/2"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      );

    case "design-system":
      return <DesignSystemFoundations />;

    case "ui-components":
      return (
        <div className="w-full min-w-0 rounded-[24px] bg-[#FBF9F4] p-3 sm:p-4 md:p-5">
          <CoreComponentsSection />
        </div>
      );

    case "gallery":
      return (
        <FinalDesignGallery
          items={block.items.map((item) => ({
            title: item.title,
            description: item.description,
            image: existingPublicImage(item.image),
            visual: item.visual,
          }))}
        />
      );

    case "visual-showcase": {
      if (
        block.items.length === 1 &&
        block.items[0]?.visual === "tcb-ui-components"
      ) {
        return <TcbDesignSystemBoard />;
      }

      if (
        block.items.length === 1 &&
        block.items[0]?.visual === "rmic-component-extension"
      ) {
        return <RmicComponentExtensionBoard />;
      }

      const isHeroGrid = block.layout === "hero-grid";
      const columnClass =
        block.layout === "single" ? "grid-cols-1" : "md:grid-cols-2";

      return (
        <div className={`grid gap-5 ${columnClass}`}>
          {block.items.map((item, index) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-[0_18px_48px_rgba(15,23,42,0.06)] sm:p-4 ${
                isHeroGrid && index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <GalleryVisual
                image={item.image}
                visual={item.visual}
                title={item.title}
              />
              <div className="px-1 pb-1 pt-4">
                <h3 className="text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      );
    }

    case "tags":
      return (
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {block.items.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      );

    case "image": {
      const image = existingPublicImage(block.src);

      return image ? (
        <figure>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <ParallaxLayer
              className="absolute -inset-y-4 inset-x-0"
              speed={0.025}
              maxOffset={14}
            >
              <Image
                src={image}
                alt={block.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </ParallaxLayer>
          </div>
          {block.caption ? (
            <figcaption className="mt-3 text-sm leading-6 text-slate-500">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : null;
    }
  }
}

export function CaseStudyPage({ project }: { project: Project }) {
  const contentSections = project.caseStudySections.filter(
    (section) => section.type !== "overview",
  );
  const prototypeInsertionIndex = Math.max(contentSections.length - 1, 0);

  return (
    <div>
      {contentSections.map((section, sectionIndex) => {
        const originalIndex = project.caseStudySections.indexOf(section);
        const designGoals =
          section.type === "goals"
            ? section.contentBlocks.find(
                (block) => block.type === "design-goals",
              )
            : undefined;

        const renderedSection =
          designGoals?.type === "design-goals" ? (
            <DesignGoalsSection
              sectionNumber={section.number}
              eyebrow={section.title}
              title={section.subtitle}
              description={section.description}
              goals={designGoals.goals}
              previewImage={designGoals.previewImage}
              previewVisual={designGoals.previewVisual}
              accentColor={project.theme.primary}
              secondaryColor={project.theme.secondary}
            />
          ) : (
            <CaseStudySectionLayout
              sectionNumber={section.number}
              eyebrow={section.title}
              title={section.subtitle}
              description={section.description}
              background={originalIndex % 2 === 0 ? "canvas" : "white"}
              layout={
                section.type === "user-flow" ? "narrative" : "showcase"
              }
              accentColor={project.theme.primary}
            >
              {section.contentBlocks.map((block, blockIndex) => (
                <CaseStudyBlock
                  key={`${section.number}-${block.type}-${blockIndex}`}
                  block={block}
                />
              ))}
            </CaseStudySectionLayout>
          );

        return (
          <div key={section.number}>
            {project.figmaPrototypeUrl &&
            sectionIndex === prototypeInsertionIndex ? (
              <InteractivePrototypeSection
                prototypeUrl={project.figmaPrototypeUrl}
                accentColor={project.theme.primary}
              />
            ) : null}
            {renderedSection}
          </div>
        );
      })}
    </div>
  );
}
