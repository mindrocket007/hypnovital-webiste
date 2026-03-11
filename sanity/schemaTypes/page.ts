import { defineField, defineType } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Seite',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Interner Titel',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (z. B. startseite, unternehmen)',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Titel',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Beschreibung',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'heroSubline',
      title: 'Hero Subline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'introText',
      title: 'Intro-Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
})
