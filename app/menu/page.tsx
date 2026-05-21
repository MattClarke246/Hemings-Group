import Container from "../_components/Container";
import MetallicDivider from "../_components/MetallicDivider";
import Reveal from "../_components/Reveal";
import Button from "../_components/Button";
import Section from "../_components/Section";
import SectionHeading from "../_components/SectionHeading";
import MenuTabs from "../_components/MenuTabs";
import FullBleedImage from "../_components/FullBleedImage";
import ObsidianSplash from "../_components/ObsidianSplash";

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
      <section className="relative flex min-h-[70svh] min-h-[70dvh] items-center pt-28 pb-20 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32">
        <Container className="relative z-10">
          <Reveal direction="clip">
            <MetallicDivider width={80} />
          </Reveal>
          <Reveal delay={120} direction="up">
            <SectionHeading
              className="mt-8"
              eyebrow="The Liquid Craft"
              title="Curated pours."
              accent="Unmatched taste."
            />
            <p
              className="section-lede mt-8 max-w-xl text-lg leading-[1.95]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              Indulge in exquisite cocktails expertly crafted by our mixologists, or
              savor delectable bites prepared by our talented chefs — sophistication
              in every drink.
            </p>
          </Reveal>
        </Container>
      </section>

      <FullBleedImage
        src="/venue-sections.jpg"
        alt="Craft cocktail on marble with gold edge at Hemings"
        height="min-h-[36vh] sm:min-h-[44vh]"
      />

      <Section tone="glass">
        <Container>
          <MenuTabs cocktails={COCKTAILS} wines={WINES} beers={BEERS} />
        </Container>
      </Section>

      <ObsidianSplash>
        <Reveal className="text-center" direction="scale">
          <SectionHeading
            eyebrow="In Person"
            title="Experience it"
            accent="at the bar."
            size="h2"
            align="center"
            divider
          />
          <p
            className="mx-auto mt-8 max-w-md text-sm leading-[1.8]"
            style={{ color: "var(--text-secondary-dark)" }}
          >
            Request a table reservation or apply for membership to enjoy our curated
            selection.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button href="/rsvp" variant="gold" className="w-full sm:w-auto">
              Book RSVP
            </Button>
            <Button href="/membership" variant="ghost" className="w-full sm:w-auto">
              Request Membership
            </Button>
          </div>
        </Reveal>
      </ObsidianSplash>
    </>
  );
}
