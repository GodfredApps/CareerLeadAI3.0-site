import { createClient } from '@sanity/client'
// import { getImageDimensions } from '@sanity/asset-utils'
// import type { Image } from 'sanity'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  apiVersion: '2024-12-04',
  useCdn: process.env.NODE_ENV === 'production',
}

/**
 * Set up the client for fetching data in the getProps page functions
 */
export const sanityClient = createClient(config)

// Preview client disabled for static export compatibility
// /**
//  * Set up a preview client with authenticated access for drafts
//  */
// export const previewClient = createClient({
//   ...config,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
// })

// /**
//  * Helper function to choose the right client
//  */
// export const getClient = (preview?: boolean) => (preview ? previewClient : sanityClient)

/**
 * Set up the image URL builder
 * TODO: Fix this when we need to display images from Sanity
 */
// import imageUrlBuilder from '@sanity/image-url'
// const builder = imageUrlBuilder(sanityClient)
// export const urlForImage = (source: Image) => {
//   return builder.image(source).auto('format').fit('max')
// }

/**
 * GROQ Queries for fetching content
 */

// Fetch all career paths for sitemap/listing
export const careerPathsQuery = `*[_type == "careerPath"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  salaryRange,
  experienceLevel,
  industry,
  publishedAt
}`

// Fetch single career path by slug
export const careerPathQuery = `*[_type == "careerPath" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  salaryRange,
  experienceLevel,
  industry,
  "requiredSkills": requiredSkills[]-> {
    _id,
    name,
    slug,
    category,
    demandLevel
  },
  detailedGuide,
  educationRequirements,
  jobOutlook,
  typicalCompanies,
  "relatedCareerPaths": relatedCareerPaths[]-> {
    _id,
    title,
    slug,
    excerpt,
    featuredImage
  },
  dayInTheLife,
  challenges,
  rewards,
  publishedAt,
  updatedAt,
  seo
}`

// Fetch all blog posts
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  category,
  author,
  readingTime,
  publishedAt,
  featured
}`

// Fetch single blog post by slug
export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  content,
  category,
  author,
  "careerTags": careerTags[]-> {
    _id,
    title,
    slug
  },
  "skillTags": skillTags[]-> {
    _id,
    name,
    slug,
    category
  },
  targetAudience,
  readingTime,
  publishedAt,
  updatedAt,
  featured,
  seo
}`

// Fetch skills for tagging
export const skillsQuery = `*[_type == "skill"] | order(name asc) {
  _id,
  name,
  slug,
  category,
  description,
  demandLevel
}`

// Fetch posts by skill tag (for personalization)
export const postsBySkillQuery = `*[_type == "post" && references($skillId)] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  category,
  readingTime,
  publishedAt
}`

// Fetch posts by career path (for personalization)
export const postsByCareerQuery = `*[_type == "post" && references($careerPathId)] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  category,
  readingTime,
  publishedAt
}`

// Fetch featured posts for homepage
export const featuredPostsQuery = `*[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  category,
  author,
  readingTime,
  publishedAt
}`

// Fetch career paths by skill (show careers that need this skill)
export const careerPathsBySkillQuery = `*[_type == "careerPath" && references($skillId)] | order(publishedAt desc) [0...6] {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  salaryRange,
  experienceLevel,
  publishedAt
}`
