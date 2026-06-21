import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import type { CSSProperties } from "react";
import {
  CaseStudyVisualFallback,
  type CaseStudyFallbackKind,
} from "@/components/case-study/CaseStudyVisualFallback";
import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  project: Project;
  compact?: boolean;
  variant?: "light" | "dark";
};

function getExistingProjectImage(
  project: Project,
  compact: boolean,
): string | undefined {
  const candidates = compact
    ? [project.coverImage]
    : [project.heroImage, project.coverImage];

  return candidates.find((imagePath) => {
    if (!imagePath?.startsWith("/")) {
      return false;
    }

    return existsSync(
      join(process.cwd(), "public", imagePath.replace(/^\/+/, "")),
    );
  });
}

export function ProjectVisual({
  project,
  compact = false,
  variant = "light",
}: ProjectVisualProps) {
  const image = getExistingProjectImage(project, compact);
  const imageRole = compact
    ? "cover"
    : image === project.heroImage
      ? "hero"
      : "cover-fallback";

  if (image) {
    return (
      <div
        key={`${project.slug}-${imageRole}-${image}`}
        className={`relative aspect-[16/10] overflow-hidden rounded-lg border ${
          variant === "dark"
            ? "border-white/10 bg-slate-950 shadow-[0_28px_80px_rgba(0,0,0,0.42)]"
            : "border-slate-200 bg-white shadow-portfolio-card"
        }`}
        data-project-image={`${project.slug}:${imageRole}`}
      >
        <Image
          src={image}
          alt={`${project.title} ${compact ? "專案封面" : "專案主視覺"}`}
          fill
          sizes={
            compact
              ? "(min-width: 1024px) 44vw, 100vw"
              : "(min-width: 1024px) 52vw, 100vw"
          }
          priority={!compact}
          className={
            compact
              ? "object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.015] motion-reduce:transition-none"
              : "object-cover"
          }
        />
      </div>
    );
  }

  if (
    project.visualFallback?.startsWith("tcb-") ||
    project.visualFallback?.startsWith("rmic-") ||
    project.visualFallback?.startsWith("jule-")
  ) {
    return (
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-lg border ${
          variant === "dark"
            ? "border-white/10 bg-slate-950 shadow-[0_28px_80px_rgba(0,0,0,0.42)]"
            : "border-slate-200 bg-white shadow-portfolio-card"
        }`}
      >
        <CaseStudyVisualFallback
          kind={project.visualFallback as CaseStudyFallbackKind}
        />
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-portfolio-card"
      style={
        {
          "--project-primary": project.theme.primary,
          "--project-secondary": project.theme.secondary,
          "--project-accent": project.theme.accent,
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,color-mix(in_srgb,var(--project-primary)_22%,transparent),transparent_24rem),linear-gradient(180deg,rgba(248,250,252,0.8),rgba(255,255,255,0.96))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(15,23,42,0.16),transparent)]" />

      <div className={compact ? "p-4" : "p-5 md:p-7"}>
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[var(--project-primary)]" />
            <span className="size-2 rounded-full bg-[var(--project-secondary)]" />
            <span className="size-2 rounded-full bg-[var(--project-accent)]" />
          </div>
          <div className="h-2 w-24 rounded-full bg-slate-200" />
        </div>

        <div className="grid gap-4 md:grid-cols-[0.7fr_1fr]">
          <div className="space-y-3">
            <div className="rounded-lg border border-slate-200 bg-white/85 p-3 shadow-sm">
              <div className="mb-3 h-2 w-16 rounded-full bg-slate-200" />
              <div className="h-20 rounded-lg bg-[linear-gradient(145deg,var(--project-primary),rgba(255,255,255,0.84))]" />
            </div>
            <div className="rounded-lg border border-slate-200 bg-white/85 p-3 shadow-sm">
              <div className="h-2 w-20 rounded-full bg-slate-200" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="h-12 rounded-lg border border-slate-200 bg-slate-50"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white/90 p-3 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-2 w-28 rounded-full bg-slate-200" />
              <div className="h-6 w-16 rounded-lg border border-slate-200 bg-slate-50" />
            </div>
            <div className="grid h-44 grid-cols-6 items-end gap-2">
              {[44, 72, 56, 92, 68, 112].map((height, index) => (
                <div
                  key={height}
                  className="rounded-t bg-[linear-gradient(180deg,var(--project-primary),rgba(15,23,42,0.08))]"
                  style={{
                    height: `${compact ? height * 0.72 : height}px`,
                    opacity: 0.72 + index * 0.04,
                  }}
                />
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="h-16 rounded-lg border border-slate-200 bg-slate-50" />
              <div className="h-16 rounded-lg border border-slate-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),var(--project-secondary))] opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
