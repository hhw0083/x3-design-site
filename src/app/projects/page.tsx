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
            <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-end lg:gap-20">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
                  Projects
                </p>
                <h1 className="mt-4 text-balance font-serif text-5xl font-medium leading-tight text-stone-950 md:text-7xl">
                  作品展示
                </h1>
              </div>
              <p className="max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
                從預售屋客變到完整住宅設計，X3 Design 以格局、材質、光線與現場執行串連每個空間決策，讓居住場景自然落地。
              </p>
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
