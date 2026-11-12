import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { CtaBand, PageHero } from '@/components/marketing/page-hero'
import { APP_URL } from '@/lib/seo'

// What's new: a dated news feed of what has shipped, newest first. The latest
// release leads with real screenshots; everything else is a short entry.
// Add new entries to the top of UPDATES and move the date in LAST_UPDATED.

const LAST_UPDATED = '12 November 2026'

type Tag = 'New' | 'Improved'

type Update = {
  date: string
  tag: Tag
  title: string
  body: string
  points?: string[]
  link?: { href: string; label: string }
}

type Month = { month: string; updates: Update[] }

const UPDATES: Month[] = [
  {
    month: 'November 2026',
    updates: [
      {
        date: '12 Nov',
        tag: 'Improved',
        title: 'A fresh look for careerlead.ai',
        body:
          'Our website has a new home page and cleaner pages throughout, with short animated demos that show how CareerLead works before you sign up.',
        link: { href: '/how-it-works/', label: 'See how it works' },
      },
      {
        date: '10 Nov',
        tag: 'New',
        title: 'Daily Career Challenge',
        body:
          'One quick career question a day. Answer it in under a minute, see the explanation, and keep your streak going. You can play without an account; sign in to keep your XP.',
        link: { href: `${APP_URL}/challenge`, label: "Play today's challenge" },
      },
      {
        date: '7 Nov',
        tag: 'New',
        title: 'XP, streaks and badges',
        body:
          'The things that move your career forward now earn XP: finishing your profile, asking the AI coach, reviewing your CV, applying for jobs, registering for events and making connections. Your progress card on the home page shows your level and streak.',
      },
      {
        date: '5 Nov',
        tag: 'Improved',
        title: 'A sharper AI coach',
        body:
          'The coach now answers first and keeps it short, uses your profile to make advice specific to you, and asks at most one follow-up question. Tell it a career you want and use "Plan my path" to get a step-by-step plan.',
        link: { href: `${APP_URL}/ai-coach`, label: 'Ask the coach' },
      },
      {
        date: '1 Nov',
        tag: 'Improved',
        title: 'Event reminders',
        body:
          "Registered for an event? We'll email you a reminder a day before and again an hour before it starts, with the joining link.",
      },
    ],
  },
  {
    month: 'October 2026',
    updates: [
      {
        date: '25 Oct',
        tag: 'New',
        title: 'Networking',
        body:
          'Turn on your networking card to be matched with people who share your values, interests, industry and country. Send a request with a short note; once they accept, you can message each other in CareerLead and swap contact details.',
        link: { href: `${APP_URL}/networking`, label: 'Find people to meet' },
      },
      {
        date: '25 Oct',
        tag: 'New',
        title: 'Career events',
        body:
          'Browse upcoming career events and register in one tap. You get a confirmation email with a calendar invite, and the joining link is shared only with people who registered.',
        link: { href: `${APP_URL}/networking`, label: 'See upcoming events' },
      },
      {
        date: '25 Oct',
        tag: 'Improved',
        title: 'CV review, rebuilt',
        body:
          "Every review now reads your actual CV. You get a score, what's working, what to fix and rewritten lines you can copy, and you can name the role you're aiming for. Download the full report when you're done.",
        link: { href: `${APP_URL}/resume-review`, label: 'Review your CV' },
      },
      {
        date: '25 Oct',
        tag: 'Improved',
        title: 'A clearer profile page',
        body:
          'Your profile loads straight into one tidy layout, shows how complete it is, and tells you the next thing worth adding. Each section has its own edit link.',
        link: { href: `${APP_URL}/profile`, label: 'Open your profile' },
      },
      {
        date: '1 Oct',
        tag: 'New',
        title: 'Job board',
        body:
          'Find open roles across Africa and remote jobs from our partners, with each job on its own page that you can share with a friend.',
        link: { href: `${APP_URL}/jobs`, label: 'Browse jobs' },
      },
    ],
  },
]

const HIGHLIGHTS = [
  'Your closest career path leads your home page, with a fit score and the reason behind it.',
  'A career map shows every path as a route from where you are today: shorter route, closer fit.',
  'Each path lists the skills you already have and the ones still on the way.',
  'Jobs picked for you come with a reason they match.',
  'Press ⌘K (Ctrl K on Windows) to jump to anything, and move between pages without reloads.',
  'Built for your phone too, with a tab bar and a map that fits a small screen.',
]

const MAP_ALT =
  "The career map: three paths branch out from 'You today, Junior Data Analyst'. The closest, Healthcare Data Analyst at 85% fit, shows three skills on the way: statistical analysis, data visualization and SQL."

export default function WhatsNewContent() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHero
        eyebrow="What's new"
        title="What's new at CareerLead AI."
        lead="Everything we've shipped lately, newest first. CareerLead is free, and every update below is already live for you."
      >
        <p className="mt-8 text-sm font-semibold text-slate-400">Last updated {LAST_UPDATED}</p>
      </PageHero>

      <LatestRelease />

      <section aria-labelledby="earlier-heading" className="bg-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2
            id="earlier-heading"
            className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl"
          >
            Earlier updates
          </h2>
          <div className="mt-12 space-y-16">
            {UPDATES.map(group => (
              <MonthGroup key={group.month} group={group} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="See it for yourself."
        lead="Create a free account and find the career path you're closest to."
        href={`${APP_URL}/signup`}
        label="Get started free"
      />
    </div>
  )
}

function LatestRelease() {
  return (
    <section aria-labelledby="latest-heading" className="overflow-hidden bg-slate-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
              <TagPill tag="New" />
              <time dateTime="2026-11-12" className="text-slate-500">
                12 November 2026
              </time>
            </div>
            <h2
              id="latest-heading"
              className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl"
            >
              A new home for your career
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              We rebuilt the CareerLead workspace around one question: how close are you to your
              next role, and what is the way there?
            </p>
            <ul className="mt-8 space-y-4">
              {HIGHLIGHTS.map(point => (
                <li key={point} className="flex gap-3 text-base leading-7 text-slate-700">
                  <Check className="mt-1 h-5 w-5 flex-none text-teal-600" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={`${APP_URL}/dashboard`}
              className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-7 text-base font-bold text-white transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              Open your workspace <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div className="relative pb-16 sm:pb-0 sm:pr-16">
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15">
              <Image
                src="/whats-new/workspace-dashboard.jpg"
                alt="The new CareerLead home page: the closest career path at an 85% fit, first steps with XP, and a list of career paths with fit scores and salary ranges."
                width={1600}
                height={852}
                className="h-auto w-full"
                priority
              />
            </figure>
            <figure className="absolute -bottom-2 right-0 w-[34%] max-w-[190px] overflow-hidden rounded-[1.6rem] border-[5px] border-slate-950 bg-slate-950 shadow-2xl shadow-slate-900/30 sm:-bottom-10">
              <Image
                src="/whats-new/phone-dashboard.jpg"
                alt="The same home page on a phone."
                width={700}
                height={1515}
                className="h-auto w-full rounded-[1.2rem]"
              />
            </figure>
          </div>
        </div>

        <figure className="mt-20 md:mt-28">
          <div className="mx-auto max-w-md overflow-hidden rounded-2xl bg-[#0d2233] shadow-xl shadow-slate-900/10 sm:max-w-none">
            <Image
              src="/whats-new/career-map-phone.jpg"
              alt={MAP_ALT}
              width={760}
              height={806}
              className="h-auto w-full sm:hidden"
            />
            <Image
              src="/whats-new/career-map.jpg"
              alt={MAP_ALT}
              width={1400}
              height={469}
              className="hidden h-auto w-full sm:block"
            />
          </div>
          <figcaption className="mt-4 text-sm leading-6 text-slate-500">
            The career map. Each path is drawn as a route from where you are today, with the skills
            you&apos;ll pick up on the way.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function MonthGroup({ group }: { group: Month }) {
  return (
    <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
      <h3 className="text-sm font-black uppercase tracking-[0.18em] text-teal-700 md:sticky md:top-24 md:self-start">
        {group.month}
      </h3>
      <ol className="divide-y divide-slate-200 border-y border-slate-200">
        {group.updates.map(update => (
          <UpdateEntry key={`${update.date}-${update.title}`} update={update} />
        ))}
      </ol>
    </div>
  )
}

function UpdateEntry({ update }: { update: Update }) {
  return (
    <li className="grid gap-3 py-8 sm:grid-cols-[88px_1fr] sm:gap-8">
      <p className="text-sm font-semibold text-slate-500">{update.date}</p>
      <article>
        <div className="flex flex-wrap items-center gap-3">
          <h4 className="text-xl font-bold tracking-tight text-slate-950">{update.title}</h4>
          <TagPill tag={update.tag} />
        </div>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{update.body}</p>
        {update.link ? (
          <a
            href={update.link.href}
            className="mt-4 inline-flex items-center text-sm font-bold text-teal-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            {update.link.label} <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </a>
        ) : null}
      </article>
    </li>
  )
}

function TagPill({ tag }: { tag: Tag }) {
  const style =
    tag === 'New'
      ? 'bg-teal-50 text-teal-800 ring-teal-200'
      : 'bg-amber-50 text-amber-800 ring-amber-200'
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ring-1 ring-inset ${style}`}>
      {tag}
    </span>
  )
}
