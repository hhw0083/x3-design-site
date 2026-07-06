import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Ruler } from "lucide-react";
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
          alt="Warm minimal living and dining interior designed with natural wood, stone, and soft daylight"
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
                <span className="block text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
                  {studio.nameZh}
                </span>
                <span className="mt-3 block text-xl leading-[0.95] md:text-3xl lg:text-5xl">
                  {studio.nameEn}
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
        className="border-b border-warm-line bg-cream py-20 md:py-28"
      >
        <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className={typographyClasses.sectionKicker}>
            About X3 Design
          </p>

          <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-[0.55fr_1.45fr] md:items-center md:gap-20 lg:mt-28 lg:gap-28">
            <div className="flex justify-center md:justify-start md:pl-20 lg:pl-32">
              <Image
                src="/images/x3/logo-v.svg"
                alt="X3 Design vertical logo"
                width={80}
                height={230}
                className="h-auto w-24 md:w-28 lg:w-32"
              />
            </div>

            <div>
              <div className="space-y-6 text-content-lead font-medium text-stone-950">
                <p>
                  <span className="font-bold">辰</span>{" "}
                  象徵光影與時間，展現空間在日常流動中的變化與細節。
                </p>
                <p>
                  <span className="font-bold">山</span>{" "}
                  代表穩固與自然，追求空間尺度、材質秩序與永續精神。
                </p>
                <p className="pt-2">
                  辰與山的結合，象徵時間與空間的和諧，也代表自然與現代共生的理想居所。
                </p>
              </div>

              <Link
                href="/about"
                className="ml-auto mt-16 block w-fit text-sm font-medium text-stone-950 underline decoration-stone-950 underline-offset-4 transition hover:text-stone-600 hover:decoration-stone-600 md:mt-24"
              >
                About X3 Design
              </Link>
            </div>
          </div>
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
            <h6 className={`mt-4 flex max-w-3xl flex-col ${typographyClasses.ctaTitle} text-white`}>
              <span>讓我們從生活需求</span>
              <span>與空間條件開始談起。</span>
            </h6>
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

          <div className="border border-white/15">
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
                  className="grid gap-4 border-b border-white/15 p-6 last:border-b-0 sm:grid-cols-[2.5rem_1fr] md:p-7"
                >
                  <Icon className="size-5 text-stone-400" aria-hidden="true" />
                  <div>
                    <p className={`${typographyClasses.metaLabel} text-stone-500`}>
                      {item.label}
                    </p>
                    <p className={`mt-2 ${typographyClasses.metaValue} !text-stone-100`}>
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
