import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import MetallicDivider from "../_components/MetallicDivider";
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
              The address is Birmingham. The door is on 2nd Avenue. Beyond that, the
              evening is yours to shape.
            </p>
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
                    <a
                      href="https://maps.google.com/?q=1623+2nd+Ave+N+Suite+106+Birmingham+AL+35203"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-lg leading-[1.85] transition-colors duration-300"
                      style={{ color: "var(--text-primary-dark)" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--text-gold-dark)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--text-primary-dark)")
                      }
                    >
                      1623 2nd Ave N, Suite 106
                      <br />
                      Birmingham, AL 35203
                    </a>
                  </Reveal>

                  <Reveal delay={220} direction="up">
                    <p
                      className="smallcaps mb-3 tracking-wide-caps"
                      style={{ color: "var(--text-gold-dark)" }}
                    >
                      Direct
                    </p>
                    <p className="text-lg leading-[1.85]">
                      <a
                        href="tel:+12052159905"
                        className="transition-colors duration-300"
                        style={{ color: "var(--text-primary-dark)" }}
                      >
                        205&middot;215&middot;9905
                      </a>
                      <br />
                      <a
                        href="mailto:hemingsgroupllc@gmail.com"
                        className="transition-colors duration-300"
                        style={{ color: "var(--text-primary-dark)" }}
                      >
                        hemingsgroupllc@gmail.com
                      </a>
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
                            className="smallcaps tracking-wide-caps transition-colors duration-300"
                            style={{ color: "var(--text-secondary-dark)" }}
                            onMouseEnter={(e) =>
                              ((e.target as HTMLElement).style.color =
                                "var(--text-gold-dark)")
                            }
                            onMouseLeave={(e) =>
                              ((e.target as HTMLElement).style.color =
                                "var(--text-secondary-dark)")
                            }
                          >
                            {s.label}
                          </a>
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
