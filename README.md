# AETHER VFX Portfolio

A modern, full-stack VFX portfolio application built with React, TypeScript, Tailwind CSS, Firebase, and Clerk authentication.

## Features

- **Responsive Design**: Beautiful dark-themed UI optimized for all devices
- **Authentication**: Secure user authentication with Clerk
- **Contact Management**: Store contact form submissions in Firebase
- **SEO Optimized**: Proper meta tags and structure
- **Performance**: Fast loading with Vite and optimized components
- **Modern Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Authentication**: Clerk
- **Backend**: Firebase (Firestore, Auth, Storage)
- **Animation**: Framer Motion
- **Routing**: React Router v6

## Project Structure

```
src/
├── pages/
│   ├── Home.tsx
│   ├── Work.tsx
│   ├── About.tsx
│   ├── Showreel.tsx
│   └── Contact.tsx
├── components/
│   └── Navigation.tsx
├── config/
│   └── firebase.ts
├── assets/
│   └── icons.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd port2
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Firebase and Clerk credentials:

```env
# Firebase
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Clerk
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Create a collection called `contact_messages`
5. Set up security rules (allow authenticated users to write)
6. Copy your project credentials to `.env.local`

### Firestore Rules Example

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact_messages/{document=**} {
      allow write: if request.auth != null;
      allow read: if request.auth != null && request.auth.token.email in ['admin@example.com'];
    }
  }
}
```

## Clerk Setup

1. Go to [Clerk](https://clerk.com/)
2. Create a new application
3. Choose React as your framework
4. Copy your Publishable Key to `.env.local`
5. Set up sign-in/sign-up methods in Clerk Dashboard

## Pages

### Home
- Hero section with CTA buttons
- Featured projects grid
- Statistics section
- Call-to-action for getting in touch

### Work
- Portfolio grid with filtering
- Project categories
- Detailed project cards
- Load more functionality

### About
- Company story and mission
- Key achievements
- Services offered
- Leadership team
- Core values

### Showreel
- Video player with playlist
- Multiple showreel options
- Behind-the-scenes content
- Subscription CTA

### Contact
- Contact form with Firebase integration
- Clerk authentication requirement
- Contact information
- FAQ section
- Form validation and submission handling

## Customization

### Tailwind Configuration
Edit `tailwind.config.js` to customize colors, spacing, and other design tokens.

### Components
All components use TypeScript and Tailwind CSS. Modify them in the `src/components/` directory.

### Pages
Update page content in `src/pages/` directory.

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload dist folder to Netlify
```

### Environment Variables
Add the same environment variables to your hosting platform's configuration.

## Performance Tips

- Images should be optimized and lazy-loaded
- Use React.memo for expensive components
- Leverage code splitting with React Router
- Monitor bundle size with `npm run build`

## Security

- Never commit `.env.local` to version control
- Use Firebase Security Rules for data protection
- Enable Clerk's security features
- Validate all form inputs server-side

## Troubleshooting

### Firebase Connection Issues
- Verify API credentials in `.env.local`
- Check Firebase project is active
- Ensure security rules allow your app

### Clerk Authentication Errors
- Check Publishable Key is correct
- Verify sign-in/sign-up methods are configured
- Clear browser cache and cookies

### Styling Issues
- Run `npm run build` to ensure Tailwind compiles
- Check Tailwind content paths in config
- Clear `.next` or `dist` folder and rebuild

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue on GitHub or contact us at hello@aethervfx.com

## Next Steps

1. Add real project images and videos
2. Integrate email service for contact form
3. Add blog functionality
4. Implement analytics
5. Add sitemap and robots.txt
6. Set up CI/CD pipeline
