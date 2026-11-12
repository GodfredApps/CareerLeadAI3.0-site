import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getPublishedPosts, type BlogPost } from "@/lib/supabase-blog"

// The homepage's three newest blog posts, read at build time (the site is a
// static export). The section is left out if the blog can't be read or has
// nothing published, so a blog outage never breaks the homepage build.

const COUNT = 3

async function latestPosts(): Promise<BlogPost[]> {
  try {
    return (await getPublishedPosts()).slice(0, COUNT)
  } catch (error: unknown) {
    console.error("[latest-guides] could not read blog posts:", error instanceof Error ? error.message : error)
    return []
  }
}

export async function LatestGuides() {
  const posts = await latestPosts()
  if (posts.length === 0) return null

  return (
    <section className="bg-slate-50 py-20 md:py-28" aria-labelledby="latest-guides-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">Career guides</p>
            <h2 id="latest-guides-heading" className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              Practical advice for your next move.
            </h2>
          </div>
          <Link href="/blog/" className="inline-flex items-center gap-2 font-bold text-teal-700 hover:text-teal-800">
            All guides
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {posts.map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}/`}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 transition-colors hover:border-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                {post.category && <span className="rounded-full bg-teal-50 px-3 py-1 text-teal-800">{post.category}</span>}
                {post.reading_time && <span>{post.reading_time} min read</span>}
              </div>
              <h3 className="mt-5 text-xl font-black leading-snug text-slate-950 group-hover:text-teal-800">{post.title}</h3>
              {post.excerpt && <p className="mt-3 line-clamp-3 leading-7 text-slate-600">{post.excerpt}</p>}
              <span className="mt-auto pt-6 text-sm font-bold text-teal-700">Read the guide</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
