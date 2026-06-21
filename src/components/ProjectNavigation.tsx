import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
import type { Project } from "@/data/projects";

type ProjectNavigationProps = {
  previousProject: Project;
  nextProject: Project;
};

type ProjectNavigationCardProps = {
  direction: "previous" | "next";
  project: Project;
};

function ProjectNavigationCard({
  direction,
  project,
}: ProjectNavigationCardProps) {
  const isPrevious = direction === "previous";
  const label = isPrevious ? "Previous project" : "Next project";

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`${label}: ${project.title}`}
      className="group block h-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-cyanline focus-visible:ring-offset-4"
    >
      <article className="h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-portfolio-card transition duration-300 group-hover:-translate-y-1 group-hover:border-cyanline/35 group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
        <div className="p-2.5 sm:p-3 md:p-4">
          <ProjectVisual project={project} compact />
        </div>

        <div
          className={`flex min-h-36 flex-col gap-3 border-t border-slate-200 px-3 py-4 md:min-h-28 md:flex-row md:items-center md:gap-4 md:px-6 md:py-5 ${
            isPrevious ? "" : "text-right"
          }`}
        >
          {isPrevious && (
            <span className="order-2 flex size-9 shrink-0 items-center justify-center self-start rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition group-hover:border-cyanline/30 group-hover:bg-cyanline group-hover:text-white md:order-1 md:size-10">
              <ArrowLeft className="size-4" aria-hidden="true" />
            </span>
          )}

          <div
            className={`order-1 flex-1 ${isPrevious ? "" : "md:ml-auto"}`}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-cyanline md:text-xs md:tracking-[0.16em]">
              {label}
            </p>
            <h2 className="mt-2 break-words text-sm font-semibold leading-snug text-slate-950 sm:text-base md:text-2xl">
              {project.title}
            </h2>
          </div>

          {!isPrevious && (
            <span className="order-2 flex size-9 shrink-0 items-center justify-center self-end rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition group-hover:border-cyanline/30 group-hover:bg-cyanline group-hover:text-white md:size-10">
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}

export function ProjectNavigation({
  previousProject,
  nextProject,
}: ProjectNavigationProps) {
  return (
    <nav
      aria-label="Project navigation"
      className="grid grid-cols-2 gap-3 md:gap-6"
    >
      <ProjectNavigationCard
        direction="previous"
        project={previousProject}
      />
      <ProjectNavigationCard direction="next" project={nextProject} />
    </nav>
  );
}
