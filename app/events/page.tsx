import Container from "../_components/Container";
import Section from "../_components/Section";
import Eyebrow from "../_components/Eyebrow";
import GlassCard from "../_components/GlassCard";
import GoldSplash from "../_components/GoldSplash";
import NavyAgate from "../_components/NavyAgate";
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

function NightCard({ n }: { n: Night }) {
  return (
    <GlassCard
      corners={Boolean(n.flagship)}
      padding="p-10 md:p-12"
      className="h-full"
    >
      <div className="flex items-center gap-5 mb-6">
        <span className="metallic-divider" style={{ width: 48 }} />
        <p className="smallcaps text-text-gold">{n.day}</p>
      </div>
      <h3
        className="display mb-4 text-text-primary"
        style={{ fontSize: "clamp(28px, 2.6vw, 38px)" }}
      >
        {n.name}
      </h3>
      <p className="text-text-secondary leading-[1.9]">{n.desc}</p>
    </GlassCard>
  );
}

export default function EventsPage() {
  return (
    <>
      {/* HERO — navy marble panel */}
      <section className="px-4 pt-28 pb-12 md:px-8 md:pt-32 md:pb-20">
        <Container className="!px-0">
          <div className="agate-panel relative">
            <NavyAgate intensity={0.95} />
            <div className="relative px-8 py-24 md:px-16 md:py-32 lg:px-24">
              <Reveal>
                <Eyebrow dark className="mb-8">The Week at Hemings</Eyebrow>
              </Reveal>
              <Reveal delay={120}>
                <h1
                  className="display max-w-[1000px] text-[var(--text-primary-dark)]"
                  style={{ fontSize: "var(--t-h1)" }}
                >
                  Seven nights,{" "}
                  <span className="display-it gold-text">seven moods.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-10 max-w-xl text-[var(--text-secondary-dark)] text-lg leading-[1.9]">
                  No two evenings at Hemings sound alike. The week unfolds as a
                  composition — each night curated, none repeated.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* WEEKNIGHTS */}
      <Section>
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>The Weeknights</Eyebrow>
          </Reveal>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {WEEKNIGHTS.map((n, i) => (
              <Reveal key={n.day} delay={i * 100}>
                <NightCard n={n} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <div className="flex items-center justify-center py-8">
        <GoldSplash size={140} className="opacity-80" />
      </div>

      {/* WEEKEND */}
      <Section className="pt-0">
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>The Weekend</Eyebrow>
          </Reveal>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {WEEKEND.map((n, i) => (
              <Reveal key={n.day} delay={i * 100}>
                <NightCard n={n} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
