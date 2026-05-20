import Container from "../_components/Container";
import Section from "../_components/Section";
import Eyebrow from "../_components/Eyebrow";
import GlassCard from "../_components/GlassCard";
import Button from "../_components/Button";
import GoldSplash from "../_components/GoldSplash";
import NavyAgate from "../_components/NavyAgate";
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
      {/* HERO — navy marble panel */}
      <section className="px-4 pt-28 pb-12 md:px-8 md:pt-32 md:pb-20">
        <Container className="!px-0">
          <div className="agate-panel relative">
            <NavyAgate intensity={1} />
            <div className="relative px-8 py-24 md:px-16 md:py-32 lg:px-24">
              <Reveal>
                <Eyebrow dark className="mb-8">02 &middot; The Circle</Eyebrow>
              </Reveal>
              <Reveal delay={120}>
                <h1
                  className="display max-w-[1000px] text-[var(--text-primary-dark)]"
                  style={{ fontSize: "var(--t-h1)" }}
                >
                  By invitation.{" "}
                  <span className="display-it gold-text">By intention.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-10 max-w-xl text-[var(--text-secondary-dark)] text-lg leading-[1.9]">
                  Hemings membership is small on purpose. We don&rsquo;t sell access —
                  we extend it, to the people who know what an evening is worth and to
                  those who keep ours quiet.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* PRIVILEGES */}
      <Section>
        <Container>
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow className="mb-6">Privileges</Eyebrow>
            <h2
              className="display text-text-primary"
              style={{ fontSize: "var(--t-h2)" }}
            >
              What the door <span className="display-it gold-text">quietly holds.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {PRIVILEGES.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <GlassCard padding="p-10 md:p-12" className="h-full">
                  <div className="flex items-baseline gap-5 mb-6">
                    <span
                      className="display gold-text"
                      style={{ fontSize: "44px", lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      {p.eyebrow}
                    </span>
                    <span className="metallic-divider" style={{ width: 64 }} />
                  </div>
                  <h3
                    className="display mb-4 text-text-primary"
                    style={{ fontSize: "var(--t-h3)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-text-secondary leading-[1.85]">{p.body}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* MARBLE CTA */}
      <section className="px-4 py-12 md:px-8 md:py-20">
        <Container className="!px-0">
          <div className="agate-panel relative">
            <NavyAgate intensity={1.05} />
            <div className="relative px-8 py-24 md:px-16 md:py-32 lg:px-24">
              <GoldSplash
                size={420}
                className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-85"
              />
              <Reveal className="md:max-w-[640px] md:ml-auto md:text-right">
                <Eyebrow dark className="mb-8">
                  The Inquiry
                </Eyebrow>
                <h2
                  className="display text-[var(--text-primary-dark)]"
                  style={{ fontSize: "var(--t-h2)" }}
                >
                  Tell us about{" "}
                  <span className="display-it gold-text">your evening.</span>
                </h2>
                <p className="mt-8 text-[var(--text-secondary-dark)] text-lg leading-[1.9]">
                  Membership is extended through a brief inquiry. A short note is
                  enough — the rest happens at the door.
                </p>
                <div className="mt-12 md:flex md:justify-end">
                  <Button href="/contact#inquiry" variant="gold">
                    Request Membership
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
