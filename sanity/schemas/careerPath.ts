import { defineType } from 'sanity'

export default defineType({
  name: 'careerPath',
  title: 'Career Path',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Career Path Title',
      type: 'string',
      description: 'The name of the career path (e.g., "Data Scientist", "Product Manager")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier for this career path',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary (150-200 characters) for preview cards and meta descriptions',
      validation: (Rule) => Rule.max(200).warning('Keep it under 200 characters'),
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'salaryRange',
      title: 'Salary Range',
      type: 'object',
      description: 'Salary information - high SEO value!',
      fields: [
        {
          name: 'min',
          type: 'number',
          title: 'Minimum Salary (USD)',
        },
        {
          name: 'max',
          type: 'number',
          title: 'Maximum Salary (USD)',
        },
        {
          name: 'median',
          type: 'number',
          title: 'Median Salary (USD)',
        },
        {
          name: 'currency',
          type: 'string',
          title: 'Currency',
          initialValue: 'USD',
        },
      ],
    },
    {
      name: 'experienceLevel',
      title: 'Experience Level',
      type: 'string',
      options: {
        list: [
          { title: 'Entry Level', value: 'entry' },
          { title: 'Mid Level', value: 'mid' },
          { title: 'Senior Level', value: 'senior' },
          { title: 'Executive', value: 'executive' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          { title: 'Technology', value: 'technology' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Finance', value: 'finance' },
          { title: 'Education', value: 'education' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Consulting', value: 'consulting' },
          { title: 'Manufacturing', value: 'manufacturing' },
          { title: 'Retail', value: 'retail' },
          { title: 'Government', value: 'government' },
        ],
      },
    },
    {
      name: 'requiredSkills',
      title: 'Required Skills',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
      description: 'Link to skill documents for personalization and SEO',
    },
    {
      name: 'detailedGuide',
      title: 'Detailed Career Guide',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      description: 'Long-form content for SEO (aim for 1500+ words)',
    },
    {
      name: 'educationRequirements',
      title: 'Education Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Typical education requirements for this career path',
    },
    {
      name: 'jobOutlook',
      title: 'Job Outlook',
      type: 'object',
      fields: [
        {
          name: 'growthRate',
          type: 'string',
          title: 'Growth Rate',
          description: 'e.g., "22% growth (Much faster than average)"',
        },
        {
          name: 'demand',
          type: 'string',
          title: 'Demand Level',
          options: {
            list: ['Very High', 'High', 'Medium', 'Low'],
          },
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
          rows: 3,
        },
      ],
    },
    {
      name: 'typicalCompanies',
      title: 'Typical Employers',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Example companies that hire for this role',
    },
    {
      name: 'relatedCareerPaths',
      title: 'Related Career Paths',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'careerPath' }] }],
      description: 'Similar or adjacent career paths',
    },
    {
      name: 'dayInTheLife',
      title: 'Day in the Life',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'What a typical day looks like in this role',
    },
    {
      name: 'challenges',
      title: 'Common Challenges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Challenges faced in this career path',
    },
    {
      name: 'rewards',
      title: 'Career Rewards',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Benefits and rewards of this career',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When this career path was published',
      initialValue: new Date().toISOString(),
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      description: 'Last update date',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'SEO settings for this career path page',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'experienceLevel',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title,
        subtitle: `${subtitle || 'No level'} | Career Path`,
        media,
      }
    },
  },
})
