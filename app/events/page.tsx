import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import Logo from "../_components/Logo";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";
import Button from "../_components/Button";

export const metadata = {
  title: "Events — Hemings Group",
  description:
    "Seven nights, seven moods. The weekly cadence at Hemings — themed weeknights, R&B Fridays, the Saturday Aftermath, and the slower Sunday close.",
};

type Night = {
  day: string;
  name: string;
  desc: string;
  flagship?: boolean;
};

const WEEKNIGHTS: Night[] = [
  {
    day: "Monday",
    name: "The Tasting",
    desc: "A curated short list of spirits poured neat, with the kind of attention that turns a Monday into something to remember.",
  },
  {
    day: "Tuesday",
    name: "Velvet Hours",
    desc: "Live jazz under poured-gold sconces. A quieter room for a quieter ear.",
  },
  {
    day: "Wednesday",
    name: "The Vintage",
    desc: "Aged pours and vinyl. A room that remembers what it sounded like to be heard the first time around.",
  },
  {
    day: "Thursday",
    name: "Happy Hour Thursday",
    desc: "The weekend starts early. Crafted drinks and premium company, with RSVPs prioritized.",
  },
];

const WEEKEND: Night[] = [
  {
    day: "Friday",
    name: "R&B Fridays",
    desc: "The room as it was meant to sound. A standing reservation for the rhythm of the city.",
    flagship: true,
  },
  {
    day: "Saturday",
    name: "Aftermath",
    desc: "The house at full intention. Our premier Saturday event—sections booked, memories crafted.",
    flagship: true,
  },
  {
    day: "Sunday",
    name: "Last Light",
    desc: "Slow service, longer goodbyes. The evening that closes the week the way the week deserves.",
  },
];

function NightCard({ n, delay = 0, dir }: { n: Night; delay?: number; dir?: "left" | "right" | "up" | "scale" }) {
  return (
    <Reveal delay={delay} direction={dir ?? "scale"} className="h-full">
      <GlassCard
        corners={Boolean(n.flagship)}
        padding="p-10 md:p-12"
        className="h-full flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center gap-5 mb-6">
            <span className="metallic-divider" style={{ width: 56 }} />
            <p
              className="smallcaps tracking-wide-caps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              {n.day}
            </p>
          </div>
          <h3
            className="display-airy mb-5"
            style={{
              fontSize: "clamp(28px, 2.6vw, 38px)",
              color: "var(--text-primary-dark)",
            }}
          >
            {n.name}
          </h3>
          <p className="leading-[1.95]" style={{ color: "var(--text-secondary-dark)" }}>
            {n.desc}
          </p>
        </div>
        <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(198, 167, 94, 0.12)" }}>
          {n.flagship ? (
            <div className="flex items-center justify-between">
              <span
                className="smallcaps tracking-wide-caps"
                style={{
                  color: "var(--gold-400)",
                  fontSize: "10px",
                  letterSpacing: "0.4em",
                }}
              >
                ✦ Flagship
              </span>
              <Button href="/rsvp" variant="ghost" className="!py-1 !px-3 !text-xs">
                RSVP
              </Button>
            </div>
          ) : (
            <Button href="/rsvp" variant="ghost" className="!py-1 !px-3 !text-xs">
              RSVP
            </Button>
          )}
        </div>
      </GlassCard>
    </Reveal>
  );
}

export default function EventsPage() {
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
              The Week at Hemings
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
              Seven nights,{" "}
              <span className="display-it gold-text-shimmer">seven moods.</span>
            </h1>
          </Reveal>
          <Reveal delay={360} direction="up">
            <p
              className="mt-10 max-w-xl text-lg leading-[1.95]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              No two evenings at Hemings sound alike. The week unfolds as a
              composition — each night curated, none repeated.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── WEEKNIGHTS — glass panel ── */}
      <section className="glass-panel py-28 md:py-40">
        <Container>
          <Reveal className="mb-14" direction="left">
            <p
              className="smallcaps tracking-wide-caps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              The Weeknights
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {WEEKNIGHTS.map((n, i) => (
              <NightCard
                key={n.day}
                n={n}
                delay={i * 120}
                dir={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── SPOTLIGHT PANEL FOR R&B FRIDAYS ── */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,167,94,0.08)_0%,transparent_70%)] pointer-events-none" />
        <Container>
          <GlassCard padding="p-12 md:p-20" className="relative overflow-hidden" corners>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Reveal direction="left">
                  <p
                    className="smallcaps mb-6 tracking-wide-caps"
                    style={{ color: "var(--text-gold-dark)" }}
                  >
                    Featured Spotlight
                  </p>
                  <h2
                    className="display-airy mb-8"
                    style={{
                      fontSize: "clamp(40px, 5vw, 64px)",
                      color: "var(--text-primary-dark)",
                      lineHeight: 1.1,
                    }}
                  >
                    R&B <span className="display-it gold-text-shimmer">Fridays</span>
                  </h2>
                  <p
                    className="mb-10 text-lg leading-[1.8]"
                    style={{ color: "var(--text-secondary-dark)" }}
                  >
                    Our signature flagship night. Experience the smoothest R&B rhythms, high-end cocktails, and a room full of unmatched energy. Book a VIP section to secure your spot.
                  </p>
                  <div className="flex gap-6">
                    <Button href="/rsvp" variant="gold">
                      RSVP Now
                    </Button>
                    <Button href="/contact" variant="ghost">
                      Inquire VIP Table
                    </Button>
                  </div>
                </Reveal>
              </div>
              <Reveal direction="right" className="flex justify-center relative">
                <Logo size={240} variant="gold" className="animate-pulse" />
              </Reveal>
            </div>
          </GlassCard>
        </Container>
      </section>

      {/* ── WEEKEND DIVIDER — open over marble ── */}
      <section className="py-12 md:py-24">
        <div className="flex flex-col items-center text-center gap-6">
          <Reveal direction="scale">
            <Logo size={120} variant="gold" />
          </Reveal>
          <Reveal delay={180} direction="up">
            <p
              className="signature text-sm md:text-base"
              style={{ color: "var(--text-gold-dark)" }}
            >
              The Weekend
            </p>
          </Reveal>
          <Reveal delay={280} direction="clip" className="w-full max-w-xs mx-auto">
            <MetallicDivider width={200} />
          </Reveal>
        </div>
      </section>

      {/* ── WEEKEND — glass panel ── */}
      <section className="glass-panel py-28 md:py-40">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {WEEKEND.map((n, i) => (
              <NightCard
                key={n.day}
                n={n}
                delay={i * 140}
                dir={i === 1 ? "up" : i === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
