import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Brain, Compass, MessageCircle, Target, Users } from "lucide-react"
import Image from "next/image"
import { IMAGES } from "@/lib/supabase-storage"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex flex-col space-y-4 md:space-y-6 md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Navigate Your Career Path with AI-Powered Guidance
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                CareerLead AI analyzes your unique profile to suggest personalized career paths and provide interactive
                coaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild>
                  <a href="/how-it-works/">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src={IMAGES.dashboard}
                  alt="AI Career Dashboard - Personalized insights for African professionals"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Ideal Career Path</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform analyzes your values, passions, education, and experience to provide personalized
              career guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Compass className="h-10 w-10 text-primary" />}
              title="Personalized Career Paths"
              description="Receive three tailored career path suggestions based on your unique profile and preferences."
            />
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-primary" />}
              title="AI-Powered Analysis"
              description="Our advanced AI analyzes your values, passions, education, and work experience to find the perfect match."
            />
            <FeatureCard
              icon={<MessageCircle className="h-10 w-10 text-primary" />}
              title="Interactive AI Coach"
              description="Chat with our AI career coach for guidance, advice, and answers to your career questions."
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-primary" />}
              title="Actionable Steps"
              description="Get clear, practical steps to pursue each career path, including education, skills, and networking advice."
            />
            <FeatureCard
              icon={<Target className="h-10 w-10 text-primary" />}
              title="Goal Setting & Tracking"
              description="Set career milestones and track your progress with our intelligent goal management system and achievement insights."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Industry Insights"
              description="Access real-time market trends, salary data, and industry growth projections to make informed career decisions."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to discover your ideal career path with CareerLead AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard
              number="1"
              title="Create Your Profile"
              description="Sign up and build your comprehensive profile with your background information."
            />
            <StepCard
              number="2"
              title="Share Your Details"
              description="Input your values, passions, education, and work experience."
            />
            <StepCard
              number="3"
              title="Receive AI Analysis"
              description="Our AI analyzes your profile to generate personalized career path suggestions."
            />
            <StepCard
              number="4"
              title="Explore & Chat"
              description="Review your career paths and chat with our AI coach for deeper insights."
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>
                Start Your Career Journey <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold ml-2">4.9/5 from 2,500+ users</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how CareerLead AI has helped professionals discover their ideal career paths and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="Kwame Asante"
              role="Fintech Product Manager, Accra"
              content="CareerLead AI helped me transition from banking to fintech in Ghana. The AI understood the local market and guided me to opportunities I never considered."
              rating={5}
            />
            <TestimonialCard
              name="Amina Mohammed"
              role="Renewable Energy Engineer, Lagos"
              content="As a recent graduate in Nigeria, I was overwhelmed by career options. CareerLead AI suggested sustainable energy paths perfect for Africa's growing green economy."
              rating={5}
            />
            <TestimonialCard
              name="Sarah Ochieng"
              role="Digital Marketing Lead, Nairobi"
              content="The platform's understanding of East African tech ecosystem was impressive. It helped me land my dream job in Kenya's thriving startup scene."
              rating={5}
            />
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <a href="/about/">Read More Success Stories</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Find Your Perfect Career?</h2>
            <p className="text-lg max-w-2xl">
              Join thousands of professionals who have discovered their ideal career paths with CareerLead AI.
            </p>
            <Button asChild className="mt-6 bg-white text-primary hover:bg-gray-100">
              <a href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>Get Started For Free</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Memoized components for better performance
const FeatureCard = React.memo(
  ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
    return (
      <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    )
  },
)

FeatureCard.displayName = "FeatureCard"

const StepCard = React.memo(
  ({ number, title, description }: { number: string; title: string; description: string }) => {
    return (
      <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border">
        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    )
  },
)

StepCard.displayName = "StepCard"

const TestimonialCard = React.memo(
  ({
    name,
    role,
    content,
    rating,
  }: {
    name: string
    role: string
    content: string
    rating: number
  }) => {
    return (
      <div className="bg-card p-6 rounded-lg shadow-sm border">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic">&quot;{content}&quot;</p>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm mr-3">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    )
  },
)

TestimonialCard.displayName = "TestimonialCard"