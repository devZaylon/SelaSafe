# SelaSafe

A modern, responsive marketing website for **SelaSafe**, a South African anti-spiking drink-protection brand. The site presents the product, the brand story, partner venues, and contact details as a single, smooth-scrolling experience built with React and Vite.

## About

SelaSafe produces anti-spiking drink protectors designed to help people keep their drinks covered in social environments such as clubs, bars, and events. This project is the brand's front-facing website: a static, client-side React application that communicates the product, its purpose ("Your drink. Your night. Your safety."), how it works, where it's available, and how to get in touch.

The site is intended for people looking for safer nights out, potential venue partners, and anyone interested in the SelaSafe brand.

> This is a front-end-only website. There is no backend, database, authentication, payment processing, or form submission service included.

## Features

- Responsive, mobile-first layout that adapts across mobile, tablet, laptop, and desktop.
- Sticky, responsive header with a desktop navigation bar and a slide-in mobile menu.
- Single-page navigation: the main navigation smoothly scrolls to sections on the Home page.
- Home hero section with brand messaging and call-to-action buttons.
- Our Story section (mission, brand values, and supporting content).
- "Simple. Secure. SelaSafe." section presenting the product/how-it-works content.
- Our Clients section featuring partner content (e.g. the SelaSafe x Boogie partnership) and a "more locations coming soon" placeholder.
- Contact section with direct phone and email action buttons.
- Footer with brand info, quick links, and contact details.
- Scroll-triggered entrance animations via a reusable animation wrapper.
- Back to Top button that appears after scrolling and returns the user to the top.
- Reusable product and site/location cards with consistent hover interactions.
- SEO meta tags and social-share (Open Graph / Twitter) metadata configured in `index.html`.

## Technology Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| React | ^19.2.8 | UI framework |
| React DOM | ^19.2.8 | React renderer for the DOM |
| React Router DOM | ^7.8.2 | Client-side routes + navigation helpers |
| Vite | ^8.2.2 | Build tool and dev server |
| Tailwind CSS | ^4.1.12 | Utility-first styling (via `@tailwindcss/vite`) |
| Framer Motion | ^12.23.12 | Scroll and entrance animations |
| Lucide React | ^0.542.0 | Icon set |
| Oxlint | ^1.79.0 | Linting (dev) |

Language: JavaScript / JSX. Package manager: npm.

## Project Structure

```text
sela_safe/
├── public/
│   └── assets/
│       └── images/          # Static images/logos served directly (referenced as /assets/images/...)
├── src/
│   ├── assets/
│   │   └── images/          # Present in the repo but currently empty; images live under public/
│   ├── components/
│   │   ├── Header.jsx           # Sticky header + desktop/mobile navigation
│   │   ├── Footer.jsx           # Footer with brand info, quick links, contact
│   │   ├── AnimatedSection.jsx  # Scroll-triggered animation wrapper (Framer Motion)
│   │   ├── ProductCard.jsx      # Reusable product/feature card
│   │   ├── SiteCard.jsx         # Reusable venue/location card
│   │   ├── OurStorySection.jsx  # Shared Our Story content (used on Home and Our Story page)
│   │   ├── BackToTop.jsx        # Floating "back to top" button
│   │   ├── ScrollToTop.jsx      # Resets scroll position on route change
│   │   ├── CardGrid.jsx         # Responsive grid container
│   │   ├── CardExamples.jsx     # Example/reference usage of cards
│   │   └── AnimationExamples.jsx# Example/reference usage of animations
│   ├── pages/
│   │   ├── Home.jsx         # Main single-page experience (hero + all sections)
│   │   ├── OurStory.jsx     # Standalone Our Story page
│   │   ├── Works.jsx        # Standalone "How It Works" page
│   │   ├── Clients.jsx      # Standalone Clients page
│   │   └── Contact.jsx      # Standalone Contact page
│   ├── hooks/
│   │   └── useScrollAnimation.js  # Custom scroll-animation hook
│   ├── utils/
│   │   └── scroll.js        # Smooth scroll-to-section helper
│   ├── App.jsx              # App shell: header, routes, footer, scroll helpers
│   ├── main.jsx             # Entry point (mounts React + BrowserRouter)
│   ├── index.css            # Global styles, design tokens, Tailwind layer utilities
│   └── App.css              # Additional styles
├── index.html              # HTML template, SEO/meta tags, font preconnect
├── vite.config.js          # Vite + React + Tailwind config
└── package.json            # Scripts and dependencies
```

**Main folders:**

- `src/components/` — reusable UI building blocks.
- `src/pages/` — the Home page plus standalone pages available at direct routes.
- `src/hooks/` and `src/utils/` — shared logic (scroll animation hook and scroll helper).
- `public/assets/images/` — all images referenced by the app, served at `/assets/images/...`.

## Getting Started

**Prerequisites**

- Node.js 18 or higher
- npm
- Git (for cloning and version control)

**Install**

```bash
git clone <your-repository-url>
cd sela_safe
npm install
```

**Run the development server**

```bash
npm run dev
```

Vite starts a local development server with hot module reloading and prints a local URL in the terminal (commonly `http://localhost:5173`). Open that URL in a browser to view the site.

## Production Build

Create an optimized production build:

```bash
npm run build
```

The output is written to the `dist/` directory as static HTML, CSS, and JavaScript.

Preview the production build locally:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

## Assets

All images used by the site are stored in:

```text
public/assets/images/
```

Because they live in `public/`, they are served from the site root and referenced with an absolute path, for example:

```jsx
<img src="/assets/images/sela_safe_logo_remake.jpeg" alt="SelaSafe" />
```

**Adding a new image**

1. Place the file in `public/assets/images/`.
2. Reference it as `/assets/images/<filename>`.

> Note: `src/assets/images/` exists in the repository but is currently empty. New assets should be added to `public/assets/images/` to match the current convention.

## Navigation

The main navigation (in both the header and the footer's Quick Links) uses a single-page scrolling structure. Each item scrolls to a section on the Home page:

| Navigation item | Destination |
| --- | --- |
| Home | Top of the Home page |
| Our Story | Our Story section |
| How It Works | "Simple. Secure. SelaSafe." section |
| Our Clients | Our Clients section |
| Contact Us | Contact section |

When a navigation item is clicked from the Home page, the page smoothly scrolls to the target section. When clicked from another route, the app navigates to Home first and then scrolls to the target section. Section scroll positions account for the sticky header via CSS `scroll-margin-top`.

Standalone routes (`/`, `/our-story`, `/how-it-works`, `/clients`, `/contact`) also exist and render page components directly, so those URLs remain accessible.

## Responsive Design

The site is built mobile-first and adapts across mobile, tablet, laptop, and desktop screen sizes using Tailwind's responsive utilities, fluid `clamp()`-based typography, and responsive spacing. The header switches between a desktop navigation bar and a slide-in mobile menu.

## Animations

Animations are implemented with **Framer Motion** and centralized in `src/components/AnimatedSection.jsx`, which wraps content and applies scroll-triggered entrance effects (such as fade-up and slide-in). A custom hook, `src/hooks/useScrollAnimation.js`, supports scroll-based animation behavior. Buttons and cards also include hover/interaction transitions. Where applicable, animations respect the user's reduced-motion preference.

## Components

| Component | Purpose |
| --- | --- |
| `Header` | Sticky site header with desktop navigation and a mobile slide-in menu |
| `Footer` | Brand info, quick links (section navigation), and contact details |
| `AnimatedSection` | Reusable wrapper for scroll-triggered entrance animations |
| `ProductCard` | Reusable card for product/feature content |
| `SiteCard` | Reusable card for venue/location content |
| `OurStorySection` | Shared Our Story content reused on the Home page and the Our Story page |
| `BackToTop` | Floating button that appears after scrolling and returns to the top |
| `ScrollToTop` | Resets scroll position on route changes |
| `CardGrid` | Responsive grid container for cards |

`CardExamples` and `AnimationExamples` are reference/demonstration components illustrating card and animation usage.

## Pages / Sections

The primary experience is the **Home page**, which is composed of these sections (targets of the single-page navigation):

- **Home / hero** — brand messaging and call-to-action buttons.
- **Our Story** — mission, brand values, and supporting content.
- **Simple. Secure. SelaSafe.** — product / how-it-works content.
- **Our Clients** — partner content and location cards.
- **Contact** — phone and email action buttons.

The project also includes standalone page components (`OurStory`, `Works`, `Clients`, `Contact`) available at their own routes for direct access, in addition to being represented as sections on the Home page.

## Development Guidelines

- Reuse existing components (`AnimatedSection`, `ProductCard`, `SiteCard`, etc.) rather than duplicating markup.
- Maintain the existing SelaSafe visual identity and design tokens defined in `src/index.css`.
- Keep the layout responsive and test changes at mobile, tablet, laptop, and desktop widths.
- Keep spacing and typography consistent with the existing system.
- Avoid adding unnecessary dependencies.
- Add new images to `public/assets/images/` and reference them with absolute paths.
- Run `npm run build` (and optionally `npm run lint`) before committing major changes.

## Deployment

The project produces a static build (`dist/`) suitable for any static host (for example Netlify, Vercel, or GitHub Pages) or any web server that can serve static files.

**General steps**

1. Run `npm run build`.
2. Deploy the contents of the `dist/` directory.
3. Because the app uses client-side routing, configure the host to fall back to `index.html` for unknown routes if you rely on the standalone route URLs.

> No deployment automation is currently configured in this repository (no GitHub Pages configuration, no CI/CD workflow, and no custom Vite `base` path). Deployment is manual.

## Environment Variables

No environment variables are currently required. The site runs as a static front-end with no external API dependencies.

## Accessibility

Accessibility considerations present in the project include:

- Semantic HTML structure (`header`, `main`, `footer`, `nav`, `section`).
- `alt` text on images.
- Keyboard-accessible links and buttons, with visible focus styling defined in the global CSS.
- Readable, responsive typography.
- Reduced-motion handling in the animation layer.

> Full accessibility conformance (e.g. WCAG) has not been formally audited. These are the accessibility-supporting practices currently implemented.

## SEO

SEO-related configuration is defined in `index.html`, including:

- Page `<title>` and meta `description` and `keywords`.
- `viewport` meta tag for responsive rendering.
- Open Graph and Twitter Card metadata for link previews.
- `canonical` link and `robots` meta tag.
- `theme-color` meta tag.

## Git / Version Control

This project uses Git for version control and can be hosted on GitHub. A typical workflow:

```bash
git status
git add .
git commit -m "Describe the changes"
git push
```

## Project Status

The project is a **static React + Vite front-end website**. The UI, sections, single-page navigation, animations, and Back to Top interaction are implemented, and the project builds successfully with `npm run build`.

There is currently no backend, database, authentication, payment processing, or working contact-form submission. Contact actions are direct `tel:` and `mailto:` links.

## Future Improvements

The following are potential future enhancements, not existing functionality:

- Contact form with backend integration.
- Online ordering / e-commerce functionality.
- Backend and/or database integration.
- CMS integration for editable content.
- Analytics integration.
- Automated deployment (CI/CD) and a configured hosting target.

## Licence

This project does not currently specify a licence. Add a licence file if you intend to define usage and distribution terms.
