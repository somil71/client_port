# Deployment Guide

This project is a Vite + React + TypeScript single-page application with Firebase environment variables and an optional Plausible Analytics domain.

## Vercel Deployment

1. Push the repository to GitHub.
2. Sign in to Vercel and click `Add New Project`.
3. Import the `client_port` repository.
4. Keep the detected framework preset as `Vite`.
5. Confirm the default build settings:

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

6. Open the `Environment Variables` section before deploying.
7. Add the following variables:

```text
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_PLAUSIBLE_DOMAIN
```

8. Set `VITE_PLAUSIBLE_DOMAIN` to your production domain if you use Plausible. Leave it empty if analytics should remain disabled.
9. Deploy the project.
10. After deployment, open the production site and verify:
    - all routes load correctly
    - `/portfolio`, `/work/:slug`, `/showreel`, and `/contact` work from direct URL entry
    - the contact form writes successfully to Firestore
    - analytics appears only when `VITE_PLAUSIBLE_DOMAIN` is configured

## Why the routes work on Vercel

The app uses client-side routing, so `vercel.json` rewrites every request back to `index.html`. React Router then resolves the correct page in the browser.

## Netlify Fallback

If you deploy to Netlify instead, the included `public/_redirects` file provides the same SPA fallback behavior:

```text
/* /index.html 200
```

## Post-Deployment Checklist

- Confirm Firestore security rules are deployed.
- Confirm production environment variables match your Firebase project.
- Test a fresh contact submission in production.
- Confirm Open Graph metadata updates per route.
- If using Plausible, confirm the `data-domain` value matches the deployed domain exactly.
