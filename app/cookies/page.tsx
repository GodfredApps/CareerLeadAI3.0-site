import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | CareerLead AI Ghana",
  description: "Learn about how CareerLead AI uses cookies to improve your experience on our AI career guidance platform for Ghana and Africa.",
  keywords: "cookie policy, cookies Ghana, data tracking, website cookies Africa",
}

export default function CookiesPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:py-16 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Cookie Policy
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Last updated: January 2024
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our AI career guidance platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function properly. They enable basic features like page navigation, access to secure areas, and account authentication.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  We use Google Analytics to understand how visitors use our platform, which pages are most popular, and how we can improve the user experience for African professionals.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Functional Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies remember your preferences, such as language settings, career interests, and location preferences within Ghana or Africa.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Performance Cookies</h3>
                <p className="text-muted-foreground">
                  These help us monitor and improve the performance of our AI career coaching platform, ensuring fast loading times and smooth user experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="border border-border p-3 text-left">Cookie Name</th>
                    <th className="border border-border p-3 text-left">Purpose</th>
                    <th className="border border-border p-3 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-medium">_ga</td>
                    <td className="border border-border p-3 text-muted-foreground">Google Analytics - distinguishes users</td>
                    <td className="border border-border p-3 text-muted-foreground">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">_ga_*</td>
                    <td className="border border-border p-3 text-muted-foreground">Google Analytics - session information</td>
                    <td className="border border-border p-3 text-muted-foreground">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">session_token</td>
                    <td className="border border-border p-3 text-muted-foreground">User authentication</td>
                    <td className="border border-border p-3 text-muted-foreground">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">user_preferences</td>
                    <td className="border border-border p-3 text-muted-foreground">Remember user settings</td>
                    <td className="border border-border p-3 text-muted-foreground">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-muted-foreground mb-4">
              You have several options for managing cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Browser Settings: Most browsers allow you to view, delete, and block cookies</li>
              <li>Opt-out Tools: You can opt out of Google Analytics tracking</li>
              <li>Platform Settings: Adjust your preferences in your CareerLead AI account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Browser-Specific Instructions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Google Chrome</h3>
                <p className="text-muted-foreground">
                  Settings → Privacy and security → Cookies and other site data
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Mozilla Firefox</h3>
                <p className="text-muted-foreground">
                  Settings → Privacy & Security → Cookies and Site Data
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Safari</h3>
                <p className="text-muted-foreground">
                  Preferences → Privacy → Manage Website Data
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Microsoft Edge</h3>
                <p className="text-muted-foreground">
                  Settings → Cookies and site permissions → Cookies and site data
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Impact of Disabling Cookies</h2>
            <p className="text-muted-foreground mb-4">
              If you disable cookies, some features of our platform may not function properly:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>You may need to log in repeatedly</li>
              <li>Your preferences won't be saved</li>
              <li>Some personalized career recommendations may be less accurate</li>
              <li>We won't be able to improve our services based on usage patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground">
              We may use third-party services that set their own cookies, including Google Analytics for understanding user behavior and improving our career guidance for African professionals. These third parties have their own privacy policies governing their use of cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
              <p className="text-muted-foreground">
                Email: privacy@careerlead.ai<br />
                Subject: Cookie Policy Inquiry
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}