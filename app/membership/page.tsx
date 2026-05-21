import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import Button from "../_components/Button";
import Logo from "../_components/Logo";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";

export const metadata = {
  title: "Membership — Hemings Group",
  description:
    "By invitation, by intention. The privileges of belonging to the Hemings circle.",
};

const PRIVILEGES = [
  {
    eyebrow: "I",
    title: "Priority Reservations",
    body: "First call on every night, every section, every signature event. The door is open before the door is open.",
  },
  {
    eyebrow: "II",
    title: "Guest Privileges",
    body: "Invite your circle into ours. Members extend the same care to their guests that the house extends to them.",
  },
  {
    eyebrow: "III",
    title: "Section Booking",
    body: "Reserve a corner of the room for the evening. Private without being closed off, intimate without being arranged.",
  },
  {
    eyebrow: "IV",
    title: "Members-Only Nights",
    body: "Evenings curated for the circle alone. Smaller rooms, longer pours, the rare guest who never makes the calendar.",
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
              By invitation.{" "}
              <span className="display-it gold-text-shimmer">By intention.</span>
            </h1>
          </Reveal>
          <Reveal delay={360} direction="up">
            <p
              className="mt-10 max-w-xl text-lg leading-[1.95]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              Hemings membership is small on purpose. We don&rsquo;t sell access — we
              extend it, to the people who know what an evening is worth and to those
              who keep ours quiet.
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
                What the door{" "}
                <span className="display-it gold-text-shimmer">quietly holds.</span>
              </h2>
            </Reveal>
            <Reveal direction="right" delay={200}>
              <MetallicDivider width={120} />
            </Reveal>
          </div>

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
                Membership is extended through a brief inquiry. A short note is
                enough — the rest happens at the door.
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
