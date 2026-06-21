"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOnHero = !isScrolled;

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 32);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

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
        className={`pointer-events-auto relative mx-auto max-w-7xl border transition duration-300 ${
          isOnHero && !isMenuOpen
            ? "border-white/20 bg-stone-950/18 text-white backdrop-blur-md"
            : "border-warm-line bg-cream/92 text-stone-950 shadow-[0_18px_50px_rgba(45,35,27,0.08)] backdrop-blur-xl"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-3 sm:px-4">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3"
            aria-label="X3 Design home"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className={`grid size-8 place-items-center border font-serif text-sm transition ${
                isOnHero && !isMenuOpen
                  ? "border-white/35 text-white"
                  : "border-stone-300 text-stone-950"
              }`}
            >
              X3
            </span>
            <span className="truncate text-sm font-semibold tracking-[0.14em]">
              DESIGN
            </span>
          </Link>

          <nav
            className={`hidden items-center gap-7 text-sm md:flex ${
              isOnHero && !isMenuOpen ? "text-stone-200" : "text-stone-600"
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

          <Link
            href="/#contact"
            aria-label="Contact X3 Design"
            className={`hidden h-10 items-center gap-2 border px-4 text-sm font-semibold transition sm:inline-flex ${
              isOnHero && !isMenuOpen
                ? "border-white/35 text-white hover:border-white hover:bg-white/10"
                : "border-stone-300 text-stone-950 hover:border-stone-950"
            }`}
          >
            <Mail className="size-4" aria-hidden="true" />
            <span>Contact</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>

          <button
            type="button"
            className={`grid size-10 place-items-center border transition md:hidden ${
              isOnHero && !isMenuOpen
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
