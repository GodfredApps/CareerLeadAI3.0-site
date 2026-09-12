import type { Metadata } from "next"
import { Globe2, TrendingUp, HeartHandshake, Users, Lightbulb, Heart } from "lucide-react"
import { Section, SectionIntro, InfoCard } from "@/components/marketing/section"

export const metadata: Metadata = {
  title: "About CareerLead AI - Empowering African Professionals | Ghana - Africa",
  description:
    "Discover how CareerLead AI empowers professionals across Ghana and Africa with AI-driven career coaching, expert guidance, and personalized development plans tailored for African markets.",
  keywords:
    "professional development Africa, AI career coaching Ghana, career guidance Africa, professional life Africa, career development Ghana, AI career advisor Ghana, African job market",
  openGraph: {
    title: "About CareerLead AI - Empowering African Professionals | Ghana - Africa",
    description:
      "Discover how CareerLead AI empowers professionals across Ghana and Africa with AI-driven career coaching, expert guidance, and personalized development plans.",
    url: "https://careerlead.ai/about/",
    type: "website",
  },
}

const focusAreas = [
  {
    icon: Globe2,
    eyebrow: "Local markets",
    title: "Guidance that knows where you actually work.",
    body: "Ghana's growing tech sector, Nigeria's fintech boom, and Kenya's startup ecosystem behave differently. Advice written for other markets does not transfer cleanly.",
  },
  {
    icon: TrendingUp,
    eyebrow: "Emerging industries",
    title: "Direction toward where the roles are opening.",
    body: "We track the sectors adding roles across the continent, so recommendations point at real demand rather than familiar job titles.",
    featured: true,
  },
  {
    icon: HeartHandshake,
    eyebrow: "Cultural context",
    title: "Advice that respects family and community realities.",
    body: "Career decisions here are rarely made alone. Our guidance accounts for family expectations, business practices, and obligations that global tools ignore.",
  },
]

const values = [
  {
    icon: Users,
    eyebrow: "Accessibility",
    title: "Quality career guidance should be available to everyone.",
    body: "Professional direction should not depend on who you happen to know, or on your background and location.",
  },
  {
    icon: Lightbulb,
    eyebrow: "Innovation",
    title: "The product improves as the market moves.",
    body: "We continuously improve our AI's understanding of African markets, opportunities, and career paths.",
  },
  {
    icon: Heart,
    eyebrow: "Empathy",
    title: "Built by people who have faced the same decisions.",
    body: "We understand the unique challenges African professionals face and approach guidance with genuine care.",
  },
]

const testimonials = [
  {
    quote:
      "CareerLead AI helped me transition from traditional banking to fintech in Ghana. The AI understood our local market dynamics and guided me to opportunities I never knew existed.",
    name: "Kwame Asante",
    role: "Fintech Product Manager, Accra",
  },
  {
    quote:
      "As a recent engineering graduate in Nigeria, I was overwhelmed by career options. CareerLead AI suggested renewable energy paths that aligned perfectly with Africa's green future.",
    name: "Amina Mohammed",
    role: "Renewable Energy Engineer, Lagos",
  },
  {
    quote:
      "The platform's understanding of East African tech ecosystem was impressive. It helped me land my dream role in Kenya's thriving startup scene.",
    name: "Sarah Ochieng",
    role: "Digital Marketing Lead, Nairobi",
  },
  {
    quote:
      "After 10 years in traditional banking in South Africa, I wanted to enter tech. CareerLead AI guided me through a successful transition to product management at a Cape Town startup.",
    name: "Thabo Mthembu",
    role: "Senior Product Manager, Cape Town",
  },
  {
    quote:
      "The AI coach helped me understand how my international experience could be leveraged in Rwanda's growing business process outsourcing sector. Perfect career move!",
    name: "Grace Nyiramana",
    role: "Operations Director, Kigali",
  },
  {
    quote:
      "I was stuck in a career rut in Kampala. CareerLead AI not only identified new opportunities in Uganda's agtech sector but gave me confidence to pursue them.",
    name: "David Kigozi",
    role: "AgTech Solutions Lead, Kampala",
  },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map(part => part[0])
    .join("")

export default function AboutPage() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.careerlead.ai"

  return (
    <>
      {/* ── Ink hero ── */}
      <section className="bg-slate-950 py-20 text-white md:py-28">
        <div className="container px-4 md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-300">
            About CareerLead AI
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Career decisions made with context, not guesswork.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            CareerLead AI exists to make professional guidance available to people building careers
            in African markets — with advice grounded in how hiring actually works here.
          </p>
        </div>
      </section>

      {/* ── Mission & vision ── */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
              Our mission
            </p>
            <h2 className="mt-4 text-2xl font-black leading-snug tracking-tight text-slate-950 sm:text-3xl">
              Democratise career guidance across Ghana and Africa.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We believe that with guidance tailored to African markets, anyone can build a career
              that aligns with their values, their skills, and the opportunities actually opening on
              the continent.
            </p>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
              Our vision
            </p>
            <h2 className="mt-4 text-2xl font-black leading-snug tracking-tight text-slate-950 sm:text-3xl">
              A continent where career decisions are made with confidence.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Backed by data-driven insight into local and international markets, so professionals
              can navigate the challenges and seize the opportunities in front of them.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Why Africa ── */}
      <Section tone="ground">
        <SectionIntro
          eyebrow="Why we focus here"
          title="Generic career advice does not survive contact with African hiring."
          lead="Most career tools are built around assumptions that do not hold across Accra, Lagos, or Nairobi. These are the three things we build around instead."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {focusAreas.map(area => (
            <InfoCard key={area.eyebrow} {...area} />
          ))}
        </div>
      </Section>

      {/* ── Values ── */}
      <Section tone="white">
        <SectionIntro
          eyebrow="Our core values"
          title="What the product is held to."
          lead="These are the commitments we design against, and the ones we expect to be judged on."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map(value => (
            <InfoCard key={value.eyebrow} {...value} />
          ))}
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section tone="ground">
        <SectionIntro
          eyebrow="Success stories"
          title="People who changed direction with it."
          lead="Career moves across banking, engineering, marketing, and operations — from Accra to Kampala."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <figure
              key={name}
              className="flex min-w-0 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-base leading-7 text-slate-700">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-teal-300">
                  {initials(name)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-bold text-slate-950">{name}</span>
                  <span className="block truncate text-sm text-slate-500">{role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ── Story ── */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">Our story</p>
            <h2 className="mt-4 max-w-md text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Founded in 2024, out of the same frustration.
            </h2>
          </div>
          <div className="min-w-0 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              CareerLead AI was founded by a team of African professionals, career development
              experts, and AI specialists who had experienced first-hand how hard career decisions
              are to make in emerging African markets.
            </p>
            <p>
              After watching talented people stall for lack of context-aware guidance, we set out to
              build something that understands both global opportunity and local market dynamics.
            </p>
            <p>
              Today CareerLead AI serves professionals across Ghana, Nigeria, Kenya, South Africa
              and beyond, helping them find paths that fit both their aspirations and where the
              continent is heading.
            </p>
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <section className="bg-slate-950 py-20 text-white md:py-24">
        <div className="container px-4 text-center md:px-6">
          <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Wherever you are on the path, start with a clearer next step.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            A recent graduate in Accra, a mid-career professional in Lagos, or an experienced leader
            in Nairobi — the guidance adapts to where you actually are.
          </p>
          <a
            href={`${appUrl}/signup`}
            className="mt-9 inline-flex h-14 items-center justify-center rounded-full bg-teal-600 px-8 text-base font-bold text-white shadow-xl shadow-teal-950/40 transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Get started today
          </a>
        </div>
      </section>
    </>
  )
}
