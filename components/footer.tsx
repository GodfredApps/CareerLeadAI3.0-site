import Link from "next/link"
import Image from "next/image"
import { IMAGES } from "@/lib/supabase-storage"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src={IMAGES.logo}
                alt="CareerLead AI Logo"
                width={72}
                height={72}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-sm"
              />
              <span className="font-bold text-lg sm:text-xl">CareerLead AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">AI-powered career advice and coaching for young professionals.</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://x.com/careerlead_ai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/careerlead-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/careerlead.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CareerLead AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}