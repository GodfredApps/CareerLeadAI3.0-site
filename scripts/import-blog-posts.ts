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

// Blog post metadata from BLOG_ARTICLES_SUMMARY.md
const blogPosts = [
  {
    file: 'highest-paying-jobs-ghana-2025.md',
    title: 'Top 20 Highest Paying Jobs in Ghana 2025 [With Salary Ranges]',
    slug: 'highest-paying-jobs-ghana-2025',
    category: 'Career Insights',
    author: 'CareerLead AI Team',
    readingTime: 8,
    featured: true,
    targetAudience: ['Job Seekers', 'Career Changers', 'Students'],
    excerpt: 'Discover the highest paying jobs in Ghana for 2025. Complete salary guide including doctors, engineers, IT managers, and more. Find your next career opportunity.',
  },
  {
    file: 'cv-writing-guide-ghana-nigeria.md',
    title: 'How to Write a CV That Gets You Hired in Ghana & Nigeria [2025 Guide + Templates]',
    slug: 'cv-writing-guide-ghana-nigeria-2025',
    category: 'Job Search',
    author: 'CareerLead AI Team',
    readingTime: 10,
    featured: true,
    targetAudience: ['Job Seekers', 'Fresh Graduates', 'Career Changers'],
    excerpt: 'Master CV writing for the Ghanaian and Nigerian job markets. Learn ATS optimization, formatting tips, and get free templates. Land your dream job in 2025.',
  },
  {
    file: 'remote-jobs-africa-2025-guide.md',
    title: 'The Complete Guide to Landing Remote Jobs in Africa [2025]',
    slug: 'remote-jobs-africa-complete-guide-2025',
    category: 'Remote Work',
    author: 'CareerLead AI Team',
    readingTime: 12,
    featured: true,
    targetAudience: ['Job Seekers', 'Remote Workers', 'Digital Nomads'],
    excerpt: 'Discover 1,000+ remote job opportunities in Africa. Learn where to find them, required skills, salary expectations, and how to land high-paying remote roles from Ghana, Nigeria, Kenya, and beyond.',
  },
  {
    file: 'software-developer-salaries-africa-2025.md',
    title: 'Software Developer Salaries Across Africa: Complete 2025 Salary Guide [Ghana, Nigeria, Kenya, South Africa]',
    slug: 'software-developer-salaries-africa-2025',
    category: 'Career Insights',
    author: 'CareerLead AI Team',
    readingTime: 11,
    featured: true,
    targetAudience: ['Software Developers', 'Tech Job Seekers', 'Career Changers'],
    excerpt: 'Discover software developer salaries across Africa in 2025. Compare earnings in Ghana, Nigeria, Kenya, and South Africa. Includes salary ranges by experience level and specialization.',
  },
  {
    file: 'top-skills-demand-africa-2025.md',
    title: 'Top 10 In-Demand Skills in Africa for 2025 [With Free Courses & Certifications]',
    slug: 'top-skills-demand-africa-2025',
    category: 'Professional Development',
    author: 'CareerLead AI Team',
    readingTime: 13,
    featured: true,
    targetAudience: ['Career Changers', 'Job Seekers', 'Students', 'Professionals'],
    excerpt: 'Discover the top 10 most in-demand skills in Africa for 2025. Learn digital literacy, data science, cybersecurity, and more. Includes free courses and career opportunities.',
  },
]

async function importBlogPosts() {
  console.log('🚀 Starting blog posts import to Sanity...\n')

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
        (line) => line.trim() === '---' && contentLines.indexOf(line) > 5
      )
      const mainContent =
        contentStart > 0
          ? contentLines.slice(contentStart + 1).join('\n')
          : content

      // Create blog post document
      const blogPostDoc = {
        _type: 'post',
        title: post.title,
        slug: {
          _type: 'slug',
          current: post.slug,
        },
        excerpt: post.excerpt,
        content: mainContent,
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
      console.log(`   Slug: ${post.slug}\n`)
    } catch (error) {
      console.error(`❌ Error creating ${post.title}:`, error)
    }
  }

  console.log('🎉 Import complete!')
  console.log(
    '\n📊 Summary: Attempted to import 5 blog posts to Sanity CMS'
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
