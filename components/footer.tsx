import Link from "next/link"
import Image from "next/image"
import { IMAGES } from "@/lib/supabase-storage"
import { FOOTER_SECTIONS, SOCIAL_LINKS, resolveSiteHref } from "@/lib/site-nav"

const CURRENT_SITE = "marketing" as const
const LINK_CLASS = "text-white/55 hover:text-white"
const HEADING_CLASS = "mb-4 text-xs font-black uppercase tracking-[0.18em] text-teal-300"

// Link lists come from lib/site-nav.ts, shared with the main app's footer.
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
          {FOOTER_SECTIONS.map(section => (
            <div key={section.title}>
              <h3 className={HEADING_CLASS}>{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link href={resolveSiteHref(link, CURRENT_SITE)} className={LINK_CLASS}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className={HEADING_CLASS}>Connect</h3>
            <ul className="space-y-2 text-sm">
              {SOCIAL_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noreferrer" className={LINK_CLASS}>
                    {link.name}
                  </a>
                </li>
              ))}
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
