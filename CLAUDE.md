# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal site of Prof. Wojciech Czekała (wojciechczekala.pl), a static Astro 7 site in Polish. It replaces an earlier Next.js version (github.com/Pabiak/czekala), which is the source of all copy, photos and meta. Do not invent facts, figures, publications or services. Missing content is marked with `TODO` comments.

The site is bilingual. Polish is at the root and English under `/en/` (`/en/`, `/en/eco-glossary`). The English copy is a translation of the Polish copy.

These must stay stable because they are live and indexed:
- the URLs `/` and `/eko-slownik`,
- the anchors `#o-mnie`, `#ekoslownik`, `#kontakt`,
- `public/blog/index.html` (redirect to blog.wojciechczekala.pl),
- `public/czekala1.jpg` (the OG image URL),
- the contact data.

## Commands

The package manager is **pnpm**, and the project needs Node `>=22.23.4`. There is no test runner or linter.

- `pnpm build`: static build to `./dist/`. Fonts are fetched from Google at build time, so the build needs network access.
- `pnpm preview`: serves `dist/`.
- `pnpm astro dev --background`: dev server. Manage it with `pnpm astro dev stop|status|logs`.
- `pnpm astro check`: needs `@astrojs/check`, which is not installed.

## Architecture

- **Copy:** every translatable string for both languages is in `src/i18n/ui.ts`. `ui.pl` defines the shape, and `ui.en: Content` must match it, so TypeScript flags a missing translation. The same file holds `routes`, the per-language paths and section anchor ids.
- **Data:** `src/data/site.ts` holds language-independent data: contact details, stat values, journal names and book titles.
- **Components:** every component takes a `lang` prop and reads `ui[lang]`. Never hardcode copy in a component.
- **Pages:** `src/pages/*` are one-line routes that render `HomePage` or `GlossaryPage` with a `lang`. To add a language, add it to `Lang`, `langs`, `routes` and `ui`, then add the route files.
- **Layout:** `src/layouts/Layout.astro` owns the whole `<head>`. It takes `lang` and `page`, and from them builds:
  - the canonical URL and `hreflang` alternates (x-default is Polish),
  - `og:locale`,
  - the JSON-LD `Person`,
  - the PL/EN switch in `Nav`, which links to the same page in the other language.

  Pages pass extra JSON-LD through the `schema` prop.
- **Sitemap:** `public/sitemap.xml` is hand-written. Update it when you add pages.
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`, configured in CSS with no `tailwind.config`. Components use utility classes only; there are no scoped `<style>` blocks.
  - **Tokens:** defined in `@theme` in `src/styles/global.css`. They cover colors (`paper`, `ink`, `forest`, `moss`, `night`, `line`…), the type scale (`text-display`, `text-h2`, `text-big`, `text-stat`, `text-term`, `text-lead`, `text-label`), `ease-out` and the extra breakpoints `2xs` (360), `xs` (480) and `ml` (900).
  - **Layout variables:** `--gutter`, `--section-y` and `--nav-h` are plain `:root` variables, used as `py-(--section-y)`.
  - **Shared classes:** `wrap`, `link`, `btn`, `btn-primary` and `btn-ghost` are defined with `@utility`. Base styles and the reveal/enter motion are also in `global.css`.
  - **JS state classes:** `is-open`, `is-hidden`, `is-scrolled` and `is-visible` are styled in markup through `[&.is-x]:` and `group-[.is-open]:` variants.
- **Fonts:** configured with the Astro Fonts API in `astro.config.mjs` and self-hosted as `--font-newsreader` (400 only) and `--font-hanken`. Tailwind's `--font-serif` and `--font-sans` point at them, so don't rename those Astro variables to `--font-serif` or `--font-sans`.
- **Images:** they live in `src/assets/` and are rendered through `<Image />` from `astro:assets`. `czekala3.webp` was a WebP misnamed `.jpg` on the old site.
- **Motion:** `src/scripts/motion.ts` is the only JS, with no dependencies. It handles the mobile menu, hide-on-scroll-down nav, one-time `[data-reveal]` entrances and `[data-count]` counters inside `[data-counters]`. Reveal start states apply only under `html.motion`, which an inline head script adds when motion is allowed. Content stays visible without JS and under reduced motion. The hero uses the CSS-only `[data-enter]`.

## Design rules (from the impeccable / taste-skill reviews)

- No eyebrow or kicker labels above headings, no gradients, no leaf or eco icons, no unicode arrows (use `Arrow.astro`).
- Display type is at most 6rem, with letter-spacing no tighter than -0.04em.
- Animate only transform and opacity, using `--ease-out`.

The design skills are vendored in `skills/`. Their scripts need a Chromium browser; Chrome isn't installed here, so they run through `CHROME_PATH` pointing at Brave.
