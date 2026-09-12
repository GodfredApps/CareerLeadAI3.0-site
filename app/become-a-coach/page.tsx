import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Globe,
  ShieldCheck,
  Sparkles,
  Users,
  Briefcase,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.careerlead.ai"

const benefits = [
  {
    title: "Impact African Tech Talent",
    description: "Guide ambitious professionals in Ghana, Nigeria, Kenya, and beyond to land decisive, high-impact roles.",
    icon: Globe,
  },
  {
    title: "Flexible & Remote Coaching",
    description: "Set your own availability for 1-on-1 mock interviews, CV reviews, and strategic career path consultations.",
    icon: Clock,
  },
  {
    title: "Vetted Professional Network",
    description: "Join an elite network of verified senior specialists, engineering leads, and talent executives.",
    icon: Award,
  },
]

const vettingSteps = [
  {
    step: "01",
    title: "Submit KYC & Experience Profile",
    body: "Provide your professional credentials, LinkedIn profile, current role, and coaching focus areas.",
  },
  {
    step: "02",
    title: "Identity & Qualification Verification",
    body: "Our admin team verifies government ID, LinkedIn history, and domain experience.",
  },
  {
    step: "03",
    title: "Application Review",
    body: "Receive notification via email on application approval status within 24–48 hours.",
  },
  {
    step: "04",
    title: "Activate Coach Portal",
    body: "Set up your availability, coaching rates, and start taking client requests.",
  },
]

export default function BecomeACoachPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(13,148,136,0.2)_0%,rgba(15,23,42,1)_70%)]" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-bold text-teal-300 backdrop-blur mb-6">
              <ShieldCheck className="h-4 w-4 text-teal-400" />
              <span>Vetted Career Mentorship Program</span>
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Empower the next generation of{" "}
              <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                African leaders.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Become a verified CareerLead AI Mentor or Career Coach. Guide professionals through CV reviews, mock interviews, and strategic career transitions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-8 text-base font-bold text-white shadow-xl shadow-teal-950/60 hover:from-teal-500 hover:to-emerald-500 transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
              >
                <a href={`${appUrl}/signup?role=coach`}>
                  Apply as a Coach
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-base font-bold text-white backdrop-blur hover:bg-white hover:text-slate-950 transition-all duration-300 w-full sm:w-auto"
              >
                <Link href="#vetting-process">How Vetting Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-900/60 py-20 border-y border-white/10">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-teal-400">
              Why Join CareerLead
            </span>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl text-white">
              Built for high-impact industry leaders.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-slate-950/80 p-7 backdrop-blur transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Timeline */}
      <section id="vetting-process" className="py-20 lg:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-teal-400">
              Application Timeline
            </span>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl text-white">
              Rigorous vetting for high standards.
            </h2>
            <p className="mt-4 text-slate-400">
              To protect candidate quality, all mentors undergo KYC verification and profile vetting by our admin team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {vettingSteps.map(({ step, title, body }) => (
              <div key={step} className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-teal-400/50">{step}</span>
                  <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{body}</p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-[11px] font-semibold text-teal-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Verified Step</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 rounded-3xl border border-teal-500/30 bg-gradient-to-r from-teal-950/80 via-slate-950 to-slate-950 p-8 sm:p-12 text-center backdrop-blur shadow-2xl">
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              Ready to mentor the next wave of talent?
            </h3>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Submit your KYC application today. Verification typically completes within 24 to 48 business hours.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-teal-500 px-8 text-base font-bold text-slate-950 hover:bg-teal-400 transition-all"
              >
                <a href={`${appUrl}/signup?role=coach`}>
                  Start Coach Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
