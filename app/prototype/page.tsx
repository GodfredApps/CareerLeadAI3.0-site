import type { Metadata } from "next"
import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Sparkles,
  Target,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroCarousel } from "@/components/stageshow/hero-carousel"
import { PlatformBento } from "@/components/stageshow/platform-bento"
import { LatestGuides } from "@/components/marketing/latest-guides"
import { HomeFaq } from "@/components/marketing/home-faq"
import { TrustedBySection } from "@/components/marketing/trusted-by-section"

export const metadata: Metadata = {
  title: "Homepage prototype | CareerLead AI",
  robots: { index: false, follow: false },
}

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.careerlead.ai"

const metrics = [
  { value: "2.5K+", label: "professionals guided" },
  { value: "3", label: "market-aware career paths" },
  { value: "5 min", label: "to first recommendation" },
]

const audiences = [
  {
    eyebrow: "Early career",
    title: "Turn your first roles into a deliberate direction.",
    body: "Clear role options, CV direction, and interview preparation that match how African employers actually hire — not generic advice written for another market.",
    icon: Briefcase,
  },
  {
    eyebrow: "Mid-career",
    title: "Move from steady progress to a decisive next step.",
    body: "Identify adjacent roles, the skills genuinely missing, and credible moves that build on the experience you already have.",
    icon: Target,
  },
  {
    eyebrow: "Senior & specialist",
    title: "Position hard-won experience for the roles that use it.",
    body: "Clarify specialisation and leadership direction, and present a track record that holds up in a narrow, competitive market.",
    icon: Compass,
  },
]

const workflow = [
  {
    title: "Build your profile",
    body: "Capture values, interests, education, experience, and career context in one structured profile.",
    icon: Users,
  },
  {
    title: "Generate career paths",
    body: "Receive focused options with role fit, required skills, salary context, and practical next steps.",
    icon: Sparkles,
  },
  {
    title: "Improve your proof",
    body: "Use AI CV review, skills assessments, learning resources, and AI career coaching to strengthen execution.",
    icon: FileText,
  },
]


const proof = [
  "Career paths are based on your profile, not generic job titles.",
  "The workflow connects discovery, CV readiness, coaching, and learning.",
  "Built around Ghana, Nigeria, Kenya, and broader African career realities.",
]

export default function HomePrototype() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <section className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,148,136,0.25)_0%,rgba(15,23,42,0.98)_55%,rgba(15,23,42,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/grid.svg')]" />

        <div className="container relative z-10 flex items-center px-4 py-16 md:px-6 lg:min-h-[calc(100vh-4.5rem)] lg:py-20">
          <div className="grid w-full min-w-0 items-center gap-12">
            <div className="min-w-0 max-w-3xl xl:max-w-[600px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-bold text-teal-300 backdrop-blur mb-6">
                <span>Next-Gen Career Intelligence Platform</span>
              </div>

              <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl sm:leading-[0.96] md:text-7xl lg:text-7xl">
                Build a career path that{" "}
                <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                  fits the market.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-slate-300 md:text-xl">
                CareerLead AI turns your background, values, skills, and goals into a practical
                career plan, then helps you improve the CV, skills, and confidence to execute it.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-8 text-base font-bold text-white shadow-xl shadow-teal-950/60 hover:from-teal-500 hover:to-emerald-500 transition-all duration-300 hover:scale-[1.02]"
                >
                  <a href={`${appUrl}/signup`}>
                    Start free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-base font-bold text-white backdrop-blur hover:bg-white hover:text-slate-950 transition-all duration-300"
                >
                  <Link href="/how-it-works/">See how it works</Link>
                </Button>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 shadow-xl backdrop-blur">
                {metrics.map(metric => (
                  <div key={metric.label} className="min-w-0 bg-slate-950/80 p-5 transition-colors hover:bg-slate-900/90">
                    <p className="text-2xl font-black text-white md:text-3xl bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-teal-300/80 uppercase tracking-wider">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The product runs off real edges: the screen's right edge and
                the hero's bottom. Stacked under the copy below xl; beside it
                from xl, pinned to the section's bottom-right corner. */}
            <div
              data-ss-fill
              className="-mx-4 -mb-16 w-[calc(100%+2rem)] max-w-[820px] md:-mx-6 md:w-[calc(100%+3rem)] lg:-mb-20 xl:absolute xl:bottom-0 xl:right-[calc((100%-100vw)/2)] xl:mx-0 xl:mb-0 xl:w-[min(50vw,860px)]"
            >
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />

      <section className="border-b border-slate-200 bg-white py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
                Who it serves
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
                Not another generic career advice tool.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              CareerLead AI is career guidance built for people making real career decisions in African markets:
              early-career professionals entering competitive hiring funnels, mid-career people
              weighing a decisive move, and senior specialists positioning hard-won experience.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {audiences.map(({ eyebrow, title, body, icon: Icon }, index) => (
              <article
                key={eyebrow}
                className={`rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  index === 1
                    ? "border-teal-700 bg-slate-950 text-white shadow-teal-950/30 hover:border-teal-400"
                    : "border-slate-200/80 bg-slate-50/50 text-slate-950 hover:border-teal-500/40 hover:bg-white"
                }`}
              >
                <div
                  className={`mb-8 flex h-12 w-12 items-center justify-center rounded-2xl ${
                    index === 1 ? "bg-teal-500/15 text-teal-200" : "bg-teal-100/80 text-teal-700"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <p
                  className={`text-xs font-black uppercase tracking-[0.18em] ${
                    index === 1 ? "text-teal-200" : "text-teal-700"
                  }`}
                >
                  {eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight">{title}</h3>
                <p className={`mt-4 leading-7 ${index === 1 ? "text-white/65" : "text-slate-600"}`}>
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbfa] py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
                The workflow
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
                From self-assessment to proof of readiness.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Not sure what career is right for you? Build your profile, get AI career paths
                matched to your skills, then use CV review, skills assessments and career coaching
                to get ready for the roles you want.
              </p>
              <div className="mt-8 space-y-3">
                {proof.map(item => (
                  <div key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {workflow.map(({ title, body, icon: Icon }, index) => (
                <article key={title} className="grid grid-cols-[3.5rem_1fr] gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:grid-cols-[4rem_1fr] sm:gap-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-teal-500/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 text-teal-300" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-slate-950">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
              Platform
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              One career workspace, not disconnected tools.
            </h2>
          </div>

          <div className="mt-12">
            <PlatformBento />
          </div>
        </div>
      </section>

      <LatestGuides />

      <HomeFaq />

      <section className="bg-slate-950 py-20 text-white md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-300">
                Start today
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Give every career decision a clearer next step.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                Create a free account, complete your profile, and generate your first career path
                before your next application.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/8 p-6">
              <div className="space-y-4">
                {[
                  "No credit card required",
                  "Personalized path generation",
                  "Resume review and AI coaching",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-300" />
                    <span className="font-semibold text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8 h-14 w-full rounded-full bg-teal-600 text-base font-bold text-white hover:bg-teal-700">
                <a href={`${appUrl}/signup`}>
                  Start free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-white/60">
                <Clock className="h-4 w-4" />
                First recommendation in minutes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
