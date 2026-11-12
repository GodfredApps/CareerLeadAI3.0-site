import type { ComponentType } from "react"
import type { Metadata } from "next"
import { Check } from "lucide-react"
import { pageMetadata } from "@/lib/seo"
import { PageHero, CtaBand } from "@/components/marketing/page-hero"
import CareerLeadProfile from "@/components/stageshow/careerlead-steps/profile"
import CareerLeadPaths from "@/components/stageshow/careerlead-paths"
import CareerLeadCoach from "@/components/stageshow/careerlead-steps/coach"
import CareerLeadChallenge from "@/components/stageshow/careerlead-hero"

export const metadata: Metadata = pageMetadata({
  path: "/how-it-works/",
  title: "How CareerLead AI Works: AI Career Guidance in 4 Steps",
  description:
    "Not sure what career is right for you? Build your profile, get three AI career paths, then close skill gaps with AI CV review and career coaching.",
  keywords: ["how AI career coaching works", "AI career path generator", "career development Ghana", "AI career guidance Africa"],
})

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.careerlead.ai"

type Step = {
  title: string
  body: string
  points: string[]
  Demo: ComponentType<{ play?: "loop" | "once" }>
}

const steps: Step[] = [
  {
    title: "Build your profile",
    body: "Upload your CV to fill in your experience, then add what matters to you: your values, interests and the goal you are working towards. The fuller the profile, the sharper everything after it.",
    points: ["Import experience from your CV", "Name your values and interests", "Set the goal you are aiming for"],
    Demo: CareerLeadProfile,
  },
  {
    title: "Get three career paths",
    body: "CareerLead AI turns your profile into three focused paths, each with how well it fits you, the skills you already have, the gaps to close and the next step to take.",
    points: ["A fit score for each path", "Skills you have, and the gaps", "A concrete next step"],
    Demo: CareerLeadPaths,
  },
  {
    title: "Ask your AI career coach",
    body: "Bring the specific question: an offer to negotiate, an interview on Thursday, a CV that isn't getting calls. The coach answers with your profile and your market in mind.",
    points: ["Answers grounded in your profile", "Salary, CV and interview help", "Practice for the real conversation"],
    Demo: CareerLeadCoach,
  },
  {
    title: "Sharpen your judgement daily",
    body: "One short career scenario a day, like spotting a fake job ad. Two tries, a short lesson either way, and XP that keeps your streak going.",
    points: ["One challenge a day, two tries", "A lesson with every answer", "XP and streaks that track progress"],
    Demo: CareerLeadChallenge,
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From your profile to a plan you can act on."
        lead="Four steps, each building on the last. Start with what you already have, and leave with a direction and the help to follow it."
      />

      <section className="bg-white py-16 md:py-24 lg:py-28">
        <ol className="container grid gap-20 px-4 md:px-6 lg:gap-28">
          {steps.map((step, i) => (
            <StepRow key={step.title} step={step} index={i} />
          ))}
        </ol>
      </section>

      <CtaBand
        title="Ready to find your direction?"
        lead="Start free. Your profile takes a few minutes, and your first career paths follow straight after."
        href={`${appUrl}/signup`}
        label="Start free"
      />
    </>
  )
}

function StepRow({ step, index }: { step: Step; index: number }) {
  const { title, body, points, Demo } = step
  // Pictures alternate sides on wide screens; on phones the copy leads
  const flip = index % 2 === 1
  return (
    <li
      className={`grid items-center gap-10 lg:gap-16 ${flip ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-[0.85fr_1.15fr]"}`}
    >
      <div className={flip ? "min-w-0 lg:order-2" : "min-w-0"}>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">Step {index + 1}</p>
        <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{body}</p>
        <ul className="mt-7 grid gap-3">
          {points.map(point => (
            <li key={point} className="flex items-start gap-3 text-slate-700">
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
      {/* The product's dark ground; the window runs off its right and foot */}
      <div
        className={`min-w-0 overflow-hidden rounded-3xl bg-slate-950 ${flip ? "lg:order-1" : ""}`}
        aria-hidden="true"
        data-ss-fill
      >
        <Demo play="once" />
      </div>
    </li>
  )
}
