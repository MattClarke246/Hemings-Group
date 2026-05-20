"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/membership", label: "Membership" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,box-shadow] duration-[350ms] ease-[var(--ease-aurum)] ${
        scrolled
          ? "border-b border-beige-300/40 bg-beige-50/80 backdrop-blur-xl shadow-[0_1px_24px_rgba(106,68,16,0.08)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="signature text-text-primary text-[15px] md:text-[17px]"
          aria-label="Hemings Group home"
        >
          Hemings
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="smallcaps text-text-secondary transition-colors hover:text-text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact#inquiry" variant="gold" className="!px-7 !py-3 !text-[11px]">
            Request Access
          </Button>
        </div>

        <button
          className="md:hidden smallcaps text-text-secondary"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-beige-300/50 bg-beige-50/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2 px-6 py-6" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="smallcaps py-3 text-text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                href="/contact#inquiry"
                variant="gold"
                className="!px-7 !py-3 !text-[11px]"
              >
                Request Access
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
