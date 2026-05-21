import Link from "next/link";
import Container from "./Container";
import MetallicDivider from "./MetallicDivider";
import BrandLockup from "./BrandLockup";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/hemingsgroup" },
  { label: "Facebook", href: "https://facebook.com/hemingsgroup" },
  { label: "Twitter", href: "https://twitter.com/hemingsgroup" },
];

export default function Footer() {
  return (
    <footer className="footer-obsidian relative z-10">
      <div className="flex justify-center pt-16">
        <MetallicDivider width={140} />
      </div>
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandLockup />
          <p
            className="mt-8 max-w-sm leading-[1.85]"
            style={{ color: "var(--text-secondary-dark)" }}
          >
            Where elegance and exclusivity equal an unforgettable experience.
            Birmingham&rsquo;s members-preferred lounge.
          </p>
        </div>

        <div>
          <p className="section-eyebrow">Visit</p>
          <p className="leading-[1.9]" style={{ color: "var(--text-secondary-dark)" }}>
            1623 2nd Ave N, Suite 106
            <br />
            Birmingham, AL 35203
          </p>
          <p className="mt-4" style={{ color: "var(--text-secondary-dark)" }}>
            <a
              href="tel:+12052159905"
              className="nav-link inline-block min-h-[44px] py-2 leading-[44px]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              205&middot;215&middot;9905
            </a>
            <br />
            <a
              href="mailto:hemingsgroupllc@gmail.com"
              className="nav-link inline-block min-h-[44px] py-2 leading-[44px]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              hemingsgroupllc@gmail.com
            </a>
          </p>
        </div>

        <div>
          <p className="section-eyebrow">Explore</p>
          <ul className="space-y-1">
            {[
              { href: "/about", label: "About" },
              { href: "/menu", label: "Menu" },
              { href: "/membership", label: "Membership" },
              { href: "/events", label: "Events" },
              { href: "/rsvp", label: "RSVP" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link inline-flex min-h-[44px] items-center"
                  style={{ color: "var(--text-secondary-dark)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="section-eyebrow mt-8">Follow</p>
          <ul className="flex flex-wrap gap-5">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="smallcaps nav-link inline-flex min-h-[44px] items-center text-[10px]"
                  style={{ color: "var(--text-secondary-dark)" }}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div style={{ borderTop: "1px solid rgba(198, 167, 94, 0.12)" }}>
        <Container className="py-6">
          <div
            className="flex flex-col items-center justify-between gap-4 md:flex-row"
            style={{ fontSize: "11px", color: "var(--text-secondary-dark)" }}
          >
            <p className="smallcaps opacity-70">
              &copy; {new Date().getFullYear()} Hemings Group, LLC
            </p>
            <p className="smallcaps opacity-50">Birmingham &middot; Est. 2023</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
