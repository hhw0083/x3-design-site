import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/motion/MotionReveal";
import {
  getStudioProject,
  studioProjects,
} from "@/data/x3Content";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return studioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getStudioProject(slug);

  if (!project) {
    return {
      title: "Project not found | X3 Design",
    };
  }

  return {
    title: `${project.title} | X3 Design`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getStudioProject(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = studioProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const nextProject =
    studioProjects[(projectIndex + 1) % studioProjects.length];

  return (
    <main className="min-h-screen bg-cream pt-32 text-stone-950 md:pt-40">
      <section className="border-b border-warm-line pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-stone-950"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Projects
            </Link>
            <div className="mt-10 grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-end lg:gap-20">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
                  {project.category} · {project.location}
                </p>
                <h1 className="mt-4 text-balance font-serif text-5xl font-medium leading-tight text-stone-950 md:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-5 text-xl text-stone-500">
                  {project.subtitle}
                </p>
              </div>
              <p className="max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
                {project.description}
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal distance={16}>
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 md:aspect-[16/8]">
              <Image
                src={project.coverImage}
                alt={`${project.title} interior view`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="border-b border-warm-line pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {project.galleryImages.map((image, index) => (
              <MotionReveal
                key={image}
                delay={Math.min(index * 70, 160)}
                distance={16}
              >
                <div
                  className={`relative overflow-hidden bg-stone-100 ${
                    index === 0
                      ? "aspect-[16/10] md:col-span-2"
                      : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} detail view ${index + 1}`}
                    fill
                    sizes={
                      index === 0
                        ? "(min-width: 768px) 66vw, 100vw"
                        : "(min-width: 768px) 33vw, 100vw"
                    }
                    className="object-cover"
                  />
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-warm-line bg-warm-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.65fr_1fr] lg:gap-20 lg:px-8">
          <MotionReveal>
            <div className="grid border-y border-warm-line text-sm text-stone-600 sm:grid-cols-2 lg:grid-cols-1">
              {project.details.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-warm-line py-5 last:border-b-0 sm:px-5 sm:first:pl-0 lg:px-0"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                    {item.label}
                  </p>
                  <p className="mt-2 font-medium text-stone-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal delay={80}>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
                Overview
              </p>
              <div className="mt-6 grid gap-6 text-base leading-8 text-stone-600 md:text-lg md:leading-9">
                {project.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
                  Scope
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.scope.map((item) => (
                    <span
                      key={item}
                      className="border border-warm-line bg-cream px-3 py-1.5 text-sm text-stone-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
              Next Project
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-stone-950">
              {nextProject.title}
            </h2>
          </div>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex h-12 items-center justify-center gap-2 border border-stone-950 px-5 text-sm font-semibold text-stone-950 transition hover:bg-stone-950 hover:text-white"
          >
            View Next
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
