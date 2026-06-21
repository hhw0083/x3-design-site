import type { CSSProperties, ReactNode } from "react";
import { MotionReveal } from "@/components/motion/MotionReveal";

export type CaseStudySectionLayoutProps = {
  sectionNumber: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  introChildren?: ReactNode;
  background?: "canvas" | "white";
  layout?: "narrative" | "showcase";
  accentColor?: string;
  style?: CSSProperties;
};

export function CaseStudySectionLayout({
  sectionNumber,
  eyebrow,
  title,
  description,
  children,
  introChildren,
  background = "white",
  layout = "showcase",
  accentColor = "#0f766e",
  style,
}: CaseStudySectionLayoutProps) {
  return (
    <section
      id={`case-study-${sectionNumber}`}
      className={`border-t border-slate-200 py-14 sm:py-16 md:py-28 ${
        background === "canvas" ? "bg-canvas" : "bg-white"
      }`}
      style={
        {
          "--case-study-accent": accentColor,
          ...style,
        } as CSSProperties
      }
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-12 lg:px-8">
        {layout === "narrative" ? (
          <MotionReveal className="lg:col-span-3">
            <header>
              <p className="text-4xl font-semibold leading-none text-[var(--case-study-accent)] md:text-6xl">
                {sectionNumber}
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--case-study-accent)]">
                {eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-950 md:text-4xl">
                {title}
              </h2>
              {description ? (
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {description}
                </p>
              ) : null}
              {introChildren}
            </header>
          </MotionReveal>
        ) : (
          <MotionReveal className="lg:col-span-12">
            <header className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3 border-b border-slate-200 pb-6 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-6 md:pb-10">
              <p className="text-4xl font-semibold leading-none text-[var(--case-study-accent)] md:text-6xl">
                {sectionNumber}
              </p>
              <div className="max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--case-study-accent)]">
                  {eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  {title}
                </h2>
                {description ? (
                  <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                    {description}
                  </p>
                ) : null}
                {introChildren}
              </div>
            </header>
          </MotionReveal>
        )}

        <MotionReveal
          delay={90}
          distance={28}
          className={`min-w-0 space-y-6 md:space-y-8 ${
            layout === "narrative"
              ? "lg:col-span-9 lg:pt-3"
              : "lg:col-span-12"
          }`}
        >
          {children}
        </MotionReveal>
      </div>
    </section>
  );
}
