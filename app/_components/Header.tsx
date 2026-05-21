"use client";

import Link from "next/link";
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
  { href: "/portal", label: "Portal" },
];

export default function Header() {
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-aurum)] ${
        scrolled ? "header-scrolled" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 md:px-10">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3 signature text-[13px] sm:text-[15px] md:text-[17px] transition-opacity duration-300 hover:opacity-85"
          style={{ color: "var(--text-gold-dark)", letterSpacing: "0.28em" }}
          aria-label="Hemings Group home"
        >
          <Logo size={34} variant="gold" />
          <span>Hemings</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="smallcaps transition-colors duration-300"
              style={{ color: "var(--text-secondary-dark)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-gold-dark)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-secondary-dark)")
              }
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
          className="md:hidden smallcaps"
          style={{ color: "var(--text-secondary-dark)" }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          className="border-t md:hidden"
          style={{
            background: "rgba(0, 0, 0, 0.92)",
            backdropFilter: "blur(24px)",
            borderColor: "rgba(198, 167, 94, 0.18)",
          }}
        >
          <nav
            className="flex max-h-[min(70vh,520px)] flex-col gap-2 overflow-y-auto overscroll-contain px-4 py-6 sm:px-6"
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="smallcaps py-3"
                style={{ color: "var(--text-primary-dark)" }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                href="/rsvp"
                variant="gold"
                className="!px-7 !py-3 !text-[10px]"
                onClick={() => setOpen(false)}
              >
                Book RSVP
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
