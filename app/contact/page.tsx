import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";
import ContactForm from "../_components/ContactForm";
import HoverLink from "../_components/HoverLink";
import VenuePhoto from "../_components/VenuePhoto";
import { CONTACT_TAGLINE } from "@/lib/copy";

export const metadata = {
  title: "Contact — Hemings Group",
  description:
    "Contact Hemings Group in Birmingham — 1623 2nd Ave N, Suite 106. Members-preferred lounge inquiries welcome.",
};

const HOURS = [
  { day: "Monday – Thursday", time: "6pm – 12am" },
  { day: "Friday – Saturday", time: "6pm – 2am" },
  { day: "Sunday", time: "5pm – 11pm" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/hemingsgroup" },
  { label: "Facebook", href: "https://facebook.com/hemingsgroup" },
  { label: "Twitter", href: "https://twitter.com/hemingsgroup" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[72svh] flex items-center pt-36 pb-24 md:pt-44 md:pb-32">
        <Container className="relative z-10">
          <Reveal direction="clip">
            <MetallicDivider width={80} />
          </Reveal>
          <Reveal delay={100}>
            <p
              className="smallcaps mt-8 mb-10 tracking-wide-caps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              Find Us
            </p>
          </Reveal>
          <Reveal delay={200} direction="up">
            <h1
              className="display-airy max-w-[1000px]"
              style={{
                fontSize: "var(--t-h1)",
                color: "var(--text-primary-dark)",
              }}
            >
              Where to{" "}
              <span className="display-it gold-text-shimmer">find us.</span>
            </h1>
          </Reveal>
          <Reveal delay={360} direction="up">
            <p
              className="mt-10 max-w-xl text-lg leading-[1.95]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              {CONTACT_TAGLINE}
              <span className="block mt-6 text-base opacity-90">
                1623 2nd Ave N, Suite 106 — Birmingham, AL 35203
              </span>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── FIND THE DOOR — entrance from live site ── */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal direction="up">
            <VenuePhoto
              src="/venue-interior-1.jpg"
              alt="Hemings lounge interior with gold mirrors, warm lighting, and members gathering"
              aspect="aspect-[21/9] min-h-[220px] md:min-h-[320px]"
            />
          </Reveal>
        </Container>
      </section>

      {/* ── CONTACT GRID — glass panel ── */}
      <section className="glass-panel py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* LEFT — DETAILS */}
            <Reveal direction="left">
              <GlassCard padding="p-12 md:p-14" className="h-full">
                <p
                  className="smallcaps mb-6 tracking-wide-caps"
                  style={{ color: "var(--text-gold-dark)" }}
                >
                  The House
                </p>
                <h2
                  className="display-airy mb-10"
                  style={{
                    fontSize: "var(--t-h3)",
                    color: "var(--text-primary-dark)",
                  }}
                >
                  Hemings Group, LLC
                </h2>

                <div className="space-y-10">
                  <Reveal delay={120} direction="up">
                    <p
                      className="smallcaps mb-3 tracking-wide-caps"
                      style={{ color: "var(--text-gold-dark)" }}
                    >
                      Address
                    </p>
                    <HoverLink
                      href="https://maps.google.com/?q=1623+2nd+Ave+N+Suite+106+Birmingham+AL+35203"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-lg leading-[1.85] transition-colors duration-300"
                    >
                      1623 2nd Ave N, Suite 106
                      <br />
                      Birmingham, AL 35203
                    </HoverLink>
                  </Reveal>

                  <Reveal delay={220} direction="up">
                    <p
                      className="smallcaps mb-3 tracking-wide-caps"
                      style={{ color: "var(--text-gold-dark)" }}
                    >
                      Direct
                    </p>
                    <p className="text-lg leading-[1.85]">
                      <HoverLink href="tel:+12052159905" className="transition-colors duration-300">
                        205&middot;215&middot;9905
                      </HoverLink>
                      <br />
                      <HoverLink
                        href="mailto:hemingsgroupllc@gmail.com"
                        className="transition-colors duration-300"
                      >
                        hemingsgroupllc@gmail.com
                      </HoverLink>
                    </p>
                  </Reveal>

                  <Reveal delay={320} direction="up">
                    <p
                      className="smallcaps mb-3 tracking-wide-caps"
                      style={{ color: "var(--text-gold-dark)" }}
                    >
                      Hours
                    </p>
                    <ul className="space-y-1.5">
                      {HOURS.map((h) => (
                        <li
                          key={h.day}
                          className="flex justify-between gap-6 pb-1.5"
                          style={{
                            borderBottom: "1px solid rgba(198, 167, 94, 0.18)",
                            color: "var(--text-secondary-dark)",
                          }}
                        >
                          <span>{h.day}</span>
                          <span style={{ color: "var(--text-primary-dark)" }}>
                            {h.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal delay={420} direction="up">
                    <p
                      className="smallcaps mb-3 tracking-wide-caps"
                      style={{ color: "var(--text-gold-dark)" }}
                    >
                      Follow
                    </p>
                    <ul className="flex gap-6">
                      {SOCIALS.map((s) => (
                        <li key={s.label}>
                          <HoverLink
                            href={s.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="smallcaps tracking-wide-caps transition-colors duration-300"
                            baseColor="var(--text-secondary-dark)"
                          >
                            {s.label}
                          </HoverLink>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </GlassCard>
            </Reveal>

            {/* RIGHT — INQUIRY */}
            <Reveal delay={180} direction="right">
              <div id="inquiry">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
