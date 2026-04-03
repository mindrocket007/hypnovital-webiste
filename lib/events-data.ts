export interface EventCoach {
  name: string
  title: string
  slug?: string
  imageUrl?: string
}

export interface EventItem {
  id: string
  slug: string
  title: string
  eventDate: string
  startTime: string
  endTime: string
  city: string
  country: string // 'Online' | 'Schweiz' | 'Deutschland' | 'Österreich'
  venue: string
  deliveryMethod: 'Online' | 'Vor Ort'
  topic: string
  type: string
  price: string
  shortDescription: string
  detailedDescription: string
  targetAudience?: string[]       // "Der Workshop richtet sich an…"
  content: string[]
  additionalInfo?: string         // Bonus-Text nach den Inhalten
  additionalInfoItems?: string[]  // Bullet-Liste zum Bonus-Text
  bookingUrl: string
  coach?: EventCoach
}

const franzRuchti: EventCoach = {
  name: 'Franz Ruchti',
  title: 'Gründer hypnovital® · zertifizierter Hypnose-Coach',
  slug: 'franz-ruchti',
  imageUrl: '/images/franz-ruchti.webp',
}

export const events: EventItem[] = [
  // ── 16. Mai 2026 ─────────────────────────────────────────
  {
    id: '1',
    slug: 'wunschgewicht-beginnt-im-kopf-mai',
    title: 'Wunschgewicht beginnt im Kopf',
    eventDate: '2026-05-16',
    startTime: '08:00',
    endTime: '12:00',
    city: 'Luzern',
    country: 'Schweiz',
    venue: 'Wird noch bekannt gegeben',
    deliveryMethod: 'Vor Ort',
    topic: 'Gewohnheiten',
    type: 'Halbtagesworkshop',
    price: '€/CHF 195',
    shortDescription:
      'Ein intensiver Halbtagesworkshop mit der hypnovital® Methode – für Menschen, die ihr Essverhalten nachhaltig verändern und ihr Wunschgewicht erreichen möchten.',
    detailedDescription:
      'Viele Menschen wissen genau, was sie tun müssten, um abzunehmen – und trotzdem funktioniert es im Alltag nicht dauerhaft. Diäten beginnen motiviert, doch nach kurzer Zeit kehren alte Gewohnheiten zurück. Der Kopf weiss es besser, aber das Verhalten folgt anderen Mustern. Genau hier setzt dieser Workshop an. Beim hypnovital® Abnehmprogramm beginnen wir nicht beim Teller – wir beginnen beim Denken. Denn langfristige Veränderungen entstehen dort, wo Gewohnheiten entstehen: im Unterbewusstsein. In diesem Halbtagesworkshop lernst du, wie Gedanken, innere Bilder und unbewusste Programme dein Essverhalten beeinflussen. Durch gezielte mentale Übungen und eine geführte Gruppenhypnose schaffen wir neue mentale Grundlagen für ein entspannteres Verhältnis zu Essen, Körper und Gewicht. Du wirst verstehen, warum bisherige Versuche oft scheitern – und wie Veränderung dauerhaft gelingen kann.',
    targetAudience: [
      'die ihr Wunschgewicht erreichen möchten',
      'die genug von kurzfristigen Diäten haben',
      'die ihr Essverhalten nachhaltig verändern möchten',
      'die sich wieder wohler im eigenen Körper fühlen möchten',
    ],
    content: [
      'Einführung in die hypnovital® Methode und mentale Programme rund um Essen und Gewohnheiten',
      'Verständnis für emotionale Auslöser von Essverhalten',
      'Mentale Techniken zur Veränderung von Gewohnheiten',
      'Geführte Gruppenhypnose zum Thema Wunschgewicht',
      'Neue innere Bilder und Einstellungen zu Essen und Körper',
      'Konkrete Impulse für den Alltag',
    ],
    additionalInfo:
      'Alle Teilnehmenden erhalten zusätzlich eine hypnovital® Audio-Hypnose für zuhause, damit die Veränderung auch nach dem Workshop weiter vertieft werden kann. Die Audio-Session unterstützt dich dabei:',
    additionalInfoItems: [
      'neue Gedankenmuster zu festigen',
      'dein Essverhalten bewusster wahrzunehmen',
      'deinen persönlichen Veränderungsprozess im Alltag zu stärken',
    ],
    bookingUrl: '/kontakt',
    coach: franzRuchti,
  },
  {
    id: '2',
    slug: 'endlich-rauchfrei-mai',
    title: 'Endlich rauchfrei',
    eventDate: '2026-05-16',
    startTime: '14:00',
    endTime: '18:00',
    city: 'Luzern',
    country: 'Schweiz',
    venue: 'Wird noch bekannt gegeben',
    deliveryMethod: 'Vor Ort',
    topic: 'Gewohnheiten',
    type: 'Halbtagesworkshop',
    price: '€/CHF 195',
    shortDescription:
      'Ein intensiver Halbtagesworkshop mit der hypnovital® Methode – für Menschen, die sich dauerhaft vom Rauchen lösen und einen neuen, gesunden Lebensabschnitt beginnen möchten.',
    detailedDescription:
      'Viele Raucher kennen das Gefühl: Der Wunsch aufzuhören ist da – doch Gewohnheit, Stress oder bestimmte Situationen führen immer wieder zur nächsten Zigarette. Rauchen ist selten nur eine körperliche Gewohnheit. In vielen Fällen sind mentale Muster, Routinen und unbewusste Programme der eigentliche Grund, warum es so schwer fällt aufzuhören. Genau hier setzt dieser Workshop an. Mit der hypnovital® Methode arbeiten wir gezielt mit dem Unterbewusstsein. Durch mentale Techniken und eine geführte Gruppenhypnose können neue innere Einstellungen zum Thema Rauchen entstehen. Du wirst verstehen, warum Rauchen oft stärker ist als der gute Vorsatz – und wie dein inneres Programm auf Veränderung ausgerichtet werden kann.',
    targetAudience: [
      'die endlich dauerhaft rauchfrei werden möchten',
      'die bereits mehrere Versuche unternommen haben',
      'die sich von der Abhängigkeit lösen möchten',
      'die ihre Gesundheit und Lebensqualität verbessern möchten',
    ],
    content: [
      'Einführung in die hypnovital® Methode und die mentalen Muster hinter dem Rauchen',
      'Verständnis für Gewohnheiten und Auslöser von Rauchverlangen',
      'Mentale Techniken zur Veränderung von Gewohnheiten',
      'Geführte Gruppenhypnose zum Thema Rauchfreiheit',
      'Aufbau neuer innerer Einstellungen zu Freiheit und Gesundheit',
      'Impulse und Strategien für den Alltag',
    ],
    additionalInfo:
      'Alle Teilnehmenden erhalten zusätzlich eine hypnovital® Audio-Hypnose für zuhause, damit der Veränderungsprozess auch nach dem Workshop weiter unterstützt wird. Die Audio-Session hilft dir dabei:',
    additionalInfoItems: [
      'Rauchverlangen besser zu kontrollieren',
      'neue Gewohnheiten zu festigen',
      'deine Entscheidung für ein rauchfreies Leben zu stärken',
    ],
    bookingUrl: '/kontakt',
    coach: franzRuchti,
  },

  // ── 20. Juni 2026 ────────────────────────────────────────
  {
    id: '3',
    slug: 'wunschgewicht-beginnt-im-kopf-juni',
    title: 'Wunschgewicht beginnt im Kopf',
    eventDate: '2026-06-20',
    startTime: '08:00',
    endTime: '12:00',
    city: 'Luzern',
    country: 'Schweiz',
    venue: 'Wird noch bekannt gegeben',
    deliveryMethod: 'Vor Ort',
    topic: 'Gewohnheiten',
    type: 'Halbtagesworkshop',
    price: '€/CHF 195',
    shortDescription:
      'Ein intensiver Halbtagesworkshop mit der hypnovital® Methode – für Menschen, die ihr Essverhalten nachhaltig verändern und ihr Wunschgewicht erreichen möchten.',
    detailedDescription:
      'Viele Menschen wissen genau, was sie tun müssten, um abzunehmen – und trotzdem funktioniert es im Alltag nicht dauerhaft. Diäten beginnen motiviert, doch nach kurzer Zeit kehren alte Gewohnheiten zurück. Der Kopf weiss es besser, aber das Verhalten folgt anderen Mustern. Genau hier setzt dieser Workshop an. Beim hypnovital® Abnehmprogramm beginnen wir nicht beim Teller – wir beginnen beim Denken. Denn langfristige Veränderungen entstehen dort, wo Gewohnheiten entstehen: im Unterbewusstsein. In diesem Halbtagesworkshop lernst du, wie Gedanken, innere Bilder und unbewusste Programme dein Essverhalten beeinflussen. Durch gezielte mentale Übungen und eine geführte Gruppenhypnose schaffen wir neue mentale Grundlagen für ein entspannteres Verhältnis zu Essen, Körper und Gewicht. Du wirst verstehen, warum bisherige Versuche oft scheitern – und wie Veränderung dauerhaft gelingen kann.',
    targetAudience: [
      'die ihr Wunschgewicht erreichen möchten',
      'die genug von kurzfristigen Diäten haben',
      'die ihr Essverhalten nachhaltig verändern möchten',
      'die sich wieder wohler im eigenen Körper fühlen möchten',
    ],
    content: [
      'Einführung in die hypnovital® Methode und mentale Programme rund um Essen und Gewohnheiten',
      'Verständnis für emotionale Auslöser von Essverhalten',
      'Mentale Techniken zur Veränderung von Gewohnheiten',
      'Geführte Gruppenhypnose zum Thema Wunschgewicht',
      'Neue innere Bilder und Einstellungen zu Essen und Körper',
      'Konkrete Impulse für den Alltag',
    ],
    additionalInfo:
      'Alle Teilnehmenden erhalten zusätzlich eine hypnovital® Audio-Hypnose für zuhause, damit die Veränderung auch nach dem Workshop weiter vertieft werden kann. Die Audio-Session unterstützt dich dabei:',
    additionalInfoItems: [
      'neue Gedankenmuster zu festigen',
      'dein Essverhalten bewusster wahrzunehmen',
      'deinen persönlichen Veränderungsprozess im Alltag zu stärken',
    ],
    bookingUrl: '/kontakt',
    coach: franzRuchti,
  },
  {
    id: '4',
    slug: 'endlich-rauchfrei-juni',
    title: 'Endlich rauchfrei',
    eventDate: '2026-06-20',
    startTime: '14:00',
    endTime: '18:00',
    city: 'Luzern',
    country: 'Schweiz',
    venue: 'Wird noch bekannt gegeben',
    deliveryMethod: 'Vor Ort',
    topic: 'Gewohnheiten',
    type: 'Halbtagesworkshop',
    price: '€/CHF 195',
    shortDescription:
      'Ein intensiver Halbtagesworkshop mit der hypnovital® Methode – für Menschen, die sich dauerhaft vom Rauchen lösen und einen neuen, gesunden Lebensabschnitt beginnen möchten.',
    detailedDescription:
      'Viele Raucher kennen das Gefühl: Der Wunsch aufzuhören ist da – doch Gewohnheit, Stress oder bestimmte Situationen führen immer wieder zur nächsten Zigarette. Rauchen ist selten nur eine körperliche Gewohnheit. In vielen Fällen sind mentale Muster, Routinen und unbewusste Programme der eigentliche Grund, warum es so schwer fällt aufzuhören. Genau hier setzt dieser Workshop an. Mit der hypnovital® Methode arbeiten wir gezielt mit dem Unterbewusstsein. Durch mentale Techniken und eine geführte Gruppenhypnose können neue innere Einstellungen zum Thema Rauchen entstehen. Du wirst verstehen, warum Rauchen oft stärker ist als der gute Vorsatz – und wie dein inneres Programm auf Veränderung ausgerichtet werden kann.',
    targetAudience: [
      'die endlich dauerhaft rauchfrei werden möchten',
      'die bereits mehrere Versuche unternommen haben',
      'die sich von der Abhängigkeit lösen möchten',
      'die ihre Gesundheit und Lebensqualität verbessern möchten',
    ],
    content: [
      'Einführung in die hypnovital® Methode und die mentalen Muster hinter dem Rauchen',
      'Verständnis für Gewohnheiten und Auslöser von Rauchverlangen',
      'Mentale Techniken zur Veränderung von Gewohnheiten',
      'Geführte Gruppenhypnose zum Thema Rauchfreiheit',
      'Aufbau neuer innerer Einstellungen zu Freiheit und Gesundheit',
      'Impulse und Strategien für den Alltag',
    ],
    additionalInfo:
      'Alle Teilnehmenden erhalten zusätzlich eine hypnovital® Audio-Hypnose für zuhause, damit der Veränderungsprozess auch nach dem Workshop weiter unterstützt wird. Die Audio-Session hilft dir dabei:',
    additionalInfoItems: [
      'Rauchverlangen besser zu kontrollieren',
      'neue Gewohnheiten zu festigen',
      'deine Entscheidung für ein rauchfreies Leben zu stärken',
    ],
    bookingUrl: '/kontakt',
    coach: franzRuchti,
  },
]

export const allTopics = [...new Set(events.map((e) => e.topic))]
export const allCountries = ['Schweiz', 'Deutschland', 'Österreich']

// Coach-Referenzen für Events – einfach in coach: {} eintragen
// export const coachBarbara = {
//   name: 'Barbara Husmann',
//   title: 'Chief Quality Officer · hypnovital® Trainerin & Coach',
//   slug: 'barbara-husmann',
//   imageUrl: '/images/barbara-husmann.webp',
// }
