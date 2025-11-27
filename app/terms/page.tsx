import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | CareerLead AI Ghana",
  description: "Read CareerLead AI's terms of service for our AI career guidance platform serving professionals in Ghana and Africa.",
  keywords: "terms of service, AI career coaching terms, CareerLead AI agreement Ghana",
}

export default function TermsPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:py-16 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Terms of Service
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Last updated: January 2024
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using CareerLead AI's services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
            <p className="text-muted-foreground">
              CareerLead AI provides AI-powered career guidance, coaching, and professional development services specifically designed for professionals in Ghana and across Africa. Our services include career path recommendations, AI coaching, and career development insights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                To access certain features, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the security of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
            <p className="text-muted-foreground mb-4">
              You agree not to use our services to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate any person or entity</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services for any commercial purpose without authorization</li>
              <li>Interfere with or disrupt our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">AI Career Guidance Disclaimer</h2>
            <p className="text-muted-foreground">
              Our AI provides career guidance based on data analysis and algorithms. While we strive for accuracy, our recommendations are for informational purposes only and should not be considered as professional career counseling or guarantee of employment outcomes. You are solely responsible for your career decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and AI algorithms, are owned by CareerLead AI and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Content</h2>
            <p className="text-muted-foreground">
              You retain ownership of content you submit to our platform. However, by submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and analyze your content to provide and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Privacy</h2>
            <p className="text-muted-foreground">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices regarding your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
            <p className="text-muted-foreground">
              We strive to maintain high availability of our services but cannot guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              CareerLead AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to defend, indemnify, and hold harmless CareerLead AI from and against any claims, damages, costs, and expenses arising from your violation of these terms or your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including if you breach these terms. Upon termination, your right to use our services will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
              <p className="text-muted-foreground">
                Email: legal@careerlead.ai<br />
                Subject: Terms of Service Inquiry
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}