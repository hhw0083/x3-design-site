import { existsSync } from "node:fs";
import { join } from "node:path";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Clock3,
  PackageCheck,
  PanelsTopLeft,
} from "lucide-react";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ProjectVisual } from "@/components/ProjectVisual";
import type { Project } from "@/data/projects";

type ProjectHeroProps = {
  project: Project;
};

const metaIcons = {
  Role: BriefcaseBusiness,
  Scope: PanelsTopLeft,
  Timeline: Clock3,
  Deliverables: PackageCheck,
};

const metaDividerClasses = [
  "",
  "border-t border-slate-200/70 md:border-l md:border-t-0",
  "border-t border-slate-200/70 lg:border-l lg:border-t-0",
  "border-t border-slate-200/70 md:border-l lg:border-t-0",
];

function getExistingPublicImage(imagePath?: string): string | undefined {
  if (!imagePath?.startsWith("/")) {
    return undefined;
  }

  return existsSync(
    join(process.cwd(), "public", imagePath.replace(/^\/+/, "")),
  )
    ? imagePath
    : undefined;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const desktopHeroImage =
    getExistingPublicImage(project.heroImage) ??
    getExistingPublicImage(project.coverImage);
  const mobileHeroImage =
    getExistingPublicImage(project.heroMobileImage) ?? desktopHeroImage;

  const metaItems: {
    label: keyof typeof metaIcons;
    content: ReactNode;
  }[] = [
    {
      label: "Role",
      content: project.role,
    },
    {
      label: "Scope",
      content: project.scope,
    },
    {
      label: "Timeline",
      content: project.timeline,
    },
    {
      label: "Deliverables",
      content: (
        <>
          {project.deliverables.map((deliverable, index) => (
            <span key={deliverable} className="whitespace-nowrap">
              {deliverable}
              {index < project.deliverables.length - 1 ? " / " : ""}
            </span>
          ))}
        </>
      ),
    },
  ];

  return (
    <section
      className="relative isolate overflow-hidden border-b border-slate-200/80 bg-[#F4F5F6] pb-12 pt-20 text-slate-950 sm:pt-24 md:pb-20 md:pt-28"
      style={
        {
          "--project-primary": project.theme.primary,
          "--project-secondary": project.theme.secondary,
          "--project-accent": project.theme.accent,
        } as CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(135deg,#FFFFFF_0%,#F5F6F7_48%,#E9EBEE_100%)]">
        <ParallaxLayer
          className="absolute bottom-[8%] right-[4%] hidden h-[68%] w-[58%] rounded-[2.5rem] bg-slate-950/20 blur-3xl md:block"
          speed={-0.02}
          maxOffset={14}
        >
          <span />
        </ParallaxLayer>
        {desktopHeroImage ? (
          <ParallaxLayer
            className="absolute -inset-y-8 inset-x-0 hidden md:block"
            speed={0.035}
            maxOffset={24}
          >
            <Image
              src={desktopHeroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[72%_center] drop-shadow-[0_30px_42px_rgba(15,23,42,0.28)]"
              aria-hidden="true"
            />
          </ParallaxLayer>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(135deg,rgba(250,251,252,0.98)_0%,rgba(250,251,252,0.92)_48%,rgba(245,247,249,0.45)_100%)] md:bg-[linear-gradient(90deg,rgba(250,251,252,1)_0%,rgba(250,251,252,0.99)_32%,rgba(250,251,252,0.96)_44%,rgba(250,251,252,0.82)_52%,rgba(250,251,252,0.56)_61%,rgba(245,247,249,0.28)_69%,rgba(245,247,249,0.10)_76%,transparent_84%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(244,246,248,0.06)_62%,rgba(244,245,246,0.42)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.15)_44%,rgba(248,250,252,0.08)_60%,rgba(248,250,252,0.03)_72%,transparent_82%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal distance={14} duration={650}>
          <div className="grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-3 md:grid-cols-[6rem_minmax(0,1fr)_auto] md:gap-6">
            <p className="text-4xl font-semibold leading-none text-cyanline md:text-6xl">
              01
            </p>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyanline md:tracking-[0.16em]">
                Project Overview
              </p>
              <h2 className="mt-1.5 text-2xl font-semibold leading-tight text-slate-950 md:text-4xl">
                專案概覽
              </h2>
            </div>

            <Link
              href="/#projects"
              className="inline-flex h-10 shrink-0 items-center gap-2 justify-self-end rounded-lg border border-slate-300/80 bg-white/70 px-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-[background-color,border-color,color,box-shadow] duration-200 hover:border-slate-400 hover:bg-white hover:text-slate-950 hover:shadow-md"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">Back to projects</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
        </MotionReveal>

        <div className="mt-9 md:mt-12 md:min-h-[34rem] lg:flex lg:min-h-[38rem] lg:items-center">
          <div className="max-w-2xl lg:w-1/2">
            <MotionReveal delay={40} distance={18}>
              <h1 className="text-4xl font-semibold leading-[1.12] text-slate-950 sm:text-5xl lg:text-[3.5rem]">
                {project.title}
              </h1>
            </MotionReveal>
            <MotionReveal delay={100} distance={16}>
              <p className="mt-3 text-lg font-medium text-slate-500 md:text-xl">
                {project.subtitle}
              </p>
            </MotionReveal>
            <MotionReveal delay={160} distance={16}>
              <p className="mt-5 max-w-xl whitespace-pre-line text-base leading-8 text-slate-600 md:mt-7 md:text-lg md:leading-9">
                {project.description}
              </p>
            </MotionReveal>
            <MotionReveal delay={220} distance={14}>
              <div className="mt-6 flex flex-wrap gap-2.5 md:mt-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-slate-200/90 bg-white/65 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </MotionReveal>
          </div>

          <div className="mt-7 md:hidden">
            {mobileHeroImage ? (
              <MotionReveal delay={270} distance={16}>
                <div
                  className="relative aspect-[16/11] max-h-[24rem] w-full bg-transparent drop-shadow-[0_18px_24px_rgba(15,23,42,0.16)]"
                  data-project-image={`${project.slug}:${
                    mobileHeroImage === project.heroMobileImage
                      ? "hero-mobile"
                      : "hero"
                  }`}
                >
                  <Image
                    src={mobileHeroImage}
                    alt={`${project.title} 專案主視覺`}
                    fill
                    priority
                    sizes="(max-width: 767px) calc(100vw - 2rem), 100vw"
                    className="object-contain object-center"
                  />
                </div>
              </MotionReveal>
            ) : (
              <ProjectVisual project={project} />
            )}
          </div>
        </div>

        <MotionReveal
          className="mt-8 md:mt-14"
          delay={300}
          distance={18}
          duration={760}
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/60 shadow-[0_24px_80px_rgba(15,23,42,0.09),0_0_28px_rgba(20,184,166,0.06)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(94,234,212,0.46),rgba(255,255,255,0.95),rgba(94,234,212,0.36),transparent)]" />
            <div className="pointer-events-none absolute -right-16 -top-20 size-48 rounded-full bg-white/55 blur-3xl" />
            <dl className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {metaItems.map((item, index) => {
                const Icon = metaIcons[item.label];

                return (
                  <div
                    key={item.label}
                    className={`min-w-0 p-6 md:p-7 ${metaDividerClasses[index]}`}
                  >
                    <dt className="flex items-center gap-3 text-sm font-semibold text-slate-950">
                      <Icon
                        className="size-5 shrink-0 text-cyanline"
                        aria-hidden="true"
                      />
                      {item.label}
                    </dt>
                    <dd className="mt-4 text-sm leading-7 text-slate-600">
                      {item.content}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
