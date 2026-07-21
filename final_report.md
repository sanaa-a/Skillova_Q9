Final Report 

Scenario 

A client wanted a fast, modern landing page to showcase a grid of portfolio
items.Tired of slow, bloated WordPress sites and asking for a modern


# My method of making the website


1. Started the project with create-next-app (Next.js 16, App Router, TypeScript, Tailwind v4) so data fetching, routing, and styling
all came from one modern toolchain rather than hand-rolled HTML/CSS/JS.
2. Built a data layer first (src/lib/projects.ts) that fetches from a public API and shapes the response into a typed Project[], with a
local fallback so the site never breaks if the API is unreachable.
3. Assembled the page from small components (Nav, Hero, Marquee,ProjectGrid, ProjectCard, Stack/Footer) so each section could be
coded independently for changes


# What was built

A single-page developer portfolio:

1. Nav -hexagonal logo mark, section links with an
animated underline, social media icons.
2. Hero- a centered split headline around an SVG centerpiece: an asymmetric gradient blob split by a circuit
trace, with a slow-spinning dashed ring and pulsing dots.
3. Marquee- a looping ticker strip with a mountain peaks style texture.
4. Project grid — nine case-study cards pairing a real project name
with a live, real-English summary sentence and real likes/views numbers fetched from DummyJSON.
5. Cards use an asymmetric cut-corner shape, a gradient accent bar, and lift
with a color block shadow on hover
6. Stack strip -a tilted row of skills.
7. Footer -contact details


# Architecture and data flow

The fetch happens inside a Server Component, not in the browser.
there's no client-side loading state, and no API call visible
in devtools.
next: { revalidate: 3600 } means the data silently refreshes at most
once an hour in the background (Incremental Static Regeneration), so the
page is served as static HTML on every request but never goes stale for
long without a manual rebuild.
npm run build confirms this: the / route is listed as ○ (Static) in
the build output.
All styling lives in one place — CSS custom properties and utility


