---
description:
  Authoritative standards, architectural patterns, and performance guidelines for building modern
  web applications with Astro 7.x.
globs: ["src/**/*.{astro,ts,tsx,js,jsx}", "astro.config.*"]
alwaysApply: false
---

# 🚀 Astro 7.x Modern Best Practices & Engineering Guidelines

## 🧠 Core Architecture & Islands

- **Zero-JS Baseline**: Build all UI pages and layouts using `.astro` components. Render pure static
  HTML/CSS by default.
- **Strict Markup Compliance**: The Rust-powered compiler (`withastro/compiler`) enforces strict
  JSX-style tagging. All tags must be explicitly closed; do not rely on legacy browser auto-closing
  behavior.
- **Micro-Interactions Over Frameworks**: Use native inline `<script>` tags inside `.astro`
  components for simple DOM manipulations (theme toggles, disclosure dialogs, mobile hamburger
  menus) instead of pulling in React, Vue, or Svelte runtimes.
- **Hydration Hierarchy**:
  - `client:idle`: Baseline directive for non-critical interactive components (carousels, tabs,
    feedback widgets).
  - `client:visible`: Below-the-fold or deferred elements (reviews, comment feeds).
  - `client:media="(max-width: 768px)"`: Viewport-specific components (mobile navigation drawers).
  - `client:load`: Strictly reserved for critical, above-the-fold interactive primitives (search
    inputs, primary checkout toggles).
  - Avoid `client:only` unless rendering pure client-only APIs (Canvas, WebGL, WebStorage) to
    prevent Cumulative Layout Shift (CLS).

---

## ⚡ Rendering, Route Caching & Server Islands

- **Simplified Output Model**:
  - `output: 'static'` (Default): Static by default. When an SSR adapter is configured, opt into
    on-demand server rendering per route using:

    ```astro
    ---
    export const prerender = false;
    ---
    ```

  - `output: 'server'`: Every route is server-rendered on demand. Opt out to static build-time
    generation via `export const prerender = true`.
- **Server Islands (`server:defer`)**:
  - Isolate personalized, uncached, or slow dynamic UI on edge-cached static pages without blocking
    the initial HTML stream:

    ```astro
    <UserAvatar server:defer>
      <div
        slot="fallback"
        class="avatar-skeleton"
      />
    </UserAvatar>
    ```

- **Custom Request Pipeline (`src/fetch.ts`)**:
  - In Astro 7, override or intercept the entire low-level HTTP request lifecycle using standard web
    `fetch()` handlers for multi-tenant routing, custom header injection, or edge streaming.

---

## 📦 Content Layer & Live Collections

- **Build-Time Collections (`src/content.config.ts`)**:
  - Configure collections using `defineCollection` and schemas from `astro/zod` (Zod 4):

    ```ts
    import { defineCollection } from "astro:content";
    import { z } from "astro/zod";
    import { glob } from "astro/loaders";

    export const collections = {
      blog: defineCollection({
        loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
        schema: ({ image }) =>
          z.object({ title: z.string(), pubDate: z.coerce.date(), cover: image() }),
      }),
    };
    ```

  - Query entries using `getEntry()` and access identifiers via `entry.id` (not `entry.slug`).
  - Render entries using the standalone `render()` helper:

    ```astro
    ---
    import { getEntry, render } from "astro:content";
    const post = await getEntry("blog", Astro.params.id);
    const { Content, headings } = await render(post);
    ---

    <Content />
    ```

- **Live Collections (`src/live.config.ts`)**:
  - For dynamic data sources (real-time stock prices, inventory levels, live CMS webhooks) without
    triggering full site rebuilds, use `defineLiveCollection` and query with `getLiveEntry()` /
    `getLiveCollection()`.
  - Requires an on-demand SSR adapter (e.g. `@astrojs/node`).
  - Take advantage of Astro 7 cache hints: pass `cacheHint` to `Astro.cache.set(cacheHint)` or
    invalidate granularly using `context.cache.invalidate(entry)`.

---

## 🔒 Security, CSP & Type-Safe Environment (`astro:env`)

- **Native CSP**: Enable automated hash generation for scripts, styles, and dynamic image layouts:

  ```ts
  // astro.config.mjs
  import { defineConfig } from "astro/config";

  export default defineConfig({
    security: {
      csp: true,
      checkOrigin: true, // CSRF protection for on-demand POST/PUT/DELETE
    },
  });
  ```

  > [!WARNING] **CSP Architectural Caveats (from Astro 6/7 Docs)**:
  >
  > - **`<ClientRouter />` Incompatibility**: Astro's `<ClientRouter />` is **not supported out of
  >   the box** with `security.csp: true` due to dynamic runtime script injection. If CSP is
  >   enabled, consider adopting browser-native View Transitions or supplying explicit script
  >   hashes.
  > - **Dev Mode**: Vite dev server does not evaluate CSP hashes; test CSP strictly via
  >   `bun run build` and `bun run preview`.
  > - **Syntax Highlighting**: Shiki injects inline styles incompatible with default CSP hashes. Use
  >   `<Prism />` or supply style hashes if strict CSP is required.

- **Type-Safe Environment Variables**:
  - Enforce schemas in `astro.config.mjs` via `envField`:

    ```ts
    env: {
      schema: {
        DATABASE_SECRET: envField.string({ context: 'server', access: 'secret' }),
        PUBLIC_SITE_URL: envField.string({ context: 'client', access: 'public' }),
      },
      validateSecrets: true, // Eagerly validate server secrets during build/startup
    }
    ```

  - Import safely from virtual modules:

    ```ts
    import { DATABASE_SECRET } from "astro:env/server";
    import { PUBLIC_SITE_URL } from "astro:env/client";
    ```

---

## 🔄 Type-Safe Mutations (Astro Actions)

- Define backend endpoints in `src/actions/index.ts` using `defineAction`:

  ```ts
  import { defineAction } from "astro:actions";
  import { z } from "astro/zod";

  export const server = {
    subscribe: defineAction({
      accept: "form",
      input: z.object({ email: z.string().email() }),
      handler: async ({ email }) => {
        // execute mutation logic
        return { success: true };
      },
    }),
  };
  ```

- Progressive enhancement support: `<form action={actions.subscribe} method="POST">`.
- Gating and Authorization: Authorize inside the action handler or globally via
  `getActionContext(context)` inside `src/middleware.ts`.

---

## 🖼️ Media & Built-in Fonts API

- **Images**: Always use `import { Image, Picture } from 'astro:assets'`. Never install or import
  legacy `@astrojs/image`.
- Co-locate local media in `src/assets/` to ensure Sharp generates modern AVIF/WebP assets and
  automatically infers intrinsic dimensions to avoid layout shift.
- **Fonts**: Utilize Astro's native font optimization pipeline rather than manual `@font-face`
  blocks or unoptimized external CSS link tags.

---

## 🧭 Client-Side Routing (`<ClientRouter />`)

- Use `<ClientRouter />` in base layouts for seamless SPA navigation.
- Apply `transition:name` for shared element transitions between views.
- Apply `transition:persist` to stateful elements (media players, sidebars).
- Bind component lifecycle logic to `astro:page-load` instead of `DOMContentLoaded` or
  `window.onload`.
- Opt-out individual links or forms using `data-astro-reload`.
- _Note_: If `security.csp` is enabled, use standard MPA browser navigation or native browser view
  transitions to avoid script-hash policy violations.

---

## 🏗 Recommended Directory Structure

```text
src/
├── actions/            # Server RPC endpoints (index.ts)
├── assets/             # Optimized local media (images, fonts, vectors)
├── components/         # .astro UI components and interactive islands
├── content.config.ts   # Build-time Content Layer configuration
├── live.config.ts      # Live Content Collections (real-time data)
├── fetch.ts            # Optional low-level fetch request pipeline (v7+)
├── layouts/            # Base page templates and ClientRouter wrappers
├── middleware.ts       # Authentication, redirects, and request locals
├── pages/              # File-based routes & endpoints
└── styles/             # Global tokens and CSS
```
