# Mais Agro House

A Next.js real estate website for Mais Agro House, Bhubaneswar. The supplied workspace was empty; this implementation was created here after inspecting the public website at https://manish01-1.onrender.com. No existing repository, API implementation, database configuration, environment files, or deployment files were available to modify.

## Run locally

Use Node.js 22.15 or newer.

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js. For a production build:

```sh
npm run build
npm start
```

## Stack

- Next.js 16.4.6, App Router, TypeScript, React 19
- Tailwind CSS 4 with a shared responsive design system in `src/app/globals.css`
- Framer Motion for restrained entrance and mobile-navigation animation
- Lucide React icons
- Google Fonts Manrope and Playfair Display, bundled under `src/app/fonts` with OFL licenses and loaded using `next/font/local`
- `next/image`, Metadata API, Open Graph metadata, sitemap, and robots

The production command uses Next.js’s bundled Webpack compiler (`next build --webpack`); Turbopack’s build-time port binding was blocked by this environment. Development uses the default Next.js compiler.

The lockfile records the installed dependency versions. Server Components are the default; navigation, filtering, forms, the gallery, and calculator use client components.

## Content and routes

`src/data` contains the four properties, four projects, four existing service categories, and both original journal articles. All requested primary routes and their content-backed detail pages are implemented. Legacy `/products`, `/blog`, `/about-us`, and `/contact-us` URLs redirect to the new routes. Unknown content slugs return 404.

See [MIGRATION.md](MIGRATION.md) for sources, preserved content, integration boundaries, and content-review notes.

## Inquiries and site visits

The forms validate input and prepare a message for the verified business WhatsApp number. Visitors review the prepared message and explicitly send it in WhatsApp. There is no fabricated success response, automatic outbound message, database submission, property reservation, or confirmed appointment.

The typed `Inquiry` interface, `validateInquiry`, and `inquiryMessage` functions in `src/lib/inquiry.ts` form the integration boundary for a future API adapter. The existing server's POST endpoints require session-bound CSRF credentials; they were not copied, bypassed, or called with test messages. No environment variables or secrets are required for the current inquiry workflow.

## Checks

```sh
npm run typecheck
npm test
# With a local server running:
node scripts/verify-site.mjs http://127.0.0.1:3000
```

Unit tests cover the EMI formula including zero interest, property budget/unit conversion, compound filters, inquiry validation, and visit-message preparation. The smoke script checks page responses, metadata, image responses, redirects, unknown slugs, server-rendered filtering, and form rendering.

Verified after the reference-led redesign: production build, TypeScript, six functional tests, and local-server smoke checks for 23 content routes, 14 optimized image responses, five legacy redirects, five unknown-route 404 cases, rendered filtering, and form rendering all passed.

The desktop hero was visually reviewed in Safari. The final action-link styling, mobile visual review, and end-to-end browser interaction checks still need verification; the browser was in active use during the follow-up review. No browser-performance or Core Web Vitals score is claimed.

## Vercel

Import this directory as a Next.js project and use the standard `npm run build` build command. There is no custom deployment configuration. Fonts and images are local, so builds do not depend on the old site's availability or on Google Fonts.

Metadata uses Vercel's automatic `VERCEL_PROJECT_PRODUCTION_URL`. If a different canonical domain is required, configure optional `NEXT_PUBLIC_SITE_URL` in the hosting environment. Outside Vercel, this optional setting should be the public production URL; the development fallback is `http://localhost:3000`.

The implementation is not deployed. Before replacing the current site, review migrated listing details and images, test the WhatsApp handoff on actual mobile devices, and connect the original backend if direct inquiry storage is required.
