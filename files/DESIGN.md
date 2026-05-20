# Aurum — Luxury Design System

A bespoke design language for high-end brands where **ivory silk leads, obsidian punctuates, and gold flows like liquid metal**. Every surface carries the weight of poured gold against cream — high contrast, never harsh.

---

## 1. Design Principles

### Ivory leads, obsidian punctuates
The page is cream first. Black is used surgically — for one hero, one CTA, one moment of theatrical contrast. The ratio is roughly 70% ivory, 22% gold, 8% obsidian.

### Gold is liquid, not flat
A single hex value of gold is never enough. Real gold has highlight, midtone, and shadow simultaneously. We use *metallic gradients* on every gold surface — light pooling at the top, depth pooling at the bottom. This is the Image 3 lesson: gold reads as a material, not a paint chip.

### Brushstroke composition
Echo Image 1's gold-leaf streaks: organic, painterly gold accents that sweep diagonally across silk-textured cream backgrounds. Never symmetrical. Never repeating patterns.

### Glass over solid
Cards are translucent ivory glass — backdrop-filter blur, subtle inner highlights, soft shadows. Light passes through, doesn't bounce off.

### Type carries weight
A high-contrast didone display speaks first. Wide-tracked sans-serif smallcaps structure. Italic script signs once per page.

---

## 2. Color System

### Ivory Surfaces (the foundation, 70% of every page)

| Token | Value | Use |
|---|---|---|
| `--ivory-50`  | `#fdfaf3` | Page surface — the brightest cream |
| `--ivory-100` | `#f7f0e1` | Card surface |
| `--ivory-200` | `#ede2cc` | Elevated panels, hover states |
| `--ivory-300` | `#dac8a8` | Hairline borders on ivory |
| `--silk-400`  | `#a89572` | Tertiary text, dimmed gold |

### Obsidian (theatrical punctuation, 8% maximum)

| Token | Value | Use |
|---|---|---|
| `--obsidian-950` | `#050402` | Hero "splash" backgrounds, primary CTA fill |
| `--obsidian-900` | `#0e0a05` | Footer, contrast moments |
| `--obsidian-800` | `#1a140b` | Elevated dark panels |
| `--char-700`     | `#2a2014` | Hairlines on obsidian |

### Gold Spine — saturated, liquid (22% of every page)

This is the system's spine. Saturation is up from before. Five stops let us build true metallic gradients.

| Token | Value | Use |
|---|---|---|
| `--gold-100` | `#f5e3b5` | Brightest highlight, top of metallic gradients |
| `--gold-300` | `#e8c878` | Soft gold |
| `--gold-500` | `#c89a3a` | Primary gold — most marks |
| `--gold-600` | `#a87420` | Midtone in gradients |
| `--gold-800` | `#6b4410` | Shadow tone in gradients |

### Text

| Token | On ivory | On obsidian |
|---|---|---|
| `--text-primary`   | `#1a140b` | `#fdfaf3` |
| `--text-secondary` | `#4a3a22` | `#c9b896` |
| `--text-muted`     | `#7a6440` | `#7a6440` |
| `--text-gold`      | `#8a5e1c` | `#e8c878` |

### The Metallic Gold Gradient (used everywhere gold is a surface)

```css
background: linear-gradient(135deg,
  #f5e3b5 0%,    /* top-left highlight */
  #e8c878 22%,
  #c89a3a 50%,   /* midtone bend */
  #a87420 78%,
  #6b4410 100%   /* shadow */
);
```

For text gradients, the same stops but with `background-clip: text`. This is non-negotiable for any gold heading.

### Use ratios

**70% ivory · 22% gold · 8% obsidian.** Gold should never become wallpaper. Obsidian is rare and deliberate — a hero, a CTA, a footer.

---

## 3. Typography

Three voices. Higher contrast than before.

### Display — `Fraunces` (or `Cormorant Garamond`)
Modern didone with optical sizing. Heavier weights now welcome — at large sizes, weight 500–700 reads as poured ink rather than wisp. Reserve 300 for the script-style italic moments.
- Weight: 500–700 for hero, 300–400 italic for accent
- Tracking: `-0.025em` to `-0.04em` at display sizes
- Optical: enable `font-optical-sizing: auto`

### Body — `Manrope` or `Plus Jakarta Sans`
Same role as before: wide-tracked smallcaps for labels, lightweight regular for paragraphs.
- Labels: `text-transform: uppercase`, `letter-spacing: 0.32em`, weight 500
- Body: weight 300–400, line-height 1.75

### Signature — `Italiana`
For the single brand signature per section. Wide, elegant, never crowded.

### Type scale (fluid)

| Token | Min → Max | Use |
|---|---|---|
| `--type-display` | `clamp(64px, 10vw, 168px)` | Hero |
| `--type-h1` | `clamp(44px, 5.5vw, 84px)` | Section opener |
| `--type-h2` | `clamp(32px, 3.4vw, 52px)` | Subsection |
| `--type-h3` | `clamp(22px, 1.8vw, 30px)` | Card title |
| `--type-body` | `clamp(15px, 1.05vw, 17px)` | Paragraph |
| `--type-label` | `12px` fixed | Smallcaps eyebrow |
| `--type-numeral` | `clamp(60px, 7vw, 120px)` | Hero numerals |

---

## 4. Spacing

8px grid, used at 16/24/48/96px most often. Hero sections use 120–200px vertical rhythm.

```
--s-1: 4px     --s-6: 32px
--s-2: 8px     --s-7: 48px
--s-3: 12px    --s-8: 64px
--s-4: 16px    --s-9: 96px
--s-5: 24px    --s-10: 160px
```

---

## 5. Surfaces & Elevation

### Glass cards (the signature surface)
Ivory cards no longer sit on the page — they *float*. Translucent, with a subtle backdrop blur and an inner top highlight.

```css
background: linear-gradient(180deg,
  rgba(253,250,243,0.85) 0%,
  rgba(247,240,225,0.75) 100%);
backdrop-filter: blur(20px);
border: 1px solid rgba(232,200,120,0.3);
box-shadow:
  inset 0 1px 0 rgba(255,255,255,0.9),
  0 1px 2px rgba(106,68,16,0.04),
  0 24px 60px rgba(106,68,16,0.10);
```

### Shadows
```css
--shadow-soft:  0 1px 2px rgba(106,68,16,0.04), 0 8px 24px rgba(106,68,16,0.08);
--shadow-card:  0 2px 4px rgba(106,68,16,0.06), 0 24px 60px rgba(106,68,16,0.12);
--shadow-hero:  0 40px 120px rgba(5,4,2,0.35), 0 8px 24px rgba(106,68,16,0.15);
--shadow-gold:  0 10px 40px rgba(200,154,58,0.35), 0 20px 80px rgba(200,154,58,0.18);
```

**Radii**: `4px` (chips), `10px` (buttons), `20px` (cards), `28px` (hero panels).

---

## 6. Ornaments

### Gold brushstroke
A painterly diagonal gold sweep, rendered with SVG or a layered CSS gradient mask. Used once per hero section — never twice on the same page. The signature mark of the system.

### Liquid splash
Echoing Image 2: small radial gold splatter, used as a section-end punctuation mark.

### Metallic divider rule
Not a flat line — a thin gradient strip going `gold-100 → gold-500 → gold-100`, only 1px tall and 80–120px wide.

### Glass corner accent
Hero panels have only top-left and bottom-right corner brackets in metallic gold gradient — never a full enclosing frame.

### Hero numeral
Massive `Fraunces` numeral with the metallic gold gradient applied via `background-clip: text`. A short gold rule beneath.

---

## 7. Components

### Button — Obsidian (primary)
- Fill: `--obsidian-900`
- Text: `--gold-300` smallcaps
- Border: 1px `--gold-500`
- Padding: `18px 40px`
- Hover: lifts 2px, gold border brightens to `gold-100`, gold inner glow appears

### Button — Gold (statement)
- Fill: the metallic gold gradient
- Text: `--obsidian-950` smallcaps weight 600
- Hover: gradient shifts (background-position animates), 2px lift

### Button — Ghost
- Text only, `--text-gold` smallcaps
- Hover: gold underline animates left-to-right

### Glass card
- Translucent ivory gradient + backdrop blur
- 1px hairline gold border at 30% opacity
- Optional gold corner brackets
- Radius `20px`

### Step / numeral card
- Massive gradient numeral upper-left
- Smallcaps eyebrow + gold tagline
- Body paragraph
- Optional feature rows with circular gold-border icons

---

## 8. Motion

- **Default ease**: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo)
- **Default duration**: 700ms entrances, 350ms interactions
- **Gold shimmer**: 8s linear infinite background-position cycle on gold gradient buttons (subtle)
- **Reveal**: 24px upward translation + opacity fade
- **Stagger**: 100ms between siblings

Avoid spring physics. Luxury never wobbles.

---

## 9. Imagery Direction

Three modes, mirrored from the inspiration trio:
- **Ivory silk** (Image 1): soft cream draped fabric textures with diagonal gold-leaf brushstrokes. Hero backgrounds.
- **Obsidian splash** (Image 2): pure black background, a single gold liquid moment as the subject. Product features, single-statement panels.
- **Glass + gold ribbon** (Image 3): translucent glass form intertwined with metallic gold. Hero centerpiece illustrations, decorative section breaks.

**Avoid**: lifestyle stock, cool tones, busy backgrounds, flat color photography.

---

## 10. Tone of Voice

Headlines speak in fragments: *Elevate the brand. Define the legacy.*
Body copy is composed. The brand never sells; it invites. Use title case for display, smallcaps for labels, sentence case for body. Never ALL-CAPS in paragraphs.
