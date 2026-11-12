"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Mail, MapPin, type LucideIcon } from "lucide-react"
import { PageHero } from "@/components/marketing/page-hero"
import { SocialButtons } from '@/components/social-buttons'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const field =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/30"
  const label = "mb-2 block text-sm font-bold text-slate-950"

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the CareerLead AI team."
        lead="Questions, feedback or a partnership idea? Send us a message and we'll get back to you."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="min-w-0">
            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Get in touch</h2>
            <dl className="mt-8 grid gap-6">
              <ContactLine icon={Mail} term="Email">
                <a href="mailto:support@careerlead.ai" className="font-bold text-teal-700 underline-offset-4 hover:underline">
                  support@careerlead.ai
                </a>
              </ContactLine>
              <ContactLine icon={MapPin} term="Address">
                Accra, Ghana
              </ContactLine>
              <ContactLine icon={Clock} term="Office hours">
                Monday - Friday: 9:00 AM - 6:00 PM (PST)
                <br />
                Saturday - Sunday: Closed
              </ContactLine>
            </dl>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <h2 className="text-lg font-black text-slate-950">Follow us</h2>
              <p className="mt-2 text-slate-600">Job leads, career tips and events, wherever you scroll.</p>
              <div className="mt-4">
                <SocialButtons />
              </div>
            </div>

            <p className="mt-10 border-t border-slate-200 pt-8 text-slate-600">
              Looking for a quick answer? Try the{" "}
              <a href="/faq/" className="font-bold text-teal-700 underline-offset-4 hover:underline">
                FAQ
              </a>
              .
            </p>
          </div>

          <div className="min-w-0">
            {isSubmitted ? (
              <div className="rounded-3xl border border-teal-200 bg-teal-50 p-8" role="status">
                <h3 className="text-xl font-black text-slate-950">Message sent</h3>
                <p className="mt-2 leading-7 text-slate-700">
                  Thank you for reaching out. We&apos;ve received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-bold text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={label}>Name</label>
                    <input id="name" name="name" type="text" autoComplete="name" required value={formState.name} onChange={handleChange} className={field} />
                  </div>
                  <div>
                    <label htmlFor="email" className={label}>Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required value={formState.email} onChange={handleChange} className={field} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className={label}>Subject</label>
                  <select id="subject" name="subject" required value={formState.subject} onChange={handleChange} className={field}>
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Billing Question">Billing Question</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={label}>Message</label>
                  <textarea id="message" name="message" rows={6} required value={formState.message} onChange={handleChange} className={field} />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-14 items-center justify-center rounded-full bg-slate-950 px-8 text-base font-bold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function ContactLine({ icon: Icon, term, children }: { icon: LucideIcon; term: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{term}</dt>
        <dd className="mt-1 leading-7 text-slate-700">{children}</dd>
      </div>
    </div>
  )
}
