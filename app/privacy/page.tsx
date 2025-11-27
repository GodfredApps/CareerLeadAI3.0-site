import type { Metadata } from "next"
import { Compass } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | CareerLead AI",
  description: "Learn how CareerLead AI collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:py-16 md:px-6">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-full bg-primary/10 p-3">
            <Compass className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Last updated: June 7, 2025</p>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p>
            At CareerLead AI, we take your privacy seriously. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our website and services.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Personal information (name, email address, phone number)</li>
            <li>Profile information (education, work experience, skills)</li>
            <li>Assessment responses and career preferences</li>
            <li>Communications with our AI coach and support team</li>
            <li>Payment information (processed by our secure payment providers)</li>
          </ul>

          <p>We also automatically collect certain information when you use our services:</p>
          <ul>
            <li>Log data (IP address, browser type, pages visited)</li>
            <li>Device information (hardware model, operating system)</li>
            <li>Usage data (features used, interactions with our platform)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Create and update your account and profile</li>
            <li>Generate personalized career recommendations</li>
            <li>Provide AI coaching and career guidance</li>
            <li>Process payments and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze trends and usage</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize your experience and provide content relevant to your interests</li>
          </ul>

          <h2>Sharing of Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li>
              With vendors, consultants, and service providers who need access to such information to perform services
              on our behalf
            </li>
            <li>
              In response to a request for information if we believe disclosure is in accordance with applicable law
            </li>
            <li>If we believe your actions are inconsistent with our user agreements or policies</li>
            <li>
              In connection with, or during negotiations of, any merger, sale of company assets, financing, or
              acquisition
            </li>
            <li>With your consent or at your direction</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal
            information. However, no security system is impenetrable, and we cannot guarantee the security of our
            systems 100%.
          </p>

          <h2>Data Retention</h2>
          <p>
            We store the information we collect about you for as long as is necessary for the purpose(s) for which we
            collected it or for other legitimate business purposes, including to meet our legal, regulatory, or other
            compliance obligations.
          </p>

          <h2>Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information:</p>
          <ul>
            <li>Access and update your information through your account settings</li>
            <li>Request deletion of your personal information</li>
            <li>Object to the processing of your personal information</li>
            <li>Data portability rights</li>
            <li>Opt out of marketing communications</li>
            <li>Cookie preferences</li>
          </ul>

          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>
            Email: privacy@careerlead.ai
            <br />
            Address: 123 Career Street, San Francisco, CA 94105, United States
          </p>
        </div>
      </div>
    </div>
  )
}