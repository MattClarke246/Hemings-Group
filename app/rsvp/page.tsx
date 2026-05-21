"use client";

import { useState, type FormEvent } from "react";
import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";
import Button from "../_components/Button";

const DAYS = [
  "Monday - Closed/Private",
  "Tuesday - Velvet Hours (Jazz)",
  "Wednesday - The Vintage (Vinyl)",
  "Thursday - Happy Hour",
  "Friday - R&B Fridays",
  "Saturday - Aftermath",
  "Sunday - Last Light",
];

const SECTIONS = [
  "Standing Room Only",
  "Bar Counter VIP",
  "Gold Lounge Section",
  "Velvet Corner Suite",
];

const fieldClass =
  "w-full bg-transparent px-1 py-3 placeholder:opacity-40 focus:outline-none transition-colors duration-300";
const fieldStyle = {
  borderBottom: "1px solid rgba(198, 167, 94, 0.28)",
  color: "var(--text-primary-dark)",
};
const fieldFocusStyle = {
  borderBottomColor: "var(--gold-400)",
};

const labelClass = "smallcaps mb-2 block";

export default function RsvpPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex min-h-[60svh] min-h-[60dvh] items-center pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-44 md:pb-24">
        <Container className="relative z-10">
          <Reveal direction="clip">
            <MetallicDivider width={80} />
          </Reveal>
          <Reveal delay={100}>
            <p
              className="smallcaps mt-8 mb-10 tracking-wide-caps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              Secure Your Reservation
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
              Reserve your{" "}
              <span className="display-it gold-text-shimmer">evening.</span>
            </h1>
          </Reveal>
          <Reveal delay={360} direction="up">
            <p
              className="mt-10 max-w-xl text-lg leading-[1.95]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              Please submit your details below. Table bookings are kept limited to ensure our members enjoy absolute comfort.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── RSVP FORM SECTION ── */}
      <section className="glass-panel py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <Reveal direction="scale">
                <GlassCard corners className="text-center" padding="px-8 py-16 md:px-12 md:py-20">
                  <p
                    className="smallcaps mb-6"
                    style={{ color: "var(--text-gold-dark)" }}
                  >
                    Reserved
                  </p>
                  <h3
                    className="display gold-text mb-5"
                    style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
                  >
                    Your RSVP is recorded.
                  </h3>
                  <p className="mx-auto max-w-md" style={{ color: "var(--text-secondary-dark)" }}>
                    A host will review your request and confirm your section assignment shortly. We look forward to welcome you.
                  </p>
                </GlassCard>
              </Reveal>
            ) : (
              <Reveal direction="up">
                <GlassCard padding="p-8 md:p-12" className="relative" corners>
                  <p
                    className="smallcaps mb-3"
                    style={{ color: "var(--text-gold-dark)" }}
                  >
                    Exclusive RSVP
                  </p>
                  <h3
                    className="display mb-10"
                    style={{
                      fontSize: "clamp(28px, 3.4vw, 42px)",
                      color: "var(--text-primary-dark)",
                    }}
                  >
                    Request a Table.
                  </h3>

                  <form onSubmit={onSubmit} className="grid grid-cols-1 gap-7 md:grid-cols-2">
                    <div className="md:col-span-1">
                      <label
                        htmlFor="name"
                        className={labelClass}
                        style={{ color: "var(--text-gold-dark)" }}
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className={fieldClass}
                        style={fieldStyle}
                        placeholder="Full name"
                        onFocus={(e) =>
                          Object.assign((e.target as HTMLElement).style, fieldFocusStyle)
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLElement).style.borderBottomColor =
                            "rgba(198, 167, 94, 0.28)")
                        }
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label
                        htmlFor="email"
                        className={labelClass}
                        style={{ color: "var(--text-gold-dark)" }}
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={fieldClass}
                        style={fieldStyle}
                        placeholder="you@domain.com"
                        onFocus={(e) =>
                          Object.assign((e.target as HTMLElement).style, fieldFocusStyle)
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLElement).style.borderBottomColor =
                            "rgba(198, 167, 94, 0.28)")
                        }
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label
                        htmlFor="phone"
                        className={labelClass}
                        style={{ color: "var(--text-gold-dark)" }}
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={fieldClass}
                        style={fieldStyle}
                        placeholder="Optional"
                        onFocus={(e) =>
                          Object.assign((e.target as HTMLElement).style, fieldFocusStyle)
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLElement).style.borderBottomColor =
                            "rgba(198, 167, 94, 0.28)")
                        }
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label
                        htmlFor="party"
                        className={labelClass}
                        style={{ color: "var(--text-gold-dark)" }}
                      >
                        Party Size
                      </label>
                      <input
                        id="party"
                        name="party"
                        type="number"
                        min={1}
                        max={10}
                        required
                        className={fieldClass}
                        style={fieldStyle}
                        placeholder="2"
                        onFocus={(e) =>
                          Object.assign((e.target as HTMLElement).style, fieldFocusStyle)
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLElement).style.borderBottomColor =
                            "rgba(198, 167, 94, 0.28)")
                        }
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label
                        htmlFor="night"
                        className={labelClass}
                        style={{ color: "var(--text-gold-dark)" }}
                      >
                        Preferred Evening
                      </label>
                      <select
                        id="night"
                        name="night"
                        className={fieldClass}
                        style={{ ...fieldStyle, background: "rgba(0, 0, 0, 0.5)" }}
                        defaultValue=""
                        required
                      >
                        <option value="" disabled style={{ background: "#0a0a0c" }}>
                          Choose an evening
                        </option>
                        {DAYS.map((d) => (
                          <option key={d} value={d} style={{ background: "#0a0a0c" }}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-1">
                      <label
                        htmlFor="section"
                        className={labelClass}
                        style={{ color: "var(--text-gold-dark)" }}
                      >
                        Lounge Area
                      </label>
                      <select
                        id="section"
                        name="section"
                        className={fieldClass}
                        style={{ ...fieldStyle, background: "rgba(0, 0, 0, 0.5)" }}
                        defaultValue=""
                      >
                        <option value="" disabled style={{ background: "#0a0a0c" }}>
                          Select a section (optional)
                        </option>
                        {SECTIONS.map((s) => (
                          <option key={s} value={s} style={{ background: "#0a0a0c" }}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="drink"
                        className={labelClass}
                        style={{ color: "var(--text-gold-dark)" }}
                      >
                        Preferred Drink / Liquor of Choice
                      </label>
                      <input
                        id="drink"
                        name="drink"
                        className={fieldClass}
                        style={fieldStyle}
                        placeholder="e.g. Golden Whisper, Bourbon neat"
                        onFocus={(e) =>
                          Object.assign((e.target as HTMLElement).style, fieldFocusStyle)
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLElement).style.borderBottomColor =
                            "rgba(198, 167, 94, 0.28)")
                        }
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="special"
                        className={labelClass}
                        style={{ color: "var(--text-gold-dark)" }}
                      >
                        Special Request / Tasting Feedback
                      </label>
                      <textarea
                        id="special"
                        name="special"
                        rows={3}
                        className={`${fieldClass} resize-none`}
                        style={fieldStyle}
                        placeholder="Any additional details or feedback for our hosts..."
                        onFocus={(e) =>
                          Object.assign((e.target as HTMLElement).style, fieldFocusStyle)
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLElement).style.borderBottomColor =
                            "rgba(198, 167, 94, 0.28)")
                        }
                      />
                    </div>
                    <div className="md:col-span-2 mt-2">
                      <Button type="submit" variant="gold">
                        Reserve My Seat
                      </Button>
                    </div>
                  </form>
                </GlassCard>
              </Reveal>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
