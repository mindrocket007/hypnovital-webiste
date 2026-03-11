import { defineField, defineType } from 'sanity'

export const programme = defineType({
  name: 'programme',
  title: 'Programm',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'longDescription',
      title: 'Ausführliche Beschreibung',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
    }),
    defineField({
      name: 'isActive',
      title: 'Aktiv',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
