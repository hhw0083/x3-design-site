type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
        {eyebrow}
      </p>
      <h2 className="text-balance break-words font-serif text-3xl font-medium leading-tight text-stone-950 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
