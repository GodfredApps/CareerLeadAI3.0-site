import { sanityClient, postQuery } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  content: any[]
  category: string
  author: {
    name: string
    role?: string
  }
  readingTime: number
  publishedAt: string
  updatedAt?: string
}

export const revalidate = 3600 // Revalidate every hour

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post: BlogPost = await sanityClient.fetch(postQuery, {
    slug: params.slug,
  })

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | CareerLead AI Blog`,
    description: post.excerpt || `Read ${post.title} on CareerLead AI Blog`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on CareerLead AI Blog`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      url: `https://careerleadai.com/blog/${post.slug.current}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read ${post.title} on CareerLead AI Blog`,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post: BlogPost = await sanityClient.fetch(postQuery, {
    slug: params.slug,
  })

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-teal-600">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-teal-600">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 line-clamp-1">{post.title}</li>
            </ol>
          </nav>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>

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
                <p className="font-medium text-gray-900">{post.author.name}</p>
                {post.author.role && (
                  <p className="text-xs">{post.author.role}</p>
                )}
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <div className="h-4 w-px bg-gray-300" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          {post.content ? (
            <PortableText
              value={post.content}
              components={{
                block: {
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
                      {children}
                    </h3>
                  ),
                  normal: ({ children }) => (
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {children}
                    </p>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                      {children}
                    </ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                      {children}
                    </ol>
                  ),
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-bold text-gray-900">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-gray-800">{children}</em>
                  ),
                  link: ({ value, children }) => {
                    const target = (value?.href || '').startsWith('http')
                      ? '_blank'
                      : undefined
                    return (
                      <a
                        href={value?.href}
                        target={target}
                        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                        className="text-teal-600 hover:text-teal-700 underline"
                      >
                        {children}
                      </a>
                    )
                  },
                },
              }}
            />
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
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                post.title
              )}&url=${encodeURIComponent(
                `https://careerleadai.com/blog/${post.slug.current}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `https://careerleadai.com/blog/${post.slug.current}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600"
            >
              LinkedIn
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                `https://careerleadai.com/blog/${post.slug.current}`
              )}`}
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

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] {
      "slug": slug.current
    }
  `)

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}
