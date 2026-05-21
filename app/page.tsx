import dynamic from "next/dynamic";
import Link from "next/link";
import Container from "./_components/Container";
import Button from "./_components/Button";
import NumeralCard from "./_components/NumeralCard";
import MetallicDivider from "./_components/MetallicDivider";
import Reveal from "./_components/Reveal";
import Section from "./_components/Section";
import SectionHeading from "./_components/SectionHeading";
import ObsidianSplash from "./_components/ObsidianSplash";
import FullBleedImage from "./_components/FullBleedImage";
import PullQuote from "./_components/PullQuote";
import RevealGroup from "./_components/RevealGroup";
import GoldBrushstroke from "./_components/GoldBrushstroke";

const EventsScroller = dynamic(() => import("./_components/EventsScroller"));
import GoldDust from "./_components/GoldDust";
import HeroImage from "./_components/HeroImage";
import Logo from "./_components/Logo";
import VenuePhoto from "./_components/VenuePhoto";
import {
  CRAFTING_EXCLUSIVITY,
  HERO_LEDE,
  LUXURY_IN_DETAILS,
  MANIFESTO,
  TAGLINE,
} from "@/lib/copy";

export default function HomePage() {
  const craftingParts = CRAFTING_EXCLUSIVITY.split(":");
  const craftingTitle = craftingParts[0]?.trim() ?? "Crafting Exclusivity";
  const craftingAccent = craftingParts[1]?.trim() ?? "The Hemings Experience";

  return (
    <>
      <section className="relative flex min-h-[100svh] min-h-[100dvh] items-center overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28 md:pt-44 md:pb-40">
        <HeroImage src="/original_hero.jpg" alt="" priority />
        <GoldBrushstroke className="-z-[5]" opacity={0.35} />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.75) 70%, rgba(0, 0, 0, 0.95) 100%)",
          }}
        />
        <GoldDust />
        <Container className="relative z-10 flex flex-col items-center text-center">
          <Reveal direction="scale" className="mb-6">
            <Logo
              variant="white"
              className="mx-auto h-auto w-[min(72vw,280px)] sm:w-[min(68vw,300px)] md:w-[300px]"
            />
          </Reveal>
          <Reveal direction="clip">
            <MetallicDivider width={80} className="mx-auto" />
          </Reveal>
          <Reveal delay={80}>
            <p
              className="smallcaps mt-6 mb-8 max-w-[90vw] tracking-wide-caps sm:mt-8"
              style={{ color: "var(--text-gold-dark)" }}
            >
              Hemings Group &nbsp;&middot;&nbsp; Birmingham, Alabama
            </p>
          </Reveal>
          <Reveal delay={160} direction="up">
            <h1
              className="display-airy w-full max-w-[1100px] px-2"
              style={{ fontSize: "var(--t-display)", color: "var(--text-primary-dark)" }}
            >
              Your Experience{" "}
              <span className="display-it gold-text-shimmer">is&nbsp;Everything.</span>
            </h1>
          </Reveal>
          <Reveal delay={280} direction="up">
            <p
              className="section-lede mx-auto mt-8 max-w-lg px-2 text-base leading-[1.9] sm:mt-10 sm:text-lg"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              {HERO_LEDE}
            </p>
          </Reveal>
          <Reveal delay={400} direction="up">
            <div className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-4 sm:mt-12 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-8">
              <Button href="/membership" variant="gold" className="w-full sm:w-auto">
                Request Access
              </Button>
              <Button href="#manifesto" variant="ghost" className="w-full sm:w-auto">
                The Experience
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section id="manifesto" tone="ivory">
        <Container>
          <Reveal className="flex flex-col items-center text-center" direction="scale">
            <SectionHeading
              eyebrow="The Manifesto"
              title="Elegance & Exclusivity"
              align="center"
              divider
            />
            <Reveal delay={200} direction="up">
              <p
                className="mt-10 max-w-2xl text-lg leading-[1.95]"
                style={{ color: "var(--text-secondary-dark)" }}
              >
                {MANIFESTO} Welcome to Hemings — where {TAGLINE.toLowerCase()}.
              </p>
            </Reveal>
            <Link
              href="/about"
              className="nav-link smallcaps mt-10 inline-block min-h-[44px] py-2"
              style={{ color: "var(--text-gold-dark)" }}
            >
              Our story
            </Link>
            <MetallicDivider width={140} className="mt-12" />
          </Reveal>
        </Container>
      </Section>

      <FullBleedImage
        src="/venue_2.jpg"
        alt="Members gathering in the Hemings lounge with gold mirrors and warm lighting"
        height="min-h-[42vh] sm:min-h-[50vh]"
        position="center 35%"
      />

      <Section>
        <Container>
          <div className="mb-12 grid grid-cols-1 gap-10 md:mb-16 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <Reveal direction="left">
              <SectionHeading
                eyebrow="About Hemings"
                title={`${craftingTitle}:`}
                accent={craftingAccent}
              />
              <p
                className="mt-8 max-w-xl text-lg leading-[1.95]"
                style={{ color: "var(--text-secondary-dark)" }}
              >
                {MANIFESTO} A members-preferred lounge where refinement, warmth, and
                curated amenities define every visit.
              </p>
            </Reveal>
            <Reveal direction="right" delay={160} className="md:justify-self-end">
              <MetallicDivider width={120} />
            </Reveal>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <Reveal delay={0} direction="scale" className="md:col-span-7">
              <VenuePhoto
                src="/venue-about.jpg"
                alt="Hemings bar with crystal chandeliers, gold-framed panels, and tufted seating"
                aspect="aspect-[16/10] md:aspect-auto md:min-h-[420px]"
              />
            </Reveal>
            <div className="flex flex-col gap-8 md:col-span-5">
              <Reveal delay={120} direction="up">
                <VenuePhoto
                  src="/venue_1.jpg"
                  alt="Members gathered in rose velvet booths with gold trim at Hemings"
                  aspect="aspect-[4/3]"
                />
              </Reveal>
              <Reveal delay={240} direction="up">
                <VenuePhoto
                  src="/venue-sections.jpg"
                  alt="Craft cocktail on marble with gold edge at Hemings lounge"
                  aspect="aspect-[4/3]"
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-16 flex flex-col gap-10 md:mb-20 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="The House"
              title="Three things,"
              accent="poured slowly."
            />
            <Reveal direction="right" delay={200}>
              <MetallicDivider width={120} className="hidden md:block" />
            </Reveal>
          </div>
          <RevealGroup
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            stagger={140}
            direction="scale"
          >
            <NumeralCard
              numeral="01"
              eyebrow="Service"
              title={
                <>
                  Attention,
                  <br />
                  composed.
                </>
              }
            >
              Our dedicated staff tailors every aspect of your visit to perfection —
              impeccable service from the first pour to the last.
            </NumeralCard>
            <NumeralCard
              numeral="02"
              eyebrow="Atmosphere"
              title={
                <>
                  Low light,
                  <br />
                  high contrast.
                </>
              }
            >
              From the moment you arrive, you&rsquo;re enveloped in refinement and
              warmth — a VIP atmosphere that blends sophistication with ease.
            </NumeralCard>
            <NumeralCard
              numeral="03"
              eyebrow="Membership"
              title={
                <>
                  By invitation,
                  <br />
                  by intention.
                </>
              }
            >
              Members-preferred access to an exclusive community, private events,
              exclusive offers, and personalized services.
            </NumeralCard>
          </RevealGroup>
        </Container>
      </Section>

      <Container className="py-8 md:py-12">
        <Reveal direction="up">
          <PullQuote attribution="Hemings Group">
            Where elegance and exclusivity equal an unforgettable experience.
          </PullQuote>
        </Reveal>
      </Container>

      <ObsidianSplash>
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="The Philosophy"
              title="True luxury lies in the"
              accent="details."
            />
            <Reveal delay={200} direction="up">
              <p
                className="mt-12 max-w-xl text-lg leading-[1.95]"
                style={{ color: "var(--text-secondary-dark)" }}
              >
                {LUXURY_IN_DETAILS}
              </p>
            </Reveal>
            <Reveal delay={340} direction="up">
              <div className="mt-14">
                <Button href="/membership" variant="gold">
                  Discover Membership
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={280} direction="right" className="hidden md:block">
            <VenuePhoto
              src="/venue_2.jpg"
              alt="Elegant lounge gathering with gold mirrors and white seating at Hemings"
              aspect="aspect-[3/4] min-h-[480px]"
            />
          </Reveal>
        </div>
      </ObsidianSplash>

      <Section>
        <Container>
          <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="The Week at Hemings"
              title="Monday through Saturday,"
              accent="plus R&B Fridays."
            />
            <Reveal delay={160} direction="right">
              <Button href="/events" variant="ghost">
                See the week
              </Button>
            </Reveal>
          </div>
          <Reveal delay={240} direction="up">
            <EventsScroller />
          </Reveal>
        </Container>
      </Section>

      <Section tone="glass">
        <Container>
          <Reveal
            className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12"
            direction="up"
          >
            <SectionHeading
              eyebrow="Visit"
              title="Reserve your"
              accent="evening."
              size="h2"
            />
            <div className="md:text-right">
              <p
                className="leading-[1.95] md:ml-auto md:max-w-md"
                style={{ color: "var(--text-secondary-dark)" }}
              >
                1623 2nd Ave N, Suite 106
                <br />
                Birmingham, AL 35203
                <br />
                <a
                  className="nav-link inline-block min-h-[44px] py-2 transition-colors duration-300"
                  style={{ color: "var(--text-gold-dark)" }}
                  href="tel:+12052159905"
                >
                  205&middot;215&middot;9905
                </a>
              </p>
              <div className="mt-10 md:flex md:justify-end">
                <Button href="/rsvp" variant="gold" className="w-full md:w-auto">
                  Reserve Your Evening
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
