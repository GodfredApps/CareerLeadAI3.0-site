'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Building2, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PartnerRequestModal } from './partner-request-modal'
import { createClient } from '@supabase/supabase-js'

import { INITIAL_OFFICIAL_PARTNERS } from '@/lib/partner-store'

interface Partner {
  id?: string
  name: string
  category: string
  badge: string
  logo_url?: string
  website_url?: string
}

const VALID_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrZWNzcHpldndtZW1wenN5d3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzODAxMjMsImV4cCI6MjA2NDk1NjEyM30.cuuV3kY310jbibuQ2hLTHp5ELK5I7lA8vuzJpy5DLYg'

const DEFAULT_PARTNERS: Partner[] = Object.values(INITIAL_OFFICIAL_PARTNERS).map(p => ({
  id: p.id,
  name: p.company_name,
  category: p.partner_type,
  badge: p.badge,
  logo_url: p.logo_url || '',
  website_url: p.website_url,
}))

function PartnerLogo({ logoUrl, name }: { logoUrl?: string; name: string }) {
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    setImgError(false)
  }, [logoUrl])

  if (logoUrl && !imgError) {
    return (
      <div className="h-10 w-auto max-w-[140px] flex items-center justify-start">
        <img
          key={logoUrl}
          src={logoUrl}
          alt={name}
          className="h-full w-auto object-contain max-h-10"
          onError={() => setImgError(true)}
        />
      </div>
    )
  }

  return (
    <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors">
      <Building2 className="h-5 w-5" />
    </div>
  )
}

export function TrustedBySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [partners, setPartners] = useState<Partner[]>(DEFAULT_PARTNERS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLivePartners() {
      try {
        // 1. Direct real-time query to Supabase Database employer_requests table
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://skecspzevwmempzsywwp.supabase.co'
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || VALID_ANON_KEY
        const supabase = createClient(url, key)

        const { data: dbData, error: dbErr } = await supabase
          .from('employer_requests')
          .select('id, company_name, partner_type, badge, logo_url, website_url, status')
          .eq('status', 'APPROVED')
          .order('submitted_at', { ascending: false })

        if (!dbErr && dbData && dbData.length > 0) {
          const dbFormatted: Partner[] = dbData.map((p: any) => ({
            id: p.id,
            name: p.company_name,
            category: p.partner_type || 'Hiring Partner',
            badge: p.badge || 'Official Partner',
            logo_url: p.logo_url || '',
            website_url: p.website_url || '',
          }))

          // Merge DB items with default partners for any missing default partners
          const dbNames = new Set(dbFormatted.map(f => f.name.toLowerCase().trim()))
          const merged = [...dbFormatted]

          DEFAULT_PARTNERS.forEach(def => {
            if (!dbNames.has(def.name.toLowerCase().trim())) {
              merged.push(def)
            }
          })

          setPartners(merged)
          return
        }

        // 2. Fallback to /api/partners/approved
        const res = await fetch('/api/partners/approved')
        if (res.ok) {
          const data = await res.json()
          if (data.partners && data.partners.length > 0) {
            setPartners(data.partners)
            return
          }
        }
      } catch (err) {
        console.warn('Could not fetch live database partners, using default list:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchLivePartners()
  }, [])

  return (
    <section className="border-y border-slate-200/80 bg-gradient-to-b from-slate-50/70 via-white to-teal-50/20 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800 mb-3">
              <ShieldCheck className="h-3.5 w-3.5 text-teal-600" />
              <span>Institutional & Ecosystem Network</span>
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-4xl">
              Trusted by leading organizations across Africa.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              We collaborate with visionary organizations and tech leaders to connect African talent with AI-powered career growth and structured mentorship.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map(partner => (
            <div
              key={partner.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <PartnerLogo logoUrl={partner.logo_url} name={partner.name} />

                  <span className="text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-100 group-hover:bg-teal-100 px-2.5 py-0.5 rounded-full transition-colors whitespace-nowrap">
                    {partner.badge}
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-900 leading-snug group-hover:text-teal-800 transition-colors">
                  {partner.name}
                </h3>
              </div>

              <p className="mt-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
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
