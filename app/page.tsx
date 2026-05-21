import dynamic from "next/dynamic";
import Container from "./_components/Container";
import Button from "./_components/Button";
import NumeralCard from "./_components/NumeralCard";
import MetallicDivider from "./_components/MetallicDivider";
import Reveal from "./_components/Reveal";

const EventsScroller = dynamic(() => import("./_components/EventsScroller"));
import HeroImage from "./_components/HeroImage";
import Logo from "./_components/Logo";
import VenuePhoto from "./_components/VenuePhoto";
import {
  CRAFTING_EXCLUSIVITY,
  LOUNGE_INTRO,
  LUXURY_IN_DETAILS,
  MANIFESTO,
  TAGLINE,
} from "@/lib/copy";

export default function HomePage() {
  return (
    <>
      {/* ── HERO — full bleed with original venue entrance photograph ── */}
      <section className="relative flex min-h-[100svh] min-h-[100dvh] items-center overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28 md:pt-44 md:pb-40">
        <HeroImage src="/original_hero.jpg" alt="" priority />
        {/* Navy Overlay to blend with the agates theme and keep the text readable */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.75) 70%, rgba(0, 0, 0, 0.95) 100%)",
          }}
        />
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
              className="smallcaps mt-6 mb-8 max-w-[90vw] tracking-wide-caps sm:mt-8 sm:mb-10"
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
          <Reveal delay={320} direction="up">
            <p
              className="mx-auto mt-8 max-w-xl px-2 text-base leading-[1.9] sm:mt-12 sm:text-lg sm:leading-[1.95]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              {LOUNGE_INTRO}
            </p>
          </Reveal>
          <Reveal delay={480} direction="up">
            <div className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-4 sm:mt-14 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-8">
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

      {/* ── MANIFESTO STRIP — glass panel over marble ── */}
      <section id="manifesto" className="glass-panel py-20 sm:py-28 md:py-40">
        <Container>
          <Reveal className="flex flex-col items-center text-center" direction="scale">
            <MetallicDivider width={140} className="mb-12" />
            <p
              className="smallcaps mb-8 tracking-wide-caps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              The Manifesto
            </p>
            <p
              className="signature"
              style={{
                fontSize: "clamp(22px, 2.4vw, 34px)",
                color: "var(--text-primary-dark)",
              }}
            >
              Elegance &amp; Exclusivity
            </p>
            <Reveal delay={200} direction="up">
              <p
                className="mt-10 max-w-2xl text-lg leading-[1.95]"
                style={{ color: "var(--text-secondary-dark)" }}
              >
                {MANIFESTO} Welcome to Hemings — where {TAGLINE.toLowerCase()}.
              </p>
            </Reveal>
            <MetallicDivider width={140} className="mt-12" />
          </Reveal>
        </Container>
      </section>

      {/* ── THE ROOM — venue photography from hemingsgroup.com ── */}
      <section className="py-20 sm:py-28 md:py-44">
        <Container>
          <Reveal className="mb-12 max-w-3xl sm:mb-16" direction="left">
            <p
              className="smallcaps mb-6 tracking-wide-caps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              About Hemings
            </p>
            <h2
              className="display-airy"
              style={{
                fontSize: "var(--t-h1)",
                color: "var(--text-primary-dark)",
              }}
            >
              {CRAFTING_EXCLUSIVITY.split(":")[0]}:{" "}
              <span className="display-it gold-text-shimmer">
                {CRAFTING_EXCLUSIVITY.split(":")[1]?.trim()}
              </span>
            </h2>
            <p
              className="mt-8 max-w-xl text-lg leading-[1.95]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              {MANIFESTO} A members-preferred lounge where refinement, warmth, and
              curated amenities define every visit.
            </p>
          </Reveal>
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
      </section>

      {/* ── THREE PILLARS — open over marble ── */}
      <section className="relative py-20 sm:py-28 md:py-44">
        <Container>
          <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <Reveal direction="left">
              <p
                className="smallcaps mb-6 tracking-wide-caps"
                style={{ color: "var(--text-gold-dark)" }}
              >
                The House
              </p>
              <h2
                className="display-airy"
                style={{
                  fontSize: "var(--t-h1)",
                  color: "var(--text-primary-dark)",
                  maxWidth: "700px",
                }}
              >
                Three things,{" "}
                <span className="display-it gold-text-shimmer">poured slowly.</span>
              </h2>
            </Reveal>
            <Reveal direction="right" delay={200}>
              <MetallicDivider width={120} />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Reveal delay={0} direction="scale">
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
                Our dedicated staff tailors every aspect of your visit to
                perfection — impeccable service from the first pour to the last.
              </NumeralCard>
            </Reveal>
            <Reveal delay={160} direction="scale">
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
            </Reveal>
            <Reveal delay={320} direction="scale">
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
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── PHILOSOPHY — glass panel ── */}
      <section className="glass-panel py-20 sm:py-32 md:py-48">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[1.3fr_1fr]">
            <div>
              <Reveal direction="left">
                <p
                  className="smallcaps mb-10 tracking-wide-caps"
                  style={{ color: "var(--text-gold-dark)" }}
                >
                  The Philosophy
                </p>
              </Reveal>
              <Reveal delay={140} direction="left">
                <h2
                  className="display-airy"
                  style={{
                    fontSize: "var(--t-h1)",
                    color: "var(--text-primary-dark)",
                  }}
                >
                  True luxury lies in the{" "}
                  <span className="display-it gold-text-shimmer">details.</span>
                </h2>
              </Reveal>
              <Reveal delay={280} direction="up">
                <p
                  className="mt-12 max-w-xl text-lg leading-[1.95]"
                  style={{ color: "var(--text-secondary-dark)" }}
                >
                  {LUXURY_IN_DETAILS}
                </p>
              </Reveal>
              <Reveal delay={420} direction="up">
                <div className="mt-14">
                  <Button href="/membership" variant="gold">
                    Discover Membership
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={300} direction="right" className="hidden md:block">
              <VenuePhoto
                src="/venue_2.jpg"
                alt="Elegant lounge gathering with gold mirrors and white seating at Hemings"
                aspect="aspect-[3/4] min-h-[480px]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── EVENTS TEASER — open over marble ── */}
      <section className="py-20 sm:py-28 md:py-44">
        <Container>
          <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <Reveal direction="left">
              <p
                className="smallcaps mb-6 tracking-wide-caps"
                style={{ color: "var(--text-gold-dark)" }}
              >
                The Week at Hemings
              </p>
              <h2
                className="display-airy"
                style={{
                  fontSize: "var(--t-h1)",
                  color: "var(--text-primary-dark)",
                }}
              >
                Monday through Saturday,{" "}
                <span className="display-it gold-text-shimmer">plus R&amp;B Fridays.</span>
              </h2>
            </Reveal>
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
      </section>

      {/* ── VISIT CTA — glass panel ── */}
      <section className="glass-panel py-20 sm:py-28 md:py-40">
        <Container>
          <Reveal className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12" direction="up">
            <div>
              <Reveal direction="left">
                <p
                  className="smallcaps mb-8 tracking-wide-caps"
                  style={{ color: "var(--text-gold-dark)" }}
                >
                  Visit
                </p>
              </Reveal>
              <Reveal delay={140} direction="left">
                <h2
                  className="display-airy"
                  style={{
                    fontSize: "var(--t-h2)",
                    color: "var(--text-primary-dark)",
                  }}
                >
                  Reserve your{" "}
                  <span className="display-it gold-text-shimmer">evening.</span>
                </h2>
              </Reveal>
              <Reveal delay={280} direction="up">
                <p
                  className="mt-8 max-w-md leading-[1.95]"
                  style={{ color: "var(--text-secondary-dark)" }}
                >
                  1623 2nd Ave N, Suite 106
                  <br />
                  Birmingham, AL 35203
                  <br />
                  <a
                    className="transition-colors duration-300 hover:opacity-100"
                    style={{ color: "var(--text-gold-dark)", opacity: 0.85 }}
                    href="tel:+12052159905"
                  >
                    205&middot;215&middot;9905
                  </a>
                </p>
              </Reveal>
            </div>
            <Reveal delay={200} direction="right" className="w-full md:justify-self-end">
              <Button href="/rsvp" variant="gold" className="w-full md:w-auto">
                Reserve Your Evening
              </Button>
            </Reveal>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
