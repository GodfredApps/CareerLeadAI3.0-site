#!/usr/bin/env node
// Post-build SEO gate for the static export in out/.
// Every indexable page must have a title, description, self-referencing canonical,
// og:image and a single h1, and must be listed in sitemap.xml. Every sitemap URL
// must exist in the build, and internal links must resolve to a built page.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const OUT = 'out'
const SITE = 'https://careerlead.ai'
const SKIP = new Set(['404/index.html', '404.html'])

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) return name === '_next' ? [] : walk(full)
    return name.endsWith('.html') ? [full] : []
  })
}

function pagePath(file) {
  const rel = relative(OUT, file).split(sep).join('/')
  if (rel === 'index.html') return '/'
  return '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '/')
}

function attr(html, pattern) {
  const match = html.match(pattern)
  return match ? match[1] : null
}

if (!existsSync(join(OUT, 'sitemap.xml'))) {
  console.error('check-seo: out/sitemap.xml is missing')
  process.exit(1)
}

const sitemapUrls = new Set(
  [...readFileSync(join(OUT, 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
)
const errors = []
// Length issues usually come from CMS content, so they warn instead of blocking a publish.
const warnings = []
const titles = new Map()
const builtPaths = new Set()
const internalLinks = new Map()

for (const file of walk(OUT)) {
  const rel = relative(OUT, file).split(sep).join('/')
  if (SKIP.has(rel)) continue
  const path = pagePath(file)
  builtPaths.add(path)
  const html = readFileSync(file, 'utf8')
  const head = html.slice(0, html.indexOf('</head>'))
  const noIndex = /<meta name="robots" content="[^"]*noindex/.test(head)
  const url = SITE + path

  const title = attr(head, /<title>([^<]*)<\/title>/)
  const description = attr(head, /<meta name="description" content="([^"]*)"/)
  const canonical = attr(head, /<link rel="canonical" href="([^"]*)"/)
  const ogImage = attr(head, /<meta property="og:image" content="([^"]*)"/)
  const h1Count = (html.match(/<h1[\s>]/g) || []).length

  if (!noIndex) {
    if (!title) errors.push(`${path}: missing <title>`)
    else if (title.length > 70) warnings.push(`${path}: title is ${title.length} chars (max 70)`)
    if (!description) errors.push(`${path}: missing meta description`)
    else if (description.length > 170) warnings.push(`${path}: description is ${description.length} chars (max 170)`)
    if (canonical !== url) errors.push(`${path}: canonical is ${canonical ?? 'missing'}, expected ${url}`)
    if (!ogImage) errors.push(`${path}: missing og:image`)
    if (h1Count !== 1) errors.push(`${path}: has ${h1Count} <h1> elements (expected 1)`)
    if (!sitemapUrls.has(url)) errors.push(`${path}: indexable but not in sitemap.xml (add it to STATIC_ROUTES in lib/seo.ts)`)
    if (title) titles.set(title, [...(titles.get(title) ?? []), path])
  } else if (sitemapUrls.has(url)) {
    errors.push(`${path}: noindex but listed in sitemap.xml`)
  }

  for (const [, href] of html.matchAll(/<a[^>]+href="(\/[^"#?]*)/g)) {
    internalLinks.set(href, [...(internalLinks.get(href) ?? []), path])
  }
}

for (const url of sitemapUrls) {
  const path = url.replace(SITE, '')
  if (!builtPaths.has(path)) errors.push(`sitemap.xml lists ${url}, which was not built`)
}

for (const [title, paths] of titles) {
  if (paths.length > 1) errors.push(`duplicate title "${title}" on ${paths.join(', ')}`)
}

for (const [href, from] of internalLinks) {
  const withSlash = href.endsWith('/') ? href : `${href}/`
  const isFile = /\.[a-z0-9]+$/i.test(href)
  const ok = isFile ? existsSync(join(OUT, href)) : builtPaths.has(withSlash) || builtPaths.has(href)
  if (!ok) errors.push(`broken internal link ${href} (on ${[...new Set(from)].slice(0, 3).join(', ')})`)
}

if (warnings.length > 0) {
  console.warn(`check-seo: ${warnings.length} warning(s)\n  - ${warnings.join('\n  - ')}`)
}
if (errors.length > 0) {
  console.error(`check-seo: ${errors.length} problem(s)\n  - ${errors.join('\n  - ')}`)
  process.exit(1)
}
console.log(`check-seo: ${builtPaths.size} pages, ${sitemapUrls.size} sitemap URLs, all OK`)
