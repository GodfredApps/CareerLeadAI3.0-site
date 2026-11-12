import type { Metadata } from 'next'
import { pageMetadata } from "@/lib/seo"
import WhatsNewContent from './whats-new-content'

export const metadata: Metadata = pageMetadata({
  path: "/whats-new/",
  title: "What's New at CareerLead AI: Latest Features & Updates",
  description:
    "Latest CareerLead AI updates: a new workspace with fit scores and a career map, the Daily Career Challenge, XP and streaks, networking, events and a rebuilt CV review.",
  keywords: ["CareerLead AI updates", "career map", "daily career challenge", "AI CV review", "new features"],
})

export default function WhatsNewPage() {
  return <WhatsNewContent />
}
