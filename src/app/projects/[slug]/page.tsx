import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MotionReveal } from "@/components/motion/MotionReveal";
import {
  getProjectCardMeta,
  getProjectCardYear,
  projectCardTextClasses,
} from "@/components/projectCardTokens";
import { typographyClasses } from "@/components/typographyTokens";
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
  "aspect-[3/2] md:col-span-2 lg:col-span-8",
  "aspect-[4/5] lg:col-span-4",
  "aspect-[5/6] lg:col-span-5",
  "aspect-[16/10] md:col-span-2 lg:col-span-7",
  "aspect-[4/5] lg:col-span-4",
  "aspect-[3/2] md:col-span-2 lg:col-span-8",
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
  const previousProject =
    studioProjects[
      (projectIndex - 1 + studioProjects.length) % studioProjects.length
    ];
  const nextProject =
    studioProjects[(projectIndex + 1) % studioProjects.length];
  const projectNavigation = [
    {
      label: "Previous Project",
      project: previousProject,
    },
    {
      label: "Next Project",
      project: nextProject,
    },
  ];

  return (
    <main className="min-h-screen bg-cream pt-24 text-stone-950 md:pt-28">
      <section className="border-b border-warm-line pb-10 md:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1.16fr)_minmax(21rem,0.84fr)] lg:items-start lg:gap-14 xl:gap-16">
            <MotionReveal distance={18}>
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 sm:aspect-[16/11] lg:min-h-[calc(100svh-9rem)] lg:aspect-auto">
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
              <aside className="flex h-full min-h-[28rem] flex-col justify-between border-y border-warm-line py-6 md:py-7 lg:min-h-[calc(100svh-9rem)]">
                <div>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-stone-950"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    Projects
                  </Link>
                  <p className={`mt-8 ${typographyClasses.metaValue} text-stone-500`}>
                    {project.category} · {project.location}
                  </p>
                  <h1 className="mt-5 text-balance font-sans text-project-detail-title font-medium text-stone-950">
                    {project.title}
                  </h1>
                  <p className="mt-5 text-project-detail-lede text-stone-600">
                    {project.subtitle}
                  </p>

                  <div className="mt-8 grid border-y border-warm-line sm:grid-cols-2 lg:grid-cols-4">
                    {project.details.map((item) => (
                      <div
                        key={item.label}
                        className="border-b border-warm-line py-4 sm:px-5 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:px-4 lg:last:border-r-0"
                      >
                        <p className={typographyClasses.metaLabel}>
                          {item.label}
                        </p>
                        <p className={`mt-2 ${typographyClasses.metaValue}`}>
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 space-y-5">
                    {project.overview.map((paragraph) => (
                      <p
                        key={paragraph}
                        className={`text-pretty ${typographyClasses.bodyCopy}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {project.scope.map((item) => (
                    <span
                      key={item}
                      className={`border border-warm-line bg-warm-paper px-3 py-1.5 ${typographyClasses.chip}`}
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
        <section className="border-b border-warm-line py-10 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <MotionReveal distance={14}>
              <div className="mb-8 flex items-center justify-between gap-4 text-stone-500 md:mb-10">
                <p className={typographyClasses.metaValue}>Gallery</p>
                <span>{project.galleryImages.length} views</span>
              </div>
            </MotionReveal>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-12">
              {project.galleryImages.map((image, index) => (
                <MotionReveal
                  key={image}
                  delay={Math.min(index * 55, 165)}
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal distance={14}>
            <div className="mb-12 flex items-start justify-between gap-8 text-stone-500 md:mb-16">
              <p className={typographyClasses.sectionTitle}>
                More Projects
              </p>
              <Link
                href="/projects"
                className={`border-b border-warm-line pb-2 font-medium transition hover:border-stone-950 hover:text-stone-950 ${typographyClasses.metaLabel}`}
              >
                All Projects
              </Link>
            </div>
          </MotionReveal>

          <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            {projectNavigation.map(
              ({ label, project: linkedProject }, index) => (
                <MotionReveal
                  key={label}
                  delay={index * 80}
                  distance={18}
                  threshold={0.02}
                >
                  <Link
                    href={`/projects/${linkedProject.slug}`}
                    aria-label={`View ${label.toLowerCase()}: ${linkedProject.title}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                      <Image
                        src={linkedProject.coverImage}
                        alt={`${linkedProject.title} project preview`}
                        fill
                        unoptimized
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.025]"
                      />
                    </div>

                    <div className="mt-6">
                      <div className="flex items-start justify-between gap-6">
                        <h2 className={`text-balance ${projectCardTextClasses.interactiveTitle}`}>
                          {linkedProject.title}
                        </h2>
                        {getProjectCardYear(linkedProject.year) ? (
                          <p className={`${projectCardTextClasses.year} pt-1`}>
                            {getProjectCardYear(linkedProject.year)}
                          </p>
                        ) : null}
                      </div>

                      <p className={`mt-3 ${projectCardTextClasses.detail}`}>
                        {getProjectCardMeta(linkedProject)}
                      </p>
                    </div>
                  </Link>
                </MotionReveal>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
