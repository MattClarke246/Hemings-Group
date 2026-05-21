"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/membership", label: "Membership" },
  { href: "/events", label: "Events" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-aurum)] ${
          scrolled ? "header-scrolled" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 md:px-10">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3 transition-opacity duration-300 hover:opacity-85"
            aria-label="Hemings Group home"
          >
            <Logo size={34} variant="gold" />
            <span
              className="signature hidden text-[13px] sm:inline sm:text-[15px] md:text-[17px]"
              style={{ color: "var(--text-gold-dark)", letterSpacing: "0.32em" }}
            >
              Hemings
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`smallcaps nav-link ${
                  isActive(item.href) ? "nav-link-active" : ""
                }`}
                style={{
                  color: isActive(item.href)
                    ? "var(--text-gold-dark)"
                    : "var(--text-secondary-dark)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/rsvp" variant="gold" className="!px-7 !py-3 !text-[10px]">
              Book RSVP
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden smallcaps min-h-[44px] min-w-[44px] px-2"
            style={{ color: "var(--text-secondary-dark)" }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open ? (
        <div className="mobile-nav-overlay md:hidden" role="dialog" aria-modal="true">
          <span className="metallic-divider mb-10 w-24" />
          <nav className="flex w-full max-w-xs flex-col items-center" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link w-full justify-center ${
                  isActive(item.href) ? "nav-link-active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <span className="metallic-divider mt-10 w-24" />
          <div className="mt-10 w-full max-w-xs">
            <Button
              href="/rsvp"
              variant="gold"
              className="w-full !py-4"
              onClick={() => setOpen(false)}
            >
              Book RSVP
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
