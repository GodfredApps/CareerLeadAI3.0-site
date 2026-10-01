/**
 * Public site navigation — shared by the marketing site and the main app.
 *
 * KEEP IN SYNC: this file is byte-identical in both repos
 *   CareerLeadAI-Marketing/lib/site-nav.ts
 *   CareerLeadAI3.0/lib/site-nav.ts
 * The two apps are separate repos with no shared package, so the navbar and
 * footer each render from this data instead of hardcoding their own link
 * lists (which is how the two navbars drifted apart).
 *
 * Each link names the site that owns the page. On its own site it renders as a
 * relative link; on the other site it becomes an absolute URL. Marketing is a
 * static export with trailing slashes, so its paths end in "/" to avoid a 301.
 */

export type Site = 'marketing' | 'app'

export interface SiteLink {
  name: string
  site: Site
  path: string
}

export interface FooterSection {
  title: string
  links: readonly SiteLink[]
}

export interface SocialLink {
  name: string
  href: string
}

export const SITE_URLS: Readonly<Record<Site, string>> = {
  marketing: process.env.NEXT_PUBLIC_MARKETING_URL || 'https://careerlead.ai',
  app: process.env.NEXT_PUBLIC_APP_URL || 'https://app.careerlead.ai',
}

export const PUBLIC_NAV_LINKS: readonly SiteLink[] = [
  { name: 'Home', site: 'marketing', path: '/' },
  { name: 'Job Board', site: 'app', path: '/jobs' },
  { name: 'How It Works', site: 'marketing', path: '/how-it-works/' },
  { name: 'Become a Coach', site: 'marketing', path: '/become-a-coach/' },
  { name: 'Blog', site: 'marketing', path: '/blog/' },
  { name: "What's New", site: 'marketing', path: '/whats-new/' },
  { name: 'About', site: 'marketing', path: '/about/' },
  { name: 'FAQ', site: 'marketing', path: '/faq/' },
]

export const AUTH_LINKS: Readonly<Record<'signIn' | 'signUp', SiteLink>> = {
  signIn: { name: 'Sign In', site: 'app', path: '/login' },
  signUp: { name: 'Start Free', site: 'app', path: '/signup' },
}

export const FOOTER_SECTIONS: readonly FooterSection[] = [
  {
    title: 'Platform',
    links: [
      { name: 'How It Works', site: 'marketing', path: '/how-it-works/' },
      { name: 'Job Board', site: 'app', path: '/jobs' },
      { name: 'Blog', site: 'marketing', path: '/blog/' },
      { name: "What's New", site: 'marketing', path: '/whats-new/' },
      { name: 'About Us', site: 'marketing', path: '/about/' },
      { name: 'FAQ', site: 'marketing', path: '/faq/' },
      { name: 'Contact Us', site: 'marketing', path: '/contact/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', site: 'marketing', path: '/privacy/' },
      { name: 'Terms of Service', site: 'marketing', path: '/terms/' },
      { name: 'Cookie Policy', site: 'marketing', path: '/cookies/' },
    ],
  },
]

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { name: 'Twitter', href: 'https://x.com/careerlead_ai' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/careerlead-ai' },
  { name: 'Instagram', href: 'https://www.instagram.com/careerlead.ai/' },
]

/** Relative on the owning site, absolute everywhere else. */
export function resolveSiteHref(link: SiteLink, currentSite: Site): string {
  return link.site === currentSite ? link.path : `${SITE_URLS[link.site]}${link.path}`
}

/** True when the link points at the page currently open on this site. */
export function isActiveLink(link: SiteLink, currentSite: Site, pathname: string | null): boolean {
  if (link.site !== currentSite || !pathname) return false
  const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p)
  return normalize(link.path) === normalize(pathname)
}
