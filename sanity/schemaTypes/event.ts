import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
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
      name: 'type',
      title: 'Veranstaltungstyp',
      type: 'string',
      options: {
        list: [
          { title: 'Impuls-Session (Standardpreis: €/CHF 95)', value: 'Impuls-Session' },
          { title: 'Halbtagesworkshop (Standardpreis: €/CHF 195)', value: 'Halbtagesworkshop' },
          { title: 'Tagesworkshop (Standardpreis: €/CHF 345)', value: 'Tagesworkshop' },
          { title: 'Online-Programm (Standardpreis: €/CHF 0–39)', value: 'Online-Programm' },
        ],
      },
    }),
    defineField({
      name: 'topic',
      title: 'Thema',
      type: 'string',
      options: {
        list: [
          'Stressmanagement',
          'Entspannung',
          'Selbstvertrauen',
          'Resilienz',
          'Führungskräfte',
          'Schlaf',
          'Lampenfieber',
          'Prüfungsangst',
          'Gewichtsreduktion',
          'Raucherentwöhnung',
        ],
      },
    }),
    defineField({
      name: 'deliveryMethod',
      title: 'Durchführungsart',
      type: 'string',
      options: { list: ['Online', 'Vor Ort'] },
    }),
    defineField({
      name: 'eventDate',
      title: 'Datum',
      type: 'date',
      options: { dateFormat: 'DD.MM.YYYY' },
    }),
    defineField({
      name: 'startTime',
      title: 'Startzeit (z.B. 09:00)',
      type: 'string',
    }),
    defineField({
      name: 'endTime',
      title: 'Endzeit (z.B. 17:00)',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'Stadt',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Land',
      type: 'string',
      options: { list: ['Schweiz', 'Deutschland', 'Österreich', 'Online'] },
    }),
    defineField({
      name: 'venue',
      title: 'Veranstaltungsort',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Preis',
      description: 'Standardpreise: Impuls-Session €/CHF 95 · Halbtagesworkshop €/CHF 195 · Tagesworkshop €/CHF 345 · Online-Programm €/CHF 0–39. Frei überschreibbar.',
      type: 'string',
      placeholder: 'z.B. CHF 345 oder €/CHF 195',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'detailedDescription',
      title: 'Ausführliche Beschreibung',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'content',
      title: 'Inhalte / Programm-Punkte',
      description: 'Was wird behandelt? Als Aufzählung.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'coachReference',
      title: 'Kursleitung (Coach)',
      description: 'Coach muss zuerst im Coach-Verzeichnis angelegt sein.',
      type: 'reference',
      to: [{ type: 'coach' }],
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Buchungs-URL (optional, falls extern)',
      type: 'url',
    }),
    defineField({
      name: 'isActive',
      title: 'Aktiv (auf Website sichtbar)',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eventDate',
      media: 'coachReference.photo',
    },
  },
})
