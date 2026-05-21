import Container from "./_components/Container";
import Button from "./_components/Button";
import NumeralCard from "./_components/NumeralCard";
import GoldSplash from "./_components/GoldSplash";
import MetallicDivider from "./_components/MetallicDivider";
import Reveal from "./_components/Reveal";
import EventsScroller from "./_components/EventsScroller";
import GoldDust from "./_components/GoldDust";
import Logo from "./_components/Logo";

export default function HomePage() {
  return (
    <>
      {/* ── HERO — full bleed with original venue entrance photograph ── */}
      <section className="relative min-h-[100svh] flex items-center pt-36 pb-32 md:pt-44 md:pb-40 overflow-hidden">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/original_hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        {/* Navy Overlay to blend with the agates theme and keep the text readable */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.75) 70%, rgba(0, 0, 0, 0.95) 100%)",
          }}
        />
        <GoldDust />
        <Container className="relative z-10 flex flex-col items-center text-center">
          <Reveal direction="scale" className="mb-6">
            <Logo size={180} variant="white" />
          </Reveal>
          <Reveal direction="clip">
            <MetallicDivider width={80} className="mx-auto" />
          </Reveal>
          <Reveal delay={80}>
            <p className="smallcaps mt-8 mb-10 tracking-wide-caps" style={{ color: "var(--text-gold-dark)" }}>
              Hemings Group &nbsp;&middot;&nbsp; Birmingham, Alabama
            </p>
          </Reveal>
          <Reveal delay={160} direction="up">
            <h1
              className="display-airy max-w-[1100px]"
              style={{ fontSize: "var(--t-display)", color: "var(--text-primary-dark)" }}
            >
              Your Experience{" "}
              <span className="display-it gold-text-shimmer">is&nbsp;Everything.</span>
            </h1>
          </Reveal>
          <Reveal delay={320} direction="up">
            <p
              className="mt-12 max-w-xl text-lg leading-[1.95] mx-auto"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              A members-preferred lounge poured from the same cloth as the city it
              keeps. Quiet rooms, gold light, the kind of evening that becomes a story.
            </p>
          </Reveal>
          <Reveal delay={480} direction="up">
            <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
              <Button href="/membership" variant="gold">
                Request Access
              </Button>
              <Button href="#manifesto" variant="ghost">
                The Experience
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── MANIFESTO STRIP — glass panel over marble ── */}
      <section id="manifesto" className="glass-panel py-28 md:py-40">
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
                Where elegance and exclusivity equal an unforgettable experience. The
                door is intentional. The detail is everything. The night is yours.
              </p>
            </Reveal>
            <MetallicDivider width={140} className="mt-12" />
          </Reveal>
        </Container>
      </section>

      {/* ── THREE PILLARS — open over marble ── */}
      <section className="py-28 md:py-44 relative">
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
                Staff who remember how you like your second drink. A house that reads
                the room before you do.
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
                Velvet quiet, gold detail, a single signature scent. Every surface
                designed to be remembered, not noticed.
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
                A small circle, kept small on purpose. Priority reservations, guest
                privileges, the unspoken hand on the door.
              </NumeralCard>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── PHILOSOPHY — glass panel ── */}
      <section className="glass-panel py-32 md:py-48">
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
                  We don&rsquo;t build evenings. We curate them — pour by pour, glance
                  by glance, until the moment becomes its own small architecture.
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
            <Reveal delay={300} direction="right" className="hidden md:flex justify-center">
              <Logo size={320} variant="gold" className="transition-transform duration-700 hover:scale-105" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── EVENTS TEASER — open over marble ── */}
      <section className="py-28 md:py-44">
        <Container>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
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
                Seven nights,{" "}
                <span className="display-it gold-text-shimmer">seven moods.</span>
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
      <section className="glass-panel py-28 md:py-40">
        <Container>
          <Reveal className="grid grid-cols-1 items-center gap-12 md:grid-cols-2" direction="up">
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
            <Reveal delay={200} direction="right" className="md:justify-self-end">
              <Button href="/rsvp" variant="gold">
                Reserve Your Evening
              </Button>
            </Reveal>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
