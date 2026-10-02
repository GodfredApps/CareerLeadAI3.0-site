import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/seo'

export const dynamic = 'force-static'

// SEO tools (Ahrefs, Semrush) are allowed so backlink and site audits can see the site.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: 'https://careerlead.ai',
  }
}
