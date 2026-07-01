import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { SectionIntro } from "@/components/SectionIntro";
import { studio } from "@/data/x3Content";

export const metadata: Metadata = {
  title: "About | X3 Design",
  description:
    "Learn about X3 Design, a warm minimal interior design studio focused on residential planning, details, and site execution.",
};

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
            <div className="mt-10 grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-end lg:gap-20">
              <SectionIntro
                eyebrow="About"
                headingLevel="h1"
                title="關於 X3 Design"
              />
              <p className="max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
                X3 Design 以住宅與預售屋空間為核心，整理格局、動線、材質與工程細節，讓設計不只停留在風格，而是能回到每日生活中穩定使用。
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-20 lg:px-8">
          <MotionReveal distance={16}>
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 md:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/x3/hero-interior-studio.png"
                alt="Warm minimal interior with natural materials and daylight"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </MotionReveal>

          <MotionReveal delay={80} distance={16}>
            <div>
              <p className="text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
                {studio.intro}
              </p>
              <p className="mt-8 text-base leading-8 text-stone-600">
                {studio.philosophy}
              </p>

              <div className="mt-10 grid border-y border-warm-line text-sm text-stone-600">
                {studioFacts.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-2 border-b border-warm-line py-5 last:border-b-0 sm:grid-cols-[9rem_1fr]"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                      {label}
                    </p>
                    <p className="font-medium text-stone-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="border-y border-warm-line bg-warm-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <SectionIntro
              eyebrow="Philosophy"
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
                  <p className="font-serif text-4xl text-stone-300">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-8 font-serif text-3xl font-medium text-stone-950">
                    {item.title}
                  </h2>
                  <p className="mt-6 text-base leading-8 text-stone-600">
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
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
                Next
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-stone-950 md:text-5xl">
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
