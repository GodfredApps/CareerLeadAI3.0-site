import type { Metadata } from "next"
import { Compass, Users, Lightbulb, Heart, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "About CareerLead AI - Empowering African Professionals | Ghana - Africa",
  description: "Discover how CareerLead AI empowers professionals across Ghana and Africa with AI-driven career coaching, expert guidance, and personalized development plans tailored for African markets.",
  keywords: "professional development Africa, AI career coaching Ghana, career guidance Africa, professional life Africa, career development Ghana, AI career advisor Ghana, African job market",
  openGraph: {
    title: "About CareerLead AI - Empowering African Professionals | Ghana - Africa",
    description: "Discover how CareerLead AI empowers professionals across Ghana and Africa with AI-driven career coaching, expert guidance, and personalized development plans.",
    url: "https://careerlead.ai/about/",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="container max-w-5xl py-12 px-4 md:py-16 md:px-6">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-full bg-primary/10 p-3">
            <Compass className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About CareerLead AI</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Transforming career development across Ghana and Africa with AI-powered guidance and personalized coaching.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission in Africa</h2>
            <p className="text-muted-foreground">
              At CareerLead AI, we&apos;re on a mission to democratize career guidance across Ghana and Africa, making professional development
              accessible to every ambitious individual. We believe that with the right guidance tailored to African markets, anyone can build a fulfilling career that
              aligns with their values, skills, and the continent&apos;s growing opportunities.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision for Ghana & Africa</h2>
            <p className="text-muted-foreground">
              We envision a thriving African continent where career decisions are made with confidence, backed by data-driven insights about local and international markets.
              CareerLead AI aims to be the trusted companion for African professionals, helping them navigate the unique challenges and seize the vast opportunities across our continent.
            </p>
          </div>
        </div>

        <div className="my-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why We Focus on Ghana & Africa</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Local Market Understanding</h3>
              <p className="text-muted-foreground">
                We understand the unique opportunities in Ghana&apos;s growing tech sector, Nigeria&apos;s fintech boom, and Kenya&apos;s startup ecosystem.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Emerging Industries</h3>
              <p className="text-muted-foreground">
                From renewable energy to mobile money, we help you navigate Africa&apos;s fastest-growing sectors and emerging opportunities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Cultural Context</h3>
              <p className="text-muted-foreground">
                Our guidance respects African values, family considerations, and business practices while embracing global opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="my-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                Quality career guidance should be available to every African professional, regardless of background or location.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously improve our AI to understand African markets, opportunities, and career paths better.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Empathy</h3>
              <p className="text-muted-foreground">
                We understand the unique challenges African professionals face and approach guidance with cultural sensitivity.
              </p>
            </div>
          </div>
        </div>

        <div className="my-16">
          <h2 className="text-2xl font-bold text-center mb-8">Success Stories from Across Africa</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;CareerLead AI helped me transition from traditional banking to fintech in Ghana. The AI understood our local market dynamics and guided me to opportunities I never knew existed.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-medium text-primary">KA</span>
                </div>
                <div>
                  <p className="font-medium">Kwame Asante</p>
                  <p className="text-sm text-muted-foreground">Fintech Product Manager, Accra</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;As a recent engineering graduate in Nigeria, I was overwhelmed by career options. CareerLead AI suggested renewable energy paths that aligned perfectly with Africa&apos;s green future.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-medium text-primary">AM</span>
                </div>
                <div>
                  <p className="font-medium">Amina Mohammed</p>
                  <p className="text-sm text-muted-foreground">Renewable Energy Engineer, Lagos</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;The platform&apos;s understanding of East African tech ecosystem was impressive. It helped me land my dream role in Kenya&apos;s thriving startup scene.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-medium text-primary">SO</span>
                </div>
                <div>
                  <p className="font-medium">Sarah Ochieng</p>
                  <p className="text-sm text-muted-foreground">Digital Marketing Lead, Nairobi</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;After 10 years in traditional banking in South Africa, I wanted to enter tech. CareerLead AI guided me through a successful transition to product management at a Cape Town startup.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-medium text-primary">TM</span>
                </div>
                <div>
                  <p className="font-medium">Thabo Mthembu</p>
                  <p className="text-sm text-muted-foreground">Senior Product Manager, Cape Town</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;The AI coach helped me understand how my international experience could be leveraged in Rwanda&apos;s growing business process outsourcing sector. Perfect career move!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-medium text-primary">GN</span>
                </div>
                <div>
                  <p className="font-medium">Grace Nyiramana</p>
                  <p className="text-sm text-muted-foreground">Operations Director, Kigali</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;I was stuck in a career rut in Kampala. CareerLead AI not only identified new opportunities in Uganda&apos;s agtech sector but gave me confidence to pursue them.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-medium text-primary">DK</span>
                </div>
                <div>
                  <p className="font-medium">David Kigozi</p>
                  <p className="text-sm text-muted-foreground">AgTech Solutions Lead, Kampala</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5</span>
              <span className="text-muted-foreground">from 1,200+ African professionals</span>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            CareerLead AI was founded in 2024 by a team of African professionals, career development experts, and AI specialists
            who experienced firsthand the unique challenges of navigating career decisions in emerging African markets.
          </p>
          <p className="text-muted-foreground mb-4">
            After witnessing countless talented Africans struggle with career choices due to lack of context-aware guidance,
            our founders decided to leverage artificial intelligence to create a solution that understands both global opportunities
            and local African market dynamics.
          </p>
          <p className="text-muted-foreground">
            Today, CareerLead AI serves hundreds of professionals across Ghana, Nigeria, Kenya, South Africa, and beyond,
            helping them discover career paths that align with both their aspirations and Africa&apos;s growth trajectory.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Africa&apos;s Career Revolution</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground mb-6">
            Whether you&apos;re a recent graduate in Accra, a mid-career professional in Lagos, or an experienced leader in Nairobi,
            CareerLead AI is here to guide you toward success in Africa&apos;s dynamic job market.
          </p>
          <div className="flex justify-center">
            <a
              href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}