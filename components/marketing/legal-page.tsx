import type { ReactNode } from "react"
import { PageHero } from "@/components/marketing/page-hero"

// Terms, privacy and cookies: the ink page hero, then the policy text at a
// readable measure. The site has no typography plugin, so headings, lists
// and links inside the body are styled here.

const body = [
  "mx-auto max-w-3xl text-base leading-8 text-slate-700",
  "[&_section]:mt-12 first:[&_section]:mt-0",
  "[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:text-slate-950",
  "[&_section>h2]:mt-0",
  "[&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-slate-950",
  "[&_p]:mt-4 [&_p]:text-slate-700",
  "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-slate-700",
  "[&_li]:pl-1 [&_li]:marker:text-teal-700",
  "[&_a]:font-bold [&_a]:text-teal-700 [&_a]:underline-offset-4 hover:[&_a]:underline",
  "[&_strong]:text-slate-950",
].join(" ")

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lead={`Last updated: ${updated}`} />
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className={body}>{children}</div>
        </div>
      </section>
    </>
  )
}
