import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { StudioProjectCard } from "@/components/StudioProjectCard";
import { studioProjects } from "@/data/x3Content";

export const metadata: Metadata = {
  title: "Projects | X3 Design",
  description:
    "Explore X3 Design residential interior projects, customization planning, and warm minimal project showcases.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-cream pt-32 text-stone-950 md:pt-40">
      <section className="border-b border-warm-line pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-stone-950"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Home
            </Link>
            <div className="mt-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
                  Projects
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
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
      </section>
    </main>
  );
}
