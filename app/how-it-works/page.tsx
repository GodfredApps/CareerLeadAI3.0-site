import type { Metadata } from "next"
import { Compass, UserCircle, LineChart, MessageSquare, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "How AI Career Coaching Works - Step-by-Step Guide | Ghana - Africa",
  description: "Learn how CareerLead AI's revolutionary platform provides personalized career coaching, AI-generated career paths, and professional development for Ghana's workforce. Start your journey today.",
  keywords: "AI career coaching, how AI coaching works, AI career guidance, career development process Ghana, AI career navigator, professional development Africa, career path generator",
  openGraph: {
    title: "How AI Career Coaching Works - Step-by-Step Guide | Ghana - Africa", 
    description: "Learn how CareerLead AI's revolutionary platform provides personalized career coaching, AI-generated career paths, and professional development for Ghana's workforce.",
    url: "https://careerlead.ai/how-it-works",
    type: "website",
  },
}

export default function HowItWorksPage() {
  return (
    <div className="container max-w-5xl py-12 px-4 md:py-16 md:px-6">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-full bg-primary/10 p-3">
            <Compass className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How CareerLead AI Works</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Your AI-powered companion for navigating your career journey with confidence.
          </p>
        </div>

        <div className="grid gap-12">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 h-10 w-10 mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Create Your Profile</h2>
              <p className="text-muted-foreground mb-4">
                Start by building your comprehensive career profile. Share your education, work experience, skills,
                values, and passions. The more information you provide, the more personalized your guidance will be.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <UserCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Complete skill assessments</span>
                </li>
                <li className="flex items-start">
                  <UserCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Define your career values</span>
                </li>
                <li className="flex items-start">
                  <UserCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Identify your passions and interests</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-muted rounded-lg p-6 h-64 flex items-center justify-center">
              <UserCircle className="h-24 w-24 text-primary/40" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-muted rounded-lg p-6 h-64 flex items-center justify-center">
              <LineChart className="h-24 w-24 text-primary/40" />
            </div>
            <div>
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 h-10 w-10 mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Discover Career Paths</h2>
              <p className="text-muted-foreground mb-4">
                Our AI analyzes your profile and generates personalized career path recommendations that align with your
                skills, values, and goals. Explore detailed information about each path, including required skills,
                growth potential, and day-to-day responsibilities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <LineChart className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Receive tailored career recommendations</span>
                </li>
                <li className="flex items-start">
                  <LineChart className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Compare different career options</span>
                </li>
                <li className="flex items-start">
                  <LineChart className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Understand skill gaps and opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 h-10 w-10 mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Get AI Coaching</h2>
              <p className="text-muted-foreground mb-4">
                Chat with our AI career coach to get personalized advice on specific career challenges, interview
                preparation, resume building, networking strategies, and more. Available 24/7, our coach provides
                actionable guidance whenever you need it.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Ask specific career questions</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Receive personalized advice</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Practice interview responses</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-muted rounded-lg p-6 h-64 flex items-center justify-center">
              <MessageSquare className="h-24 w-24 text-primary/40" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-muted rounded-lg p-6 h-64 flex items-center justify-center">
              <Lightbulb className="h-24 w-24 text-primary/40" />
            </div>
            <div>
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 h-10 w-10 mb-4">
                <span className="text-primary font-bold">4</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Track Your Progress</h2>
              <p className="text-muted-foreground mb-4">
                Set career goals and track your progress over time. Our dashboard provides insights into your skill
                development, achievements, and areas for improvement. Celebrate milestones and stay motivated on your
                career journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Set and monitor career goals</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Visualize your career growth</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-muted-foreground">Receive progress-based recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take Control of Your Career?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who are using CareerLead AI to navigate their career journeys with
            confidence. Get started today and discover the career path that&apos;s right for you.
          </p>
          <div className="flex justify-center">
            <a
              href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}