// ============================================================
// hypnovital – Blog-Artikel
// Einfache TypeScript-Struktur, später auf Sanity migrierbar
// ============================================================

export type BlogSection =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string }

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string           // ISO: '2026-03-11'
  readingTime: number    // Minuten
  tags: string[]
  intro: string
  sections: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'warum-neujahrsvorsaetze-scheitern',
    title: 'Warum Neujahrsvorsätze scheitern – und wie dein Unterbewusstsein den Unterschied macht',
    description:
      'Jedes Jahr dieselbe Geschichte: grosse Pläne, wenig Umsetzung. Doch das liegt nicht an fehlendem Willen – sondern daran, dass wir am falschen Ort ansetzen. Wie Veränderung wirklich funktioniert.',
    date: '2026-01-10',
    readingTime: 6,
    tags: ['Gewohnheiten', 'Unterbewusstsein', 'Motivation'],
    intro:
      'Anfang Januar ist die Energie hoch. Die Liste der Vorsätze lang. Sechs Wochen später sieht die Realität meistens anders aus. Das ist keine Frage des Charakters – und kein Versagen. Es ist ein Problem der Methode. Wer versucht, mit dem bewussten Verstand allein tief verwurzelte Gewohnheiten zu ändern, kämpft gegen den grössten Teil von sich selbst. Und verliert meistens.',
    sections: [
      {
        type: 'heading',
        text: 'Das Verhältnis von Bewusstsein und Unterbewusstsein',
      },
      {
        type: 'paragraph',
        text: 'Stell dir deinen Geist als Eisberg vor. Das Bewusstsein – deine Gedanken, deine Pläne, deine Vorsätze – ist die Spitze, die sichtbar aus dem Wasser ragt. Das Unterbewusstsein ist der riesige, unsichtbare Teil darunter. Schätzungen gehen davon aus, dass über 90 Prozent unseres Verhaltens, unserer Reaktionen und Entscheidungen durch das Unterbewusstsein gesteuert werden.',
      },
      {
        type: 'paragraph',
        text: 'Das Unterbewusstsein arbeitet wie ein Autopilot: effizient, schnell, und immer auf Basis eingefahrener Muster. Es liebt das Vertraute – auch dann, wenn das Vertraute dir nicht guttut. Genau deshalb reicht eine bewusste Entscheidung am 1. Januar nicht aus, um eine Gewohnheit dauerhaft zu verändern. Du kämpfst mit 10 Prozent gegen 90.',
      },
      {
        type: 'callout',
        text: 'Willenskraft ist endlich. Das Unterbewusstsein nicht. Nachhaltige Veränderung entsteht dort, wo Gewohnheiten wirklich verankert sind – unterhalb der bewussten Wahrnehmung.',
      },
      {
        type: 'heading',
        text: 'Warum Vorsätze trotzdem immer wieder scheitern',
      },
      {
        type: 'list',
        items: [
          'Zu weit, zu schnell: Grosse Ziele ohne konkrete Zwischenschritte überfordern das System. Das Unterbewusstsein reagiert mit Widerstand.',
          'Kein emotionaler Anker: Rein rationale Entscheidungen («ich sollte abnehmen») erreichen das Unterbewusstsein kaum. Es braucht ein echtes, gefühltes Warum.',
          'Das alte Selbstbild bleibt: Wer sich innerlich weiterhin als «jemand, der nicht Sport treibt» sieht, wird unbewusst immer wieder dorthin zurückkehren – egal wie viele Vorsätze er fasst.',
          'Belohnungssysteme fehlen: Das Gehirn lernt durch Wiederholung und positive Verstärkung. Wer nur auf das Endziel schaut, verpasst die kleinen Erfolgserlebnisse, die das neue Verhalten festigen.',
          'Stressreaktion: Sobald der Alltagsstress steigt, greift das Unterbewusstsein auf bewährte Strategien zurück – nicht auf neue, noch ungesicherte Gewohnheiten.',
        ],
      },
      {
        type: 'heading',
        text: 'Was wirklich hilft: Veränderung im Unterbewusstsein',
      },
      {
        type: 'paragraph',
        text: 'Die gute Nachricht: Das Unterbewusstsein ist lernfähig. Es kann neue Muster, neue Überzeugungen und ein neues Selbstbild entwickeln – wenn man die richtigen Zugänge nutzt. Hypnose ist einer der direktesten davon. Im Trancezustand ist das Unterbewusstsein besonders empfänglich für neue Suggestionen und Bilder. Die kritische innere Stimme tritt in den Hintergrund, das Lernen passiert tiefer und nachhaltiger.',
      },
      {
        type: 'paragraph',
        text: 'Was dabei entscheidend ist: Es geht nicht darum, sich etwas einzureden. Es geht darum, das Selbstbild wirklich zu verändern. Wer sich nicht nur als «jemand, der gerade nicht raucht», sondern als «Nichtraucher» erlebt – der lebt es auch. Hypnose hilft, diese Verschiebung zu verankern, bevor die neue Verhaltensweise durch Wiederholung gefestigt ist.',
      },
      {
        type: 'heading',
        text: 'Drei Prinzipien für nachhaltige Veränderung',
      },
      {
        type: 'list',
        items: [
          'Klein anfangen, konsequent bleiben: Eine kleine, täglich wiederholte Handlung verändert das Gehirn mehr als ein grosser, unrealistischer Plan, der nach zwei Wochen abbricht.',
          'Das Warum klären: Was bedeutet diese Veränderung für dich wirklich? Nicht die offensichtliche Antwort – die tiefere. Gesundheit? Freiheit? Selbstrespekt? Je stärker das emotionale Warum, desto stabiler die Motivation.',
          'Das Unterbewusstsein einbinden: Nutze Entspannungsübungen, Visualisierungen oder geführte Hypnose-Audio-Programme, um neue Muster unterhalb des Bewusstseins zu verankern. Was oben entschieden wird, muss unten gefestigt werden.',
        ],
      },
      {
        type: 'callout',
        text: 'Veränderung beginnt nicht im Kalender – sie beginnt im Unterbewusstsein. Unsere Audio-Programme begleiten dich dabei, neue Gewohnheiten dort zu verankern, wo sie wirklich halten.',
      },
    ],
  },
  {
    slug: 'schlafprobleme-hypnose',
    title: 'Schlafstörungen natürlich überwinden: Was Hypnose wirklich bewirkt',
    description:
      'Millionen Menschen schlafen schlecht – und greifen zu Tabletten, obwohl es einen natürlicheren Weg gibt. Wie Hypnose und Tiefenentspannung die Schlafqualität nachhaltig verbessern können.',
    date: '2026-02-15',
    readingTime: 5,
    tags: ['Schlaf', 'Entspannung', 'Gesundheit'],
    intro:
      'Schlechter Schlaf ist mehr als ein Komfortproblem. Wer Nacht für Nacht nicht richtig zur Ruhe kommt, leidet tagsüber unter Konzentrationsproblemen, gereizter Stimmung und langfristig unter ernsthaften gesundheitlichen Folgen. Die meisten Menschen suchen nach schnellen Lösungen – Schlafmittel, Schlaf-Apps, Melatonin. Doch was, wenn das Problem nicht im Körper beginnt, sondern im Kopf?',
    sections: [
      {
        type: 'heading',
        text: 'Warum wir nicht schlafen können – obwohl wir müde sind',
      },
      {
        type: 'paragraph',
        text: 'Das Paradoxe an Schlafproblemen: Oft sind wir körperlich erschöpft, aber der Geist lässt uns nicht loslassen. Gedanken kreisen, Sorgen tauchen auf, die To-do-Liste für morgen rollt durch den Kopf. Das Nervensystem bleibt im Aktivierungsmodus – auch dann, wenn wir längst im Bett liegen.',
      },
      {
        type: 'paragraph',
        text: 'Der Grund liegt im Zusammenspiel von Sympathikus und Parasympathikus – dem «Gaspedal» und der «Bremse» unseres autonomen Nervensystems. Chronischer Stress, Reizüberflutung und mentale Überbelastung halten den Sympathikus dauerhaft aktiv. Der Körper denkt: Gefahr. Und Gefahr schläft nicht. Schlaf beginnt erst, wenn das Nervensystem wirklich umschaltet – in den Zustand der Ruhe und Sicherheit.',
      },
      {
        type: 'callout',
        text: 'Schlafprobleme sind selten ein körperliches Problem allein. Sie beginnen fast immer im Geist – und lassen sich deshalb oft am effektivsten dort behandeln.',
      },
      {
        type: 'heading',
        text: 'Was Hypnose mit Schlaf zu tun hat',
      },
      {
        type: 'paragraph',
        text: 'Hypnose und Schlaf sind eng verwandt – aber nicht dasselbe. Beide Zustände teilen bestimmte Gehirnwellenmuster (vor allem Theta-Wellen), und der Übergang in die Trance ähnelt dem Einschlafen. Doch während beim Schlaf das Bewusstsein abschaltet, bleibt es in der Hypnose fokussiert aktiv.',
      },
      {
        type: 'paragraph',
        text: 'Dieser Zustand ist therapeutisch wertvoll: Im Trancezustand schaltet der Körper in den Parasympathikus-Modus. Herzrate und Atemfrequenz sinken, Cortisol – das Stresshormon – nimmt ab, die Muskeln entspannen sich tief. Das Nervensystem erlebt genau das, was es abends braucht, um in den Schlaf zu gleiten: echte Sicherheit und Loslassen.',
      },
      {
        type: 'heading',
        text: 'Was die Forschung sagt',
      },
      {
        type: 'paragraph',
        text: 'Hypnose bei Schlafproblemen ist kein Mythos. Mehrere Studien – unter anderem von der Universität Zürich – zeigen, dass Probanden nach hypnotherapeutischen Sitzungen messbar länger im Tiefschlaf verblieben und sich erholter fühlten. Die Wirkung ist vergleichbar mit kognitiver Verhaltenstherapie für Insomnie (CBT-I), die heute als Goldstandard in der Schlafmedizin gilt – und in manchen Fällen sogar wirkungsvoller.',
      },
      {
        type: 'heading',
        text: 'Was bei Schlafproblemen wirklich hilft',
      },
      {
        type: 'list',
        items: [
          'Regelmässige Entspannungsübungen: Schon 10 Minuten geführte Entspannung vor dem Schlafen signalisieren dem Nervensystem: jetzt ist Ruhe.',
          'Gedankenkarussell stoppen: Hypnose-Audio-Programme helfen, den Gedankenstrom zu unterbrechen und den Geist sanft auf Schlaf auszurichten.',
          'Das Einschlafritual aufbauen: Das Gehirn liebt Vorhersehbarkeit. Ein gleiches Ritual jeden Abend – Licht dimmen, Entspannungsaudio starten – trainiert den Körper, auf Abruf umzuschalten.',
          'Schlafdruck reduzieren: Paradoxerweise verschlimmert die Angst, nicht schlafen zu können, die Schlaflosigkeit. Tiefenentspannung hilft, diese Anspannung zu lösen.',
          'Langfristige Stressbearbeitung: Wer chronisch schlecht schläft, sollte die Ursache angehen – nicht nur das Symptom. Coaching und Hypnosetherapie setzen dort an.',
        ],
      },
      {
        type: 'callout',
        text: 'Unser Audio-Programm «Tief schlafen» führt dich Schritt für Schritt in tiefe Entspannung – und bereitet Körper und Geist auf erholsamen Schlaf vor. Kein Einschlafen erzwingen. Loslassen lernen.',
      },
    ],
  },
  {
    slug: 'was-ist-hypnose',
    title: 'Was ist Hypnose – und was ist es nicht?',
    description:
      'Hypnose wird oft missverstanden. Dieser Artikel räumt mit den grössten Mythen auf und erklärt, wie Hypnose wirklich funktioniert – wissenschaftlich, verständlich, ohne Hokuspokus.',
    date: '2026-03-11',
    readingTime: 6,
    tags: ['Hypnose', 'Grundlagen', 'Mythen'],
    intro:
      'Wenn das Wort «Hypnose» fällt, denken viele sofort an Bühnenshows, bei denen Menschen wie Hühner gackern oder willenlos Befehle ausführen. Das ist verständlich – aber es hat mit therapeutischer Hypnose so viel zu tun wie ein Gruselfilm mit echter Medizin. Höchste Zeit, das zu klären.',
    sections: [
      {
        type: 'heading',
        text: 'Was Hypnose wirklich ist',
      },
      {
        type: 'paragraph',
        text: 'Hypnose ist ein natürlicher Bewusstseinszustand – eine Form tiefer, fokussierter Entspannung, in der die Aufmerksamkeit nach innen gelenkt wird. Diesen Zustand kennst du bereits: das Gefühl kurz vor dem Einschlafen, das Aufwachen, bei dem du noch halb im Traum bist, oder das vollständige Versunken-Sein in ein Buch oder einen Film, während die Aussenwelt für einen Moment verschwindet. Das ist Trance – und Trance ist der Kern der Hypnose.',
      },
      {
        type: 'paragraph',
        text: 'In diesem Zustand ist das Unterbewusstsein besonders empfänglich für neue Perspektiven, Bilder und Suggestionen. Der rationale, kontrollierende Teil des Geistes tritt etwas in den Hintergrund – nicht weil er ausgeschaltet wird, sondern weil er sich entspannt. Dadurch können tief verankerte Muster, Überzeugungen und Gewohnheiten leichter erreicht und verändert werden.',
      },
      {
        type: 'callout',
        text: 'Hypnose ist kein Schlaf, keine Magie und kein Kontrollverlust – sondern ein natürlicher Zustand fokussierter Innenschau, den wir alle täglich erleben.',
      },
      {
        type: 'heading',
        text: 'Was Hypnose nicht ist – die grössten Mythen',
      },
      {
        type: 'list',
        items: [
          'Kein Kontrollverlust: Du bist jederzeit ansprechbar, weisst wo du bist und kannst die Sitzung jederzeit selbst beenden. Niemand kann dich in Hypnose zu etwas bringen, das du nicht willst.',
          'Kein Schlaf: Du schläfst nicht. Viele Menschen sind sogar überrascht, wie klar und wach sie sich während einer Sitzung fühlen – bei gleichzeitiger tiefer körperlicher Entspannung.',
          'Keine Magie und kein Hokuspokus: Hypnose wirkt über bekannte psychologische und neurologische Mechanismen. Sie wird an Universitäten erforscht und ist in der klinischen Psychologie anerkannt.',
          'Kein Willensverlust: Du führst keine Befehle aus, gegen die du dich sträubst. Das, was du in Bühnenshows siehst, funktioniert nur mit Menschen, die freiwillig mitmachen und Spass daran haben – das ist Entertainment, keine Therapie.',
          'Keine Wunderheilung: Hypnose ist ein wirksames Werkzeug – aber kein Allheilmittel. Sie arbeitet am besten, wenn du motiviert bist und aktiv an einer Veränderung mitarbeitest.',
        ],
      },
      {
        type: 'heading',
        text: 'Wie Hypnose in der Praxis wirkt',
      },
      {
        type: 'paragraph',
        text: 'In einer hypnovital® Sitzung wirst du durch gesprochene Worte, Bilder und gezielte Suggestionen in einen tiefen Entspannungszustand geführt. Dein Körper entspannt sich vollständig, dein Geist bleibt fokussiert. In diesem Zustand arbeiten wir mit deinem Unterbewusstsein – dort, wo Gewohnheiten, Überzeugungen und emotionale Reaktionen ihren Ursprung haben.',
      },
      {
        type: 'paragraph',
        text: 'Das Ergebnis: Alte, hinderliche Muster können gelöst, neue, stärkende Perspektiven verankert werden. Nicht durch Willenskraft – sondern durch echte Veränderung im Unterbewusstsein. Darum wirkt Hypnose oft dort, wo andere Methoden scheitern.',
      },
      {
        type: 'heading',
        text: 'Für wen ist Hypnose geeignet?',
      },
      {
        type: 'paragraph',
        text: 'Die kurze Antwort: für die meisten Menschen. Hypnose kann bei einer Vielzahl von Themen unterstützen – von Stressabbau und Schlafproblemen über Ängste und Lampenfieber bis hin zu Gewichtsreduktion, Raucherentwöhnung oder der Stärkung von Selbstvertrauen und Leistungsfähigkeit.',
      },
      {
        type: 'list',
        items: [
          'Stressmanagement und Burnout-Prävention',
          'Schlafprobleme und innere Unruhe',
          'Ängste, Lampenfieber und Prüfungsstress',
          'Gewohnheiten verändern (Rauchen, Ernährung, Sportmotivation)',
          'Selbstvertrauen und mentale Stärke aufbauen',
          'Leistung im Beruf, Sport oder auf der Bühne steigern',
        ],
      },
      {
        type: 'paragraph',
        text: 'Einzige Voraussetzung: die Bereitschaft, sich darauf einzulassen. Hypnose funktioniert nicht gegen deinen Willen – aber mit deinem Willen kann sie aussergewöhnliche Ergebnisse erzielen.',
      },
      {
        type: 'callout',
        text: 'Neugierig geworden? Erlebe Hypnose selbst – mit unseren Audio-Programmen kannst du jederzeit zuhause in die Welt der Selbsthypnose eintauchen.',
      },
    ],
  },

  // ── April ────────────────────────────────────────────────
  {
    slug: 'lampenfieber-ueberwinden',
    title: 'Lampenfieber überwinden: Was dein Kopf dagegen tun kann',
    description:
      'Herzklopfen, zitternde Stimme, Blackout – Lampenfieber kennen fast alle. Doch die wenigsten wissen, dass es kein Charakter-Defizit ist, sondern ein lösbares Problem. Wie Hypnose dabei hilft.',
    date: '2026-04-05',
    readingTime: 6,
    tags: ['Lampenfieber', 'Selbstvertrauen', 'Leistung'],
    intro:
      'Du kennst das Gefühl: Die Präsentation steht bevor, du weisst den Stoff in- und auswendig – und trotzdem versagt der Körper. Herz rast, Hände schwitzen, die Stimme zittert. Lampenfieber ist eine der häufigsten Ängste überhaupt. Die gute Nachricht: Es ist kein Schicksal.',
    sections: [
      {
        type: 'heading',
        text: 'Was im Körper passiert – und warum',
      },
      {
        type: 'paragraph',
        text: 'Lampenfieber ist eine Stressreaktion – dieselbe, die unsere Vorfahren vor einem Säbelzahntiger gerettet hat. Das Gehirn bewertet eine Situation als bedrohlich, der Körper schaltet in den Kampf-oder-Flucht-Modus: Adrenalin steigt, der Herzschlag beschleunigt sich, die Muskulatur spannt sich an. Optimal für Flucht. Suboptimal für einen Vortrag.',
      },
      {
        type: 'paragraph',
        text: 'Das Problem liegt nicht im Auftritt selbst, sondern in der Bewertung davor. Das Unterbewusstsein hat irgendwann entschieden: Öffentliches Auftreten ist gefährlich. Diese Überzeugung – meist aus frühen Erfahrungen gespeist – läuft automatisch ab, lange bevor der rationale Verstand eingreifen kann.',
      },
      {
        type: 'callout',
        text: 'Lampenfieber ist keine Persönlichkeitseigenschaft. Es ist eine erlernte Reaktion – und was gelernt wurde, kann verändert werden.',
      },
      {
        type: 'heading',
        text: 'Der Unterschied zwischen Nervosität und Angst',
      },
      {
        type: 'paragraph',
        text: 'Nicht jedes Lampenfieber ist gleich. Eine gewisse Aktivierung vor einem Auftritt ist sogar hilfreich – sie schärft die Aufmerksamkeit und macht wacher. Problematisch wird es, wenn die Anspannung so gross wird, dass sie die Leistung blockiert: Blackouts, Stottern, Vermeidungsverhalten. Hier setzt die Arbeit mit Hypnose an.',
      },
      {
        type: 'heading',
        text: 'Wie Hypnose bei Lampenfieber wirkt',
      },
      {
        type: 'list',
        items: [
          'Umprogrammierung der Stressreaktion: Im Trancezustand wird die Situation des Auftretens neu bewertet – nicht als Bedrohung, sondern als Gelegenheit. Diese neue Bewertung verankert sich im Unterbewusstsein.',
          'Mentales Probehandeln: In der Hypnose kannst du Auftritte detailliert durcherleben – entspannt, fokussiert, erfolgreich. Das Gehirn speichert diese Erfahrung als real ab und baut ein neues Referenzerlebnis auf.',
          'Körperliche Entspannung trainieren: Hypnose lehrt den Körper, auf Abruf in einen Zustand der Ruhe zu wechseln. Mit etwas Übung gelingt das auch kurz vor einem Auftritt.',
          'Ressourcen aktivieren: Positive Erfahrungen, in denen du dich sicher und kompetent gefühlt hast, werden gezielt aktiviert und mit der Auftrittssituation verknüpft.',
        ],
      },
      {
        type: 'heading',
        text: 'Was du sofort tun kannst',
      },
      {
        type: 'paragraph',
        text: 'Kurzfristig hilft tiefes, langsames Atmen – es aktiviert direkt den Parasympathikus und bremst die Stressreaktion. Langfristig ist regelmässiges mentales Training entscheidend: Visualisierungen, Entspannungsübungen und gezielte Hypnose-Arbeit bauen über Wochen und Monate ein neues Selbstbild als sicherer Redner auf.',
      },
      {
        type: 'callout',
        text: 'Unser Audio-Programm «Lampenfieber lösen» begleitet dich Schritt für Schritt – für mehr Klarheit, Präsenz und Selbstsicherheit vor jedem Publikum.',
      },
    ],
  },

  // ── Mai ──────────────────────────────────────────────────
  {
    slug: 'rauchfrei-mit-hypnose',
    title: 'Rauchfrei mit Hypnose: Was wirklich dahintersteckt',
    description:
      'Hypnose gilt als eine der wirksamsten Methoden zur Raucherentwöhnung – wirksamer als Nikotinpflaster, oft wirksamer als reine Willenskraft. Warum das so ist, erklärt dieser Artikel.',
    date: '2026-05-05',
    readingTime: 5,
    tags: ['Raucherentwöhnung', 'Gewohnheiten', 'Gesundheit'],
    intro:
      'Die meisten Raucher wollen aufhören. Viele haben es schon mehrfach versucht – mit Pflastern, Kaugummis, Apps, Willenskraft. Und viele sind gescheitert. Nicht weil sie zu schwach sind, sondern weil sie am falschen Ort angesetzt haben. Rauchen ist keine körperliche Abhängigkeit allein – es ist ein mentales Muster.',
    sections: [
      {
        type: 'heading',
        text: 'Warum Willenskraft allein nicht reicht',
      },
      {
        type: 'paragraph',
        text: 'Nikotin macht körperlich abhängig – das ist bekannt. Doch nach wenigen Tagen ist der körperliche Entzug überstanden. Was dann bleibt, ist die psychische Bindung: das Ritual der Zigarette zum Kaffee, nach dem Essen, bei Stress. Das Rauchen ist ins Unterbewusstsein eingebrannt als Strategie zur Entspannung, Belohnung oder Stressbewältigung. Und das Unterbewusstsein gibt diese Strategie nicht auf, weil der rationale Verstand «Aufhören» sagt.',
      },
      {
        type: 'callout',
        text: 'Rauchen aufzuhören bedeutet nicht, etwas zu verlieren. Es bedeutet, eine Strategie zu ersetzen – durch eine bessere. Genau dabei hilft Hypnose.',
      },
      {
        type: 'heading',
        text: 'Was die Forschung sagt',
      },
      {
        type: 'paragraph',
        text: 'Eine Meta-Analyse der University of Iowa untersuchte über 600 Studien zur Raucherentwöhnung. Das Ergebnis: Hypnose war mit Abstand die wirksamste Einzelmethode – dreimal wirksamer als Nikotinpflaster und fünfmal wirksamer als reine Willenskraft. Entscheidend ist dabei nicht eine Einzelsitzung, sondern die Kombination aus gezielter Hypnosearbeit und mentalem Selbsttraining.',
      },
      {
        type: 'heading',
        text: 'Wie Hypnose bei der Raucherentwöhnung vorgeht',
      },
      {
        type: 'list',
        items: [
          'Neues Selbstbild verankern: Im Trancezustand wird das Selbstbild vom «Raucher» zum «Nichtraucher» verschoben. Wer sich innerlich als Nichtraucher erlebt, verhält sich auch so.',
          'Trigger entschärfen: Die spezifischen Auslöser (Kaffee, Stress, Pausen) werden im Unterbewusstsein neu verknüpft – mit Entspannung statt mit Zigaretten.',
          'Verlangen reduzieren: Suggestionen im Trancezustand können das Verlangen nach Nikotin messbar verringern, indem sie die emotionale Bindung an das Rauchen lösen.',
          'Alternative Strategien etablieren: Statt Zigarette als Stresslöser lernt das Unterbewusstsein neue, gesündere Strategien – tiefes Atmen, kurze mentale Auszeiten, Bewegung.',
        ],
      },
      {
        type: 'heading',
        text: 'Was du für den Erfolg mitbringen musst',
      },
      {
        type: 'paragraph',
        text: 'Hypnose ist kein Zaubertrick. Sie braucht deine Bereitschaft. Wer aufhören will – nicht weil der Partner es fordert, sondern weil er es selbst will – hat die beste Ausgangslage. Die Motivation muss von innen kommen. Wenn sie da ist, kann Hypnose den Weg drastisch abkürzen.',
      },
      {
        type: 'callout',
        text: 'Unser Audio-Programm «Rauchfrei» unterstützt dich täglich dabei, das neue Selbstbild als Nichtraucher tief zu verankern – Schritt für Schritt, in deinem eigenen Tempo.',
      },
    ],
  },

  // ── Juni ─────────────────────────────────────────────────
  {
    slug: 'stressmanagement-fuehrungskraefte',
    title: 'Stressmanagement für Führungskräfte: Warum Resilienz kein Zufallsprodukt ist',
    description:
      'Führungskräfte stehen unter Dauerdruck. Wer Resilienz dem Zufall überlässt, riskiert langfristig Burnout – und schlechte Entscheidungen. Wie mentales Training den Unterschied macht.',
    date: '2026-06-05',
    readingTime: 6,
    tags: ['Stressmanagement', 'Führung', 'Resilienz'],
    intro:
      'Eine Führungskraft trifft täglich Hunderte von Entscheidungen, managt Erwartungen von oben und unten, navigiert Konflikte und trägt Verantwortung – oft rund um die Uhr. Wer dabei glaubt, Resilienz sei eine angeborene Eigenschaft, die man entweder hat oder nicht, irrt sich. Resilienz ist eine Fähigkeit. Und Fähigkeiten kann man trainieren.',
    sections: [
      {
        type: 'heading',
        text: 'Das Problem mit dem «einfach durchhalten»',
      },
      {
        type: 'paragraph',
        text: 'Viele Führungskräfte funktionieren jahrelang unter hohem Druck – bis der Körper oder die Psyche die Reissleine zieht. Burnout, Herzprobleme, chronische Erschöpfung. Das Tückische: Bis kurz vor dem Zusammenbruch sieht es von aussen oft noch gut aus. Die Person liefert, ist präsent, entscheidet. Innerlich läuft längst der Reservetank.',
      },
      {
        type: 'callout',
        text: 'Echte Stärke zeigt sich nicht darin, keinen Stress zu spüren – sondern darin, wie schnell man sich davon erholt. Das ist Resilienz.',
      },
      {
        type: 'heading',
        text: 'Was Resilienz wirklich bedeutet',
      },
      {
        type: 'paragraph',
        text: 'Resilienz bedeutet nicht, unverwundbar zu sein. Es bedeutet, Rückschläge, Druck und Unsicherheit zu verarbeiten, ohne dauerhaft Schaden zu nehmen. Resiliente Führungskräfte haben keine weniger stressigen Jobs – sie haben ein anderes Verhältnis zu Stress. Sie kommen schneller zurück ins Gleichgewicht. Sie treffen unter Druck klarere Entscheidungen. Sie können abschalten, wenn sie abschalten müssen.',
      },
      {
        type: 'heading',
        text: 'Die vier Säulen mentaler Stärke für Führungskräfte',
      },
      {
        type: 'list',
        items: [
          'Emotionale Regulierung: Wer die eigenen Reaktionen kennt und steuern kann, entscheidet rationaler – auch in schwierigen Situationen. Hypnose und Entspannungstraining stärken diese Fähigkeit direkt.',
          'Fokus und Klarheit: Führungskräfte werden täglich mit Informationen überflutet. Mentales Training hilft, das Wesentliche vom Unwichtigen zu trennen und den Fokus zu halten.',
          'Erholungsfähigkeit: Regeneration ist keine Schwäche. Wer gezielt abschalten kann – und nicht nur passiv vor dem Bildschirm sitzt – schläft besser, erholt sich schneller und startet mit mehr Energie.',
          'Selbstwahrnehmung: Wer die eigenen Stresssignale früh erkennt, kann rechtzeitig gegensteuern. Viele Burnouts wären vermeidbar gewesen, hätten die Betroffenen früher hingehört.',
        ],
      },
      {
        type: 'heading',
        text: 'Wie hypnovital® dabei unterstützt',
      },
      {
        type: 'paragraph',
        text: 'Die hypnovital® Methode verbindet mentales Training, Hypnosetechniken und systemisches Coaching zu einem praxisnahen Ansatz für Menschen mit hoher Verantwortung. Kein esoterischer Ansatz, keine Wellnessveranstaltung – sondern ein strukturiertes Programm, das in den Alltag passt und messbare Ergebnisse liefert.',
      },
      {
        type: 'callout',
        text: 'Für Führungsteams bietet hypnovital® massgeschneiderte Workshops und Executive-Coaching-Programme. Mehr erfahren unter /unternehmen/executive-coaching.',
      },
    ],
  },

  // ── Juli ─────────────────────────────────────────────────
  {
    slug: 'selbstbild-veraendern',
    title: 'Wie dein Selbstbild dein Leben formt – und wie du es veränderst',
    description:
      'Dein Selbstbild bestimmt, was du versuchst, was du erreichst und was du dir erlaubst. Es entsteht früh – und kann verändert werden. Wie das funktioniert, erklärt dieser Artikel.',
    date: '2026-07-05',
    readingTime: 6,
    tags: ['Selbstvertrauen', 'Unterbewusstsein', 'Persönlichkeit'],
    intro:
      'Stell dir zwei Menschen mit gleichen Fähigkeiten, gleicher Ausbildung, ähnlichen Chancen vor. Der eine traut sich, der andere zögert. Der eine scheitert und probiert es nochmals, der andere gibt auf. Was macht den Unterschied? Fast immer: das Selbstbild.',
    sections: [
      {
        type: 'heading',
        text: 'Was das Selbstbild ist – und wo es herkommt',
      },
      {
        type: 'paragraph',
        text: 'Das Selbstbild ist das innere Bild, das du von dir selbst hast: Wer bin ich? Was kann ich? Was verdiene ich? Es entsteht nicht bewusst, sondern durch Erfahrungen – vor allem in der Kindheit. Lob, Kritik, Vergleiche, Misserfolge, Ermutigungen: All das hinterlässt Spuren im Unterbewusstsein und formt langsam die Überzeugung, wer wir sind und was wir wert sind.',
      },
      {
        type: 'paragraph',
        text: 'Das Problem: Viele dieser Überzeugungen wurden geformt, als wir fünf, acht oder zwölf Jahre alt waren. Und sie laufen seither weiter – automatisch, ohne Überprüfung – und beeinflussen jede Entscheidung, die wir treffen.',
      },
      {
        type: 'callout',
        text: 'Du bist nicht dein Selbstbild. Du hast ein Selbstbild – und es kann verändert werden.',
      },
      {
        type: 'heading',
        text: 'Wie das Selbstbild Verhalten steuert',
      },
      {
        type: 'paragraph',
        text: 'Das Unterbewusstsein arbeitet wie ein Thermostat: Es reguliert unser Verhalten so, dass es mit dem inneren Selbstbild übereinstimmt. Wer sich innerlich als «nicht gut genug» erlebt, wird unbewusst Situationen meiden, die diese Überzeugung widerlegen könnten. Wer glaubt, nie erfolgreich zu sein, findet immer einen Weg, Erfolg zu sabotieren – oft ohne es zu merken.',
      },
      {
        type: 'heading',
        text: 'Warum «positives Denken» allein nicht hilft',
      },
      {
        type: 'paragraph',
        text: 'Affirmationen und positive Gedanken können unterstützen – aber nur, wenn das Unterbewusstsein mitspielt. Wer sich täglich sagt «Ich bin selbstbewusst», während das Unterbewusstsein das Gegenteil für wahr hält, erzeugt inneren Widerspruch. Das Unterbewusstsein gewinnt fast immer. Nachhaltige Veränderung entsteht nicht durch das Überschreiben alter Überzeugungen mit neuen Sätzen, sondern durch das tatsächliche Erleben von etwas anderem.',
      },
      {
        type: 'heading',
        text: 'Wie Hypnose das Selbstbild wirklich verändert',
      },
      {
        type: 'list',
        items: [
          'Zugang zum Unterbewusstsein: Im Trancezustand ist das Unterbewusstsein direkt erreichbar – ohne den Filter des kritischen Verstandes. Neue Überzeugungen können tiefer verankert werden.',
          'Ressourcenerlebnisse aktivieren: Vergangene Momente, in denen du dich stark, kompetent und sicher gefühlt hast, werden gezielt aktiviert und als Referenz für das neue Selbstbild genutzt.',
          'Emotionale Umstrukturierung: Alte, schmerzhafte Erfahrungen, die das negative Selbstbild geprägt haben, können in der Hypnose neu bewertet werden – nicht verleugnet, aber ihrer emotionalen Last beraubt.',
          'Wiederholung im Unterbewusstsein: Was wir in der Trance immer wieder erleben, speichert das Gehirn als real ab. Mit jedem Audio-Training festigt sich das neue Selbstbild.',
        ],
      },
      {
        type: 'callout',
        text: 'Unsere Audio-Programme «Selbstvertrauen stärken» und «Selbstliebe entwickeln» begleiten dich dabei, ein neues, kraftvolles Selbstbild im Unterbewusstsein zu verankern.',
      },
    ],
  },

  // ── August ───────────────────────────────────────────────
  {
    slug: 'sommerzeit-tiefenentspannung',
    title: 'Sommerzeit ist Kopfzeit: Mit Tiefenentspannung wirklich abschalten',
    description:
      'Ferien, aber der Kopf macht nicht mit? Viele Menschen erholen sich im Urlaub kaum – weil sie nie gelernt haben, wirklich loszulassen. Tiefenentspannung kann das ändern.',
    date: '2026-08-05',
    readingTime: 5,
    tags: ['Entspannung', 'Erholung', 'Gesundheit'],
    intro:
      'Endlich Ferien. Koffer gepackt, Laptop zugeklappt – und der Kopf macht einfach weiter. Mails werden gedanklich beantwortet, Probleme werden im Halbschlaf gewälzt, die Schultern bleiben oben. Echte Erholung sieht anders aus. Und sie ist lernbar.',
    sections: [
      {
        type: 'heading',
        text: 'Warum wir nicht mehr abschalten können',
      },
      {
        type: 'paragraph',
        text: 'Das Gehirn ist kein Computer mit einem On/Off-Schalter. Nach Monaten im Hochbetrieb läuft das Nervensystem in einem erhöhten Aktivierungsmodus weiter – auch dann, wenn der äussere Druck nachlässt. Das System kennt nur noch eine Gangart: bereit, reaktiv, wachsam. Entspannung fühlt sich ungewohnt an, manchmal sogar unangenehm.',
      },
      {
        type: 'callout',
        text: 'Wer das ganze Jahr über im Hochbetrieb läuft, kann in zwei Wochen Ferien nicht einfach abschalten. Entspannung ist eine Fähigkeit – keine Selbstverständlichkeit.',
      },
      {
        type: 'heading',
        text: 'Was echte Erholung im Körper bewirkt',
      },
      {
        type: 'paragraph',
        text: 'Echte Regeneration passiert auf mehreren Ebenen gleichzeitig: Das Nervensystem schaltet vom Sympathikus in den Parasympathikus. Cortisol sinkt, Herzrate verlangsamt sich, Muskeln entspannen sich tief. Das Immunsystem kommt zur Ruhe, das Gedächtnis konsolidiert, das Gehirn reinigt sich buchstäblich – ein Prozess, der nur im tiefen Entspannungszustand und im Schlaf stattfindet.',
      },
      {
        type: 'heading',
        text: 'Tiefenentspannung: mehr als Nichtstun',
      },
      {
        type: 'paragraph',
        text: 'Auf dem Sofa liegen und Netflix schauen ist kein schlechter Start – aber es ist keine Tiefenentspannung. Das Nervensystem bleibt dabei in einem mittleren Aktivierungsniveau. Tiefenentspannung meint etwas anderes: einen Zustand, in dem das Nervensystem aktiv in den Erholungsmodus wechselt. Geführte Entspannungsübungen, Selbsthypnose und Atemtechniken sind Wege dorthin.',
      },
      {
        type: 'heading',
        text: '5 Wege, im Sommer wirklich loszulassen',
      },
      {
        type: 'list',
        items: [
          'Feste «Offline-Zeiten» einrichten: Nicht «kein Handy» als Regel, sondern konkrete Zeitfenster ohne Bildschirm – vor allem morgens und vor dem Schlafen.',
          'Täglich 10–15 Minuten geführte Entspannung: Ein Audio-Programm, eine kurze Meditation oder Atemübungen – konsequent, nicht nur wenn man daran denkt.',
          'Bewegung in der Natur: Spazieren, Schwimmen, Wandern – rhythmische Bewegung ohne Leistungsdruck reguliert das Nervensystem zuverlässig.',
          'Schlafrhythmus stabilisieren: Ausschlafen darf sein, aber extreme Verschiebungen stören die innere Uhr und verschlechtern die Erholungsqualität.',
          'Bewusste Übergänge gestalten: Vor dem Urlaub eine klare Übergaberoutine, nach dem Urlaub einen sanften Wiedereinstieg – das schützt die Erholungsqualität an beiden Enden.',
        ],
      },
      {
        type: 'callout',
        text: 'Unser Audio-Programm «Tief entspannen» begleitet dich in echte Tiefenentspannung – ideal für den Urlaub, das Wochenende oder die Mittagspause. Jederzeit, überall.',
      },
    ],
  },

  // ── September ────────────────────────────────────────────
  {
    slug: 'konzentration-steigern-fokus',
    title: 'Konzentration steigern: Warum Fokus keine Frage der Disziplin ist',
    description:
      'Ablenkung ist allgegenwärtig – und Konzentrationsprobleme sind heute die Norm, nicht die Ausnahme. Wer verstehen will, warum, und was wirklich hilft, liest weiter.',
    date: '2026-09-05',
    readingTime: 6,
    tags: ['Konzentration', 'Leistung', 'Fokus'],
    intro:
      'Du sitzt am Schreibtisch, hast zwei Stunden Zeit, eine klare Aufgabe – und schaffst es trotzdem nicht, dich mehr als zehn Minuten zu konzentrieren. Handy, Browser, Gedanken. Die meisten Menschen deuten das als Willensschwäche. Die Wissenschaft sieht es anders.',
    sections: [
      {
        type: 'heading',
        text: 'Das Gehirn wurde nicht für Dauerkonzentration gebaut',
      },
      {
        type: 'paragraph',
        text: 'Das menschliche Gehirn ist evolutionär auf Aufmerksamkeitswechsel ausgelegt – nicht auf stundenlangen Fokus. Neue Reize bedeuteten in der Vergangenheit potenzielle Gefahr oder Chancen. Wer alles ignorierte, überlebte nicht. Dieses System läuft noch heute – in einer Welt, die mit Reizen überflutet, die alle um dieselbe begrenzte Aufmerksamkeit konkurrieren.',
      },
      {
        type: 'callout',
        text: 'Ablenkbarkeit ist kein Charakterfehler. Sie ist eine biologische Grundausstattung. Wer das versteht, kann gezielt gegensteuern – statt sich schlecht zu fühlen.',
      },
      {
        type: 'heading',
        text: 'Was Konzentration wirklich kostet',
      },
      {
        type: 'paragraph',
        text: 'Jede Unterbrechung kostet mehr als die Zeit der Unterbrechung selbst. Forschungen der University of California zeigen: Nach einer Ablenkung dauert es im Schnitt über 23 Minuten, bis man wieder vollständig im ursprünglichen Gedankenfluss ist. Wer zehnmal täglich unterbrochen wird, ist faktisch nie wirklich konzentriert.',
      },
      {
        type: 'heading',
        text: 'Die drei Ebenen des Konzentrationsproblems',
      },
      {
        type: 'list',
        items: [
          'Äussere Ablenkungen: Benachrichtigungen, Lärm, Unterbrechungen durch andere. Diese lassen sich durch Umgebungsgestaltung reduzieren – Telefon lautlos, Benachrichtigungen aus, feste Fokuszeiten.',
          'Innere Unruhe: Gedanken, die abschweifen. Sorgen, die hochkommen. Ein Geist, der nicht zur Ruhe findet. Hier helfen Entspannungstechniken und mentales Training.',
          'Erschöpfung: Wer müde ist, kann sich nicht konzentrieren – egal wie viel Kaffee er trinkt. Die beste Konzentrationsstrategie ist ausreichend Schlaf und regelmässige Erholung.',
        ],
      },
      {
        type: 'heading',
        text: 'Wie Hypnose Fokus und Konzentration stärkt',
      },
      {
        type: 'paragraph',
        text: 'Hypnose trainiert direkt die Fähigkeit, die Aufmerksamkeit auf einen Punkt zu richten und störende Gedanken loszulassen. Im Trancezustand geschieht genau das: Der Fokus wird geschärft, das Gedankenrauschen leiser. Wer regelmässig mit geführter Hypnose oder Tiefenentspannung arbeitet, trainiert das Gehirn, schneller in konzentrierte Zustände zu wechseln.',
      },
      {
        type: 'callout',
        text: 'Das Audio-Programm «Konzentration steigern» trainiert deinen Fokus gezielt – für mehr Klarheit, Produktivität und Leistungsfähigkeit im Alltag.',
      },
    ],
  },

  // ── Oktober ──────────────────────────────────────────────
  {
    slug: 'pruefungsangst-ueberwinden',
    title: 'Prüfungsangst überwinden: Wenn der Kopf das Wissen blockiert',
    description:
      'Prüfungsangst ist einer der häufigsten Gründe, warum Menschen unter ihrem Niveau abschneiden. Dabei liegt das Wissen vor – es kommt nur nicht heraus. Wie Hypnose diesen Block löst.',
    date: '2026-10-05',
    readingTime: 5,
    tags: ['Prüfungsangst', 'Angst', 'Leistung'],
    intro:
      'Du hast gelernt. Du kennst den Stoff. Und trotzdem: Sobald das Prüfungsblatt vor dir liegt, ist der Kopf leer. Die Hände schwitzen, die Zeit tickt, die Antworten kommen nicht. Prüfungsangst ist kein Zeichen mangelnder Vorbereitung – sondern ein mentales Problem, das mentale Lösungen braucht.',
    sections: [
      {
        type: 'heading',
        text: 'Was in der Prüfungssituation im Gehirn passiert',
      },
      {
        type: 'paragraph',
        text: 'Prüfungsangst ist eine Variante der Stressreaktion. Das Gehirn bewertet die Prüfungssituation als Bedrohung – und fährt entsprechend hoch. Adrenalin steigt, die Amygdala übernimmt die Kontrolle, der präfrontale Kortex – zuständig für logisches Denken und Abruf von Gelerntem – wird buchstäblich gedrosselt. Das Paradoxe: Genau der Teil des Gehirns, den du in der Prüfung brauchst, wird durch die Angst blockiert.',
      },
      {
        type: 'callout',
        text: 'Prüfungsangst ist kein Versagen der Intelligenz. Es ist eine Fehlfunktion des Stresssystems – und lässt sich gezielt trainieren.',
      },
      {
        type: 'heading',
        text: 'Warum Vorbereitung allein nicht reicht',
      },
      {
        type: 'paragraph',
        text: 'Viele Betroffene reagieren auf schlechte Prüfungsleistungen mit noch mehr Lernen. Das kann das Problem sogar verschlimmern: Mehr Stoff, mehr Druck, mehr Angst zu versagen. Was fehlt, ist nicht mehr Wissen – sondern die Fähigkeit, das vorhandene Wissen in der Stresssituation abzurufen. Das ist eine mentale Kompetenz, die trainiert werden muss.',
      },
      {
        type: 'heading',
        text: 'Wie Hypnose bei Prüfungsangst hilft',
      },
      {
        type: 'list',
        items: [
          'Entspannungsreaktion konditionieren: In der Hypnose wird die Prüfungssituation immer wieder in einem Zustand tiefer Ruhe erlebt. Das Gehirn lernt: Prüfung bedeutet nicht Gefahr.',
          'Blackout-Risiko senken: Gezielte Suggestionen verankern den Glauben, dass Wissen abrufbar ist – auch unter Druck. Diese Überzeugung reduziert die Blockade im entscheidenden Moment.',
          'Ressourcenzustand trainieren: Vergangene Momente, in denen Wissen klar und fliessend war, werden aktiviert und mit der Prüfungssituation verknüpft.',
          'Zeitgefühl stabilisieren: Angst verzerrt das Zeitgefühl in Prüfungen. Entspanntes, fokussiertes Denken führt zu besserem Zeitmanagement und klarerer Strukturierung der Antworten.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Am wirksamsten ist die Kombination: Regelmässige Entspannungsübungen in der Lernphase, gezielte Hypnose-Arbeit zur Entkopplung von Angst und Prüfungssituation, und ein einfaches Atemritual unmittelbar vor der Prüfung.',
      },
      {
        type: 'callout',
        text: 'Das Audio-Programm «Prüfungsangst lösen» begleitet dich durch die Lernphase und bereitet dich mental auf den Moment der Wahrheit vor – ruhig, klar, abrufbereit.',
      },
    ],
  },

  // ── November ─────────────────────────────────────────────
  {
    slug: 'burnout-fruehwarnsignale',
    title: 'Burnout erkennen, bevor es zu spät ist: Die frühen Warnsignale',
    description:
      'Burnout kündigt sich an – manchmal monatelang, bevor der Zusammenbruch kommt. Wer die frühen Zeichen kennt, kann rechtzeitig gegensteuern. Ein ehrlicher Überblick.',
    date: '2026-11-05',
    readingTime: 6,
    tags: ['Burnout', 'Stressmanagement', 'Gesundheit'],
    intro:
      'Burnout passiert nicht über Nacht. Es ist ein schleichender Prozess – ein langsames Aushöhlen von Energie, Motivation und Lebensfreude. Das Gefährliche daran: Viele Menschen merken es erst, wenn sie bereits mittendrin stecken. Dabei sendet der Körper und der Geist lange vorher klare Signale.',
    sections: [
      {
        type: 'heading',
        text: 'Was Burnout wirklich ist – und was nicht',
      },
      {
        type: 'paragraph',
        text: 'Burnout ist mehr als «sehr müde sein». Es ist ein Zustand emotionaler, mentaler und körperlicher Erschöpfung, der durch chronischen, anhaltenden Stress entsteht – vor allem im Arbeitskontext. Die Weltgesundheitsorganisation (WHO) hat Burnout 2019 als berufliches Phänomen offiziell anerkannt. Es ist keine Schwäche, kein Luxusproblem und keine Ausrede – es ist eine ernst zu nehmende Reaktion des Systems auf dauerhafte Überlastung.',
      },
      {
        type: 'callout',
        text: 'Wer bei den ersten Warnsignalen handelt, braucht keine Auszeit von Monaten. Wer wartet, bis nichts mehr geht, hat oft keine Wahl mehr.',
      },
      {
        type: 'heading',
        text: 'Die frühen Warnsignale – eine ehrliche Liste',
      },
      {
        type: 'list',
        items: [
          'Anhaltende Müdigkeit, die durch Schlaf nicht besser wird: Man schläft acht Stunden und ist trotzdem erschöpft. Der Schlaf wird flacher, die Regeneration schlechter.',
          'Zunehmende Distanzierung: Aufgaben, die früher Freude gemacht haben, fühlen sich gleichgültig an. Kollegen, Familie, Hobbys – alles rückt emotional in die Ferne.',
          'Reizbarkeit und Überreaktionen: Kleinigkeiten provozieren unverhältnismässige Reaktionen. Die innere Reserve ist aufgebraucht.',
          'Konzentrationsprobleme und Vergesslichkeit: Der Kopf funktioniert nicht mehr wie gewohnt. Fehler häufen sich, Entscheidungen fallen schwerer.',
          'Körperliche Beschwerden ohne klare Ursache: Kopfschmerzen, Magenprobleme, häufige Erkältungen – das Immunsystem leidet mit.',
          'Rückzug und soziale Isolation: Man sagt Verabredungen ab, zieht sich zurück, hat keine Energie für Sozialkontakte.',
          'Das Gefühl, nie fertig zu werden: Egal wie viel man erledigt, das Gefühl bleibt, hinterherzuhinken. Die To-do-Liste wächst schneller als sie schrumpft.',
        ],
      },
      {
        type: 'heading',
        text: 'Was jetzt hilft',
      },
      {
        type: 'paragraph',
        text: 'Wenn du zwei oder mehr dieser Signale erkennst: Ernst nehmen. Nicht «noch eine Woche durchhalten». Die erste Massnahme ist nicht Urlaub, sondern Ehrlichkeit – mit dir selbst und idealerweise mit einer Fachperson. Gleichzeitig lohnt es sich sofort, aktiv Regeneration in den Alltag einzubauen: Bewegung, Tiefenentspannung, klare Grenzen bei der Arbeitszeit.',
      },
      {
        type: 'paragraph',
        text: 'Hypnose und Coaching können in der Früherkennung und Prävention wertvolle Unterstützung bieten – indem sie helfen, Stressmuster zu erkennen, Regenerationsfähigkeit zu trainieren und die eigenen Grenzen besser wahrzunehmen.',
      },
      {
        type: 'callout',
        text: 'Wenn du das Gefühl hast, auf dem Weg in den Burnout zu sein: Sprich mit einem unserer Coaches. Früh handeln ist immer besser als zu warten.',
      },
    ],
  },

  // ── Dezember ─────────────────────────────────────────────
  {
    slug: 'klarheit-neues-jahr',
    title: 'Mit Klarheit ins neue Jahr: Wie du 2027 wirklich anders anfängst',
    description:
      'Ein neues Jahr beginnt – wieder. Wie schaffst du es, dass diesmal wirklich etwas anders wird? Nicht mit besseren Vorsätzen, sondern mit einer anderen Herangehensweise.',
    date: '2026-12-05',
    readingTime: 5,
    tags: ['Motivation', 'Gewohnheiten', 'Neustart'],
    intro:
      'Jahreswechsel haben etwas Magisches. Der Kalender springt auf eine neue Zahl, und mit ihm die Hoffnung: Diesmal wird es anders. Diesmal halte ich durch. Doch für die meisten Menschen sieht es im Februar genauso aus wie im letzten Dezember. Nicht weil sie zu schwach sind – sondern weil sie am falschen Ort anfangen.',
    sections: [
      {
        type: 'heading',
        text: 'Das Problem mit dem «frischen Start»',
      },
      {
        type: 'paragraph',
        text: 'Ein neues Jahr ändert nichts an den Mustern, die das alte Jahr bestimmt haben. Die Gewohnheiten, die Überzeugungen, das Selbstbild – sie alle warten am 1. Januar genauso auf uns wie am 31. Dezember. Wer mit denselben inneren Voraussetzungen in ein neues Jahr startet und andere Ergebnisse erwartet, wird enttäuscht werden.',
      },
      {
        type: 'callout',
        text: 'Der Jahreswechsel ist kein Neustart. Er ist eine Gelegenheit, einen Neustart zu beginnen. Der Unterschied liegt im Inneren, nicht im Datum.',
      },
      {
        type: 'heading',
        text: 'Was ein echter Neustart braucht',
      },
      {
        type: 'paragraph',
        text: 'Ein echter Neustart beginnt nicht mit einer Liste von Zielen, sondern mit einer ehrlichen Bestandsaufnahme. Welche Muster haben das letzte Jahr bestimmt? Welche davon willst du wirklich verändern? Und – entscheidend – warum? Nicht die oberflächliche Antwort, sondern die tiefere. Was bedeutet diese Veränderung wirklich für dein Leben?',
      },
      {
        type: 'heading',
        text: 'Ein anderer Ansatz: vom Ergebnis zum Sein',
      },
      {
        type: 'paragraph',
        text: 'Die meisten Vorsätze sind Ergebnis-orientiert: «Ich will 10 Kilo abnehmen», «Ich will mehr verdienen», «Ich will aufhören zu rauchen». Das ist legitim – aber nicht genug. Was hilft, ist die Frage dahinter: Wer möchte ich im nächsten Jahr sein? Welche Art von Mensch trifft die Entscheidungen, die zu diesen Ergebnissen führen? Wenn das Selbstbild stimmt, folgt das Verhalten.',
      },
      {
        type: 'heading',
        text: 'Drei konkrete Schritte für einen anderen Start',
      },
      {
        type: 'list',
        items: [
          'Jahresrückblick mit Tiefe: Nimm dir eine Stunde. Schreib auf, was gut war, was schwierig war, was du gelernt hast. Nicht um dich zu bewerten, sondern um zu verstehen.',
          'Ein Thema wählen, kein System: Nicht zehn Vorsätze, sondern ein Kernthema für das Jahr. Alles andere folgt daraus. Weniger ist mehr.',
          'Das Unterbewusstsein einbinden: Nutze die Tage zwischen den Jahren für regelmässige Entspannung und Visualisierung. Wie sieht dein Leben Ende 2027 aus – in Bildern, nicht in Worten? Was fühlst du dabei? Je lebendiger das innere Bild, desto stärker der Zug in diese Richtung.',
        ],
      },
      {
        type: 'callout',
        text: 'Die hypnovital® Audio-Programme begleiten dich das ganze Jahr: Ob Gewohnheiten ändern, Selbstvertrauen aufbauen oder einfach tiefer entspannen – dein Unterbewusstsein arbeitet mit dir, nicht gegen dich.',
      },
    ],
  },
]

// Gibt nur Artikel zurück, deren Datum heute oder in der Vergangenheit liegt
export function getPublishedBlogPosts(): BlogPost[] {
  const today = new Date().toISOString().split('T')[0]
  return [...blogPosts]
    .filter((p) => p.date <= today)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function isPublished(post: BlogPost): boolean {
  const today = new Date().toISOString().split('T')[0]
  return post.date <= today
}
