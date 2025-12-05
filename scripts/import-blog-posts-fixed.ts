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

// Blog post metadata
const blogPosts = [
  {
    file: 'highest-paying-jobs-ghana-2025.md',
    title: 'Top 20 Highest Paying Jobs in Ghana 2025 [With Salary Ranges]',
    slug: 'highest-paying-jobs-ghana-2025',
    category: 'career-advice',
    author: { name: 'CareerLead AI Team' },
    readingTime: 8,
    featured: true,
    targetAudience: ['students', 'recent-graduates', 'career-changers'],
    excerpt: 'Discover the highest paying jobs in Ghana for 2025. Complete salary guide including doctors, engineers, IT managers, and more. Find your next career opportunity.',
  },
  {
    file: 'cv-writing-guide-ghana-nigeria.md',
    title: 'How to Write a CV That Gets You Hired in Ghana & Nigeria [2025 Guide + Templates]',
    slug: 'cv-writing-guide-ghana-nigeria-2025',
    category: 'resume-portfolio',
    author: { name: 'CareerLead AI Team' },
    readingTime: 10,
    featured: true,
    targetAudience: ['students', 'recent-graduates', 'career-changers'],
    excerpt: 'Master CV writing for the Ghanaian and Nigerian job markets. Learn ATS optimization, formatting tips, and get free templates. Land your dream job in 2025.',
  },
  {
    file: 'remote-jobs-africa-2025-guide.md',
    title: 'The Complete Guide to Landing Remote Jobs in Africa [2025]',
    slug: 'remote-jobs-africa-complete-guide-2025',
    category: 'career-advice',
    author: { name: 'CareerLead AI Team' },
    readingTime: 12,
    featured: true,
    targetAudience: ['students', 'recent-graduates', 'early-career', 'career-changers'],
    excerpt: 'Discover 1,000+ remote job opportunities in Africa. Learn where to find them, required skills, salary expectations, and how to land high-paying remote roles from Ghana, Nigeria, Kenya, and beyond.',
  },
  {
    file: 'software-developer-salaries-africa-2025.md',
    title: 'Software Developer Salaries Across Africa: Complete 2025 Salary Guide [Ghana, Nigeria, Kenya, South Africa]',
    slug: 'software-developer-salaries-africa-2025',
    category: 'career-advice',
    author: { name: 'CareerLead AI Team' },
    readingTime: 11,
    featured: true,
    targetAudience: ['students', 'recent-graduates', 'early-career', 'career-changers'],
    excerpt: 'Discover software developer salaries across Africa in 2025. Compare earnings in Ghana, Nigeria, Kenya, and South Africa. Includes salary ranges by experience level and specialization.',
  },
  {
    file: 'top-skills-demand-africa-2025.md',
    title: 'Top 10 In-Demand Skills in Africa for 2025 [With Free Courses & Certifications]',
    slug: 'top-skills-demand-africa-2025',
    category: 'skill-development',
    author: { name: 'CareerLead AI Team' },
    readingTime: 13,
    featured: true,
    targetAudience: ['students', 'recent-graduates', 'career-changers'],
    excerpt: 'Discover the top 10 most in-demand skills in Africa for 2025. Learn digital literacy, data science, cybersecurity, and more. Includes free courses and career opportunities.',
  },
]

// Function to convert markdown to simple Portable Text blocks
function markdownToPortableText(markdown: string) {
  // Split by double newlines to get paragraphs
  const sections = markdown.split('\n\n')

  const blocks = sections
    .filter((section) => section.trim().length > 0)
    .map((section, index) => {
      const trimmed = section.trim()

      // Check if it's a heading
      if (trimmed.startsWith('#')) {
        const level = trimmed.match(/^#+/)?.[0].length || 1
        const text = trimmed.replace(/^#+\s*/, '').trim()

        // Convert to appropriate heading style (h1-h6)
        const style = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : 'h6'

        return {
          _key: `block-${index}`,
          _type: 'block',
          style,
          children: [
            {
              _key: `span-${index}`,
              _type: 'span',
              text,
              marks: [],
            },
          ],
          markDefs: [],
        }
      }

      // Check if it's a list item
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.match(/^\d+\.\s/)) {
        const listType = trimmed.match(/^\d+\.\s/) ? 'number' : 'bullet'
        const text = trimmed.replace(/^[-*]\s*/, '').replace(/^\d+\.\s*/, '').trim()

        return {
          _key: `block-${index}`,
          _type: 'block',
          style: 'normal',
          listItem: listType,
          children: [
            {
              _key: `span-${index}`,
              _type: 'span',
              text,
              marks: [],
            },
          ],
          markDefs: [],
        }
      }

      // Regular paragraph
      return {
        _key: `block-${index}`,
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: `span-${index}`,
            _type: 'span',
            text: trimmed,
            marks: [],
          },
        ],
        markDefs: [],
      }
    })

  return blocks
}

async function deleteExistingPosts() {
  console.log('🗑️  Deleting existing blog posts from previous import...\n')

  const docIds = [
    'hTPvuZC2KTn8PDpfRaCwQz',
    '9V0EjzLyCoFrLuM34CzrLK',
    'hTPvuZC2KTn8PDpfRaCweH',
    'XPU1tLSPIevqoKi2rL9txz',
    'XPU1tLSPIevqoKi2rL9uDf',
  ]

  for (const id of docIds) {
    try {
      await client.delete(id)
      console.log(`✅ Deleted document: ${id}`)
    } catch (error: any) {
      if (error.statusCode === 404) {
        console.log(`ℹ️  Document not found (already deleted): ${id}`)
      } else {
        console.error(`❌ Error deleting ${id}:`, error.message)
      }
    }
  }

  console.log('\n')
}

async function importBlogPosts() {
  console.log('🚀 Starting blog posts import to Sanity (FIXED VERSION)...\n')

  // First, delete existing posts with invalid content
  await deleteExistingPosts()

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

      // Remove metadata section from content (first 10 lines usually)
      const contentLines = content.split('\n')
      const contentStart = contentLines.findIndex(
        (line, idx) => line.trim() === '---' && idx > 5
      )
      const mainContent =
        contentStart > 0
          ? contentLines.slice(contentStart + 1).join('\n')
          : content

      // Convert markdown to Portable Text blocks
      const portableTextContent = markdownToPortableText(mainContent)

      // Create blog post document
      const blogPostDoc = {
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

      // Create document in Sanity
      const result = await client.create(blogPostDoc)

      console.log(`✅ Created: ${post.title}`)
      console.log(`   Document ID: ${result._id}`)
      console.log(`   Slug: ${post.slug}`)
      console.log(`   Content blocks: ${portableTextContent.length}\n`)
    } catch (error) {
      console.error(`❌ Error creating ${post.title}:`, error)
    }
  }

  console.log('🎉 Import complete!')
  console.log(
    '\n📊 Summary: Attempted to import 5 blog posts with properly formatted Portable Text content'
  )
  console.log(
    '🌐 View in Sanity Studio: https://careerlead-cms.sanity.studio/'
  )
  console.log(
    '🌐 View on site (after deployment): https://careerlead.ai/blog/'
  )
}

// Run the import
importBlogPosts().catch(console.error)
