# Feature Landing Page Quick-Start Template

This is a ready-to-use template for creating new feature landing pages. Copy the code below and replace the placeholders with your feature details.

## Step 1: Create Directory

```bash
cd marketing-site/app
mkdir [your-feature-name]
cd [your-feature-name]
```

## Step 2: Create page.tsx

**File:** `app/[your-feature-name]/page.tsx`

```tsx
import type { Metadata } from 'next'
import FeatureContent from './feature-content'

export const metadata: Metadata = {
  title: '[Feature Name] - [Key Benefit] | CareerLead AI',
  description: '[150-160 character description of your feature and its benefits]',
  keywords: '[primary keyword], [secondary keyword], [feature type], CareerLead AI, career tools',
  openGraph: {
    title: '[Feature Name] - [Short Benefit]',
    description: '[Compelling description for social sharing - what makes this feature valuable?]',
    url: 'https://careerlead.ai/[your-feature-name]',
    siteName: 'CareerLead AI',
    images: [
      {
        url: '/og-[your-feature-name].jpg',
        width: 1200,
        height: 630,
        alt: '[Feature Name] - [Visual Description]',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Feature Name] - CareerLead AI',
    description: '[Twitter-optimized description under 200 characters]',
    images: ['/og-[your-feature-name].jpg'],
  },
  alternates: {
    canonical: '/[your-feature-name]',
  },
}

export default function FeaturePage() {
  return <FeatureContent />
}
```

## Step 3: Create feature-content.tsx

**File:** `app/[your-feature-name]/feature-content.tsx`

```tsx
'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  ArrowRight,
  // Add your feature-specific icons here
  CheckCircle,
  Sparkles,
  // etc.
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FeatureContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 text-sm px-4 py-2">🎉 New Feature</Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              [Your Feature Headline]
              <span className="block text-primary mt-2">[Key Benefit or Value Prop]</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              [2-3 sentences explaining what your feature does and why it matters]
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="text-lg" asChild>
                <a href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>
                  Try It Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="#demo">See How It Works</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Demo Section */}
      <section id="demo" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Feature Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Badge>Introducing</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">[Feature Name in Action]</h2>
              <p className="text-lg text-muted-foreground">
                [Paragraph explaining how the feature works and what makes it special]
              </p>

              {/* Feature Highlights */}
              <div className="space-y-4">
                <FeatureBadge icon={<CheckCircle className="h-5 w-5" />} text="[Benefit 1]" />
                <FeatureBadge icon={<CheckCircle className="h-5 w-5" />} text="[Benefit 2]" />
                <FeatureBadge icon={<CheckCircle className="h-5 w-5" />} text="[Benefit 3]" />
              </div>

              <Button size="lg" asChild>
                <a href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Right: Interactive Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FeatureCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              [Brief introduction to the detailed features below]
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-primary" />}
              title="[Feature Detail 1]"
              description="[Description of this specific capability]"
              delay={0}
            />
            <FeatureCard
              icon={<CheckCircle className="h-8 w-8 text-primary" />}
              title="[Feature Detail 2]"
              description="[Description of this specific capability]"
              delay={0.1}
            />
            <FeatureCard
              icon={<ArrowRight className="h-8 w-8 text-primary" />}
              title="[Feature Detail 3]"
              description="[Description of this specific capability]"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Ready to [Achieve Outcome]?</h2>
            <p className="text-lg text-muted-foreground">
              [Final persuasive message encouraging signup]
            </p>
            <Button size="lg" className="text-lg" asChild>
              <a href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// ============================================
// CAROUSEL COMPONENT
// ============================================

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

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Next Button */}
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

      {/* Auto-play Toggle */}
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

// ============================================
// SLIDE COMPONENTS
// Replace these with your feature-specific slides
// ============================================

// SLIDE 1: Input/Upload Pattern
const Slide1Demo = () => {
  // Add your slide logic here
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8"
    >
      <div className="text-center space-y-4">
        <Badge>Step 1</Badge>
        <h3 className="text-xl font-bold">[Slide 1 Title]</h3>
        <p className="text-sm text-muted-foreground">[Slide 1 Description]</p>
        {/* Add your interactive demo elements */}
      </div>
    </motion.div>
  )
}

// SLIDE 2: Processing Pattern
const Slide2Demo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-500/5 to-accent/5 flex items-center justify-center p-8"
    >
      <div className="text-center space-y-4">
        <Badge className="bg-green-500">Processing</Badge>
        <h3 className="text-xl font-bold">[Slide 2 Title]</h3>
        <p className="text-sm text-muted-foreground">[Slide 2 Description]</p>
        {/* Add your processing animation */}
      </div>
    </motion.div>
  )
}

// SLIDE 3: Results Pattern
const Slide3Demo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 to-purple-500/5 flex items-center justify-center p-8"
    >
      <div className="text-center space-y-4">
        <Badge>Complete</Badge>
        <h3 className="text-xl font-bold">[Slide 3 Title]</h3>
        <p className="text-sm text-muted-foreground">[Slide 3 Description]</p>
        {/* Add your results display */}
      </div>
    </motion.div>
  )
}

// SLIDE 4: Action/Export Pattern
const Slide4Demo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent/5 to-primary/5 flex items-center justify-center p-8"
    >
      <div className="text-center space-y-4">
        <Badge className="bg-accent">Export</Badge>
        <h3 className="text-xl font-bold">[Slide 4 Title]</h3>
        <p className="text-sm text-muted-foreground">[Slide 4 Description]</p>
        {/* Add your export/action UI */}
      </div>
    </motion.div>
  )
}

// ============================================
// REUSABLE COMPONENTS
// ============================================

const FeatureBadge = React.memo(({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="text-primary">{icon}</div>
      <span className="text-base">{text}</span>
    </div>
  )
})
FeatureBadge.displayName = 'FeatureBadge'

const FeatureCard = React.memo(
  ({
    icon,
    title,
    description,
    delay = 0,
  }: {
    icon: React.ReactNode
    title: string
    description: string
    delay?: number
  }) => {
    return (
      <motion.div
        className="flex flex-col items-start p-6 bg-card rounded-lg shadow-sm border hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -4 }}
      >
        <div className="mb-4 p-3 bg-primary/10 rounded-lg">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </motion.div>
    )
  }
)
FeatureCard.displayName = 'FeatureCard'
```

## Step 4: Add to Navigation (Optional)

**File:** `components/navbar.tsx`

Find the `getNavItems` function and add your page:

```tsx
const getNavItems = () => {
  return [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: "What's New", href: '/whats-new' },
    { name: '[Feature Name]', href: '/[your-feature-name]' }, // Add here
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
  ]
}
```

## Step 5: Create Open Graph Image

1. Create a 1200x630px image
2. Save as: `public/og-[your-feature-name].jpg`
3. Include: Feature name + key benefit + CareerLead AI logo

## Step 6: Customize Your Slides

Replace the placeholder slide components with your feature's actual workflow. Reference these patterns:

### Pattern 1: Upload/Input (Slide 1)

- File drop zone
- Form input
- Data entry interface

### Pattern 2: Processing (Slide 2)

- Loading spinner
- Progress bars
- Status messages

### Pattern 3: Results (Slide 3)

- Score display
- Data visualization
- Cards with insights

### Pattern 4: Action/Export (Slide 4)

- Download buttons
- Copy functionality
- Share options

## Testing Checklist

Before deploying, verify:

- [ ] Page loads without errors
- [ ] All placeholders replaced with actual content
- [ ] Carousel auto-plays smoothly
- [ ] Manual navigation works
- [ ] Responsive on mobile
- [ ] Dark mode works
- [ ] All CTAs link correctly
- [ ] SEO metadata is complete
- [ ] Open Graph image exists and loads

## Deploy

```bash
# Test locally
npm run dev

# Check on http://localhost:3001/[your-feature-name]

# Build and deploy
npm run build
firebase deploy --only hosting:marketing-site
```

---

**For detailed explanations and advanced patterns, see:** `FEATURE_LANDING_PAGES.md`
