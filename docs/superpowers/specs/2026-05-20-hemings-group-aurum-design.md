# Hemings Group — Aurum Redesign

**Date:** 2026-05-20
**Status:** Approved for implementation planning
**Source design system:** `files/DESIGN.md` (Aurum)
**Source reference:** `files/aurum.html`
**Live site reference:** https://www.hemingsgroup.com

---

## 1. Project summary

Recreate the marketing site for **Hemings Group** — a luxury members-only lounge at 1623 2nd Ave N, Suite 106, Birmingham AL 35203 — using the **Aurum** luxury design system (ivory leads, obsidian punctuates, gold flows like liquid metal).

The output is a polished, deployable five-page marketing site. Booking, members portal, and real form submission are out of scope.

### Brand essentials (carried from the live site)
- **Tagline:** *Your Experience is Everything*
- **Manifesto fragment:** *Where Elegance & Exclusivity Equal an Unforgettable Experience*
- **Address:** 1623 2nd Ave N, Suite 106, Birmingham, AL 35203
- **Phone:** 205-215-9905
- **Email:** hemingsgroupllc@gmail.com
- **Socials:** @hemingsgroup (Twitter, Facebook, Instagram)

---

## 2. Tech stack

- **Framework:** Next.js 16 (App Router), TypeScript
- **Styling:** Tailwind CSS v4 with `@theme inline` aliasing Aurum tokens
- **Tokens:** Aurum color, type, spacing, shadows, gradients, and easings defined as CSS custom properties in `app/globals.css`
- **Fonts:** Google Fonts via `next/font/google`
  - `Fraunces` (display) — weights 300, 400, 500, 600, 700 (incl. italic 300/400)
  - `Manrope` (body) — weights 300, 400, 500, 600
  - `Italiana` (signature) — weight 400
- **Motion:** CSS keyframes + a small `Reveal` client component using `IntersectionObserver`. No animation libraries.
- **Deployment target:** Vercel (App Router defaults, Fluid Compute).

No CMS, no database, no auth, no analytics in this build.

---

## 3. Site map

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/membership` | Membership |
| `/events` | Events |
| `/contact` | Contact |

Header nav: About · Membership · Events · Contact, plus a gold-statement "Request Access" CTA that deep-links to the Contact page inquiry form.

---

## 4. Design system integration

### 4.1 Token export

`app/globals.css` defines every Aurum token as a CSS custom property: ivory (50/100/200/300, silk-400), obsidian (950/900/800, char-700), gold spine (100/300/500/600/800), text variants, spacing scale, type scale, shadows, the three gold gradients, and `--ease`.

### 4.2 Tailwind theme

`@theme inline { ... }` in `globals.css` aliases tokens so Tailwind utility classes resolve to Aurum values:

```
--color-ivory-50 → var(--ivory-50);
--color-gold-500 → var(--gold-500);
--font-display   → "Fraunces", serif;
--font-body      → "Manrope", sans-serif;
--font-signature → "Italiana", serif;
--shadow-card    → var(--shadow-card);
--ease-aurum     → var(--ease);
```

### 4.3 Utility classes

Five non-tokenizable utilities live in `globals.css` as `@utility` blocks:
- `.display`, `.display-it`, `.signature`, `.smallcaps` — type voices per DESIGN.md §3
- `.gold-text` — metallic gradient with `background-clip: text`
- `.glass-card` — translucent ivory gradient + backdrop blur + inner top highlight + soft shadow per DESIGN.md §5

---

## 5. Component inventory

All components live under `app/_components/` (private, App-Router convention).

| Component | Purpose |
|---|---|
| `Header` | Fixed top bar. Transparent over hero, ivory-glass on scroll (>16px). Italiana wordmark, Manrope smallcaps nav, gold CTA. |
| `Footer` | Obsidian-900 surface. Italiana wordmark, address block, social glyphs in gold, smallcaps copyright, metallic divider rule. |
| `Button` | Three variants: `obsidian` (primary), `gold` (statement, animates background-position), `ghost` (gold underline-on-hover). Sizes: `md` (18px 40px) and `sm`. |
| `GlassCard` | Translucent ivory gradient surface. Optional `corners` prop renders top-left + bottom-right gold corner brackets. |
| `NumeralCard` | Glass card with a massive Fraunces gradient numeral, smallcaps eyebrow, h3, body. Used for Home pillars. |
| `Eyebrow` | Smallcaps label with optional leading dot. |
| `MetallicDivider` | 1px tall, 80–120px wide gradient strip (`gold-100 → gold-500 → gold-100`). |
| `GoldBrushstroke` | Inline SVG diagonal painterly gold sweep. Used once per hero. |
| `GoldSplash` | Inline SVG radial gold splatter punctuation. Section-end use. |
| `Reveal` | Client wrapper; observes intersection and applies 24px translate-up + opacity fade with 100ms-per-child stagger. |
| `Section` | Standard vertical rhythm wrapper (`py-[120px] md:py-[160px]`). |
| `Container` | `max-w-[1200px]` centered with horizontal padding. |

---

## 6. Page-by-page detail

### 6.1 Home (`/`)

1. **Hero**
   - Ivory-50 background, diagonal `<GoldBrushstroke />` absolute-positioned behind content
   - Smallcaps eyebrow: *Members · Birmingham · Est.*
   - Fraunces display headline: *Your Experience is Everything.* — final word in `.display-it` italic
   - One-line subhead (Manrope 400, max 540px)
   - Obsidian primary CTA *Request Access* + ghost secondary *The Experience* → anchors to manifesto strip
2. **Manifesto strip** — centered, ivory-100 surface, Italiana signature *Elegance & Exclusivity*, fragment paragraph beneath, metallic divider above.
3. **Three pillars** — 3-up grid of `NumeralCard`s (`01 Service`, `02 Atmosphere`, `03 Membership`). On mobile, stack with the same numeral treatment.
4. **Obsidian splash section** — full-bleed `bg-obsidian-950`, `<GoldSplash />` to the right, Fraunces gold-text headline *True luxury lies in the details.*, one gold-statement CTA *Discover Membership*.
5. **Events teaser** — horizontal-scroll row of seven night-cards (Mon–Sun). Each card: smallcaps day, Fraunces themed name, one-line description. Saturday card gets gold corner brackets to mark the signature night.
6. **Visit teaser** — ivory + brushstroke, two-column: address block (Manrope) on left, gold-statement CTA *Reserve Your Evening* → `/contact` on right.

### 6.2 About (`/about`)

- Hero with numeral treatment (`01 · The House`), Fraunces h1 with italic accent, fragment lede
- Two-column section: `GlassCard` containing philosophy copy on the left, obsidian splash panel with gold ribbon SVG on the right
- "Our Pillars" — three text rows separated by metallic dividers, each with a smallcaps label and a short paragraph
- Section-end gold splash punctuation

### 6.3 Membership (`/membership`)

No invented tiers. Focus: philosophy + privileges + inquiry CTA.

- Hero: *By Invitation. By Intention.* — Fraunces display, hero numeral, fragment lede
- Glass-card grid (2×2) of member privileges:
  - Priority Reservations
  - Guest Privileges
  - Section Booking
  - Members-Only Nights
- Each card: smallcaps eyebrow, Fraunces h3, body paragraph
- Closing obsidian splash CTA strip → *Request Membership* → `/contact#inquiry`

### 6.4 Events (`/events`)

- Hero with smallcaps eyebrow *The Week at Hemings*, Fraunces h1, fragment lede
- Seven night-cards in a responsive 2-col grid (Mon–Sun). Each card: smallcaps day, Fraunces themed name, evocative description, gold corner brackets
- Day-of-week themes (final names invented in Aurum tone; carried from the live site's themed cadence):
  - Mon–Thu: four weeknight themes (e.g., *The Vintage*, *Soiree*, *Velvet Wednesdays*, *The Tasting*)
  - Fri: *R&B Fridays* (real, carried from live site)
  - Sat: *The Signature* (flagship night)
  - Sun: *Last Light* (closing, slower mood)
- Gold splash punctuation between the weeknight block and the weekend block

### 6.5 Contact (`/contact`)

- Hero: *Where to Find Us.* with smallcaps eyebrow
- Two-column glass layout:
  - **Left:** address block in Manrope (real Birmingham address), phone and email rendered as ghost gold-underline buttons that link to `tel:` and `mailto:`, three social glyphs in gold, a small "Hours" card listing days/times
  - **Right (`#inquiry`):** `GlassCard` form with fields:
    - Name (required)
    - Email (required, type=email)
    - Phone (optional)
    - Party Size (number)
    - Preferred Night (select: Mon–Sun)
    - Message (textarea)
    - Submit: obsidian primary button *Submit Inquiry*
  - On submit: prevent default, swap the card contents to a success state — gold corner brackets, Fraunces *Your inquiry has been received.*, smallcaps *We will respond within 48 hours.*

The form is **non-functional**; no network request. Submission updates local React state only.

---

## 7. Motion specification

Per DESIGN.md §8:
- **Ease:** `cubic-bezier(0.22, 1, 0.36, 1)`
- **Durations:** 700ms entrances, 350ms interactions
- **Reveal:** 24px upward translate + opacity fade, triggered when ≥10% of element is in viewport. Stagger: 100ms between direct children.
- **Gold shimmer:** 8s linear infinite background-position cycle on gold-gradient buttons (subtle).
- **Header scroll transition:** 350ms backdrop-filter blur + ivory tint fade, triggered above 16px scroll.
- **Hover lifts:** primary obsidian button lifts 2px, gold border brightens from `gold-500` → `gold-100`, inner glow appears. Gold-statement button shifts gradient position 2px.
- No spring physics. Luxury never wobbles.

`prefers-reduced-motion: reduce` disables Reveal and shimmer, reduces all interaction durations to 0ms.

---

## 8. Accessibility

- Color contrast: all body text uses `--text-primary` on ivory (>14:1) or `--ivory-50` on obsidian (>16:1)
- Gold-text headlines have a non-gradient fallback color (`--gold-800`) for `print` and forced-colors media
- All interactive elements have visible focus rings: 2px `gold-500` outline + 2px offset
- Form fields have explicit `<label>` association
- The header CTA and footer CTA both anchor to `#inquiry` with `aria-label`
- Decorative SVGs (`GoldBrushstroke`, `GoldSplash`) are marked `aria-hidden="true"`

---

## 9. File structure

```
/
├── app/
│   ├── layout.tsx          # Fonts, <Header>, <Footer>, <main> slot
│   ├── globals.css         # Aurum tokens + Tailwind v4 @theme + utilities
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── membership/page.tsx
│   ├── events/page.tsx
│   ├── contact/page.tsx
│   └── _components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Button.tsx
│       ├── GlassCard.tsx
│       ├── NumeralCard.tsx
│       ├── Eyebrow.tsx
│       ├── MetallicDivider.tsx
│       ├── GoldBrushstroke.tsx
│       ├── GoldSplash.tsx
│       ├── Reveal.tsx
│       ├── Section.tsx
│       ├── Container.tsx
│       ├── ContactForm.tsx    # client component, local state
│       └── EventsScroller.tsx # home page events teaser
├── public/
│   └── favicon.ico
├── docs/
│   └── superpowers/specs/2026-05-20-hemings-group-aurum-design.md
├── files/                  # source design.md and aurum.html (existing)
├── package.json
├── tsconfig.json
├── next.config.ts
└── vercel.ts               # optional, Vercel project config
```

---

## 10. Out of scope (explicit)

- Booking page and booking flow
- Members portal and authentication
- Real form submission, email delivery, or CRM integration
- CMS or content authoring tools
- Analytics, monitoring, or A/B testing
- Image assets sourced from photography or stock (visuals are pure CSS/SVG abstractions per Aurum imagery direction)
- Internationalization
- Tests (unit, integration, or e2e). This is a static marketing site; visual review is the verification surface.

---

## 11. Success criteria

The recreated site is considered complete when:
1. All five routes render without runtime errors on `next dev` and `next build`
2. The visual language is recognizably Aurum: ivory leads (~70%), gold flows as gradients (~22%), obsidian (~8%) appears only in surgical moments — primary CTAs, the home obsidian-splash section, the membership CTA strip, and the footer. Fraunces and Italiana display correctly.
3. Contact form submits to its success state with no network request
4. All real Hemings contact info appears in footer and contact page
5. Lighthouse accessibility score ≥95 on every route
6. The site is deployable to Vercel with no configuration beyond the Next.js defaults
