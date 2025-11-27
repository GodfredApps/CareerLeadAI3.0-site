# CareerLead AI - Marketing Site

Official marketing website for CareerLead AI, an AI-powered career guidance platform.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Deployment:** Firebase Hosting
- **CI/CD:** GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3001
```

### Build

```bash
# Build for production (static export)
npm run build

# Or export directly
npm run export
```

## Deployment

The site automatically deploys to Firebase Hosting via GitHub Actions:

- **Production:** Pushes to `main` → https://careercompass-ai-6ci2q.web.app
- **Staging:** Pushes to `develop` → Staging channel
- **Preview:** Pull requests → Preview channels

## Project Structure

```
.
├── app/                  # Next.js App Router pages
│   ├── page.tsx         # Homepage
│   ├── whats-new/       # What's New page
│   ├── about/           # About page
│   └── ...
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── navbar.tsx      # Navigation
│   └── footer.tsx      # Footer
├── lib/                # Utilities
├── public/             # Static assets
└── docs/               # Documentation
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark mode support
- ✅ SEO optimized
- ✅ Interactive animations
- ✅ Static site generation
- ✅ Feature landing pages

## Documentation

See `/docs` folder for:
- Feature landing page templates
- Design guidelines
- SEO best practices

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=https://your-app-url.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## License

Proprietary - CareerLead AI

---

**Last Updated:** 2025-11-27
