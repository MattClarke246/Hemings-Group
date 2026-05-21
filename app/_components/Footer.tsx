import Link from "next/link";
import Container from "./Container";
import MetallicDivider from "./MetallicDivider";
import Logo from "./Logo";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/hemingsgroup" },
  { label: "Facebook", href: "https://facebook.com/hemingsgroup" },
  { label: "Twitter", href: "https://twitter.com/hemingsgroup" },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10"
      style={{
        background: "rgba(0, 0, 0, 0.72)",
        backdropFilter: "blur(28px)",
        borderTop: "1px solid rgba(198, 167, 94, 0.18)",
      }}
    >
      <div className="flex justify-center pt-16">
        <MetallicDivider width={140} />
      </div>
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Logo size={40} variant="gold" />
            <p
              className="signature text-xl md:text-2xl"
              style={{ color: "var(--text-primary-dark)", letterSpacing: "0.4em" }}
            >
              Hemings
            </p>
          </div>
          <p
            className="mt-6 max-w-sm leading-[1.85]"
            style={{ color: "var(--text-secondary-dark)" }}
          >
            Where elegance and exclusivity equal an unforgettable experience.
            Birmingham&rsquo;s members-preferred lounge.
          </p>
        </div>

        <div>
          <p
            className="smallcaps mb-5"
            style={{ color: "var(--text-gold-dark)" }}
          >
            Visit
          </p>
          <p className="leading-[1.9]" style={{ color: "var(--text-secondary-dark)" }}>
            1623 2nd Ave N, Suite 106
            <br />
            Birmingham, AL 35203
          </p>
          <p className="mt-4" style={{ color: "var(--text-secondary-dark)" }}>
            <a
              href="tel:+12052159905"
              className="transition-colors duration-300 hover:opacity-100"
              style={{ color: "var(--text-secondary-dark)", opacity: 0.8 }}
            >
              205&middot;215&middot;9905
            </a>
            <br />
            <a
              href="mailto:hemingsgroupllc@gmail.com"
              className="transition-colors duration-300 hover:opacity-100"
              style={{ color: "var(--text-secondary-dark)", opacity: 0.8 }}
            >
              hemingsgroupllc@gmail.com
            </a>
          </p>
        </div>

        <div>
          <p
            className="smallcaps mb-5"
            style={{ color: "var(--text-gold-dark)" }}
          >
            Explore
          </p>
          <ul className="space-y-2.5">
            {[
              { href: "/about", label: "About" },
              { href: "/menu", label: "Menu" },
              { href: "/membership", label: "Membership" },
              { href: "/events", label: "Events" },
              { href: "/rsvp", label: "RSVP" },
              { href: "/contact", label: "Contact" },
              { href: "/portal", label: "Portal" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-300"
                  style={{ color: "var(--text-secondary-dark)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p
            className="smallcaps mt-8 mb-5"
            style={{ color: "var(--text-gold-dark)" }}
          >
            Follow
          </p>
          <ul className="flex gap-5">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="smallcaps text-[10px] transition-colors duration-300"
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
