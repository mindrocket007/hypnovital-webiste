import { defineField, defineType } from 'sanity'

export const audioProduct = defineType({
  name: 'audioProduct',
  title: 'Audio-Produkt',
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
      name: 'price',
      title: 'Preis (in Rappen, z. B. 2990 = CHF 29.90)',
      type: 'number',
      validation: (r) => r.required().min(0),
    }),
    defineField({
      name: 'currency',
      title: 'Währung',
      type: 'string',
      initialValue: 'CHF',
    }),
    defineField({
      name: 'stripePriceId',
      title: 'Stripe Price ID',
      type: 'string',
      description: 'z. B. price_xxxx aus dem Stripe Dashboard',
    }),
    defineField({
      name: 'coverImage',
      title: 'Produktbild',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'downloadFileKey',
      title: 'Download-Datei Key (z. B. audio/abnehmen.mp3)',
      type: 'string',
      description: 'Pfad zur Datei im Supabase Storage Bucket "audio"',
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          'Körper & Gesundheit',
          'Gewohnheiten',
          'Entspannung',
          'Persönlichkeit',
          'Leistung',
          'Wohlbefinden',
        ],
      },
    }),
    defineField({
      name: 'isActive',
      title: 'Aktiv (im Shop sichtbar)',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'title', media: 'coverImage' },
  },
})
