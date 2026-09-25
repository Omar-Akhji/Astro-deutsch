# Elite Regewelt

An Astro site for learning German vocabulary, grammar, and exam skills. Pages are statically
generated; Vue is used for interactive learning features.

## Requirements

- Bun 1.x
- Node.js 24.x

## Local development

```sh
bun install
bun run dev
```

`bun run build` runs ESLint, Astro and TypeScript checks, then creates the production site in
`dist/`. Use `bun run preview` to serve that build locally.

## Deploy to Vercel

Import the repository into Vercel and keep the project root at the repository root. The checked-in
`vercel.json` selects Astro, installs from `bun.lock`, runs the verified build command, and serves
`dist/`. All routes are prerendered, so this project does not need a Vercel adapter or server
functions.

`PUBLIC_GA_MEASUREMENT_ID` is optional. Set it in Vercel’s environment variables only if Google
Analytics should be enabled; use the GA4 measurement ID, such as `G-ABC123XYZ`. The value is public
and is embedded in the client build.

## Checks

```sh
bun run lint
bun run check
bun run build
```
