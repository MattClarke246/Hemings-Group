import GlassCard from "./GlassCard";

const NIGHTS = [
  { day: "Mon", name: "The Tasting", desc: "Curated spirits, low light, lower voices." },
  { day: "Tue", name: "Velvet Hours", desc: "Live jazz under poured-gold sconces." },
  { day: "Wed", name: "The Vintage", desc: "Aged pours, vinyl, the older crowd’s pulse." },
  { day: "Thu", name: "Soirée", desc: "A weeknight that quietly outshines the weekend." },
  { day: "Fri", name: "R&B Fridays", desc: "The room as it was meant to sound.", flagship: false },
  { day: "Sat", name: "The Signature", desc: "The house at full intention.", flagship: true },
  { day: "Sun", name: "Last Light", desc: "Slow service, longer goodbyes." },
];

export default function EventsScroller() {
  return (
    <div className="-mx-6 md:-mx-10">
      <div className="flex gap-6 overflow-x-auto px-6 pb-6 md:px-10 [scrollbar-width:thin]">
        {NIGHTS.map((n) => (
          <GlassCard
            key={n.day}
            corners={n.flagship}
            padding="p-7"
            className="min-w-[260px] max-w-[280px] flex-shrink-0"
          >
            <p className="smallcaps text-text-gold">{n.day}</p>
            <p
              className="display mt-3 text-text-primary"
              style={{ fontSize: "26px", lineHeight: 1.1 }}
            >
              {n.name}
            </p>
            <p className="mt-3 text-text-secondary text-[14px] leading-[1.7]">
              {n.desc}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
