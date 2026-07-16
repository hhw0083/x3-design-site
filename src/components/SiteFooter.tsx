import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { studio } from "@/data/x3Content";

const footerSocials = [
  {
    label: "Facebook",
    href: studio.socialLinks.facebook,
    icon: "/images/x3/social-facebook.svg",
  },
  {
    label: "Instagram",
    href: studio.socialLinks.instagram,
    icon: "/images/x3/social-instagram.svg",
  },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-line bg-warm-paper">
      <div className="mx-auto grid min-h-20 max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] md:py-4 lg:px-8">
        <Link
          href="/"
          aria-label="辰山設計 X3 Design home"
          className="justify-self-center md:justify-self-start"
        >
          <Image
            src={studio.logoPath}
            alt="辰山設計 X3 Design"
            width={164}
            height={40}
            className="h-8 w-auto opacity-65 transition hover:opacity-100"
          />
        </Link>

        <p className="text-center text-sm font-medium text-stone-500">
          © {currentYear} X3 Design. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-5 md:justify-self-end">
          {footerSocials.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="grid size-7 place-items-center opacity-90 transition hover:opacity-60"
            >
              <Image
                src={item.icon}
                alt=""
                width={22}
                height={22}
                className="size-5"
              />
            </Link>
          ))}
          <Link
            href={`mailto:${studio.email}`}
            aria-label="Email 辰山設計 X3 Design"
            className="grid size-7 place-items-center text-stone-950 opacity-90 transition hover:opacity-60"
          >
            <Mail className="size-[22px]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
