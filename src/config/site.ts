import type { Metadata } from "next";
import { studio } from "@/data/x3Content";

const productionSiteUrl = "https://x-3-design.com";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export const siteConfig = {
  siteName: "辰山設計 X3 Design",
  siteUrl: normalizeSiteUrl(productionSiteUrl),
  description:
    "辰山設計以光影、材質與生活尺度為核心，提供住宅設計、空間規劃、客變設計與工程監管服務，梳理日常生活中的空間秩序。",
  contactEmail: studio.email,
  ogImage: "/images/x3/og-image.jpg",
  social: studio.socialLinks,
} as const;

export function absoluteUrl(pathname = "/") {
  if (/^https?:\/\//i.test(pathname)) {
    return pathname;
  }

  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return new URL(normalizedPath, `${siteConfig.siteUrl}/`).toString();
}

type PageMetadataOptions = {
  absoluteTitle?: boolean;
  description?: string;
  image?: string;
  imageAlt?: string;
  path: string;
  title: string;
  type?: "article" | "website";
};

export function createPageMetadata({
  absoluteTitle = false,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  imageAlt = "辰山設計 X3 Design 室內設計作品",
  path,
  title,
  type = "website",
}: PageMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title}｜${siteConfig.siteName}`;
  const canonicalUrl = absoluteUrl(path);
  const socialImageUrl = absoluteUrl(image);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.siteName,
      locale: "zh_TW",
      type,
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImageUrl],
    },
    robots: {
      follow: true,
      index: true,
    },
  };
}
