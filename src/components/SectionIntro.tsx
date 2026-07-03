import type { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
  headingLevel?: "h1" | "h2";
};

export function SectionIntro({
  eyebrow,
  title,
  align = "left",
  headingLevel = "h2",
}: SectionIntroProps) {
  const Heading = headingLevel;

  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
        {eyebrow}
      </p>
      {/* 大標題 */}
      {/* <Heading className="mt-4 text-balance break-words font-sans text-3xl font-medium leading-tight text-stone-950 md:text-5xl">
        {title}
      </Heading> */}
    </div>
  );
}
