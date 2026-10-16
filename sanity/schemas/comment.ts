import type { Rule } from 'sanity'

const comment = {
  name: 'comment',
  title: 'Article Comments',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule: Rule) => rule.required().max(100),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule: Rule) => rule.max(254),
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'text',
      validation: (rule: Rule) => rule.required().max(5000),
    },
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'article',
      title: 'Article',
      type: 'reference',
      to: [{ type: 'article' }],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}

export default comment
