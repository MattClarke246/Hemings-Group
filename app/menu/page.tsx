import Container from "../_components/Container";
import GlassCard from "../_components/GlassCard";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";
import Button from "../_components/Button";

export const metadata = {
  title: "Menu — Hemings Group",
  description:
    "Curated cocktails, premium wines, and craft beers. Birmingham's exclusive menu.",
};

const COCKTAILS = [
  {
    name: "Golden Whisper",
    description: "Premium vodka, fresh yuzu, wild honey, edible gold shimmer.",
  },
  {
    name: "Velvet Midnight",
    description: "Aged dark rum, blackberry liqueur, aromatic bitters, orange twist.",
  },
  {
    name: "Yuzu Drop",
    description: "Citrus vodka, yuzu extract, triple sec, gold sugar rim.",
  },
  {
    name: "Midnight in Paris",
    description: "Fine Cognac, champagne float, elderflower, gold leaf flake.",
  },
  {
    name: "Southern Sparkler",
    description: "Small-batch bourbon, peach nectar, spicy ginger beer, fresh mint.",
  },
  {
    name: "The Bentley",
    description: "Aged single-malt scotch, sweet vermouth, orange bitters, cherry.",
  },
  {
    name: "Autumn Voyage",
    description: "Apple brandy, cinnamon bark syrup, sparkling local cider.",
  },
];

const WINES = [
  { name: "Cabernet Sauvignon", type: "Red" },
  { name: "Pinot Noir", type: "Red" },
  { name: "Sauvignon Blanc", type: "White" },
  { name: "Pinot Grigio", type: "White" },
  { name: "Rosé", type: "Pink" },
  { name: "Lavender Nights", type: "House Blend" },
];

const BEERS = [
  { name: "Corona Light", origin: "Import" },
  { name: "Stella Artois", origin: "Import" },
  { name: "Michelob Ultra", origin: "Light Lager" },
  { name: "Good People Pale Ale", origin: "Birmingham, AL" },
  { name: "Good People IPA", origin: "Birmingham, AL" },
  { name: "Good People Muchacho", origin: "Birmingham, AL" },
  { name: "Cahaba Brewing Blonde", origin: "Birmingham, AL" },
  { name: "Trimtab Paradise Now", origin: "Birmingham, AL" },
];

export default function MenuPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex min-h-[70svh] min-h-[70dvh] items-center pt-28 pb-20 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32">
        <Container className="relative z-10">
          <Reveal direction="clip">
            <MetallicDivider width={80} />
          </Reveal>
          <Reveal delay={100}>
            <p
              className="smallcaps mt-8 mb-10 tracking-wide-caps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              The Liquid Craft
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
              Curated pours.{" "}
              <span className="display-it gold-text-shimmer">Unmatched taste.</span>
            </h1>
          </Reveal>
          <Reveal delay={360} direction="up">
            <p
              className="mt-10 max-w-xl text-lg leading-[1.95]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              Indulge in exquisite cocktails expertly crafted by our mixologists, or
              savor delectable bites prepared by our talented chefs — sophistication
              in every drink.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── COCKTAILS SECTION ── */}
      <section className="glass-panel py-28 md:py-40">
        <Container>
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <Reveal direction="left">
              <p
                className="smallcaps mb-6 tracking-wide-caps"
                style={{ color: "var(--text-gold-dark)" }}
              >
                Signature
              </p>
              <h2
                className="display-airy"
                style={{
                  fontSize: "var(--t-h2)",
                  color: "var(--text-primary-dark)",
                }}
              >
                Crafted Cocktails
              </h2>
            </Reveal>
            <Reveal direction="right" delay={200}>
              <MetallicDivider width={120} />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {COCKTAILS.map((c, i) => (
              <Reveal key={c.name} delay={i * 100} direction="scale">
                <GlassCard padding="p-8 md:p-10" className="h-full flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
                  <div>
                    <h3
                      className="display-airy mb-4 text-2xl"
                      style={{ color: "var(--text-primary-dark)" }}
                    >
                      {c.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary-dark)" }}
                    >
                      {c.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4" style={{ borderTop: "1px solid rgba(198, 167, 94, 0.12)" }}>
                    <span
                      className="smallcaps"
                      style={{ color: "var(--text-gold-dark)", fontSize: "10px" }}
                    >
                      Signature
                    </span>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WINES & BEERS ── */}
      <section className="py-28 md:py-40">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* WINES COLUMN */}
            <div>
              <Reveal direction="left" className="mb-14">
                <p
                  className="smallcaps mb-4 tracking-wide-caps"
                  style={{ color: "var(--text-gold-dark)" }}
                >
                  From The Cellar
                </p>
                <h2
                  className="display-airy mb-6"
                  style={{
                    fontSize: "var(--t-h3)",
                    color: "var(--text-primary-dark)",
                  }}
                >
                  Curated Wines
                </h2>
                <MetallicDivider width={100} />
              </Reveal>

              <div className="space-y-6">
                {WINES.map((w, i) => (
                  <Reveal key={w.name} delay={i * 80} direction="left">
                    <div
                      className="flex justify-between items-baseline py-4"
                      style={{ borderBottom: "1px solid rgba(198, 167, 94, 0.15)" }}
                    >
                      <span className="font-medium text-[17px]" style={{ color: "var(--text-primary-dark)" }}>
                        {w.name}
                      </span>
                      <span className="smallcaps text-xs" style={{ color: "var(--text-gold-dark)" }}>
                        {w.type}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* BEERS COLUMN */}
            <div>
              <Reveal direction="right" className="mb-14">
                <p
                  className="smallcaps mb-4 tracking-wide-caps"
                  style={{ color: "var(--text-gold-dark)" }}
                >
                  Cold Pours
                </p>
                <h2
                  className="display-airy mb-6"
                  style={{
                    fontSize: "var(--t-h3)",
                    color: "var(--text-primary-dark)",
                  }}
                >
                  Craft Beers
                </h2>
                <MetallicDivider width={100} />
              </Reveal>

              <div className="space-y-6">
                {BEERS.map((b, i) => (
                  <Reveal key={b.name} delay={i * 80} direction="right">
                    <div
                      className="flex justify-between items-baseline py-4"
                      style={{ borderBottom: "1px solid rgba(198, 167, 94, 0.15)" }}
                    >
                      <span className="font-medium text-[17px]" style={{ color: "var(--text-primary-dark)" }}>
                        {b.name}
                      </span>
                      <span className="smallcaps text-xs" style={{ color: "var(--text-gold-dark)" }}>
                        {b.origin}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="glass-panel py-24 md:py-32">
        <Container className="text-center">
          <Reveal direction="scale">
            <h2
              className="display-airy mb-8"
              style={{
                fontSize: "var(--t-h2)",
                color: "var(--text-primary-dark)",
              }}
            >
              Experience it in{" "}
              <span className="display-it gold-text-shimmer">person.</span>
            </h2>
            <p
              className="max-w-md mx-auto mb-10 text-sm leading-[1.8]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              Request a table reservation or apply for membership to enjoy our curated selection.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button href="/rsvp" variant="gold">
                Book RSVP
              </Button>
              <Button href="/membership" variant="obsidian">
                Request Membership
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
