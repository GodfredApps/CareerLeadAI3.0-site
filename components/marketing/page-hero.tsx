import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

// The ink hero every inner page opens with: the homepage's ground (slate-950
// with the teal glow from the top right), an eyebrow, one headline and a
// lead. Children sit under the lead (buttons, a date line).

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  children?: ReactNode
  className?: string
}

export function PageHero({ eyebrow, title, lead, children, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-slate-950 text-white", className)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,148,136,0.22)_0%,rgba(15,23,42,0.98)_55%,rgba(15,23,42,1)_100%)]"
      />
      <div className="container relative px-4 py-20 md:px-6 md:py-28">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-300">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {lead ? <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{lead}</p> : null}
        {children}
      </div>
    </section>
  )
}

type CtaBandProps = {
  title: string
  lead?: string
  href: string
  label: string
}

/** The ink sign-up band that closes a page. */
export function CtaBand({ title, lead, href, label }: CtaBandProps) {
  return (
    <section className="bg-slate-950 py-20 text-white md:py-24">
      <div className="container px-4 text-center md:px-6">
        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
        {lead ? <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">{lead}</p> : null}
        <a
          href={href}
          className="mt-9 inline-flex h-14 items-center justify-center rounded-full bg-teal-600 px-8 text-base font-bold text-white shadow-xl shadow-teal-950/40 transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          {label}
        </a>
      </div>
    </section>
  )
}
