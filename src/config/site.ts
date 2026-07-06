import type { Metadata } from "next";
import { studio } from "@/data/x3Content";

const fallbackVercelSiteUrl = "https://x3-design-site.vercel.app";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "");
}

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return fallbackVercelSiteUrl;
}

export const siteConfig = {
  siteName: "辰山設計 X3 Design",
  // TODO: 正式網域上線後，請將 siteUrl 改成正式網址，例如 https://正式網域.com。
  // canonical URL、metadataBase、Open Graph URL、sitemap.xml 與 robots.txt Sitemap 都會同步使用這裡。
  siteUrl: normalizeSiteUrl(resolveSiteUrl()),
  description:
    "辰山設計以光影、材質與生活尺度為核心，提供住宅設計、空間規劃、客變設計與工程監管服務，梳理日常生活中的空間秩序。",
  contactEmail: studio.email,
  ogImage: "/images/x3/og-image.jpg",
  social: studio.socialLinks,
} as const;

export function absoluteUrl(pathname = "/") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return new URL(normalizedPath, `${siteConfig.siteUrl}/`).toString();
}

type PageMetadataOptions = {
  absoluteTitle?: boolean;
  description?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  path: string;
  title: string;
  type?: "article" | "website";
};

export function createPageMetadata({
  absoluteTitle = false,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  imageAlt = "辰山設計 X3 Design 室內設計作品",
  noIndex = false,
  path,
  title,
  type = "website",
}: PageMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title}｜${siteConfig.siteName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.siteName,
      locale: "zh_TW",
      type,
      images: [
        {
          url: image,
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
      images: [image],
    },
    robots: noIndex
      ? {
          follow: false,
          index: false,
        }
      : undefined,
  };
}
