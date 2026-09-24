'use client'

import React, { useState } from 'react'
import {
  Building2,
  CheckCircle2,
  Globe,
  Mail,
  Phone,
  Sparkles,
  User,
  X,
  Users,
  Briefcase,
  GraduationCap,
  HeartHandshake,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface PartnerRequestModalProps {
  isOpen: boolean
  onClose: () => void
}

const PARTNER_TYPES = [
  { id: 'Hiring Partner', label: 'Corporate Hiring Partner', icon: Briefcase },
  { id: 'University / Education', label: 'University / Higher Ed', icon: GraduationCap },
  { id: 'Ecosystem / Incubator', label: 'Incubator / Startup Hub', icon: Globe },
  { id: 'CSR / Foundation', label: 'CSR & Foundation Partner', icon: HeartHandshake },
  { id: 'Mentorship Partner', label: 'Mentorship & Coaching Partner', icon: Users },
]

export function PartnerRequestModal({ isOpen, onClose }: PartnerRequestModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnerType: 'Hiring Partner',
    companySize: '10-50 employees',
    notes: '',
  })

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    try {
      const res = await fetch('/api/partners/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Failed to submit partner request')
      }

      setSubmitted(true)
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleResetAndClose = () => {
    setSubmitted(false)
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      partnerType: 'Hiring Partner',
      companySize: '10-50 employees',
      notes: '',
    })
    setErrorMessage('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl md:p-8">
        <button
          onClick={handleResetAndClose}
          className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 px-4 animate-fade-in">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h3 className="text-2xl font-black text-slate-950">Partnership Request Received!</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-md mx-auto">
              Thank you for reaching out, <span className="font-bold text-slate-900">{formData.contactName}</span>.
              Our partnerships team at <span className="font-bold text-teal-700">{formData.companyName}</span> will review your application and contact you shortly.
            </p>
            <div className="mt-8">
              <Button
                onClick={handleResetAndClose}
                className="h-12 rounded-full bg-slate-950 px-8 text-sm font-bold text-white hover:bg-slate-800"
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700 border border-teal-100">
                <Sparkles className="h-3.5 w-3.5 text-teal-600" />
                Partner Network Registration
              </span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Partner With CareerLead AI
            </h2>
            <p className="mt-1.5 text-xs text-slate-600 md:text-sm">
              Connect your organization, university, or hiring pipeline with top talent and AI career intelligence.
            </p>

            {errorMessage && (
              <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs font-semibold text-rose-700">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <Label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Partnership Category
                </Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {PARTNER_TYPES.map(({ id, label, icon: Icon }) => (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setFormData({ ...formData, partnerType: id })}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                        formData.partnerType === id
                          ? 'border-teal-600 bg-teal-50/80 text-teal-900 shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <Icon className={`h-4 w-4 flex-shrink-0 ${formData.partnerType === id ? 'text-teal-600' : 'text-slate-400'}`} />
                      <span className="truncate">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label className="text-xs font-bold text-slate-700">Organization / Company</Label>
                  <div className="relative mt-1">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      required
                      placeholder="e.g. Ashesi University / MTN"
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      className="pl-9 text-xs h-10 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-xs font-bold text-slate-700">Contact Person Name</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      required
                      placeholder="e.g. Ama Mensah"
                      value={formData.contactName}
                      onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                      className="pl-9 text-xs h-10 rounded-xl"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label className="text-xs font-bold text-slate-700">Work Email</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      required
                      type="email"
                      placeholder="ama@organization.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="pl-9 text-xs h-10 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-xs font-bold text-slate-700">Phone / WhatsApp</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="+233 24 000 0000"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-9 text-xs h-10 rounded-xl"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-xs font-bold text-slate-700">Partnership Details / Message</Label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your organization and how you would like to collaborate..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-xs focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                />
              </div>

              <div className="mt-6 flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleResetAndClose}
                  className="h-10 rounded-xl text-xs font-bold"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-10 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-6 text-xs font-bold text-white hover:from-teal-500 hover:to-emerald-500 shadow-md"
                >
                  {loading ? 'Submitting...' : 'Submit Partner Request'}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
