import Container from "../_components/Container";
import Section from "../_components/Section";
import Eyebrow from "../_components/Eyebrow";
import GlassCard from "../_components/GlassCard";
import GoldBrushstroke from "../_components/GoldBrushstroke";
import Reveal from "../_components/Reveal";
import ContactForm from "../_components/ContactForm";

export const metadata = {
  title: "Contact — Hemings Group",
  description:
    "Find Hemings in Birmingham. Address, hours, and the brief inquiry for membership.",
};

const HOURS = [
  { day: "Monday – Thursday", time: "6pm – 12am" },
  { day: "Friday – Saturday", time: "6pm – 2am" },
  { day: "Sunday", time: "5pm – 11pm" },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-52 md:pb-24">
        <GoldBrushstroke opacity={0.32} className="rotate-[-2deg]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow className="mb-8">Find Us</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="display max-w-[1000px] text-text-primary"
              style={{ fontSize: "var(--t-h1)" }}
            >
              Where to <span className="display-it gold-text">find us.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 max-w-xl text-text-secondary text-lg leading-[1.9]">
              The address is Birmingham. The door is on 2nd Avenue. Beyond that, the
              evening is yours to shape.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CONTACT GRID */}
      <Section className="pt-12">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* LEFT — DETAILS */}
            <Reveal>
              <GlassCard padding="p-10 md:p-12" className="h-full">
                <Eyebrow className="mb-6">The House</Eyebrow>
                <h2
                  className="display mb-8 text-text-primary"
                  style={{ fontSize: "var(--t-h3)" }}
                >
                  Hemings Group, LLC
                </h2>

                <div className="space-y-8">
                  <div>
                    <p className="smallcaps text-text-gold mb-3">Address</p>
                    <a
                      href="https://maps.google.com/?q=1623+2nd+Ave+N+Suite+106+Birmingham+AL+35203"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-text-primary text-lg leading-[1.85] hover:text-text-gold"
                    >
                      1623 2nd Ave N, Suite 106
                      <br />
                      Birmingham, AL 35203
                    </a>
                  </div>

                  <div>
                    <p className="smallcaps text-text-gold mb-3">Direct</p>
                    <p className="text-lg leading-[1.85]">
                      <a
                        href="tel:+12052159905"
                        className="text-text-primary hover:text-text-gold"
                      >
                        205&middot;215&middot;9905
                      </a>
                      <br />
                      <a
                        href="mailto:hemingsgroupllc@gmail.com"
                        className="text-text-primary hover:text-text-gold"
                      >
                        hemingsgroupllc@gmail.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <p className="smallcaps text-text-gold mb-3">Hours</p>
                    <ul className="space-y-1.5">
                      {HOURS.map((h) => (
                        <li
                          key={h.day}
                          className="flex justify-between gap-6 border-b border-ivory-300/60 pb-1.5 text-text-secondary"
                        >
                          <span>{h.day}</span>
                          <span className="text-text-primary">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="smallcaps text-text-gold mb-3">Follow</p>
                    <ul className="flex gap-6">
                      {[
                        { label: "Instagram", href: "https://instagram.com/hemingsgroup" },
                        { label: "Facebook", href: "https://facebook.com/hemingsgroup" },
                        { label: "Twitter", href: "https://twitter.com/hemingsgroup" },
                      ].map((s) => (
                        <li key={s.label}>
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="smallcaps text-text-secondary hover:text-text-gold"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            {/* RIGHT — INQUIRY */}
            <Reveal delay={120}>
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
