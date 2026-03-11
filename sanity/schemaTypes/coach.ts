import { defineField, defineType } from 'sanity'

export const coach = defineType({
  name: 'coach',
  title: 'Coach',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Profilfoto',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'city',
      title: 'Stadt',
      type: 'string',
    }),
    defineField({
      name: 'region',
      title: 'Region / Kanton',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Land',
      type: 'string',
      options: {
        list: ['Schweiz', 'Deutschland', 'Österreich'],
      },
    }),
    defineField({
      name: 'email',
      title: 'E-Mail',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'shortBio',
      title: 'Kurz-Bio (für Karte)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fullBio',
      title: 'Vollständige Bio (für Profilseite)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'specializations',
      title: 'Spezialisierungen',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Stressmanagement',
          'Gewichtsreduktion',
          'Raucherentwöhnung',
          'Selbstvertrauen',
          'Führungskräfte-Coaching',
          'Entspannung',
          'Ängste lösen',
          'Schlaf verbessern',
          'Resilienz',
          'Teamdynamik',
          'Lampenfieber',
          'Prüfungsangst',
          'Sportmental',
        ],
      },
    }),
    defineField({
      name: 'offersCorporateWorkshops',
      title: 'Bietet Firmen-Workshops an',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Aktiv (im Verzeichnis sichtbar)',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'city', media: 'photo' },
  },
})
