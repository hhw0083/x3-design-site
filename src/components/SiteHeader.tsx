"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { studio } from "@/data/x3Content";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [isOverHero, setIsOverHero] = useState(pathname === "/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const usesHeroNav = pathname === "/" && isOverHero && !isMenuOpen;

  useEffect(() => {
    const updateHeroOverlap = () => {
      const hero = document.querySelector('[data-home-hero]');
      const header = headerRef.current;
      if (pathname !== "/" || !hero || !header) {
        setIsOverHero(false);
        return;
      }
      const heroRect = hero.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      const navCenter = headerRect.top + 28;
      setIsOverHero(heroRect.top <= navCenter && heroRect.bottom > navCenter);
    };
    updateHeroOverlap();
    window.addEventListener("scroll", updateHeroOverlap, { passive: true });
    window.addEventListener("resize", updateHeroOverlap);
    return () => {
      window.removeEventListener("scroll", updateHeroOverlap);
      window.removeEventListener("resize", updateHeroOverlap);
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
    <header ref={headerRef} className={`pointer-events-none fixed inset-x-0 top-4 z-50 px-3 sm:px-5 md:px-6 lg:px-8 ${isMenuOpen ? "text-stone-950" : usesHeroNav ? "text-white" : "text-white mix-blend-difference"}`}>
      <div
        className="pointer-events-auto relative mx-auto max-w-7xl md:max-w-[calc(80rem-3rem)] lg:max-w-[calc(80rem-4rem)]"
      >
        <div className={`flex h-14 items-center justify-between px-3 sm:px-4 ${isMenuOpen ? "bg-cream" : ""}`}>
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
              className={`h-full w-auto ${isMenuOpen ? "" : "invert drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"}`}
            />
          </Link>

          <nav
            className={`ml-auto hidden items-center gap-7 text-sm font-normal md:flex ${usesHeroNav ? "text-white/80" : "[text-shadow:0_1px_2px_rgba(0,0,0,0.5)]"}`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${usesHeroNav ? "hover:text-white focus-visible:text-white" : "hover:text-current"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="grid size-10 place-items-center transition hover:opacity-70 md:hidden"
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
              ? "grid-rows-[1fr] bg-cream pb-3 opacity-100"
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
