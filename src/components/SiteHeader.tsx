"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { studio } from "@/data/x3Content";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [usesDarkHeader, setUsesDarkHeader] = useState(pathname === "/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkHeader = usesDarkHeader && !isMenuOpen;

  useEffect(() => {
    const updateHeader = () => {
      if (pathname === "/" && window.scrollY < 8) {
        setUsesDarkHeader(true);
        return;
      }

      const headerSwitchPoint = 88;
      const visualSwitchPoint = Math.min(320, window.innerHeight * 0.34);
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main > section"),
      );

      if (sections.length === 0) {
        setUsesDarkHeader(pathname === "/");
        return;
      }

      const sectionAt = (pointY: number) =>
        sections.find((section) => {
          const rect = section.getBoundingClientRect();

          return rect.top <= pointY && rect.bottom > pointY;
        });
      const isDarkSection = (section?: HTMLElement) => {
        const sectionClassName = section?.className ?? "";
        const sectionTheme = section?.dataset.headerTheme;

        return (
          sectionTheme === "dark" ||
          sectionClassName.includes("bg-stone-950") ||
          sectionClassName.includes("bg-black")
        );
      };

      setUsesDarkHeader(
        isDarkSection(sectionAt(headerSwitchPoint)) ||
          isDarkSection(sectionAt(visualSwitchPoint)),
      );
    };

    const updateFrame = window.requestAnimationFrame(updateHeader);
    const updateTimer = window.setTimeout(updateHeader, 120);

    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    window.addEventListener("load", updateHeader);

    return () => {
      window.cancelAnimationFrame(updateFrame);
      window.clearTimeout(updateTimer);
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
      window.removeEventListener("load", updateHeader);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);

    return () => window.removeEventListener("resize", closeOnResize);
  }, [isMenuOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-3 sm:px-5">
      <div
        className={`rounded pointer-events-auto relative mx-auto max-w-7xl border transition duration-300 ${
          isDarkHeader
            ? "border-white/25 bg-stone-950/40 text-white backdrop-blur-md"
            : "border-warm-line/70 bg-cream/60 text-stone-950 shadow-[0_18px_50px_rgba(45,35,27,0.08)] backdrop-blur-md"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-3 sm:px-4">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 h-full py-1.5"
            aria-label="辰山設計 X3 Design home"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={studio.logoPath}
              alt="辰山設計 X3 Design"
              width={84}
              height={42}
              priority
              className={`h-full w-auto transition ${
                isDarkHeader ? "invert" : ""
              }`}
            />
          </Link>

          <nav
            className={`ml-auto hidden items-center gap-7 text-sm md:flex ${
              isDarkHeader ? "text-stone-200" : "text-stone-600"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-current"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className={`grid size-10 place-items-center border transition md:hidden ${
              isDarkHeader
                ? "border-white/25 text-white hover:bg-white/10"
                : "border-stone-300 text-stone-950 hover:border-stone-950"
            }`}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          className={`grid overflow-hidden px-3 transition-[grid-template-rows,opacity] duration-300 md:hidden ${
            isMenuOpen
              ? "grid-rows-[1fr] border-t border-warm-line pb-3 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <nav className="grid gap-1 pt-3 text-sm text-stone-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-transparent px-3 py-3 transition hover:border-warm-line hover:bg-warm-paper"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
