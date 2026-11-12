import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import { PageHero } from "@/components/marketing/page-hero"
import { FaqList, type Faq } from "@/components/marketing/faq-list"

export const metadata: Metadata = pageMetadata({
  path: "/faq/",
  title: "CareerLead AI FAQ: AI Career Coaching Questions Answered",
  description:
    "Answers to common questions about CareerLead AI: how AI career paths work, pricing, data privacy, CV reviews and coaching for professionals in Ghana and Africa.",
  keywords: ["CareerLead AI FAQ", "AI career coaching questions", "career guidance Ghana", "job search Ghana"],
})

// The questions as shown on the page; FaqList builds the FAQPage structured
// data from the same list, so search engines read exactly what people see.
const FAQS: Faq[] = [
  {
    q: "What is CareerLead AI?",
    a: "CareerLead AI is an AI-powered career guidance platform that helps professionals at all stages make informed career decisions. Our platform combines artificial intelligence with career development expertise to provide personalized advice, career path recommendations, skill assessments, and ongoing coaching.",
  },
  {
    q: "How does CareerLead AI work?",
    a: "Our platform uses advanced AI to analyze your skills, experience, values, and goals to provide tailored career guidance. You'll start by creating a profile and completing assessments, after which our AI will generate personalized career paths and recommendations. You can then explore these options, chat with our AI coach for specific advice, and track your progress over time.",
  },
  {
    q: "Is CareerLead AI free to use?",
    a: "We offer a free tier with basic features to help you get started. For more advanced features, personalized coaching, and unlimited access, we offer premium subscription plans. Visit our pricing page for more details on what's included in each plan.",
  },
  {
    q: "How accurate are the career recommendations?",
    a: "Our recommendations are based on your unique profile, current industry trends, and data from successful career paths. While we strive for high accuracy, career decisions ultimately involve many personal factors. We recommend using our guidance as a valuable input to your decision-making process, alongside other resources and personal reflection.",
  },
  {
    q: "How is my data used and protected?",
    a: "We take data privacy seriously. Your personal information is used solely to provide personalized career guidance and improve our services. We never sell your data to third parties. All data is encrypted and stored securely according to industry standards. For more details, please review our Privacy Policy.",
  },
  {
    q: "Can I use CareerLead AI if I'm just starting my career?",
    a: "CareerLead AI is designed for professionals at all stages, from students and recent graduates to experienced professionals looking to make a change. Our platform adapts to your experience level and provides guidance appropriate for your career stage.",
  },
  {
    q: "How often is the career data updated?",
    a: "We regularly update our career data to reflect current industry trends, job market demands, and skill requirements. Our AI continuously learns from new data to ensure that recommendations remain relevant and up-to-date.",
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period. There are no cancellation fees or long-term commitments required.",
  },
]

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        lead="How CareerLead AI works, what it costs and what happens to your data."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Still have a question?
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-slate-600">
              Our team reads every message.{" "}
              <Link href="/contact/" className="font-bold text-teal-700 underline-offset-4 hover:underline">
                Get in touch
              </Link>{" "}
              and we&apos;ll get back to you.
            </p>
          </div>
          <FaqList faqs={FAQS} />
        </div>
      </section>
    </>
  )
}
