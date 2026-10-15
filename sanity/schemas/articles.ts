import { Rule } from 'sanity'

export default {
  name: 'article',
  title: 'Articles & Publications',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: Rule) => rule.required().max(120),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'category',
      title: 'Practice Area / Category',
      type: 'string',
      options: {
        list: [
          { title: 'Corporate & Commercial Law', value: 'corporate-law' },
          { title: 'Litigation & Dispute Resolution', value: 'litigation' },
          { title: 'Legal Publications & Journals', value: 'publications' },
          { title: 'Regulatory Compliance', value: 'compliance' },
          { title: 'General Legal Insights', value: 'insights' },
        ],
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'author',
      title: 'Author / Counsel',
      type: 'string',
      initialValue: 'Redeem Legal Editorial Team',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'excerpt',
      title: 'Summary / Excerpt',
      type: 'text',
      rows: 3,
      validation: (rule: Rule) => rule.max(200),
    },
    {
      name: 'body',
      title: 'Article Body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
}