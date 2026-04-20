import { createClient } from '@supabase/supabase-js'

// Use service role key if available (bypasses RLS), otherwise anon key
// Both are safe here — this file only runs server-side (no 'use client')
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  featured_image_url: string | null
  category: string | null
  author_name: string | null
  author_bio: string | null
  reading_time: number | null
  published_at: string | null
  created_at: string
  featured: boolean
  content: TiptapDoc | null
  seo_title: string | null
  seo_description: string | null
  career_tags: string[] | null
  skill_tags: string[] | null
}

export type TiptapDoc = {
  type: 'doc'
  content: TiptapNode[]
}

export type TiptapNode = {
  type: string
  attrs?: Record<string, unknown>
  content?: TiptapNode[]
  marks?: TiptapMark[]
  text?: string
}

export type TiptapMark = {
  type: string
  attrs?: Record<string, unknown>
}

/** Fetch all published posts for the blog listing page. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(
      'id, title, slug, excerpt, featured_image_url, category, author_name, author_bio, reading_time, published_at, created_at, featured'
    )
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) throw new Error(error.message)
  return (data ?? []) as BlogPost[]
}

/** Fetch a single published post by slug. */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) return null
  return data as BlogPost
}

/** Fetch slugs of all published posts (for generateStaticParams). */
export async function getPublishedSlugs(): Promise<string[]> {
  const { data } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('status', 'published')

  return (data ?? []).map((p: { slug: string }) => p.slug)
}
