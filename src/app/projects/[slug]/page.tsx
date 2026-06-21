import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { ProjectNavigation } from "@/components/ProjectNavigation";
import { ProjectHero } from "@/components/case-study/ProjectHero";
import { visibleProjects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return visibleProjects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return visibleProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | UI/UX Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = visibleProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const previousProject =
    visibleProjects[
      (projectIndex - 1 + visibleProjects.length) % visibleProjects.length
    ];
  const nextProject =
    visibleProjects[(projectIndex + 1) % visibleProjects.length];

  return (
    <main className="min-h-screen bg-canvas text-slate-950">
      <ProjectHero project={project} />

      <CaseStudyPage project={project} />

      <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectNavigation
            previousProject={previousProject}
            nextProject={nextProject}
          />
        </div>
      </section>
    </main>
  );
}
