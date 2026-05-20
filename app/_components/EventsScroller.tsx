import GlassCard from "./GlassCard";

const NIGHTS = [
  { day: "Mon", name: "The Tasting", desc: "Curated spirits, low light, lower voices." },
  { day: "Tue", name: "Velvet Hours", desc: "Live jazz under poured-gold sconces." },
  { day: "Wed", name: "The Vintage", desc: "Aged pours, vinyl, the older crowd's pulse." },
  { day: "Thu", name: "Soirée", desc: "A weeknight that quietly outshines the weekend." },
  { day: "Fri", name: "R&B Fridays", desc: "The room as it was meant to sound." },
  { day: "Sat", name: "The Signature", desc: "The house at full intention.", flagship: true },
  { day: "Sun", name: "Last Light", desc: "Slow service, longer goodbyes." },
];

export default function EventsScroller() {
  return (
    <div className="-mx-6 md:-mx-10">
      <div
        className="flex gap-5 overflow-x-auto px-6 pb-6 md:px-10"
        style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(198,167,94,0.3) transparent" }}
      >
        {NIGHTS.map((n) => (
          <GlassCard
            key={n.day}
            corners={n.flagship}
            padding="p-7"
            className="min-w-[250px] max-w-[270px] flex-shrink-0 transition-transform duration-300 hover:-translate-y-1"
          >
            <p
              className="smallcaps"
              style={{ color: "var(--text-gold-dark)" }}
            >
              {n.day}
            </p>
            <p
              className="display mt-3"
              style={{
                fontSize: "26px",
                lineHeight: 1.1,
                color: "var(--text-primary-dark)",
              }}
            >
              {n.name}
            </p>
            <p
              className="mt-3 text-[14px] leading-[1.7]"
              style={{ color: "var(--text-secondary-dark)" }}
            >
              {n.desc}
            </p>
            {n.flagship && (
              <p
                className="mt-4 smallcaps"
                style={{ color: "var(--gold-400)", fontSize: "9px", letterSpacing: "0.4em" }}
              >
                ✦ Flagship
              </p>
            )}
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
