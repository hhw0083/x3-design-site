import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { pageTitleClasses } from "@/components/pageTitleTokens";
import { StudioProjectCard } from "@/components/StudioProjectCard";
import { getStudioProjects } from "@/data/studioProjects";

export const metadata: Metadata = {
  title: "Projects | X3 Design",
  description:
    "Explore X3 Design residential interior projects, customization planning, and warm minimal project showcases.",
};

export default function ProjectsPage() {
  const studioProjects = getStudioProjects();

  return (
    <main className="min-h-screen bg-cream pt-24 text-stone-950 md:pt-28">
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className={pageTitleClasses.navRow}>
              <Link href="/" className={pageTitleClasses.backLink}>
                <ArrowLeft className="size-4" aria-hidden="true" />
                Home
              </Link>
              <p className={pageTitleClasses.kicker}>Projects</p>
            </div>
          </MotionReveal>

          <div className="grid gap-10 lg:grid-cols-3">
            {studioProjects.map((project, index) => (
              <MotionReveal
                key={project.slug}
                delay={Math.min(index * 70, 160)}
                distance={18}
              >
                <StudioProjectCard project={project} priority={index === 0} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
