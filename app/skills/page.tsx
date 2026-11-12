import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { sanityClient, skillsQuery } from '@/lib/sanity'
import { PageHero } from "@/components/marketing/page-hero"

interface Skill {
  _id: string
  name: string
  slug: { current: string }
  category: string
  description?: string
  demandLevel: string
}

// Thin, unlinked directory page: kept reachable but out of the index and sitemap.
export const metadata: Metadata = pageMetadata({
  path: "/skills/",
  title: "Skills Directory | CareerLead AI",
  description: "In-demand skills for professionals in Ghana and Africa.",
  noIndex: true,
})

export default async function SkillsPage() {
  const skills: Skill[] = await sanityClient.fetch(skillsQuery)

  return (
    <>
      <PageHero eyebrow="Skills directory" title="In-demand skills." lead="Skills employers in Ghana and across Africa are hiring for." />
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          {skills.length === 0 ? (
            <p className="text-lg text-slate-600">No skills listed yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skills.map(skill => (
                <article key={skill._id} className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-bold text-slate-950">{skill.name}</h2>
                    <span className={`flex-none rounded-full px-3 py-1 text-xs font-bold ${DEMAND_TONE[skill.demandLevel] ?? DEMAND_TONE.default}`}>
                      {skill.demandLevel.replace("_", " ")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold capitalize text-teal-700">{skill.category.replace("_", " ")}</p>
                  {skill.description && <p className="mt-3 line-clamp-3 leading-7 text-slate-600">{skill.description}</p>}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

const DEMAND_TONE: Record<string, string> = {
  very_high: "bg-slate-950 text-teal-300",
  high: "bg-teal-100 text-teal-800",
  medium: "bg-slate-200 text-slate-700",
  default: "bg-slate-100 text-slate-600",
}
