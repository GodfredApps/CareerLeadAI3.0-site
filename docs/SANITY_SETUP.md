# Sanity CMS Setup Guide

## Overview

This marketing site uses Sanity.io as a headless CMS to power content-led growth through SEO-optimized career paths and blog posts. Sanity enables non-technical team members to manage content while maintaining full control over the frontend experience.

## Why Sanity for CareerLead AI?

**Content-Led Growth Strategy:**
- Create 100+ SEO-optimized career path landing pages
- Blog system with AI-powered personalization
- Zero advertising costs through organic traffic
- Skill-based content tagging for personalized recommendations

**Key Benefits:**
- Real-time collaboration with team members
- Structured content with TypeScript schemas
- Built-in image optimization and CDN
- Version history and content scheduling
- Custom content relationships (skills, career paths, posts)

## Architecture

### Content Types (Schemas)

1. **SEO** (Object) - Reusable SEO fields
2. **Skill** - Taxonomy for tagging content and users
3. **Career Path** - SEO landing pages (100+ pages planned)
4. **Blog Post** - Content marketing with personalization

### Content Relationships

```
Career Path
  ├─ Required Skills (references)
  ├─ Related Career Paths (references)
  └─ SEO settings

Blog Post
  ├─ Career Tags (references to Career Paths)
  ├─ Skill Tags (references to Skills)
  └─ SEO settings

Skill
  ├─ Related Skills (references)
  └─ Learning Resources
```

## Initial Setup

### 1. Create Sanity Account & Project

```bash
# Login to Sanity (opens browser)
npm exec sanity login

# Follow prompts to create account
```

Visit [sanity.io/manage](https://sanity.io/manage) and create a new project:
- Project name: `careerlead-marketing`
- Dataset: `production`
- Copy your Project ID

### 2. Configure Environment Variables

Create or update `.env.local`:

```bash
# Required for Sanity to work
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production

# Optional: For authenticated requests (drafts, webhooks)
SANITY_API_TOKEN=your_token_here
```

**To get an API token:**
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to API → Tokens
4. Create new token with "Editor" permissions
5. Copy token to `.env.local`

### 3. Deploy Sanity Studio

```bash
# Deploy the Studio to Sanity's hosting
npm exec sanity deploy

# Choose a studio hostname (e.g., careerlead-marketing)
```

Your Studio will be available at:
- Local: `http://localhost:3000/studio`
- Deployed: `https://careerlead-marketing.sanity.studio`

## Content Structure

### 1. SEO Schema (Reusable Object)

Used by all content types for consistent SEO optimization.

**Fields:**
- `metaTitle` (max 60 chars)
- `metaDescription` (max 160 chars)
- `keywords` (array of strings)
- `ogImage` (1200x630px recommended)
- `ogTitle` (optional override)
- `ogDescription` (optional override)
- `noIndex` (boolean)
- `canonicalUrl` (optional)

### 2. Skill Schema

Taxonomy for both content tagging and user profiling.

**Fields:**
- `name` - Skill name (e.g., "Python Programming")
- `slug` - Auto-generated URL identifier
- `category` - Technical, Soft Skills, Business, etc.
- `description` - Brief overview
- `demandLevel` - Very High, High, Medium, Low
- `relatedSkills` - References to other skills
- `learningResources` - Array of external resources
- `seo` - SEO settings

**Categories:**
- Technical
- Soft Skills
- Business
- Creative
- Leadership
- Communication
- Data & Analytics
- Design
- Marketing
- Sales

### 3. Career Path Schema

SEO landing pages targeting high-intent career keywords.

**Core Fields:**
- `title` - Career path name
- `slug` - URL identifier
- `excerpt` - Short summary (max 200 chars)
- `featuredImage` - Hero image with alt text
- `experienceLevel` - Entry, Mid, Senior, Executive

**Salary Information (High SEO Value):**
- `salaryRange.min` - Minimum salary (USD)
- `salaryRange.max` - Maximum salary (USD)
- `salaryRange.median` - Median salary (USD)
- `salaryRange.currency` - Default: USD

**Career Details:**
- `industry` - Array of industries
- `requiredSkills` - References to Skill documents
- `detailedGuide` - Rich text (aim for 1500+ words)
- `educationRequirements` - Array of requirements
- `jobOutlook` - Growth rate, demand level, description
- `typicalCompanies` - Example employers
- `relatedCareerPaths` - Similar career paths
- `dayInTheLife` - Rich text description
- `challenges` - Array of challenges
- `rewards` - Array of benefits

**Metadata:**
- `publishedAt` - Publication date
- `updatedAt` - Last modified date
- `seo` - SEO settings

### 4. Blog Post Schema

Content marketing with AI personalization capabilities.

**Core Fields:**
- `title` - Post title
- `slug` - URL identifier
- `excerpt` - Short summary (max 200 chars)
- `featuredImage` - Hero image with alt text
- `content` - Rich text with images and code blocks

**Author Information:**
- `author.name` - Author name
- `author.image` - Author photo
- `author.bio` - Short bio

**Categorization:**
- `category` - Career Advice, Skill Development, etc.
- `careerTags` - References to Career Paths (for personalization)
- `skillTags` - References to Skills (for personalization)
- `targetAudience` - Students, Early Career, Career Changers, etc.

**Categories:**
- Career Advice
- Skill Development
- Industry Insights
- Success Stories
- Interview Tips
- Resume & Portfolio
- Networking
- Work-Life Balance
- Career Transitions

**Metadata:**
- `readingTime` - Estimated minutes
- `publishedAt` - Publication date
- `updatedAt` - Last modified date
- `featured` - Boolean (show on homepage)
- `seo` - SEO settings

## Using Sanity Studio

### Accessing the Studio

**Local Development:**
```bash
npm run dev
# Visit http://localhost:3000/studio
```

**Deployed Studio:**
Visit `https://careerlead-marketing.sanity.studio`

### Creating Content

#### 1. Create Skills First

Skills are used to tag both career paths and blog posts.

1. Click "Skill" in Studio sidebar
2. Click "Create new Skill"
3. Fill in:
   - Name (e.g., "Python Programming")
   - Click "Generate" next to Slug
   - Select Category
   - Add Description
   - Select Demand Level
4. Publish

**Recommended Skills to Start:**
- Python Programming (Technical, Very High)
- JavaScript (Technical, Very High)
- Project Management (Business, High)
- Communication (Soft Skills, Very High)
- Data Analysis (Data & Analytics, Very High)
- Leadership (Leadership, High)

#### 2. Create Career Paths

1. Click "Career Path" in Studio sidebar
2. Click "Create new Career Path"
3. Fill in required fields:
   - Title (e.g., "Data Scientist")
   - Generate Slug
   - Excerpt (150-200 chars)
   - Upload Featured Image (1200x800px recommended)
   - Experience Level
4. Add salary information (high SEO value!)
5. Select required skills
6. Write detailed guide (1500+ words for SEO)
7. Fill in job outlook data
8. Add related career paths
9. Configure SEO settings
10. Publish

**Content Writing Tips:**
- Target long-tail keywords (e.g., "How to become a Data Scientist")
- Include salary data (highly searched)
- Write comprehensive guides (1500+ words)
- Use proper heading structure (H2, H3)
- Add internal links to related careers

#### 3. Create Blog Posts

1. Click "Blog Post" in Studio sidebar
2. Click "Create new Blog Post"
3. Fill in:
   - Title
   - Generate Slug
   - Author information
   - Excerpt
   - Upload Featured Image
   - Category
4. Write content with rich text editor:
   - Format with headings (H2, H3)
   - Add images with alt text
   - Add code blocks if relevant
5. Tag with Career Paths (for personalization)
6. Tag with Skills (for personalization)
7. Select target audience
8. Set reading time
9. Check "Featured" for homepage display
10. Configure SEO settings
11. Publish

**Content Strategy:**
- Publish 2-3 posts per week
- Mix categories for variety
- Always tag with relevant skills and career paths
- Target specific audience segments
- Use featured posts for latest/best content

## Fetching Content in Next.js

### Pre-Built GROQ Queries

All queries are available in `lib/sanity.ts`.

#### Fetch All Career Paths

```typescript
import { sanityClient, careerPathsQuery } from '@/lib/sanity'

const careerPaths = await sanityClient.fetch(careerPathsQuery)
```

#### Fetch Single Career Path

```typescript
import { sanityClient, careerPathQuery } from '@/lib/sanity'

const careerPath = await sanityClient.fetch(careerPathQuery, {
  slug: 'data-scientist'
})
```

#### Fetch All Blog Posts

```typescript
import { sanityClient, postsQuery } from '@/lib/sanity'

const posts = await sanityClient.fetch(postsQuery)
```

#### Fetch Single Blog Post

```typescript
import { sanityClient, postQuery } from '@/lib/sanity'

const post = await sanityClient.fetch(postQuery, {
  slug: 'how-to-become-data-scientist'
})
```

#### Fetch Posts by Skill (Personalization)

```typescript
import { sanityClient, postsBySkillQuery } from '@/lib/sanity'

const posts = await sanityClient.fetch(postsBySkillQuery, {
  skillId: 'skill-id-from-user-profile'
})
```

#### Fetch Career Paths by Skill

```typescript
import { sanityClient, careerPathsBySkillQuery } from '@/lib/sanity'

const careers = await sanityClient.fetch(careerPathsBySkillQuery, {
  skillId: 'skill-id'
})
```

#### Fetch Featured Posts (Homepage)

```typescript
import { sanityClient, featuredPostsQuery } from '@/lib/sanity'

const featuredPosts = await sanityClient.fetch(featuredPostsQuery)
```

### Image Optimization

```typescript
import { urlForImage } from '@/lib/sanity'
import Image from 'next/image'

<Image
  src={urlForImage(post.featuredImage).width(800).height(600).url()}
  alt={post.featuredImage.alt}
  width={800}
  height={600}
/>
```

## SEO Strategy

### Target Keywords

**Career Path Pages:**
- "[Career] salary" (e.g., "Data Scientist salary")
- "How to become a [Career]"
- "[Career] skills required"
- "[Career] job description"
- "[Career] career path"

**Blog Posts:**
- "How to [skill]"
- "[Career] tips"
- "Best [skill] for [career]"
- "[Industry] career advice"

### On-Page SEO Checklist

When creating content, ensure:
- [ ] Meta title under 60 characters
- [ ] Meta description under 160 characters
- [ ] Keywords added (5-10 relevant terms)
- [ ] OG image uploaded (1200x630px)
- [ ] Heading structure (H1 → H2 → H3)
- [ ] Internal links to related content
- [ ] Alt text on all images
- [ ] 1500+ words for career paths
- [ ] Schema markup (automatic via Next.js)

### Content Calendar

**Month 1: Foundation**
- Week 1: Create 10 skills
- Week 2: Create 5 career paths (entry level focus)
- Week 3: Create 5 career paths (senior level focus)
- Week 4: Write 8 blog posts

**Month 2: Expansion**
- 10 new career paths
- 12 blog posts
- Update existing content with internal links

**Month 3: Optimization**
- 10 new career paths
- 12 blog posts
- Analyze traffic, optimize top performers

**Goal:** 100 career paths + 50 blog posts in 6 months

## Personalization Strategy

### User Skill Matching

When a user adds skills to their profile:
1. Query posts tagged with those skills
2. Display personalized content recommendations
3. Suggest career paths requiring those skills

```typescript
// Example: Personalized dashboard
const userSkills = ['skill-id-1', 'skill-id-2']
const recommendations = await Promise.all(
  userSkills.map(skillId =>
    sanityClient.fetch(postsBySkillQuery, { skillId })
  )
)
```

### Career Path Matching

When a user views a career path:
1. Show blog posts tagged with that career
2. Display related career paths
3. Recommend skills to learn

```typescript
const careerPath = await sanityClient.fetch(careerPathQuery, { slug })
const relatedPosts = await sanityClient.fetch(postsByCareerQuery, {
  careerPathId: careerPath._id
})
```

## Best Practices

### Content Creation

1. **Write for humans first, SEO second**
   - Focus on providing value
   - Answer real questions
   - Use natural language

2. **Optimize images**
   - Use WebP format
   - Add descriptive alt text
   - Keep file size under 200KB

3. **Internal linking**
   - Link related career paths
   - Link blog posts to careers
   - Create content clusters

4. **Update regularly**
   - Refresh salary data annually
   - Update job outlook information
   - Add new trends and technologies

### Performance

1. **Use ISR (Incremental Static Regeneration)**
   ```typescript
   export const revalidate = 3600 // Revalidate every hour
   ```

2. **Implement caching**
   - Use CDN for Sanity images
   - Cache API responses
   - Use `useCdn: true` in production

3. **Optimize queries**
   - Only fetch needed fields
   - Use GROQ projections
   - Limit results with `[0...10]`

## Troubleshooting

### Studio won't load

1. Check environment variables in `.env.local`
2. Verify Project ID is correct
3. Check browser console for errors
4. Clear `.next` cache: `rm -rf .next`

### Content not updating

1. Check if using CDN (set `useCdn: false` for testing)
2. Clear browser cache
3. Verify content is published (not draft)
4. Check revalidation settings

### Images not loading

1. Verify image URLs with `urlForImage()`
2. Check CORS settings in Sanity project
3. Ensure Project ID is correct
4. Check image asset exists in Sanity

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js + Sanity Guide](https://www.sanity.io/plugins/next-sanity)
- [Sanity Community](https://www.sanity.io/exchange)

## Support

For issues or questions:
1. Check this documentation
2. Review [Sanity docs](https://www.sanity.io/docs)
3. Ask in project Slack/Discord
4. Contact Sanity support (paid plans)
