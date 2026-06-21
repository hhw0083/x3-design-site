import type { Metadata } from "next";
import { Inter, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "@xyflow/react/dist/style.css";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { studio } from "@/data/x3Content";

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

const notoSerifTc = Noto_Serif_TC({
  subsets: ["latin"],
  variable: "--font-noto-serif-tc",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${studio.name} | Interior Design Studio`,
  description:
    "X3 Design is a minimal interior design studio website for residential design, customization planning, site supervision, and project showcases.",
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
      <body
        className={`${inter.variable} ${notoSansTc.variable} ${notoSerifTc.variable} font-sans antialiased`}
      >
        <SmoothScrollProvider>
          <SiteHeader />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
