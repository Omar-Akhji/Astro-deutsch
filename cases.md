# Naming Conventions: Apply Across This Project

You are working on a production web project built with **Astro.js**, **React (React Islands)**, and
**Hono.js** (TypeScript). Apply the naming conventions below strictly and consistently to all new
code. When you touch existing code, follow these rules for anything you add or rename, and **flag**
(don't silently change) any existing violations.

---

## 1. The Four Conventions

| Convention     | Format                                     | Example                     |
| -------------- | ------------------------------------------ | --------------------------- |
| **PascalCase** | Every word capitalized, no separators      | `TourCard`, `BookingForm`   |
| **camelCase**  | First word lowercase, the rest capitalized | `tourPrice`, `getUserById`  |
| **snake_case** | All lowercase, words joined by `_`         | `tour_price`, `created_at`  |
| **kebab-case** | All lowercase, words joined by `-`         | `tour-card`, `booking-form` |

Also used: **SCREAMING_SNAKE_CASE** (all caps with `_`) for constants, e.g. `MAX_GROUP_SIZE`.

---

## 2. Where Each One Is Used

### PascalCase

- React components and their **component file names**: `TourCard.tsx`, `SearchBar.tsx`
- Astro components and their file names: `Header.astro`, `Footer.astro`
- TypeScript **types, interfaces, enums, and classes**: `type Tour`, `interface BookingPayload`,
  `enum TourStatus`
- Zod schemas should be camelCase with a `Schema` suffix (see below), but the inferred type is
  PascalCase: `type Tour = z.infer<typeof tourSchema>`

### camelCase

- **Variables and functions**: `const tourList`, `function fetchTours()`
- **Object properties** in JS/TS code and **JSON API responses**: `{ tourId, startDate, priceUsd }`
- **React props, state, hooks usage, and handlers**: `isOpen`, `setIsOpen`, `onSubmit`,
  `handleClick`
- **Custom hooks** must start with `use`: `useTours`, `useBookingForm`
- **Hono route handler variables and middleware**: `authMiddleware`, `tourRoutes`
- **Zod schemas**: `tourSchema`, `createBookingSchema`
- Booleans should read like a question: `isLoading`, `hasError`, `canBook`

### snake_case

- **Database tables and columns**: `tours`, `booking_items`, `created_at`, `user_id`
- Environment-adjacent or external data that is _already_ snake_case (e.g., a third-party API).
  **Map it to camelCase at the boundary**, never let snake_case leak into frontend code.
- Python or shell scripts, if any exist in the repo.

### kebab-case

- **File and folder names that are not components**: `tour-utils.ts`, `format-date.ts`,
  `api-client.ts`, `use-tours.ts` (see note below)
- **URLs and routes** (Astro pages, Hono routes): `/tours/private-tours`, `/api/booking-requests`
- **Astro page files**: `about-us.astro`, `contact.astro`
- **CSS class names** and Tailwind custom classes: `tour-card__title`
- **HTML attributes**, `data-*` attributes: `data-tour-id`
- **Package names** and **git branch names**: `feature/add-booking-form`

### SCREAMING_SNAKE_CASE

- Real constants and environment variables: `MAX_GROUP_SIZE`, `DATABASE_URL`, `PUBLIC_API_URL`

---

## 3. Quick Reference by Project Area

| Thing                         | Convention                        | Example                                       |
| ----------------------------- | --------------------------------- | --------------------------------------------- |
| React component (file + name) | PascalCase                        | `TourCard.tsx` → `export function TourCard()` |
| Astro component (file + name) | PascalCase                        | `HeroSection.astro`                           |
| Astro page file               | kebab-case                        | `src/pages/about-us.astro`                    |
| Utility / helper file         | kebab-case                        | `src/lib/format-price.ts`                     |
| Hook file                     | kebab-case file, camelCase export | `use-tours.ts` → `export function useTours()` |
| Function / variable           | camelCase                         | `calculateTotalPrice`                         |
| Type / interface / enum       | PascalCase                        | `TourSummary`                                 |
| Zod schema                    | camelCase + `Schema`              | `bookingSchema`                               |
| Hono route path               | kebab-case                        | `/api/tour-categories`                        |
| Hono route file               | kebab-case                        | `tour-routes.ts`                              |
| JSON request/response keys    | camelCase                         | `{ "tourId": 1 }`                             |
| DB table / column             | snake_case                        | `tour_categories.created_at`                  |
| Constant                      | SCREAMING_SNAKE_CASE              | `DEFAULT_PAGE_SIZE`                           |
| Env variable                  | SCREAMING_SNAKE_CASE              | `PUBLIC_MAPS_KEY`                             |
| CSS class                     | kebab-case                        | `.tour-card`                                  |
| Git branch                    | kebab-case with prefix            | `fix/booking-date-bug`                        |

---

## 4. Boundary Rule (Important)

Data changes case as it crosses layers. Convert **once, at the boundary**, not scattered through the
code:

```
Database (snake_case)  →  Hono API layer  →  JSON (camelCase)  →  React / Astro (camelCase)
```

Example mapping in the Hono data layer:

```ts
// DB row (snake_case)
type TourRow = { tour_id: number; start_date: string; price_usd: number };

// API/domain model (camelCase)
type Tour = { tourId: number; startDate: string; priceUsd: number };

const toTour = (row: TourRow): Tour => ({
  tourId: row.tour_id,
  startDate: row.start_date,
  priceUsd: row.price_usd,
});
```

Never pass snake_case keys into React components or return them from public API routes.

---

## 5. Rules and Edge Cases

1. **Acronyms count as words.** Use `userId`, `apiUrl`, `HtmlParser`, `parseJson`: not `userID`,
   `APIURL`, `HTMLParser`. Exception: two-letter acronyms may stay uppercase only if the existing
   codebase already does (be consistent).
2. **No mixing in one name.** Never write `tour_Card`, `Tour-card`, or `tourCard_item`.
3. **No abbreviations** unless universal (`id`, `url`, `api`, `db`). Prefer `bookingRequest` over
   `bkgReq`.
4. **No type prefixes or suffixes** like `IUser` or `TTour`. Use `User`, `Tour`.
5. **File name should match its main export.** `TourCard.tsx` exports `TourCard`; `format-price.ts`
   exports `formatPrice`.
6. **One component per file** for React and Astro components.
7. **Event handlers:** `handleX` for the function, `onX` for the prop:
   `<TourCard onSelect={handleSelect} />`.
8. **URL segments are lowercase nouns**, plural for collections: `/api/tours`, `/api/tours/:tourId`.
9. **Route params** in code are camelCase: `:tourId`, not `:tour_id` or `:tour-id`.
10. **Don't rename public contracts** (API paths, DB columns, published URLs) without explicit
    instruction. Renaming breaks consumers.

---

## 6. Your Task

1. Read the project structure and identify any existing naming conventions already in use.
2. Apply the rules above to all new files, components, functions, routes, types, and database fields
   you create.
3. For existing code that violates the rules, **list the violations** in a short report (file,
   current name, proposed name) and wait for approval before renaming.
4. If a rule conflicts with a framework requirement (for example, Astro requires certain file names
   like `index.astro` or `[slug].astro`), follow the framework and note the exception.
5. If something is ambiguous or not covered here, choose the option that matches the nearest
   existing code and mention your choice.

Do not change behavior while renaming. Keep renames in separate, reviewable steps.
