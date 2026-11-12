import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from 'next/link'
import { getPublishedPosts } from '@/lib/supabase-blog'
import { PageHero } from "@/components/marketing/page-hero"

export const metadata: Metadata = pageMetadata({
  path: "/blog/",
  title: "Career Advice Blog: CVs, Jobs & Salaries in Africa | CareerLead AI",
  description:
    "Career advice for Africa: how to write a CV, remote jobs, highest paying jobs in Ghana, salary guides and in-demand skills for 2026.",
  keywords: ["career advice", "how to write a CV", "remote jobs Africa", "highest paying jobs in Ghana", "in demand skills"],
})

export default async function BlogPage() {
  const posts = await getPublishedPosts()

  return (
    <>
      <PageHero
        eyebrow="Career guides"
        title="Career Advice Blog for African Professionals"
        lead="CV tips, salary guides, remote jobs and in-demand skills for Ghana, Nigeria, Kenya and beyond"
      />
      <section className="bg-slate-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No blog posts published yet.</p>
          </div>
        ) : (
          <>
            {/* Featured Posts */}
            {posts.some((post) => post.featured) && (
              <div className="mb-16">
                <h2 className="text-2xl font-black tracking-tight text-slate-950 mb-6">Featured Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts
                    .filter((post) => post.featured)
                    .map((post) => (
                      <article
                        key={post.id}
                        className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition-colors hover:border-teal-300"
                      >
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                              {post.category}
                            </span>
                            <span className="text-xs text-slate-500">
                              {post.reading_time} min read
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-slate-950 mb-2 line-clamp-2">
                            {post.title}
                          </h3>

                          {post.excerpt && (
                            <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-slate-950">
                                {post.author_name ?? 'CareerLead AI'}
                              </p>
                              {post.author_bio && (
                                <p className="text-xs text-slate-500 line-clamp-1">
                                  {post.author_bio}
                                </p>
                              )}
                            </div>
                            <time className="text-xs text-slate-500">
                              {new Date(post.published_at ?? post.created_at).toLocaleDateString(
                                'en-US',
                                { month: 'short', day: 'numeric', year: 'numeric' }
                              )}
                            </time>
                          </div>

                          <Link
                            href={`/blog/${post.slug}/`}
                            className="mt-4 inline-block text-teal-600 hover:text-teal-700 font-medium text-sm"
                          >
                            Read More →
                          </Link>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-950 mb-6">
                {posts.some((post) => post.featured) ? 'All Posts' : 'Latest Posts'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts
                  .filter((post) => !post.featured)
                  .map((post) => (
                    <article
                      key={post.id}
                      className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition-colors hover:border-teal-300"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-500">
                            {post.reading_time} min read
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-950 mb-2 line-clamp-2">
                          {post.title}
                        </h3>

                        {post.excerpt && (
                          <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-slate-950">
                              {post.author_name ?? 'CareerLead AI'}
                            </p>
                            {post.author_bio && (
                              <p className="text-xs text-slate-500 line-clamp-1">
                                {post.author_bio}
                              </p>
                            )}
                          </div>
                          <time className="text-xs text-slate-500">
                            {new Date(post.published_at ?? post.created_at).toLocaleDateString(
                              'en-US',
                              { month: 'short', day: 'numeric', year: 'numeric' }
                            )}
                          </time>
                        </div>

                        <Link
                          href={`/blog/${post.slug}/`}
                          className="mt-4 inline-block text-teal-600 hover:text-teal-700 font-medium text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Total Posts: <span className="font-semibold">{posts.length}</span>
          </p>
        </div>
      </div>
      </section>
    </>
  )
}
