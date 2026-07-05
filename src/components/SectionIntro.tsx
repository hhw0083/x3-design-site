import type { ReactNode } from "react";
import { typographyClasses } from "@/components/typographyTokens";

type SectionIntroProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  headingLevel?: "h1" | "h2";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
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
      {eyebrow ? (
        <p className={typographyClasses.sectionKicker}>{eyebrow}</p>
      ) : null}
      {title ? (
        <Heading
          className={`${typographyClasses.sectionTitle} ${
            eyebrow ? "mt-4" : ""
          }`}
        >
          {title}
        </Heading>
      ) : null}
      {description ? (
        <p className={typographyClasses.sectionLede}>{description}</p>
      ) : null}
    </div>
  );
}
