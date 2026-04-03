// ============================================================
// hypnovital – Academy / E-Learning Kursdaten
// ============================================================

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface Lesson {
  id: string
  slug: string
  title: string
  duration: string
  description: string
  videoUrl?: string
  content: string[]
  keyPoints: string[]
  quiz: QuizQuestion[]
}

export interface Course {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  targetAudience: string
  category: 'partner' | 'firmen'
  lessons: Lesson[]
  bundledProduct?: string
  price?: number
  priceFormatted?: string
  isActive: boolean
}

export const courses: Course[] = [
  {
    id: 'stressmanagement-grundlagen',
    slug: 'stressmanagement-grundlagen',
    title: 'Stressmanagement Grundlagen',
    subtitle: 'Stress verstehen, erkennen und nachhaltig reduzieren',
    description:
      'Dieser Kurs vermittelt ein fundiertes Verständnis von Stress und seinen Auswirkungen. In fünf Lektionen lernen Teilnehmende, Stressoren zu erkennen, körperliche Warnsignale zu deuten und wirksame Strategien zur nachhaltigen Stressreduktion anzuwenden.',
    targetAudience: 'Mitarbeitende, Führungskräfte und Teams',
    category: 'firmen',
    bundledProduct: 'resilienz',
    isActive: true,
    lessons: [
      {
        id: 'was-ist-stress',
        slug: 'was-ist-stress',
        title: 'Was ist Stress wirklich?',
        duration: '8 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/stressmanagement-lektion-1.mp4',
        description: 'Verstehe die biologischen Grundlagen von Stress und den Unterschied zwischen positivem und negativem Stress.',
        content: [
          'Stress ist eine uralte Kampf-oder-Flucht-Reaktion – Adrenalin und Cortisol bereiten den Körper auf Gefahr vor.',
          'Eustress (positiv) macht leistungsfähig, Distress (negativ) macht auf Dauer krank.',
          'Chronischer Stress schwächt Immunsystem, Schlaf und Psyche – bis zu 75 % aller Arztbesuche sind stressbedingt.',
          'Der Umgang mit Stress ist trainierbar – genau darum geht es in diesem Kurs.',
        ],
        keyPoints: [
          'Stress ist eine natürliche Überlebensreaktion des Körpers (Fight-or-Flight)',
          'Eustress motiviert und macht leistungsfähig, Distress macht krank',
          'Das Nervensystem unterscheidet nicht zwischen echten Gefahren und Alltagsstress',
          'Chronischer Stress schwächt Immunsystem, Schlaf und psychische Gesundheit',
          'Stress ist nicht vermeidbar – aber der Umgang damit ist trainierbar',
        ],
        quiz: [
          {
            question: 'Was passiert bei der Fight-or-Flight-Reaktion im Körper?',
            options: [
              'Der Körper fährt alle Systeme herunter, um Energie zu sparen',
              'Stresshormone wie Adrenalin und Cortisol werden ausgeschüttet',
              'Das Verdauungssystem wird aktiviert, um mehr Energie bereitzustellen',
              'Der Blutdruck sinkt, um die Muskeln zu entspannen',
            ],
            correctIndex: 1,
            explanation:
              'Bei der Fight-or-Flight-Reaktion schüttet der Körper Stresshormone wie Adrenalin und Cortisol aus. Das Herz schlägt schneller, die Muskeln spannen sich an und die Sinne werden geschärft – alles, um schnell auf eine Bedrohung reagieren zu können.',
          },
          {
            question: 'Was ist der Unterschied zwischen Eustress und Distress?',
            options: [
              'Eustress ist körperlicher Stress, Distress ist psychischer Stress',
              'Eustress tritt nur bei jungen Menschen auf',
              'Eustress ist positiver, motivierender Stress – Distress ist negativer, überwältigender Stress',
              'Es gibt keinen echten Unterschied, nur die Dauer ist entscheidend',
            ],
            correctIndex: 2,
            explanation:
              'Eustress entsteht, wenn wir eine Herausforderung als bewältigbar empfinden – er macht uns leistungsfähiger. Distress hingegen entsteht, wenn die Anforderungen unsere Ressourcen dauerhaft übersteigen.',
          },
          {
            question: 'Welcher Anteil der Arztbesuche geht laut Studien auf stressbedingte Beschwerden zurück?',
            options: [
              'Etwa 25 %',
              'Etwa 50 %',
              'Bis zu 75 %',
              'Über 90 %',
            ],
            correctIndex: 2,
            explanation:
              'Studien zeigen, dass bis zu 75 % aller Arztbesuche auf stressbedingte Beschwerden zurückgehen. Das verdeutlicht, wie stark chronischer Stress die Gesundheit beeinflusst.',
          },
        ],
      },
      {
        id: 'stressoren-erkennen',
        slug: 'stressoren-erkennen',
        title: 'Stressoren erkennen',
        duration: '10 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/stressmanagement-lektion-2.mp4',
        description: 'Lerne, deine persönlichen Stressauslöser zu identifizieren und ein Stresstagebuch zu führen.',
        content: [
          'Vier Kategorien von Stressoren: Arbeitsplatz, Beziehungen, innere Stressoren (Perfektionismus, Selbstzweifel) und Umgebung.',
          'Innere Stressoren wie der innere Kritiker wirken oft unbewusst und sind besonders tückisch.',
          'Ein Stresstagebuch (2-3 Wochen) macht Muster sichtbar: Wann, was, wie reagiert?',
          'Zentrale Frage: Welche Stressoren kann ich verändern, welche akzeptieren, wo kann ich meine Reaktion anpassen?',
        ],
        keyPoints: [
          'Stressoren sind individuell – was andere stresst, muss dich nicht stressen',
          'Vier Kategorien: Arbeitsplatz, Beziehungen, innere Stressoren, Umgebung',
          'Innere Stressoren wie Perfektionismus wirken oft unbewusst',
          'Ein Stresstagebuch macht Muster sichtbar und zeigt Ansatzpunkte',
          'Unterscheide: veränderbar, akzeptierbar oder in der Reaktion beeinflussbar',
        ],
        quiz: [
          {
            question: 'Welcher der folgenden Stressoren gehört zu den inneren Stressoren?',
            options: [
              'Lärm am Arbeitsplatz',
              'Konflikte mit Kollegen',
              'Perfektionismus und unrealistische Selbsterwartungen',
              'Zeitdruck durch enge Deadlines',
            ],
            correctIndex: 2,
            explanation:
              'Perfektionismus und unrealistische Erwartungen an sich selbst sind typische innere Stressoren. Sie wirken oft unbewusst und können mehr Stress verursachen als äussere Faktoren.',
          },
          {
            question: 'Wie lange sollte ein Stresstagebuch idealerweise geführt werden, um Muster zu erkennen?',
            options: [
              'Einen Tag',
              'Zwei bis drei Wochen',
              'Sechs Monate',
              'Ein ganzes Jahr',
            ],
            correctIndex: 1,
            explanation:
              'Schon nach zwei bis drei Wochen Stresstagebuch zeigen sich zuverlässige Muster – bestimmte Situationen, Personen oder Gedanken, die immer wieder als Stressauslöser auftauchen.',
          },
          {
            question: 'Was ist die wichtigste Erkenntnis aus einem Stresstagebuch?',
            options: [
              'Wie viele Stunden man pro Tag gestresst ist',
              'Welche Stressoren veränderbar, akzeptierbar oder in der Reaktion beeinflussbar sind',
              'Wer im Team am meisten Stress verursacht',
              'Ob man mehr oder weniger gestresst ist als der Durchschnitt',
            ],
            correctIndex: 1,
            explanation:
              'Die zentrale Erkenntnis eines Stresstagebuchs ist die Unterscheidung: Welche Stressoren kann ich verändern? Welche muss ich akzeptieren? Und wo kann ich meine Reaktion verändern?',
          },
        ],
      },
      {
        id: 'koerperliche-stressreaktionen',
        slug: 'koerperliche-stressreaktionen',
        title: 'Körperliche Stressreaktionen',
        duration: '9 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/stressmanagement-lektion-3.mp4',
        description: 'Verstehe, wie sich Stress körperlich zeigt, und lerne, Warnsignale frühzeitig zu erkennen.',
        content: [
          'Cortisol ist kurzfristig hilfreich – dauerhaft erhöht schwächt es Immunsystem, Schlaf und fördert Entzündungen.',
          'Typische Warnsignale: Verspannungen, Kopfschmerzen, Verdauungsprobleme, Herzrasen, Schlafstörungen.',
          'Schleichende Veränderungen wie dauernde Müdigkeit oder häufige Erkältungen werden oft als "normal" abgetan.',
          'Regelmässige Körperwahrnehmung ist der erste Schritt aus dem Stresskreislauf.',
        ],
        keyPoints: [
          'Cortisol ist kurzfristig hilfreich, chronisch erhöht aber schädlich',
          'Häufige Signale: Verspannungen, Kopfschmerzen, Verdauungsprobleme, Schlafstörungen',
          'Chronischer Stress schwächt das Immunsystem und fördert Entzündungen',
          'Schleichende Veränderungen werden oft als «normal» abgetan',
          'Regelmässige Körperwahrnehmung ist der erste Schritt zur Veränderung',
        ],
        quiz: [
          {
            question: 'Was passiert, wenn der Cortisolspiegel dauerhaft erhöht bleibt?',
            options: [
              'Der Körper wird leistungsfähiger und widerstandsfähiger',
              'Immunsystem wird unterdrückt, Entzündungen werden gefördert, Schlaf wird gestört',
              'Der Körper passt sich an und Cortisol wird wirkungslos',
              'Die Muskeln werden dauerhaft gestärkt',
            ],
            correctIndex: 1,
            explanation:
              'Ein chronisch erhöhter Cortisolspiegel unterdrückt das Immunsystem, fördert Entzündungen, stört den Schlaf-Wach-Rhythmus und begünstigt Bauchfetteinlagerung.',
          },
          {
            question: 'Welches der folgenden Symptome ist KEIN typisches Warnsignal für chronischen Stress?',
            options: [
              'Verspannungen in Nacken und Schultern',
              'Gesteigerter Appetit auf gesunde Nahrung',
              'Schlafstörungen',
              'Häufige Erkältungen',
            ],
            correctIndex: 1,
            explanation:
              'Verspannungen, Schlafstörungen und häufige Erkältungen sind typische Warnsignale für chronischen Stress. Ein gesteigerter Appetit auf gesunde Nahrung gehört nicht dazu.',
          },
          {
            question: 'Warum ist die regelmässige Körperwahrnehmung so wichtig im Stressmanagement?',
            options: [
              'Weil der Körper Stress nur körperlich zeigt, nie psychisch',
              'Weil körperliche Warnsignale oft die ersten Hinweise auf zu viel Stress sind',
              'Weil Stress ausschliesslich durch körperliche Übungen reduziert werden kann',
              'Weil Ärzte nur körperliche Symptome behandeln können',
            ],
            correctIndex: 1,
            explanation:
              'Körperliche Warnsignale sind oft die ersten Hinweise darauf, dass der Stress überhandnimmt. Wer sie frühzeitig erkennt, kann rechtzeitig gegensteuern.',
          },
        ],
      },
      {
        id: 'mentale-strategien',
        slug: 'mentale-strategien',
        title: 'Mentale Strategien gegen Stress',
        duration: '11 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/stressmanagement-lektion-4.mp4',
        description: 'Lerne kognitive Techniken, Achtsamkeit und Atemübungen für den Alltag.',
        content: [
          'Kognitives Reframing: Belastende Situationen bewusst aus einem anderen Blickwinkel betrachten – senkt nachweislich Stresshormone.',
          'Achtsamkeit: 5 Minuten täglich reichen, um den Cortisolspiegel messbar zu senken.',
          '4-7-8-Atemtechnik: 4 Sek. einatmen, 7 Sek. halten, 8 Sek. ausatmen – wirkt sofort gegen akuten Stress.',
          'Hypnose erreicht Stressmuster im Unterbewusstsein dort, wo bewusste Strategien allein nicht hinkommen.',
        ],
        keyPoints: [
          'Nicht die Situation, sondern unsere Bewertung verursacht Stress',
          'Kognitives Reframing verändert die Perspektive und senkt Stresshormone',
          'Schon 5 Minuten Achtsamkeit täglich senken den Cortisolspiegel',
          'Die 4-7-8-Atemtechnik wirkt sofort gegen akuten Stress',
          'Hypnose und Tiefenentspannung erreichen Stressmuster im Unterbewusstsein',
        ],
        quiz: [
          {
            question: 'Was ist kognitives Reframing?',
            options: [
              'Eine Atemübung zur sofortigen Entspannung',
              'Eine Technik, um belastende Situationen bewusst aus einem anderen Blickwinkel zu betrachten',
              'Eine Methode, um negative Gedanken komplett zu unterdrücken',
              'Eine Schlaftechnik gegen nächtliches Grübeln',
            ],
            correctIndex: 1,
            explanation:
              'Kognitives Reframing bedeutet, eine belastende Situation bewusst aus einem anderen Blickwinkel zu betrachten – nicht schönreden, sondern die Perspektive wechseln, um handlungsfähig zu bleiben.',
          },
          {
            question: 'Wie funktioniert die 4-7-8-Atemtechnik?',
            options: [
              '4 Minuten einatmen, 7 Minuten ausatmen, 8 Minuten ruhen',
              '4 Sekunden einatmen, 7 Sekunden halten, 8 Sekunden ausatmen',
              '4 schnelle Atemzüge, 7 langsame, 8 normale',
              '4 Mal tief atmen, 7 Mal flach, 8 Mal normal',
            ],
            correctIndex: 1,
            explanation:
              'Die 4-7-8-Technik: Vier Sekunden einatmen, sieben Sekunden den Atem halten, acht Sekunden langsam ausatmen. Sie aktiviert den Parasympathikus und wirkt sofort beruhigend.',
          },
          {
            question: 'Warum ist die Arbeit mit dem Unterbewusstsein bei Stress besonders wirksam?',
            options: [
              'Weil das Unterbewusstsein keinen Stress empfindet',
              'Weil viele Stressreaktionen automatisch im Unterbewusstsein ablaufen',
              'Weil das Bewusstsein Stress nicht verarbeiten kann',
              'Weil Stress ausschliesslich im Unterbewusstsein entsteht',
            ],
            correctIndex: 1,
            explanation:
              'Viele Stressreaktionen sind tief im Unterbewusstsein verankert und laufen automatisch ab. Techniken wie Hypnose können diese Muster dort verändern, wo sie entstehen.',
          },
        ],
      },
      {
        id: 'stress-nachhaltig-reduzieren',
        slug: 'stress-nachhaltig-reduzieren',
        title: 'Stress nachhaltig reduzieren',
        duration: '12 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/stressmanagement-lektion-5.mp4',
        description: 'Erstelle deinen persönlichen Stressmanagement-Plan und integriere Hypnose in deinen Alltag.',
        content: [
          'Drei Säulen: Prävention (Stress vermeiden), Akuthilfe (sofort wirksame Techniken), Regeneration (Erholung und Tiefenentspannung).',
          'Kleine tägliche Routinen wirken stärker als grosse einmalige Aktionen – neue Gewohnheiten brauchen 21-66 Tage.',
          'Das hypnovital Audio-Programm "Resilienz aufbauen" ergänzt den Kurs durch Arbeit mit dem Unterbewusstsein – 2-3x pro Woche ideal.',
          'Dein nächster Schritt: Wähle eine Massnahme pro Säule und starte heute.',
        ],
        keyPoints: [
          'Ein wirksamer Plan hat drei Säulen: Prävention, Akuthilfe, Regeneration',
          'Kleine tägliche Routinen haben in der Summe die grösste Wirkung',
          'Neue Gewohnheiten brauchen 21 bis 66 Tage, um sich zu festigen',
          'Hypnose ergänzt bewusste Strategien durch Arbeit mit dem Unterbewusstsein',
          'Starte mit einer Massnahme pro Säule – nicht alles auf einmal',
        ],
        quiz: [
          {
            question: 'Welche drei Säulen hat ein wirksamer Stressmanagement-Plan?',
            options: [
              'Sport, Ernährung, Schlaf',
              'Prävention, Akuthilfe, Regeneration',
              'Meditation, Therapie, Medikamente',
              'Arbeit, Freizeit, Familie',
            ],
            correctIndex: 1,
            explanation:
              'Ein wirksamer Stressmanagement-Plan basiert auf drei Säulen: Prävention (Stress vermeiden), Akuthilfe (sofort wirksame Techniken) und Regeneration (regelmässige Erholung und Tiefenentspannung).',
          },
          {
            question: 'Wie lange dauert es laut Forschung, bis eine neue Gewohnheit sich festigt?',
            options: [
              '3 bis 5 Tage',
              '7 bis 14 Tage',
              '21 bis 66 Tage',
              'Mindestens 6 Monate',
            ],
            correctIndex: 2,
            explanation:
              'Forschung zeigt, dass es etwa 21 bis 66 Tage dauert, bis eine neue Gewohnheit sich festigt. Deshalb ist Geduld und Kontinuität entscheidend.',
          },
          {
            question: 'Wie oft sollte das hypnovital Audio-Programm idealerweise angewendet werden?',
            options: [
              'Einmal pro Monat',
              'Täglich',
              'Zwei- bis dreimal pro Woche',
              'Nur bei akutem Stress',
            ],
            correctIndex: 2,
            explanation:
              'Das hypnovital Audio-Programm «Resilienz aufbauen» entfaltet seine volle Wirkung bei regelmässiger Anwendung – idealerweise zwei- bis dreimal pro Woche.',
          },
        ],
      },
    ],
  },
  {
    id: 'rauchfrei-werden',
    slug: 'rauchfrei-werden',
    title: 'Rauchfrei werden',
    subtitle: 'Den Rauchstopp mental vorbereiten und dauerhaft durchhalten',
    description:
      'Dieser Kurs vermittelt ein tiefes Verständnis der Rauchgewohnheit und zeigt wirksame mentale Strategien für einen dauerhaften Rauchstopp. In fünf Lektionen lernen Teilnehmende, ihre persönlichen Rauchmuster zu erkennen, Cravings zu bewältigen und eine rauchfreie Identität aufzubauen.',
    targetAudience: 'Mitarbeitende und Privatpersonen',
    category: 'firmen',
    bundledProduct: 'rauchfrei',
    isActive: true,
    lessons: [
      {
        id: 'warum-du-rauchst',
        slug: 'warum-du-rauchst',
        title: 'Warum du rauchst',
        duration: '9 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/rauchfrei-lektion-1.mp4',
        description: 'Verstehe die psychologischen und neurologischen Mechanismen hinter der Rauchgewohnheit.',
        content: [
          'Rauchen ist ein erlerntes Verhalten – eine Kombination aus Gewohnheit, Belohnungssystem und situativen Auslösern.',
          'Nikotin dockt an Rezeptoren im Gehirn an und löst eine Dopaminausschüttung aus – das Belohnungsgefühl hält nur wenige Minuten.',
          'Mit der Zeit braucht das Gehirn Nikotin, um überhaupt ein normales Dopaminlevel zu erreichen – das ist der Suchtkreislauf.',
          'Reine Willenskraft scheitert bei über 90 % der Rauchstopp-Versuche – nachhaltige Strategien setzen tiefer an.',
        ],
        keyPoints: [
          'Rauchen ist eine Kombination aus körperlicher Abhängigkeit und erlernter Gewohnheit',
          'Nikotin löst eine kurzfristige Dopaminausschüttung aus, die schnell nachlässt',
          'Das Gehirn passt sich an und braucht Nikotin für ein normales Wohlbefinden',
          'Willenskraft allein reicht bei über 90 % der Versuche nicht aus',
          'Ein erfolgreicher Rauchstopp braucht Verständnis, Strategie und mentale Arbeit',
        ],
        quiz: [
          {
            question: 'Warum erzeugt Nikotin ein kurzfristiges Wohlgefühl?',
            options: [
              'Es senkt den Blutdruck und entspannt die Muskeln',
              'Es löst eine Dopaminausschüttung im Belohnungszentrum des Gehirns aus',
              'Es blockiert Stresshormone im Blut',
              'Es erhöht den Sauerstoffgehalt im Gehirn',
            ],
            correctIndex: 1,
            explanation:
              'Nikotin dockt an Rezeptoren im Gehirn an und löst eine Dopaminausschüttung aus. Dieses Belohnungsgefühl ist kurzfristig – und genau das treibt den Suchtkreislauf an.',
          },
          {
            question: 'Warum scheitern die meisten Rauchstopp-Versuche mit reiner Willenskraft?',
            options: [
              'Weil Nikotin den Willen chemisch blockiert',
              'Weil die körperlichen Entzugserscheinungen lebensgefährlich sind',
              'Weil die Gewohnheit und das Belohnungssystem unbewusst wirken und stärker sind als der bewusste Vorsatz',
              'Weil Rauchen genetisch bedingt ist und nicht verändert werden kann',
            ],
            correctIndex: 2,
            explanation:
              'Die Rauchgewohnheit ist tief im Unterbewusstsein verankert. Bewusste Vorsätze reichen oft nicht aus, weil automatische Muster und das Belohnungssystem stärker wirken.',
          },
          {
            question: 'Was passiert langfristig mit dem Dopaminsystem bei regelmässigem Rauchen?',
            options: [
              'Der Körper produziert dauerhaft mehr Dopamin',
              'Das Gehirn braucht Nikotin, um überhaupt ein normales Dopaminlevel zu erreichen',
              'Dopamin wird komplett durch Nikotin ersetzt',
              'Das Belohnungssystem wird unempfindlich für alle Reize',
            ],
            correctIndex: 1,
            explanation:
              'Bei regelmässigem Rauchen passt sich das Gehirn an: Es reduziert die eigene Dopaminproduktion und braucht Nikotin, um sich überhaupt normal zu fühlen.',
          },
        ],
      },
      {
        id: 'rauch-muster',
        slug: 'rauch-muster',
        title: 'Deine persönlichen Rauch-Muster',
        duration: '10 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/rauchfrei-lektion-2.mp4',
        description: 'Identifiziere deine individuellen Rauchauslöser und lerne den Unterschied zwischen emotionalem und körperlichem Verlangen.',
        content: [
          'Typische Rauchauslöser: Stress, Langeweile, soziale Situationen, nach dem Essen, Kaffee oder Alkohol.',
          'Ein Zigaretten-Tagebuch (wann, wo, warum, wie stark das Verlangen) macht unbewusste Muster sichtbar.',
          'Emotionales Craving entsteht durch Gefühle oder Situationen – körperliches Craving durch den sinkenden Nikotinspiegel.',
          'Wer seine Muster kennt, kann gezielt gegensteuern statt auf Autopilot zu rauchen.',
        ],
        keyPoints: [
          'Rauchen wird durch spezifische Situationen, Emotionen und Gewohnheiten ausgelöst',
          'Ein Zigaretten-Tagebuch deckt die persönlichen Muster auf',
          'Emotionales Craving unterscheidet sich grundlegend von körperlichem Entzug',
          'Die meisten Zigaretten werden aus Gewohnheit geraucht, nicht aus echtem Verlangen',
          'Muster erkennen ist der erste Schritt, um sie zu verändern',
        ],
        quiz: [
          {
            question: 'Was ist der Hauptunterschied zwischen emotionalem und körperlichem Craving?',
            options: [
              'Emotionales Craving ist stärker als körperliches',
              'Emotionales Craving wird durch Gefühle oder Situationen ausgelöst, körperliches durch den sinkenden Nikotinspiegel',
              'Körperliches Craving tritt nur morgens auf',
              'Es gibt keinen Unterschied – beides ist rein körperlich',
            ],
            correctIndex: 1,
            explanation:
              'Emotionales Craving entsteht durch bestimmte Situationen oder Gefühle (Stress, Langeweile), während körperliches Craving direkt durch den sinkenden Nikotinspiegel im Blut ausgelöst wird.',
          },
          {
            question: 'Was sollte in einem Zigaretten-Tagebuch festgehalten werden?',
            options: [
              'Nur die Anzahl der Zigaretten pro Tag',
              'Wann, wo, warum geraucht wird und wie stark das Verlangen ist',
              'Nur die Uhrzeiten der Zigarettenpausen',
              'Die Marke und der Preis der Zigaretten',
            ],
            correctIndex: 1,
            explanation:
              'Ein Zigaretten-Tagebuch erfasst Zeitpunkt, Ort, Auslöser und Stärke des Verlangens. So werden unbewusste Muster sichtbar und gezielt veränderbar.',
          },
          {
            question: 'Warum rauchen die meisten Menschen den Grossteil ihrer täglichen Zigaretten?',
            options: [
              'Weil der körperliche Entzug so stark ist',
              'Weil sie den Geschmack geniessen',
              'Aus Gewohnheit und auf Autopilot, nicht aus echtem Verlangen',
              'Weil sie süchtig nach dem Rauch in der Lunge sind',
            ],
            correctIndex: 2,
            explanation:
              'Die meisten Zigaretten werden automatisch und aus Gewohnheit geraucht – nicht weil das Verlangen so gross ist, sondern weil die Situation den Automatismus auslöst.',
          },
        ],
      },
      {
        id: 'koerper-und-rauchen',
        slug: 'koerper-und-rauchen',
        title: 'Was Rauchen mit deinem Körper macht',
        duration: '10 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/rauchfrei-lektion-3.mp4',
        description: 'Erfahre die konkreten körperlichen Auswirkungen des Rauchens und wie schnell sich der Körper nach dem Rauchstopp erholt.',
        content: [
          'Rauchen schädigt Lunge, Herz-Kreislauf-System, Haut und Energiehaushalt – über 7000 Chemikalien pro Zigarette.',
          'Erholungstimeline: Nach 20 Min. normalisiert sich der Puls, nach 24 Std. sinkt das Herzinfarktrisiko, nach 2 Wochen verbessert sich die Lungenfunktion, nach 1 Jahr halbiert sich das Herzinfarktrisiko.',
          'Finanzielle Auswirkung: Eine Schachtel pro Tag kostet über 3000 Euro pro Jahr – Geld, das direkt in Lebensqualität investiert werden kann.',
          'Der Körper beginnt sich sofort nach der letzten Zigarette zu regenerieren – jeder Tag zählt.',
        ],
        keyPoints: [
          'Jede Zigarette enthält über 7000 Chemikalien, davon mindestens 70 krebserregende',
          'Die körperliche Erholung beginnt bereits 20 Minuten nach der letzten Zigarette',
          'Nach einem Jahr halbiert sich das Herzinfarktrisiko gegenüber aktiven Rauchenden',
          'Eine Schachtel pro Tag kostet über 3000 Euro jährlich',
          'Der Körper hat eine enorme Regenerationsfähigkeit – es ist nie zu spät aufzuhören',
        ],
        quiz: [
          {
            question: 'Wann beginnt sich der Körper nach der letzten Zigarette zu erholen?',
            options: [
              'Nach etwa einer Woche',
              'Nach einem Monat',
              'Bereits nach 20 Minuten',
              'Erst nach einem Jahr',
            ],
            correctIndex: 2,
            explanation:
              'Schon 20 Minuten nach der letzten Zigarette normalisieren sich Puls und Blutdruck. Der Körper beginnt sofort mit der Regeneration.',
          },
          {
            question: 'Wie viele Chemikalien enthält eine einzelne Zigarette ungefähr?',
            options: [
              'Etwa 50',
              'Etwa 500',
              'Über 7000',
              'Über 20000',
            ],
            correctIndex: 2,
            explanation:
              'Eine Zigarette enthält über 7000 Chemikalien, von denen mindestens 70 als krebserregend eingestuft sind.',
          },
          {
            question: 'Was passiert nach einem Jahr Rauchfreiheit mit dem Herzinfarktrisiko?',
            options: [
              'Es bleibt gleich hoch wie bei Rauchenden',
              'Es halbiert sich gegenüber aktiven Rauchenden',
              'Es sinkt auf null',
              'Es steigt vorübergehend an',
            ],
            correctIndex: 1,
            explanation:
              'Nach einem Jahr Rauchfreiheit hat sich das Herzinfarktrisiko bereits halbiert im Vergleich zu Personen, die weiter rauchen. Der Körper erholt sich Schritt für Schritt.',
          },
        ],
      },
      {
        id: 'mentale-strategien-rauchstopp',
        slug: 'mentale-strategien-rauchstopp',
        title: 'Mentale Strategien für den Rauchstopp',
        duration: '11 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/rauchfrei-lektion-4.mp4',
        description: 'Lerne mentale Techniken, um Cravings zu bewältigen, und verstehe, warum Hypnose den Rauchstopp nachhaltig unterstützt.',
        content: [
          'Reframing: "Ich verzichte nicht auf etwas – ich gewinne Freiheit zurück" verändert die innere Haltung grundlegend.',
          'Die 5-Minuten-Regel: Jedes Craving dauert 3-5 Minuten – wer es aushält, gewinnt jedes Mal.',
          'Sofort-Techniken bei Verlangen: bewusste Atemübungen, Wasser trinken, kurze Bewegung oder Ablenkung.',
          'Hypnose erreicht die automatischen Muster im Unterbewusstsein – dort, wo die Rauchgewohnheit tatsächlich gespeichert ist.',
        ],
        keyPoints: [
          'Reframing verwandelt den Rauchstopp vom Verzicht zur bewussten Entscheidung für Freiheit',
          'Ein Craving dauert nur 3-5 Minuten – dann lässt es von selbst nach',
          'Atemübungen, Wasser und kurze Bewegung helfen sofort gegen akutes Verlangen',
          'Die Rauchgewohnheit ist im Unterbewusstsein gespeichert und läuft automatisch ab',
          'Hypnose kann diese unbewussten Muster direkt verändern und den Rauchstopp erleichtern',
        ],
        quiz: [
          {
            question: 'Was bedeutet Reframing im Kontext des Rauchstopps?',
            options: [
              'Sich das Rauchen durch Bestrafung abzugewöhnen',
              'Den Rauchstopp nicht als Verzicht, sondern als Gewinn von Freiheit zu betrachten',
              'Sich vorzustellen, dass Zigaretten schlecht schmecken',
              'Anderen zu erklären, warum man aufhört',
            ],
            correctIndex: 1,
            explanation:
              'Reframing verändert die innere Haltung: Statt "Ich darf nicht mehr rauchen" denkt man "Ich gewinne meine Freiheit zurück". Das macht den Unterschied zwischen Kampf und Entscheidung.',
          },
          {
            question: 'Wie lange dauert ein typisches Craving durchschnittlich?',
            options: [
              '30 Sekunden',
              '3 bis 5 Minuten',
              '30 bis 60 Minuten',
              'Mehrere Stunden',
            ],
            correctIndex: 1,
            explanation:
              'Ein typisches Craving dauert nur 3 bis 5 Minuten. Wer diese kurze Phase übersteht, stellt fest, dass das Verlangen von selbst nachlässt.',
          },
          {
            question: 'Warum ist Hypnose beim Rauchstopp besonders wirksam?',
            options: [
              'Weil sie das Nikotin schneller aus dem Körper entfernt',
              'Weil sie die Rauchgewohnheit direkt im Unterbewusstsein verändert, wo sie gespeichert ist',
              'Weil sie den Geschmackssinn verändert',
              'Weil sie Entzugserscheinungen komplett verhindert',
            ],
            correctIndex: 1,
            explanation:
              'Die Rauchgewohnheit ist als automatisches Muster im Unterbewusstsein gespeichert. Hypnose kann direkt dort ansetzen und diese Muster verändern – effektiver als rein bewusste Strategien.',
          },
        ],
      },
      {
        id: 'rauchfrei-bleiben',
        slug: 'rauchfrei-bleiben',
        title: 'Rauchfrei bleiben',
        duration: '10 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/rauchfrei-lektion-5.mp4',
        description: 'Lerne, Rückfälle zu vermeiden, und baue eine dauerhafte rauchfreie Identität auf.',
        content: [
          'Kritische Situationen erkennen: Feiern, Stress, Alkohol, alte Rauchfreunde – Vorbereitung ist der beste Schutz.',
          'Eine rauchfreie Identität aufbauen: "Ich bin Nichtraucher/in" statt "Ich versuche aufzuhören" – die Sprache formt das Selbstbild.',
          'Das hypnovital Audio-Programm "Rauchfrei" verankert die neue Identität im Unterbewusstsein – idealerweise 2-3x pro Woche anhören.',
          'Langfristig dranbleiben: Erfolge feiern, Erspartes sichtbar machen, sich an die Gründe erinnern.',
        ],
        keyPoints: [
          'Kritische Situationen lassen sich vorhersehen und vorbereiten',
          'Die Sprache formt das Selbstbild – "Ich bin Nichtraucher/in" statt "Ich versuche aufzuhören"',
          'Das hypnovital Audio-Programm verankert die rauchfreie Identität im Unterbewusstsein',
          'Regelmässige Anwendung (2-3x pro Woche) verstärkt die Wirkung nachhaltig',
          'Erfolge bewusst wahrnehmen und feiern stärkt die Motivation langfristig',
        ],
        quiz: [
          {
            question: 'Welche Situationen gelten als besonders kritisch für einen Rückfall?',
            options: [
              'Morgendliche Routinen wie Zähneputzen',
              'Feiern, Stress, Alkoholkonsum und Kontakt mit alten Rauchfreunden',
              'Sport und körperliche Anstrengung',
              'Arbeitsmeetings und Präsentationen',
            ],
            correctIndex: 1,
            explanation:
              'Feiern, Stress, Alkohol und der Kontakt mit Menschen, mit denen man früher geraucht hat, sind die häufigsten Rückfall-Situationen. Wer sie kennt und sich vorbereitet, ist geschützt.',
          },
          {
            question: 'Warum ist die Formulierung "Ich bin Nichtraucher/in" wirksamer als "Ich versuche aufzuhören"?',
            options: [
              'Weil es kürzer ist und leichter zu merken',
              'Weil die Sprache das Selbstbild formt und eine klare Identität stärker wirkt als ein Versuch',
              'Weil andere Menschen einen dann ernster nehmen',
              'Weil es eine medizinische Fachbezeichnung ist',
            ],
            correctIndex: 1,
            explanation:
              'Sprache formt das Selbstbild. "Ich bin Nichtraucher/in" ist eine Identitätsaussage und wirkt stärker als "Ich versuche aufzuhören", das Unsicherheit signalisiert.',
          },
          {
            question: 'Wie oft sollte das hypnovital Audio-Programm "Rauchfrei" idealerweise angewendet werden?',
            options: [
              'Einmal pro Monat',
              'Nur wenn man Verlangen spürt',
              'Zwei- bis dreimal pro Woche',
              'Täglich mehrmals',
            ],
            correctIndex: 2,
            explanation:
              'Das hypnovital Audio-Programm entfaltet seine volle Wirkung bei regelmässiger Anwendung – idealerweise zwei- bis dreimal pro Woche, um die rauchfreie Identität im Unterbewusstsein zu verankern.',
          },
        ],
      },
    ],
  },
  {
    id: 'gesund-abnehmen',
    slug: 'gesund-abnehmen',
    title: 'Gesund abnehmen',
    subtitle: 'Essverhalten verstehen, verändern und dauerhaft Gewicht reduzieren',
    description:
      'Dieser Kurs vermittelt ein tiefes Verständnis des eigenen Essverhaltens und zeigt nachhaltige Wege zur Gewichtsreduktion – ohne Diäten, Verbote oder Jojo-Effekt. In fünf Lektionen lernen Teilnehmende, Essgewohnheiten zu durchschauen, achtsam zu essen und langfristig dranzubleiben.',
    targetAudience: 'Mitarbeitende und Privatpersonen',
    category: 'firmen',
    bundledProduct: 'abnehmen',
    isActive: true,
    lessons: [
      {
        id: 'warum-diaeten-scheitern',
        slug: 'warum-diaeten-scheitern',
        title: 'Warum Diäten scheitern',
        duration: '9 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/abnehmen-lektion-1.mp4',
        description: 'Verstehe das Diät-Paradox und warum Einschränkung langfristig zu mehr Gewicht führt.',
        content: [
          'Das Diät-Paradox: Restriktives Essen führt zu Heisshunger, Kontrollverlust und letztlich zu mehr Gewicht als vorher.',
          'Die Set-Point-Theorie: Der Körper verteidigt ein bestimmtes Gewicht und drosselt bei Diäten den Stoffwechsel.',
          'Emotionales Essen und körperlicher Hunger sind zwei verschiedene Dinge – wer sie verwechselt, isst aus den falschen Gründen.',
          'Nachhaltige Veränderung beginnt im Kopf, nicht auf dem Teller.',
        ],
        keyPoints: [
          'Diäten scheitern langfristig bei über 90 % der Menschen',
          'Restriktion führt zu Heisshunger und dem Jojo-Effekt',
          'Der Körper drosselt bei Kalorienreduktion den Stoffwechsel (Set-Point-Theorie)',
          'Emotionales Essen und körperlicher Hunger haben unterschiedliche Ursachen',
          'Nachhaltiges Abnehmen erfordert eine Veränderung der Denkmuster, nicht nur der Ernährung',
        ],
        quiz: [
          {
            question: 'Warum führen Diäten häufig zum Jojo-Effekt?',
            options: [
              'Weil der Körper nach der Diät mehr Nährstoffe braucht',
              'Weil der Körper bei Kalorienreduktion den Stoffwechsel drosselt und danach die Reserven wieder auffüllt',
              'Weil Diäten die Verdauung dauerhaft schädigen',
              'Weil man nach einer Diät automatisch mehr Sport macht',
            ],
            correctIndex: 1,
            explanation:
              'Bei einer Diät drosselt der Körper den Stoffwechsel, um Energie zu sparen. Nach der Diät bleibt der Stoffwechsel zunächst niedrig, während die Kalorienzufuhr steigt – der Jojo-Effekt entsteht.',
          },
          {
            question: 'Was besagt die Set-Point-Theorie?',
            options: [
              'Jeder Mensch hat ein ideales Gewicht laut BMI',
              'Der Körper verteidigt ein bestimmtes Gewicht und passt den Stoffwechsel entsprechend an',
              'Das Gewicht wird ausschliesslich durch Gene bestimmt',
              'Nach dem 30. Lebensjahr kann man nicht mehr abnehmen',
            ],
            correctIndex: 1,
            explanation:
              'Die Set-Point-Theorie besagt, dass der Körper ein bestimmtes Gewicht verteidigt. Bei Diäten drosselt er den Stoffwechsel und steigert den Hunger, um zum Set-Point zurückzukehren.',
          },
          {
            question: 'Was ist der Unterschied zwischen emotionalem Essen und körperlichem Hunger?',
            options: [
              'Emotionales Essen tritt nur abends auf',
              'Körperlicher Hunger entsteht plötzlich, emotionales Essen langsam',
              'Emotionales Essen wird durch Gefühle ausgelöst, körperlicher Hunger durch tatsächlichen Energiebedarf',
              'Es gibt keinen Unterschied',
            ],
            correctIndex: 2,
            explanation:
              'Emotionales Essen wird durch Gefühle wie Stress, Langeweile oder Traurigkeit ausgelöst – unabhängig vom tatsächlichen Energiebedarf. Körperlicher Hunger entsteht, wenn der Körper Nahrung braucht.',
          },
        ],
      },
      {
        id: 'essverhalten-verstehen',
        slug: 'essverhalten-verstehen',
        title: 'Dein Essverhalten verstehen',
        duration: '10 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/abnehmen-lektion-2.mp4',
        description: 'Erkenne deine persönlichen Essmuster und Auslöser für übermässiges Essen.',
        content: [
          'Ein Ernährungstagebuch (was, wann, warum, wie viel) deckt unbewusste Muster auf – ohne zu bewerten.',
          'Typische Auslöser für Überessen: Stress, Langeweile, Belohnungsdenken, sozialer Druck oder strikte Essensregeln.',
          'Bewusstes Essen findet geplant und aufmerksam statt – unbewusstes Essen passiert nebenbei, automatisch und oft ohne echten Hunger.',
          'Muster erkennen heisst nicht, sich zu verurteilen, sondern zu verstehen, was das Essverhalten steuert.',
        ],
        keyPoints: [
          'Ein Ernährungstagebuch macht unbewusste Essmuster sichtbar',
          'Stress, Langeweile und Belohnungsdenken sind häufige Auslöser für Überessen',
          'Bewusstes Essen ist geplant und aufmerksam – unbewusstes Essen passiert automatisch',
          'Strikte Essensregeln können Überessen paradoxerweise fördern',
          'Das Ziel ist Verständnis, nicht Selbstverurteilung',
        ],
        quiz: [
          {
            question: 'Was sollte in einem Ernährungstagebuch festgehalten werden?',
            options: [
              'Nur die Kalorienzahl jeder Mahlzeit',
              'Was, wann, warum und wie viel gegessen wird',
              'Nur die Mahlzeiten, bei denen man zu viel isst',
              'Das Gewicht vor und nach jeder Mahlzeit',
            ],
            correctIndex: 1,
            explanation:
              'Ein Ernährungstagebuch erfasst was, wann, warum und wie viel gegessen wird – ohne Bewertung. So werden unbewusste Muster und Auslöser sichtbar.',
          },
          {
            question: 'Welcher der folgenden Faktoren ist ein häufiger Auslöser für unbewusstes Überessen?',
            options: [
              'Körperliche Anstrengung wie Sport',
              'Langeweile und das Bedürfnis nach Ablenkung',
              'Ausreichend Schlaf',
              'Regelmässige Mahlzeiten',
            ],
            correctIndex: 1,
            explanation:
              'Langeweile ist einer der häufigsten Auslöser für unbewusstes Essen. Wenn keine echte Beschäftigung oder Stimulation vorhanden ist, greifen viele automatisch zu Snacks.',
          },
          {
            question: 'Warum können strikte Essensregeln kontraproduktiv sein?',
            options: [
              'Weil sie die Verdauung stören',
              'Weil sie zu teuer sind',
              'Weil Verbote Heisshunger und Kontrollverlust fördern können',
              'Weil sie zu viel Zeit in Anspruch nehmen',
            ],
            correctIndex: 2,
            explanation:
              'Strikte Regeln und Verbote erzeugen psychischen Druck. Sobald die Kontrolle nachlässt, kommt es oft zu Heisshunger und Überessen – genau das Gegenteil der Absicht.',
          },
        ],
      },
      {
        id: 'ernaehrung-ohne-verbote',
        slug: 'ernaehrung-ohne-verbote',
        title: 'Ernährung ohne Verbote',
        duration: '9 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/abnehmen-lektion-3.mp4',
        description: 'Lerne einfache Ernährungsprinzipien und achtsames Essen – ohne komplizierte Diätpläne.',
        content: [
          'Das 80/20-Prinzip: 80 % nährstoffreich und ausgewogen essen, 20 % geniessen ohne schlechtes Gewissen.',
          'Achtsam essen: Langsam essen, bewusst kauen, schmecken – das Sättigungsgefühl braucht 15-20 Minuten.',
          'Einfache Grundprinzipien statt komplexer Diäten: mehr Gemüse, ausreichend Protein, genug Wasser, regelmässige Mahlzeiten.',
          'Genuss ohne Schuld: Kein Lebensmittel ist "verboten" – die Menge und das Bewusstsein machen den Unterschied.',
        ],
        keyPoints: [
          'Das 80/20-Prinzip erlaubt Genuss ohne schlechtes Gewissen',
          'Langsam essen gibt dem Sättigungsgefühl Zeit (15-20 Minuten)',
          'Einfache Prinzipien sind nachhaltiger als komplexe Diätpläne',
          'Kein Lebensmittel ist verboten – Bewusstsein und Menge entscheiden',
          'Achtsames Essen verbindet Genuss mit natürlicher Sättigung',
        ],
        quiz: [
          {
            question: 'Was bedeutet das 80/20-Prinzip bei der Ernährung?',
            options: [
              '80 % der Kalorien morgens essen, 20 % abends',
              '80 % nährstoffreich und ausgewogen essen, 20 % frei geniessen',
              '80 % Kohlenhydrate, 20 % Fett',
              '80 % kochen, 20 % auswärts essen',
            ],
            correctIndex: 1,
            explanation:
              'Das 80/20-Prinzip bedeutet: Den grössten Teil der Ernährung bewusst und ausgewogen gestalten, aber 20 % Raum für Genuss lassen – ohne Verbote oder schlechtes Gewissen.',
          },
          {
            question: 'Warum hilft langsames Essen beim Abnehmen?',
            options: [
              'Weil der Magen sich langsamer füllt',
              'Weil das Sättigungsgefühl 15-20 Minuten braucht, um im Gehirn anzukommen',
              'Weil langsames Essen mehr Kalorien verbrennt',
              'Weil man beim langsamen Essen weniger kaut',
            ],
            correctIndex: 1,
            explanation:
              'Das Sättigungsgefühl braucht 15-20 Minuten, bis es vom Magen ans Gehirn gemeldet wird. Wer langsam isst, spürt die Sättigung rechtzeitig und isst automatisch weniger.',
          },
          {
            question: 'Was ist nachhaltiger als ein komplexer Diätplan?',
            options: [
              'Möglichst wenig essen',
              'Einfache Grundprinzipien wie mehr Gemüse, ausreichend Protein und genug Wasser',
              'Jeden Tag etwas anderes ausprobieren',
              'Nur noch Superfoods essen',
            ],
            correctIndex: 1,
            explanation:
              'Einfache, alltagstaugliche Grundprinzipien sind nachhaltiger als komplexe Diätpläne, weil sie leichter umzusetzen und langfristig beizubehalten sind.',
          },
        ],
      },
      {
        id: 'bewegung-und-mindset',
        slug: 'bewegung-und-mindset',
        title: 'Bewegung und Mindset',
        duration: '10 Min.',
        videoUrl: 'https://iigtthdlumomrybyyzuy.supabase.co/storage/v1/object/public/audio/academy/abnehmen-lektion-4.mp4',
        description: 'Finde Bewegung, die zu deinem Leben passt, und arbeite an deinem Selbstbild rund um Körper und Gewicht.',
        content: [
          'Bewegung muss Spass machen und zum Alltag passen – Spaziergänge, Treppen, Velo fahren zählen genauso wie Sport.',
          'Körperbild und Selbstakzeptanz: Veränderung beginnt mit Respekt für den eigenen Körper, nicht mit Selbstablehnung.',
          'Das Unterbewusstsein steuert Essverhalten, Motivation und Selbstbild – bewusste Vorsätze allein reichen oft nicht.',
          'Ein positives Mindset ist kein Luxus, sondern die Grundlage für nachhaltige Veränderung.',
        ],
        keyPoints: [
          'Alltagsbewegung ist genauso wirksam wie strukturierter Sport',
          'Bewegung muss Spass machen, damit sie langfristig beibehalten wird',
          'Selbstakzeptanz ist die Basis für nachhaltige Veränderung, nicht Selbstablehnung',
          'Das Unterbewusstsein steuert Essverhalten, Motivation und Selbstbild',
          'Bewusste Vorsätze brauchen die Unterstützung des Unterbewusstseins, um zu wirken',
        ],
        quiz: [
          {
            question: 'Warum ist Alltagsbewegung oft wirksamer als ein intensives Sportprogramm?',
            options: [
              'Weil Alltagsbewegung mehr Kalorien verbrennt',
              'Weil sie leichter in den Alltag integrierbar ist und deshalb langfristig beibehalten wird',
              'Weil Sport schädlich für die Gelenke ist',
              'Weil der Körper nur auf langsame Bewegung reagiert',
            ],
            correctIndex: 1,
            explanation:
              'Alltagsbewegung wie Spaziergänge oder Treppensteigen lässt sich leicht in den Alltag integrieren und wird deshalb langfristig beibehalten – das macht sie nachhaltig wirksamer als ein Sportprogramm, das nach wenigen Wochen aufgegeben wird.',
          },
          {
            question: 'Warum beginnt nachhaltige Veränderung mit Selbstakzeptanz?',
            options: [
              'Weil man sich nur verändert, wenn man sich nicht mag',
              'Weil Selbstablehnung zu Frustessen und Aufgeben führt, während Selbstakzeptanz die Grundlage für positive Veränderung ist',
              'Weil Selbstakzeptanz automatisch zum Abnehmen führt',
              'Weil Ärzte Selbstakzeptanz empfehlen',
            ],
            correctIndex: 1,
            explanation:
              'Selbstablehnung erzeugt Stress und führt oft zu Frustessen. Wer den eigenen Körper respektiert, verändert sich aus positiver Motivation heraus – das ist nachhaltiger.',
          },
          {
            question: 'Welche Rolle spielt das Unterbewusstsein beim Abnehmen?',
            options: [
              'Es hat keinen Einfluss auf das Gewicht',
              'Es steuert nur den Stoffwechsel',
              'Es steuert Essverhalten, Motivation und Selbstbild weitgehend automatisch',
              'Es verhindert jede Gewichtsabnahme',
            ],
            correctIndex: 2,
            explanation:
              'Das Unterbewusstsein steuert einen grossen Teil des Essverhaltens, der Motivation und des Selbstbilds automatisch. Deshalb reichen bewusste Vorsätze allein oft nicht für eine dauerhafte Veränderung.',
          },
        ],
      },
      {
        id: 'dauerhaft-dranbleiben',
        slug: 'dauerhaft-dranbleiben',
        title: 'Dauerhaft dranbleiben',
        duration: '10 Min.',
        description: 'Lerne, nachhaltige Gewohnheiten aufzubauen, Rückschläge zu bewältigen und langfristig dranzubleiben.',
        content: [
          'Nachhaltige Gewohnheiten: Kleine, konkrete Schritte statt radikaler Umstellungen – neue Routinen brauchen 21-66 Tage.',
          'Rückschläge gehören dazu: Ein schlechter Tag ist kein Scheitern – entscheidend ist, wie man am nächsten Tag weitergeht.',
          'Das hypnovital Audio-Programm "Abnehmen" verankert das neue Essverhalten und Selbstbild im Unterbewusstsein – 2-3x pro Woche ideal.',
          'Langfristiges Mindset: Es geht nicht um Perfektion, sondern um Fortschritt und eine neue Beziehung zum eigenen Körper.',
        ],
        keyPoints: [
          'Kleine, konkrete Schritte sind nachhaltiger als radikale Umstellungen',
          'Neue Gewohnheiten brauchen 21 bis 66 Tage, um sich zu festigen',
          'Rückschläge sind normal und kein Grund aufzugeben',
          'Das hypnovital Audio-Programm verankert Veränderungen im Unterbewusstsein',
          'Fortschritt statt Perfektion ist der Schlüssel zu dauerhaftem Erfolg',
        ],
        quiz: [
          {
            question: 'Wie lange dauert es, bis eine neue Gewohnheit sich festigt?',
            options: [
              '3 bis 5 Tage',
              '7 bis 14 Tage',
              '21 bis 66 Tage',
              'Mindestens ein Jahr',
            ],
            correctIndex: 2,
            explanation:
              'Forschung zeigt, dass neue Gewohnheiten 21 bis 66 Tage brauchen, um sich zu festigen. Geduld und Kontinuität sind deshalb wichtiger als Perfektion.',
          },
          {
            question: 'Wie sollte man mit einem Rückschlag beim Abnehmen umgehen?',
            options: [
              'Die ganze Strategie verwerfen und eine neue Diät beginnen',
              'Sich dafür bestrafen und am nächsten Tag nichts essen',
              'Akzeptieren, dass Rückschläge dazugehören, und am nächsten Tag weitermachen',
              'Aufgeben, weil es offensichtlich nicht funktioniert',
            ],
            correctIndex: 2,
            explanation:
              'Rückschläge gehören zum Prozess. Entscheidend ist nicht der einzelne schlechte Tag, sondern wie man am nächsten Tag weitergeht. Schuld und Bestrafung führen nur zu mehr emotionalem Essen.',
          },
          {
            question: 'Wie oft sollte das hypnovital Audio-Programm "Abnehmen" idealerweise angewendet werden?',
            options: [
              'Einmal pro Monat',
              'Nur bei Heisshunger',
              'Zwei- bis dreimal pro Woche',
              'Einmal im Quartal',
            ],
            correctIndex: 2,
            explanation:
              'Das hypnovital Audio-Programm entfaltet seine volle Wirkung bei regelmässiger Anwendung – idealerweise zwei- bis dreimal pro Woche, um das neue Essverhalten und Selbstbild im Unterbewusstsein zu verankern.',
          },
        ],
      },
    ],
  },
]

// Hilfsfunktionen
export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}

export function getCoursesByCategory(category: 'partner' | 'firmen'): Course[] {
  return courses.filter((c) => c.category === category)
}
