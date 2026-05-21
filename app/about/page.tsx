import Image from "next/image";
import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";
import Button from "../_components/Button";
import Logo from "../_components/Logo";
import VenuePhoto from "../_components/VenuePhoto";
import {
  ABOUT_COMMUNITY,
  ABOUT_SANCTUARY,
  LUXURY_IN_DETAILS,
  LOUNGE_INTRO,
  TAGLINE,
} from "@/lib/copy";

export const metadata = {
  title: "About — Hemings Group",
  description:
    "Elevating luxury at Hemings — a premier members-preferred lounge in Birmingham. Sophistication in every drink.",
};

const PILLARS = [
  {
    label: "Service",
    body: "Our dedicated staff ensures every aspect of your visit is tailored to perfection — from impeccable service to a curated selection of amenities.",
  },
  {
    label: "Atmosphere",
    body: "Nestled in the heart of luxury, Hemings offers a VIP experience that seamlessly blends sophistication with a down-to-earth atmosphere.",
  },
  {
    label: "Community",
    body: "Members gain entry to a prestigious circle united by a shared appreciation for the finer things — with access to private events, exclusive offers, and personalized services.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO — bar interior from live site ── */}
      <section className="relative min-h-[80svh] flex items-center pt-36 pb-28 md:pt-44 md:pb-36 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/venue-about.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
          }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.88) 100%)",
          }}
        />
        <Container className="relative z-10">
          <Reveal direction="clip">
            <MetallicDivider width={80} />
          </Reveal>
          <Reveal delay={100}>
            <p
              className="smallcaps mt-8 mb-10 tracking-wide-caps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              01 &middot; The House
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
              Elevating Luxury:{" "}
              <span className="display-it gold-text-shimmer">The Hemings Experience.</span>
            </h1>
          </Reveal>
          <Reveal delay={360} direction="up">
            <p
              className="mt-10 max-w-xl text-lg leading-[1.95]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              {LOUNGE_INTRO}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── PHILOSOPHY — glass panel ── */}
      <section className="glass-panel py-28 md:py-40">
        <Container>
          <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2">
            <Reveal direction="left">
              <GlassCard corners padding="p-12 md:p-16" className="flex flex-col h-full">
                <p
                  className="smallcaps mb-6 tracking-wide-caps"
                  style={{ color: "var(--text-gold-dark)" }}
                >
                  Philosophy
                </p>
                <h2
                  className="display-airy"
                  style={{
                    fontSize: "var(--t-h2)",
                    color: "var(--text-primary-dark)",
                  }}
                >
                  Sophistication in{" "}
                  <span className="display-it gold-text-shimmer">every drink.</span>
                </h2>
                <Reveal delay={200} direction="up">
                  <p
                    className="mt-10 text-lg leading-[1.95]"
                    style={{ color: "var(--text-secondary-dark)" }}
                  >
                    {LUXURY_IN_DETAILS}
                  </p>
                </Reveal>
                <Reveal delay={360} direction="up">
                  <p
                    className="mt-6 leading-[1.95]"
                    style={{ color: "var(--text-secondary-dark)" }}
                  >
                    {ABOUT_SANCTUARY}
                  </p>
                </Reveal>
              </GlassCard>
            </Reveal>

            <Reveal delay={200} direction="right">
              <div
                className="relative h-full overflow-hidden rounded-[20px] border"
                style={{ borderColor: "rgba(198, 167, 94, 0.30)", minHeight: "420px" }}
              >
                <Image
                  src="/venue_1.jpg"
                  alt="Rose velvet booths with gold trim — the cloth and color of Hemings"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.25) 100%)",
                  }}
                />
                <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-12 md:p-16">
                  <p
                    className="smallcaps mb-6 tracking-wide-caps"
                    style={{ color: "var(--text-gold-dark)" }}
                  >
                    Our Cloth
                  </p>
                  <p
                    className="display-airy gold-text-shimmer"
                    style={{ fontSize: "clamp(32px, 3.8vw, 52px)" }}
                  >
                    Navy, beige,
                    <br />
                    gold.
                  </p>
                  <p
                    className="mt-8 leading-[1.95]"
                    style={{ color: "var(--text-secondary-dark)" }}
                  >
                    You&rsquo;re part of an exclusive community united by a shared
                    appreciation for the finer things — with private events, exclusive
                    offers, and personalized services at every turn.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── PILLARS — open over marble ── */}
      <section className="py-28 md:py-44">
        <Container>
          <Reveal className="mb-16 max-w-3xl" direction="left">
            <p
              className="smallcaps mb-6 tracking-wide-caps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              Our Pillars
            </p>
            <h2
              className="display-airy"
              style={{
                fontSize: "var(--t-h1)",
                color: "var(--text-primary-dark)",
              }}
            >
              Three values,{" "}
              <span className="display-it gold-text-shimmer">kept simply.</span>
            </h2>
          </Reveal>
          <div>
            {PILLARS.map((p, i) => (
              <div key={p.label}>
                <Reveal delay={i * 160} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className="grid grid-cols-1 items-start gap-8 py-14 md:grid-cols-[260px_1fr]">
                    <div className="flex items-center gap-5">
                      <MetallicDivider width={48} />
                      <p
                        className="smallcaps tracking-wide-caps"
                        style={{ color: "var(--text-gold-dark)" }}
                      >
                        {p.label}
                      </p>
                    </div>
                    <p
                      className="text-lg leading-[1.95]"
                      style={{ color: "var(--text-secondary-dark)" }}
                    >
                      {p.body}
                    </p>
                  </div>
                </Reveal>
                {i < PILLARS.length - 1 ? (
                  <div
                    className="h-px w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(198,167,94,0.3) 50%, transparent 100%)",
                    }}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── REAL VENUE VISUAL GALLERY SECTION ── */}
      <section className="glass-panel py-28 md:py-40">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <Reveal direction="left">
                <p
                  className="smallcaps mb-6 tracking-wide-caps"
                  style={{ color: "var(--text-gold-dark)" }}
                >
                  Inner Sanctum
                </p>
                <h2
                  className="display-airy mb-8"
                  style={{
                    fontSize: "var(--t-h2)",
                    color: "var(--text-primary-dark)",
                  }}
                >
                  A Gathering of{" "}
                  <span className="display-it gold-text-shimmer">Distinction.</span>
                </h2>
                <p
                  className="text-lg leading-[1.9] mb-10"
                  style={{ color: "var(--text-secondary-dark)" }}
                >
                  Step into our private booths. Framed by plush red velvet and detailed gold boundaries, it provides an exquisite sanctuary for members to connect, celebrate, and unwind.
                </p>
                <div className="flex gap-6">
                  <Button href="/rsvp" variant="gold">
                    Experience it
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal direction="right">
                <VenuePhoto
                  src="/venue_1.jpg"
                  alt="Guests in plush velvet gold-trimmed seating at Hemings Lounge"
                  aspect="aspect-[4/3] md:aspect-[16/10]"
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CLOSING ── */}
      <section className="py-24 md:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <Reveal direction="scale">
            <Logo size={160} variant="gold" />
          </Reveal>
          <Reveal delay={200} direction="up">
            <p
              className="signature text-sm md:text-base"
              style={{ color: "var(--text-gold-dark)" }}
            >
              Join us at Hemings — {TAGLINE}
            </p>
          </Reveal>
          <Reveal delay={360} direction="up">
            <Button href="/membership" variant="gold">
              Become a Member Today
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
