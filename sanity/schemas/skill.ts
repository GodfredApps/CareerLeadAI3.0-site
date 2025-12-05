import { defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      description: 'The name of the skill (e.g., "Python Programming", "Project Management")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Skill category for organization',
      options: {
        list: [
          { title: 'Technical', value: 'technical' },
          { title: 'Soft Skills', value: 'soft' },
          { title: 'Business', value: 'business' },
          { title: 'Creative', value: 'creative' },
          { title: 'Leadership', value: 'leadership' },
          { title: 'Communication', value: 'communication' },
          { title: 'Data & Analytics', value: 'data' },
          { title: 'Design', value: 'design' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Sales', value: 'sales' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the skill',
    },
    {
      name: 'demandLevel',
      title: 'Market Demand Level',
      type: 'string',
      description: 'Current market demand for this skill',
      options: {
        list: [
          { title: 'Very High', value: 'very_high' },
          { title: 'High', value: 'high' },
          { title: 'Medium', value: 'medium' },
          { title: 'Low', value: 'low' },
        ],
      },
      initialValue: 'medium',
    },
    {
      name: 'relatedSkills',
      title: 'Related Skills',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
      description: 'Skills commonly learned together or related to this skill',
    },
    {
      name: 'learningResources',
      title: 'Learning Resources',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Resource Title',
            },
            {
              name: 'url',
              type: 'url',
              title: 'Resource URL',
            },
            {
              name: 'type',
              type: 'string',
              title: 'Resource Type',
              options: {
                list: ['Course', 'Book', 'Article', 'Video', 'Tutorial', 'Documentation'],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'SEO settings for skill pages',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      demandLevel: 'demandLevel',
    },
    prepare(selection) {
      const { title, subtitle, demandLevel } = selection
      return {
        title,
        subtitle: `${subtitle} • Demand: ${demandLevel || 'medium'}`,
      }
    },
  },
})
