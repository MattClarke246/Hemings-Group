import Link from "next/link";
import Container from "./Container";
import MetallicDivider from "./MetallicDivider";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/hemingsgroup" },
  { label: "Facebook", href: "https://facebook.com/hemingsgroup" },
  { label: "Twitter", href: "https://twitter.com/hemingsgroup" },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian-900 text-[var(--text-secondary-dark)]">
      <div className="flex justify-center pt-20">
        <MetallicDivider width={140} />
      </div>
      <Container className="grid grid-cols-1 gap-12 py-20 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="signature text-[var(--text-primary-dark)] text-xl md:text-2xl">
            Hemings
          </p>
          <p className="mt-6 max-w-sm text-[var(--text-secondary-dark)] leading-[1.85]">
            Where elegance and exclusivity equal an unforgettable experience.
            Birmingham&rsquo;s members-preferred lounge.
          </p>
        </div>

        <div>
          <p className="smallcaps text-[var(--text-gold-dark)] mb-5">Visit</p>
          <p className="text-[var(--text-secondary-dark)] leading-[1.9]">
            1623 2nd Ave N, Suite 106
            <br />
            Birmingham, AL 35203
          </p>
          <p className="mt-4 text-[var(--text-secondary-dark)]">
            <a href="tel:+12052159905" className="hover:text-[var(--text-gold-dark)]">
              205&middot;215&middot;9905
            </a>
            <br />
            <a
              href="mailto:hemingsgroupllc@gmail.com"
              className="hover:text-[var(--text-gold-dark)]"
            >
              hemingsgroupllc@gmail.com
            </a>
          </p>
        </div>

        <div>
          <p className="smallcaps text-[var(--text-gold-dark)] mb-5">Explore</p>
          <ul className="space-y-2.5">
            {[
              { href: "/about", label: "About" },
              { href: "/membership", label: "Membership" },
              { href: "/events", label: "Events" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[var(--text-secondary-dark)] hover:text-[var(--text-gold-dark)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="smallcaps text-[var(--text-gold-dark)] mt-8 mb-5">Follow</p>
          <ul className="flex gap-5">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[var(--text-secondary-dark)] hover:text-[var(--text-gold-dark)] smallcaps text-[10px]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-char-700/60">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-[11px] text-[var(--text-secondary-dark)] md:flex-row">
          <p className="smallcaps">
            &copy; {new Date().getFullYear()} Hemings Group, LLC
          </p>
          <p className="smallcaps opacity-70">Birmingham &middot; Est.</p>
        </Container>
      </div>
    </footer>
  );
}
