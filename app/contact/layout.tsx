import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

// The contact page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata({
  path: "/contact/",
  title: "Contact CareerLead AI | Support & Partnerships",
  description:
    "Questions about CareerLead AI, partnerships or coaching? Reach our team by email or through the contact form and we'll get back to you.",
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
