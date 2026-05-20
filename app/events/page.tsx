import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import GoldSplash from "../_components/GoldSplash";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";

export const metadata = {
  title: "Events — Hemings Group",
  description:
    "Seven nights, seven moods. The weekly cadence at Hemings — themed weeknights, R&B Fridays, the Saturday signature, and the slower Sunday close.",
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
    name: "Soirée",
    desc: "A weeknight that quietly outshines the weekend. By invitation, by default.",
  },
];

const WEEKEND: Night[] = [
  {
    day: "Friday",
    name: "R&B Fridays",
    desc: "The room as it was meant to sound. A standing reservation for the rhythm of the city.",
  },
  {
    day: "Saturday",
    name: "The Signature",
    desc: "The house at full intention. The most curated evening of the week — sections booked, sections held.",
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
        className="h-full"
      >
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
        {n.flagship && (
          <div className="mt-8">
            <span
              className="smallcaps tracking-wide-caps"
              style={{
                color: "var(--gold-400)",
                fontSize: "10px",
                letterSpacing: "0.4em",
              }}
            >
              ✦ Flagship Night
            </span>
          </div>
        )}
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

      {/* ── WEEKEND DIVIDER — open over marble ── */}
      <section className="py-28 md:py-36">
        <div className="flex flex-col items-center text-center gap-6">
          <Reveal direction="scale">
            <GoldSplash size={180} className="opacity-90" />
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
