import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Box,
  Braces,
  Brush,
  Code2,
  Download,
  ExternalLink,
  ImageIcon,
  Layers3,
  Mail,
  MapPin,
  PenTool,
  Shapes,
  Target,
  Workflow,
} from "lucide-react";
import { AwardVisual } from "@/components/AwardVisual";
import { HomeLoadingScreen } from "@/components/HomeLoadingScreen";
import {
  MotionReveal,
  MotionSection,
} from "@/components/motion/MotionReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  awards,
  experiences,
  profile,
  skills,
  visibleProjects,
} from "@/data/projects";

const strengths = [
  {
    title: "Research to product decisions",
    description:
      "把訪談、行為資料與商業限制整理成可以被團隊採納的產品判斷。",
    icon: Workflow,
  },
  {
    title: "Interaction systems",
    description:
      "設計複雜流程、狀態、權限與例外情境，讓高頻操作更穩定。",
    icon: PenTool,
  },
  {
    title: "Design handoff",
    description:
      "建立 tokens、元件規格與 QA checklist，縮短設計到工程的落差。",
    icon: Layers3,
  },
];

const heroTools = [
  { label: "Figma", icon: PenTool },
  { label: "HTML", icon: Code2 },
  { label: "CSS / SCSS", icon: Braces },
  { label: "Photoshop", icon: ImageIcon },
  { label: "Illustrator", icon: Shapes },
  { label: "Maya", icon: Box },
  { label: "ZBrush", icon: Brush },
];

export default function Home() {
  const homeHeroImage = "/images/hero-uiux-studio.webp";
  const homeHeroMobileImage = "/images/hero-uiux-studio-mobile.webp";
  const hasMobileHeroImage = existsSync(
    join(
      process.cwd(),
      "public",
      homeHeroMobileImage.replace(/^\/+/, ""),
    ),
  );

  return (
    <>
      <HomeLoadingScreen />
      <main className="overflow-hidden bg-canvas text-slate-950">
      <section className="relative min-h-[86svh] overflow-hidden bg-[#04101b] pt-16">
        <ParallaxLayer
          className="absolute -inset-y-8 inset-x-0"
          speed={0.045}
          maxOffset={28}
        >
          <Image
            src={homeHeroImage}
            alt="UI UX designer workspace with layered interface panels"
            fill
            priority
            sizes="100vw"
            className={`object-cover object-center ${
              hasMobileHeroImage ? "hidden sm:block" : ""
            }`}
          />
          {hasMobileHeroImage ? (
            <Image
              src={homeHeroMobileImage}
              alt="UI UX designer workspace with layered interface panels"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center sm:hidden"
            />
          ) : null}
        </ParallaxLayer>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,10,18,0.97)_0%,rgba(3,15,26,0.91)_38%,rgba(3,15,26,0.34)_68%,rgba(2,10,18,0.10)_100%)]" />
        <ParallaxLayer
          className="absolute -inset-6"
          speed={-0.025}
          maxOffset={16}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_36%,rgba(20,184,166,0.12),transparent_26rem),linear-gradient(180deg,rgba(2,8,15,0.03),rgba(2,8,15,0.36))]" />
          <div className="absolute inset-0 grid-lines opacity-[0.08]" />
        </ParallaxLayer>

        <div className="relative mx-auto flex min-h-[calc(86svh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <MotionReveal
              delay={20}
              distance={14}
              waitForHomeReady
            >
              <p className="mb-5 inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1.5 text-sm font-medium text-teal-200 backdrop-blur">
                {profile.availability}
              </p>
            </MotionReveal>
            <MotionReveal delay={90} distance={18} waitForHomeReady>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
                {profile.name}
                <span className="block text-teal-300">{profile.title}</span>
              </h1>
            </MotionReveal>
            <MotionReveal delay={160} distance={18} waitForHomeReady>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                {profile.intro}
              </p>
            </MotionReveal>
            <MotionReveal delay={230} distance={16} waitForHomeReady>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#projects"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-cyanline px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,118,110,0.28)] transition hover:bg-teal-500"
                >
                  View projects
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#experience"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-black/20 px-5 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:border-teal-300/50 hover:bg-white/10"
                >
                  Resume highlights
                  <Download className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </MotionReveal>
            <MotionReveal delay={300} distance={14} waitForHomeReady>
              <div className="mt-7 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Tools &amp; Skills
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {heroTools.map((tool) => {
                    const Icon = tool.icon;

                    return (
                      <span
                        key={tool.label}
                        className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 text-xs font-medium text-slate-200 shadow-sm backdrop-blur"
                      >
                        <Icon
                          className="size-4 text-teal-300"
                          aria-hidden="true"
                        />
                        {tool.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>

        <Link
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-5 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-black/30 text-slate-200 shadow-sm backdrop-blur transition hover:border-teal-300/50 hover:bg-white/10 hover:text-white"
        >
          <ArrowDown className="size-4" aria-hidden="true" />
        </Link>
      </section>

      <section id="about" className="section-band bg-canvas py-20 md:py-28">
        <MotionSection className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="以使用者任務為核心，讓複雜產品變得可靠、清楚、可交付。"
            description={profile.bio}
          />
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="min-w-0 rounded-lg border border-slate-200 bg-white p-3 shadow-portfolio-card sm:p-4 md:p-6"
                >
                  <div className="mb-3 grid size-10 place-items-center rounded-lg border border-teal-100 bg-teal-50 text-cyanline md:mb-5 md:size-11">
                    <Icon
                      className="size-[18px] md:size-5"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="break-words text-xs font-semibold leading-5 text-slate-950 sm:text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 break-words text-[10px] leading-[1.65] text-slate-600 sm:text-xs md:mt-3 md:text-sm md:leading-7">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </MotionSection>
      </section>

      <section id="projects" className="section-band bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects built around measurable product outcomes."
              description="每個 case study 都整理了問題、流程、交付項目與結果，方便招募方快速看見設計判斷與落地能力。"
            />
          </MotionReveal>
          <div className="mt-10">
            {visibleProjects.map((project, index) => (
              <MotionReveal
                key={project.slug}
                delay={Math.min(index * 60, 180)}
                distance={20}
              >
                <ProjectCard project={project} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="section-band bg-canvas py-20 md:py-28"
      >
        <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyanline">
                Experience
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                跨團隊經驗，
                <span className="block">驅動產品價值與交付品質。</span>
              </h2>

              <div className="mt-9 flex max-w-xl flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-300 bg-white/70 px-3.5 py-2 text-sm text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              {experiences.map((experience, index) => (
                <article
                  key={`${experience.period}-${experience.title}`}
                  className="grid gap-4 border-b border-slate-200 py-8 first:pt-0 last:border-b-0 last:pb-0 md:grid-cols-[8.5rem_1.25rem_minmax(0,1fr)] md:gap-5 md:py-12 md:first:pt-12 md:last:pb-12 lg:py-14 lg:first:pt-14 lg:last:pb-14"
                >
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <span
                      className="size-2 rounded-full bg-cyanline md:hidden"
                      aria-hidden="true"
                    />
                    {experience.period}
                  </p>

                  <div className="relative hidden md:block" aria-hidden="true">
                    {index < experiences.length - 1 ? (
                      <span className="absolute bottom-[-2rem] left-1/2 top-2 w-px -translate-x-1/2 bg-slate-200" />
                    ) : null}
                    <span className="absolute left-1/2 top-1 size-3 -translate-x-1/2 rounded-full border-[3px] border-canvas bg-cyanline ring-1 ring-slate-300" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 md:text-2xl">
                      {experience.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-cyanline">
                      {experience.company}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                      {experience.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 border-y border-slate-200 py-10 md:mt-4 md:py-12">
            <div className="grid gap-7 lg:grid-cols-12 lg:items-center lg:gap-8">
              <p className="text-left text-xl font-semibold text-cyanline md:text-2xl lg:col-span-3">
                Awards
              </p>

              <div className="lg:col-span-9 lg:col-start-4">
                {awards.map((award) => (
                  <article
                    key={`${award.year}-${award.title}`}
                    className="grid gap-5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-center sm:gap-5"
                  >
                    <p className="text-sm font-semibold text-slate-800">
                      {award.year}
                    </p>
                    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_13.75rem] md:items-center">
                      <div>
                        <h3 className="text-lg font-semibold leading-7 text-slate-950 md:text-xl">
                          {award.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {award.subtitle}
                        </p>
                      </div>
                      <AwardVisual
                        image={award.image}
                        alt={`${award.title} ${award.subtitle}`}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </MotionSection>
      </section>

      <section
        id="contact"
        className="section-band relative isolate overflow-hidden bg-[#06111d] py-20 text-white md:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_32%,rgba(20,184,166,0.16),transparent_27rem),radial-gradient(circle_at_12%_88%,rgba(14,116,144,0.12),transparent_24rem),linear-gradient(135deg,#06111d_0%,#081827_55%,#06111d_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-[12%] top-[34%] -z-10 h-32 w-[76%] -rotate-[13deg] bg-[linear-gradient(90deg,transparent,rgba(45,212,191,0.08),transparent)] blur-xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-[18%] bottom-[4%] -z-10 h-24 w-[62%] rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.06),transparent)] blur-2xl"
          aria-hidden="true"
        />

        <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Ready to discuss product design, case studies, or the next role.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              積極尋求 UI/UX Designer、Product Designer 與設計系統相關工作。歡迎來信安排 portfolio review 或面試。
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="grid gap-4">
              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-5 text-sm font-semibold text-white transition hover:bg-cyanline"
              >
                <Mail className="size-4" aria-hidden="true" />
                <span className="truncate">{profile.email}</span>
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:border-teal-300/30 hover:bg-white/[0.08]"
              >
                LinkedIn
                <ExternalLink className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <div className="flex min-h-24 items-center gap-4 rounded-lg border border-white/10 bg-black/10 p-4">
                <MapPin
                  className="size-6 shrink-0 text-teal-300"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-slate-400">Location</p>
                  <p className="mt-1 font-semibold text-white">
                    {profile.location}
                  </p>
                </div>
              </div>
              <div className="flex min-h-24 items-center gap-4 rounded-lg border border-white/10 bg-black/10 p-4">
                <Target
                  className="size-6 shrink-0 text-teal-300"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-slate-400">Focus</p>
                  <p className="mt-1 font-semibold text-white">SaaS / Fintech</p>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
      </section>
      </main>
    </>
  );
}
