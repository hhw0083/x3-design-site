import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { contactFormClasses } from "@/components/contactFormTokens";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { googleMapEmbedUrl, studio } from "@/data/x3Content";

export const metadata: Metadata = {
  title: "Contact | X3 Design",
  description:
    "Contact X3 Design for residential interior design, customization planning, and site supervision consultation.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-contact-canvas pt-32 text-contact-ink md:pt-40">
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
        <MotionReveal>
          <Link
            href="/"
            className={contactFormClasses.backLink}
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Home
          </Link>
        </MotionReveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-[0.82fr_1.08fr] lg:gap-24">
          <MotionReveal delay={40} distance={16}>
            <div>
              <h1 className={contactFormClasses.title}>
                Contact <span className="font-normal">聯絡我們</span>
              </h1>
              <div
                className={`mt-12 max-w-[28rem] space-y-2 ${contactFormClasses.info}`}
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

              <div className="mt-14 aspect-[4/5] overflow-hidden border border-contact-line bg-contact-surface md:aspect-[5/4] lg:aspect-[4/5]">
                <iframe
                  title="X3 Design map"
                  src={googleMapEmbedUrl}
                  className="h-full w-full grayscale-[0.55] sepia-[0.08] saturate-[0.75] contrast-[0.95]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={120} distance={16}>
            <ContactForm />
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
