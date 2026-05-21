"use client";

import { useState } from "react";
import GlassCard from "./GlassCard";
import MetallicDivider from "./MetallicDivider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Cocktail = { name: string; description: string };
type Wine = { name: string; type: string };
type Beer = { name: string; origin: string };

const TABS = [
  { id: "cocktails", label: "Cocktails" },
  { id: "wines", label: "Wines" },
  { id: "beers", label: "Beers" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function MenuTabs({
  cocktails,
  wines,
  beers,
}: {
  cocktails: Cocktail[];
  wines: Wine[];
  beers: Beer[];
}) {
  const [active, setActive] = useState<TabId>("cocktails");

  return (
    <div>
      <div
        className="menu-tabs mb-12 flex flex-wrap gap-2 sm:gap-3"
        role="tablist"
        aria-label="Menu categories"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={`menu-tab smallcaps ${active === tab.id ? "menu-tab-active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {active === "cocktails" ? (
        <div role="tabpanel" id="panel-cocktails">
          <SectionHeading
            eyebrow="Signature"
            title="Crafted"
            accent="Cocktails"
            size="h2"
          />
          <MetallicDivider width={120} className="mb-14 mt-8" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cocktails.map((c, i) => (
              <Reveal key={c.name} delay={i * 80} direction="scale">
                <GlassCard
                  corners={i === 0}
                  padding="p-8 md:p-10"
                  className="flex h-full flex-col justify-between transition-transform duration-500 md:hover:-translate-y-1"
                >
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
                  <div
                    className="mt-8 pt-4"
                    style={{ borderTop: "1px solid rgba(198, 167, 94, 0.12)" }}
                  >
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
        </div>
      ) : null}

      {active === "wines" ? (
        <div role="tabpanel" id="panel-wines">
          <SectionHeading eyebrow="From The Cellar" title="Curated" accent="Wines" size="h2" />
          <MetallicDivider width={100} className="mb-10 mt-8" />
          <div className="space-y-6">
            {wines.map((w, i) => (
              <Reveal key={w.name} delay={i * 60} direction="left">
                <div
                  className="flex items-baseline justify-between py-4"
                  style={{ borderBottom: "1px solid rgba(198, 167, 94, 0.15)" }}
                >
                  <span
                    className="text-[17px] font-medium"
                    style={{ color: "var(--text-primary-dark)" }}
                  >
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
      ) : null}

      {active === "beers" ? (
        <div role="tabpanel" id="panel-beers">
          <SectionHeading eyebrow="Cold Pours" title="Craft" accent="Beers" size="h2" />
          <MetallicDivider width={100} className="mb-10 mt-8" />
          <div className="space-y-6">
            {beers.map((b, i) => (
              <Reveal key={b.name} delay={i * 60} direction="right">
                <div
                  className="flex items-baseline justify-between py-4"
                  style={{ borderBottom: "1px solid rgba(198, 167, 94, 0.15)" }}
                >
                  <span
                    className="text-[17px] font-medium"
                    style={{ color: "var(--text-primary-dark)" }}
                  >
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
      ) : null}
    </div>
  );
}
