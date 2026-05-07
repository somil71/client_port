# client_port

A multi-page creative portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Firebase.

This project is designed as a presentation-first portfolio website. It combines page-based storytelling, strong visual styling, responsive layout work, and a lightweight backend integration for contact submissions. The site is intended to feel polished and cinematic while still being practical to extend and deploy.

## Overview

The app is a client-side React SPA with route-based navigation and page-specific visual treatments.

Core goals of the project:

- Present a complete portfolio with dedicated pages for `Home`, `About`, `Portfolio`, `Showreel`, and `Contact`
- Use motion and visual styling to make the site feel more authored than a basic template
- Keep the codebase approachable for iteration and content updates
- Support contact form persistence through Firebase Firestore
- Remain responsive and production-buildable with a simple toolchain

## Tech Stack

### Frontend

- React 18
- TypeScript
- React Router v6
- Framer Motion

### Styling

- Tailwind CSS
- Custom global CSS in `src/index.css`
- Google Fonts

### Build Tooling

- Vite
- ESLint
- PostCSS

### Backend / Data

- Firebase App SDK
- Firestore for contact form submissions

## Current Architecture

This is a frontend-heavy architecture with a single backend integration point.

### High-level flow

1. `main.tsx` mounts the React application.
2. `App.tsx` sets up routing and lazy-loads route pages.
3. `Navigation.tsx` provides top-level navigation and route awareness.
4. Each page component renders its own content and uses `PageMeta.tsx` for document title and description.
5. `Contact.tsx` writes form submissions into Firestore using the shared Firebase config.

### App shell

The app shell is intentionally simple:

- a top navigation bar
- a grain overlay for texture
- route-based page rendering
- a skeleton fallback while lazy-loaded pages are resolving

This keeps the app lightweight while still supporting multi-page presentation.

## Project Structure

```text
src/
  assets/
    icons.ts
  components/
    Navigation.tsx
    PageMeta.tsx
  config/
    firebase.ts
  pages/
    About.tsx
    Contact.tsx
    Home.tsx
    Showreel.tsx
    Work.tsx
  App.tsx
  index.css
  main.tsx
  vite-env.d.ts
```

### What each area does

- `assets/`
  Holds small reusable UI assets such as navigation icons.

- `components/`
  Holds shared UI building blocks used across multiple pages.

- `config/`
  Holds environment-based setup code. Right now this is Firebase initialization.

- `pages/`
  Holds route-level page components. Each file maps to a visible page in the site.

- `index.css`
  Central styling file. This is where most visual identity decisions, design tokens, layout helpers, and component utility styles live.

## Routing

Defined in `src/App.tsx`.

Current routes:

- `/` → Home
- `/about` → About
- `/portfolio` → Portfolio
- `/work` → Portfolio alias
- `/showreel` → Showreel
- `/contact` → Contact

### Routing strategy

- Uses `BrowserRouter`
- Uses `Routes` and `Route` from React Router v6
- Uses `React.lazy` and `Suspense` for route-level code splitting

This keeps initial load smaller and keeps route files independent.

## Page-by-Page Design Intent

### 1. Home

Purpose:

- Set the tone of the portfolio
- Introduce the creative direction
- Give the user a strong first impression

Design role:

- cinematic landing page
- atmospheric hero
- visual motion and abstract presentation

Typical content:

- hero statement
- supporting copy
- CTA buttons
- layered / styled presentation blocks

### 2. About

Purpose:

- act like a CV / resume page
- explain background, skills, and experience

Design role:

- structured and information-rich
- more editorial and grid-oriented than Home

Typical content:

- personal details
- education
- skills
- experience
- achievements

### 3. Portfolio (`Work.tsx`)

Purpose:

- show categorized creative work
- act as the main archive of projects

Design role:

- project presentation system
- filterable layout
- stronger information density than Home

Typical content:

- category filters
- project cards
- project descriptions
- preview visuals

### 4. Showreel

Purpose:

- present motion-first work in a more focused format

Design role:

- showcase page for reels and motion content
- visually darker and more playback-oriented

Typical content:

- selected reel
- reel descriptions
- reel list / chapter-like switching

### 5. Contact

Purpose:

- let visitors reach out
- store inquiries in Firestore

Design role:

- cleaner utility page
- form-first layout

Typical content:

- contact summary
- direct contact methods
- inquiry form

## Design System and Styling Approach

The project uses a hybrid styling strategy:

- Tailwind utility classes for local layout and spacing
- custom semantic classes in `src/index.css` for reusable visual systems

### Why this hybrid approach works here

For a portfolio project, pure utility-only styling often becomes noisy for expressive UI. This project uses Tailwind for fast composition and a custom CSS layer for:

- global visual identity
- repeated motion surfaces
- page shells
- special cards / panels
- theme-specific section treatments

### Core visual concepts currently present

- dark cinematic backgrounds
- glass-like panels
- soft bloom and glow
- textured grain overlay
- expressive heading typography
- rounded surfaces with layered borders

### Key global classes

Examples from `src/index.css`:

- `.page-shell`
- `.section-frame`
- `.glass-card`
- `.glass-panel`
- `.eyebrow`
- `.display-hero`
- `.section-title`
- `.primary-link`
- `.secondary-link`
- `.contact-input`

These act like reusable UI primitives.

### Typography

Two fonts are imported:

- `Inter`
- `Space Grotesk`

Usage pattern:

- `Inter` for body text and UI readability
- `Space Grotesk` for headings and stronger visual emphasis

### Responsive strategy

Responsiveness is handled by:

- Tailwind breakpoint utilities
- flexible grid layouts
- `max-w-*` container constraints
- mobile-first stacking

The site is designed to degrade gracefully from multi-column desktop layouts to stacked mobile sections.

## Animation and Motion

Framer Motion is used for motion and entrance effects.

### Typical animation use cases in this codebase

- initial fade / slide-in for sections
- scroll-linked transforms via `useScroll` and `useTransform`
- subtle parallax-like behavior
- in-view reveal animations

### Why Framer Motion is a good fit here

- easy route/page animation support
- good integration with React state and JSX
- simple expressive APIs for scroll-linked motion
- low friction for portfolio-style animation patterns

## Backend Logic

This project does not use a custom Node/Express backend.

Instead, it uses Firebase as a backend service.

### What Firebase is currently used for

- Firestore writes from the contact form

### Firebase config

Located in:

- `src/config/firebase.ts`

It:

- reads Firebase credentials from Vite env variables
- initializes the Firebase app
- exports a Firestore instance as `db`

### Contact form data flow

In `src/pages/Contact.tsx`:

1. Form state is stored in React component state.
2. On submit, the handler prevents default browser submission.
3. Loading and error state are managed locally.
4. `addDoc()` writes the form payload into the Firestore collection `contact_messages`.
5. `serverTimestamp()` is used so the submission gets a backend timestamp.
6. UI success and error messages are shown based on the result.

### Submission schema

The Firestore document currently includes:

- `name`
- `email`
- `phone`
- `projectType`
- `budget`
- `message`
- `timestamp`
- `status`

This is a good base if you later want:

- an admin dashboard
- email triggers
- filtering by project type
- status updates for leads

## SEO and Metadata

The project uses a small reusable metadata component:

- `src/components/PageMeta.tsx`

What it does:

- updates `document.title`
- ensures a `meta[name="description"]` exists
- updates the description dynamically per page

This gives each route a cleaner SEO baseline without bringing in a heavier head-management library.

## State Management

This project uses local component state only.

That is appropriate for the current scope because:

- there is no complex shared application state
- each page owns its own temporary UI state
- route state is handled by React Router
- form state is isolated to the contact page

Examples:

- mobile nav toggle in `Navigation.tsx`
- contact form state in `Contact.tsx`
- selected category in `Work.tsx`
- selected reel / active state in `Showreel.tsx`

## Performance Notes

The project already uses some sensible baseline performance practices:

- Vite for fast dev and optimized builds
- route-level lazy loading
- simple SPA architecture
- no heavyweight custom backend bundle

Potential future improvements:

- replace generated placeholder visuals with optimized real media
- split heavier motion or media components further if needed
- audit bundle size if adding video or 3D libraries

## Environment Variables

Expected environment variables are documented in `.env.local.example`.

Current values needed:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

### Important note

`.env.local` is intentionally ignored by Git.

Do not commit real Firebase credentials or any private config.

## Installation

### Prerequisites

- Node.js 16+ recommended
- npm

### Steps

1. Clone the repo

```bash
git clone https://github.com/somil71/client_port.git
cd client_port
```

2. Install dependencies

```bash
npm install
```

3. Create local env file

```bash
copy .env.local.example .env.local
```

4. Fill in your Firebase values inside `.env.local`

5. Start development server

```bash
npm run dev
```

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite dev server.

### Production build

```bash
npm run build
```

Runs TypeScript compilation and creates a production build in `dist/`.

### Preview production build

```bash
npm run preview
```

Serves the built project locally for testing.

### Lint

```bash
npm run lint
```

Runs ESLint on the project.

## Deployment

This project is well-suited for static frontend hosting.

Good options:

- Vercel
- Netlify
- Firebase Hosting
- GitHub Pages with some router considerations

### Deployment requirements

- build the app with `npm run build`
- provide Firebase env variables in the deployment platform
- ensure SPA fallback is configured if needed

## Firestore Setup

Create a Firestore collection:

- `contact_messages`

Suggested minimal rules depend on your desired behavior.

Because the frontend writes directly to Firestore, you should define rules carefully. If you want public contact form submissions, your rules must allow controlled writes. If you want stricter handling, consider moving writes behind Cloud Functions later.

## Current Limitations

A few important realities about the current project:

- it is frontend-first, not a full custom backend app
- it uses generated/placeholder presentation for some portfolio visuals
- showreel/player behavior is presentation-oriented, not a real media pipeline
- there is no CMS yet
- there is no authentication layer in the current committed version

## How to Extend the Project

Natural next steps:

- replace placeholder graphics with real portfolio assets
- connect real video media to the showreel page
- add project detail pages or modal case studies
- trigger emails from Firestore submissions
- add analytics
- add sitemap and richer SEO metadata
- add an admin dashboard for managing leads

## Design Philosophy

This codebase is built around a presentation principle:

> the portfolio itself should demonstrate design thinking, not just contain examples of it

That means:

- layout matters as much as content
- motion supports storytelling
- typography is part of the interface voice
- page structure is deliberate, not generic

## File Reference Guide

If you want to modify the project quickly, start here:

- Routing: [src/App.tsx](C:/Users/Somil/Desktop/port2/src/App.tsx)
- Global styles: [src/index.css](C:/Users/Somil/Desktop/port2/src/index.css)
- Navigation: [src/components/Navigation.tsx](C:/Users/Somil/Desktop/port2/src/components/Navigation.tsx)
- SEO metadata: [src/components/PageMeta.tsx](C:/Users/Somil/Desktop/port2/src/components/PageMeta.tsx)
- Firebase config: [src/config/firebase.ts](C:/Users/Somil/Desktop/port2/src/config/firebase.ts)
- Home page: [src/pages/Home.tsx](C:/Users/Somil/Desktop/port2/src/pages/Home.tsx)
- About page: [src/pages/About.tsx](C:/Users/Somil/Desktop/port2/src/pages/About.tsx)
- Portfolio page: [src/pages/Work.tsx](C:/Users/Somil/Desktop/port2/src/pages/Work.tsx)
- Showreel page: [src/pages/Showreel.tsx](C:/Users/Somil/Desktop/port2/src/pages/Showreel.tsx)
- Contact page: [src/pages/Contact.tsx](C:/Users/Somil/Desktop/port2/src/pages/Contact.tsx)

## Summary

This project is a React + TypeScript creative portfolio that combines:

- route-based storytelling
- motion-driven UI
- custom CSS visual systems
- responsive layout design
- Firestore-backed contact capture

It is best understood as a design-led frontend application with a lightweight backend service layer, built to showcase both creative work and implementation ability.
