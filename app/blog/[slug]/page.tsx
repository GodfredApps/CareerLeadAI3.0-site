import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPostBySlug, getPublishedSlugs } from '@/lib/supabase-blog'
import { TiptapRenderer } from '@/components/tiptap-renderer'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  const title = post.seo_title || `${post.title} | CareerLead AI Blog`
  const description = post.seo_description || post.excerpt || `Read ${post.title} on CareerLead AI Blog`

  return {
    title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      publishedTime: post.published_at ?? undefined,
      authors: [post.author_name ?? 'CareerLead AI'],
      url: `https://careerlead.ai/blog/${post.slug}`,
      ...(post.featured_image_url
        ? { images: [{ url: post.featured_image_url }] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const publishedDate = post.published_at ?? post.created_at

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-teal-600">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-teal-600">Blog</Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 line-clamp-1">{post.title}</li>
            </ol>
          </nav>

          {/* Category Badge */}
          {post.category && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                {post.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>
          )}

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-6">
              <div>
                <p className="font-medium text-gray-900">
                  {post.author_name ?? 'CareerLead AI'}
                </p>
                {post.author_bio && (
                  <p className="text-xs">{post.author_bio}</p>
                )}
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <time dateTime={publishedDate}>
                {new Date(publishedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              {post.reading_time && (
                <>
                  <div className="h-4 w-px bg-gray-300" />
                  <span>{post.reading_time} min read</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          {post.content ? (
            <TiptapRenderer doc={post.content} />
          ) : (
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {post.excerpt}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Control of Your Career?
          </h2>
          <p className="text-lg mb-6 text-teal-50">
            Get AI-powered career recommendations, personalized learning paths, and expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/generate-career-paths"
              className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Generate Your Career Path
            </Link>
            <Link
              href="/resume-review"
              className="inline-block bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors border border-teal-400"
            >
              Get Resume Review
            </Link>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Share this article:</p>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://careerlead.ai/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://careerlead.ai/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600"
            >
              LinkedIn
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://careerlead.ai/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
          >
            ← Back to all articles
          </Link>
        </div>
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  try {
    const slugs = await getPublishedSlugs()
    return slugs.map((slug) => ({ slug }))
  } catch {
    return []
  }
}
