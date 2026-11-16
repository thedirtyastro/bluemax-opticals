# Bluemax Opticals — Website

A premium, conversion-focused website for Bluemax Opticals (Whitefield,
Bengaluru), built with Next.js 15 (App Router), TypeScript, Tailwind CSS
and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. The first `npm run dev` / `npm run build`
needs an internet connection once, to fetch the Google Fonts used
(Plus Jakarta Sans + Inter) via `next/font/google`.

```bash
npm run build && npm run start   # production build
```

## What's in here

- `app/` — pages, layout, metadata, sitemap.ts / robots.ts
- `components/` — one component per section of the page (Hero, TrustStrip,
  FindYourFrame, FrameDiscovery, EyeCare, LensGuide, WhyBluemax,
  StoreExperience, Testimonials, LocationSection, LocalSeoSection,
  EnquirySection, FAQ, ConversionSection, Footer, Nav, StickyMobileBar)
- `components/ui/` — shared primitives (Button, Container, Reveal,
  Icons, and the placeholder line-art visuals)
- `lib/constants.ts` — **all verified business info in one place**
  (phone, address, rating, WhatsApp link, Maps links). Edit this file
  first when details change.
- `lib/faqs.ts` — FAQ content, also used to generate FAQ schema markup
- `lib/schema.ts` — LocalBusiness + FAQPage JSON-LD generators

## Before launch — replace these placeholders

Nothing on the site invents facts about the business, but a few things
are intentionally left as placeholders until you confirm or supply them:

- [ ] **Real photography** — the hero, "Come In, Try Them On" and category
  visuals currently use custom line-art illustrations instead of stock
  photos, on purpose (no fabricated or generic stock imagery). Swap in
  real store/product photos when ready — each is a single `<Image>` or
  SVG component, easy to find and replace.
- [ ] **`og-image.jpg`** — referenced in `lib/schema.ts` for social share
  previews; add a real image at `public/og-image.jpg` (1200×630px).
- [ ] **Google Reviews** — `components/Testimonials.tsx` has three
  clearly-marked placeholder slots. Replace with real, verified reviews
  (name, quote, rating) — never fabricated ones.
- [ ] **Opening hours** — set `hours` in `lib/constants.ts` once confirmed;
  it's `null` (hidden) until then.
- [ ] **Instagram** — add the handle to `lib/constants.ts` once verified;
  currently omitted.
- [ ] **Doctors, certifications, years of experience, prices, offers** —
  none are on the site. Add them only once confirmed, in the relevant
  component.
- [ ] **Domain** — update `siteUrl` in `lib/constants.ts` to the live
  domain before launch (used in metadata, sitemap and schema).
- [ ] **Privacy Policy / Terms** — `app/privacy-policy` and `app/terms`
  are starting templates; have them reviewed before publishing.
- [ ] **Enquiry form backend** — the form currently opens a pre-filled
  WhatsApp message with the enquiry details (no backend required). If
  you'd like submissions to also go to email or a CRM, that's a small
  addition (e.g. an API route or a form service).

## Design notes

- Colors, type and spacing tokens live in `tailwind.config.ts`
  (`ink`, `optical`, `cobalt`, `ivory`, `charcoal`, `mist`).
- Typography: Plus Jakarta Sans for display/headlines, Inter for body
  and UI text.
- The sticky bottom bar (Call / WhatsApp / Directions / Book) only shows
  on mobile (`lg:hidden`), matching the brief's mobile-first requirement.
