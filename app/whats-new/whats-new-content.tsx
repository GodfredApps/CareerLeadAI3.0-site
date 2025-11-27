'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  ArrowRight,
  FileText,
  Sparkles,
  Download,
  Copy,
  Layout,
  Smartphone,
  CheckCircle,
  Navigation,
  ChevronLeft,
  ChevronRight,
  Upload,
  Loader2,
  ThumbsUp,
  AlertCircle,
  BarChart3,
  Edit,
  X,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsNewContent() {
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
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              Latest Updates
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              What's New at CareerLead AI
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Discover the powerful new features we've built to supercharge your career journey and
              help you land your dream job.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`${process.env.NEXT_PUBLIC_APP_URL}/resume-review`}>
                  Try Resume Review <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`}>Explore Dashboard</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Feature - Resume Review */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex-1 space-y-6">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-sm font-semibold text-accent"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4" />
                NEW FEATURE
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                AI-Powered Resume Review
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Upload your resume and get instant, comprehensive AI analysis. Our advanced system
                evaluates your resume across multiple dimensions, provides an overall score,
                identifies strengths and weaknesses, and gives you actionable suggestions to make
                your resume stand out to employers.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <FeatureBadge
                  icon={<CheckCircle className="h-5 w-5" />}
                  text="Multi-dimensional analysis"
                />
                <FeatureBadge
                  icon={<CheckCircle className="h-5 w-5" />}
                  text="Instant performance score"
                />
                <FeatureBadge
                  icon={<CheckCircle className="h-5 w-5" />}
                  text="Actionable suggestions"
                />
                <FeatureBadge
                  icon={<CheckCircle className="h-5 w-5" />}
                  text="Downloadable reports"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href={`${process.env.NEXT_PUBLIC_APP_URL}/resume-review`}>
                    Review Your Resume Now <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="flex-1"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <ScreenshotCarousel />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More New Features & Improvements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've added several powerful features to make your career journey smoother and more
              effective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Download className="h-10 w-10 text-primary" />}
              title="Download Resume Reports"
              description="Save comprehensive, formatted text reports of your resume analysis. Keep them for reference, share with mentors, or track your progress over time."
              delay={0.1}
            />
            <FeatureCard
              icon={<Copy className="h-10 w-10 text-primary" />}
              title="Apply Suggestions Instantly"
              description="Our new interactive modal lets you copy AI-powered resume improvements with a single click. Individual or bulk copy - your choice!"
              delay={0.2}
            />
            <FeatureCard
              icon={<Layout className="h-10 w-10 text-primary" />}
              title="Modern Sidebar Navigation"
              description="Experience our completely redesigned workspace with a professional, collapsible sidebar. Navigate effortlessly between all your tools."
              delay={0.3}
            />
            <FeatureCard
              icon={<Smartphone className="h-10 w-10 text-primary" />}
              title="Enhanced Mobile Experience"
              description="Enjoy a cleaner, more intuitive mobile interface with our CareerLead AI logo visible at all times. Access all features seamlessly on any device."
              delay={0.4}
            />
            <FeatureCard
              icon={<CheckCircle className="h-10 w-10 text-primary" />}
              title="PDF Processing Fixed"
              description="We've completely rebuilt PDF processing using advanced AI technology. Upload any PDF resume with confidence - it will be analyzed accurately."
              delay={0.5}
            />
            <FeatureCard
              icon={<Navigation className="h-10 w-10 text-primary" />}
              title="Smoother Navigation"
              description="Fixed several navigation quirks including the View History button and mobile menu behavior. Everything now works exactly as you'd expect."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* How Resume Review Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Resume Review Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get professional-grade resume analysis in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Upload Your Resume"
              description="Support for PDF, DOCX, and TXT formats. Simply drag and drop or browse to upload your resume."
              delay={0.1}
            />
            <StepCard
              number="2"
              title="AI Analyzes in Seconds"
              description="Our advanced AI evaluates your resume across multiple criteria including content, formatting, keywords, and impact."
              delay={0.2}
            />
            <StepCard
              number="3"
              title="Get Actionable Insights"
              description="Receive an overall score, detailed strengths and weaknesses, and specific suggestions you can implement immediately."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Upgrade Your Resume?</h2>
            <p className="text-lg max-w-2xl opacity-90">
              Join thousands of professionals who have improved their resumes and landed their dream
              jobs with CareerLead AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <a href={`${process.env.NEXT_PUBLIC_APP_URL}/resume-review`}>
                  Try Resume Review Free
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <a href={`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`}>Explore All Features</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Screenshot Carousel Component with Interactive Demos
const ScreenshotCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 4)
    }, 6000) // 6 seconds per slide for more complex animations

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentSlide(prev => (prev - 1 + 4) % 4)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide(prev => (prev + 1) % 4)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full aspect-[4/3] rounded-lg shadow-2xl overflow-hidden border bg-card">
      <AnimatePresence mode="wait">
        {currentSlide === 0 && <Slide1UploadDemo key="slide-1" />}
        {currentSlide === 1 && <Slide2AnalyzingDemo key="slide-2" />}
        {currentSlide === 2 && <Slide3ResultsDemo key="slide-3" />}
        {currentSlide === 3 && <Slide4ExportDemo key="slide-4" />}
      </AnimatePresence>

      {/* Navigation Arrows */}
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

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {[0, 1, 2, 3].map(index => (
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

      {/* Auto-play control */}
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

// Slide 1: Upload Demo
const Slide1UploadDemo = () => {
  const [showFile, setShowFile] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowFile(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8"
    >
      <div className="max-w-md w-full space-y-4">
        {/* Title & Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <Badge className="mb-3 bg-primary">Step 1</Badge>
          <h3 className="text-xl font-bold">Upload Your Resume</h3>
          <p className="text-xs text-muted-foreground mt-1">Drag & drop or browse to upload</p>
        </motion.div>

        {/* Mini Upload Zone */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-2 border-dashed border-primary/40 rounded-lg p-6 text-center bg-white/50 dark:bg-gray-900/50"
        >
          <motion.div
            animate={{
              y: showFile ? [0, -10, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
            className="mx-auto bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3"
          >
            <FileText className="h-6 w-6 text-primary" />
          </motion.div>
          <p className="text-xs font-medium mb-2">Drop your file here</p>
          <Button size="sm" className="text-xs">
            <Upload className="h-3 w-3 mr-1" />
            Browse Files
          </Button>
        </motion.div>

        {/* File Card Appears */}
        <AnimatePresence>
          {showFile && (
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="p-3 bg-white dark:bg-gray-800 rounded-lg border shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs font-medium">resume.pdf</p>
                  <p className="text-[10px] text-muted-foreground">1.2 MB</p>
                </div>
              </div>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Analyze Button */}
        {showFile && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-end"
          >
            <Button size="sm" className="animate-pulse">
              Analyze Resume
              <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

// Slide 2: Analyzing Demo
const Slide2AnalyzingDemo = () => {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [stage, setStage] = useState(0)

  useEffect(() => {
    // Upload progress
    const uploadInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(uploadInterval)
          return 100
        }
        return prev + 10
      })
    }, 100)

    // Analysis progress after upload
    const analysisTimeout = setTimeout(() => {
      const analysisInterval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(analysisInterval)
            return 100
          }
          return prev + 5
        })
      }, 150)
    }, 1200)

    // Stage messages
    const stageInterval = setInterval(() => {
      setStage(prev => (prev + 1) % 3)
    }, 1500)

    return () => {
      clearInterval(uploadInterval)
      clearTimeout(analysisTimeout)
      clearInterval(stageInterval)
    }
  }, [])

  const stageMessages = [
    'Extracting resume sections...',
    'Evaluating content and structure...',
    'Generating recommendations...',
  ]

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
          <Badge className="mb-3 bg-green-500">Analyzing</Badge>
          <h3 className="text-xl font-bold">AI Analysis in Progress</h3>
          <p className="text-xs text-muted-foreground mt-1">Processing your resume</p>
        </motion.div>

        {/* Spinner */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 0.8, rotate: { repeat: Infinity, duration: 2, ease: 'linear' } }}
          className="flex justify-center"
        >
          <div className="relative w-16 h-16">
            <Loader2 className="h-16 w-16 text-primary animate-spin" />
          </div>
        </motion.div>

        {/* Progress Bars */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 bg-white/50 dark:bg-gray-900/50 p-4 rounded-lg border"
        >
          {uploadProgress < 100 ? (
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Uploading document</span>
                <span className="font-medium">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Analyzing content</span>
                <span className="font-medium">{analysisProgress}%</span>
              </div>
              <Progress value={analysisProgress} className="h-2" />
              <motion.p
                key={stage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-muted-foreground text-center"
              >
                {stageMessages[stage]}
              </motion.p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

// Slide 3: Results Demo
const Slide3ResultsDemo = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 to-purple-500/5 flex items-center justify-center p-6"
    >
      <div className="max-w-2xl w-full space-y-4">
        {/* Title & Score */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-4"
        >
          <Badge className="mb-2 bg-primary">Complete</Badge>
          <h3 className="text-lg font-bold">Comprehensive Results</h3>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="mt-3"
          >
            <div className="text-4xl font-bold text-primary">{score}/100</div>
            <p className="text-xs text-muted-foreground">Overall Score</p>
          </motion.div>
        </motion.div>

        {/* Mini Cards Grid */}
        <div className="grid grid-cols-3 gap-2">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-3 border bg-white/50 dark:bg-gray-900/50">
              <div className="flex items-center gap-2 mb-2">
                <ThumbsUp className="h-3 w-3 text-green-500" />
                <p className="text-[10px] font-medium">Strengths</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-start gap-1">
                  <CheckCircle className="h-2 w-2 text-green-500 mt-0.5" />
                  <p className="text-[9px] text-muted-foreground leading-tight">
                    Strong action verbs
                  </p>
                </div>
                <div className="flex items-start gap-1">
                  <CheckCircle className="h-2 w-2 text-green-500 mt-0.5" />
                  <p className="text-[9px] text-muted-foreground leading-tight">
                    Quantified results
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="p-3 border bg-white/50 dark:bg-gray-900/50">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-3 w-3 text-amber-500" />
                <p className="text-[10px] font-medium">Improve</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-start gap-1">
                  <AlertCircle className="h-2 w-2 text-amber-500 mt-0.5" />
                  <p className="text-[9px] text-muted-foreground leading-tight">Add keywords</p>
                </div>
                <div className="flex items-start gap-1">
                  <AlertCircle className="h-2 w-2 text-amber-500 mt-0.5" />
                  <p className="text-[9px] text-muted-foreground leading-tight">Formatting</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="p-3 border bg-white/50 dark:bg-gray-900/50">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-3 w-3 text-blue-500" />
                <p className="text-[10px] font-medium">Scores</p>
              </div>
              <div className="space-y-1.5">
                <div className="space-y-0.5">
                  <div className="flex justify-between text-[9px]">
                    <span>Summary</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-1" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex justify-between text-[9px]">
                    <span>Experience</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-1" />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Slide 4: Export Demo
const Slide4ExportDemo = () => {
  const [showModal, setShowModal] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent/5 to-primary/5 flex items-center justify-center p-8"
    >
      <div className="max-w-md w-full space-y-6">
        {/* Title & Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <Badge className="mb-3 bg-accent">Export</Badge>
          <h3 className="text-xl font-bold">Download & Apply</h3>
          <p className="text-xs text-muted-foreground mt-1">Get your insights instantly</p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-3 bg-white/50 dark:bg-gray-900/50 p-6 rounded-lg border"
        >
          <Button className="w-full" size="sm">
            <Download className="h-3 w-3 mr-2" />
            Download Report
          </Button>
          <Button className="w-full" variant="outline" size="sm" onClick={handleCopy}>
            {copied ? (
              <>
                <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Edit className="h-3 w-3 mr-2" />
                Apply Suggestions
              </>
            )}
          </Button>
        </motion.div>

        {/* Mini Modal Preview */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white dark:bg-gray-800 rounded-lg border shadow-xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold">Suggestion Preview</p>
                <button className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded p-1">
                  <X className="h-3 w-3" />
                </button>
              </div>
              <div className="space-y-2">
                <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                  <p className="text-[9px] text-green-600 dark:text-green-400 mb-1">Improved:</p>
                  <p className="text-[10px] leading-tight">
                    "Led team of 8 engineers, increasing deployment speed by 40%"
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full text-xs h-7"
                  onClick={handleCopy}
                >
                  <Copy className="h-2.5 w-2.5 mr-1" />
                  Copy to Clipboard
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// Memoized components
const FeatureBadge = React.memo(({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="text-primary">{icon}</div>
      <span className="font-medium">{text}</span>
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

const StepCard = React.memo(
  ({
    number,
    title,
    description,
    delay = 0,
  }: {
    number: string
    title: string
    description: string
    delay?: number
  }) => {
    return (
      <motion.div
        className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {number}
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </motion.div>
    )
  }
)
StepCard.displayName = 'StepCard'
