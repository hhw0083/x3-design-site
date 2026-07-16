import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { siteConfig } from "@/config/site";

const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

const notoSerifTc = Noto_Serif_TC({
  subsets: ["latin"],
  variable: "--font-noto-serif-tc",
  display: "swap",
});

const homeTitle = "辰山設計 X3 Design｜室內設計・住宅空間規劃";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: homeTitle,
    template: `%s｜${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: homeTitle,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.siteName,
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "辰山設計 X3 Design 室內設計作品",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${notoSansTc.variable} ${notoSerifTc.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
