// A list of questions as native <details> (works without JavaScript, keyboard
// and screen-reader friendly) plus FAQPage structured data built from the
// same list, so what Google reads always matches what the page shows.

export type Faq = { q: string; a: string }

export function FaqList({ faqs }: { faqs: Faq[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  }

  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {/* Static, author-written JSON; no user input reaches it */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqs.map(({ q, a }) => (
        <details key={q} className="group">
          <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold text-slate-950 marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600 [&::-webkit-details-marker]:hidden">
            {q}
            <span
              className="relative h-4 w-4 flex-none before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-teal-700 after:absolute after:left-1/2 after:top-0 after:h-4 after:w-0.5 after:-translate-x-1/2 after:bg-teal-700 after:transition-transform group-open:after:scale-y-0"
              aria-hidden="true"
            />
          </summary>
          <p className="-mt-2 max-w-2xl pb-6 leading-7 text-slate-600">{a}</p>
        </details>
      ))}
    </div>
  )
}
