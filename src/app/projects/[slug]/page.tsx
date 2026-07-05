import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/motion/MotionReveal";
import {
  getStudioProject,
  getStudioProjects,
} from "@/data/studioProjects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const galleryFrameClasses = [
  "aspect-[16/11] md:col-span-2 lg:col-span-7",
  "aspect-[4/5] lg:col-span-5",
  "aspect-[4/5] lg:col-span-4",
  "aspect-[16/9] md:col-span-2 lg:col-span-8",
];

function getGalleryFrameClass(index: number) {
  return galleryFrameClasses[index % galleryFrameClasses.length];
}

export const dynamicParams = false;

export function generateStaticParams() {
  const studioProjects = getStudioProjects();

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
  const studioProjects = getStudioProjects();
  const project = getStudioProject(slug, studioProjects);

  if (!project) {
    notFound();
  }

  const projectIndex = studioProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const nextProject =
    studioProjects[(projectIndex + 1) % studioProjects.length];

  return (
    <main className="min-h-screen bg-cream pt-28 text-stone-950 md:pt-36">
      <section className="border-b border-warm-line pb-14 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-stone-950"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Projects
            </Link>
          </MotionReveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:items-start lg:gap-14 xl:gap-16">
            <MotionReveal distance={18}>
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 sm:aspect-[16/11] lg:min-h-[calc(100svh-13rem)] lg:aspect-auto">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} interior view`}
                  fill
                  priority
                  unoptimized
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </MotionReveal>

            <MotionReveal
              delay={90}
              distance={18}
              className="lg:sticky lg:top-28"
            >
              <aside className="flex h-full min-h-[32rem] flex-col justify-between border-y border-warm-line py-7 md:py-8 lg:min-h-[calc(100svh-13rem)]">
                <div>
                  <p className="text-sm leading-6 text-stone-500">
                    {project.category} · {project.location}
                  </p>
                  <h1 className="mt-5 text-balance font-sans text-4xl font-medium leading-tight text-stone-950 md:text-5xl xl:text-6xl">
                    {project.title}
                  </h1>
                  <p className="mt-5 text-xl leading-8 text-stone-600">
                    {project.subtitle}
                  </p>

                  <div className="mt-8 grid border-y border-warm-line text-sm text-stone-600 sm:grid-cols-2">
                    {project.details.map((item) => (
                      <div
                        key={item.label}
                        className="border-b border-warm-line py-4 odd:sm:border-r odd:sm:pr-5 even:sm:pl-5 sm:[&:nth-last-child(-n+2)]:border-b-0"
                      >
                        <p className="text-xs uppercase tracking-[0.16em] text-stone-400">
                          {item.label}
                        </p>
                        <p className="mt-2 font-medium text-stone-900">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 space-y-5 text-base leading-8 text-stone-600">
                    {project.overview.map((paragraph) => (
                      <p key={paragraph} className="text-pretty">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {project.scope.map((item) => (
                    <span
                      key={item}
                      className="border border-warm-line bg-warm-paper px-3 py-1.5 text-sm text-stone-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </aside>
            </MotionReveal>
          </div>
        </div>
      </section>

      {project.galleryImages.length > 0 ? (
        <section className="border-b border-warm-line py-8 md:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <MotionReveal distance={14}>
              <div className="mb-6 flex items-center justify-between gap-4 text-sm text-stone-500">
                <p>More Images</p>
                <span>{project.galleryImages.length} views</span>
              </div>
            </MotionReveal>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
              {project.galleryImages.map((image, index) => (
                <MotionReveal
                  key={image}
                  delay={Math.min(index * 60, 180)}
                  distance={16}
                  className={getGalleryFrameClass(index)}
                >
                  <div className="relative h-full overflow-hidden bg-stone-100">
                    <Image
                      src={image}
                      alt={`${project.title} detail view ${index + 1}`}
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
              Next Project
            </p>
            <h2 className="mt-3 font-sans text-3xl font-medium text-stone-950">
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
