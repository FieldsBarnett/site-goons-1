---
name: SiteGoons
description: Cloud Quarry visual system for Atlanta residential general contracting — chiseled Cumulus White cut-blocks over a luminous Atlanta Sky Void, tended by animated illustrated SiteGoons.
colors:
  action-blue: "#1565c0"
  sky-bright: "#4da7e6"
  sky-mid: "#1a6ec4"
  sky-deep: "#0f478d"
  depth-blue: "#0d2e5e"
  footer-navy: "#092145"
  hardhat-yellow: "#f4b829"
  level-ok: "#15803d"
  level-warn: "#b45309"
  cumulus-pure: "#fbfcfd"
  cumulus-white: "#f5f7f9"
  mist-surface: "#e9edf1"
  saw-silver: "#c9d2db"
  input-border: "#9ab0c7"
  ink-primary: "#0f2442"
  ink-body: "#253a54"
  slate-muted: "#3b4f68"
  sky-tint: "#d7e9fa"
typography:
  display:
    fontFamily: "Saira Stencil One, sans-serif"
    fontSize: "clamp(2.35rem, 4.9vw, 4.15rem)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Saira Stencil One, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.02em"
  title:
    fontFamily: "Saira Stencil One, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.02em"
  body:
    fontFamily: "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.12em"
    fontFeature: "tnum"
rounded:
  none: "0px"
  pill-dot: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.action-blue}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.depth-blue}"
  button-secondary:
    backgroundColor: "#ffffff"
    textColor: "{colors.depth-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.depth-blue}"
    textColor: "#ffffff"
  chip-trade:
    backgroundColor: "#ffffff"
    textColor: "{colors.depth-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
  chip-trade-active:
    backgroundColor: "{colors.action-blue}"
    textColor: "#ffffff"
  input-field:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
  cut-block:
    backgroundColor: "{colors.cumulus-white}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.none}"
    padding: "32px 48px"
  cut-block-sm:
    backgroundColor: "{colors.cumulus-white}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.none}"
    padding: "24px"
  nav-bar:
    backgroundColor: "{colors.cumulus-pure}"
    textColor: "{colors.depth-blue}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
---

# Design System: SiteGoons

## Overview

**Creative North Star: "The Sunlit Cloud Quarry"**

SiteGoons transforms a residential general contracting website into a crisp, sunlit architectural quarry where heavy, chiseled Cumulus White stone slabs float over a deep luminous Atlanta sky void. Rather than relying on dark-navy-and-orange contractor templates or generic stock renovation photography, the interface communicates real craft through tileable Cloud Stone surface texture, 3D inset slab bevels, 45-degree chamfered corners on blocks and controls alike, `+` datum registration crosshairs, tabular measurements, and high-contrast stencil typography.

The binding brand signature is a crew of transparent-background illustrated construction "goons" actively building the live interface itself—sawing a volumetric diagonal cut-channel, hoisting and leveling the quote slab from atop its chamfered edge until the readout locks at `0.0°`, and rolling fresh blue paint across the primary button and section seam. Their motion is purposeful, mechanical, and fully pausable under `prefers-reduced-motion`, adding unmistakable warmth without ever obscuring copy or blocking homeowner actions.

**Key Characteristics:**
- Sunlit architectural palette pairing chiseled Cloud Stone cut-blocks (`public/images/cloud-stone-texture.png`) with 3D inset slab bevels against a multi-stop Atlanta Sky Void gradient.
- Unified 45-degree chamfered polygon geometry (`clip-path`) across cut-blocks, primary and secondary buttons, trade chips, and form inputs, accented by `+` datum crosshairs and geometric SVG chevrons.
- Self-hosted industrial type trio: `Saira Stencil One` for display stamps, `Barlow` for plain-spoken body copy, and `JetBrains Mono` for tabular measurements and controls.
- Clip-safe ambient drop shadows (`filter: drop-shadow`) lifting chamfered slabs off the sky void, paired with a full-bleed edge-to-edge stone navigation slab.
- Transparent-background illustrated raster SiteGoons (`public/images/goon-*.png`) in Hardhat Yellow and workwear blue animated with mechanical CSS transforms on UI edges, seams, and buttons.

## Colors

A crisp, daylight-bright architectural palette built around chiseled Cumulus White stone surfaces suspended over deep Atlanta sky blues, punctuated strictly by Hardhat Yellow on the crew and semantic green/amber on level readouts.

### Primary
- **Action Blue** (`#1565c0`): Primary CTA button fills, active trade selector chips, focused input chamfer frames, inline action links, square deliverable markers, and hover states for navigation links.
- **Sky Bright** (`#4da7e6`): Upper radial sky-void glow, keyboard `:focus-visible` outlines (`2.5px`), fresh paint-roller sheen, text selection highlight, saw spark accent, and custom scrollbar thumb.
- **Sky Mid** (`#1a6ec4`): Mid-field sky-void gradient stop, input caret color, and hover frame accent on unselected trade chips.
- **Sky Deep** (`#0f478d`): Base document canvas and lower sky-void gradient foundation.
- **Depth Blue** (`#0d2e5e`): Stencil display ink on light blocks, primary CTA hover fill, secondary button chamfer frame/text, and process step number badges.
- **Footer Navy** (`#092145`): Grounded base bar for the site footer beneath the sky void.

### Secondary
- **Hardhat Yellow** (`#f4b829`): Reserved exclusively for the animated SiteGoons crew (hardhats, vests, tools, and saw sparks) so the characters pop instantly against both Cumulus White stone and Sky Void.
- **Level OK** (`#15803d`): Confirmed `0.0° LEVEL` status pill and quote submission confirmation banner (paired with `#dcfce7` / `#f0fdf4` tints).
- **Level Warn** (`#b45309`): Active `LEVELING…` transient state during block tilt/re-leveling (paired with `#fef3c7` tint and `#d97706` dot).

### Neutral
- **Cumulus Pure** (`#fbfcfd`): Top vertical gradient highlight of the full-bleed navigation slab (`#f6f8fa` base) and stone blocks.
- **Cumulus White** (`#f5f7f9`): Primary architectural cut-block surface (`#f4f7fa` stone base overlaid with `cloud-stone-texture.png`) and mobile navigation drawer background.
- **Mist Surface** (`#e9edf1`): Tinted surface for the header phone pill, sample project badges, and subtle recessed containers (`#edf2f7` in the Atlanta service-area readout).
- **Saw Silver** (`#c9d2db`): Hairline horizontal dividers, card internal seams, process connectors, and recessed panel borders (`#d6dadf` for lighter list separators; `#b8c7d8` for the nav bottom edge).
- **Input Border** (`#9ab0c7`): Outer chamfer frame stroke for form inputs, `+` datum crosshairs, and unselected trade chip frames (`#8aa2bc`).
- **Ink Primary** (`#0f2442`): Primary body text, list items, navigation links, and form input values.
- **Ink Body** (`#253a54`): Secondary paragraph copy inside cut-blocks for comfortable reading contrast.
- **Slate Muted** (`#3b4f68`): Form field labels, schedule windows, neighborhood metadata, and secondary captions.
- **Sky Tint** (`#d7e9fa`): Supporting section descriptions and footer copy rendered directly over the dark sky void.

### Named Rules
**The Sunlit Quarry Contrast Rule.** Content lives on high-contrast Cumulus White cut-blocks (`#f5f7f9` with `#0d2e5e`/`#0f2442` ink); only section headings (`#ffffff`) and short framing lines (`#d7e9fa`) sit directly on the Atlanta Sky Void.

**The Hardhat Signal Rule.** Hardhat Yellow (`#f4b829`) belongs exclusively to the animated SiteGoons crew and their tools—never use it for buttons, alerts, or section fills.

## Typography

**Display Font:** Saira Stencil One (self-hosted `.woff2`, fallback `sans-serif`)
**Body Font:** Barlow (self-hosted `.woff2` weights `400` and `700`, fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
**Label/Mono Font:** JetBrains Mono (self-hosted variable `.woff2` weights `400–700`, fallback `ui-monospace, SFMono-Regular, monospace`)

**Character:** Stenciled jobsite crate markings (`Saira Stencil One`) meet plain-spoken, legible residential copy (`Barlow`) and crisp blueprint measurements (`JetBrains Mono` with tabular numerals).

### Hierarchy
- **Display** (`400`, `clamp(2.35rem, 4.9vw, 4.15rem)`, `line-height: 1.03`, `letter-spacing: 0.02em`): Hero `<h1>` headline (`max-w-[16ch]`) stamped in Depth Blue (`#0d2e5e`).
- **Headline** (`400`, `1.875rem–2.25rem` / `text-3xl sm:text-4xl`, `line-height: 1.1`): Section titles (`RESIDENTIAL SERVICES`, `SAMPLE PROJECT SCOPES`, `HOW THE CREW WORKS`, `READY TO TALK THROUGH YOUR REMODEL?`) and the brand wordmark (`1.5rem–1.75rem`).
- **Title** (`400`, `1.25rem–1.75rem`, `line-height: 1.2`): Card headings (`REQUEST A QUOTE`, service titles, sample project titles) in `Saira Stencil One`; process step headings use bold `Barlow` (`1.125rem`, `700`).
- **Body** (`400`, `0.875rem–1.18rem`, `line-height: 1.625`): Conversational homeowner copy capped at `54ch–60ch` for scannable measure.
- **Label** (`700`, `0.6875rem–0.875rem`, `letter-spacing: 0.06em–0.12em`, uppercase, `font-variant-numeric: tabular-nums`): Navigation links, CTA buttons, trade chips, form field labels, service codes (`01 /`), phone numbers, and sample scope metrics.

### Named Rules
**The Stencil-Once-Per-Block Rule.** Use `Saira Stencil One` only for headings and the `SITEGOONS` wordmark—never for paragraphs, form labels, or buttons, where stencil bridges hurt readability.

**The Tabular Spec Rule.** Every phone number, duration, footprint, step number, and angle readout uses `JetBrains Mono` with `tabular-nums` so technical specifications align like a contractor's takeoff sheet.

## Layout

All sections share a centered `1380px` maximum container with responsive horizontal gutters (`12px` mobile, `20px` at `640px`, `28px` at `1024px`). The multi-stop `.cq-sky-void` gradient spans the full viewport behind every section so the gaps between chamfered cut-blocks read as open sky rather than empty whitespace.

- **Navigation:** Full-bleed edge-to-edge sticky architectural stone slab (`w-full`, `top: 0`, `z-40`) with an inner `1380px` nav bar (`px-4 py-3.5 sm:px-6 lg:px-8`) holding the `SITEGOONS` wordmark, four desktop links (`md` / `768px` and up), an always-visible `205-863-7564` phone pill, and a square menu toggle revealing a stacked drawer below `768px`.
- **First Viewport:** Two-column asymmetric split (`1.16fr / 0.84fr` with `40px` gap at `1024px`, stacked with `32px` gap below) pairing the hero cut-block on the left with the hoisted quote block on the right (offset down with `96px–112px` top padding `pt-24 sm:pt-28 lg:pt-24` so the perched `CraneHoistGoon` has clean sky clearance).
- **Services Grid:** 4-column equal-height grid (`1` col mobile → `2` cols at `640px` → `4` cols at `1024px`, `20px` gap) designed to peek cleanly at the bottom of the first desktop viewport.
- **Sample Work:** Asymmetric 12-column editorial layout (`lg:col-span-7` featured kitchen scope paired with `lg:col-span-5` holding two stacked compact scopes, `24px` gap).
- **Process & Contact:** Full-width chamfered cut-blocks housing a 4-column numbered process row (`1 → 2 → 4`) and a `1.15fr / 0.85fr` direct contact + Greater Atlanta service-area split.
- **Crew Responsive Rules:** All four illustrated SiteGoons remain visible across mobile and desktop with scaled footprints (`SawCutterGoon`: `96px` → `128px` → `144px`; `CraneHoistGoon`: `144px` → `176px`; `ButtonPainterGoon`: `80px` → `96px`; `BackgroundRollerGoon`: `96px`), positioned with dedicated bottom/top clearance (`pb-6 sm:pb-0` on hero actions, `pt-24 sm:pt-28` above the quote slab) so no character overlaps copy or tap targets.

## Elevation & Depth

Because cut-blocks use CSS `clip-path: polygon(...)` for their 45-degree chamfers, outer `box-shadow` is clipped away—while *inset* `box-shadow` stays inside the polygon to sculpt 3D stone slab thickness. Cloud Quarry pairs internal 3D inset bevels with wrapper-level `filter: drop-shadow(...)` tinted to deep quarry blue (`rgba(8, 28, 62, ...)`) so blocks read as thick, sunlit architectural stone hovering over the sky void.

### Shadow Vocabulary
- **Primary Cut-Block Elevation** (`filter: drop-shadow(0 20px 34px rgba(8, 28, 62, 0.36)) drop-shadow(0 5px 10px rgba(8, 28, 62, 0.2))`): Outer ambient elevation on hero, quote, featured sample, process, and contact slabs.
- **Compact Cut-Block Elevation** (`filter: drop-shadow(0 12px 22px rgba(8, 28, 62, 0.26))`): Outer ambient elevation on 4-column service cards and stacked sample scope cards.
- **3D Inset Slab Bevel (Primary)** (`inset 0 2px 0 rgba(255, 255, 255, 0.95), inset 2px 0 0 rgba(255, 255, 255, 0.75), inset 0 -8px 0 rgba(186, 200, 216, 0.55), inset -5px 0 0 rgba(196, 208, 222, 0.45)`): Top/left sunlit highlight and bottom/right chiseled thickness on `.cq-block` (scaled to `2px / -6px / -3px` on `.cq-block-sm`).
- **Full-Bleed Nav Slab Elevation** (`inset 0 -5px 0 rgba(186, 200, 216, 0.6), 0 10px 24px rgba(8, 28, 62, 0.24)`): Bottom stone bevel plus soft downward shadow on `.cq-nav-block`.
- **Crew Figure Grounding** (`drop-shadow(0 8px 12px rgba(8, 28, 62, 0.32))` / `drop-shadow(0 6px 10px rgba(13, 46, 94, 0.24))`): Contact grounding shadow behind each transparent-background raster SiteGoon.

### Named Rules
**The Clip-Safe Shadow Rule.** Pair internal `inset` bevels on the clipped slab with `filter: drop-shadow(...)` on an outer wrapper—never apply outer `box-shadow` directly to a `clip-path` element, and never use hard offset shadows.

## Shapes

The system's silhouette is chiseled architectural stone: 45-degree chamfered corners scale proportionally from macro slabs down to individual inputs and toggle chips, using a nested outer-frame / inner-fill `clip-path` pattern whenever a chamfered control needs a crisp angled border.

- **Primary Cut-Block Chamfer (`18px`):** 8-point `clip-path: polygon(...)` clipping `18px` off all four corners on `.cq-block`.
- **Compact Card Chamfer (`12px`):** 8-point `clip-path: polygon(...)` clipping `12px` off all four corners on `.cq-block-sm`.
- **Full-Bleed Navigation Slab:** Edge-to-edge horizontal band (`w-full`) anchored with a `1.5px solid #b8c7d8` bottom edge and `5px` inset stone bevel.
- **Primary & Secondary Button Chamfer (`9px` outer / `8px` inner):** `.cq-btn-primary` clips `9px` off all four corners; `.cq-btn-secondary-wrap` (`9px`, `1.5px` Depth Blue frame) nests `.cq-btn-secondary` (`8px` inner fill) so the angled bevel carries an unbroken `1.5px` stroke.
- **Trade Chip Chamfer (`7px` outer / `6px` inner):** `.cq-chip-wrap` (`7px`, `1.5px` frame) nests `.cq-chip` (`6px` inner fill).
- **Form Input Chamfer (`6px` outer / `5px` inner):** `.cq-input-wrap` (`6px`, `1.5px` frame) nests `.cq-input` (`5px` inner fill).
- **Square Micro-Elements & Status Dot:** Nav phone pill, mobile toggle, status readouts, sample badges, and step numbers remain sharp `0px`; only the `8px` level indicator dot uses `9999px`.
- **Architectural Registration Marks & Saw Channel:** Major slabs carry a `14px × 14px` `+` `DatumCrosshair` (`#9ab0c7`, `1.25px` stroke) in the top-right corner. The hero slab features a recessed volumetric diagonal saw-cut channel (`#dce5ef` detached corner wedge, `#9bb0c6`/`#5d7b9b` shadow groove, `#ffffff` `3px` bevel edge, dashed `#8ca4bc` guide) where `SawCutterGoon` works.

### Named Rules
**The Nested Quarry Chamfer Rule.** Every chamfered control with a border (secondary buttons, trade chips, form inputs) uses a `1.5px`-padded outer `clip-path` wrapper around a `1px`-smaller inner `clip-path` fill so 45-degree corners never break their stroke. Do not introduce rounded pill buttons or soft `border-radius` cards.

## Components

Tactile, architectural controls with chamfered bevel frames, geometric SVG chevrons (`16×16`, `2px` square-cap miter-join stroke), uppercase monospace labels, and crisp mechanical transitions (`180ms cubic-bezier(0.16, 1, 0.3, 1)`).

### Buttons
- **Shape:** Primary buttons use a `9px` 45-degree chamfer; secondary buttons use the nested `9px`/`8px` `.cq-btn-secondary-wrap` + `.cq-btn-secondary` frame. Action labels pair with geometric SVG `ChevronIcon` arrows rather than ASCII glyphs.
- **Primary:** Action Blue (`#1565c0`) fill, `#ffffff` uppercase `JetBrains Mono` (`700`, `0.06em` tracking), `14px 24px` padding (`px-6 py-3.5`). The quote submit button carries an animated translucent `.cta-paint-sheen` sweep (`3.4s`) coordinated with `ButtonPainterGoon`.
- **Hover / Focus:** Primary shifts to Depth Blue (`#0d2e5e`) with a `-1px` vertical lift (`translateY(0)` on `:active`); `:focus-visible` renders a `2.5px` Sky Bright (`#4da7e6`) outline offset by `2px`.
- **Secondary / Text Action:** Secondary renders `#ffffff` inside a `1.5px` Depth Blue chamfer frame, lifting `-1px` and inverting to `#0d2e5e` fill / `#ffffff` text on hover. Card-level actions use bare uppercase `JetBrains Mono` links in Action Blue (`#1565c0` → `#0d2e5e` on hover) with a `12px` `ChevronIcon`.

### Chips
- **Style:** Trade selector toggles use `.cq-chip-wrap` (`7px` chamfer, `#8aa2bc` frame) nesting `.cq-chip` (`6px` chamfer, `#ffffff` fill, Depth Blue uppercase `JetBrains Mono` `0.78rem`, `700`, `10px 12px` padding).
- **State:** Hover shifts the outer frame to Sky Mid (`#1a6ec4`) and inner fill to `#edf5fc`. Active (`aria-pressed="true"`, `.cq-chip-wrap-active` + `.cq-chip-active`) fills both frame and body in Action Blue (`#1565c0`) with `#ffffff` text (hover `#0d2e5e`).
- **Status & Metadata Pills:** The interactive `0.0° LEVEL` toggle uses `#dcfce7` / `#15803d` when locked and `#fef3c7` / `#b45309` while leveling. Sample project badges use Mist Surface (`#e9edf1`) with `#0d2e5e` text; Atlanta neighborhood tags use `#ffffff` with `1px solid #b8c7d8`.

### Cards / Containers
- **Corner Style:** `18px` chamfer for primary cut-blocks (`.cq-block`), `12px` chamfer for compact service and sample cards (`.cq-block-sm`).
- **Background:** Tileable chiseled Cloud Stone texture (`url("/images/cloud-stone-texture.png")` at `420px` / `360px` tile size) under a soft sunlit Cumulus gradient veil (`rgba(255,255,255,0.72)` → `rgba(235,241,247,0.52)`) over `#f4f7fa`.
- **Shadow Strategy:** 3D inset bevels on the block itself plus `.cq-block-shadow` or `.cq-block-shadow-sm` outer drop-shadow wrapper.
- **Border & Marks:** Internal zones divide with `1px` Saw Silver (`#c9d2db` / `#d6dadf`) rules; major blocks carry a top-right `+` `DatumCrosshair` in `#9ab0c7`.
- **Internal Padding:** `24px–48px` on primary blocks (`px-6 py-8 sm:px-10 lg:px-12`), `24px` (`p-6`) on compact cards.

### Inputs / Fields
- **Style:** Full-width nested chamfer shell (`.cq-input-wrap` `6px` outer frame in `#9ab0c7` + `.cq-input` `5px` inner `#ffffff` fill), `10px 14px` padding, `14px` `Barlow` text in `#0f2442`, and `#5b7088` placeholder. Paired with uppercase `11px` `JetBrains Mono` labels in `#3b4f68`.
- **Focus:** `.cq-input-wrap:focus-within` shifts the chamfered frame cleanly to Action Blue (`#1565c0`).
- **Error:** Inline `role="alert"` banner with `1px solid rgba(185, 28, 28, 0.35)`, `#fef2f2` background, and `#991b1b` bold `12px` text.

### Navigation
- **Style:** Full-bleed sticky architectural stone slab (`.cq-nav-block`, `cloud-stone-texture.png` at `380px`, `5px` bottom inset bevel, `1.5px solid #b8c7d8` rule). Inner `1380px` bar holds `SITEGOONS` in `Saira Stencil One`, four desktop `12px` uppercase `JetBrains Mono` links, the `205-863-7564` phone pill (`#e9edf1` → `#1565c0` hover), and a `40px × 40px` square mobile menu toggle (`md:hidden`) opening a `#f5f7f9` stacked drawer.

### Animated SiteGoons Crew
Four component instances (`src/components/ConstructionGoons.jsx`) built from three transparent-background illustrated raster assets (`public/images/goon-saw-cutter.png`, `public/images/goon-crane-level.png`, `public/images/goon-painter.png`), animated with mechanical CSS transforms and grounded with `drop-shadow`. Every crew container is `aria-hidden="true"`, `select-none`, and `pointer-events-none` with empty `alt=""` so it enriches the UI without interfering with accessibility or clicks.
- **`SawCutterGoon` (`goon-saw-cutter.png`):** Perched at the hero slab's lower-right volumetric saw-cut channel; reciprocating `.goon-saw-motion` (`1.1s`) paired with a minimal geometric SVG spark overlay (`.goon-spark-1` in `#f4b829`, `.goon-spark-2` in `#4da7e6` staggered `0.55s`).
- **`CraneHoistGoon` (`goon-crane-level.png`):** Perched atop the quote slab's right chamfer; gently bobs with `.goon-crane-hook` (`3.4s`) at rest and switches to `.goon-level-adjust` (`0.55s`) whenever the user clicks `0.0° LEVEL` or jumps to the quote form, while the slab tilts `-1.35deg` for `1150ms` before locking back to `0deg`.
- **`ButtonPainterGoon` (`goon-painter.png`):** Stands beside the `Get Estimate` button sweeping `.goon-roller-motion` (`1.8s` idle, accelerates to `0.72s` via `.goon-roller-fast` on button hover) alongside the button's `3.4s` `.cta-paint-sheen` glaze.
- **`BackgroundRollerGoon` (`goon-painter.png`, `loading="lazy"`):** Patrols `140px` horizontally (`7.5s`, `.goon-seam-patrol`) along the divider seam between Services and Sample Work, synchronized with `.seam-paint-bar` (`scaleX(0.32)` → `0.78`).
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` halts all nine crew/paint keyframe animations cleanly and resets `scroll-behavior` to `auto`.

## Do's and Don'ts

### Do:
- **Do** layer `public/images/cloud-stone-texture.png`, the 3D inset slab bevels, and an outer `.cq-block-shadow` / `.cq-block-shadow-sm` wrapper on every chamfered cut-block so stone texture and clip-safe shadows stay unified.
- **Do** use the nested `1.5px` chamfer wrapper pattern (`.cq-btn-secondary-wrap`, `.cq-chip-wrap`, `.cq-input-wrap`) for bordered controls and geometric `ChevronIcon` SVGs for directional cues.
- **Do** self-host `Saira Stencil One`, `Barlow`, and `JetBrains Mono` from `/fonts/` and apply `tabular-nums` on every phone number, schedule, footprint, and angle readout.
- **Do** mark every illustrated raster SiteGoon container `aria-hidden="true"` and `pointer-events-none` with `alt=""`, preserve clean clearance on mobile and desktop, and halt all keyframes under `prefers-reduced-motion: reduce`.
- **Do** keep every sample project card explicitly badged as `SAMPLE SCOPE`, confine all services to residential remodeling in Greater Atlanta, and keep direct phone (`205-863-7564`) and email (`fields@sitegoons.com`) links visible and clickable.

### Don't:
- **Don't** use rounded `border-radius` cards or pill buttons—Cloud Quarry uses proportional 45-degree `clip-path` chamfers (`5px–18px`) across slabs and controls.
- **Don't** use Hardhat Yellow (`#f4b829`) for buttons, backgrounds, or text—keep it exclusive to the SiteGoons crew and their tools.
- **Don't** set body paragraphs or form labels in `Saira Stencil One`, and don't use ASCII `>` characters in place of geometric SVG chevrons.
- **Don't** replace the transparent-background illustrated raster SiteGoons with crude inline figure SVGs or let crew characters overlap form inputs, buttons, or readable copy.
- **Don't** add dark-mode contractor cliches, fabricated client testimonials, license numbers, or stock renovation photography to fill cut-blocks.
