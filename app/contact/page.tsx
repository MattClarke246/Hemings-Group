import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";
import ContactForm from "../_components/ContactForm";
import HoverLink from "../_components/HoverLink";
import Section from "../_components/Section";
import SectionHeading from "../_components/SectionHeading";
import FullBleedImage from "../_components/FullBleedImage";
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
      <section className="relative flex min-h-[72svh] min-h-[72dvh] items-center pt-28 pb-20 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32">
        <Container className="relative z-10">
          <Reveal direction="clip">
            <MetallicDivider width={80} />
          </Reveal>
          <Reveal delay={120} direction="up">
            <SectionHeading
              className="mt-8"
              eyebrow="Find Us"
              title="Where to"
              accent="find us."
              size="h1"
            />
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

      <FullBleedImage
        src="/venue-interior-1.jpg"
        alt="Hemings lounge interior with gold mirrors, warm lighting, and members gathering"
        height="min-h-[40vh] sm:min-h-[48vh]"
      />

      <Section tone="glass" className="!py-20 md:!py-32">
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
                          className="flex flex-col gap-1 pb-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pb-1.5"
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
      </Section>
    </>
  );
}
