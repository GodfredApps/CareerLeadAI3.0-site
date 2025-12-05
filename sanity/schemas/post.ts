import { defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the blog post',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Author Name',
        },
        {
          name: 'image',
          type: 'image',
          title: 'Author Image',
        },
        {
          name: 'bio',
          type: 'text',
          title: 'Author Bio',
          rows: 2,
        },
      ],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary for preview cards and meta descriptions',
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
      name: 'content',
      title: 'Content',
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
        {
          type: 'code',
          name: 'code',
          title: 'Code Block',
        },
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Career Advice', value: 'career-advice' },
          { title: 'Skill Development', value: 'skill-development' },
          { title: 'Industry Insights', value: 'industry-insights' },
          { title: 'Success Stories', value: 'success-stories' },
          { title: 'Interview Tips', value: 'interview-tips' },
          { title: 'Resume & Portfolio', value: 'resume-portfolio' },
          { title: 'Networking', value: 'networking' },
          { title: 'Work-Life Balance', value: 'work-life-balance' },
          { title: 'Career Transitions', value: 'career-transitions' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'careerTags',
      title: 'Related Career Paths',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'careerPath' }] }],
      description: 'Link posts to specific career paths for personalization',
    },
    {
      name: 'skillTags',
      title: 'Related Skills',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
      description: 'Link posts to specific skills for personalization',
    },
    {
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Students', value: 'students' },
          { title: 'Recent Graduates', value: 'recent-graduates' },
          { title: 'Early Career', value: 'early-career' },
          { title: 'Mid Career', value: 'mid-career' },
          { title: 'Career Changers', value: 'career-changers' },
          { title: 'Returning to Work', value: 'returning-to-work' },
        ],
      },
      description: 'Who this content is most relevant for',
    },
    {
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      description: 'Estimated reading time in minutes',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When this post was published',
      initialValue: new Date().toISOString(),
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      description: 'Last update date',
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Mark as featured to highlight in homepage',
      initialValue: false,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'SEO settings for this blog post',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
      category: 'category',
    },
    prepare(selection) {
      const { title, author, media, category } = selection
      return {
        title,
        subtitle: `${author || 'Unknown'} | ${category || 'Uncategorized'}`,
        media,
      }
    },
  },
})
