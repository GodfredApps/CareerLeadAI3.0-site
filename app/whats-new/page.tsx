import type { Metadata } from 'next'
import { pageMetadata } from "@/lib/seo"
import WhatsNewContent from './whats-new-content'

export const metadata: Metadata = pageMetadata({
  path: "/whats-new/",
  title: "What's New at CareerLead AI: Latest Features & Updates",
  description:
    "See the newest CareerLead AI features, including AI Resume Review, downloadable reports, instant suggestions and an improved mobile experience.",
  keywords: ["CareerLead AI updates", "AI resume review", "career tools", "new features"],
})

export default function WhatsNewPage() {
  return <WhatsNewContent />
}
