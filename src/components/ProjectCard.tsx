import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`查看 ${project.title} 專案`}
      className="group mb-8 block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-cyanline focus-visible:ring-offset-4"
    >
      <article className="grid transform-gpu gap-7 rounded-lg border border-slate-200 bg-white p-4 shadow-portfolio-card [backface-visibility:hidden] will-change-transform transition-[transform,border-color,box-shadow] duration-300 ease-out motion-safe:group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)] motion-reduce:transition-none md:p-6 lg:grid-cols-[0.95fr_1fr] lg:gap-10">
        <ProjectVisual project={project} compact />
        <div className="min-w-0 flex flex-col justify-between gap-8">
          <div>
            <p className="text-sm font-medium text-cyanline">
              {project.eyebrow}
            </p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <h3 className="text-2xl font-semibold text-slate-950 md:text-3xl">
                {project.title}
              </h3>
              <span className="text-sm text-slate-500">{project.year}</span>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-lg font-semibold text-slate-950">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
            <span className="inline-flex h-11 items-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-semibold text-white transition-colors duration-300 ease-out group-hover:bg-cyanline motion-reduce:transition-none">
              View case
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
