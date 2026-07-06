import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createPageMetadata } from "@/config/site";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { pageTitleClasses } from "@/components/pageTitleTokens";
import { StudioProjectCard } from "@/components/StudioProjectCard";
import { getStudioProjects } from "@/data/studioProjects";

export const metadata: Metadata = createPageMetadata({
  title: "空間作品",
  description:
    "瀏覽辰山設計的住宅與空間設計作品，從材質、尺度與生活需求出發，整理空間的秩序與細節。",
  path: "/projects",
});

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
          <h1 className="sr-only">空間作品｜辰山設計 X3 Design</h1>

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
