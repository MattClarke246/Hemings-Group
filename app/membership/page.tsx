import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import Button from "../_components/Button";
import BrandLockup from "../_components/BrandLockup";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";
import VenuePhoto from "../_components/VenuePhoto";
import Section from "../_components/Section";
import SectionHeading from "../_components/SectionHeading";
import ObsidianSplash from "../_components/ObsidianSplash";
import FullBleedImage from "../_components/FullBleedImage";
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
      <section className="relative flex min-h-[80svh] min-h-[80dvh] items-center pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-44 md:pb-36">
        <Container className="relative z-10">
          <Reveal direction="clip">
            <MetallicDivider width={80} />
          </Reveal>
          <Reveal delay={120} direction="up">
            <SectionHeading
              className="mt-8"
              eyebrow="02 · The Circle"
              title={`${CRAFTING_EXCLUSIVITY.split(":")[0]}:`}
              accent={CRAFTING_EXCLUSIVITY.split(":")[1]?.trim()}
              size="h1"
            />
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

      <ObsidianSplash>
        <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <SectionHeading eyebrow="Privileges" title="Why Join" accent="Hemings?" size="h2" />
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
                <GlassCard corners={i === 0} padding="p-12 md:p-14" className="h-full">
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
      </ObsidianSplash>

      <FullBleedImage
        src="/original_hero.jpg"
        alt="Hemings entrance with gold Members Preferred signage"
        height="min-h-[42vh] sm:min-h-[50vh]"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <Reveal direction="left">
              <VenuePhoto
                src="/original_hero.jpg"
                alt="Hemings entrance with gold Members Preferred signage and lit portico ceiling"
                aspect="aspect-[4/3]"
              />
            </Reveal>
            <Reveal delay={200} direction="right">
              <SectionHeading
                eyebrow="Members Preferred"
                title="The door is"
                accent="intentional."
                size="h2"
              />
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
      </Section>

      <Section tone="ivory" className="!py-36 md:!py-52">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center" direction="scale">
            <SectionHeading
              eyebrow="The Inquiry"
              title="Tell us about"
              accent="your evening."
              align="center"
              divider
            />
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
                <BrandLockup className="mx-auto items-center" />
              </div>
            </Reveal>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
