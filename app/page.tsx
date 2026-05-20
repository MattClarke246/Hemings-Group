import Container from "./_components/Container";
import Section from "./_components/Section";
import Button from "./_components/Button";
import Eyebrow from "./_components/Eyebrow";
import NumeralCard from "./_components/NumeralCard";
import GoldSplash from "./_components/GoldSplash";
import MetallicDivider from "./_components/MetallicDivider";
import NavyAgate from "./_components/NavyAgate";
import Reveal from "./_components/Reveal";
import EventsScroller from "./_components/EventsScroller";

export default function HomePage() {
  return (
    <>
      {/* HERO — navy marble panel */}
      <section className="px-4 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24">
        <Container className="!px-0">
          <div className="agate-panel relative">
            <NavyAgate intensity={1} />
            <div className="relative px-8 py-28 md:px-16 md:py-40 lg:px-24 lg:py-48">
              <Reveal>
                <Eyebrow dark className="mb-8">
                  Members&nbsp;&middot;&nbsp;Birmingham&nbsp;&middot;&nbsp;Est.
                </Eyebrow>
              </Reveal>
              <Reveal delay={120}>
                <h1
                  className="display max-w-[1000px] text-[var(--text-primary-dark)]"
                  style={{ fontSize: "var(--t-display)" }}
                >
                  Your Experience is{" "}
                  <span className="display-it gold-text">Everything.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-10 max-w-xl text-[var(--text-secondary-dark)] text-lg leading-[1.85]">
                  A members-preferred lounge poured from the same cloth as the city it
                  keeps. Quiet rooms, gold light, the kind of evening that becomes a story.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-12 flex flex-wrap items-center gap-6">
                  <Button href="/contact#inquiry" variant="gold">
                    Request Access
                  </Button>
                  <Button href="#manifesto" variant="ghost">
                    The Experience
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* MANIFESTO STRIP */}
      <section id="manifesto" className="bg-beige-100/70 py-24 md:py-32">
        <Container>
          <Reveal className="flex flex-col items-center text-center">
            <MetallicDivider width={120} className="mb-10" />
            <p
              className="signature text-text-primary"
              style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}
            >
              Elegance &amp; Exclusivity
            </p>
            <p className="mt-8 max-w-2xl text-text-secondary text-lg leading-[1.9]">
              Where elegance and exclusivity equal an unforgettable experience. The
              door is intentional. The detail is everything. The night is yours.
            </p>
            <MetallicDivider width={120} className="mt-10" />
          </Reveal>
        </Container>
      </section>

      {/* THREE PILLARS */}
      <Section>
        <Container>
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow className="mb-6">The House</Eyebrow>
            <h2
              className="display text-text-primary"
              style={{ fontSize: "var(--t-h1)" }}
            >
              Three things, <span className="display-it gold-text">poured slowly.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Reveal delay={0}>
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
                Staff who remember how you like your second drink. A house that reads the
                room before you do.
              </NumeralCard>
            </Reveal>
            <Reveal delay={120}>
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
            <Reveal delay={240}>
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
      </Section>

      {/* MARBLE SPLASH SECTION */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <Container className="!px-0">
          <div className="agate-panel relative">
            <NavyAgate intensity={1.1} />
            <div className="relative px-8 py-24 md:px-16 md:py-36 lg:px-24">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <Reveal>
                    <Eyebrow dark className="mb-8">
                      The Philosophy
                    </Eyebrow>
                  </Reveal>
                  <Reveal delay={120}>
                    <h2
                      className="display text-[var(--text-primary-dark)]"
                      style={{ fontSize: "var(--t-h1)" }}
                    >
                      True luxury lies in the{" "}
                      <span className="display-it gold-text">details.</span>
                    </h2>
                  </Reveal>
                  <Reveal delay={240}>
                    <p className="mt-10 max-w-xl text-[var(--text-secondary-dark)] text-lg leading-[1.9]">
                      We don&rsquo;t build evenings. We curate them — pour by pour,
                      glance by glance, until the moment becomes its own small
                      architecture.
                    </p>
                  </Reveal>
                  <Reveal delay={360}>
                    <div className="mt-12">
                      <Button href="/membership" variant="gold">
                        Discover Membership
                      </Button>
                    </div>
                  </Reveal>
                </div>
                <Reveal delay={300} className="hidden md:block">
                  <div className="flex justify-center">
                    <GoldSplash size={360} className="opacity-95" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* EVENTS TEASER */}
      <Section>
        <Container>
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow className="mb-6">The Week at Hemings</Eyebrow>
              <h2
                className="display text-text-primary"
                style={{ fontSize: "var(--t-h1)" }}
              >
                Seven nights, <span className="display-it gold-text">seven moods.</span>
              </h2>
            </div>
            <Button href="/events" variant="ghost">
              See the week
            </Button>
          </Reveal>

          <Reveal delay={120}>
            <EventsScroller />
          </Reveal>
        </Container>
      </Section>

      {/* VISIT TEASER */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <Container className="relative">
          <Reveal className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <Eyebrow className="mb-6">Visit</Eyebrow>
              <h2
                className="display text-text-primary"
                style={{ fontSize: "var(--t-h2)" }}
              >
                Reserve your evening.
              </h2>
              <p className="mt-6 max-w-md text-text-secondary leading-[1.85]">
                1623 2nd Ave N, Suite 106
                <br />
                Birmingham, AL 35203
                <br />
                <a className="text-text-gold" href="tel:+12052159905">
                  205&middot;215&middot;9905
                </a>
              </p>
            </div>
            <div className="md:justify-self-end">
              <Button href="/contact#inquiry" variant="gold">
                Reserve Your Evening
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
