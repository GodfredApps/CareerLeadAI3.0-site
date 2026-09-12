import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type Tone = "white" | "ground" | "ink"

const toneStyles: Record<Tone, string> = {
  white: "bg-white text-slate-950 border-b border-slate-200",
  ground: "bg-slate-50 text-slate-950 border-b border-slate-200",
  ink: "bg-slate-950 text-white",
}

/** Full-bleed page section. Alternate `white` / `ground`, use `ink` for anchors. */
export function Section({
  tone = "white",
  className,
  children,
}: {
  tone?: Tone
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={cn(toneStyles[tone], "py-16 md:py-24 lg:py-28", className)}>
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  )
}

/** Left-aligned eyebrow + heading, with an optional lead paragraph beside it. */
export function SectionIntro({
  eyebrow,
  title,
  lead,
  onInk = false,
}: {
  eyebrow: string
  title: string
  lead?: string
  onInk?: boolean
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-10">
      <div>
        <p
          className={cn(
            "text-xs font-black uppercase tracking-[0.22em]",
            onInk ? "text-teal-300" : "text-teal-700"
          )}
        >
          {eyebrow}
        </p>
        <h2
          className={cn(
            "mt-4 max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl",
            onInk ? "text-white" : "text-slate-950"
          )}
        >
          {title}
        </h2>
      </div>
      {lead ? (
        <p className={cn("max-w-2xl text-lg leading-8", onInk ? "text-white/70" : "text-slate-600")}>
          {lead}
        </p>
      ) : null}
    </div>
  )
}

/** Content card. One card per group may be `featured` to carry the ink treatment. */
export function InfoCard({
  icon: Icon,
  eyebrow,
  title,
  body,
  featured = false,
}: {
  icon?: LucideIcon
  eyebrow?: string
  title: string
  body: string
  featured?: boolean
}) {
  return (
    <article
      className={cn(
        "min-w-0 rounded-2xl border p-6 sm:p-7",
        featured
          ? "border-teal-700 bg-slate-950 text-white"
          : "border-slate-200 bg-slate-50 text-slate-950"
      )}
    >
      {Icon ? (
        <div
          className={cn(
            "mb-7 flex h-12 w-12 items-center justify-center rounded-2xl",
            featured ? "bg-teal-500/15 text-teal-200" : "bg-teal-100 text-teal-700"
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
      ) : null}
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-black uppercase tracking-[0.18em]",
            featured ? "text-teal-200" : "text-teal-700"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h3 className={cn("mt-3 text-xl font-bold leading-snug", featured ? "text-white" : "text-slate-950")}>
        {title}
      </h3>
      <p className={cn("mt-3 leading-7", featured ? "text-white/70" : "text-slate-600")}>{body}</p>
    </article>
  )
}
