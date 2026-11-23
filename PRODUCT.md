# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

1. **Atlanta-area homeowners** planning residential remodeling projects—kitchens, bathrooms, home additions, and custom renovations—who are comparing local general contractors and want a reliable crew they can reach directly without corporate runaround.
2. **SiteGoons internal crew / admin** (`fields@sitegoons.com`) managing inbound homeowner quote requests, active residential jobsites, and public sample scopes via `/admin`.

## Product Purpose

SiteGoons is a residential general contracting company serving the Atlanta area.
- **Public site (`/`):** Introduces the company, showcases residential remodeling capabilities (kitchens, baths, additions, custom renovations), and converts visiting homeowners into quote requests via an estimate form, phone call, or email.
- **Admin panel (`/admin`):** Internal operations control deck (planned backend: **Convex** for database and authentication; currently running in local preview mode) for tracking quote leads, active builds, sample scopes, and site settings.

## Positioning

A hands-on, approachable Atlanta residential contracting crew built around crisp architectural craft and plain-spoken homeowner communication—no corporate filler, no hidden middlemen.

## Operating Context

Homeowners typically research contractors on phones and laptops at home, comparing past work, scope clarity, and responsiveness before calling (`205-863-7564`), emailing (`fields@sitegoons.com`), or submitting an on-page quote request. Crew admins sign in at `/admin` to triage leads and track builds.

## Capabilities and Constraints

- Existing stack: Vite + React 19 + Tailwind CSS v4, deployed as a static SPA (Cloudflare Pages with `public/_redirects` SPA fallback for `/admin`), with **Convex** planned as the backend for `/admin`.
- Service focus: Residential general contracting only (kitchens, bathrooms, additions, custom renovations) in the Atlanta area.
- Contact channels: On-page quote request form, direct phone (`205-863-7564`), and direct email (`fields@sitegoons.com`).
- Do **not** display contractor license numbers or licensing claims at this time.
- Do **not** fabricate testimonials, real client names, years in business, or commercial claims; any illustrative sample projects or sample admin records must be clearly labeled as sample data until real photography and Convex records are connected.

## Brand Commitments

- Brand name: **SiteGoons**.
- Dual-surface Cloud Quarry system:
  - **Customer-facing & Login (`/` and `/admin` login):** 3D Extruded Cut-Block Quarry (Persuade mode).
  - **Authenticated Admin Panel (`/admin`):** Atmospheric Quarry Control Deck (Operate mode — no decorative characters or floating cards).
- Animated construction "goon" characters: Previous goon illustrations were removed at the user's request; a new, cuter goon character style is pending selection once new concept options are reviewed.

## Evidence on Hand

- Confirmed contact details: Phone `205-863-7564`, Email `fields@sitegoons.com`, Service area: Atlanta, GA metro area.
- Absent (do not fabricate): Real completed project photography, client testimonials, license numbers, and live Convex production records.

## Product Principles

1. **Direct and reachable:** Phone, email, and quote request are effortless to find and use from anywhere on `/`.
2. **Two surfaces, one architectural family:** Customer pages and login use bold 3D sculpted cut-blocks over sky void; internal operations use a calm, dense, hairline-divided Control Deck.
3. **Honest proof:** Label illustrative sample scopes and local-preview admin records transparently until real photos and Convex are connected.
4. **Built for homeowners:** Plain-spoken residential scope (kitchens, baths, additions, renovations) with clear process steps and zero contractor jargon.
