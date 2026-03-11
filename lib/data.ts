// ============================================================
// hypnovital – Produkt- und Coach-Daten (V1 Mock / Fallback)
// Später vollständig durch Sanity CMS ersetzt
// ============================================================

export interface Product {
  id: string
  slug: string
  title: string
  shortDescription: string
  price: number // in Rappen (CHF-Cents)
  currency: string
  priceFormatted: string
  stripePriceId: string
  downloadFileKey: string
  category: string
  tags?: string[]
  benefits: string[]
  isActive: boolean
}

export const products: Product[] = [
  {
    id: 'abnehmen',
    slug: 'abnehmen',
    title: 'Abnehmen',
    shortDescription:
      'Unterstütze deinen Körper beim Abnehmen durch Tiefenentspannung, positives Selbstbild und mentale Neuausrichtung.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_ABNEHMEN || 'price_1T99AwBg1XYE0gv0LpJVbeuw',
    downloadFileKey: 'audio/abnehmen.mp3',
    category: 'Körper & Gesundheit',
    tags: ['abnehmen', 'gewicht', 'körper', 'figur', 'ernährung', 'selbstbild', 'motivation', 'audio'],
    benefits: ['Körperbewusstsein stärken', 'Essverhalten verändern', 'Motivation nachhaltig steigern'],
    isActive: true,
  },
  {
    id: 'rauchfrei',
    slug: 'rauchfrei',
    title: 'Rauchfrei',
    shortDescription:
      'Werde dauerhaft rauchfrei durch mentale Neuausrichtung und Stärkung deiner inneren Ressourcen.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_RAUCHFREI || 'price_1T99CqBg1XYE0gv0FAhUw3cr',
    downloadFileKey: 'audio/rauchfrei.mp3',
    category: 'Gewohnheiten',
    tags: ['rauchfrei', 'rauchen', 'nikotin', 'zigarette', 'sucht', 'gewohnheit', 'audio'],
    benefits: ['Verlangen reduzieren', 'Neues Selbstbild aufbauen', 'Rückfallprävention stärken'],
    isActive: true,
  },
  {
    id: 'tief-entspannen',
    slug: 'tief-entspannen',
    title: 'Tief entspannen',
    shortDescription:
      'Lass Stress und Anspannung los und finde echte, tiefe Entspannung und innere Ruhe.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_ENTSPANNEN || 'price_1T99GIBg1XYE0gv0ZKa2u98f',
    downloadFileKey: 'audio/tief-entspannen.mp3',
    category: 'Entspannung',
    tags: ['entspannung', 'stress', 'stressabbau', 'burnout', 'ruhe', 'regeneration', 'tiefenentspannung', 'audio'],
    benefits: ['Stressabbau', 'Schlafqualität verbessern', 'Regeneration fördern'],
    isActive: true,
  },
  {
    id: 'selbstvertrauen',
    slug: 'selbstvertrauen',
    title: 'Selbstvertrauen stärken',
    shortDescription:
      'Entwickle ein stabiles Selbstvertrauen und eine gesunde, kraftvolle Selbstwahrnehmung.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_SELBSTVERTRAUEN || 'price_1T99HiBg1XYE0gv0UccCwgkz',
    downloadFileKey: 'audio/selbstvertrauen.mp3',
    category: 'Persönlichkeit',
    tags: ['selbstvertrauen', 'selbstwert', 'blockaden', 'sicherheit', 'persönlichkeit', 'mut', 'audio'],
    benefits: ['Selbstwert stärken', 'Innere Sicherheit aufbauen', 'Blockaden lösen'],
    isActive: true,
  },
  {
    id: 'lampenfieber',
    slug: 'lampenfieber',
    title: 'Lampenfieber lösen',
    shortDescription:
      'Überwinde Auftrittsangst und Nervosität und tritt selbstsicher und klar vor jedes Publikum.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_LAMPENFIEBER || 'price_1T99JBBg1XYE0gv08tRAit4H',
    downloadFileKey: 'audio/lampenfieber.mp3',
    category: 'Leistung',
    tags: ['lampenfieber', 'auftrittsangst', 'nervosität', 'präsentation', 'bühne', 'sprechen', 'angst', 'audio'],
    benefits: ['Nervosität reduzieren', 'Klarheit im Auftreten', 'Selbstsicherheit stärken'],
    isActive: true,
  },
  {
    id: 'orgasmus-hinauszogern',
    slug: 'orgasmus-hinauszogern',
    title: 'Orgasmus hinauszögern',
    shortDescription:
      'Entwickle bewusste Körperwahrnehmung und Kontrolle für ein erfüllteres und intensiveres Erleben.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_ORGASMUS || 'price_1T99JsBg1XYE0gv0zKpqtUO8',
    downloadFileKey: 'audio/orgasmus-hinauszogern.mp3',
    category: 'Wohlbefinden',
    tags: ['körperwahrnehmung', 'intimität', 'kontrolle', 'wohlbefinden', 'sexualität', 'audio'],
    benefits: ['Körperbewusstsein stärken', 'Kontrolle entwickeln', 'Erleben intensivieren'],
    isActive: true,
  },
  {
    id: 'tief-schlafen',
    slug: 'tief-schlafen',
    title: 'Tief schlafen',
    shortDescription:
      'Finde tiefen, erholsamen Schlaf durch gezielte Tiefenentspannung und mentale Beruhigung.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_SCHLAFEN || 'price_1T99KKBg1XYE0gv0MkowjshS',
    downloadFileKey: 'audio/tief-schlafen.mp3',
    category: 'Entspannung',
    tags: ['schlaf', 'schlafen', 'einschlafen', 'schlafstörung', 'tiefschlaf', 'erholung', 'entspannung', 'audio'],
    benefits: ['Einschlafen erleichtern', 'Schlafqualität verbessern', 'Erholsamen Tiefschlaf fördern'],
    isActive: true,
  },
  {
    id: 'gedanken-beruhigen',
    slug: 'gedanken-beruhigen',
    title: 'Gedanken beruhigen',
    shortDescription:
      'Bringe Ruhe in einen überlasteten Geist und erlange innere Klarheit durch Gedankenstille.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_GEDANKEN || 'price_1T99KmBg1XYE0gv0AQcWkdcr',
    downloadFileKey: 'audio/gedanken-beruhigen.mp3',
    category: 'Entspannung',
    tags: ['gedanken', 'grübeln', 'stress', 'ruhe', 'entspannung', 'klarheit', 'overthinking', 'audio'],
    benefits: ['Gedankenkarussell stoppen', 'Innere Ruhe finden', 'Mentale Klarheit gewinnen'],
    isActive: true,
  },
  {
    id: 'selbstliebe-entwickeln',
    slug: 'selbstliebe-entwickeln',
    title: 'Selbstliebe entwickeln',
    shortDescription:
      'Entwickle eine tiefe, echte Wertschätzung für dich selbst und stärke dein Selbstbild nachhaltig.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_SELBSTLIEBE || 'price_1T99LLBg1XYE0gv0nnElMHdk',
    downloadFileKey: 'audio/selbstliebe-entwickeln.mp3',
    category: 'Persönlichkeit',
    tags: ['selbstliebe', 'selbstakzeptanz', 'selbstwert', 'persönlichkeit', 'blockaden', 'wertschätzung', 'audio'],
    benefits: ['Selbstakzeptanz stärken', 'Inneren Kritiker beruhigen', 'Gesundes Selbstbild aufbauen'],
    isActive: true,
  },
  {
    id: 'konzentration-steigern',
    slug: 'konzentration-steigern',
    title: 'Konzentration steigern',
    shortDescription:
      'Schärfe deinen Fokus, verlängere deine Aufmerksamkeitsspanne und arbeite mit voller mentaler Kraft.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_KONZENTRATION || 'price_1T99LpBg1XYE0gv09F08dQlT',
    downloadFileKey: 'audio/konzentration-steigern.mp3',
    category: 'Leistung',
    tags: ['konzentration', 'fokus', 'produktivität', 'leistung', 'arbeit', 'lernen', 'ablenkung', 'audio'],
    benefits: ['Fokus und Klarheit stärken', 'Ablenkungen reduzieren', 'Produktivität steigern'],
    isActive: true,
  },
  {
    id: 'pruefungsangst',
    slug: 'pruefungsangst',
    title: 'Prüfungsangst lösen',
    shortDescription:
      'Überwinde Prüfungsangst und Nervosität und tritt ruhig, klar und selbstsicher in jede Prüfungssituation.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_PRUEFUNGSANGST || 'price_1T99MIBg1XYE0gv09V7ue3d5',
    downloadFileKey: 'audio/pruefungsangst.mp3',
    category: 'Leistung',
    tags: ['prüfung', 'prüfungsangst', 'angst', 'stress', 'schule', 'studium', 'nervosität', 'leistung', 'audio'],
    benefits: ['Prüfungsangst reduzieren', 'Konzentration unter Druck', 'Abrufbarkeit verbessern'],
    isActive: true,
  },
  {
    id: 'gutschein-impuls-session',
    slug: 'gutschein-impuls-session',
    title: 'hypnovital® Impuls-Session Gutschein',
    shortDescription: 'Verschenke eine geführte Hypnose-Session für einen Moment der Tiefenentspannung und inneren Klarheit.',
    price: 9500,
    currency: 'EUR',
    priceFormatted: '€/CHF 95',
    stripePriceId: process.env.STRIPE_PRICE_GUTSCHEIN_IMPULS || 'price_1T9CBzBg1XYE0gv08cLXPBJZ',
    downloadFileKey: '',
    category: 'Gutschein',
    tags: ['gutschein', 'schenken', 'geschenk', 'session', 'coaching', 'hypnose'],
    benefits: ['Einlösbar bei allen hypnovital® Coaches', 'Online oder vor Ort', 'Zustellung per E-Mail'],
    isActive: false,
  },
  {
    id: 'gutschein-halbtagesworkshop',
    slug: 'gutschein-halbtagesworkshop',
    title: 'hypnovital® Halbtagesworkshop Gutschein',
    shortDescription: 'Verschenke einen halbtägigen hypnovital® Workshop für mehr Entspannung, Fokus oder persönliche Stärke.',
    price: 19500,
    currency: 'EUR',
    priceFormatted: '€/CHF 195',
    stripePriceId: process.env.STRIPE_PRICE_GUTSCHEIN_HALBTAG || 'price_1T9CBJBg1XYE0gv02yqnrBME',
    downloadFileKey: '',
    category: 'Gutschein',
    tags: ['gutschein', 'schenken', 'geschenk', 'workshop', 'halbtag', 'entspannung'],
    benefits: ['Einlösbar bei allen hypnovital® Coaches', 'Online oder vor Ort', 'Zustellung per E-Mail'],
    isActive: false,
  },
  {
    id: 'gutschein-tagesworkshop',
    slug: 'gutschein-tagesworkshop',
    title: 'hypnovital® Tagesworkshop Gutschein',
    shortDescription: 'Verschenke einen intensiven hypnovital® Tagesworkshop für nachhaltige mentale Stärke und echte Transformation.',
    price: 34500,
    currency: 'EUR',
    priceFormatted: '€/CHF 345',
    stripePriceId: process.env.STRIPE_PRICE_GUTSCHEIN_TAG || 'price_1T9C9xBg1XYE0gv0nfwxBO1R',
    downloadFileKey: '',
    category: 'Gutschein',
    tags: ['gutschein', 'schenken', 'geschenk', 'workshop', 'tag', 'transformation'],
    benefits: ['Einlösbar bei allen hypnovital® Coaches', 'Online oder vor Ort', 'Zustellung per E-Mail'],
    isActive: false,
  },
  {
    id: 'transformation-gutschein',
    slug: 'transformation-gutschein',
    title: 'hypnovital® 3-Monate Transformation Gutschein',
    shortDescription: '12 Wochen strukturierter Transformationsprozess mit Hypnose-Sessions, Coaching und individuellen Audio-Programmen.',
    price: 240000,
    currency: 'EUR',
    priceFormatted: 'ab €/CHF 2\'400',
    stripePriceId: process.env.STRIPE_PRICE_TRANSFORMATION_GUTSCHEIN || 'price_1T99g5Bg1XYE0gv04mrqsCQb',
    downloadFileKey: '',
    category: 'Gutschein',
    tags: ['gutschein', 'schenken', 'geschenk', 'transformation', 'coaching', 'hypnose', 'programm'],
    benefits: ['12 Hypnose-Sessions', 'Regelmässige Coachinggespräche', 'Individuelle Audio-Programme', 'Wöchentliche Reflexion & Feedback'],
    isActive: false,
  },
  {
    id: 'gutschein',
    slug: 'gutschein',
    title: 'hypnovital® Hypnose-Session Gutschein',
    shortDescription: 'Verschenke eine persönliche hypnovital® Hypnose-Session für mehr Ruhe, Klarheit und mentale Stärke.',
    price: 15000,
    currency: 'EUR',
    priceFormatted: 'CHF / EUR 150',
    stripePriceId: process.env.STRIPE_PRICE_GUTSCHEIN || 'price_1T99O2Bg1XYE0gv0N1dCborr',
    downloadFileKey: '',
    category: 'Gutschein',
    tags: ['gutschein', 'schenken', 'geschenk', 'session', 'coaching', 'hypnose'],
    benefits: ['Einlösbar bei allen hypnovital® Coaches', 'Online oder vor Ort', 'Zustellung per E-Mail'],
    isActive: false, // nicht im regulären Produktgrid
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  // Gutschein ist isActive: false, soll aber trotzdem per slug gefunden werden
  return products.find((p) => p.slug === slug)
}

// ============================================================

export interface Coach {
  id: string
  slug: string
  name: string
  city: string
  region: string
  country: string
  email: string
  phone: string
  shortBio: string
  fullBio: string
  specializations: string[]
  offersCorporateWorkshops: boolean
  website?: string
  imageUrl?: string
  isActive: boolean
}

export const coaches: Coach[] = [
  {
    id: 'franz-ruchti',
    slug: 'franz-ruchti',
    name: 'Franz Ruchti',
    city: 'Zürich',
    region: 'Zürich',
    country: 'Schweiz',
    email: 'franz@hypnovital.net',
    phone: '+41 79 123 45 67',
    shortBio:
      'Gründer von hypnovital und erfahrener Hypnose-Coach mit Fokus auf mentale Stärke, Gesundheit und Unternehmen.',
    fullBio:
      'Franz Ruchti ist Gründer von hypnovital und begleitet seit über 10 Jahren Privatpersonen und Unternehmen auf dem Weg zu mentaler Stärke und nachhaltigem Wandel. Mit der hypnovital Methode – dem House of Change – hat er einen strukturierten Ansatz entwickelt, der tief wirkt und nachhaltig verändert. Franz arbeitet im Raum Zürich und online.',
    specializations: [
      'Stressmanagement',
      'Gewichtsreduktion',
      'Raucherentwöhnung',
      'Selbstvertrauen',
      'Führungskräfte-Coaching',
    ],
    offersCorporateWorkshops: true,
    website: 'https://hypnovital.net',
    imageUrl: '/images/franz-ruchti.webp',
    isActive: true,
  },
  {
    id: 'anna-mueller',
    slug: 'anna-mueller',
    name: 'Anna Müller',
    city: 'Bern',
    region: 'Bern',
    country: 'Schweiz',
    email: 'anna@hypnovital.net',
    phone: '+41 76 234 56 78',
    shortBio:
      'Hypnose-Coach in Bern mit Schwerpunkt auf Entspannung, Ängste lösen und persönliche Transformation.',
    fullBio:
      'Anna Müller begleitet Klientinnen und Klienten im Raum Bern einfühlsam und methodisch fundiert. Ihr Schwerpunkt liegt auf Entspannung, dem Lösen von Ängsten und tiefgreifender persönlicher Veränderung. Sie arbeitet sowohl in Einzel- als auch in Gruppensettings.',
    specializations: ['Entspannung', 'Ängste lösen', 'Schlaf verbessern', 'Selbstvertrauen'],
    offersCorporateWorkshops: false,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    isActive: true,
  },
  {
    id: 'markus-weber',
    slug: 'markus-weber',
    name: 'Markus Weber',
    city: 'Basel',
    region: 'Basel-Stadt',
    country: 'Schweiz',
    email: 'markus@hypnovital.net',
    phone: '+41 78 345 67 89',
    shortBio:
      'Business Coach und hypnovital Partner in Basel – spezialisiert auf Resilienz, Führung und Teamdynamik.',
    fullBio:
      'Markus Weber begleitet Führungskräfte und Teams zu mehr Resilienz, Klarheit und Leistungsfähigkeit. Als langjähriger Unternehmer kennt er die Herausforderungen des Berufsalltags aus eigener Erfahrung und verbindet Hypnose mit pragmatischen Ansätzen aus Führung und Organisationsentwicklung.',
    specializations: ['Führungskräfte', 'Resilienz', 'Stressmanagement', 'Teamdynamik'],
    offersCorporateWorkshops: true,
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    isActive: true,
  },
  {
    id: 'sarah-brunner',
    slug: 'sarah-brunner',
    name: 'Sarah Brunner',
    city: 'München',
    region: 'Bayern',
    country: 'Deutschland',
    email: 'sarah@hypnovital.net',
    phone: '+49 89 456 78 90',
    shortBio:
      'Hypnose-Coach in München – spezialisiert auf Lampenfieber, Prüfungsangst und Sportmental.',
    fullBio:
      'Sarah Brunner arbeitet in München mit Studierenden, Sportlerinnen und Berufstätigen, die ihr volles Potenzial entfalten möchten. Sie ist besonders bekannt für ihre Arbeit mit Auftrittsangst, Prüfungssituationen und mentaler Leistung im Sport.',
    specializations: ['Lampenfieber', 'Prüfungsangst', 'Selbstvertrauen', 'Sportmental'],
    offersCorporateWorkshops: false,
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    isActive: true,
  },
  {
    id: 'barbara-husmann',
    slug: 'barbara-husmann',
    name: 'Barbara Husmann',
    city: 'Zürich',
    region: 'Zürich',
    country: 'Schweiz',
    email: 'barbara@hypnovital.net',
    phone: '',
    shortBio:
      'Chief Quality Officer und hypnovital® Trainerin – spezialisiert auf Coach-Ausbildung, Qualitätssicherung und die Weiterentwicklung der hypnovital® Methode.',
    fullBio:
      'Barbara Husmann bringt umfangreiche Erfahrung in der Ausbildung und Zertifizierung von Coaches mit. Sie sichert die methodische Qualität aller hypnovital® Angebote und begleitet die Weiterentwicklung der hypnovital® Academy. Ihr Anspruch: höchste Qualität als Standard – für Coaches und Klienten gleichermassen.',
    specializations: ['Coach-Ausbildung', 'Qualitätsmanagement', 'Entspannung', 'Persönlichkeitsentwicklung'],
    offersCorporateWorkshops: true,
    imageUrl: '/images/barbara-husmann.webp',
    isActive: true,
  },
]

export function getCoachBySlug(slug: string): Coach | undefined {
  return coaches.find((c) => c.slug === slug && c.isActive)
}

export const allSpecializations = [
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
]

export const allCountries = ['Schweiz', 'Deutschland', 'Österreich']
export const allRegions = ['Zürich', 'Bern', 'Basel-Stadt', 'Luzern', 'Bayern', 'Wien']
