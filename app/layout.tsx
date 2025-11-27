import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CareerLead AI - AI-Powered Career Guidance for Ghana & Africa",
  description: "Navigate your career path with AI-powered guidance. CareerLead AI analyzes your unique profile to suggest personalized career paths and provide interactive coaching. Perfect for professionals in Ghana and across Africa.",
  keywords: "AI career guidance, career coaching Ghana, career paths Africa, AI job recommendations, career development Ghana, professional growth Africa",
  authors: [{ name: "CareerLead AI" }],
  creator: "CareerLead AI",
  publisher: "CareerLead AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://careerlead.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "CareerLead AI - AI-Powered Career Guidance",
    description: "Navigate your career path with AI-powered guidance tailored for Ghana and Africa",
    url: 'https://careerlead.ai',
    siteName: 'CareerLead AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CareerLead AI - AI-Powered Career Guidance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CareerLead AI - AI-Powered Career Guidance",
    description: "Navigate your career path with AI-powered guidance tailored for Ghana and Africa",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  // Cross-domain tracking configuration
                  linker: {
                    domains: ['app.careerlead.ai', 'careerlead.ai']
                  },
                  custom_map: {
                    'custom_parameter_1': 'ghana_market',
                    'custom_parameter_2': 'africa_market'
                  },
                  // Enhanced tracking for Ghana/Africa market
                  custom_map: {
                    'dimension1': 'user_location',
                    'dimension2': 'traffic_source', 
                    'dimension3': 'career_interest'
                  },
                  // Cross-domain session tracking
                  cookie_domain: 'auto',
                  cookie_flags: 'SameSite=None;Secure'
                });
              `}
            </Script>
          </>
        )}
        
        {/* Structured Data for Organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CareerLead AI",
            "description": "AI-powered career guidance platform for professionals in Ghana and Africa",
            "url": "https://careerlead.ai",
            "logo": "https://careerlead.ai/logo.png",
            "foundingDate": "2024",
            "founder": {
              "@type": "Person",
              "name": "CareerLead AI Team"
            },
            "areaServed": [
              {
                "@type": "Country",
                "name": "Ghana"
              },
              {
                "@type": "Continent",
                "name": "Africa"
              }
            ],
            "serviceType": "Career Coaching and Guidance",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "support@careerlead.ai"
            },
            "sameAs": [
              "https://www.linkedin.com/company/careerlead-ai",
              "https://x.com/careerlead_ai",
              "https://www.instagram.com/careerlead.ai/"
            ]
          })}
        </Script>

        {/* Structured Data for Service */}
        <Script
          id="structured-data-service"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI-Powered Career Guidance",
            "description": "Personalized career path recommendations and coaching using artificial intelligence",
            "provider": {
              "@type": "Organization",
              "name": "CareerLead AI"
            },
            "areaServed": [
              {
                "@type": "Country",
                "name": "Ghana"
              },
              {
                "@type": "Continent", 
                "name": "Africa"
              }
            ],
            "serviceType": "Career Development",
            "offers": {
              "@type": "Offer",
              "description": "AI career analysis and personalized recommendations",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}