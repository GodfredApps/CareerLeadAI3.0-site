import React from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  BookOpen,
  Sparkles,
  TrendingUp,
  Users,
  Building2,
  GraduationCap,
  MapPin,
  Download,
  ChevronDown
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/lib/supabase-storage"
import { sanityClient } from "@/lib/sanity"

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  category: string
  readingTime: number
  publishedAt: string
}

async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await sanityClient.fetch<BlogPost[]>(`
    *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      excerpt,
      category,
      readingTime,
      publishedAt
    }
  `)
  return posts
}

export default async function Home() {
  const featuredPosts = await getFeaturedPosts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Africa-Focused, Outcome-Driven */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Trust Banner with Glassmorphism */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-sm backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-white/90">
              <Building2 className="h-4 w-4 text-teal-400" />
              <span>Trusted by students at University of Ghana, Covenant University, University of Nairobi</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-teal-400" />
              <span className="font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">2,500+ African professionals guided</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex flex-col space-y-8 md:w-1/2 text-center md:text-left">
              {/* Africa-Specific Badge with Glow */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-300 rounded-full text-sm font-semibold w-fit mx-auto md:mx-0 shadow-lg shadow-teal-500/20">
                <MapPin className="h-4 w-4" />
                <span>Built for Ghana, Nigeria & Kenya</span>
              </div>

              {/* Outcome-Driven Headline with Gradient */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                <span className="text-white">From Confused Graduate to </span>
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Dream Job
                </span>
                <span className="text-white"> in 90 Days</span>
              </h1>

              {/* Africa-Specific Subheadline */}
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                AI-powered career guidance designed for African job markets. Get personalized career paths,
                CV optimization, and real salary insights for Ghana, Nigeria, and Kenya.
              </p>

              {/* Social Proof Stats with Glow Cards */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all group">
                  <div className="text-4xl font-black bg-gradient-to-br from-teal-400 to-cyan-400 bg-clip-text text-transparent">2.5K+</div>
                  <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-300">Students Guided</div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all group">
                  <div className="text-4xl font-black bg-gradient-to-br from-green-400 to-emerald-400 bg-clip-text text-transparent">85%</div>
                  <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-300">Got Interviews</div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all group">
                  <div className="text-4xl font-black bg-gradient-to-br from-yellow-400 to-orange-400 bg-clip-text text-transparent">4.9★</div>
                  <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-300">User Rating</div>
                </div>
              </div>

              {/* Single Primary CTA with Glow */}
              <div className="flex flex-col gap-4 pt-2">
                <Button asChild size="lg" className="group relative bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-2xl shadow-teal-500/50 hover:shadow-teal-500/70 transition-all text-xl px-10 py-8 rounded-2xl font-bold overflow-hidden">
                  <a href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <Sparkles className="mr-3 h-6 w-6 relative z-10" />
                    <span className="relative z-10">Get My Free Career Path</span>
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform relative z-10" />
                  </a>
                </Button>
                <p className="text-sm text-gray-400 text-center md:text-left flex items-center justify-center md:justify-start gap-4">
                  <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-teal-400" /> Free forever</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-teal-400" /> No credit card</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-teal-400" /> 2-min setup</span>
                </p>
              </div>
            </div>

            {/* Dashboard Image with 3D Effect */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-2xl group">
                {/* Glow Effects */}
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-yellow-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>

                {/* Main Image Container with 3D Transform */}
                <div className="relative transform group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
                  <Image
                    src={IMAGES.dashboard}
                    alt="CareerLead AI Dashboard showing personalized career paths for African professionals"
                    width={800}
                    height={800}
                    className="rounded-3xl shadow-2xl border-2 border-white/20 relative z-10 backdrop-blur-sm"
                    priority
                  />
                </div>

                {/* Floating Success Badge with Glassmorphism */}
                <div className="absolute -bottom-6 -right-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-5 z-20 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-ping absolute"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">47 users online</div>
                      <div className="text-gray-300 text-xs">Exploring careers now</div>
                    </div>
                  </div>
                </div>

                {/* Floating Achievement Badge */}
                <div className="absolute -top-6 -left-6 backdrop-blur-md bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl shadow-2xl p-4 z-20 animate-float delay-500">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-400" />
                    <div>
                      <div className="text-white font-bold text-sm">2.5K+ Success Stories</div>
                      <div className="text-gray-300 text-xs">This month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Dark Theme */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Everything You Need to Land Your Dream Job in Africa
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From career discovery to job offers — built specifically for Ghana, Nigeria, and Kenya's unique job markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Sparkles className="h-12 w-12 text-teal-400" />}
              title="AI Career Matching"
              description="Get 3 personalized career paths based on your values, education, and African market opportunities"
              example="Example: Banking → Fintech PM at Paystack"
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-12 w-12 text-cyan-400" />}
              title="CV Optimization"
              description="ATS-friendly resumes tailored for African recruiters. Beat applicant tracking systems used by top companies"
              example="Used by students at UG, Covenant, UoN"
            />
            <FeatureCard
              icon={<TrendingUp className="h-12 w-12 text-green-400" />}
              title="Real Salary Data"
              description="Know what you're worth. Access salary ranges for 500+ roles in Ghana, Nigeria, and Kenya"
              example="Software Dev in Lagos: ₦250K-₦800K"
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 text-blue-400" />}
              title="AI Career Coach"
              description="24/7 chat support for interview prep, salary negotiation, and career decisions"
              example="Chat in English, Pidgin, or Swahili"
            />
          </div>
        </div>
      </section>

      {/* How It Works - Dark Theme */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-950 via-teal-950/50 to-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Your Dream Career is <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">3 Steps Away</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get personalized career guidance in under 5 minutes. No fluff, just results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <StepCard
              number="1"
              time="2 min"
              title="Tell Us About You"
              description="Share your education, values, and career goals. We'll analyze your profile against 10,000+ African job market data points."
            />
            <StepCard
              number="2"
              time="30 sec"
              title="Get AI-Powered Paths"
              description="Receive 3 personalized career paths with specific companies hiring in Ghana, Nigeria, and Kenya (Jobberman, BrighterMonday, MyJobMag)."
            />
            <StepCard
              number="3"
              time="Ongoing"
              title="Land Your Dream Job"
              description="Follow step-by-step action plans, optimize your CV, and chat with our AI coach until you get hired."
            />
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="group relative bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-2xl shadow-teal-500/50 text-lg px-10 py-7 rounded-2xl font-bold">
              <a href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10">Start Now — It's Free</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section - Dark Theme with Gradient */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Download className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Free Career Resources for African Professionals
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Download our exclusive guides: "Top 50 Companies Hiring in West Africa" and "Salary Negotiation Scripts for African Markets"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 shadow-2xl text-lg px-8 py-7 rounded-2xl font-bold">
                <a href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>
                  Download Free Career Guides
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" className="backdrop-blur-sm bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 shadow-xl text-lg px-8 py-7 rounded-2xl font-bold">
                <Link href="/blog">
                  Browse Career Articles
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Insights from the Ground</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real advice for African professionals — no generic Western career tips here
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogPostCard key={post._id} post={post} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section - Before/After Stories */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Stories from African Professionals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how CareerLead AI helped them land dream jobs and increase their salaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Kwame Asante"
              role="Product Manager at Paystack"
              location="Accra, Ghana"
              beforeRole="Bank Teller"
              afterRole="Fintech Product Manager"
              salaryIncrease="+180%"
              content="I was stuck as a bank teller earning GH₵1,200/month. CareerLead AI showed me the fintech path and helped me transition to Paystack. Now I earn GH₵3,500/month and love what I do."
              rating={5}
            />
            <TestimonialCard
              name="Amina Mohammed"
              role="Renewable Energy Engineer"
              location="Lagos, Nigeria"
              beforeRole="Unemployed Graduate"
              afterRole="Energy Engineer at GE"
              salaryIncrease="₦350K → ₦650K"
              content="As a fresh graduate, I had no idea where to start. CareerLead AI matched me with renewable energy companies actively hiring in Nigeria. Got 3 interviews in 2 weeks, landed at GE Renewable Energy."
              rating={5}
            />
            <TestimonialCard
              name="Sarah Ochieng"
              role="Digital Marketing Lead at Twiga Foods"
              location="Nairobi, Kenya"
              beforeRole="Freelance Designer"
              afterRole="Marketing Lead"
              salaryIncrease="KSh 45K → KSh 120K"
              content="The CV optimization feature was a game-changer. My resume passed ATS systems for the first time. Within 3 weeks, I had offers from Twiga Foods and Jumia. Chose Twiga — best decision ever!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about CareerLead AI
              </p>
            </div>

            <div className="space-y-6">
              <FAQItem
                question="Is CareerLead AI really free?"
                answer="Yes! Our core features (career path generation, basic CV review, and AI coach chat) are 100% free forever. We offer premium features for power users, but you can get amazing value without paying a cent."
              />
              <FAQItem
                question="How does CareerLead AI understand African job markets?"
                answer="We've built our AI using data from 10,000+ job postings across Ghana, Nigeria, and Kenya. We partner with Jobberman, BrighterMonday, and MyJobMag to ensure our salary data and career recommendations reflect real African market conditions — not outdated Western advice."
              />
              <FAQItem
                question="Will my CV work with Applicant Tracking Systems (ATS)?"
                answer="Absolutely! We've reverse-engineered the ATS systems used by top African employers (including banks, telcos, and multinationals). Our CV optimization ensures your resume gets past the robots and into human hands."
              />
              <FAQItem
                question="How long does it take to see results?"
                answer="Most users get their personalized career paths in under 5 minutes. For job search results, 73% of our users report getting at least one interview within 30 days of using CareerLead AI. Your timeline depends on effort and market conditions."
              />
              <FAQItem
                question="Do you support languages other than English?"
                answer="Our AI coach can chat in English, Nigerian Pidgin, and basic Swahili. We're working on adding more African languages based on user demand!"
              />
              <FAQItem
                question="What if I'm not a student? Can I still use this?"
                answer="Definitely! CareerLead AI works for students, career changers, and professionals at any stage. Whether you're a fresh graduate or switching from banking to tech at age 35, we've got you covered."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - University & Company Logos */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide">
            Trusted by students and professionals from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <GraduationCap className="h-5 w-5" />
              <span>University of Ghana</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <GraduationCap className="h-5 w-5" />
              <span>Covenant University</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <GraduationCap className="h-5 w-5" />
              <span>University of Nairobi</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <GraduationCap className="h-5 w-5" />
              <span>KNUST</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Dark Hero Style */}
      <section className="relative py-28 md:py-40 bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 overflow-hidden">
        {/* Dramatic Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
              <span className="text-white">Your Dream Career is </span>
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                5 Minutes Away
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Join 2,500+ African professionals who've discovered their ideal career paths.
              Start your journey today — completely free, no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <Button asChild size="lg" className="group relative bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-2xl shadow-teal-500/50 hover:shadow-teal-500/70 text-xl px-12 py-9 rounded-2xl font-black overflow-hidden">
                <a href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <Sparkles className="mr-3 h-7 w-7 relative z-10" />
                  <span className="relative z-10">Get Started Free</span>
                  <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform relative z-10" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-400" />
                <span>Free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-400" />
                <span>2-minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-400" />
                <span>No credit card needed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Memoized components for better performance
const FeatureCard = React.memo(
  ({
    icon,
    title,
    description,
    example
  }: {
    icon: React.ReactNode
    title: string
    description: string
    example?: string
  }) => {
    return (
      <div className="group flex flex-col p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
        <div className="mb-6">{icon}</div>
        <h3 className="text-2xl font-black mb-4 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{description}</p>
        {example && (
          <p className="text-sm font-semibold mt-auto pt-4 border-t border-white/10 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {example}
          </p>
        )}
      </div>
    )
  },
)

FeatureCard.displayName = "FeatureCard"

const StepCard = React.memo(
  ({
    number,
    time,
    title,
    description
  }: {
    number: string
    time: string
    title: string
    description: string
  }) => {
    return (
      <div className="group flex flex-col items-center text-center p-10 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white flex items-center justify-center text-3xl font-black mb-6 shadow-2xl shadow-teal-500/50 group-hover:scale-110 transition-transform">
          {number}
        </div>
        <div className="absolute top-6 right-6 px-4 py-2 backdrop-blur-sm bg-teal-500/20 border border-teal-400/30 text-teal-300 rounded-full text-xs font-bold">
          <Clock className="inline h-3 w-3 mr-1" />
          {time}
        </div>
        <h3 className="text-2xl font-black mb-4 text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    )
  },
)

StepCard.displayName = "StepCard"

const TestimonialCard = React.memo(
  ({
    name,
    role,
    location,
    beforeRole,
    afterRole,
    salaryIncrease,
    content,
    rating,
  }: {
    name: string
    role: string
    location: string
    beforeRole: string
    afterRole: string
    salaryIncrease: string
    content: string
    rating: number
  }) => {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
        {/* Rating Stars */}
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Before/After Badge */}
        <div className="mb-4 p-3 bg-teal-50 rounded-lg border border-teal-200">
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="text-gray-500 text-xs mb-1">Before</p>
              <p className="font-semibold text-gray-700">{beforeRole}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-teal-600" />
            <div>
              <p className="text-gray-500 text-xs mb-1">After</p>
              <p className="font-semibold text-teal-700">{afterRole}</p>
            </div>
          </div>
          <div className="mt-2 text-center">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">
              {salaryIncrease} salary increase
            </span>
          </div>
        </div>

        {/* Testimonial Content */}
        <p className="text-gray-700 mb-6 leading-relaxed italic">&quot;{content}&quot;</p>

        {/* Author Info */}
        <div className="flex items-center pt-4 border-t border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="font-bold text-gray-900">{name}</p>
            <p className="text-sm text-gray-600">{role}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {location}
            </p>
          </div>
        </div>
      </div>
    )
  },
)

TestimonialCard.displayName = "TestimonialCard"

const BlogPostCard = React.memo(
  ({ post }: { post: BlogPost }) => {
    return (
      <Link href={`/blog/${post.slug.current}`} className="group">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-teal-200 transition-all h-full flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs font-semibold rounded-full">
              {post.category}
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-3 w-3 mr-1" />
              <span>{post.readingTime} min</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center text-sm text-teal-600 font-semibold mt-auto group-hover:text-teal-700">
            <BookOpen className="h-4 w-4 mr-2" />
            Read Article
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    )
  },
)

BlogPostCard.displayName = "BlogPostCard"

const FAQItem = React.memo(
  ({ question, answer }: { question: string; answer: string }) => {
    return (
      <details className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-teal-200 transition-colors">
        <summary className="flex justify-between items-center cursor-pointer list-none">
          <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
          <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p className="mt-4 text-gray-600 leading-relaxed">{answer}</p>
      </details>
    )
  },
)

FAQItem.displayName = "FAQItem"
