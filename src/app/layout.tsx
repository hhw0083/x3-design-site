import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import "@xyflow/react/dist/style.css";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { profile } from "@/data/projects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} | UI/UX Designer Portfolio`,
  description:
    "Professional UI/UX designer portfolio with case studies, experience, resume highlights, and contact information.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${notoSansTc.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          <SiteHeader />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
