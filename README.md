# Anaum — Dev Portfolio

A blazing-fast, single-page portfolio landing page built with **Next.js 16** (App Router, TypeScript, Tailwind CSS v4). Project case-study copy is fetched from **DummyJSON's `/posts` endpoint** at build time and revalidated hourly (ISR) — real, coherent English sentences (not Lorem Ipsum), paired with real `reactions`/`views` numbers shown on each card. The page ships as static HTML with no client-side loading spinners.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Deploy for free

**Vercel (recommended, zero config for Next.js)**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Click Deploy. Done.

**Netlify**
1. Push to GitHub.
2. New site from Git → pick the repo.
3. Build command: `npm run build`, Publish directory: `.next` (Netlify's Next.js runtime handles the rest automatically).

**GitHub Pages**
Not recommended as-is — this page uses Next.js server rendering (ISR) for the data fetch, which GitHub Pages (static-only hosting) can't run. Use Vercel or Netlify instead, or convert `getProjects` to run at request time with `output: "export"` if you specifically need static export.

## Why Next.js over plain HTML/CSS/JS or a bare React app

- **File-based routing + built-in data fetching**: `src/lib/projects.ts` fetches from DummyJSON directly inside a Server Component (`ProjectGrid.tsx`) — no client bundle, no `useEffect`/loading state, no exposed API calls in the browser.
- **Static generation with ISR**: `npm run build` produces a fully static `/` route (see the build output: `○ (Static)`), with `revalidate: 3600` silently refreshing the data hourly in the background — fast like plain HTML, but never stale for long. A bare HTML/CSS/JS site would need a manual build step or client-side `fetch` (slower first paint, layout shift). A standard React app (CRA/Vite SPA) ships zero HTML until JS runs — worse Lighthouse/SEO than this.
- **Routing/data-fetching vs. other frameworks**: Next.js co-locates data fetching with the component that needs it (`async` Server Components) and renders to HTML at build time by default. Astro does this too but defaults to zero client JS ("islands"), trading some interactivity ergonomics for even less shipped JS. SvelteKit and Nuxt follow a similar server-first model but compile to Svelte/Vue rather than React. I picked Next.js here for React familiarity, the largest hosting/tooling ecosystem, and one-click Vercel deploys.

## Design notes

- **Palette**: pastel blue + pastel purple with near-black ink and white surfaces (see CSS variables in `src/app/globals.css`).
- **Signature element**: the hero's terminal window, with a CSS-only (no JS) typewriter animation — ties the "modern JS framework" brief to something visually native to a dev's world.
- **Card interaction**: project cards lift on hover/focus and reveal a soft blue→purple gradient outline (`.project-card` in `globals.css`), built with `transform` + a masked gradient border for a modern, tactile feel.
