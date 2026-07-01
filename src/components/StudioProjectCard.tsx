import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { StudioProject } from "@/data/x3Content";

type StudioProjectCardProps = {
  project: StudioProject;
  priority?: boolean;
};

export function StudioProjectCard({
  project,
  priority = false,
}: StudioProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
      aria-label={`View ${project.title} project detail`}
    >
      <article>
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
          <Image
            src={project.coverImage}
            alt={`${project.title} interior project`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="border-b border-warm-line pb-7 pt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
            {project.category} · {project.location}
          </p>
          <div className="mt-3 flex items-start justify-between gap-5">
            <h3 className="font-serif text-2xl font-medium text-stone-950">
              {project.title}
            </h3>
            <span className="text-sm text-stone-500">{project.year}</span>
          </div>
          <p className="mt-2 text-sm text-stone-500">{project.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-stone-500">
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.16em] text-stone-950">
              View
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
