"use client"

import type React from "react"

import { useState } from "react"
import { Compass, Mail, Phone, MapPin } from "lucide-react"

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

  return (
    <div className="container max-w-5xl py-12 px-4 md:py-16 md:px-6">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-full bg-primary/10 p-3">
            <Compass className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Have questions or feedback? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">support@careerlead.ai</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    123 Career Street
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
              <p className="text-muted-foreground mb-2">Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
              <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700 mb-4">
                  Thank you for reaching out. We&apos;ve received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 text-sm font-medium text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-muted p-6 rounded-lg">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Billing Question">Billing Question</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-6">
            Find quick answers to common questions on our FAQ page.
          </p>
          <div className="flex justify-center">
            <a
              href="/faq/"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}