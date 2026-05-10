# Review Fix Log

Date: 2026-05-10

## Scope

This log records the fixes made after the code review and smoke test pass.

## Issues Fixed

### 1. Portfolio listing used a fake local dataset

Problem:
- `/portfolio` was rendering a separate placeholder dataset that did not match the real project records used by `/work/:slug` and the showreel.

Fix:
- Updated [src/pages/Work.tsx](C:/Users/Somil/Desktop/port2/src/pages/Work.tsx) to use the shared data from [src/data/projects.ts](C:/Users/Somil/Desktop/port2/src/data/projects.ts).
- Replaced placeholder filter labels with the real category system.
- Switched portfolio cards to use shared titles, summaries, categories, tools, and preview media.

### 2. Missing wildcard route / no proper 404 experience

Problem:
- Unknown client-side routes had no explicit route match.

Fix:
- Added a catch-all route and `NotFoundPage` in [src/App.tsx](C:/Users/Somil/Desktop/port2/src/App.tsx).

### 3. Hardcoded example domain used in page metadata

Problem:
- `client-port.example.com` was still hardcoded across page metadata and base HTML.

Fix:
- Added [src/config/site.ts](C:/Users/Somil/Desktop/port2/src/config/site.ts) with a shared `getSiteUrl()` helper.
- Updated route pages to use that helper.
- Updated [index.html](C:/Users/Somil/Desktop/port2/index.html) to read `VITE_SITE_URL`.
- Updated [.env.local.example](C:/Users/Somil/Desktop/port2/.env.local.example) to document `VITE_SITE_URL`.

### 4. Contact page exposed fake public contact details

Problem:
- The contact page showed fake phone/email/social values publicly.

Fix:
- Replaced those with safe interim copy in [src/pages/Contact.tsx](C:/Users/Somil/Desktop/port2/src/pages/Contact.tsx).
- Disabled fake outbound links by rendering non-clickable cards when no real URL exists yet.

### 5. Firebase form path assumed config always existed

Problem:
- Firebase initialization and contact submit path did not guard against missing env config.

Fix:
- Updated [src/config/firebase.ts](C:/Users/Somil/Desktop/port2/src/config/firebase.ts) to expose `db` only when Firebase config exists.
- Updated [src/pages/Contact.tsx](C:/Users/Somil/Desktop/port2/src/pages/Contact.tsx) to show a clear message if the contact form is not configured.

### 6. Public-facing project copy still contained placeholder wording

Problem:
- Several project records and detail-page strings still used placeholder language.

Fix:
- Rewrote the default project descriptions in [src/data/projects.ts](C:/Users/Somil/Desktop/port2/src/data/projects.ts) to neutral portfolio-ready copy.
- Cleaned up placeholder wording in [src/pages/WorkDetail.tsx](C:/Users/Somil/Desktop/port2/src/pages/WorkDetail.tsx).

## Validation

Checks run after fixes:

- `npm run build`
- `npm run lint`

Result:
- Both passed successfully.

## Responsive Pass And CSS Overlap Check

### 7. Layouts were not fully tuned for smaller screens

Problem:
- Several page sections still behaved like desktop-first layouts on tablets and phones.
- The `Work` page in particular kept its scroll-playhead/sticky intro behavior even when the viewport was too narrow for it to read comfortably.
- Buttons, footer navigation, showreel panels, and some decorative elements needed tighter mobile rules to avoid crowding or overflow.

Fix:
- Updated [src/pages/Work.tsx](C:/Users/Somil/Desktop/port2/src/pages/Work.tsx) to detect compact viewports and fall back to a cleaner stacked layout on smaller screens.
- Added responsive CSS in [src/index.css](C:/Users/Somil/Desktop/port2/src/index.css) for:
  - footer layout and link wrapping
  - work page intro, filters, cards, and image ratios
  - showreel player and chapter cards
  - contact actions and inputs
  - about timeline decorations
  - smaller chips, pills, labels, and metadata blocks

### 8. Overlapping CSS rule found in shared stylesheet

Problem:
- The shared stylesheet contained a duplicate `.work-filter-sticky` rule, which created unnecessary overlap and made future maintenance harder.

Fix:
- Removed the duplicate `.work-filter-sticky` definition from [src/index.css](C:/Users/Somil/Desktop/port2/src/index.css).

### 9. Follow-up validation after responsive changes

Checks run after the responsive pass:

- `npm run build`
- `npm run lint`

Result:
- Both passed successfully after the responsive changes and overlap cleanup.

## Notes

- The project still needs final client content for name, contact details, project descriptions, and final media assets.
- The new questionnaire file to collect that content is [CLIENT_CONTENT_QUESTIONNAIRE.md](C:/Users/Somil/Desktop/port2/CLIENT_CONTENT_QUESTIONNAIRE.md).
