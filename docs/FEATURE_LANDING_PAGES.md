# Feature Landing Pages Documentation

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Component Structure](#component-structure)
4. [Interactive Carousel System](#interactive-carousel-system)
5. [Creating New Feature Pages](#creating-new-feature-pages)
6. [SEO Best Practices](#seo-best-practices)
7. [Design Guidelines](#design-guidelines)
8. [Animation Patterns](#animation-patterns)
9. [Code Examples](#code-examples)
10. [Maintenance & Updates](#maintenance--updates)

---

## Overview

### Purpose

Feature landing pages are dedicated marketing pages that announce and showcase new platform features to users. Each page provides an immersive, interactive experience that demonstrates the feature's value proposition.

### Current Implementation

- **What's New Page** (`/whats-new`) - Showcases the Resume Review feature
- Location: `marketing-site/app/whats-new/`
- Status: ✅ Live and fully functional

### Key Features

- ✨ Interactive animated carousel demonstrating feature workflow
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 SEO-optimized with metadata and social sharing cards
- 🎨 Consistent with marketing site design system
- ⚡ Performance-optimized with code splitting
- ♿ Accessible with proper ARIA labels and keyboard navigation

---

## Architecture

### File Structure

```
marketing-site/app/whats-new/
├── page.tsx                    # Server component with metadata
├── whats-new-content.tsx       # Client component with UI and animations
└── page-backup.tsx             # Backup file (can be deleted)
```

### Component Separation Pattern

**Server Component (`page.tsx`)**

- Exports page metadata (title, description, Open Graph, Twitter cards)
- Imports and renders the client component
- Handles SEO and server-side concerns

**Client Component (`whats-new-content.tsx`)**

- Marked with `"use client"` directive
- Contains all interactive UI elements
- Handles animations with Framer Motion
- Manages component state (carousel, interactions)

### Why This Pattern?

Next.js 13+ App Router requires metadata to be exported from **server components**. Since we need interactivity and animations (which require client-side JavaScript), we separate concerns:

- Server component = Metadata + imports client component
- Client component = UI + animations + interactions

This pattern is **required** for all feature landing pages.

---

## Component Structure

### Page Sections (in order)

#### 1. Hero Section

```tsx
<section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
  {/* Animated background blobs */}
  {/* Badge: "🎉 New Feature" */}
  {/* Headline */}
  {/* Subheadline */}
  {/* CTA buttons */}
</section>
```

**Purpose:** First impression, immediate value proposition
**Key Elements:**

- Animated gradient background
- Feature badge with icon
- Compelling headline (benefit-focused)
- Action-oriented CTA buttons
- Responsive typography

#### 2. Feature Demo Section

```tsx
<section className="py-20 bg-background">
  <div className="container grid md:grid-cols-2 gap-12">
    {/* Left: Feature description */}
    {/* Right: Interactive Carousel */}
  </div>
</section>
```

**Purpose:** Show the feature in action
**Key Elements:**

- Feature overview with benefits
- Interactive carousel (see dedicated section below)
- Feature highlights with icons
- Split layout (text left, demo right)

#### 3. Detailed Features Section

```tsx
<section className="py-20 bg-muted/30">
  <div className="container grid md:grid-cols-3 gap-6">{/* Feature cards */}</div>
</section>
```

**Purpose:** Detailed feature breakdown
**Key Elements:**

- 3-column grid of feature cards
- Icon + title + description per card
- Hover animations
- Scroll-triggered animations

#### 4. CTA Section

```tsx
<section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
  {/* Final call-to-action */}
</section>
```

**Purpose:** Convert visitors to users
**Key Elements:**

- Strong headline
- Clear next steps
- Prominent CTA button
- Link to platform signup

---

## Interactive Carousel System

### Architecture Overview

The carousel is the **centerpiece** of feature landing pages. It provides a mini interactive demo of each feature stage.

### Component Hierarchy

```
ScreenshotCarousel (Main Container)
├── Slide1UploadDemo
├── Slide2AnalyzingDemo
├── Slide3ResultsDemo
├── Slide4ExportDemo
├── Navigation Controls
│   ├── Previous Button
│   ├── Next Button
│   ├── Dot Indicators
│   └── Auto-play Toggle
```

### Carousel Features

#### 1. Auto-Play System

```tsx
const [currentSlide, setCurrentSlide] = useState(0)
const [isAutoPlaying, setIsAutoPlaying] = useState(true)

useEffect(() => {
  if (!isAutoPlaying) return

  const interval = setInterval(() => {
    setCurrentSlide(prev => (prev + 1) % totalSlides)
  }, 6000) // 6 seconds per slide

  return () => clearInterval(interval)
}, [isAutoPlaying])
```

**Behavior:**

- Auto-advances every 6 seconds (configurable)
- Pauses when user interacts (manual navigation)
- Resumes after 10 seconds of inactivity
- Loops infinitely

#### 2. Navigation Controls

- **Arrow Buttons:** Previous/Next slide
- **Dot Indicators:** Direct navigation to any slide
- **Play/Pause Button:** Manual control of auto-play
- **Keyboard Support:** Arrow keys work (browser default)

#### 3. Slide Transition Animation

```tsx
<AnimatePresence mode="wait">
  {currentSlide === 0 && <Slide1UploadDemo key="slide-1" />}
  {currentSlide === 1 && <Slide2AnalyzingDemo key="slide-2" />}
  // ...
</AnimatePresence>
```

**Transition Pattern:**

- `initial: { opacity: 0, x: 100 }` - Slide enters from right
- `animate: { opacity: 1, x: 0 }` - Fade in and slide to center
- `exit: { opacity: 0, x: -100 }` - Fade out and slide to left
- Duration: 0.5 seconds

### Slide Types & Patterns

#### Pattern 1: Upload/Input Demo

**Use Case:** File uploads, form inputs, data entry

**Example:** Slide 1 - Upload Your Resume

```tsx
const [showFile, setShowFile] = useState(false)

useEffect(() => {
  const timer = setTimeout(() => setShowFile(true), 800)
  return () => clearTimeout(timer)
}, [])
```

**Key Elements:**

1. Dashed border container (drop zone)
2. File icon with animation
3. Browse button (static)
4. File card appearing after delay
5. Success indicator (checkmark)
6. Action button (CTA)

**Animation Sequence:**

1. Slide appears (0s)
2. Drop zone fades in (0.2s)
3. File icon animates (0.4s)
4. File card appears (0.8s) ← Simulates upload
5. CTA button pulses

#### Pattern 2: Processing/Loading Demo

**Use Case:** AI processing, data analysis, background tasks

**Example:** Slide 2 - AI Analysis

```tsx
const [uploadProgress, setUploadProgress] = useState(0)
const [analysisProgress, setAnalysisProgress] = useState(0)
const [stage, setStage] = useState(0)

// Progress intervals...
```

**Key Elements:**

1. Spinning loader icon
2. Progress bars (sequential)
3. Dynamic status messages
4. Percentage indicators

**Animation Sequence:**

1. Upload progress: 0 → 100% (1.2s)
2. Analysis progress: 0 → 100% (2.5s)
3. Status text rotates (1.5s intervals)

**Status Message Pattern:**

```tsx
const stageMessages = [
  'Extracting resume sections...',
  'Evaluating content and structure...',
  'Generating recommendations...',
]
```

#### Pattern 3: Results/Dashboard Demo

**Use Case:** Analytics, scores, reports, dashboards

**Example:** Slide 3 - Comprehensive Results

```tsx
const [score, setScore] = useState(0)
const targetScore = 87

useEffect(() => {
  const interval = setInterval(() => {
    setScore(prev => {
      if (prev >= targetScore) {
        clearInterval(interval)
        return targetScore
      }
      return prev + 3
    })
  }, 50)
  return () => clearInterval(interval)
}, [])
```

**Key Elements:**

1. Animated score counter
2. Mini cards grid (3 columns)
3. Progress bars
4. Staggered card animations

**Animation Sequence:**

1. Score counts up (0 → 87)
2. Card 1 appears (0.6s delay)
3. Card 2 appears (0.7s delay)
4. Card 3 appears (0.8s delay)
5. Progress bars fill

#### Pattern 4: Action/Export Demo

**Use Case:** Downloads, exports, sharing, copying

**Example:** Slide 4 - Download & Apply

```tsx
const [showModal, setShowModal] = useState(false)
const [copied, setCopied] = useState(false)

const handleCopy = () => {
  setCopied(true)
  setTimeout(() => setCopied(false), 2000)
}
```

**Key Elements:**

1. Action buttons
2. Modal/preview sliding up
3. Interactive elements (clickable)
4. Success feedback states

**Animation Sequence:**

1. Buttons appear
2. Modal slides up (0.8s delay)
3. Button click triggers state change
4. Success feedback (green checkmark)
5. Resets after 2 seconds

### Carousel Styling

```tsx
// Main container
className = 'relative w-full aspect-[4/3] rounded-lg shadow-2xl overflow-hidden border bg-card'

// Slide container
className =
  'absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8'

// Content area
className = 'max-w-md w-full space-y-4'
```

**Key CSS Classes:**

- `aspect-[4/3]` - Maintains 4:3 aspect ratio
- `shadow-2xl` - Depth effect
- `overflow-hidden` - Clips slide transitions
- `bg-gradient-to-br` - Unique gradient per slide
- `p-6` or `p-8` - Internal padding (responsive)

---

## Creating New Feature Pages

### Step-by-Step Guide

#### Step 1: Create Directory Structure

```bash
cd marketing-site/app
mkdir [feature-name]
cd [feature-name]
```

Example: For "AI Career Coach" feature:

```bash
mkdir ai-career-coach
```

#### Step 2: Create Server Component (page.tsx)

**Template:**

```tsx
import type { Metadata } from 'next'
import FeatureContent from './feature-content'

export const metadata: Metadata = {
  title: '[Feature Name] - CareerLead AI',
  description: '[Brief description of the feature for search engines]',
  keywords: '[comma, separated, keywords, for, seo]',
  openGraph: {
    title: '[Feature Name] at CareerLead AI',
    description: '[Social media description]',
    url: 'https://careerlead.ai/[feature-name]',
    siteName: 'CareerLead AI',
    images: [
      {
        url: '/og-[feature-name].jpg',
        width: 1200,
        height: 630,
        alt: '[Feature Name] Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Feature Name] - CareerLead AI',
    description: '[Twitter description]',
    images: ['/og-[feature-name].jpg'],
  },
  alternates: {
    canonical: '/[feature-name]',
  },
}

export default function FeaturePage() {
  return <FeatureContent />
}
```

#### Step 3: Create Client Component (feature-content.tsx)

**Template Structure:**

```tsx
'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
// ... other imports

export default function FeatureContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        {/* Hero content */}
      </section>

      {/* Feature Demo Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <div className="space-y-6">
              <Badge>Introducing</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">[Feature Name]</h2>
              <p className="text-lg text-muted-foreground">[Feature description]</p>
              {/* Feature highlights */}
            </div>

            {/* Right: Interactive Carousel */}
            <div>
              <FeatureCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 bg-muted/30">{/* Feature cards grid */}</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        {/* Final CTA */}
      </section>
    </div>
  )
}

// Carousel component
const FeatureCarousel = () => {
  // Implement carousel logic
}

// Individual slide components
const Slide1Demo = () => {
  /* ... */
}
const Slide2Demo = () => {
  /* ... */
}
// etc.
```

#### Step 4: Design the Carousel

**Planning Questions:**

1. How many stages does this feature have? (3-5 recommended)
2. What is the user journey? (Upload → Process → Results → Action)
3. What UI elements can we borrow from the actual feature?
4. What animations best demonstrate the feature's value?

**Design Process:**

1. **Map the workflow** - List each step the user takes
2. **Identify key moments** - What's impressive or unique?
3. **Choose animation patterns** - Match pattern to stage type
4. **Create mini components** - Build scaled-down versions of real UI
5. **Add micro-interactions** - Buttons, hovers, state changes

**Example Workflow Mapping:**

```
Feature: AI Career Coach
├── Slide 1: Ask a Question (Input Pattern)
├── Slide 2: AI Thinking (Processing Pattern)
├── Slide 3: Personalized Answer (Results Pattern)
└── Slide 4: Save & Apply (Action Pattern)
```

#### Step 5: Implement the Carousel

**Base Structure:**

```tsx
const FeatureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const totalSlides = 4

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full aspect-[4/3] rounded-lg shadow-2xl overflow-hidden border bg-card">
      <AnimatePresence mode="wait">
        {currentSlide === 0 && <Slide1Demo key="slide-1" />}
        {currentSlide === 1 && <Slide2Demo key="slide-2" />}
        {currentSlide === 2 && <Slide3Demo key="slide-3" />}
        {currentSlide === 3 && <Slide4Demo key="slide-4" />}
      </AnimatePresence>

      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary w-8' : 'bg-gray-400 dark:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 shadow-lg text-xs font-medium hover:bg-white dark:hover:bg-gray-800 transition-colors"
          aria-label={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
        >
          {isAutoPlaying ? '⏸' : '▶'}
        </button>
      </div>
    </div>
  )
}
```

#### Step 6: Add to Navigation

Update `marketing-site/components/navbar.tsx`:

```tsx
const getNavItems = () => {
  return [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: "What's New", href: '/whats-new' },
    { name: '[Feature Name]', href: '/[feature-name]' }, // Add here
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
  ]
}
```

**Note:** Consider if the feature should be in main nav or just linked from "What's New"

#### Step 7: Create Open Graph Image

Create a 1200x630px image at:

```
marketing-site/public/og-[feature-name].jpg
```

**Image Requirements:**

- Dimensions: 1200 x 630 pixels
- Format: JPG or PNG
- Max size: 5MB (but aim for < 500KB)
- Content: Feature name + key benefit + branding

**Design Tips:**

- Use the same gradient/colors as the landing page
- Include the CareerLead AI logo
- Make text large and readable
- Test how it looks on Twitter and LinkedIn

#### Step 8: Test & Deploy

**Testing Checklist:**

- [ ] Page loads without errors
- [ ] All animations work smoothly
- [ ] Carousel auto-plays and manual controls work
- [ ] Responsive on mobile, tablet, desktop
- [ ] Dark mode works correctly
- [ ] All links and CTAs function
- [ ] SEO metadata is correct
- [ ] Open Graph image displays properly
- [ ] Accessible (keyboard navigation, screen readers)
- [ ] Performance (Lighthouse score > 90)

**Deployment:**

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting:marketing-site
```

---

## SEO Best Practices

### Metadata Template

```tsx
export const metadata: Metadata = {
  // Primary metadata
  title: '[Feature Name] - [Benefit] | CareerLead AI',
  description: '[150-160 characters describing the feature and its benefits]',
  keywords: '[primary keyword], [secondary keyword], [related terms], CareerLead AI',

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: '[Feature Name] - [Short Benefit]',
    description: '[Compelling description for social sharing]',
    url: 'https://careerlead.ai/[feature-name]',
    siteName: 'CareerLead AI',
    images: [
      {
        url: '/og-[feature-name].jpg',
        width: 1200,
        height: 630,
        alt: '[Feature Name] - [Visual Description]',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '[Feature Name] - CareerLead AI',
    description: '[Twitter-optimized description, < 200 chars]',
    images: ['/og-[feature-name].jpg'],
    creator: '@CareerLeadAI', // Update with actual handle
  },

  // Canonical URL
  alternates: {
    canonical: '/[feature-name]',
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

### Title Best Practices

- **Format:** `[Feature Name] - [Benefit] | CareerLead AI`
- **Length:** 50-60 characters (max 70)
- **Include:** Feature name + key benefit + brand
- **Front-load:** Most important words first

**Good Examples:**

- "AI Resume Review - Get Instant Feedback | CareerLead AI"
- "Career Path Generator - Discover Your Next Step | CareerLead AI"
- "Interview Prep AI - Practice with Confidence | CareerLead AI"

### Description Best Practices

- **Length:** 150-160 characters (max 160)
- **Include:** What, How, Why
- **CTA:** Subtle call-to-action
- **Keywords:** Naturally integrate 1-2 keywords

**Template:**

```
[Feature Name] uses AI to [what it does]. [Key benefit in one sentence]. [CTA or social proof].
```

**Good Examples:**

- "AI Resume Review analyzes your resume in seconds and provides actionable feedback. Improve your resume score by 40% on average. Try it free today."
- "Career Path Generator creates personalized career roadmaps based on your skills and goals. Discover opportunities you never knew existed."

### Keywords Strategy

**Primary Keywords:**

- Feature name (e.g., "AI resume review")
- Category (e.g., "career tools", "job search")
- Brand name ("CareerLead AI")

**Secondary Keywords:**

- Related features (e.g., "resume analyzer", "ATS optimization")
- Use cases (e.g., "career change", "job application")
- Benefits (e.g., "career guidance", "job market insights")

**Long-tail Keywords:**

- Specific phrases users search (e.g., "how to improve my resume for tech jobs")
- Question-based (e.g., "what skills do I need for product management")

**Format:**

```tsx
keywords: 'AI resume review, resume analyzer, ATS optimization, career tools, job application feedback, CareerLead AI, resume improvement, career guidance'
```

### URL Structure

**Best Practices:**

- Use hyphens, not underscores: `/ai-resume-review` ✓ not `/ai_resume_review` ✗
- Keep it short: `/resume-review` ✓ not `/our-new-ai-powered-resume-review-feature` ✗
- Lowercase only: `/career-paths` ✓ not `/Career-Paths` ✗
- Descriptive: `/interview-prep` ✓ not `/feature-3` ✗

### Structured Data (Future Enhancement)

Consider adding JSON-LD structured data for rich snippets:

```tsx
// In page.tsx
export default function FeaturePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '[Feature Name]',
    description: '[Feature description]',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '250',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FeatureContent />
    </>
  )
}
```

---

## Design Guidelines

### Color System

**Primary Colors:**

```tsx
// From Tailwind config
primary: 'hsl(var(--primary))' // Blue accent
accent: 'hsl(var(--accent))' // Secondary accent
background: 'hsl(var(--background))'
foreground: 'hsl(var(--foreground))'
muted: 'hsl(var(--muted))'
```

**Gradients:**

```tsx
// Hero backgrounds
className = 'bg-gradient-to-br from-primary/10 via-accent/5 to-background'

// Slide backgrounds (unique per slide)
className = 'bg-gradient-to-br from-primary/5 to-accent/5' // Slide 1
className = 'bg-gradient-to-br from-green-500/5 to-accent/5' // Slide 2
className = 'bg-gradient-to-br from-primary/5 to-purple-500/5' // Slide 3
className = 'bg-gradient-to-br from-accent/5 to-primary/5' // Slide 4
```

**Status Colors:**

```tsx
// Success states
className = 'bg-green-50 dark:bg-green-900/20 border-green-200'
className = 'text-green-600 dark:text-green-400'

// Warning/improvement states
className = 'bg-amber-50 dark:bg-amber-900/20'
className = 'text-amber-500'

// Info states
className = 'bg-blue-100 text-blue-700'
```

### Typography

**Scale:**

```tsx
// Headings
className = 'text-4xl md:text-5xl lg:text-6xl font-bold' // Hero
className = 'text-3xl md:text-4xl font-bold' // Section headers
className = 'text-2xl md:text-3xl font-bold' // Sub-sections
className = 'text-xl md:text-2xl font-semibold' // Card titles

// Body text
className = 'text-lg text-muted-foreground' // Large body
className = 'text-base' // Regular body
className = 'text-sm text-muted-foreground' // Small text
className = 'text-xs' // Micro text
```

**Font Weights:**

- `font-bold` (700) - Headlines, important CTAs
- `font-semibold` (600) - Sub-headlines, card titles
- `font-medium` (500) - Labels, badges
- `font-normal` (400) - Body text

### Spacing

**Section Spacing:**

```tsx
className = 'py-20 md:py-28' // Large sections (hero, main)
className = 'py-16 md:py-20' // Medium sections
className = 'py-12 md:py-16' // Smaller sections
```

**Component Spacing:**

```tsx
className = 'space-y-8' // Large gaps between components
className = 'space-y-6' // Medium gaps
className = 'space-y-4' // Standard gaps
className = 'space-y-2' // Tight gaps
className = 'gap-12' // Grid gaps
```

**Container Padding:**

```tsx
className = 'container' // Auto horizontal padding
className = 'p-6 md:p-8' // Card padding
className = 'px-4 py-2' // Button padding
```

### Responsive Breakpoints

```tsx
// Mobile first approach
className = 'text-base md:text-lg lg:text-xl'
className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
className = 'py-12 md:py-16 lg:py-20'
```

**Breakpoints:**

- `sm:` - 640px (small tablets)
- `md:` - 768px (tablets)
- `lg:` - 1024px (small desktops)
- `xl:` - 1280px (large desktops)

### Component Patterns

#### Badge Component

```tsx
<Badge className="mb-3 bg-primary">🎉 New Feature</Badge>
```

#### Feature Card

```tsx
<Card className="p-6 border bg-white/50 dark:bg-gray-900/50 hover:shadow-lg transition-shadow">
  <div className="flex items-center gap-2 mb-3">
    <Icon className="h-5 w-5 text-primary" />
    <h3 className="text-lg font-semibold">Feature Title</h3>
  </div>
  <p className="text-sm text-muted-foreground">Feature description explaining the benefit.</p>
</Card>
```

#### CTA Button

```tsx
<Button size="lg" className="bg-primary hover:bg-primary/90">
  Get Started
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

### Dark Mode Support

**Always use semantic colors:**

```tsx
// ✅ Good - adapts to theme
className = 'bg-card text-foreground border'
className = 'text-muted-foreground'
className = 'bg-primary text-primary-foreground'

// ❌ Bad - hardcoded colors
className = 'bg-white text-black'
className = 'bg-gray-100'
```

**Dark mode specific overrides:**

```tsx
className = 'bg-white dark:bg-gray-900'
className = 'border-gray-200 dark:border-gray-800'
className = 'text-gray-900 dark:text-gray-100'
```

### Accessibility

**ARIA Labels:**

```tsx
<button aria-label="Previous slide">
  <ChevronLeft />
</button>

<button aria-label="Go to slide 1">
  <span className="sr-only">Slide 1</span>
</button>
```

**Focus States:**

```tsx
className = 'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
className = 'focus-visible:ring-2 focus-visible:ring-primary'
```

**Semantic HTML:**

- Use `<section>` for page sections
- Use `<h1>` - `<h6>` in proper hierarchy
- Use `<button>` for interactions, `<a>` for navigation
- Use `<article>` for feature cards

---

## Animation Patterns

### Framer Motion Setup

**Import:**

```tsx
import { motion, AnimatePresence } from 'framer-motion'
```

### Basic Animations

#### Fade In

```tsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
  {/* Content */}
</motion.div>
```

#### Slide In (from bottom)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  {/* Content */}
</motion.div>
```

#### Scale In

```tsx
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

### Advanced Patterns

#### Staggered Children

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

<motion.div variants={containerVariants} initial="hidden" animate="show">
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
  <motion.div variants={itemVariants}>Item 3</motion.div>
</motion.div>
```

#### Scroll-Triggered Animation

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-50px' }}
  transition={{ duration: 0.6 }}
>
  {/* Content appears when scrolled into view */}
</motion.div>
```

#### Hover Animation

```tsx
<motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
  {/* Content lifts on hover */}
</motion.div>
```

#### Entrance/Exit Animation (for modals, slides)

```tsx
<AnimatePresence mode="wait">
  {isVisible && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {/* Content */}
    </motion.div>
  )}
</AnimatePresence>
```

### Animation Timing

**Duration Guidelines:**

- **Micro-interactions:** 0.15s - 0.3s (button hovers, toggles)
- **Component transitions:** 0.3s - 0.5s (cards appearing, fades)
- **Slide transitions:** 0.5s - 0.7s (carousel, page sections)
- **Loading states:** 2s - 6s (progress bars, counters)

**Easing:**

```tsx
// Default (smooth)
transition={{ duration: 0.5 }}

// Bouncy (spring)
transition={{ type: "spring", stiffness: 300, damping: 25 }}

// Custom cubic-bezier
transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
```

### Performance Tips

1. **Use `transform` and `opacity`** - These are GPU-accelerated

   ```tsx
   // ✅ Good
   animate={{ opacity: 1, x: 0, scale: 1 }}

   // ❌ Bad
   animate={{ width: "100%", height: "200px" }}
   ```

2. **Avoid animating `height` and `width`** - Use `scale` or `transform` instead

3. **Use `will-change` sparingly**

   ```tsx
   style={{ willChange: "transform" }}
   ```

4. **Cleanup animations on unmount**
   ```tsx
   useEffect(() => {
     const animation = controls.start(...)
     return () => animation.stop()
   }, [])
   ```

---

## Code Examples

### Complete Slide Template

```tsx
// Example: Processing/Loading Slide
const SlideProcessingDemo = () => {
  const [progress, setProgress] = useState(0)
  const [stage, setStage] = useState(0)

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 5
      })
    }, 150)

    // Stage rotation
    const stageInterval = setInterval(() => {
      setStage(prev => (prev + 1) % stages.length)
    }, 2000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(stageInterval)
    }
  }, [])

  const stages = ['Processing your data...', 'Analyzing patterns...', 'Generating insights...']

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-500/5 to-accent/5 flex items-center justify-center p-8"
    >
      <div className="max-w-md w-full space-y-6">
        {/* Title & Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <Badge className="mb-3 bg-green-500">Processing</Badge>
          <h3 className="text-xl font-bold">AI Analysis in Progress</h3>
          <p className="text-xs text-muted-foreground mt-1">This will take just a moment</p>
        </motion.div>

        {/* Spinner */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Loader2 className="h-16 w-16 text-primary animate-spin" />
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-2 bg-white/50 dark:bg-gray-900/50 p-4 rounded-lg border"
        >
          <div className="flex justify-between text-xs">
            <span>Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <motion.p
            key={stage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-muted-foreground text-center"
          >
            {stages[stage]}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}
```

### Reusable Animation Variants

```tsx
// Create a file: lib/animation-variants.ts

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const slideInFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// Usage:
import { slideInFromRight } from '@/lib/animation-variants'

;<motion.div {...slideInFromRight} transition={{ duration: 0.5 }}>
  {/* Content */}
</motion.div>
```

### Utility Hook for Countdown Timer

```tsx
// lib/hooks/useCountUp.ts
import { useState, useEffect } from "react"

export const useCountUp = (
  target: number,
  duration: number = 2000,
  start: boolean = true
) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    const increment = target / (duration / 50)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [target, duration, start])

  return count
}

// Usage:
const score = useCountUp(87, 2000)
<div className="text-4xl font-bold">{score}/100</div>
```

---

## Maintenance & Updates

### When to Update Feature Pages

1. **Feature enhancements** - Update carousel to show new capabilities
2. **UI changes** - Align demo with actual platform UI
3. **Performance issues** - Optimize heavy animations
4. **User feedback** - Improve clarity or add requested information
5. **SEO improvements** - Update keywords, descriptions
6. **A/B test results** - Refine messaging based on data

### Version Control

**Commit Message Format:**

```
feat(marketing): add [feature-name] landing page
fix(marketing): correct carousel animation timing on [page]
update(marketing): refresh [feature] screenshots
refactor(marketing): optimize carousel component
```

### Analytics Tracking

**Key Metrics to Track:**

- Page views
- Time on page
- Scroll depth
- CTA click-through rates
- Carousel interaction rates (slide changes, manual navigation)
- Bounce rate
- Conversion rate (page → signup)

**Implementation (Google Analytics 4):**

```tsx
// Add to feature-content.tsx
useEffect(() => {
  // Track page view
  gtag('event', 'page_view', {
    page_title: '[Feature Name] Landing Page',
    page_location: window.location.href,
  })
}, [])

// Track CTA clicks
const handleCTAClick = () => {
  gtag('event', 'cta_click', {
    feature_name: '[feature-name]',
    button_location: 'hero',
  })
  // Navigate to signup
}

// Track carousel interactions
const handleSlideChange = (slideIndex: number) => {
  gtag('event', 'carousel_interaction', {
    feature_name: '[feature-name]',
    slide_number: slideIndex + 1,
  })
}
```

### Documentation Updates

Keep this documentation updated when:

- Creating new feature pages (add to examples)
- Discovering new animation patterns (add to patterns)
- Implementing new carousel types (add templates)
- Learning SEO best practices (update guidelines)
- Receiving user feedback (add to considerations)

### Testing Checklist Template

```markdown
## Feature Page Testing Checklist: [Feature Name]

### Functionality

- [ ] Page loads without errors
- [ ] All images load correctly
- [ ] Carousel auto-plays smoothly
- [ ] Manual navigation works (arrows, dots, keyboard)
- [ ] All CTAs navigate correctly
- [ ] Forms submit successfully (if applicable)

### Performance

- [ ] Lighthouse Performance score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] No console errors or warnings
- [ ] Animations run at 60fps

### Responsive Design

- [ ] Mobile (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (769px - 1920px)
- [ ] Ultra-wide (> 1920px)
- [ ] Touch interactions work on mobile

### Accessibility

- [ ] Keyboard navigation functional
- [ ] Screen reader compatible
- [ ] ARIA labels present and correct
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA

### SEO

- [ ] Meta title present and optimized
- [ ] Meta description present (150-160 chars)
- [ ] Open Graph tags correct
- [ ] Twitter Card tags correct
- [ ] Canonical URL set
- [ ] Image alt text present
- [ ] H1-H6 hierarchy correct
- [ ] robots.txt allows indexing

### Cross-Browser

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Dark Mode

- [ ] All text readable
- [ ] Images/icons visible
- [ ] Gradients appropriate
- [ ] No white flashes
- [ ] Smooth theme transitions
```

---

## Quick Reference

### File Locations

```
marketing-site/
├── app/
│   └── [feature-name]/
│       ├── page.tsx              # Server component with metadata
│       └── feature-content.tsx   # Client component with UI
├── components/
│   ├── navbar.tsx               # Add nav link here
│   └── ui/                      # Reusable UI components
├── public/
│   └── og-[feature-name].jpg    # Open Graph image
└── docs/
    └── FEATURE_LANDING_PAGES.md # This file
```

### Essential Imports

```tsx
// Server Component (page.tsx)
import type { Metadata } from "next"
import FeatureContent from "./feature-content"

// Client Component (feature-content.tsx)
"use client"
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"
import { [Icons] } from "lucide-react"
```

### Carousel Skeleton

```tsx
const FeatureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play logic
  // Navigation functions

  return (
    <div className="relative w-full aspect-[4/3] rounded-lg shadow-2xl overflow-hidden border bg-card">
      <AnimatePresence mode="wait">{/* Slides */}</AnimatePresence>
      {/* Navigation Controls */}
    </div>
  )
}
```

### Common Issues & Solutions

**Issue:** Carousel not auto-playing
**Solution:** Check `isAutoPlaying` state and `useEffect` cleanup

**Issue:** Animations janky on mobile
**Solution:** Reduce animation complexity, use `transform` instead of `width/height`

**Issue:** Dark mode colors wrong
**Solution:** Use semantic color tokens (`bg-card`, `text-foreground`)

**Issue:** Page loading slowly
**Solution:** Check image sizes, reduce animation complexity, code-split large components

**Issue:** Metadata not appearing in social shares
**Solution:** Verify Open Graph image exists, clear social media cache

---

## Conclusion

Feature landing pages are a powerful way to showcase new capabilities and drive user engagement. By following these guidelines and patterns, you can create compelling, performant, and accessible landing pages that convert visitors into users.

Remember:

- **Start with user journey** - Map out the workflow first
- **Borrow from actual UI** - Use real components, not placeholders
- **Animate with purpose** - Every animation should demonstrate value
- **Test thoroughly** - Across devices, browsers, and accessibility tools
- **Iterate based on data** - Monitor analytics and user feedback

For questions or suggestions, update this documentation as the pattern evolves!

---

**Documentation Version:** 1.0
**Last Updated:** 2025-11-27
**Author:** CareerLead AI Development Team
**Status:** ✅ Production Ready
