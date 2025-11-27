import type { Metadata } from 'next'
import WhatsNewContent from './whats-new-content'

export const metadata: Metadata = {
  title: "What's New at CareerLead AI - Latest Features & Updates",
  description:
    "Discover our newest AI-powered features including Resume Review, downloadable reports, instant suggestions, and enhanced mobile experience. See what's new at CareerLead AI.",
  keywords:
    'CareerLead AI updates, new features, AI resume review, career tools, resume analysis, career guidance updates, feature announcement',
  openGraph: {
    title: "What's New at CareerLead AI - Latest Features",
    description:
      'Check out our powerful new AI-powered Resume Review and other exciting features to supercharge your career journey.',
    url: 'https://careerlead.ai/whats-new',
    siteName: 'CareerLead AI',
    images: [
      {
        url: '/og-whats-new.jpg',
        width: 1200,
        height: 630,
        alt: "What's New at CareerLead AI - New Features",
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "What's New at CareerLead AI",
    description: 'Discover our newest AI-powered features including Resume Review and more!',
    images: ['/og-whats-new.jpg'],
  },
  alternates: {
    canonical: '/whats-new',
  },
}

export default function WhatsNewPage() {
  return <WhatsNewContent />
}
