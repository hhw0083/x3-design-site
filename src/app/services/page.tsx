import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/config/site";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { pageTitleClasses } from "@/components/pageTitleTokens";
import { SectionIntro } from "@/components/SectionIntro";
import { typographyClasses } from "@/components/typographyTokens";
import { processSteps, services } from "@/data/x3Content";

export const metadata: Metadata = createPageMetadata({
  title: "服務項目",
  description:
    "辰山設計提供住宅設計、空間規劃、客變設計與工程監管服務，協助梳理需求、材質、尺度與施工細節。",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cream pt-24 text-stone-950 md:pt-28">
      <section className="bg-warm-paper pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className={pageTitleClasses.navRow}>
              <Link href="/" className={pageTitleClasses.backLink}>
                <ArrowLeft className="size-4" aria-hidden="true" />
                Home
              </Link>
              <p className={pageTitleClasses.kicker}>Services</p>
            </div>
          </MotionReveal>
          <h1 className="sr-only">服務項目｜辰山設計 X3 Design</h1>

          <MotionReveal>
            <SectionIntro
              title="服務項目"
              description="從初步提案到工程落地，依照空間階段提供清楚的設計協助。"
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
                    <p className={typographyClasses.itemNumber}>
                      {service.number}
                    </p>
                    <p className={`pt-1 text-right ${typographyClasses.metaValue} text-stone-500`}>
                      {service.price}
                    </p>
                  </div>
                  <h3 className={`mt-7 ${typographyClasses.itemTitle}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-1 ${typographyClasses.itemMeta}`}>
                    {service.englishTitle}
                  </p>
                  <p className={`mt-5 ${typographyClasses.bodyCopy}`}>
                    {service.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`border border-warm-line bg-cream px-3 py-1.5 ${typographyClasses.chip}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {service.note ? (
                    <p className={`mt-5 ${typographyClasses.metaValue} text-stone-500`}>
                      {service.note}
                    </p>
                  ) : null}
                </article>
              </MotionReveal>
            ))}
          </div>
          <p className={`mt-5 text-right ${typographyClasses.metaValue} text-stone-500`}>
            服務內容與費用依實際坪數、空間條件及合作範圍確認。
          </p>
        </div>
      </section>

      <section className="border-t border-warm-line bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <SectionIntro
              title="設計流程"
              description="讓設計從想像，穩定走向可以被實現的現場。"
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
                  <p className={typographyClasses.itemNumber}>
                    {step.number}
                  </p>
                  <div>
                    <h3 className={typographyClasses.itemTitle}>
                      {step.title}
                    </h3>
                    <p className={`mt-1 ${typographyClasses.itemMeta}`}>
                      {step.englishTitle}
                    </p>
                  </div>
                  <p className={typographyClasses.bodyCopy}>
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
              <p className={`${typographyClasses.sectionKicker} text-stone-400`}>
                Contact
              </p>
              <h2 className={`mt-4 flex max-w-2xl flex-col ${typographyClasses.ctaTitle} text-white`}>
                <span>讓我們依照你的空間階段，</span>
                <span>討論最合適的合作方式。</span>
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
