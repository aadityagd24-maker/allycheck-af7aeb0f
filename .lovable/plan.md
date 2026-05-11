## Goal

Make the site a 100% static Vite SPA so it deploys anywhere (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.) with no server runtime.

## Heads-up before we start

- The Lovable editor's preview/publish pipeline is tuned for the TanStack Start template. After this conversion, the in-editor preview and the `lovable.app` publish flow may behave differently or break. You'll be deploying via Vercel/your own host instead.
- The current `/book-a-call` page calls Google Calendar through a server function. A static SPA has no server, so the booking flow as it exists today cannot continue to work. Per your choice, we're dropping the backend.

## What changes

### 1. Stack swap
- Remove TanStack Start, TanStack Router, Cloudflare plugin, server-entry, error-page, error-capture, start.ts, server.ts, wrangler.jsonc, `@lovable.dev/vite-tanstack-config`.
- Add `react-router-dom@6`.
- Replace `vite.config.ts` with a plain `@vitejs/plugin-react` + `@tailwindcss/vite` + `vite-tsconfig-paths` config.
- Add standard SPA entry: `index.html` at project root + `src/main.tsx` mounting `<BrowserRouter>`.

### 2. Routing
- New `src/App.tsx` defines routes with `react-router-dom`:
  - `/` → home
  - `/book-a-call` → new static version (see below)
  - `*` → 404
- Rewrite `src/routes/index.tsx` content into `src/pages/Home.tsx` (same JSX, swap `Link` import to `react-router-dom`, change `to="/book-a-call"` style props to RR equivalents).
- Move shared shell (head meta) to `react-helmet-async` or a small custom `<Head>` component, since there's no SSR head pipeline anymore.
- Delete `src/routes/`, `src/router.tsx`, `src/routeTree.gen.ts`.

### 3. Booking page (no backend)
Two options for `/book-a-call`:
- **A. Static "Contact us" page** — keep the design, replace the form with a mailto link / contact info block. No calendar.
- **B. Embedded scheduler** — drop in a Calendly / Cal.com / SavvyCal iframe so visitors still self-book. Requires you to give me the embed URL.

Default: ship option A; switch to B later if you share an embed link.

Delete `src/utils/booking.functions.ts`.

### 4. Vercel deploy config
- Add `vercel.json` with SPA rewrite:
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
  ```
- This same SPA fallback pattern works on Netlify (`_redirects`) and Cloudflare Pages — easy to add later if needed.

### 5. SEO note
Going SPA loses SSR-rendered meta tags. Modern crawlers (Google) execute JS so titles/descriptions still get indexed via `react-helmet-async`, but link previews on some social platforms may be weaker than with SSR. Acceptable for a small marketing site.

## File-level summary

**Delete:** `src/routes/`, `src/router.tsx`, `src/routeTree.gen.ts`, `src/server.ts`, `src/start.ts`, `src/lib/error-capture.ts`, `src/lib/error-page.ts`, `src/utils/booking.functions.ts`, `wrangler.jsonc`.

**Create:** `index.html`, `src/main.tsx`, `src/App.tsx`, `src/pages/Home.tsx`, `src/pages/BookACall.tsx`, `src/pages/NotFound.tsx`, `vercel.json`.

**Rewrite:** `vite.config.ts`, `package.json` (deps + scripts).

## Open question

For `/book-a-call`, do you want **A. static contact page** now, or **B. provide a Calendly/Cal.com embed link** so people can still self-book? I'll proceed with A unless you say otherwise.
