'use client'

import React, { useState } from 'react'
import { ArrowRight, Building2, HeartHandshake, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PartnerRequestModal } from './partner-request-modal'

const PARTNER_LOGOS = [
  { name: 'Mastercard Foundation', category: 'Foundation Partner', badge: 'Youth Impact' },
  { name: 'Ashesi University', category: 'Higher Education', badge: 'Academic Network' },
  { name: 'MEST Africa', category: 'Tech Incubator', badge: 'Venture Hub' },
  { name: 'Stanbic Bank', category: 'Corporate Hiring', badge: 'Finance & Banking' },
  { name: 'Hubtel', category: 'Tech Enterprise', badge: 'Software & Fintech' },
  { name: 'MTN Ghana', category: 'Telecom & Tech', badge: 'Enterprise Leader' },
]

export function TrustedBySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="border-y border-slate-200/80 bg-gradient-to-b from-slate-50/70 via-white to-teal-50/20 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800 mb-3">
              <ShieldCheck className="h-3.5 w-3.5 text-teal-600" />
              <span>Institutional & Hiring Ecosystem</span>
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-4xl">
              Trusted by leading organizations, universities, and enterprise hiring teams.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              We partner with top institutions and employers across Africa to connect talent with market-ready career paths and structured mentoring.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="h-12 rounded-full bg-gradient-to-r from-teal-700 to-emerald-700 px-7 text-xs font-bold text-white shadow-lg shadow-teal-950/20 hover:from-teal-600 hover:to-emerald-600 transition-all duration-200 hover:scale-[1.02]"
            >
              <HeartHandshake className="mr-2 h-4 w-4 text-teal-200" />
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Partner Logo Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNER_LOGOS.map(partner => (
            <div
              key={partner.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-3">
                  <div className="p-2 rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 bg-slate-100 group-hover:bg-teal-50 group-hover:text-teal-800 px-2 py-0.5 rounded-full transition-colors">
                    {partner.badge}
                  </span>
                </div>
                <h3 className="text-sm font-black text-slate-900 leading-tight group-hover:text-teal-800 transition-colors">
                  {partner.name}
                </h3>
              </div>
              <p className="mt-3 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                {partner.category}
              </p>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 rounded-3xl border border-teal-200/80 bg-gradient-to-r from-slate-950 via-slate-900 to-teal-950 p-6 md:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300 flex-shrink-0">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Want to empower your students, employees, or alumni network?</h4>
              <p className="text-xs text-slate-300 mt-1">Join our institutional partner network to get custom talent analytics and tailored career intelligence.</p>
            </div>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto whitespace-nowrap rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black h-11 px-6 shadow-md"
          >
            Become a Partner
          </Button>
        </div>
      </div>

      <PartnerRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
