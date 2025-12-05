import { sanityClient, postsQuery } from '@/lib/sanity'
import Link from 'next/link'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  featuredImage?: any
  category: string
  author: {
    name: string
    role?: string
  }
  readingTime: number
  publishedAt: string
  featured: boolean
}

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const posts: BlogPost[] = await sanityClient.fetch(postsQuery)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Career Insights Blog
          </h1>
          <p className="text-xl text-gray-600">
            Expert advice, career tips, and industry insights
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts found. Create some in the Studio!</p>
          </div>
        ) : (
          <>
            {/* Featured Posts */}
            {posts.some(post => post.featured) && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts
                    .filter(post => post.featured)
                    .map((post) => (
                      <article
                        key={post._id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                      >
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-500">
                              {post.readingTime} min read
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                            {post.title}
                          </h3>

                          {post.excerpt && (
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {post.author.name}
                              </p>
                              {post.author.role && (
                                <p className="text-xs text-gray-500">
                                  {post.author.role}
                                </p>
                              )}
                            </div>
                            <time className="text-xs text-gray-500">
                              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </time>
                          </div>

                          <Link
                            href={`/blog/${post.slug.current}`}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {posts.some(post => post.featured) ? 'All Posts' : 'Latest Posts'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts
                  .filter(post => !post.featured)
                  .map((post) => (
                    <article
                      key={post._id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            {post.readingTime} min read
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                          {post.title}
                        </h3>

                        {post.excerpt && (
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {post.author.name}
                            </p>
                            {post.author.role && (
                              <p className="text-xs text-gray-500">
                                {post.author.role}
                              </p>
                            )}
                          </div>
                          <time className="text-xs text-gray-500">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </time>
                        </div>

                        <Link
                          href={`/blog/${post.slug.current}`}
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
          <p className="text-sm text-gray-500">
            Total Posts: <span className="font-semibold">{posts.length}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
