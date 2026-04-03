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
    isActive: false,
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
    title: 'Lampenfieber besiegen',
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
    isActive: false,
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
    isActive: false,
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
    isActive: false,
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
    isActive: false,
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
    id: 'fuehrungsstaerke',
    slug: 'fuehrungsstaerke',
    title: 'Führungsstärke entfalten',
    shortDescription:
      'Führe mit innerer Klarheit und Gelassenheit. Entwickle eine natürliche Autorität, die aus Authentizität und Ruhe entsteht.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_FUEHRUNGSSTAERKE || 'price_1TFEjABg1XYE0gv0iz0mqagy',
    downloadFileKey: 'audio/fuehrungsstaerke.mp3',
    category: 'Leistung',
    tags: ['führung', 'leadership', 'management', 'entscheidung', 'autorität', 'business', 'audio'],
    benefits: ['Klare Entscheidungen treffen', 'Natürliche Autorität entwickeln', 'Gelassenheit unter Druck'],
    isActive: true,
  },
  {
    id: 'resilienz',
    slug: 'resilienz',
    title: 'Resilienz aufbauen',
    shortDescription:
      'Werde innerlich unerschütterlich. Entwickle eine tiefe Widerstandskraft, die dich Rückschläge meistern und an Herausforderungen wachsen lässt.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_RESILIENZ || 'price_1TFDo2Bg1XYE0gv0fxtfFF3L',
    downloadFileKey: 'audio/resilienz.mp3',
    category: 'Persönlichkeit',
    tags: ['resilienz', 'widerstandskraft', 'stärke', 'rückschläge', 'persönlichkeit', 'gelassenheit', 'audio'],
    benefits: ['Innere Widerstandskraft stärken', 'Rückschläge besser meistern', 'Gelassenheit in schwierigen Zeiten'],
    isActive: true,
  },
  {
    id: 'verkaufsmindset',
    slug: 'verkaufsmindset',
    title: 'Verkaufsmindset aktivieren',
    shortDescription:
      'Verkaufe mit Freude und Überzeugung. Löse innere Blockaden rund ums Verkaufen und kommuniziere deinen Wert klar und selbstbewusst.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_VERKAUFSMINDSET || 'price_1TFDvYBg1XYE0gv0zu6KUVMr',
    downloadFileKey: 'audio/verkaufsmindset.mp3',
    category: 'Leistung',
    tags: ['verkauf', 'vertrieb', 'selbstbewusstsein', 'kommunikation', 'erfolg', 'business', 'audio'],
    benefits: ['Verkaufshemmungen lösen', 'Wert selbstbewusst kommunizieren', 'Abschlüsse mit Leichtigkeit erzielen'],
    isActive: true,
  },
  {
    id: 'prokrastination',
    slug: 'prokrastination',
    title: 'Prokrastination überwinden',
    shortDescription:
      'Schluss mit Aufschieben. Entwickle eine natürliche Entschlossenheit, die dich Aufgaben sofort anpacken lässt – ohne inneren Kampf.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_PROKRASTINATION || 'price_1TFImaBg1XYE0gv0zfvMpXWa',
    downloadFileKey: 'audio/prokrastination.mp3',
    category: 'Leistung',
    tags: ['prokrastination', 'aufschieben', 'produktivität', 'disziplin', 'motivation', 'leistung', 'audio'],
    benefits: ['Aufgaben sofort anpacken', 'Inneren Widerstand auflösen', 'Produktivität steigern'],
    isActive: true,
  },
  {
    id: 'sport',
    slug: 'sport',
    title: 'Dranbleiben beim Sport',
    shortDescription:
      'Mach Bewegung zu deiner Gewohnheit. Entwickle eine tiefe Freude am Training, die dich dauerhaft dranbleiben lässt.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_SPORT || 'price_1TFIpJBg1XYE0gv0Zq3hpElU',
    downloadFileKey: 'audio/sport.mp3',
    category: 'Gesundheit',
    tags: ['sport', 'fitness', 'training', 'motivation', 'gewohnheit', 'bewegung', 'audio'],
    benefits: ['Trainingsmotivation stärken', 'Ausreden überwinden', 'Sport zur Gewohnheit machen'],
    isActive: true,
  },
  {
    id: 'fitamsteuer',
    slug: 'fitamsteuer',
    title: 'Fit am Steuer',
    shortDescription:
      'Für Berufschauffeure und Busfahrer. Bleib gelassen im Verkehr, schlafe erholsam trotz Schichtdienst und achte auf deine Gesundheit.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_FITAMSTEUER || 'price_1TFIqrBg1XYE0gv0gm6HdQtl',
    downloadFileKey: 'audio/fitamsteuer.mp3',
    category: 'Beruf',
    tags: ['chauffeur', 'busfahrer', 'steuer', 'gelassenheit', 'gesundheit', 'schichtarbeit', 'audio'],
    benefits: ['Gelassenheit im Verkehr', 'Erholsamer Schlaf trotz Schicht', 'Bewusste Ernährung unterwegs'],
    isActive: true,
  },
  {
    id: 'pflegekraft',
    slug: 'pflegekraft',
    title: 'PflegeKraft',
    shortDescription:
      'Für Pflegekräfte und Schichtarbeitende. Schalte nach der Arbeit ab, schütze deine Energie und erhole dich tief – auch nach Nachtdienst.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_PFLEGEKRAFT || 'price_1TFIvjBg1XYE0gv0Oien9Wps',
    downloadFileKey: 'audio/pflegekraft.mp3',
    category: 'Beruf',
    tags: ['pflege', 'schichtarbeit', 'burnout', 'abgrenzung', 'erholung', 'gesundheitswesen', 'audio'],
    benefits: ['Emotionale Abgrenzung stärken', 'Erholsam schlafen nach Schicht', 'Burnout-Schutzschild aufbauen'],
    isActive: true,
  },
  {
    id: 'arztstark',
    slug: 'arztstark',
    title: 'ArztStark',
    shortDescription:
      'Für Ärzte und Mediziner. Verarbeite schwierige Situationen gesund, behalte den Fokus unter Druck und schütze dein Mitgefühl.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_ARZTSTARK || 'price_1TFJ28Bg1XYE0gv0qq2k0noP',
    downloadFileKey: 'audio/arztstark.mp3',
    category: 'Beruf',
    tags: ['arzt', 'medizin', 'fokus', 'stress', 'resilienz', 'krankenhaus', 'audio'],
    benefits: ['Fehler gesund verarbeiten', 'Fokus im Operationssaal', 'Abschalten nach dem Dienst'],
    isActive: true,
  },
  {
    id: 'lehrfit',
    slug: 'lehrfit',
    title: 'LehrFit',
    shortDescription:
      'Für Lehrpersonen. Bewahre deine Geduld im Klassenzimmer, führe Elterngespräche gelassen und schalte nach Schulschluss ab.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_LEHRFIT || 'price_1TFJ7BBg1XYE0gv0fnJ9OWJ4',
    downloadFileKey: 'audio/lehrfit.mp3',
    category: 'Beruf',
    tags: ['lehrer', 'schule', 'geduld', 'burnout', 'elterngespräch', 'unterricht', 'audio'],
    benefits: ['Geduld im Klassenzimmer', 'Gelassene Elterngespräche', 'Abschalten nach Schulschluss'],
    isActive: true,
  },
  {
    id: 'flugangst',
    slug: 'flugangst',
    title: 'Mit Freude fliegen',
    shortDescription:
      'Überwinde Flugangst und erlebe das Fliegen als das, was es ist: sicher, entspannt und faszinierend. Für alle, die wieder mit Leichtigkeit abheben möchten.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_FLUGANGST || 'price_1TG3jLBg1XYE0gv0QT44eRLo',
    downloadFileKey: 'audio/flugangst.mp3',
    category: 'Gesundheit',
    tags: ['flugangst', 'fliegen', 'angst', 'phobie', 'reisen', 'urlaub', 'entspannung', 'audio'],
    benefits: ['Flugangst nachhaltig auflösen', 'Turbulenzen gelassen erleben', 'Fliegen mit Vorfreude geniessen'],
    isActive: true,
  },
  {
    id: 'ceomind',
    slug: 'ceomind',
    title: 'CEO-Mind',
    shortDescription:
      'Aktiviere das CEO-Gen in dir. Entwickle unerschütterliche Selbstsicherheit, mentale Unverletzlichkeit und die Entscheidungskraft einer echten Führungspersönlichkeit.',
    price: 2990,
    currency: 'EUR',
    priceFormatted: '29.90 €',
    stripePriceId: process.env.STRIPE_PRICE_CEOMIND || 'price_1TG2wRBg1XYE0gv0XRqUykK7',
    downloadFileKey: 'audio/ceomind.mp3',
    category: 'Leistung',
    tags: ['ceo', 'führung', 'leadership', 'selbstsicherheit', 'entscheidung', 'grenzen', 'souveränität', 'mindset', 'audio'],
    benefits: ['Unerschütterliche Selbstsicherheit', 'Entscheidungen ohne Zögern treffen', 'Grenzen setzen mit Leichtigkeit'],
    isActive: true,
  },
  {
    id: 'elearning-stressmanagement',
    slug: 'elearning-stressmanagement',
    title: 'E-Learning: Stressmanagement Grundlagen',
    shortDescription:
      'Fundierter Online-Kurs mit 5 Video-Lektionen, interaktiven Quizzes und praxisnahen Strategien für einen gesunden Umgang mit Stress.',
    price: 4820,
    currency: 'EUR',
    priceFormatted: '€/CHF 48.20',
    stripePriceId: process.env.STRIPE_PRICE_ELEARNING_STRESS || 'price_1TGP57Bg1XYE0gv0hyCzTpGp',
    downloadFileKey: '',
    category: 'E-Learning',
    tags: ['e-learning', 'kurs', 'stress', 'stressmanagement', 'resilienz', 'burnout', 'firma'],
    benefits: ['5 Video-Lektionen', 'Interaktive Quizzes', 'Ideal mit Audio-Programm kombinierbar'],
    isActive: true,
  },
  {
    id: 'elearning-rauchfrei',
    slug: 'elearning-rauchfrei',
    title: 'E-Learning: Rauchfrei werden',
    shortDescription:
      'Online-Kurs mit 5 Video-Lektionen: Rauchgewohnheiten verstehen, mentale Strategien für den Rauchstopp und dauerhaft rauchfrei bleiben.',
    price: 4820,
    currency: 'EUR',
    priceFormatted: '€/CHF 48.20',
    stripePriceId: process.env.STRIPE_PRICE_ELEARNING_RAUCHFREI || 'price_1TGP6MBg1XYE0gv0l1sHMapk',
    downloadFileKey: '',
    category: 'E-Learning',
    tags: ['e-learning', 'kurs', 'rauchfrei', 'rauchen', 'nikotin', 'sucht', 'firma'],
    benefits: ['5 Video-Lektionen', 'Interaktive Quizzes', 'Ideal mit Audio-Programm kombinierbar'],
    isActive: true,
  },
  {
    id: 'elearning-abnehmen',
    slug: 'elearning-abnehmen',
    title: 'E-Learning: Gesund abnehmen',
    shortDescription:
      'Online-Kurs mit 5 Video-Lektionen: Essverhalten verstehen, Ernährung ohne Verbote und nachhaltig Gewicht reduzieren.',
    price: 4820,
    currency: 'EUR',
    priceFormatted: '€/CHF 48.20',
    stripePriceId: process.env.STRIPE_PRICE_ELEARNING_ABNEHMEN || 'price_1TGPUWBg1XYE0gv0TjHhLDmj',
    downloadFileKey: '',
    category: 'E-Learning',
    tags: ['e-learning', 'kurs', 'abnehmen', 'gewicht', 'ernährung', 'diät', 'firma'],
    benefits: ['5 Video-Lektionen', 'Interaktive Quizzes', 'Ideal mit Audio-Programm kombinierbar'],
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
    city: 'Luzern',
    region: 'Luzern',
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
    isActive: false,
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
    isActive: false,
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
    isActive: false,
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
