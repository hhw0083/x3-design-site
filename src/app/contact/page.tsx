import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { contactFormClasses } from "@/components/contactFormTokens";
import { createPageMetadata, siteConfig } from "@/config/site";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { pageTitleClasses } from "@/components/pageTitleTokens";
import { googleMapEmbedUrl, studio } from "@/data/x3Content";

export const metadata: Metadata = createPageMetadata({
  title: "聯絡辰山設計",
  description:
    "聯絡辰山設計，洽詢住宅設計、空間規劃、客變設計與工程監管服務，討論生活需求與空間細節。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-contact-canvas pt-24 text-contact-ink md:pt-28">
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <MotionReveal>
          <div className={pageTitleClasses.navRow}>
            <Link href="/" className={pageTitleClasses.backLink}>
              <ArrowLeft className="size-4" aria-hidden="true" />
              Home
            </Link>
            <p className={pageTitleClasses.kicker}>Contact</p>
          </div>
        </MotionReveal>

        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionReveal delay={40} distance={16} className="h-full">
            <div className="flex h-full flex-col">
              <h1
                className={pageTitleClasses.title}
                aria-label="Contact 聯絡我們"
              >
                聯絡我們
              </h1>

              <div
                className={`mt-7 max-w-[22rem] space-y-1.5 ${contactFormClasses.info}`}
              >
                <p>{studio.address}</p>
                <p>
                  <Link
                    href={`mailto:${studio.email}`}
                    className="transition hover:text-contact-accent"
                  >
                    {studio.email}
                  </Link>
                </p>
                <p>
                  <Link
                    href={`tel:${studio.phone.replace(/[()\\s-]/g, "")}`}
                    className="transition hover:text-contact-accent"
                  >
                    {studio.phone}
                  </Link>
                </p>
              </div>

              <div className="mt-10 min-h-[28rem] flex-1 overflow-hidden border border-contact-line bg-contact-surface md:min-h-[32rem] lg:min-h-0">
                <iframe
                  title={`${siteConfig.siteName} Google map`}
                  src={googleMapEmbedUrl}
                  className={contactFormClasses.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={120} distance={16} className="h-full">
            <ContactForm />
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
