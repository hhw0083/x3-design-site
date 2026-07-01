import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Ruler } from "lucide-react";
import {
  MotionReveal,
  MotionSection,
} from "@/components/motion/MotionReveal";
import { SectionIntro } from "@/components/SectionIntro";
import { StudioProjectCard } from "@/components/StudioProjectCard";
import { studio, studioProjects } from "@/data/x3Content";

export default function Home() {
  return (
    <main className="overflow-hidden bg-cream text-stone-950">
      <section
        data-header-theme="dark"
        className="relative min-h-[84svh] overflow-hidden bg-stone-950 pt-20 text-white"
      >
        <Image
          src="/images/x3/hero-interior-studio.png"
          alt="Warm minimal living and dining interior designed with natural wood, stone, and soft daylight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,21,18,0.82)_0%,rgba(24,21,18,0.55)_46%,rgba(24,21,18,0.2)_100%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[calc(84svh-5rem)] max-w-7xl items-end px-4 pb-12 pt-24 sm:px-6 md:pb-16 lg:px-8">
          <div className="max-w-4xl">
            <MotionReveal delay={20} distance={12}>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-200">
                Interior Design Studio
              </p>
            </MotionReveal>
            <MotionReveal delay={90} distance={14}>
              <h1 className="mt-5 text-balance font-serif text-6xl font-medium leading-[0.95] tracking-normal md:text-8xl lg:text-9xl">
                {studio.name}
              </h1>
            </MotionReveal>
            <MotionReveal delay={150} distance={14}>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-stone-100 md:text-2xl md:leading-10">
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
              eyebrow="Projects"
              title="以靜定材質與清楚動線，回應不同住宅的生活輪廓。"
              description="目前作品資料先以靜態展示建立版面節奏，後續可替換為正式實景照與完整專案內容。"
            />
          </MotionReveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {studioProjects.map((project, index) => (
              <MotionReveal
                key={project.slug}
                delay={Math.min(index * 80, 180)}
                distance={18}
              >
                <StudioProjectCard project={project} priority={index === 0} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-b border-warm-line bg-cream py-20 md:py-28"
      >
        <MotionSection className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8">
          <SectionIntro
            eyebrow="About"
            title={
              <>
                <span className="block">讓空間回到生活本身，</span>
                <span className="block">也保留值得停留的細節。</span>
              </>
            }
          />
          <div className="max-w-3xl">
            <p className="text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
              {studio.intro}
            </p>
            <p className="mt-8 text-base leading-8 text-stone-600">
              {studio.philosophy}
            </p>
            <div className="mt-10 grid border-y border-warm-line text-sm text-stone-600 sm:grid-cols-3">
              {[
                ["Focus", "住宅設計與預售屋客變"],
                ["Location", studio.location],
                ["Tone", "Minimal · Editorial · Warm"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-warm-line py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                    {label}
                  </p>
                  <p className="mt-2 font-medium text-stone-900">{value}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="ml-auto mt-8 flex w-fit items-center gap-2 text-sm font-semibold text-stone-950 transition hover:text-stone-600"
            >
              About X3 Design
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
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
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-400">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-balance break-words font-serif text-4xl font-medium leading-tight text-white md:text-6xl">
              讓我們從生活需求與空間條件開始談起。
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-stone-300 md:text-lg">
              歡迎來信提供基地位置、屋況、坪數、預算方向與期待入住時間。我們會依照需求階段，回覆適合的服務方式。
            </p>
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
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                      {item.label}
                    </p>
                    <p className="mt-2 leading-7 text-stone-100">
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
