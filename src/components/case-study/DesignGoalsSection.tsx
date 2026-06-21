import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import {
  Check,
  ChevronDown,
  Heart,
  Layers3,
  Navigation,
  Search,
} from "lucide-react";
import type { CSSProperties } from "react";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { CaseStudySectionLayout } from "./CaseStudySectionLayout";
import {
  CaseStudyVisualFallback,
  type CaseStudyFallbackKind,
} from "./CaseStudyVisualFallback";
import type {
  CaseStudyVisualKind,
  DesignGoal,
  DesignGoalIcon,
} from "@/data/projects";

export type DesignGoalsSectionProps = {
  sectionNumber: string;
  eyebrow: string;
  title: string;
  description: string;
  goals: DesignGoal[];
  previewImage?: string;
  previewVisual?: CaseStudyVisualKind;
  accentColor?: string;
  secondaryColor?: string;
};

const goalIcons = {
  navigation: Navigation,
  layers: Layers3,
  check: Check,
} satisfies Record<DesignGoalIcon, typeof Navigation>;

function existingPublicImage(src?: string) {
  if (!src?.startsWith("/")) {
    return undefined;
  }

  return existsSync(join(process.cwd(), "public", src.replace(/^\/+/, "")))
    ? src
    : undefined;
}

function PlatformPreview() {
  const metrics = [
    ["80", "林地專案"],
    ["33", "參與單位"],
    ["12", "媒合案件"],
    ["8", "合作企業"],
  ];

  return (
    <div className="relative min-h-[34rem] overflow-hidden rounded-lg border border-slate-200 bg-[#f8faf9] shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
      <div className="flex h-14 items-center border-b border-slate-200 bg-white px-4 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-full bg-[var(--goal-accent)] text-xs font-bold text-white">
            ESG
          </span>
          <span className="text-sm font-semibold text-slate-950">
            Forest Platform
          </span>
        </div>
        <nav className="ml-auto hidden items-center gap-5 text-xs font-medium text-slate-500 sm:flex">
          <span>專案查詢</span>
          <span>成果展示</span>
          <span>關於平台</span>
          <span className="rounded-full bg-[var(--goal-accent)] px-3 py-2 text-white">
            登入
          </span>
        </nav>
      </div>

      <div className="relative overflow-hidden bg-[var(--goal-accent)] px-5 py-8 text-white sm:px-8 sm:py-10">
        <div className="absolute right-[-4rem] top-[-7rem] size-64 rounded-full border-[34px] border-white/10" />
        <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
          ESG Project Matching
        </p>
        <h3 className="relative mt-3 max-w-md text-2xl font-semibold leading-tight sm:text-3xl">
          讓永續專案與企業需求更容易相遇
        </h3>
        <p className="relative mt-3 max-w-lg text-sm leading-6 text-white/75">
          探索森林與自然碳匯專案，從條件查詢到合作媒合一次完成。
        </p>
        <div className="relative mt-6 flex max-w-xl items-center gap-3 rounded-lg bg-white p-2 shadow-lg">
          <Search
            className="ml-2 size-4 text-slate-400"
            aria-hidden="true"
          />
          <span className="min-w-0 flex-1 truncate text-sm text-slate-400">
            搜尋地區、專案類型或關鍵字
          </span>
          <button className="h-9 rounded-lg bg-[var(--goal-accent)] px-4 text-xs font-semibold text-white">
            搜尋
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {metrics.map(([value, label]) => (
            <div
              key={label}
              className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
            >
              <p className="text-xl font-semibold text-[var(--goal-accent)]">
                {value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--goal-accent)]">
              Featured Projects
            </p>
            <h4 className="mt-1 text-lg font-semibold text-slate-950">
              精選 ESG 專案
            </h4>
          </div>
          <button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600">
            最新上架
            <ChevronDown className="size-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            ["森林碳匯共創計畫", "臺灣中部 · 120 公頃", "媒合中"],
            ["原生林復育專案", "臺灣東部 · 86 公頃", "已驗證"],
          ].map(([title, meta, status], index) => (
            <article
              key={title}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <div
                className={`relative h-24 ${
                  index
                    ? "bg-[#dcefe9]"
                    : "bg-[color-mix(in_srgb,var(--goal-secondary)_35%,white)]"
                }`}
              >
                <div className="absolute inset-x-0 bottom-0 h-14 bg-[linear-gradient(155deg,transparent_0_34%,rgba(19,125,106,0.24)_35%_58%,rgba(19,125,106,0.42)_59%)]" />
                <button
                  className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white text-slate-500 shadow-sm"
                  aria-label={`收藏${title}`}
                >
                  <Heart className="size-4" aria-hidden="true" />
                </button>
              </div>
              <div className="p-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-950">
                      {title}
                    </h5>
                    <p className="mt-1 text-xs text-slate-500">{meta}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                    {status}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                  <span className="text-slate-500">預估碳匯效益</span>
                  <span className="font-semibold text-[var(--goal-accent)]">
                    {index ? "8,920" : "12,450"} tCO2e
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DesignGoalsSection({
  sectionNumber,
  eyebrow,
  title,
  description,
  goals,
  previewImage,
  previewVisual,
  accentColor = "#137D6A",
  secondaryColor = "#80CACE",
}: DesignGoalsSectionProps) {
  const image = existingPublicImage(previewImage);

  return (
    <CaseStudySectionLayout
      sectionNumber={sectionNumber}
      eyebrow={eyebrow}
      title={title}
      description={description}
      background="canvas"
      layout="narrative"
      accentColor={accentColor}
      style={
        {
          "--goal-accent": accentColor,
          "--goal-secondary": secondaryColor,
        } as CSSProperties
      }
      introChildren={
        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {goals.map((goal) => {
            const Icon = goalIcons[goal.icon];

            return (
              <article
                key={goal.title}
                className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 py-5"
              >
                <div className="grid size-10 place-items-center rounded-lg border border-[color-mix(in_srgb,var(--goal-accent)_22%,white)] bg-[color-mix(in_srgb,var(--goal-accent)_8%,white)] text-[var(--goal-accent)]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {goal.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      }
    >
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
          <ParallaxLayer
            className="absolute -inset-y-4 inset-x-0"
            speed={0.025}
            maxOffset={14}
          >
            <Image
              src={image}
              alt={`${title}成果示意圖`}
              fill
              sizes="(min-width: 1024px) 75vw, 100vw"
              className="object-cover"
            />
          </ParallaxLayer>
        </div>
      ) : previewVisual?.startsWith("tcb-") ||
        previewVisual?.startsWith("rmic-") ||
        previewVisual?.startsWith("jule-") ? (
        <div className="aspect-[16/10] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
          <CaseStudyVisualFallback
            kind={previewVisual as CaseStudyFallbackKind}
          />
        </div>
      ) : (
        <PlatformPreview />
      )}
    </CaseStudySectionLayout>
  );
}
