import Link from "next/link"
import Image from "next/image"
import { IMAGES } from "@/lib/supabase-storage"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container px-4 py-14 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={IMAGES.logo}
                alt="CareerLead AI Logo"
                width={72}
                height={72}
                className="h-12 w-12 rounded-xl bg-white object-contain"
              />
              <span className="text-xl font-black tracking-tight">CareerLead AI</span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-white/55">
              AI-powered career paths, resume guidance, and coaching for African professionals.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-teal-300">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="text-white/55 hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/55 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/whats-new" className="text-white/55 hover:text-white">
                  What's New
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/55 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/55 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/55 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-teal-300">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-white/55 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/55 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/55 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-teal-300">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://x.com/careerlead_ai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/55 hover:text-white"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/careerlead-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/55 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/careerlead.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/55 hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} CareerLead AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
