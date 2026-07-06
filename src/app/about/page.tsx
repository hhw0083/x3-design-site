import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/config/site";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { pageTitleClasses } from "@/components/pageTitleTokens";
import { SectionIntro } from "@/components/SectionIntro";
import { typographyClasses } from "@/components/typographyTokens";
import { studioHeroImage } from "@/data/x3Assets";
import { studio } from "@/data/x3Content";

export const metadata: Metadata = createPageMetadata({
  title: "關於辰山設計",
  description:
    "認識辰山設計的空間觀點，從生活尺度、材質秩序與現場落實出發，整理住宅與日常空間的設計脈絡。",
  path: "/about",
});

const studioFacts = [
  ["Focus", "住宅設計與預售屋客變"],
  ["Location", studio.location],
  ["Service Area", studio.serviceArea],
];

const principles = [
  {
    title: "生活尺度",
    description:
      "從日常動線、收納比例與使用習慣出發，讓空間先回應人的生活，再形成風格。",
  },
  {
    title: "材質秩序",
    description:
      "以沉穩、耐看的材質與色彩建立一致語彙，讓空間在時間裡保持安定。",
  },
  {
    title: "現場落實",
    description:
      "透過清楚圖面、工程討論與現場協調，讓設計細節能被理解並確實完成。",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream pt-24 text-stone-950 md:pt-28">
      <section className="pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className={pageTitleClasses.navRow}>
              <Link href="/" className={pageTitleClasses.backLink}>
                <ArrowLeft className="size-4" aria-hidden="true" />
                Home
              </Link>
              <p className={pageTitleClasses.kicker}>About</p>
            </div>
          </MotionReveal>
          <h1 className="sr-only">關於辰山設計 X3 Design</h1>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-20">
            <MotionReveal distance={16}>
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 md:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={studioHeroImage}
                  alt="辰山設計以自然材質與日光構成的住宅室內場景"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </MotionReveal>

            <MotionReveal delay={80} distance={16}>
              <div>
                <p className={typographyClasses.contentLead}>
                  {studio.intro}
                </p>
                <p className={`mt-7 ${typographyClasses.bodyCopy}`}>
                  {studio.philosophy}
                </p>

                <div className="mt-10 grid border-y border-warm-line">
                  {studioFacts.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid gap-2 border-b border-warm-line py-5 last:border-b-0 sm:grid-cols-[9rem_1fr]"
                    >
                      <p className={typographyClasses.metaLabel}>{label}</p>
                      <p className={typographyClasses.metaValue}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="border-y border-warm-line bg-warm-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <SectionIntro
              title="好的空間不只追求風格，更需要回應居住者的生活節奏。"
            />
          </MotionReveal>

          <div className="mt-14 grid gap-px border-y border-warm-line bg-warm-line md:grid-cols-3">
            {principles.map((item, index) => (
              <MotionReveal
                key={item.title}
                delay={Math.min(index * 70, 160)}
                distance={16}
              >
                <article className="min-h-full bg-warm-paper p-6 transition hover:bg-cream md:p-8">
                  <p className={typographyClasses.itemNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className={`mt-7 ${typographyClasses.itemTitle}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-5 ${typographyClasses.bodyCopy}`}>
                    {item.description}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <MotionReveal>
            <div>
              <p className={typographyClasses.metaLabel}>Next</p>
              <h2 className={`mt-4 max-w-2xl ${typographyClasses.ctaTitle} text-stone-950`}>
                從服務內容與合作流程，理解專案如何開始。
              </h2>
            </div>
          </MotionReveal>
          <MotionReveal delay={80}>
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center gap-2 border border-stone-950 px-5 text-sm font-semibold text-stone-950 transition hover:bg-stone-950 hover:text-white"
            >
              View Services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
