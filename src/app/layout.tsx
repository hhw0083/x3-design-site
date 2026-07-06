import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { studio } from "@/data/x3Content";

const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

const siteTitle = `${studio.name} | Interior Design Studio`;
const siteDescription =
  "X3 Design is a minimal interior design studio website for residential design, customization planning, site supervision, and project showcases.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: studio.name,
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/images/x3/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "X3 Design Interior Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/x3/og-image.jpg"],
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
        className={`${notoSansTc.variable} font-sans antialiased`}
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
