## Goal

Add new pages and small additions to AllyCheck without touching existing section designs, tokens, or styles.

## Changes

### 1. New route `/book` — `src/pages/Book.tsx`
- Reuse existing `Nav` and `Footer` (extract from `Home.tsx` into `src/components/Nav.tsx` and `src/components/Footer.tsx` so `/book`, `/privacy`, `/terms` can share — Home keeps identical visual output).
- Two-column layout (60/40 desktop, stacked mobile) using existing tokens (`--accent`, `--ink-secondary`, `var(--font-display)`, `.section`, `.container-x`, `.eyebrow`, `.h2`).
- Left column: eyebrow "BOOK A CALL", H2 "Let's talk about your EAA exposure.", body copy, three trust lines with `→` accent bullets.
- Right column: Cal.com inline embed for `allycheck/30min`. Implement via a small React effect that injects the Cal embed loader script once, then calls `Cal("init", …)` and `Cal("inline", { elementOrSelector: "#cal-embed", calLink: "allycheck/30min", config: { layout: "month_view" } })`. Container `<div id="cal-embed" style={{ width: "100%", minHeight: 600 }} />`. Cleanup on unmount.
- Helmet title/description for SEO.

### 2. Nav additions (in extracted `Nav.tsx`)
- Add a second CTA "Book a Call →" next to existing primary CTA. Style: transparent bg, `1px solid var(--accent)`, text `var(--accent)`, same padding/size as the existing pill button. Links to `/book` via `<Link>`.
- Keep existing "Book a Call" primary button as-is (it currently routes to `/book-a-call`). Note: site currently uses one CTA labeled "Book a Call" → `/book-a-call`. Per instructions the new ghost button is the second CTA labeled "Book a Call →" → `/book`. The existing primary remains untouched.
- Mobile: there is no hamburger menu in current code (nav links hide under `md`). Will add a "Book a Call" link to the existing desktop nav list shown ≥md and leave the existing primary CTA visible on mobile as today. (No hamburger exists to modify.)

### 3. New route `/privacy` — `src/pages/Privacy.tsx`
- Shared `Nav` + `Footer`. `<main class="section">` with `container-x`, `max-width: 720px`, single column.
- H1 serif "Privacy Policy", muted "Last updated: May 2025" caption, then six H3 sections with provided copy verbatim.

### 4. New route `/terms` — `src/pages/Terms.tsx`
- Same layout shell as `/privacy`. Five H3 sections with provided copy verbatim.

### 5. Footer additions (in extracted `Footer.tsx`)
- Add `hello@allycheck.in` as a `mailto:` link in the brand column under the tagline; same text style with hover underline.
- Add `Privacy Policy` → `/privacy` and `Terms of Service` → `/terms` to the existing link list (these currently exist as `#` placeholders in the bottom bar — repoint them to real routes).
- Add new caption line under copyright: "AllyCheck is a registered accessibility consultancy. Registered in India." Same small muted style.

### 6. New "Who We Are" strip on Home
- Insert between `Process` and `Quote` sections in `Home.tsx`.
- Full-width `section` with `background: var(--surface)`, centered content, existing `.section` padding.
- Eyebrow "WHO WE ARE", H2 serif "Senior auditors. No juniors. No automation.", body text (max-width 600px centered, `--ink-secondary`), final muted caption "Certified under IAAP CPACC framework. Operating across EU, UK, and Indian SaaS markets."

### 7. Routing
- Update `src/App.tsx` to register `/book`, `/privacy`, `/terms`. Keep existing `/book-a-call` so nothing breaks.

## Technical notes

- Cal.com loader: insert `<script src="https://app.cal.com/embed/embed.js">` once via `useEffect` (guard with `window.Cal`), then call the init/inline functions. TypeScript: cast `window as any` to avoid global typing churn. Cleanup empties the container so React StrictMode double-mount in dev doesn't stack widgets.
- No new dependencies. No design token changes. No edits to `styles.css`.
- All internal navigation uses `react-router-dom` `<Link>`.
- Vercel SPA rewrites (`vercel.json` + `public/_redirects`) already handle deep links to the new routes.

## Files

**Create:** `src/components/Nav.tsx`, `src/components/Footer.tsx`, `src/pages/Book.tsx`, `src/pages/Privacy.tsx`, `src/pages/Terms.tsx`.

**Edit:** `src/App.tsx` (3 new routes), `src/pages/Home.tsx` (import shared Nav/Footer, add About strip between Process and Quote — Home's visual output unchanged otherwise).

**Untouched:** `styles.css`, all existing sections (Hero, TrustBar, Risk, Services, Process, Quote), `BookACall.tsx`, `vite.config.ts`, deploy configs.

## Open question

The current nav already has a primary "Book a Call" CTA pointing to `/book-a-call` (the static contact page). Do you want me to:
- **A.** Keep both: existing primary "Book a Call" → `/book-a-call`, plus new ghost "Book a Call →" → `/book` (literal reading of your spec, but two identical labels).
- **B.** Repoint the existing primary CTA to `/book` and drop `/book-a-call` from the nav (cleaner, single CTA).

I'll go with **B** unless you say otherwise.
