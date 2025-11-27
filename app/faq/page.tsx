import type { Metadata } from "next"
import { Compass } from "lucide-react"

export const metadata: Metadata = {
  title: "Career Coaching FAQ - Common Questions Answered | Ghana - Africa",
  description: "Get answers to frequently asked questions about AI career coaching, professional development, and career growth opportunities in Ghana and across Africa. Expert guidance available.",
  keywords: "career guidance Ghana, career coaching questions, professional development FAQ, AI career coaching Ghana, career development Africa, job search Ghana FAQ",
  openGraph: {
    title: "Career Coaching FAQ - Common Questions Answered | Ghana - Africa",
    description: "Get answers to frequently asked questions about AI career coaching, professional development, and career growth opportunities in Ghana and across Africa.",
    url: "https://careerlead.ai/faq",
    type: "website",
  },
}

export default function FAQPage() {
  // FAQ Schema for enhanced search results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CareerLead AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CareerLead AI is an AI-powered career guidance platform that helps professionals at all stages make informed career decisions. Our platform combines artificial intelligence with career development expertise to provide personalized advice, career path recommendations, skill assessments, and ongoing coaching for Ghana and Africa."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI career coaching work in Ghana?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Our platform uses advanced AI to analyze your skills, experience, values, and goals to provide tailored career guidance specifically for the Ghanaian job market. You start by creating a profile and completing assessments, after which our AI generates personalized career paths and recommendations relevant to Ghana and Africa."
        }
      },
      {
        "@type": "Question",
        "name": "Is CareerLead AI suitable for young professionals in Africa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CareerLead AI is specifically designed for young professionals and career changers in Ghana and across Africa. Our AI understands the unique challenges and opportunities in African job markets and provides relevant, actionable career guidance."
        }
      },
      {
        "@type": "Question",
        "name": "What career services does CareerLead AI offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive AI-powered career services including personalized career coaching, career path generation, skills assessment, resume optimization, interview preparation, and ongoing professional development guidance tailored for Ghana and Africa."
        }
      },
      {
        "@type": "Question",
        "name": "How much does AI career coaching cost in Ghana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CareerLead AI offers flexible pricing options designed to be accessible for professionals in Ghana. We provide both free basic services and premium AI coaching plans. Contact us for current pricing in Ghana Cedis (GHS) and other supported currencies."
        }
      }
    ]
  }

  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <div className="container max-w-4xl py-12 px-4 md:py-16 md:px-6">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-full bg-primary/10 p-3">
            <Compass className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Find answers to common questions about CareerLead AI.
          </p>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">What is CareerLead AI?</h3>
            <p className="text-muted-foreground">
              CareerLead AI is an AI-powered career guidance platform that helps professionals at all stages make
              informed career decisions. Our platform combines artificial intelligence with career development expertise
              to provide personalized advice, career path recommendations, skill assessments, and ongoing coaching.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">How does CareerLead AI work?</h3>
            <p className="text-muted-foreground">
              Our platform uses advanced AI to analyze your skills, experience, values, and goals to provide tailored
              career guidance. You&apos;ll start by creating a profile and completing assessments, after which our AI will
              generate personalized career paths and recommendations. You can then explore these options, chat with our
              AI coach for specific advice, and track your progress over time.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Is CareerLead AI free to use?</h3>
            <p className="text-muted-foreground">
              We offer a free tier with basic features to help you get started. For more advanced features, personalized
              coaching, and unlimited access, we offer premium subscription plans. Visit our pricing page for more
              details on what&apos;s included in each plan.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">How accurate are the career recommendations?</h3>
            <p className="text-muted-foreground">
              Our recommendations are based on your unique profile, current industry trends, and data from successful
              career paths. While we strive for high accuracy, career decisions ultimately involve many personal
              factors. We recommend using our guidance as a valuable input to your decision-making process, alongside
              other resources and personal reflection.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">How is my data used and protected?</h3>
            <p className="text-muted-foreground">
              We take data privacy seriously. Your personal information is used solely to provide personalized career
              guidance and improve our services. We never sell your data to third parties. All data is encrypted and
              stored securely according to industry standards. For more details, please review our Privacy Policy.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Can I use CareerLead AI if I&apos;m just starting my career?</h3>
            <p className="text-muted-foreground">
              CareerLead AI is designed for professionals at all stages, from students and recent graduates to
              experienced professionals looking to make a change. Our platform adapts to your experience level and
              provides guidance appropriate for your career stage.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">How often is the career data updated?</h3>
            <p className="text-muted-foreground">
              We regularly update our career data to reflect current industry trends, job market demands, and skill
              requirements. Our AI continuously learns from new data to ensure that recommendations remain relevant and
              up-to-date.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Can I cancel my subscription at any time?</h3>
            <p className="text-muted-foreground">
              Yes, you can cancel your subscription at any time. Your access will continue until the end of your current
              billing period. There are no cancellation fees or long-term commitments required.
            </p>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is here to help. Reach out to us and we&apos;ll get back to you as soon as possible.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}