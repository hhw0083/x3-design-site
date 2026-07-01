import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { SectionIntro } from "@/components/SectionIntro";
import { processSteps, services } from "@/data/x3Content";

export const metadata: Metadata = {
  title: "Services | X3 Design",
  description:
    "X3 Design services and design process for residential interior design, customization planning, and site supervision.",
};

export default function ServicesPage() {
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
              <SectionIntro
                eyebrow="Services"
                headingLevel="h1"
                title="服務與流程"
              />
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-warm-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <SectionIntro
              eyebrow="Service Items"
              title="從初步提案到工程落地，依照空間階段提供清楚的設計協助。"
            />
          </MotionReveal>

          <div className="mt-14 grid gap-px border-y border-warm-line bg-warm-line md:grid-cols-2">
            {services.map((service, index) => (
              <MotionReveal
                key={service.number}
                delay={Math.min(index * 70, 210)}
                distance={16}
              >
                <article className="min-h-full bg-warm-paper p-6 transition hover:bg-cream md:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <p className="font-sans text-4xl text-stone-300">
                      {service.number}
                    </p>
                    <p className="pt-2 text-right text-sm text-stone-500">
                      {service.price}
                    </p>
                  </div>
                  <h2 className="mt-8 font-sans text-3xl font-medium text-stone-950">
                    {service.title}
                  </h2>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-stone-500">
                    {service.englishTitle}
                  </p>
                  <p className="mt-6 text-base leading-8 text-stone-600">
                    {service.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-warm-line bg-cream px-3 py-1.5 text-xs text-stone-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {service.note ? (
                    <p className="mt-5 text-sm text-stone-500">
                      {service.note}
                    </p>
                  ) : null}
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-warm-line bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <SectionIntro
              eyebrow="Design Process"
              title="讓設計從想像，穩定走向可以被實現的現場。"
            />
          </MotionReveal>

          <div className="mt-16 border-t border-warm-line">
            {processSteps.map((step, index) => (
              <MotionReveal
                key={step.number}
                delay={Math.min(index * 45, 180)}
                distance={14}
              >
                <article className="grid gap-5 border-b border-warm-line py-7 md:grid-cols-[7rem_0.7fr_1fr] md:gap-8 md:py-9">
                  <p className="font-sans text-3xl text-stone-300">
                    {step.number}
                  </p>
                  <div>
                    <h2 className="font-sans text-2xl font-medium text-stone-950">
                      {step.title}
                    </h2>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">
                      {step.englishTitle}
                    </p>
                  </div>
                  <p className="text-base leading-8 text-stone-600">
                    {step.description}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        data-header-theme="dark"
        className="bg-stone-950 py-16 text-stone-100 md:py-24"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <MotionReveal>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-400">
                Contact
              </p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight text-white md:text-5xl">
                讓我們依照你的空間階段，討論最合適的合作方式。
              </h2>
            </div>
          </MotionReveal>
          <MotionReveal delay={80}>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 border border-white bg-white px-5 text-sm font-semibold text-stone-950 transition hover:bg-transparent hover:text-white"
            >
              Start a Conversation
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
