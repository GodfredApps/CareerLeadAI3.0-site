import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-12-04',
  token: process.env.SANITY_API_TOKEN || '',
  useCdn: false,
})

// Blog post metadata with fixed document IDs
const blogPosts = [
  {
    id: 'post-highest-paying-jobs-ghana-2025',
    file: 'highest-paying-jobs-ghana-2025.md',
    title: 'Top 20 Highest Paying Jobs in Ghana 2025 [With Salary Ranges]',
    slug: 'highest-paying-jobs-ghana-2025',
    category: 'career-advice',
    author: { name: 'CareerLead AI Team' },
    readingTime: 8,
    featured: false,  // Not featured - appears in All Posts
    targetAudience: ['students', 'recent-graduates', 'career-changers'],
    excerpt: 'Discover the highest paying jobs in Ghana for 2025. Complete salary guide including doctors, engineers, IT managers, and more. Find your next career opportunity.',
  },
  {
    id: 'post-cv-writing-guide-ghana-nigeria-2025',
    file: 'cv-writing-guide-ghana-nigeria.md',
    title: 'How to Write a CV That Gets You Hired in Ghana & Nigeria [2025 Guide + Templates]',
    slug: 'cv-writing-guide-ghana-nigeria-2025',
    category: 'resume-portfolio',
    author: { name: 'CareerLead AI Team' },
    readingTime: 10,
    featured: true,  // Featured post
    targetAudience: ['students', 'recent-graduates', 'career-changers'],
    excerpt: 'Master CV writing for the Ghanaian and Nigerian job markets. Learn ATS optimization, formatting tips, and get free templates. Land your dream job in 2025.',
  },
  {
    id: 'post-remote-jobs-africa-complete-guide-2025',
    file: 'remote-jobs-africa-2025-guide.md',
    title: 'The Complete Guide to Landing Remote Jobs in Africa [2025]',
    slug: 'remote-jobs-africa-complete-guide-2025',
    category: 'career-advice',
    author: { name: 'CareerLead AI Team' },
    readingTime: 12,
    featured: true,  // Featured post
    targetAudience: ['students', 'recent-graduates', 'early-career', 'career-changers'],
    excerpt: 'Discover 1,000+ remote job opportunities in Africa. Learn where to find them, required skills, salary expectations, and how to land high-paying remote roles from Ghana, Nigeria, Kenya, and beyond.',
  },
  {
    id: 'post-software-developer-salaries-africa-2025',
    file: 'software-developer-salaries-africa-2025.md',
    title: 'Software Developer Salaries Across Africa: Complete 2025 Salary Guide [Ghana, Nigeria, Kenya, South Africa]',
    slug: 'software-developer-salaries-africa-2025',
    category: 'career-advice',
    author: { name: 'CareerLead AI Team' },
    readingTime: 11,
    featured: true,  // Featured post
    targetAudience: ['students', 'recent-graduates', 'early-career', 'career-changers'],
    excerpt: 'Discover software developer salaries across Africa in 2025. Compare earnings in Ghana, Nigeria, Kenya, and South Africa. Includes salary ranges by experience level and specialization.',
  },
  {
    id: 'post-top-skills-demand-africa-2025',
    file: 'top-skills-demand-africa-2025.md',
    title: 'Top 10 In-Demand Skills in Africa for 2025 [With Free Courses & Certifications]',
    slug: 'top-skills-demand-africa-2025',
    category: 'skill-development',
    author: { name: 'CareerLead AI Team' },
    readingTime: 13,
    featured: false,  // Not featured - appears in All Posts
    targetAudience: ['students', 'recent-graduates', 'career-changers'],
    excerpt: 'Discover the top 10 most in-demand skills in Africa for 2025. Learn digital literacy, data science, cybersecurity, and more. Includes free courses and career opportunities.',
  },
]

// Function to process inline markdown formatting
function processInlineFormatting(text: string): Array<{ _key: string; _type: string; text: string; marks: string[] }> {
  const spans: Array<{ _key: string; _type: string; text: string; marks: string[] }> = []
  let currentIndex = 0

  // Regular expressions for inline formatting
  const boldPattern = /\*\*(.+?)\*\*/g
  const italicPattern = /\*(.+?)\*/g
  const codePattern = /`(.+?)`/g

  // Find all formatting matches
  const matches: Array<{ start: number; end: number; text: string; mark: string }> = []

  let match
  while ((match = boldPattern.exec(text)) !== null) {
    matches.push({ start: match.index, end: match.index + match[0].length, text: match[1], mark: 'strong' })
  }

  // Sort matches by start position
  matches.sort((a, b) => a.start - b.start)

  // If no formatting found, return plain text
  if (matches.length === 0) {
    return [{ _key: `span-${Math.random()}`, _type: 'span', text, marks: [] }]
  }

  // Build spans with formatting
  let lastEnd = 0
  matches.forEach((m, idx) => {
    // Add plain text before this match
    if (m.start > lastEnd) {
      const plainText = text.substring(lastEnd, m.start)
      if (plainText) {
        spans.push({ _key: `span-${idx}-plain`, _type: 'span', text: plainText, marks: [] })
      }
    }

    // Add formatted text
    spans.push({ _key: `span-${idx}-${m.mark}`, _type: 'span', text: m.text, marks: [m.mark] })
    lastEnd = m.end
  })

  // Add remaining plain text
  if (lastEnd < text.length) {
    spans.push({ _key: `span-final`, _type: 'span', text: text.substring(lastEnd), marks: [] })
  }

  return spans
}

// Function to clean markdown text (remove symbols but preserve structure)
function cleanMarkdownText(text: string): string {
  return text
    // Remove bold/italic markers but keep the text
    .replace(/\*\*\*(.+?)\*\*\*/g, '$1') // Bold + Italic
    .replace(/\*\*(.+?)\*\*/g, '$1')     // Bold
    .replace(/\*(.+?)\*/g, '$1')         // Italic
    .replace(/__(.+?)__/g, '$1')         // Alternative bold
    .replace(/_(.+?)_/g, '$1')           // Alternative italic
    // Remove code backticks
    .replace(/`(.+?)`/g, '$1')
    // Remove strikethrough
    .replace(/~~(.+?)~~/g, '$1')
    // Clean up any remaining markdown artifacts
    .replace(/^\s*>\s*/gm, '')           // Remove blockquote markers
    .replace(/^\s*[-*+]\s+/gm, '')       // Already handled in list detection
    .trim()
}

// Enhanced markdown to Portable Text converter
function markdownToPortableText(markdown: string) {
  // Split by paragraphs (double newline)
  const lines = markdown.split('\n')
  const blocks: any[] = []
  let currentListType: 'bullet' | 'number' | null = null
  let blockIndex = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Skip empty lines
    if (!line) {
      currentListType = null
      continue
    }

    // Check if it's a heading
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/)
    if (headingMatch) {
      const level = headingMatch[1].length
      const text = cleanMarkdownText(headingMatch[2])
      const style = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : 'h6'

      blocks.push({
        _key: `block-${blockIndex++}`,
        _type: 'block',
        style,
        children: [
          {
            _key: `span-${blockIndex}`,
            _type: 'span',
            text,
            marks: [],
          },
        ],
        markDefs: [],
      })
      currentListType = null
      continue
    }

    // Check if it's a list item
    const bulletMatch = line.match(/^[-*+]\s+(.+)$/)
    const numberMatch = line.match(/^\d+\.\s+(.+)$/)

    if (bulletMatch || numberMatch) {
      const listType = numberMatch ? 'number' : 'bullet'
      const text = cleanMarkdownText(bulletMatch ? bulletMatch[1] : numberMatch![1])

      blocks.push({
        _key: `block-${blockIndex++}`,
        _type: 'block',
        style: 'normal',
        listItem: listType,
        level: 1,
        children: [
          {
            _key: `span-${blockIndex}`,
            _type: 'span',
            text,
            marks: [],
          },
        ],
        markDefs: [],
      })
      currentListType = listType
      continue
    }

    // Check if line starts with | (table - convert to paragraph for now)
    if (line.startsWith('|')) {
      // Skip table lines or convert to simple text
      continue
    }

    // Regular paragraph
    const cleanText = cleanMarkdownText(line)
    if (cleanText) {
      blocks.push({
        _key: `block-${blockIndex++}`,
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: `span-${blockIndex}`,
            _type: 'span',
            text: cleanText,
            marks: [],
          },
        ],
        markDefs: [],
      })
      currentListType = null
    }
  }

  return blocks
}

async function importBlogPosts() {
  console.log('🚀 Starting blog posts import to Sanity (with fixed document IDs for editability)...\n')

  for (const post of blogPosts) {
    try {
      console.log(`📝 Processing: ${post.title}`)

      // Read markdown content from file
      const filePath = path.join(
        process.cwd(),
        'content',
        'blog-articles',
        post.file
      )

      if (!fs.existsSync(filePath)) {
        console.error(`❌ File not found: ${filePath}`)
        continue
      }

      const content = fs.readFileSync(filePath, 'utf-8')

      // Remove metadata section from content
      const contentLines = content.split('\n')
      const contentStart = contentLines.findIndex(
        (line, idx) => line.trim() === '---' && idx > 5
      )
      const mainContent =
        contentStart > 0
          ? contentLines.slice(contentStart + 1).join('\n')
          : content

      // Convert markdown to Portable Text blocks with clean text
      const portableTextContent = markdownToPortableText(mainContent)

      // Create blog post document with fixed ID
      const blogPostDoc = {
        _id: post.id,  // Use fixed ID so document persists across imports
        _type: 'post',
        title: post.title,
        slug: {
          _type: 'slug',
          current: post.slug,
        },
        excerpt: post.excerpt,
        content: portableTextContent,
        category: post.category,
        author: post.author,
        targetAudience: post.targetAudience,
        readingTime: post.readingTime,
        featured: post.featured,
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        seo: {
          metaTitle: post.title,
          metaDescription: post.excerpt,
        },
      }

      // Create or update document in Sanity (allows editing in Studio)
      const result = await client.createOrReplace(blogPostDoc)

      console.log(`✅ Created/Updated: ${post.title}`)
      console.log(`   Document ID: ${result._id}`)
      console.log(`   Slug: ${post.slug}`)
      console.log(`   Content blocks: ${portableTextContent.length}\n`)
    } catch (error) {
      console.error(`❌ Error creating ${post.title}:`, error)
    }
  }

  console.log('🎉 Import complete!')
  console.log(
    '\n📊 Summary: Created/Updated 5 blog posts with fixed IDs (now editable in Sanity Studio!)'
  )
  console.log(
    '🌐 View in Sanity Studio: https://careerlead-cms.sanity.studio/'
  )
  console.log(
    '🌐 View on site (after deployment): https://careerlead.ai/blog/'
  )
  console.log('\n✅ FIXED: Blog posts now use stable document IDs - edits in Sanity Studio will persist!')
  console.log('⚠️  Note: Site updates require rebuilding. Push to main branch to trigger deployment.')
}

// Run the import
importBlogPosts().catch(console.error)
