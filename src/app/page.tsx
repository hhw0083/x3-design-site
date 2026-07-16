import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Ruler } from "lucide-react";
import { createPageMetadata } from "@/config/site";
import {
  MotionReveal,
  MotionSection,
} from "@/components/motion/MotionReveal";
import { HomeProjectsCarousel } from "@/components/HomeProjectsCarousel";
import { HomeHeroParallaxImage } from "@/components/HomeHeroParallaxImage";
import { SectionIntro } from "@/components/SectionIntro";
import { typographyClasses } from "@/components/typographyTokens";
import { studioHeroImage } from "@/data/x3Assets";
import { studio } from "@/data/x3Content";
import { getStudioProjects } from "@/data/studioProjects";

export const metadata: Metadata = createPageMetadata({
  absoluteTitle: true,
  title: "辰山設計 X3 Design｜室內設計・住宅空間規劃",
  description:
    "辰山設計以光影、材質與生活尺度為核心，提供住宅設計、空間規劃、客變設計與工程監管服務。",
  path: "/",
});

export default function Home() {
  const studioProjects = getStudioProjects();

  return (
    <main className="overflow-hidden bg-cream text-stone-950">
      <section
        data-header-theme="dark"
        className="relative min-h-[84svh] overflow-hidden bg-stone-950 pt-20 text-white"
      >
        <HomeHeroParallaxImage
          src={studioHeroImage}
          alt="辰山設計住宅空間中的光影、木質與石材細節"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,21,18,0.82)_0%,rgba(24,21,18,0.55)_46%,rgba(24,21,18,0.2)_100%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[calc(84svh-5rem)] max-w-7xl items-end px-4 pb-12 pt-24 sm:px-6 md:pb-16 lg:px-8">
          <div className="max-w-4xl">
            <MotionReveal delay={20} distance={12}>
              <p className="text-section-kicker font-medium uppercase text-stone-200">
                Interior Design Studio
              </p>
            </MotionReveal>
            <MotionReveal delay={90} distance={14}>
              <h1
                className="mt-5 text-balance font-sans font-medium tracking-normal text-white"
                aria-label={studio.name}
              >
                <span className="block text-4xl leading-[0.95] md:text-5xl lg:text-6xl">
                  {studio.nameZh}
                </span>
              </h1>
            </MotionReveal>
            <MotionReveal delay={150} distance={14}>
              <p className="mt-7 max-w-2xl text-content-lead text-stone-100">
                {studio.tagline}
              </p>
            </MotionReveal>
            <MotionReveal delay={220} distance={12}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex h-12 items-center gap-2 border border-white bg-white px-5 text-sm font-semibold text-stone-950 transition hover:bg-transparent hover:text-white"
                >
                  View Projects
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center gap-2 border border-white/45 px-5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Start a Conversation
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-y border-warm-line bg-cream py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <SectionIntro
              title="Projects"
            />
          </MotionReveal>

          <HomeProjectsCarousel projects={studioProjects} />
        </div>
      </section>

      <section
        id="about"
        className="border-b border-warm-line bg-cream py-24 md:py-32"
      >
        <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className={typographyClasses.sectionKicker}>About X3 Design</h2>

          <MotionReveal
            delay={60}
            distance={12}
            className="relative mt-24 md:mt-32"
          >
            <blockquote className="mx-auto w-fit max-w-full md:ml-0 md:mr-auto md:w-full md:max-w-4xl">
              <p className="mx-auto flex w-fit max-w-full flex-col gap-2.5 text-left text-pretty font-sans font-normal leading-[1.9] tracking-[0.015em] text-stone-800 md:ml-0 md:mr-auto md:gap-4 md:leading-[1.9]">
                <span className="whitespace-nowrap text-[clamp(0.625rem,3vw,1.0625rem)] tracking-[0.01em] sm:text-lg md:text-[1.375rem]">
                  <strong className="font-bold text-stone-950">辰</strong>{" "}
                  象徵光影與時間，展現空間在日常流動中的變化與細節。
                </span>
                <span className="whitespace-nowrap text-[clamp(0.625rem,3vw,1.0625rem)] tracking-[0.01em] sm:text-lg md:text-[1.375rem]">
                  <strong className="font-bold text-stone-950">山</strong>{" "}
                  代表穩固與自然，追求空間尺度、材質秩序與永續精神。
                </span>
              </p>
              <div className="mx-auto mt-2.5 w-[calc(100%_-_3rem)] max-w-full md:mx-0 md:mt-12 md:w-fit">
                <p className="text-left text-sm font-normal leading-7 tracking-[0.015em] text-stone-500 md:text-[1.0625rem] md:leading-8">
                  辰與山的結合，象徵時間與空間的和諧，也代表自然與現代共生的理想居所。
                </p>
                <footer className="mt-10 text-right text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-stone-400 md:mt-14 md:text-xs">
                  <span aria-hidden="true">— </span>辰山設計
                </footer>
              </div>
            </blockquote>

            <Link
              href="/about"
              className="group ml-auto mt-20 flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-stone-500 transition-colors hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-cream md:absolute md:bottom-0 md:right-0 md:mt-0"
            >
              About X3 Design
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                aria-hidden="true"
              />
            </Link>
          </MotionReveal>
        </MotionSection>
      </section>

      <section
        data-header-theme="dark"
        id="contact"
        className="bg-stone-950 py-20 text-stone-100 md:py-28"
      >
        <MotionSection className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:items-start lg:gap-20 lg:px-8">
          <div>
            <p className={`${typographyClasses.sectionKicker} text-stone-400`}>
              Contact
            </p>
            <h2 className={`mt-4 flex max-w-3xl flex-col ${typographyClasses.ctaTitle} text-white`}>
              <span>讓我們從生活需求</span>
              <span>與空間條件開始談起。</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={`mailto:${studio.email}`}
                className="inline-flex h-12 items-center gap-2 border border-white bg-white px-5 text-sm font-semibold text-stone-950 transition hover:bg-transparent hover:text-white"
              >
                <Mail className="size-4" aria-hidden="true" />
                {studio.email}
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 border border-white/25 px-5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Contact Page
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 border border-white/15 lg:block">
            {[
              {
                icon: MapPin,
                label: "Studio Base",
                value: studio.location,
              },
              {
                icon: Ruler,
                label: "Service Area",
                value: studio.serviceArea,
              },
              {
                icon: MessageCircle,
                label: "Consultation",
                value: "住宅設計、客變規劃與工程監管洽詢",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="min-w-0 border-r border-white/15 p-3 last:border-r-0 sm:p-4 md:p-5 lg:grid lg:grid-cols-[2.5rem_1fr] lg:gap-4 lg:border-r-0 lg:border-b lg:p-7 lg:last:border-b-0"
                >
                  <Icon
                    className="size-4 text-stone-400 lg:size-5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[0.56rem] font-medium uppercase leading-4 tracking-[0.16em] text-stone-500 sm:text-[0.625rem] lg:text-meta-label">
                      {item.label}
                    </p>
                    <p className="mt-2 break-words text-[0.68rem] font-medium leading-[1.35] text-stone-100 sm:text-xs lg:text-meta-value lg:leading-6">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MotionSection>
      </section>
    </main>
  );
}
