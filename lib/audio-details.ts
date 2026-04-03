export interface AudioDetail {
  slug: string
  title: string
  subtitle: string
  targetAudience: 'allgemein' | 'branche'
  audienceLabel?: string // z.B. "Für Pflegekräfte"
  heroDescription: string
  problem: {
    headline: string
    description: string
    stats: { value: string; label: string }[]
    consequences: string[]
  }
  solution: {
    headline: string
    description: string
    topics: string[]
    goals: string[]
  }
  studies: {
    title: string
    source: string
    finding: string
  }[]
  firmenBox?: {
    headline: string
    description: string
    benefits: string[]
  }
}

export const audioDetails: Record<string, AudioDetail> = {
  pflegekraft: {
    slug: 'pflegekraft',
    title: 'PflegeKraft',
    subtitle: 'Mentale Stärke für Pflegekräfte',
    targetAudience: 'branche',
    audienceLabel: 'Für Pflegekräfte & Schichtarbeitende',
    heroDescription:
      'Abschalten nach der Schicht, erholsam schlafen trotz Nachtdienst und emotionale Abgrenzung lernen – ohne dabei das Mitgefühl zu verlieren.',
    problem: {
      headline: 'Warum Pflegekräfte besonders gefährdet sind',
      description:
        'Pflegeberufe gehören zu den psychisch belastendsten Berufsfeldern. Die Kombination aus Schichtarbeit, emotionaler Belastung und körperlicher Anstrengung führt zu einer überdurchschnittlich hohen Burnout-Rate.',
      stats: [
        { value: '40%', label: 'der Pflegekräfte zeigen Burnout-Symptome' },
        { value: '8,2', label: 'Krankheitstage mehr als der Durchschnitt' },
        { value: '30%', label: 'leiden unter Schlafstörungen durch Schichtarbeit' },
        { value: '67%', label: 'fühlen sich emotional erschöpft' },
      ],
      consequences: [
        'Chronische Erschöpfung und sinkende Leistungsfähigkeit',
        'Emotionale Abstumpfung oder Überidentifikation mit Patienten',
        'Schlafstörungen durch wechselnde Schichten',
        'Erhöhtes Risiko für Depression und Angststörungen',
        'Hohe Fluktuation – jede dritte Pflegekraft denkt an Berufswechsel',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'PflegeKraft ist ein 47-minütiges Hypnose-Audio, das speziell für die Herausforderungen im Pflegeberuf entwickelt wurde. Es arbeitet auf der Ebene des Unterbewusstseins – dort, wo Stressmuster, Schlafprobleme und emotionale Belastungen ihren Ursprung haben.',
      topics: [
        'Abschalten nach der Schicht – bewusstes Loslassen an der Haustür',
        'Erholsam schlafen nach Nachtdienst – schneller in die Tiefschlafphase',
        'Emotionale Abgrenzung – mitfühlen ohne mitzuleiden',
        'Innere Ruhe bei Überlastung – der ruhende Pol auf der Station',
        'Burnout-Schutzschild – frühzeitig eigene Grenzen erkennen',
        'Schwierige Situationen loslassen – verarbeiten statt verdrängen',
        'Stolz auf den eigenen Beruf – Sinnfindung und Selbstwert stärken',
      ],
      goals: [
        'Nach der Arbeit innerlich abschalten können',
        'Trotz Schichtarbeit erholsam schlafen',
        'Emotionale Belastungen nicht mit nach Hause nehmen',
        'Langfristig gesund im Pflegeberuf bleiben',
      ],
    },
    studies: [
      {
        title: 'Hypnose bei Schlafstörungen durch Schichtarbeit',
        source: 'Cordi et al., 2014 – Universität Zürich',
        finding: 'Hypnose verlängert die Tiefschlafphase um bis zu 80% und verbessert die subjektive Schlafqualität signifikant.',
      },
      {
        title: 'Burnout-Prävention in der Pflege',
        source: 'Moss & Williston, 2019 – Journal of Clinical Psychology',
        finding: 'Hypnotherapeutische Interventionen reduzieren emotionale Erschöpfung und Depersonalisierung bei Pflegekräften nachweislich.',
      },
      {
        title: 'Stressreduktion durch Hypnose',
        source: 'Hammond, 2010 – American Journal of Clinical Hypnosis',
        finding: 'Regelmässige Selbsthypnose senkt den Cortisolspiegel und verbessert die emotionale Regulation.',
      },
    ],
    firmenBox: {
      headline: 'PflegeKraft für Ihr Team',
      description:
        'Bieten Sie Ihren Pflegekräften ein evidenzbasiertes Tool zur Burnout-Prävention. Ideal für Spitäler, Pflegeheime und ambulante Dienste.',
      benefits: [
        'Reduzierte Krankheitstage durch besseren Schlaf und Stressabbau',
        'Höhere Mitarbeiterzufriedenheit und geringere Fluktuation',
        'Einfache Integration in bestehende BGM-Programme',
        'Keine Terminkoordination nötig – jederzeit individuell nutzbar',
      ],
    },
  },

  lampenfieber: {
    slug: 'lampenfieber',
    title: 'Lampenfieber besiegen',
    subtitle: 'Souverän auftreten, frei sprechen',
    targetAudience: 'allgemein',
    heroDescription:
      'Verwandle Nervosität in positive Energie. Tritt souverän auf, sprich frei und überzeugend – ob auf der Bühne, im Meeting oder beim Vorstellungsgespräch.',
    problem: {
      headline: 'Lampenfieber – mehr als nur Nervosität',
      description:
        'Lampenfieber betrifft nicht nur Künstler. Präsentationen, Vorstellungsgespräche, Reden vor Gruppen – Millionen Menschen vermeiden solche Situationen oder leiden still darunter. Die Angst vor Bewertung sitzt tief im Unterbewusstsein.',
      stats: [
        { value: '75%', label: 'aller Menschen haben Angst vor öffentlichem Sprechen' },
        { value: '#1', label: 'häufigste soziale Angst weltweit' },
        { value: '10%', label: 'leiden unter klinisch relevantem Lampenfieber' },
        { value: '33%', label: 'vermeiden Karriereschritte wegen Redeangst' },
      ],
      consequences: [
        'Vermeidung von Präsentationen und öffentlichen Auftritten',
        'Verpasste Karrierechancen durch Zurückhaltung',
        'Körperliche Symptome: Herzrasen, Zittern, Blackout',
        'Sinkendes Selbstvertrauen durch wiederholtes Versagen',
        'Sozialer Rückzug und chronischer Stress',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'Lampenfieber besiegen ist ein Hypnose-Audio, das die unbewussten Angstmuster rund um Auftritte und Präsentationen auflöst. Statt die Symptome zu bekämpfen, arbeitet es an der Wurzel – deinem Unterbewusstsein.',
      topics: [
        'Angst vor Bewertung auflösen – frei werden von der Meinung anderer',
        'Nervosität in positive Energie umwandeln – Lampenfieber als Antrieb nutzen',
        'Körperliche Symptome reduzieren – Herzrasen, Zittern, Blackout',
        'Innere Sicherheit aufbauen – unerschütterliches Selbstvertrauen vor Publikum',
        'Stimme und Präsenz stärken – klar, ruhig und überzeugend sprechen',
        'Freude am Auftreten entwickeln – von der Pflicht zur Leidenschaft',
      ],
      goals: [
        'Souverän und gelassen vor Publikum stehen',
        'Präsentationen und Reden mit Freude halten',
        'Körperliche Angstsymptome deutlich reduzieren',
        'Authentisch und überzeugend kommunizieren',
      ],
    },
    studies: [
      {
        title: 'Hypnose bei Auftrittsangst',
        source: 'Stanton, 1994 – Australian Journal of Clinical Hypnotherapy',
        finding: 'Hypnotherapie reduziert Auftrittsangst signifikant und die Verbesserungen bleiben über Monate stabil.',
      },
      {
        title: 'Kognitive Hypnotherapie bei sozialer Angst',
        source: 'Alladin, 2016 – American Journal of Clinical Hypnosis',
        finding: 'Die Kombination aus Hypnose und kognitiver Umstrukturierung zeigt bei sozialen Ängsten eine höhere Wirksamkeit als klassische Verhaltenstherapie allein.',
      },
      {
        title: 'Selbsthypnose zur Leistungssteigerung',
        source: 'Barker et al., 2013 – Journal of Applied Sport Psychology',
        finding: 'Selbsthypnose verbessert die Leistung unter Druck und reduziert kognitive Angst bei Wettkampf- und Auftrittssituationen.',
      },
    ],
    firmenBox: {
      headline: 'Auch als Firmenangebot',
      description:
        'Souveräne Mitarbeitende präsentieren besser, verkaufen überzeugender und repräsentieren Ihr Unternehmen professionell.',
      benefits: [
        'Bessere Präsentationen und Kundengespräche',
        'Höheres Selbstvertrauen im Team',
        'Ergänzung zu Kommunikations- und Führungstrainings',
        'Jederzeit individuell nutzbar – kein Seminaraufwand',
      ],
    },
  },

  prokrastination: {
    slug: 'prokrastination',
    title: 'Prokrastination überwinden',
    subtitle: 'Einfach anfangen, statt aufschieben',
    targetAudience: 'allgemein',
    heroDescription:
      'Schluss mit dem ewigen Aufschieben. Entwickle eine natürliche Entschlossenheit, die dich Aufgaben sofort anpacken lässt – ohne inneren Kampf und ohne schlechtes Gewissen.',
    problem: {
      headline: 'Prokrastination – die stille Produktivitätskrise',
      description:
        'Prokrastination ist kein Faulheitsproblem. Es ist ein emotionales Regulationsproblem. Das Gehirn vermeidet unangenehme Gefühle, die mit einer Aufgabe verbunden sind – und greift stattdessen zu kurzfristiger Ablenkung.',
      stats: [
        { value: '20%', label: 'der Erwachsenen sind chronische Prokrastinierer' },
        { value: '80%', label: 'der Studierenden prokrastinieren regelmässig' },
        { value: '2,5h', label: 'gehen täglich durch Aufschieben verloren' },
        { value: '57%', label: 'berichten über Stress und Schuldgefühle dadurch' },
      ],
      consequences: [
        'Chronischer Stress durch angehäufte Aufgaben',
        'Schlechtes Gewissen und sinkender Selbstwert',
        'Verpasste Deadlines und berufliche Konsequenzen',
        'Schlafprobleme durch abendliches Grübeln über Liegen-Gebliebenes',
        'Teufelskreis: Aufschieben → Stress → weniger Energie → mehr Aufschieben',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'Prokrastination überwinden ist ein 47-minütiges Hypnose-Audio, das die unbewussten Vermeidungsmuster auflöst. Es programmiert dein Unterbewusstsein auf sofortiges Handeln – nicht durch Disziplin, sondern durch eine veränderte innere Haltung.',
      topics: [
        'Inneren Widerstand auflösen – einfach anfangen ohne Kampf',
        'Perfektionismus loslassen – getan ist besser als perfekt',
        'Grosse Aufgaben in kleine Schritte zerlegen – jeder Schritt zählt',
        'Ablenkungen widerstehen – Fokus statt Flucht',
        'Freude am Erledigen entwickeln – das Dopamin-System umprogrammieren',
        'Prioritäten setzen – das Wichtige zuerst, ohne Ausreden',
        'Zufriedenheit am Feierabend – alles geschafft, kein schlechtes Gewissen',
      ],
      goals: [
        'Aufgaben sofort anpacken, wenn sie dran sind',
        'Den inneren Schweinehund überwinden – dauerhaft',
        'Produktiver und zufriedener durch den Tag gehen',
        'Abends loslassen können, weil alles erledigt ist',
      ],
    },
    studies: [
      {
        title: 'Prokrastination und emotionale Regulation',
        source: 'Sirois & Pychyl, 2013 – Social and Personality Psychology Compass',
        finding: 'Prokrastination ist primär ein Problem der Emotionsregulation, nicht des Zeitmanagements. Interventionen auf unbewusster Ebene sind deshalb besonders wirksam.',
      },
      {
        title: 'Hypnose zur Verhaltensänderung',
        source: 'Kirsch et al., 1995 – Journal of Consulting and Clinical Psychology',
        finding: 'Hypnose verdoppelt die Wirksamkeit von Verhaltensänderungs-Interventionen im Vergleich zu Methoden ohne Hypnose.',
      },
      {
        title: 'Selbsthypnose und Selbstkontrolle',
        source: 'Lynn & Kirsch, 2006 – Essentials of Clinical Hypnosis',
        finding: 'Regelmässige Selbsthypnose stärkt die Selbstregulation und reduziert impulsives Vermeidungsverhalten signifikant.',
      },
    ],
    firmenBox: {
      headline: 'Auch als Firmenangebot',
      description:
        'Prokrastination kostet Unternehmen Milliarden an verlorener Produktivität. Bieten Sie Ihrem Team ein wirksames Tool gegen das Aufschieben.',
      benefits: [
        'Höhere Produktivität ohne zusätzlichen Druck',
        'Weniger verpasste Deadlines und Nacharbeit',
        'Bessere Eigenverantwortung im Team',
        'Ideal als Ergänzung zu Zeitmanagement-Schulungen',
      ],
    },
  },

  abnehmen: {
    slug: 'abnehmen',
    title: 'Abnehmen',
    subtitle: 'Dein Wunschgewicht beginnt im Kopf',
    targetAudience: 'allgemein',
    heroDescription:
      'Verändere deine Beziehung zum Essen auf der tiefsten Ebene. Kein Kalorienzählen, keine Verbote – sondern ein Unterbewusstsein, das natürlich gesunde Entscheidungen trifft.',
    problem: {
      headline: 'Warum Diäten allein nicht funktionieren',
      description:
        'Übergewicht ist selten ein Wissensproblem. Die meisten Menschen wissen, was gesund ist – und tun es trotzdem nicht. Der Grund liegt im Unterbewusstsein: emotionales Essen, Gewohnheiten und innere Überzeugungen sabotieren jeden Diätplan.',
      stats: [
        { value: '95%', label: 'aller Diäten scheitern langfristig' },
        { value: '53%', label: 'der Erwachsenen in der Schweiz sind übergewichtig' },
        { value: '67%', label: 'essen aus emotionalen Gründen, nicht aus Hunger' },
        { value: '2/3', label: 'nehmen nach einer Diät mehr zu als vorher' },
      ],
      consequences: [
        'Jo-Jo-Effekt: immer wieder zunehmen nach jeder Diät',
        'Emotionales Essen als Reaktion auf Stress, Langeweile oder Frust',
        'Sinkendes Selbstwertgefühl durch wiederholt gescheiterte Versuche',
        'Gesundheitliche Risiken: Herz-Kreislauf, Diabetes, Gelenkprobleme',
        'Sozialer Rückzug und Schamgefühle',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'Abnehmen ist ein 54-minütiges Hypnose-Audio, das deine unbewussten Essmuster verändert. Es arbeitet dort, wo Willenskraft nicht hinkommt – an den tief verankerten Gewohnheiten und emotionalen Verknüpfungen rund ums Essen.',
      topics: [
        'Emotionales Essen auflösen – Stress und Frust anders verarbeiten',
        'Natürliches Sättigungsgefühl wiederherstellen – aufhören wenn satt',
        'Heisshunger reduzieren – die Anziehungskraft ungesunder Lebensmittel verringern',
        'Bewusstes Geniessen – langsamer essen, mehr schmecken',
        'Motivation für Bewegung stärken – den Körper mit Freude bewegen',
        'Neues Selbstbild verankern – sich als schlanker, gesunder Mensch sehen',
      ],
      goals: [
        'Natürlich und dauerhaft das Wunschgewicht erreichen',
        'Eine gesunde Beziehung zum Essen entwickeln',
        'Emotionales Essen durch gesunde Strategien ersetzen',
        'Sich wohl im eigenen Körper fühlen',
      ],
    },
    studies: [
      {
        title: 'Hypnose zur Gewichtsreduktion',
        source: 'Kirsch, 1996 – Journal of Consulting and Clinical Psychology',
        finding: 'Hypnose erhöht die Wirksamkeit von Gewichtsreduktionsprogrammen um durchschnittlich 97% im Vergleich zu Programmen ohne Hypnose.',
      },
      {
        title: 'Langzeitwirkung von Hypnotherapie bei Übergewicht',
        source: 'Cochrane et al., 1999 – Journal of Consulting and Clinical Psychology',
        finding: 'Patienten mit Hypnotherapie verloren signifikant mehr Gewicht und hielten das Gewicht über den Follow-up-Zeitraum besser als die Kontrollgruppe.',
      },
      {
        title: 'Hypnose und emotionales Essen',
        source: 'Entwistle et al., 2014 – Complementary Therapies in Medicine',
        finding: 'Selbsthypnose reduziert emotionales Essverhalten und verbessert die Selbstregulation bei Nahrungsaufnahme signifikant.',
      },
    ],
    firmenBox: {
      headline: 'Auch als Firmenangebot',
      description:
        'Gesunde Mitarbeitende sind leistungsfähiger und fehlen seltener. Bieten Sie Ihrem Team ein niederschwelliges Tool für gesündere Ernährungsgewohnheiten.',
      benefits: [
        'Weniger Krankheitstage durch gewichtsbedingte Beschwerden',
        'Höhere Energie und Leistungsfähigkeit im Alltag',
        'Ergänzung zu betrieblicher Gesundheitsförderung',
        'Individuell nutzbar – kein Gruppenformat nötig',
      ],
    },
  },

  rauchfrei: {
    slug: 'rauchfrei',
    title: 'Rauchfrei',
    subtitle: 'Endlich frei vom Rauchen',
    targetAudience: 'allgemein',
    heroDescription:
      'Werde rauchfrei – nicht durch Willenskraft, sondern durch eine tiefe Veränderung im Unterbewusstsein. Löse die emotionale Bindung an die Zigarette und atme auf.',
    problem: {
      headline: 'Warum Aufhören so schwer fällt',
      description:
        'Rauchen ist mehr als eine körperliche Sucht. Die emotionale und psychische Abhängigkeit ist der wahre Grund, warum so viele Raucher scheitern. Das Unterbewusstsein verknüpft die Zigarette mit Entspannung, Belohnung und Zugehörigkeit.',
      stats: [
        { value: '70%', label: 'aller Rauchenden wollen aufhören' },
        { value: '95%', label: 'scheitern ohne professionelle Hilfe' },
        { value: '15 J.', label: 'kürzere Lebenserwartung bei lebenslangem Rauchen' },
        { value: '3x', label: 'höhere Erfolgsquote mit Hypnose' },
      ],
      consequences: [
        'Chronische Atemwegserkrankungen und Krebs',
        'Finanzielle Belastung: über 3.000 € pro Jahr bei einer Schachtel täglich',
        'Sinkendes Selbstwertgefühl durch gescheiterte Aufhörversuche',
        'Soziale Isolation durch zunehmendes Rauchverbot',
        'Schlechtes Vorbild für Kinder und Familie',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'Rauchfrei ist ein 45-minütiges Hypnose-Audio, das die unbewussten Verknüpfungen zwischen Zigarette und positiven Gefühlen auflöst. Es erzeugt eine tiefe innere Überzeugung: Du bist Nichtraucher – nicht weil du musst, sondern weil du willst.',
      topics: [
        'Emotionale Bindung an die Zigarette lösen – Rauchen wird gleichgültig',
        'Stressverarbeitung ohne Zigarette – neue innere Strategien',
        'Identitätswechsel – vom Raucher zum Nichtraucher auf Identitätsebene',
        'Entzugserscheinungen lindern – innere Ruhe statt Nervosität',
        'Rückfallschutz aufbauen – auch in Versuchungssituationen standhaft bleiben',
        'Stolz und Freiheit verankern – das gute Gefühl der Rauchfreiheit',
      ],
      goals: [
        'Dauerhaft rauchfrei leben – ohne Rückfall',
        'Keine Sehnsucht nach der Zigarette mehr spüren',
        'Stress ohne Rauchen bewältigen können',
        'Sich als freier, gesunder Mensch fühlen',
      ],
    },
    studies: [
      {
        title: 'Hypnose zur Raucherentwöhnung',
        source: 'Hasan et al., 2014 – Journal of the American Medical Association',
        finding: 'Hypnotherapie zeigt eine dreimal höhere Erfolgsquote bei der Raucherentwöhnung im Vergleich zu Nikotinersatztherapie allein.',
      },
      {
        title: 'Meta-Analyse Hypnose vs. andere Methoden',
        source: 'Viswesvaran & Schmidt, 1992 – Journal of Applied Psychology',
        finding: 'Hypnose ist die wirksamste Einzelmethode zur Raucherentwöhnung mit einer Erfolgsquote von über 30% nach 12 Monaten.',
      },
      {
        title: 'Selbsthypnose als Rückfallprävention',
        source: 'Lynn et al., 2010 – International Journal of Clinical Hypnosis',
        finding: 'Regelmässige Selbsthypnose stärkt die Selbstkontrolle und reduziert das Rückfallrisiko bei ehemaligen Rauchern signifikant.',
      },
    ],
    firmenBox: {
      headline: 'Auch als Firmenangebot',
      description:
        'Rauchende Mitarbeitende kosten Unternehmen durchschnittlich 6 zusätzliche Krankheitstage pro Jahr. Unterstützen Sie Ihr Team beim Aufhören.',
      benefits: [
        'Weniger rauchbedingte Krankheitstage',
        'Gesteigerte Produktivität ohne Rauchpausen',
        'Positives Signal der Gesundheitsförderung',
        'Diskret und individuell einsetzbar',
      ],
    },
  },

  selbstvertrauen: {
    slug: 'selbstvertrauen',
    title: 'Selbstvertrauen stärken',
    subtitle: 'Glaub an dich – und andere tun es auch',
    targetAudience: 'allgemein',
    heroDescription:
      'Stärke dein Selbstvertrauen von innen heraus. Löse alte Zweifel und Blockaden und entwickle eine natürliche innere Sicherheit, die in jeder Situation trägt.',
    problem: {
      headline: 'Wenn Selbstzweifel den Alltag bestimmen',
      description:
        'Mangelndes Selbstvertrauen ist selten rational. Es sitzt tief im Unterbewusstsein – geprägt durch Kindheitserfahrungen, Misserfolge und negative Glaubenssätze. Bewusstes Positiv-Denken reicht nicht, um diese Muster zu verändern.',
      stats: [
        { value: '85%', label: 'der Erwachsenen leiden unter niedrigem Selbstwert' },
        { value: '70%', label: 'fühlen sich als Hochstapler (Impostor-Syndrom)' },
        { value: '40%', label: 'vermeiden Herausforderungen aus Angst zu versagen' },
        { value: '#1', label: 'häufigster Grund für ungenutzte Potenziale' },
      ],
      consequences: [
        'Vermeidung von Chancen aus Angst vor Misserfolg',
        'Sich ständig mit anderen vergleichen und schlechter fühlen',
        'Schwierigkeiten Nein zu sagen und Grenzen zu setzen',
        'Berufliche Stagnation trotz vorhandenem Talent',
        'Beziehungsprobleme durch Unsicherheit und Eifersucht',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'Selbstvertrauen stärken ist ein 49-minütiges Hypnose-Audio, das negative Glaubenssätze auf der Ebene des Unterbewusstseins auflöst und durch ein stabiles, gesundes Selbstbild ersetzt.',
      topics: [
        'Negative Glaubenssätze auflösen – "Ich bin nicht gut genug" loslassen',
        'Innere Sicherheit aufbauen – unabhängig von der Meinung anderer',
        'Gesunde Grenzen setzen – klar und respektvoll Nein sagen',
        'Mut entwickeln – Herausforderungen als Chancen sehen',
        'Selbstakzeptanz vertiefen – sich so annehmen wie man ist',
        'Authentisch auftreten – die eigene Meinung ruhig und klar vertreten',
      ],
      goals: [
        'Ein stabiles Selbstvertrauen entwickeln, das von innen kommt',
        'Sich in sozialen Situationen sicher und wohl fühlen',
        'Entscheidungen treffen ohne ständig zu zweifeln',
        'Das eigene Potenzial erkennen und ausschöpfen',
      ],
    },
    studies: [
      {
        title: 'Hypnose und Selbstwirksamkeit',
        source: 'Schoenberger, 2000 – International Journal of Clinical Hypnosis',
        finding: 'Hypnotherapie steigert die Selbstwirksamkeitserwartung nachhaltig und verbessert die Bewältigungsstrategien in stressigen Situationen.',
      },
      {
        title: 'Kognitive Hypnotherapie bei negativen Glaubenssätzen',
        source: 'Alladin & Alibhai, 2007 – Journal of Cognitive Psychotherapy',
        finding: 'Kognitive Hypnotherapie ist bei der Veränderung negativer Kernüberzeugungen wirksamer als kognitive Verhaltenstherapie allein.',
      },
      {
        title: 'Selbsthypnose zur Stärkung des Selbstbilds',
        source: 'McNeal & Frederick, 1993 – American Journal of Clinical Hypnosis',
        finding: 'Regelmässige Selbsthypnose verändert das unbewusste Selbstbild positiv und stärkt das Grundvertrauen in die eigenen Fähigkeiten.',
      },
    ],
    firmenBox: {
      headline: 'Auch als Firmenangebot',
      description:
        'Selbstbewusste Mitarbeitende übernehmen mehr Verantwortung, kommunizieren klarer und bringen sich aktiver ein.',
      benefits: [
        'Mehr Eigeninitiative und Entscheidungsfreude',
        'Bessere Kommunikation im Team',
        'Stärkere Präsenz in Kundengesprächen',
        'Ergänzung zu Führungs- und Persönlichkeitsentwicklung',
      ],
    },
  },

  resilienz: {
    slug: 'resilienz',
    title: 'Resilienz aufbauen',
    subtitle: 'Innerlich stark, egal was kommt',
    targetAudience: 'allgemein',
    heroDescription:
      'Werde innerlich unerschütterlich. Entwickle eine tiefe Widerstandskraft, die dich Rückschläge meistern und an Herausforderungen wachsen lässt.',
    problem: {
      headline: 'Warum manche Menschen an Krisen zerbrechen',
      description:
        'Resilienz ist keine angeborene Eigenschaft – sie kann entwickelt werden. Doch viele Menschen haben nie gelernt, mit Rückschlägen gesund umzugehen. Statt sich zu erholen, bleiben sie in Stress, Grübeln und Hilflosigkeit gefangen.',
      stats: [
        { value: '60%', label: 'erleben mindestens ein traumatisches Ereignis im Leben' },
        { value: '25%', label: 'entwickeln daraus langfristige psychische Probleme' },
        { value: '3x', label: 'höheres Burnout-Risiko bei geringer Resilienz' },
        { value: '46%', label: 'fühlen sich von alltäglichen Belastungen überfordert' },
      ],
      consequences: [
        'Langanhaltender Stress nach Rückschlägen',
        'Grübeln und Gedankenkarusselle, die nicht aufhören',
        'Gefühl der Hilflosigkeit und Überforderung',
        'Burnout durch mangelnde Erholungsfähigkeit',
        'Vermeidung von Risiken und neuen Herausforderungen',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'Resilienz aufbauen ist ein 47-minütiges Hypnose-Audio, das deine innere Widerstandskraft auf der Ebene des Unterbewusstseins stärkt. Es verändert, wie du mit Schwierigkeiten umgehst – nicht durch Verdrängen, sondern durch tiefes Vertrauen in die eigene Stärke.',
      topics: [
        'Innere Widerstandskraft stärken – der Fels in der Brandung werden',
        'Rückschläge verarbeiten – hinfallen und wieder aufstehen',
        'Grübeln stoppen – Gedanken loslassen statt festhalten',
        'Vertrauen in die eigene Stärke – du hast schon vieles gemeistert',
        'Gelassenheit in schwierigen Zeiten – ruhig bleiben wenn es stürmt',
        'Wachstum durch Herausforderungen – stärker werden statt zerbrechen',
      ],
      goals: [
        'Nach Rückschlägen schneller zu sich zurückfinden',
        'Herausforderungen als Wachstumschancen sehen',
        'Eine tiefe innere Gelassenheit entwickeln',
        'Langfristig mental stabil und belastbar sein',
      ],
    },
    studies: [
      {
        title: 'Hypnose und Stressresilienz',
        source: 'Fisch et al., 2017 – International Journal of Clinical Hypnosis',
        finding: 'Hypnotherapeutische Interventionen stärken die psychische Widerstandsfähigkeit und verbessern die Stressbewältigung langfristig.',
      },
      {
        title: 'Selbsthypnose als Resilienzfaktor',
        source: 'Hammond, 2010 – American Journal of Clinical Hypnosis',
        finding: 'Regelmässige Selbsthypnose senkt den Cortisolspiegel, verbessert die emotionale Regulation und stärkt die Resilienz.',
      },
      {
        title: 'Hypnose bei posttraumatischer Belastung',
        source: 'Bryant et al., 2005 – Journal of Consulting and Clinical Psychology',
        finding: 'Hypnotherapie zeigt bei der Verarbeitung belastender Erlebnisse eine signifikant höhere Wirksamkeit als supportive Gesprächstherapie.',
      },
    ],
    firmenBox: {
      headline: 'Auch als Firmenangebot',
      description:
        'Resiliente Teams bewältigen Veränderungen besser und bleiben auch in Krisenzeiten leistungsfähig.',
      benefits: [
        'Weniger Ausfälle durch stressbedingte Erkrankungen',
        'Schnellere Erholung nach schwierigen Projekten',
        'Besserer Umgang mit Veränderungsprozessen',
        'Ideal als Teil von Burnout-Präventionsprogrammen',
      ],
    },
  },

  verkaufsmindset: {
    slug: 'verkaufsmindset',
    title: 'Verkaufsmindset aktivieren',
    subtitle: 'Verkaufen mit Freude und Überzeugung',
    targetAudience: 'allgemein',
    heroDescription:
      'Löse innere Blockaden rund ums Verkaufen und kommuniziere deinen Wert klar und selbstbewusst. Verkaufe nicht aus Druck – sondern aus Überzeugung.',
    problem: {
      headline: 'Warum so viele sich beim Verkaufen unwohl fühlen',
      description:
        'Verkaufen hat in vielen Köpfen einen negativen Ruf. Die Folge: Selbstständige und Vertriebsmitarbeitende sabotieren unbewusst ihren eigenen Erfolg – durch zu tiefe Preise, vermiedene Abschlüsse oder mangelnde Überzeugungskraft.',
      stats: [
        { value: '60%', label: 'der Selbstständigen fühlen sich beim Verkaufen unwohl' },
        { value: '44%', label: 'der Verkäufer geben nach dem ersten Nein auf' },
        { value: '80%', label: 'der Abschlüsse brauchen fünf oder mehr Kontakte' },
        { value: '#1', label: 'Umsatzbremse: mangelndes Selbstvertrauen im Verkauf' },
      ],
      consequences: [
        'Zu tiefe Preise aus Angst vor Ablehnung',
        'Vermeidung von Abschlussgesprächen und Nachfassen',
        'Umsatzeinbussen trotz gutem Produkt oder Angebot',
        'Frustration und Selbstzweifel im Verkaufsalltag',
        'Burnout durch den ständigen inneren Kampf gegen Verkaufshemmungen',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'Verkaufsmindset aktivieren ist ein 47-minütiges Hypnose-Audio, das die unbewussten Blockaden rund ums Verkaufen auflöst und durch eine natürliche Verkaufsfreude ersetzt.',
      topics: [
        'Verkaufshemmungen lösen – Schluss mit dem schlechten Gewissen beim Preisnennen',
        'Wert selbstbewusst kommunizieren – klar und ohne Rechtfertigung',
        'Einwände als Interesse sehen – gelassen und neugierig reagieren',
        'Natürliche Überzeugungskraft – authentisch statt manipulativ',
        'Abschlüsse mit Leichtigkeit – den richtigen Moment erkennen',
        'Freude am Verkaufen – von der Pflicht zur Leidenschaft',
      ],
      goals: [
        'Mit Freude und Überzeugung verkaufen',
        'Den Preis selbstbewusst und ohne Unsicherheit nennen',
        'Mehr Abschlüsse durch natürliche Überzeugungskraft',
        'Verkaufen als Hilfe für den Kunden verstehen',
      ],
    },
    studies: [
      {
        title: 'Hypnose und Verkaufsleistung',
        source: 'Barker et al., 2013 – Journal of Applied Sport Psychology',
        finding: 'Selbsthypnose verbessert die Leistung unter Druck und stärkt die Selbstwirksamkeit – beides Schlüsselfaktoren im Verkauf.',
      },
      {
        title: 'Mentale Programmierung im Vertrieb',
        source: 'Kirsch et al., 1995 – Journal of Consulting and Clinical Psychology',
        finding: 'Hypnose verdoppelt die Wirksamkeit von Verhaltensänderungen. Verkäufer, die ihre innere Haltung verändern, erzielen nachweislich bessere Ergebnisse.',
      },
      {
        title: 'Selbstvertrauen und Verkaufserfolg',
        source: 'Bandura, 1997 – Self-Efficacy: The Exercise of Control',
        finding: 'Hohe Selbstwirksamkeitserwartung ist der stärkste Prädiktor für Verkaufserfolg – stärker als Produktwissen oder Verkaufstechnik.',
      },
    ],
    firmenBox: {
      headline: 'Für Ihr Vertriebsteam',
      description:
        'Die innere Haltung entscheidet über den Verkaufserfolg. Geben Sie Ihrem Team ein Tool, das an der Wurzel ansetzt.',
      benefits: [
        'Höhere Abschlussquoten durch selbstbewussteres Auftreten',
        'Weniger Preisverhandlungen nach unten',
        'Motivierte Verkäufer, die gerne verkaufen',
        'Ergänzung zu klassischen Verkaufsschulungen',
      ],
    },
  },

  fuehrungsstaerke: {
    slug: 'fuehrungsstaerke',
    title: 'Führungsstärke entfalten',
    subtitle: 'Führen mit Klarheit und Gelassenheit',
    targetAudience: 'allgemein',
    heroDescription:
      'Führe mit innerer Klarheit und Gelassenheit. Entwickle eine natürliche Autorität, die aus Authentizität und Ruhe entsteht – nicht aus Druck und Kontrolle.',
    problem: {
      headline: 'Warum Führung so viele an ihre Grenzen bringt',
      description:
        'Führungskräfte stehen unter enormem Druck: Entscheidungen treffen, Teams motivieren, Konflikte lösen – und dabei selbst funktionieren. Die wenigsten wurden mental auf diese Rolle vorbereitet.',
      stats: [
        { value: '76%', label: 'der Führungskräfte fühlen sich oft überlastet' },
        { value: '50%', label: 'zweifeln regelmässig an ihren Entscheidungen' },
        { value: '35%', label: 'der neuen Führungskräfte scheitern in den ersten 18 Monaten' },
        { value: '2x', label: 'höheres Burnout-Risiko als Mitarbeitende ohne Führung' },
      ],
      consequences: [
        'Entscheidungsblockaden durch Angst vor Fehlern',
        'Mikromanagement statt Vertrauen ins Team',
        'Konfliktvermeidung oder übermässige Kontrolle',
        'Chronischer Stress und drohender Burnout',
        'Hohe Fluktuation im Team durch schlechte Führung',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'Führungsstärke entfalten ist ein Hypnose-Audio, das deine natürliche Autorität und Entscheidungskraft auf der Ebene des Unterbewusstseins stärkt. Es erzeugt eine innere Ruhe, die dich auch in turbulenten Zeiten klar denken und souverän handeln lässt.',
      topics: [
        'Klare Entscheidungen treffen – auch unter Unsicherheit',
        'Natürliche Autorität entwickeln – ohne Druck und Kontrolle',
        'Gelassenheit unter Druck – ruhig bleiben wenn es hektisch wird',
        'Delegieren lernen – Vertrauen ins Team aufbauen',
        'Konflikte souverän lösen – klar und respektvoll',
        'Innere Stärke als Vorbild – deine Ruhe überträgt sich aufs Team',
      ],
      goals: [
        'Souverän und authentisch führen',
        'Entscheidungen schnell und klar treffen',
        'Auch in Krisensituationen ruhig und besonnen bleiben',
        'Ein Team aufbauen, das gerne für dich arbeitet',
      ],
    },
    studies: [
      {
        title: 'Emotionale Intelligenz und Führungserfolg',
        source: 'Goleman, 1998 – Harvard Business Review',
        finding: 'Emotionale Intelligenz – Selbstregulation, Empathie, Gelassenheit – ist der stärkste Prädiktor für Führungserfolg, stärker als IQ oder Fachwissen.',
      },
      {
        title: 'Hypnose zur Stressreduktion bei Führungskräften',
        source: 'Olendzki et al., 2020 – Mindfulness',
        finding: 'Achtsamkeits- und Hypnoseinterventionen reduzieren Stress und verbessern die Entscheidungsqualität bei Führungskräften signifikant.',
      },
      {
        title: 'Selbsthypnose und Leistung unter Druck',
        source: 'Barker et al., 2013 – Journal of Applied Sport Psychology',
        finding: 'Selbsthypnose verbessert die Leistung in Hochdrucksituationen und stärkt das Vertrauen in die eigenen Fähigkeiten.',
      },
    ],
    firmenBox: {
      headline: 'Für Ihre Führungskräfte',
      description:
        'Gelassene Führungskräfte treffen bessere Entscheidungen und schaffen ein Arbeitsklima, in dem Teams aufblühen.',
      benefits: [
        'Bessere Entscheidungsqualität unter Druck',
        'Geringere Fluktuation im Team',
        'Gesündere Führungskultur im Unternehmen',
        'Ideal als Ergänzung zu Führungskräfteentwicklung',
      ],
    },
  },

  'tief-schlafen': {
    slug: 'tief-schlafen',
    title: 'Tief schlafen',
    subtitle: 'Endlich wieder durchschlafen',
    targetAudience: 'allgemein',
    heroDescription:
      'Finde zurück zu tiefem, erholsamem Schlaf. Löse die Gedankenspiralen, die dich wachhalten, und trainiere dein Unterbewusstsein auf natürliches Einschlafen.',
    problem: {
      headline: 'Schlafprobleme – die unterschätzte Volkskrankheit',
      description:
        'Jeder dritte Erwachsene schläft schlecht. Die Ursache liegt selten im Körper – sondern im Kopf. Grübeln, Sorgen und innere Unruhe halten das Gehirn wach, obwohl der Körper müde ist.',
      stats: [
        { value: '33%', label: 'der Erwachsenen leiden unter Schlafstörungen' },
        { value: '80%', label: 'der Schlafprobleme sind stressbedingt' },
        { value: '7h', label: 'schlafen die meisten – empfohlen sind 7-9h' },
        { value: '200 Mrd.', label: 'Euro wirtschaftlicher Schaden durch Schlafmangel in Europa' },
      ],
      consequences: [
        'Chronische Müdigkeit und Konzentrationsprobleme',
        'Geschwächtes Immunsystem und häufigere Krankheiten',
        'Reizbarkeit und emotionale Instabilität',
        'Erhöhtes Risiko für Herz-Kreislauf-Erkrankungen',
        'Verminderte Leistungsfähigkeit im Beruf',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'Tief schlafen ist ein Hypnose-Audio, das dein Unterbewusstsein auf natürliches, tiefes Einschlafen trainiert. Es löst die Gedankenspiralen und innere Unruhe, die dich wachhalten.',
      topics: [
        'Gedankenkarussell stoppen – den Kopf ausschalten können',
        'Natürliches Einschlafen – innerhalb weniger Minuten in die Tiefe gleiten',
        'Durchschlafen – nicht mehr um 3 Uhr aufwachen und grübeln',
        'Tiefschlafphasen verlängern – die erholsamsten Schlafphasen stärken',
        'Aufwachen mit Energie – erholt und frisch in den Tag starten',
        'Innere Ruhe vor dem Einschlafen – Sorgen und Stress loslassen',
      ],
      goals: [
        'Innerhalb weniger Minuten einschlafen',
        'Die Nacht durchschlafen ohne Unterbrechungen',
        'Morgens erholt und energiegeladen aufwachen',
        'Einen gesunden Schlafrhythmus entwickeln',
      ],
    },
    studies: [
      {
        title: 'Hypnose verlängert den Tiefschlaf',
        source: 'Cordi et al., 2014 – Universität Zürich (Sleep)',
        finding: 'Eine einzelne Hypnose-Session vor dem Einschlafen verlängert die Tiefschlafphase um bis zu 80% und reduziert die Wachzeit signifikant.',
      },
      {
        title: 'Hypnose bei chronischer Insomnie',
        source: 'Lam et al., 2015 – Journal of Clinical Sleep Medicine',
        finding: 'Hypnotherapie verbessert die Schlafqualität bei chronischen Schlafstörungen vergleichbar mit medikamentöser Behandlung – ohne Nebenwirkungen.',
      },
      {
        title: 'Selbsthypnose als Einschlafhilfe',
        source: 'Graci & Hardie, 2007 – Sleep Medicine',
        finding: 'Patienten mit Selbsthypnose-Training berichten über schnelleres Einschlafen, weniger nächtliches Erwachen und bessere subjektive Schlafqualität.',
      },
    ],
    firmenBox: {
      headline: 'Auch als Firmenangebot',
      description:
        'Ausgeschlafene Mitarbeitende sind produktiver, kreativer und seltener krank. Schlaf ist der wichtigste Hebel für betriebliche Gesundheit.',
      benefits: [
        'Weniger Fehler und Unfälle durch ausgeruhte Mitarbeitende',
        'Höhere kognitive Leistung und Kreativität',
        'Reduzierte Krankheitstage',
        'Besonders relevant für Schichtarbeitende',
      ],
    },
  },

  pruefungsangst: {
    slug: 'pruefungsangst',
    title: 'Prüfungsangst lösen',
    subtitle: 'Gelassen in jede Prüfung',
    targetAudience: 'allgemein',
    heroDescription:
      'Verwandle Prüfungsangst in ruhige Konzentration. Geh gelassen in jede Prüfung, rufe dein Wissen zuverlässig ab und zeige, was wirklich in dir steckt.',
    problem: {
      headline: 'Prüfungsangst – wenn das Wissen da ist, aber nicht abrufbar',
      description:
        'Prüfungsangst blockiert den Zugang zum eigenen Wissen. Das Gelernte ist da – aber Angst, Blackout und Panik verhindern, dass es im entscheidenden Moment abrufbar ist.',
      stats: [
        { value: '25%', label: 'aller Studierenden leiden unter Prüfungsangst' },
        { value: '15%', label: 'brechen deshalb ihr Studium ab' },
        { value: '40%', label: 'erzielen deutlich schlechtere Noten als ihr Wissen erlaubt' },
        { value: '2x', label: 'häufiger bei perfektionistischen Persönlichkeiten' },
      ],
      consequences: [
        'Blackouts in der Prüfung trotz guter Vorbereitung',
        'Körperliche Symptome: Herzrasen, Übelkeit, Schweissausbrüche',
        'Vermeidung von Prüfungssituationen und Karriereverzögerung',
        'Chronischer Stress in der Vorbereitungsphase',
        'Sinkendes Selbstvertrauen durch wiederholt schlechte Ergebnisse',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'Prüfungsangst lösen ist ein Hypnose-Audio, das die unbewussten Angstmuster rund um Prüfungssituationen auflöst und durch Gelassenheit und Fokus ersetzt.',
      topics: [
        'Prüfungsangst reduzieren – ruhig bleiben statt panisch werden',
        'Blackouts verhindern – Zugang zum Wissen freihalten',
        'Konzentration unter Druck – fokussiert und klar denken',
        'Körperliche Symptome lindern – Herzrasen und Zittern reduzieren',
        'Gesundes Selbstvertrauen – dem eigenen Wissen vertrauen',
        'Prüfungen als Chance sehen – zeigen was man kann',
      ],
      goals: [
        'Gelassen und fokussiert in Prüfungen gehen',
        'Wissen zuverlässig abrufen können',
        'Körperliche Angstsymptome deutlich reduzieren',
        'Prüfungen als normale Situation erleben, nicht als Bedrohung',
      ],
    },
    studies: [
      {
        title: 'Hypnose bei Prüfungsangst',
        source: 'Stanton, 1994 – Australian Journal of Clinical Hypnotherapy',
        finding: 'Hypnotherapie reduziert Prüfungsangst signifikant und verbessert die Prüfungsleistung – die Effekte bleiben über Monate stabil.',
      },
      {
        title: 'Kognitive Hypnotherapie bei Leistungsangst',
        source: 'Alladin, 2016 – American Journal of Clinical Hypnosis',
        finding: 'Die Kombination aus Hypnose und kognitiver Umstrukturierung zeigt bei Leistungsängsten eine höhere Wirksamkeit als Verhaltenstherapie allein.',
      },
      {
        title: 'Selbsthypnose und Prüfungsleistung',
        source: 'De Vos & Louw, 2009 – South African Journal of Psychology',
        finding: 'Studierende mit Selbsthypnose-Training zeigen weniger Angst, bessere Konzentration und signifikant bessere Prüfungsergebnisse.',
      },
    ],
    firmenBox: {
      headline: 'Auch als Firmenangebot',
      description:
        'Prüfungsangst betrifft nicht nur Studierende. Zertifizierungen, Assessments und Weiterbildungsprüfungen – gelassene Mitarbeitende bestehen besser.',
      benefits: [
        'Höhere Bestehensquoten bei Zertifizierungsprüfungen',
        'Bessere Leistung in Assessment-Centern',
        'Ergänzung zu Weiterbildungsprogrammen',
        'Ideal für Berufsschulen und Ausbildungsbetriebe',
      ],
    },
  },

  sport: {
    slug: 'sport',
    title: 'Dranbleiben beim Sport',
    subtitle: 'Bewegung wird zur Gewohnheit',
    targetAudience: 'allgemein',
    heroDescription:
      'Mach Bewegung zu deiner Gewohnheit. Entwickle eine tiefe Freude am Training, die dich dauerhaft dranbleiben lässt – ohne Disziplin-Kampf.',
    problem: {
      headline: 'Warum so viele nach wenigen Wochen aufgeben',
      description:
        'Die meisten Sportvorhaben scheitern nicht an fehlendem Wissen, sondern an fehlender innerer Motivation. Willenskraft ist endlich – wer sich zum Sport zwingen muss, hört irgendwann auf.',
      stats: [
        { value: '80%', label: 'der Fitnessstudio-Mitglieder gehen nach 3 Monaten nicht mehr' },
        { value: '50%', label: 'aller Neujahrsvorsätze zum Sport scheitern im Januar' },
        { value: '67%', label: 'der Erwachsenen bewegen sich zu wenig' },
        { value: '25%', label: 'weniger Depressionsrisiko durch regelmässige Bewegung' },
      ],
      consequences: [
        'Wiederholt aufgeben und Frustration über sich selbst',
        'Körperliche Beschwerden durch Bewegungsmangel',
        'Schlechtes Gewissen und sinkendes Selbstvertrauen',
        'Geld verschwendet für ungenutzte Mitgliedschaften',
        'Langfristige Gesundheitsrisiken durch Inaktivität',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'Dranbleiben beim Sport ist ein 47-minütiges Hypnose-Audio, das deine Einstellung zum Training auf der unbewussten Ebene verändert. Sport wird vom Pflichtprogramm zum Bedürfnis.',
      topics: [
        'Innere Motivation aufbauen – Sport wollen statt müssen',
        'Ausreden überwinden – schlechtes Wetter, keine Zeit, keine Lust',
        'Freude an Bewegung entwickeln – das gute Gefühl nach dem Training verankern',
        'Identitätswechsel – sich als sportlicher Mensch sehen',
        'Nach Pausen wieder einsteigen – ohne Selbstvorwürfe',
        'Regelmässigkeit vor Perfektion – jede Einheit zählt',
      ],
      goals: [
        'Regelmässig trainieren ohne inneren Kampf',
        'Freude an Bewegung statt Zwang empfinden',
        'Auch nach Rückfällen sofort wieder einsteigen',
        'Sport als selbstverständlichen Teil des Lebens etablieren',
      ],
    },
    studies: [
      {
        title: 'Hypnose und Sportmotivation',
        source: 'Barker et al., 2013 – Journal of Applied Sport Psychology',
        finding: 'Selbsthypnose steigert die intrinsische Motivation und die Selbstwirksamkeit bei sportlichen Aktivitäten signifikant.',
      },
      {
        title: 'Gewohnheitsbildung und Unterbewusstsein',
        source: 'Lally et al., 2010 – European Journal of Social Psychology',
        finding: 'Neue Gewohnheiten entstehen durch Wiederholung automatischer Muster im Unterbewusstsein – genau dort setzt Hypnose an.',
      },
      {
        title: 'Mentale Programmierung für Sportler',
        source: 'Pates & Palmi, 2002 – Contemporary Hypnosis',
        finding: 'Hypnose verbessert die sportliche Leistung und stärkt die Bindung an regelmässiges Training.',
      },
    ],
    firmenBox: {
      headline: 'Auch als Firmenangebot',
      description:
        'Aktive Mitarbeitende sind gesünder, leistungsfähiger und zufriedener. Ergänzen Sie Ihr betriebliches Gesundheitsmanagement um mentale Sportmotivation.',
      benefits: [
        'Weniger Krankheitstage durch aktive Mitarbeitende',
        'Höhere Energie und Produktivität im Arbeitsalltag',
        'Ergänzung zu Firmenfitness-Angeboten',
        'Individuell nutzbar – kein Gruppenformat nötig',
      ],
    },
  },

  fitamsteuer: {
    slug: 'fitamsteuer',
    title: 'Fit am Steuer',
    subtitle: 'Mentale Stärke für Berufschauffeure',
    targetAudience: 'branche',
    audienceLabel: 'Für Berufschauffeure & Busfahrer',
    heroDescription:
      'Bleib gelassen im Verkehr, schlafe erholsam trotz Schichtdienst und achte auf deine Gesundheit – für einen nachhaltigen, gesunden Berufsalltag am Steuer.',
    problem: {
      headline: 'Warum Berufschauffeure besonders gefährdet sind',
      description:
        'Berufschauffeure und Busfahrer gehören zu den am stärksten unterversorgten Berufsgruppen im Bereich mentale Gesundheit. Die Kombination aus Sitzen, Stress, Isolation und Verantwortung ist eine toxische Mischung.',
      stats: [
        { value: '65%', label: 'leiden unter Rückenproblemen durch langes Sitzen' },
        { value: '40%', label: 'haben Schlafprobleme durch unregelmässige Schichten' },
        { value: '3x', label: 'höheres Risiko für Herz-Kreislauf-Erkrankungen' },
        { value: '55%', label: 'essen unregelmässig und ungesund unterwegs' },
      ],
      consequences: [
        'Chronische Rücken- und Nackenschmerzen',
        'Übergewicht durch Fast Food und Bewegungsmangel',
        'Schlafstörungen durch wechselnde Schichtzeiten',
        'Erhöhtes Unfallrisiko durch Müdigkeit und Stress',
        'Emotionale Erschöpfung durch schwierige Fahrgäste und Dauerstress',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'Fit am Steuer ist ein 47-minütiges Hypnose-Audio, das speziell für die Herausforderungen von Berufschauffeuren und Busfahrern entwickelt wurde. Es stärkt Gelassenheit, Schlafqualität und bewusste Selbstfürsorge.',
      topics: [
        'Gelassenheit im Verkehr – Stau, Baustellen und Drängler mit Ruhe begegnen',
        'Gesund essen unterwegs – bewusstere Entscheidungen an der Raststätte',
        'Erholsam schlafen trotz Schichtdienst – schneller in die Tiefschlafphase',
        'Fokus und Konzentration am Steuer – wach und aufmerksam bleiben',
        'Gelassen mit schwierigen Fahrgästen – professionell und ruhig',
        'Rücken und Schultern entspannen – Verspannungen bewusst lösen',
        'Pausen effektiv nutzen – in kurzer Zeit aufladen',
        'Stolz auf den eigenen Beruf – Sinnfindung und Selbstwert stärken',
      ],
      goals: [
        'Gelassen und sicher durch den Verkehrsalltag fahren',
        'Trotz Schichtarbeit erholsam schlafen',
        'Bewusster essen und auf den Körper achten',
        'Langfristig gesund im Beruf bleiben',
      ],
    },
    studies: [
      {
        title: 'Stressbelastung bei Berufskraftfahrern',
        source: 'Useche et al., 2017 – Safety Science',
        finding: 'Berufskraftfahrer mit Stressbewältigungsstrategien zeigen signifikant weniger Unfälle und gesundheitliche Beschwerden.',
      },
      {
        title: 'Hypnose bei Schlafstörungen durch Schichtarbeit',
        source: 'Cordi et al., 2014 – Universität Zürich',
        finding: 'Hypnose verlängert die Tiefschlafphase um bis zu 80% – besonders relevant für Schichtarbeitende mit unregelmässigen Schlafzeiten.',
      },
      {
        title: 'Selbsthypnose zur Schmerzreduktion',
        source: 'Jensen & Patterson, 2014 – American Psychologist',
        finding: 'Selbsthypnose reduziert chronische Schmerzen signifikant und ist besonders wirksam bei Rücken- und Nackenschmerzen.',
      },
    ],
    firmenBox: {
      headline: 'Fit am Steuer für Ihr Unternehmen',
      description:
        'Gesunde, ausgeruhte Fahrer bedeuten sichere Fahrten, weniger Ausfälle und zufriedenere Kunden. Ideal für Transportunternehmen, Busbetriebe und Logistikfirmen.',
      benefits: [
        'Weniger Unfälle durch fokussierte, ausgeruhte Fahrer',
        'Reduzierte Krankheitstage und Fluktuation',
        'Höhere Kundenzufriedenheit durch gelassenes Personal',
        'Erfüllung der Fürsorgepflicht im BGM',
      ],
    },
  },

  arztstark: {
    slug: 'arztstark',
    title: 'ArztStark',
    subtitle: 'Mentale Stärke für Mediziner',
    targetAudience: 'branche',
    audienceLabel: 'Für Ärzte & Mediziner',
    heroDescription:
      'Verarbeite schwierige Situationen gesund, behalte den Fokus unter Druck und schütze dein Mitgefühl – ohne dich selbst zu verlieren.',
    problem: {
      headline: 'Warum Ärzte besonders gefährdet sind',
      description:
        'Ärzte tragen eine der höchsten psychischen Belastungen aller Berufsgruppen. Entscheidungen über Leben und Tod, Perfektionismus, Schlafentzug und emotionale Belastung führen zu einer alarmierenden Burnout-Rate.',
      stats: [
        { value: '50%', label: 'aller Ärzte zeigen Burnout-Symptome' },
        { value: '2x', label: 'höhere Suizidrate als in der Allgemeinbevölkerung' },
        { value: '40%', label: 'leiden unter Schlafstörungen durch Bereitschaftsdienst' },
        { value: '70%', label: 'berichten über Schwierigkeiten, nach der Arbeit abzuschalten' },
      ],
      consequences: [
        'Chronische Erschöpfung und emotionale Abstumpfung',
        'Schwierigkeiten, Fehler zu verarbeiten – Grübeln und Schuldgefühle',
        'Schlafprobleme durch Bereitschaftsdienst und Adrenalin',
        'Erhöhtes Suchtrisiko – Alkohol, Medikamente',
        'Mitgefühlserschöpfung – Empathie geht verloren',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'ArztStark ist ein 48-minütiges Hypnose-Audio, das speziell für die psychischen Herausforderungen im ärztlichen Beruf entwickelt wurde. Es stärkt Fokus, Resilienz und die Fähigkeit, nach der Arbeit loszulassen.',
      topics: [
        'Fehler verarbeiten – analysieren, lernen, loslassen',
        'Abschalten nach Operationen und Notfällen – Adrenalin bewusst abbauen',
        'Fokus im Operationssaal – Flow-State und Präzision unter Druck',
        'Perfektionismus in gesunde Bahnen lenken – hohe Ansprüche ohne Selbstzerstörung',
        'Schlafen trotz Bereitschaftsdienst – jede Minute Schlaf nutzen',
        'Empathie ohne Erschöpfung – Mitgefühl dosieren',
        'Schwierige Gespräche führen – schlechte Diagnosen mit Einfühlung überbringen',
        'Entscheidungen unter Druck – klar denken in Extremsituationen',
      ],
      goals: [
        'Nach der Arbeit innerlich abschalten können',
        'Fehler verarbeiten ohne endlos zu grübeln',
        'Unter Druck fokussiert und klar denken',
        'Langfristig gesund und empathisch im Beruf bleiben',
      ],
    },
    studies: [
      {
        title: 'Burnout-Prävention bei Ärzten',
        source: 'West et al., 2016 – The Lancet',
        finding: 'Gezielte Interventionen zur Stressbewältigung reduzieren Burnout bei Ärzten um bis zu 25% – besonders wirksam sind Techniken, die auf der unbewussten Ebene ansetzen.',
      },
      {
        title: 'Hypnose und chirurgische Leistung',
        source: 'Faymonville et al., 2006 – International Journal of Clinical Hypnosis',
        finding: 'Ärzte, die Selbsthypnose-Techniken anwenden, berichten über besseren Fokus, weniger Stress und höhere Präzision bei Eingriffen.',
      },
      {
        title: 'Emotionale Regulation im medizinischen Beruf',
        source: 'Shapiro et al., 2000 – Academic Medicine',
        finding: 'Die Fähigkeit zur bewussten emotionalen Abgrenzung schützt vor Mitgefühlserschöpfung und verlängert die Berufszufriedenheit signifikant.',
      },
    ],
    firmenBox: {
      headline: 'ArztStark für Ihre Institution',
      description:
        'Schützen Sie Ihre Ärzte vor Burnout und Mitgefühlserschöpfung. Ideal für Spitäler, Kliniken und medizinische Zentren.',
      benefits: [
        'Geringere Ausfallzeiten durch Burnout-Prävention',
        'Bessere Patientenversorgung durch fokussierte Ärzte',
        'Niedrigere Fluktuation in der Ärzteschaft',
        'Einfache Integration in bestehende Weiterbildungsprogramme',
      ],
    },
  },

  lehrfit: {
    slug: 'lehrfit',
    title: 'LehrFit',
    subtitle: 'Mentale Stärke für Lehrpersonen',
    targetAudience: 'branche',
    audienceLabel: 'Für Lehrpersonen',
    heroDescription:
      'Bewahre deine Geduld im Klassenzimmer, führe Elterngespräche gelassen und schalte nach Schulschluss ab – für einen nachhaltigen, gesunden Lehrberuf.',
    problem: {
      headline: 'Warum Lehrpersonen besonders gefährdet sind',
      description:
        'Lehrpersonen haben die höchste Burnout-Rate aller Berufsgruppen. Reizüberflutung, emotionale Belastung, Konflikte mit Eltern und das Gefühl, nie fertig zu sein, führen zu chronischer Erschöpfung.',
      stats: [
        { value: '30%', label: 'aller Lehrpersonen zeigen Burnout-Symptome' },
        { value: '#1', label: 'Berufskrankheit: Stimmprobleme und Erschöpfung' },
        { value: '50%', label: 'denken in den ersten 5 Jahren an Berufswechsel' },
        { value: '25%', label: 'mehr Krankheitstage als der Durchschnitt' },
      ],
      consequences: [
        'Chronische Erschöpfung und emotionale Überlastung',
        'Stimmprobleme und Heiserkeit durch ständiges Sprechen gegen Lärm',
        'Schwierigkeiten, nach Schulschluss abzuschalten – Korrekturen, Eltern, Gedanken',
        'Konflikte mit Eltern, die persönlich genommen werden',
        'Post-Ferien-Tief – der schwere Wiedereinstieg nach jeder Pause',
      ],
    },
    solution: {
      headline: 'Was diese Hypnose-MP3 bewirkt',
      description:
        'LehrFit ist ein 47-minütiges Hypnose-Audio, das speziell für die psychischen Herausforderungen im Lehrberuf entwickelt wurde. Es stärkt Gelassenheit, Geduld und die Fähigkeit, nach Schulschluss abzuschalten.',
      topics: [
        'Geduld im Klassenzimmer – ruhig bleiben bei Lärm, Chaos und Provokation',
        'Schwierige Schüler loslassen – nicht alles persönlich nehmen',
        'Stimme schonen – mit ruhiger Autorität sprechen statt gegen Lärm anschreien',
        'Abschalten nach Schulschluss – Gedanken an Korrekturen und Eltern stoppen',
        'Elterngespräche gelassen führen – sachlich bleiben bei Kritik und Angriffen',
        'Motivation nach Ferien wiederfinden – sanft wieder einsteigen',
        'Grenzen setzen – klar und respektvoll Nein sagen',
      ],
      goals: [
        'Gelassen und mit Freude unterrichten',
        'Nach Schulschluss innerlich abschalten können',
        'Konflikte mit Eltern und Schülern souverän meistern',
        'Langfristig gesund und motiviert im Lehrberuf bleiben',
      ],
    },
    studies: [
      {
        title: 'Burnout bei Lehrpersonen',
        source: 'Maslach & Leiter, 2016 – World Psychiatry',
        finding: 'Burnout bei Lehrpersonen korreliert direkt mit mangelnder emotionaler Regulation und fehlenden Erholungsstrategien – beides adressierbar durch Hypnose.',
      },
      {
        title: 'Hypnose und Stressbewältigung im Bildungswesen',
        source: 'Fisch et al., 2017 – International Journal of Clinical Hypnosis',
        finding: 'Hypnotherapeutische Interventionen reduzieren Stress und emotionale Erschöpfung bei Berufsgruppen mit hoher zwischenmenschlicher Belastung signifikant.',
      },
      {
        title: 'Selbsthypnose zur Emotionsregulation',
        source: 'Hammond, 2010 – American Journal of Clinical Hypnosis',
        finding: 'Regelmässige Selbsthypnose verbessert die emotionale Regulation, senkt den Cortisolspiegel und stärkt die Fähigkeit zur Abgrenzung.',
      },
    ],
    firmenBox: {
      headline: 'LehrFit für Ihre Schule',
      description:
        'Gesunde Lehrpersonen unterrichten besser und bleiben länger im Beruf. Ideal für Schulen, Bildungsinstitutionen und Kantone.',
      benefits: [
        'Weniger Burnout-bedingte Ausfälle und Frühpensionierungen',
        'Besseres Klassenklima durch gelassene Lehrpersonen',
        'Geringere Kosten für Stellvertretungen',
        'Einfache Integration in Weiterbildungstage',
      ],
    },
  },
  flugangst: {
    slug: 'flugangst',
    title: 'Mit Freude fliegen',
    subtitle: 'Flugangst überwinden',
    targetAudience: 'allgemein',
    heroDescription:
      'Erlebe das Fliegen neu – nicht als Bedrohung, sondern als das sicherste und faszinierendste Verkehrsmittel der Welt. Für alle, die wieder mit Leichtigkeit und Vorfreude abheben möchten.',
    problem: {
      headline: 'Warum Flugangst so hartnäckig ist',
      description:
        'Flugangst gehört zu den häufigsten Phobien weltweit. Das Rationale – Fliegen ist sicherer als Autofahren – hilft nicht, weil die Angst tief im Unterbewusstsein verankert ist. Vermeidungsverhalten verstärkt die Phobie zusätzlich.',
      stats: [
        { value: '25%', label: 'der Bevölkerung haben Angst vorm Fliegen' },
        { value: '10%', label: 'meiden Flugzeuge komplett' },
        { value: '73%', label: 'der Betroffenen nennen Turbulenzen als Hauptauslöser' },
        { value: '0.0001%', label: 'beträgt das tatsächliche Risiko eines Flugunfalls' },
      ],
      consequences: [
        'Eingeschränkte Reisefreiheit und verpasste Chancen',
        'Panikattacken und körperliche Symptome vor und während des Fluges',
        'Berufliche Einschränkungen bei internationalen Aufgaben',
        'Belastung für Beziehungen und Familie durch Vermeidung',
        'Stundenlange Anreisen mit Auto oder Zug als Ersatz',
      ],
    },
    solution: {
      headline: 'Mit Freude fliegen – Flugangst im Unterbewusstsein auflösen',
      description:
        'Dieses Audio-Programm arbeitet dort, wo die Angst sitzt: im Unterbewusstsein. In tiefer Trance werden neue, positive Verknüpfungen zum Fliegen aufgebaut – Sicherheit statt Bedrohung, Faszination statt Panik, Vorfreude statt Vermeidung.',
      topics: [
        'Tiefes Vertrauen in die Sicherheit des Fliegens aufbauen',
        'Turbulenzen als sanfte, harmlose Wellenbewegungen erleben',
        'Flughafen, Boarding und Start mit Gelassenheit geniessen',
        'Vorfreude und Faszination statt Angst und Vermeidung',
        'Automatische Entspannungsreaktion im Flugzeug verankern',
      ],
      goals: [
        'Flugangst nachhaltig auflösen',
        'Entspannt und gelassen ins Flugzeug steigen',
        'Turbulenzen ruhig und gelassen erleben',
        'Fliegen als positives Erlebnis geniessen',
        'Reisefreiheit zurückgewinnen',
      ],
    },
    studies: [
      {
        title: 'Hypnose bei spezifischen Phobien',
        source: 'Journal of Clinical Psychology, Metaanalyse 2020',
        finding: 'Hypnotherapie zeigt bei Flugangst signifikant bessere Ergebnisse als kognitive Verhaltenstherapie allein, mit Erfolgsraten von über 70% nach nur wenigen Sitzungen.',
      },
      {
        title: 'Unterbewusste Angstmuster und ihre Auflösung',
        source: 'International Journal of Clinical and Experimental Hypnosis, 2022',
        finding: 'Hypnotische Interventionen können tief verankerte Angstmuster im Unterbewusstsein neu programmieren, indem sie die automatische Stressreaktion durch Entspannungsreaktionen ersetzen.',
      },
      {
        title: 'Flugangst und Vermeidungsverhalten',
        source: 'Aviation Psychology and Applied Human Factors, 2021',
        finding: 'Rund 25% der Bevölkerung leiden unter Flugangst. Die häufigsten Auslöser sind Kontrollverlust, Turbulenzen und enge Räume. Mentale Techniken reduzieren die Symptome um bis zu 60%.',
      },
    ],
    firmenBox: {
      headline: 'Flugangst-Programm für Unternehmen',
      description:
        'Geschäftsreisen gehören in vielen Branchen zum Alltag. Unterstützen Sie Mitarbeitende mit Flugangst dabei, entspannt und leistungsfähig zu reisen – für mehr Mobilität und weniger Stress im Team.',
      benefits: [
        'Mitarbeitende reisen entspannt zu internationalen Terminen',
        'Weniger Ausfälle und Umplanungen durch Flugvermeidung',
        'Höhere Flexibilität bei Dienstreisen',
        'Wertschätzung durch ein konkretes Unterstützungsangebot',
      ],
    },
  },
  ceomind: {
    slug: 'ceomind',
    title: 'CEO-Mind',
    subtitle: 'Das CEO-Gen aktivieren',
    targetAudience: 'allgemein',
    heroDescription:
      'Entwickle die mentale Souveränität einer echten Führungspersönlichkeit. Unerschütterliche Selbstsicherheit, klare Entscheidungen ohne Zögern und die Fähigkeit, Grenzen zu setzen – freundlich, aber absolut klar.',
    problem: {
      headline: 'Warum viele Führungskräfte innerlich kämpfen',
      description:
        'Selbständige, Einzelunternehmer und Führungskräfte tragen enorme Verantwortung – oft ohne ein Netz, das sie auffängt. Der Druck, immer stark sein zu müssen, führt zu innerem Zweifeln, Entscheidungsblockaden und dem Gefühl, nie genug zu tun.',
      stats: [
        { value: '72%', label: 'der Führungskräfte fühlen sich regelmässig überfordert' },
        { value: '65%', label: 'haben Schwierigkeiten, klare Grenzen zu setzen' },
        { value: '58%', label: 'zweifeln regelmässig an eigenen Entscheidungen' },
        { value: '45%', label: 'empfinden Kritik als persönlichen Angriff' },
      ],
      consequences: [
        'Entscheidungslähmung und endloses Grübeln',
        'Anfälligkeit für Manipulation und Verunsicherung',
        'Erschöpfung durch fehlende Abgrenzung',
        'Verlust von Autorität und Respekt',
        'Dauerstress durch das Gefühl, nie genug zu sein',
      ],
    },
    solution: {
      headline: 'CEO-Mind – mentale Souveränität programmieren',
      description:
        'Dieses Audio-Programm aktiviert die innere Führungspersönlichkeit, die bereits in dir angelegt ist. In tiefer Trance werden fünf Kernmodule im Unterbewusstsein verankert, die dich mental unerschütterlich machen.',
      topics: [
        'Unerschütterliche Selbstsicherheit aufbauen',
        'Mentale Unverletzlichkeit – Kritik und Manipulation abprallen lassen',
        'Vogelperspektive – über Situationen stehen statt drin versinken',
        'Entscheidungskraft – ohne Zögern, ohne Reue',
        'Grenzen setzen – freundlich, aber absolut klar',
      ],
      goals: [
        'Stille, felsenfeste innere Sicherheit entwickeln',
        'Klare Entscheidungen treffen ohne endloses Grübeln',
        'Gesunde Grenzen setzen ohne schlechtes Gewissen',
        'Souverän bleiben unter Druck und bei Kritik',
        'Natürliche Autorität ausstrahlen',
      ],
    },
    studies: [
      {
        title: 'Selbstwirksamkeit und Führungserfolg',
        source: 'Journal of Applied Psychology, Metaanalyse 2022',
        finding: 'Führungskräfte mit hoher Selbstwirksamkeit treffen schnellere und qualitativ bessere Entscheidungen und werden von Mitarbeitenden als kompetenter wahrgenommen.',
      },
      {
        title: 'Hypnose bei Leistungsoptimierung',
        source: 'International Journal of Clinical and Experimental Hypnosis, 2021',
        finding: 'Hypnotische Interventionen verbessern nachweislich Selbstvertrauen, Stressresistenz und kognitive Flexibilität bei Führungskräften und Leistungsträgern.',
      },
      {
        title: 'Emotionale Regulation und Führung',
        source: 'Harvard Business Review, Leadership Research 2023',
        finding: 'Führungskräfte, die emotionale Distanz zu belastenden Situationen herstellen können (Vogelperspektive), zeigen signifikant bessere Ergebnisse bei Konflikten und in Verhandlungen.',
      },
    ],
    firmenBox: {
      headline: 'CEO-Mind für Führungsteams',
      description:
        'Mentale Souveränität ist eine Schlüsselkompetenz für jede Führungskraft. Bieten Sie Ihrem Leadership-Team ein Programm, das Entscheidungskraft, Abgrenzungsfähigkeit und innere Stärke nachhaltig fördert.',
      benefits: [
        'Schnellere und klarere Entscheidungsprozesse',
        'Weniger Konflikte durch gesunde Abgrenzung',
        'Höhere Resilienz im gesamten Führungsteam',
        'Authentische Autorität statt Macht durch Position',
      ],
    },
  },
}

export function getAudioDetail(slug: string): AudioDetail | undefined {
  return audioDetails[slug]
}

export function getAllAudioDetailSlugs(): string[] {
  return Object.keys(audioDetails)
}
