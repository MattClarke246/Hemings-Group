import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import GoldSplash from "../_components/GoldSplash";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";
import Button from "../_components/Button";
import Logo from "../_components/Logo";
import NavyAgate from "../_components/NavyAgate";
import GoldLeaf from "../_components/GoldLeaf";

export const metadata = {
  title: "About — Hemings Group",
  description:
    "The house, the philosophy, the people. A short note on what Hemings keeps and why.",
};

const PILLARS = [
  {
    label: "Service",
    body: "We remember faces, preferences, and the small specifics that turn a visit into a return. Our staff is the difference between a venue and a house.",
  },
  {
    label: "Atmosphere",
    body: "Every surface is composed: the light, the music, the cadence of conversation. We design rooms that quiet down so the evening can speak.",
  },
  {
    label: "Discretion",
    body: "What happens at Hemings is yours. Membership is small, the guestbook is private, the room never asks more of you than you brought in.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[80svh] flex items-center pt-36 pb-28 md:pt-44 md:pb-36">
        <Container className="relative z-10">
          <Reveal direction="clip">
            <MetallicDivider width={80} />
          </Reveal>
          <Reveal delay={100}>
            <p
              className="smallcaps mt-8 mb-10 tracking-wide-caps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              01 &middot; The House
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
              A room that was made with{" "}
              <span className="display-it gold-text-shimmer">intention.</span>
            </h1>
          </Reveal>
          <Reveal delay={360} direction="up">
            <p
              className="mt-10 max-w-xl text-lg leading-[1.95]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              Hemings Group, LLC opened with a single belief — that hospitality, when
              practiced as a craft, is indistinguishable from art. The address is
              Birmingham. The standard is its own.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── PHILOSOPHY — glass panel ── */}
      <section className="glass-panel py-28 md:py-40">
        <Container>
          <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2">
            <Reveal direction="left">
              <GlassCard corners padding="p-12 md:p-16" className="flex flex-col h-full">
                <p
                  className="smallcaps mb-6 tracking-wide-caps"
                  style={{ color: "var(--text-gold-dark)" }}
                >
                  Philosophy
                </p>
                <h2
                  className="display-airy"
                  style={{
                    fontSize: "var(--t-h2)",
                    color: "var(--text-primary-dark)",
                  }}
                >
                  Elegance is the detail.
                  <br />
                  <span className="display-it gold-text-shimmer">The detail is everything.</span>
                </h2>
                <Reveal delay={200} direction="up">
                  <p
                    className="mt-10 text-lg leading-[1.95]"
                    style={{ color: "var(--text-secondary-dark)" }}
                  >
                    We believe the difference between a good night and an unforgettable
                    one is rarely the headline. It&rsquo;s the way the chair sits, the
                    weight of the glass, the way you were greeted by name without ever
                    having to say it.
                  </p>
                </Reveal>
                <Reveal delay={360} direction="up">
                  <p
                    className="mt-6 leading-[1.95]"
                    style={{ color: "var(--text-secondary-dark)" }}
                  >
                    Hemings is built on those quiet acts of attention. The lounge is
                    small for a reason. The membership is smaller for the same one.
                  </p>
                </Reveal>
              </GlassCard>
            </Reveal>

            {/* REVERTED TO NAVY AGATE CANVAS CARD */}
            <Reveal delay={200} direction="right">
              <div className="relative h-full overflow-hidden rounded-[20px] border" style={{ borderColor: "rgba(198, 167, 94, 0.30)", minHeight: "420px" }}>
                <div className="absolute inset-0 -z-0">
                  <NavyAgate intensity={1.15} />
                  <GoldLeaf density={1.2} />
                </div>
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(13, 21, 37, 0.35)", backdropFilter: "blur(2px)" }}
                />
                <div className="relative z-10 flex h-full flex-col justify-end p-12 md:p-16">
                  <p
                    className="smallcaps mb-6 tracking-wide-caps"
                    style={{ color: "var(--text-gold-dark)" }}
                  >
                    Our Cloth
                  </p>
                  <p
                    className="display-airy gold-text-shimmer"
                    style={{ fontSize: "clamp(32px, 3.8vw, 52px)" }}
                  >
                    Navy, beige,
                    <br />
                    gold.
                  </p>
                  <p
                    className="mt-8 leading-[1.95]"
                    style={{ color: "var(--text-secondary-dark)" }}
                  >
                    A house that pours its colors the way it pours its drinks — with
                    restraint, with weight, with the understanding that less is the
                    luxury.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── PILLARS — open over marble ── */}
      <section className="py-28 md:py-44">
        <Container>
          <Reveal className="mb-16 max-w-3xl" direction="left">
            <p
              className="smallcaps mb-6 tracking-wide-caps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              Our Pillars
            </p>
            <h2
              className="display-airy"
              style={{
                fontSize: "var(--t-h1)",
                color: "var(--text-primary-dark)",
              }}
            >
              Three values,{" "}
              <span className="display-it gold-text-shimmer">kept simply.</span>
            </h2>
          </Reveal>
          <div>
            {PILLARS.map((p, i) => (
              <div key={p.label}>
                <Reveal delay={i * 160} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className="grid grid-cols-1 items-start gap-8 py-14 md:grid-cols-[260px_1fr]">
                    <div className="flex items-center gap-5">
                      <MetallicDivider width={48} />
                      <p
                        className="smallcaps tracking-wide-caps"
                        style={{ color: "var(--text-gold-dark)" }}
                      >
                        {p.label}
                      </p>
                    </div>
                    <p
                      className="text-lg leading-[1.95]"
                      style={{ color: "var(--text-secondary-dark)" }}
                    >
                      {p.body}
                    </p>
                  </div>
                </Reveal>
                {i < PILLARS.length - 1 ? (
                  <div
                    className="h-px w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(198,167,94,0.3) 50%, transparent 100%)",
                    }}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── REAL VENUE VISUAL GALLERY SECTION ── */}
      <section className="glass-panel py-28 md:py-40">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <Reveal direction="left">
                <p
                  className="smallcaps mb-6 tracking-wide-caps"
                  style={{ color: "var(--text-gold-dark)" }}
                >
                  Inner Sanctum
                </p>
                <h2
                  className="display-airy mb-8"
                  style={{
                    fontSize: "var(--t-h2)",
                    color: "var(--text-primary-dark)",
                  }}
                >
                  A Gathering of{" "}
                  <span className="display-it gold-text-shimmer">Distinction.</span>
                </h2>
                <p
                  className="text-lg leading-[1.9] mb-10"
                  style={{ color: "var(--text-secondary-dark)" }}
                >
                  Step into our private booths. Framed by plush red velvet and detailed gold boundaries, it provides an exquisite sanctuary for members to connect, celebrate, and unwind.
                </p>
                <div className="flex gap-6">
                  <Button href="/rsvp" variant="gold">
                    Experience it
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal direction="right" className="relative group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,167,94,0.25)_0%,transparent_75%)] pointer-events-none -z-10" />
                <div
                  className="overflow-hidden rounded-[24px] border transition-all duration-700 group-hover:shadow-[0_0_50px_rgba(198,167,94,0.2)]"
                  style={{ borderColor: "rgba(198, 167, 94, 0.35)" }}
                >
                  <img
                    src="/venue_1.jpg"
                    alt="Guests in plush velvet gold-trimmed seating at Hemings Lounge"
                    className="w-full h-auto object-cover transition-transform duration-[1800ms] group-hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CLOSING ── */}
      <section className="py-24 md:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <Reveal direction="scale">
            <GoldSplash size={200} className="opacity-92" />
          </Reveal>
          <Reveal delay={200} direction="up">
            <p
              className="signature text-sm md:text-base"
              style={{ color: "var(--text-gold-dark)" }}
            >
              Hemings &middot; Birmingham
            </p>
          </Reveal>
          <Reveal delay={360} direction="up">
            <Button href="/membership" variant="gold">
              Discover Membership
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
