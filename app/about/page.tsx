import Container from "../_components/Container";
import Section from "../_components/Section";
import Eyebrow from "../_components/Eyebrow";
import GlassCard from "../_components/GlassCard";
import GoldBrushstroke from "../_components/GoldBrushstroke";
import GoldSplash from "../_components/GoldSplash";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";

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
      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
        <GoldBrushstroke opacity={0.35} className="rotate-[2deg]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow className="mb-8">01 &middot; The House</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="display max-w-[1000px] text-text-primary"
              style={{ fontSize: "var(--t-h1)" }}
            >
              A room that was made with{" "}
              <span className="display-it gold-text">intention.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 max-w-xl text-text-secondary text-lg leading-[1.9]">
              Hemings Group, LLC opened with a single belief — that hospitality, when
              practiced as a craft, is indistinguishable from art. The address is
              Birmingham. The standard is its own.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* PHILOSOPHY — two columns */}
      <Section>
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2">
              <GlassCard corners padding="p-10 md:p-14" className="flex flex-col">
                <Eyebrow className="mb-6">Philosophy</Eyebrow>
                <h2
                  className="display text-text-primary"
                  style={{ fontSize: "var(--t-h2)" }}
                >
                  Elegance is the detail.
                  <br />
                  <span className="display-it gold-text">The detail is everything.</span>
                </h2>
                <p className="mt-8 text-text-secondary text-lg leading-[1.9]">
                  We believe the difference between a good night and an unforgettable
                  one is rarely the headline. It&rsquo;s the way the chair sits, the
                  weight of the glass, the way you were greeted by name without ever
                  having to say it.
                </p>
                <p className="mt-6 text-text-secondary leading-[1.9]">
                  Hemings is built on those quiet acts of attention. The lounge is small
                  for a reason. The membership is smaller for the same one.
                </p>
              </GlassCard>

              <div className="relative overflow-hidden rounded-[24px] bg-obsidian-950 p-10 md:p-14">
                <GoldSplash
                  size={420}
                  className="absolute -right-12 -top-12 opacity-90"
                />
                <div className="relative flex h-full flex-col justify-end">
                  <Eyebrow dark className="mb-6">
                    Our Cloth
                  </Eyebrow>
                  <p
                    className="display gold-text"
                    style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}
                  >
                    Ivory, obsidian, gold.
                  </p>
                  <p className="mt-6 text-[var(--text-secondary-dark)] leading-[1.9]">
                    A house that pours its colors the way it pours its drinks — with
                    restraint, with weight, with the understanding that less is the
                    luxury.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* PILLARS */}
      <Section className="bg-ivory-100/40">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <Eyebrow className="mb-6">Our Pillars</Eyebrow>
            <h2
              className="display text-text-primary"
              style={{ fontSize: "var(--t-h1)" }}
            >
              Three values, <span className="display-it gold-text">kept simply.</span>
            </h2>
          </Reveal>
          <div>
            {PILLARS.map((p, i) => (
              <Reveal key={p.label} delay={i * 120}>
                <div className="grid grid-cols-1 items-start gap-8 py-12 md:grid-cols-[260px_1fr]">
                  <div className="flex items-center gap-5">
                    <MetallicDivider width={48} />
                    <p className="smallcaps text-text-gold">{p.label}</p>
                  </div>
                  <p className="text-text-secondary text-lg leading-[1.9]">{p.body}</p>
                </div>
                {i < PILLARS.length - 1 ? (
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-ivory-300 to-transparent" />
                ) : null}
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CLOSING SPLASH */}
      <section className="flex items-center justify-center py-24">
        <GoldSplash size={180} className="opacity-80" />
      </section>
    </>
  );
}
