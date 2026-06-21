import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle, Ruler } from "lucide-react";
import {
  MotionReveal,
  MotionSection,
} from "@/components/motion/MotionReveal";
import {
  processIntro,
  processSteps,
  services,
  studio,
  studioProjects,
} from "@/data/x3Content";

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance break-words font-serif text-3xl font-medium leading-tight text-stone-950 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-base leading-8 text-stone-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-cream text-stone-950">
      <section className="relative min-h-[84svh] overflow-hidden bg-stone-950 pt-20 text-white">
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
                  href="#projects"
                  className="inline-flex h-12 items-center gap-2 border border-white bg-white px-5 text-sm font-semibold text-stone-950 transition hover:bg-transparent hover:text-white"
                >
                  View Projects
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#contact"
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
          </div>
        </MotionSection>
      </section>

      <section id="services" className="bg-warm-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <SectionIntro
              eyebrow="Services"
              title="從初步提案到工程落地，依照空間階段提供清楚的設計協助。"
              description="服務內容以住宅空間為核心，保留彈性，也讓每個合作階段有明確邊界與可討論的下一步。"
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
                    <p className="font-serif text-4xl text-stone-300">
                      {service.number}
                    </p>
                    <p className="pt-2 text-right text-sm text-stone-500">
                      {service.price}
                    </p>
                  </div>
                  <h3 className="mt-8 font-serif text-3xl font-medium text-stone-950">
                    {service.title}
                  </h3>
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
                key={project.title}
                delay={Math.min(index * 80, 180)}
                distance={18}
              >
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                    <Image
                      src={project.coverImage}
                      alt={`${project.title} interior project`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="border-b border-warm-line pb-7 pt-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                      {project.category} · {project.location}
                    </p>
                    <div className="mt-3 flex items-start justify-between gap-5">
                      <h3 className="font-serif text-2xl font-medium text-stone-950">
                        {project.title}
                      </h3>
                      <span className="text-sm text-stone-500">
                        {project.year}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-stone-600">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-stone-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-warm-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:gap-20">
              <SectionIntro eyebrow="Design Process" title="讓設計從想像，穩定走向可以被實現的現場。" />
              <p className="max-w-3xl text-lg leading-9 text-stone-600">
                {processIntro}
              </p>
            </div>
          </MotionReveal>

          <div className="mt-16 border-t border-warm-line">
            {processSteps.map((step, index) => (
              <MotionReveal
                key={step.number}
                delay={Math.min(index * 45, 180)}
                distance={14}
              >
                <article className="grid gap-5 border-b border-warm-line py-7 md:grid-cols-[7rem_0.7fr_1fr] md:gap-8 md:py-9">
                  <p className="font-serif text-3xl text-stone-300">
                    {step.number}
                  </p>
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-stone-950">
                      {step.title}
                    </h3>
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
                href="#services"
                className="inline-flex h-12 items-center gap-2 border border-white/25 px-5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                View Services
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
