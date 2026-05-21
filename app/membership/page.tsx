import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import Button from "../_components/Button";
import Logo from "../_components/Logo";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";
import VenuePhoto from "../_components/VenuePhoto";
import {
  CRAFTING_EXCLUSIVITY,
  MEMBERSHIP_INTRO,
  WHY_JOIN,
} from "@/lib/copy";

export const metadata = {
  title: "Membership — Hemings Group",
  description:
    "Crafting exclusivity at Hemings — unparalleled access to luxury, refinement, and a prestigious members-preferred community.",
};

const PRIVILEGES = [
  {
    eyebrow: "I",
    title: "Exclusive Events",
    body: "Access to private events and members-only evenings curated for those who appreciate the finer things in life.",
  },
  {
    eyebrow: "II",
    title: "Personalized Services",
    body: "Personalized services designed to enhance your experience — tailored to you, not the crowd.",
  },
  {
    eyebrow: "III",
    title: "Guest Privileges",
    body: "Bring guests into the lounge. Members extend the same hospitality to their circle that Hemings extends to them.",
  },
  {
    eyebrow: "IV",
    title: "Exclusive Offers",
    body: "Exclusive offers and priority access to sections, reservations, and the best of what the house holds.",
  },
];

export default function MembershipPage() {
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
              02 &middot; The Circle
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
              {CRAFTING_EXCLUSIVITY.split(":")[0]}:{" "}
              <span className="display-it gold-text-shimmer">
                {CRAFTING_EXCLUSIVITY.split(":")[1]?.trim()}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={360} direction="up">
            <p
              className="mt-10 max-w-xl text-lg leading-[1.95]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              {MEMBERSHIP_INTRO}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── PRIVILEGES — glass panel ── */}
      <section className="glass-panel py-28 md:py-44">
        <Container>
          <div className="mb-20 flex flex-col md:flex-row md:items-end gap-10 justify-between">
            <Reveal direction="left">
              <p
                className="smallcaps mb-6 tracking-wide-caps"
                style={{ color: "var(--text-gold-dark)" }}
              >
                Privileges
              </p>
              <h2
                className="display-airy max-w-[600px]"
                style={{
                  fontSize: "var(--t-h2)",
                  color: "var(--text-primary-dark)",
                }}
              >
                Why Join{" "}
                <span className="display-it gold-text-shimmer">Hemings?</span>
              </h2>
            </Reveal>
            <Reveal direction="right" delay={200}>
              <MetallicDivider width={120} />
            </Reveal>
          </div>

          <Reveal delay={120} direction="up" className="mb-12 max-w-3xl">
            <p className="text-lg leading-[1.95]" style={{ color: "var(--text-secondary-dark)" }}>
              {WHY_JOIN}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {PRIVILEGES.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 130}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <GlassCard padding="p-12 md:p-14" className="h-full">
                  <div className="flex items-baseline gap-5 mb-7">
                    <span
                      className="display gold-text"
                      style={{ fontSize: "52px", lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      {p.eyebrow}
                    </span>
                    <span className="metallic-divider" style={{ width: 72 }} />
                  </div>
                  <h3
                    className="display-airy mb-5"
                    style={{
                      fontSize: "var(--t-h3)",
                      color: "var(--text-primary-dark)",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="leading-[1.95]"
                    style={{ color: "var(--text-secondary-dark)" }}
                  >
                    {p.body}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── THE ENTRANCE — members-preferred signage from live site ── */}
      <section className="py-28 md:py-40">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <Reveal direction="left">
              <VenuePhoto
                src="/original_hero.png"
                alt="Hemings entrance with gold Members Preferred signage and lit portico ceiling"
                aspect="aspect-[4/3]"
              />
            </Reveal>
            <Reveal delay={200} direction="right">
              <p
                className="smallcaps mb-6 tracking-wide-caps"
                style={{ color: "var(--text-gold-dark)" }}
              >
                Members Preferred
              </p>
              <h2
                className="display-airy"
                style={{
                  fontSize: "var(--t-h2)",
                  color: "var(--text-primary-dark)",
                }}
              >
                The door is{" "}
                <span className="display-it gold-text-shimmer">intentional.</span>
              </h2>
              <p
                className="mt-8 text-lg leading-[1.95]"
                style={{ color: "var(--text-secondary-dark)" }}
              >
                Est. 2023 — Members Preferred. Gold light, classical stone, and a
                portico that sets the tone before the first pour.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── CTA — open over marble ── */}
      <section className="py-36 md:py-52">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center" direction="scale">
            <p
              className="smallcaps mb-10 tracking-wide-caps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              The Inquiry
            </p>
            <h2
              className="display-airy"
              style={{
                fontSize: "var(--t-h1)",
                color: "var(--text-primary-dark)",
              }}
            >
              Tell us about{" "}
              <span className="display-it gold-text-shimmer">your evening.</span>
            </h2>
            <Reveal delay={200} direction="up">
              <p
                className="mt-10 mx-auto max-w-xl text-lg leading-[1.95]"
                style={{ color: "var(--text-secondary-dark)" }}
              >
                Become a member today. Share a brief inquiry and our team will
                guide you through the next step.
              </p>
            </Reveal>
            <Reveal delay={360} direction="up">
              <div className="mt-14 flex justify-center">
                <Button href="/contact#inquiry" variant="gold">
                  Request Membership
                </Button>
              </div>
            </Reveal>
            <Reveal delay={500} direction="scale">
              <div className="mt-16 flex justify-center">
                <Logo size={160} variant="gold" />
              </div>
            </Reveal>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
