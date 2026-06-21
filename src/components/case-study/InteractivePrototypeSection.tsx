import type { CSSProperties } from "react";
import { ExternalLink } from "lucide-react";
import { MotionReveal } from "@/components/motion/MotionReveal";

type InteractivePrototypeSectionProps = {
  prototypeUrl: string;
  accentColor?: string;
};

export function InteractivePrototypeSection({
  prototypeUrl,
  accentColor = "#0f766e",
}: InteractivePrototypeSectionProps) {
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
    prototypeUrl,
  )}`;

  return (
    <section
      className="border-t border-slate-200 bg-white py-20 md:py-28"
      style={{ "--prototype-accent": accentColor } as CSSProperties}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <header className="border-b border-slate-200 pb-8 md:pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--prototype-accent)]">
              Prototype Preview
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-950 md:text-4xl">
              Interactive Prototype
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              可直接操作主要流程，查看介面狀態與互動設計。
            </p>
          </header>
        </MotionReveal>

        <MotionReveal delay={90} distance={28} className="mt-8 md:mt-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white/75 shadow-[0_24px_70px_rgba(15,23,42,0.09)] backdrop-blur-xl">
            <iframe
              src={embedUrl}
              title="Interactive Prototype"
              loading="lazy"
              allowFullScreen
              className="hidden h-[480px] w-full border-0 md:block lg:h-[600px]"
            />

            <div className="flex min-h-56 flex-col items-start justify-center gap-5 p-6 md:hidden">
              <div>
                <p className="text-lg font-semibold text-slate-950">
                  在 Figma 中操作完整原型
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  手機版將於新分頁開啟，提供較完整的操作空間。
                </p>
              </div>
              <a
                href={prototypeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--prototype-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--prototype-accent)] focus-visible:ring-offset-2"
              >
                Open prototype in Figma
                <ExternalLink aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
