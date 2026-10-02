import type { Metadata, MetadataRoute } from 'next'

export const SITE_URL = 'https://careerlead.ai'
export const SITE_NAME = 'CareerLead AI'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.careerlead.ai'

export const DEFAULT_OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'CareerLead AI - AI-powered career guidance for Ghana and Africa',
} as const

interface StaticRoute {
  path: string
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: number
}

/**
 * Every indexable static page. A new page must be added here: sitemap.ts
 * reads this list, and scripts/check-seo.mjs fails the build when a built
 * page is indexable but missing from the sitemap.
 */
export const STATIC_ROUTES: readonly StaticRoute[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/how-it-works/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/become-a-coach/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog/', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/whats-new/', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/about/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/faq/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact/', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/privacy/', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms/', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/cookies/', changeFrequency: 'yearly', priority: 0.2 },
]

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString()
}

interface PageSeo {
  title: string
  description: string
  /** Site path with trailing slash, e.g. '/about/'. Used as the canonical URL. */
  path: string
  keywords?: readonly string[]
  image?: { url: string; width?: number; height?: number; alt?: string }
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: readonly string[]
  noIndex?: boolean
}

/**
 * Full metadata for a page. Next replaces (not merges) nested objects like
 * openGraph, so each page gets the complete set here rather than relying on
 * the root layout.
 */
export function pageMetadata(seo: PageSeo): Metadata {
  const url = absoluteUrl(seo.path)
  const image = seo.image ?? DEFAULT_OG_IMAGE

  return {
    title: { absolute: seo.title },
    description: seo.description,
    ...(seo.keywords ? { keywords: [...seo.keywords] } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: seo.type ?? 'website',
      images: [image],
      ...(seo.type === 'article'
        ? {
            publishedTime: seo.publishedTime,
            modifiedTime: seo.modifiedTime,
            authors: seo.authors ? [...seo.authors] : undefined,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@careerlead_ai',
      title: seo.title,
      description: seo.description,
      images: [image.url],
    },
    ...(seo.noIndex ? { robots: { index: false, follow: true } } : {}),
  }
}

export function breadcrumbJsonLd(items: readonly { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
