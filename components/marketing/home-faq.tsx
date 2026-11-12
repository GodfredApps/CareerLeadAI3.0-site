import Link from "next/link"
import { FaqList, type Faq } from "@/components/marketing/faq-list"

// The questions people ask before they sign up, on the homepage.

const FAQS: Faq[] = [
  {
    q: "Is CareerLead AI free?",
    a: "Yes, you can start free. Building your profile, generating career paths, the Daily Career Challenge, XP and streaks, and the Job Board cost nothing.",
  },
  {
    q: "Who is it for?",
    a: "Professionals in Ghana, Nigeria, Kenya and across Africa: people starting out and choosing a direction, mid-career people weighing their next move, and specialists positioning hard-won experience.",
  },
  {
    q: "How are my career paths chosen?",
    a: "From your profile: your values, interests, education, experience and goals. Each path shows the role, how well it fits you, the skills you already have and the gaps to close.",
  },
  {
    q: "What is the Daily Career Challenge?",
    a: "One short career scenario a day, such as spotting a fake job ad or choosing the stronger CV. You get two tries, a short lesson either way, and XP that builds your streak.",
  },
  {
    q: "What happens to my CV and profile?",
    a: "Your CV is only used to fill in your profile; we don't store the file. You decide whether the AI coach can use your profile, and you can change that at any time.",
  },
  {
    q: "Can I find jobs here too?",
    a: "Yes. The Job Board lists openings in Ghana, Nigeria and Kenya plus remote roles open to African professionals.",
  },
]

export function HomeFaq() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="home-faq-heading">
      <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">Questions</p>
          <h2 id="home-faq-heading" className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
            Before you start.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
            More answers on the{" "}
            <Link href="/faq/" className="font-bold text-teal-700 underline-offset-4 hover:underline">
              FAQ page
            </Link>
            , or{" "}
            <Link href="/contact/" className="font-bold text-teal-700 underline-offset-4 hover:underline">
              get in touch
            </Link>
            .
          </p>
        </div>

        <FaqList faqs={FAQS} />
      </div>
    </section>
  )
}
