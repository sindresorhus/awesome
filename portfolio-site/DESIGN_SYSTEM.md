# NEUROPRIMITIVE — Design System

## Aesthetic Direction

**Concept:** A cybernetic research lab designed by an avant-garde artist.
Neoprimitivism meets neural computation. Raw structure meets refined signal.
The site should feel like opening a dossier from a future research institute
that studies the intersection of art and biology.

**Emotional Target (first 5 seconds):** Intrigue → Intellectual tension → Depth

---

## 1. Color Palette

### Core Palette (Dark Mode Default)

| Role            | Name          | Hex       | Usage                                 |
|-----------------|---------------|-----------|---------------------------------------|
| Background      | Void          | `#0A0A0B` | Primary background                    |
| Surface         | Substrate     | `#111113` | Cards, panels, elevated surfaces      |
| Surface Alt     | Membrane      | `#1A1A1E` | Secondary panels, code blocks         |
| Border          | Synapse       | `#2A2A30` | Dividers, subtle borders              |
| Text Primary    | Signal        | `#E8E4DE` | Body text — warm off-white            |
| Text Secondary  | Noise         | `#7A7670` | Captions, metadata, muted text        |
| Accent Primary  | Axon          | `#C4F534` | CTAs, highlights — acid chartreuse    |
| Accent Warm     | Cortex        | `#FF6B35` | Hover states, emphasis — burnt orange |
| Accent Cool     | Dendrite      | `#3D85C6` | Links, data viz — muted cobalt        |
| Error/Alert     | Lesion        | `#E63946` | Error states, warnings                |

### Grain & Texture Overlays
- Background noise: 3% opacity, monochromatic, 0.5px grain
- Biological motifs: Subtle Perlin noise displacement on hero elements
- Texture philosophy: "Organic imperfection on digital precision"

---

## 2. Typography

### Type Pairing

| Role           | Typeface                  | Weight      | Notes                                |
|----------------|---------------------------|-------------|--------------------------------------|
| Display/Hero   | **Space Grotesk**         | 700         | Geometric but humanist, slightly futuristic |
| Headlines      | **Space Grotesk**         | 500–700     | Consistent hierarchy                 |
| Body           | **Inter**                 | 400         | Exceptional readability, variable font |
| Mono/Data      | **JetBrains Mono**        | 400         | Research data, code snippets, labels |
| Accent/Label   | **Inter**                 | 600, uppercase, tracked +0.1em | Tags, categories, metadata |

### Type Scale (fluid, clamp-based)

```css
--text-xs:    clamp(0.694rem, 0.66rem + 0.18vw, 0.8rem);
--text-sm:    clamp(0.833rem, 0.78rem + 0.27vw, 1rem);
--text-base:  clamp(1rem, 0.93rem + 0.36vw, 1.25rem);
--text-lg:    clamp(1.2rem, 1.1rem + 0.5vw, 1.563rem);
--text-xl:    clamp(1.44rem, 1.29rem + 0.73vw, 1.953rem);
--text-2xl:   clamp(1.728rem, 1.51rem + 1.09vw, 2.441rem);
--text-3xl:   clamp(2.074rem, 1.76rem + 1.57vw, 3.052rem);
--text-hero:  clamp(2.8rem, 2rem + 3vw, 6rem);
```

---

## 3. Spacing Philosophy

**Principle:** Asymmetric breathing. Dense clusters separated by generous voids.

- **Micro spacing** (within components): 4px base unit, multiples of 4
- **Macro spacing** (between sections): Generous — 120px to 200px vertical rhythm
- **Asymmetric margins**: Left-heavy or right-heavy alignment per section, never centered generically
- **Grid**: 12-column fluid grid, but intentionally break it — elements bleed, overlap, or misalign by 1–2 columns for tension

```css
--space-unit: 4px;
--space-xs:   calc(var(--space-unit) * 2);   /* 8px */
--space-sm:   calc(var(--space-unit) * 4);   /* 16px */
--space-md:   calc(var(--space-unit) * 8);   /* 32px */
--space-lg:   calc(var(--space-unit) * 16);  /* 64px */
--space-xl:   calc(var(--space-unit) * 24);  /* 96px */
--space-2xl:  calc(var(--space-unit) * 40);  /* 160px */
--space-section: calc(var(--space-unit) * 48); /* 192px */
```

---

## 4. Motion Language

**Philosophy:** Motion is information, not decoration. Every animation communicates state change or spatial relationship.

| Pattern             | Duration   | Easing                           | Usage                          |
|---------------------|------------|----------------------------------|--------------------------------|
| Micro-feedback      | 120–200ms  | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Hover, focus, toggle   |
| Reveal/Enter        | 400–600ms  | `cubic-bezier(0.16, 1, 0.3, 1)` | Section scroll-in, modal open  |
| Exit/Dismiss        | 200–300ms  | `cubic-bezier(0.55, 0, 1, 0.45)`| Close, navigate away           |
| Continuous/Ambient  | 8000–20000ms | `linear`                       | WebGL background, grain shift  |
| Stagger delay       | 60–80ms    | —                                | List items, grid children      |

**Rules:**
- No bounce easing. Ever. This isn't playful — it's precise.
- Prefer transform + opacity over layout-triggering properties.
- WebGL animations run at native framerate; DOM animations target 60fps.
- Reduced motion: All animations collapse to instant (respect `prefers-reduced-motion`).

---

## 5. Interaction Principles

### Scroll Behavior
- **Smooth scroll-linked reveals**: Elements translate Y by 20–40px + fade as they enter viewport
- **Parallax**: Minimal — only on hero section, 0.1–0.3 factor max
- **Sticky elements**: Navigation bar + section labels that pin during scroll
- **No scroll hijacking**: Native scroll feel preserved at all times

### Hover Effects
- **Links**: Underline animates from left → right, color shifts to Axon (#C4F534)
- **Project cards**: Subtle scale(1.01) + border-color transition to Cortex (#FF6B35)
- **Buttons**: Background fills from left edge, text color inverts
- **Images**: Slight desaturation lift (from 80% → 100%) + grain overlay reduces

### Transitions Between States
- **Page transitions**: Clip-path wipe (circular or diagonal) — 500ms
- **Filter/sort**: Items fade out (150ms) → reposition (300ms) → fade in (150ms)
- **Detail expand**: Height auto-animate with content fade stagger

---

## 6. Portfolio Reference Styles (Inspirational Traits)

### A. The Archival Researcher
Sites like those winning Awwwards in the "experimental" category.
**Traits:** Monospaced typography as primary, grid-breaking layouts,
data-visualization as navigation, dark palettes with single accent color.
Feels like accessing classified research.

### B. The Brutalist Auteur
Think: exposed structure, visible grid lines, raw HTML energy but with
impeccable typographic craft.
**Traits:** Oversized type, minimal color, heavy use of whitespace as tension,
hover states that reveal hidden layers of content.

### C. The Biotech Futurist
Portfolios from creative technologists working at the intersection of
science and art.
**Traits:** WebGL organisms or particle systems, smooth scroll,
data-dense but visually clean, monochrome + one fluorescent accent.

### D. The Gallery Minimalist (Subverted)
Clean gallery grid but with intentional asymmetry — some items 2x size,
overlapping text, mixed media thumbnails.
**Traits:** Image-forward, typography as overlay, no traditional navigation,
scroll-driven narrative structure.

**Our approach synthesizes A + C**: The archival researcher's information
density and typographic rigor, combined with the biotech futurist's
living, computational aesthetic.
