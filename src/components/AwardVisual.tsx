"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { useState } from "react";

type AwardVisualProps = {
  image?: string;
  alt: string;
};

export function AwardVisual({ image, alt }: AwardVisualProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (image && !imageFailed) {
    return (
      <div className="relative aspect-[5/2] w-full overflow-hidden rounded-lg border border-slate-200 bg-white">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 100vw"
          className="object-contain p-5"
          onError={() => setImageFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="flex aspect-[5/2] w-full items-center justify-center gap-4 rounded-lg border border-slate-200 bg-white px-5"
      role="img"
      aria-label={`${alt} placeholder`}
    >
      <span className="grid size-14 shrink-0 place-items-center rounded-full border border-red-200 bg-red-50 text-red-500">
        <Award className="size-7" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold lowercase text-slate-950">
          red dot award
        </span>
        <span className="mt-0.5 block text-xs uppercase tracking-[0.14em] text-slate-500">
          2014 winner
        </span>
      </span>
    </div>
  );
}
