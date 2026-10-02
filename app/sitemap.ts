import type { MetadataRoute } from 'next'
import { STATIC_ROUTES, absoluteUrl } from '@/lib/seo'
import { getSitemapPosts } from '@/lib/supabase-blog'

export const dynamic = 'force-static'

// Static pages have no lastModified: a build timestamp would claim every page
// changed on every deploy, which teaches Google to ignore lastmod.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getSitemapPosts()

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: absoluteUrl(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}/`),
      lastModified: post.updated_at ?? post.published_at ?? undefined,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
