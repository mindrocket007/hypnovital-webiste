import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB)',
  description: 'Allgemeine Geschäftsbedingungen für Veranstaltungen, Coaching und Produkte von hypnovital®.',
}

export default function AgbPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Rechtliches</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5 leading-tight tracking-tight">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-white/70 text-lg">
              Gültig für alle Veranstaltungen, Coaching-Angebote und Produkte von hypnovital®.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white">
        <div className="max-w-3xl prose prose-gray prose-headings:font-headline prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600">

          <p className="text-sm text-gray-400 mb-10">
            Stand: März 2026 · Mind Rocket GmbH, Gresigengasse 3, 6055 Alpnach Dorf, Schweiz
          </p>

          <h2>1. Geltungsbereich und Vertragspartner</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der{' '}
            <strong>Mind Rocket GmbH</strong>, Gresigengasse 3, 6055 Alpnach Dorf, Schweiz
            (nachfolgend «Anbieter») und den Teilnehmenden bzw. Kunden (nachfolgend «Kunde»)
            im Zusammenhang mit der Buchung von Veranstaltungen, Workshops, Coaching-Leistungen
            und digitalen Produkten (Audio-Programme etc.).
          </p>
          <p>
            Für Kunden mit Wohnsitz in der Europäischen Union (insbesondere Deutschland und Österreich)
            gelten ergänzend die jeweils anwendbaren zwingenden Verbraucherschutzbestimmungen ihres
            Heimatlandes, insbesondere das Fernabsatzrecht und das Widerrufsrecht gemäss
            §§ 312 ff. BGB (DE) und §§ 3 ff. FAGG (AT).
          </p>

          <h2>2. Vertragsabschluss</h2>
          <p>
            Eine Anmeldung zu einer Veranstaltung oder die Buchung einer Coaching-Leistung gilt als
            verbindliche Anfrage. Der Vertrag kommt mit der schriftlichen Bestätigung durch den Anbieter
            per E-Mail zustande. Der Anbieter behält sich vor, Anmeldungen ohne Angabe von Gründen
            abzulehnen.
          </p>

          <h2>3. Preise und Zahlung</h2>
          <p>
            Alle angegebenen Preise verstehen sich in Schweizer Franken (CHF) oder Euro (€). Für
            Kunden in Deutschland und Österreich sind die Preise inklusive der dort gesetzlich
            geltenden Mehrwertsteuer (DE: 19% / AT: 20%), sofern nicht anders ausgewiesen.
            Für Kunden in der Schweiz gelten die Schweizer Mehrwertsteuersätze.
          </p>
          <p>
            Die Zahlungsmodalitäten werden in der Buchungsbestätigung kommuniziert. Die Zahlung ist in
            der Regel vor der Veranstaltung fällig. Bei Nicht-Zahlung bis zum angegebenen Termin
            behält sich der Anbieter vor, die Anmeldung zu stornieren.
          </p>

          <h2>4. Widerrufsrecht für Verbraucher in Deutschland und Österreich</h2>

          <div className="bg-[#f9f9f9] rounded-xl p-5 not-prose">
            <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Widerrufsbelehrung</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <strong>Widerrufsrecht:</strong> Sie haben das Recht, binnen vierzehn Tagen ohne Angabe
              von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem
              Tag des Vertragsabschlusses.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Mind Rocket GmbH, Gresigengasse 3,
              6055 Alpnach Dorf, Schweiz, E-Mail: info@hypnovital.net) mittels einer eindeutigen
              Erklärung über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung
              des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <strong>Folgen des Widerrufs:</strong> Im Falle eines wirksamen Widerrufs erstatten wir
              Ihnen alle geleisteten Zahlungen unverzüglich und spätestens binnen vierzehn Tagen ab
              Eingang Ihrer Widerrufserklärung.
            </p>

            <p className="font-semibold text-gray-900 text-sm mt-4 mb-2">Ausnahmen vom Widerrufsrecht:</p>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>
                <strong>Veranstaltungen mit festem Datum</strong> (Workshops, Seminare): Das
                Widerrufsrecht erlischt gemäss § 312g Abs. 2 Nr. 9 BGB (DE) für Verträge über die
                Erbringung von Dienstleistungen im Zusammenhang mit Freizeitbetätigungen, wenn der
                Vertrag einen spezifischen Termin vorsieht.
              </li>
              <li>
                <strong>Digitale Inhalte (Audio-Programme):</strong> Wir verzichten freiwillig auf
                den Ausschluss des Widerrufsrechts bei digitalen Downloads. Wenn du mit einem
                Audio-Programm nicht zufrieden bist, erstatten wir dir den Kaufbetrag auf Anfrage
                innerhalb von 14 Tagen zurück – ohne Angabe von Gründen. Bitte wende dich dafür
                an info@hypnovital.net.
              </li>
              <li>
                <strong>Coaching-Leistungen:</strong> Haben Sie bei Buchung ausdrücklich zugestimmt,
                dass der Coach vor Ablauf der Widerrufsfrist mit der Leistungserbringung beginnt, und
                wurde die Leistung vollständig erbracht, erlischt das Widerrufsrecht.
              </li>
              <li>
                <strong>Persönliche Hypnose-Audios (Einzelanfertigung):</strong> Das persönliche
                Hypnose-Audio («Mein persönliches Hypnose-Audio») wird exklusiv und individuell
                nach deinen Angaben produziert. Es handelt sich um eine Einzelanfertigung gemäss
                § 312g Abs. 2 Nr. 1 BGB (DE) bzw. § 18 Abs. 1 Z 3 FAGG (AT), weshalb kein
                gesetzliches Widerrufsrecht besteht. Sollte das Audio technisch fehlerhaft sein
                oder nicht deinem ausgefüllten Fragebogen entsprechen, produzieren wir es
                kostenlos neu. Für Reklamationen wende dich bitte an info@hypnovital.net.
              </li>
            </ul>
          </div>

          <h2>5. Rücktritt durch den Kunden (Stornierung)</h2>
          <p>
            Der Kunde kann seine Anmeldung schriftlich per E-Mail an{' '}
            <a href="mailto:info@hypnovital.net" className="text-primary hover:underline">info@hypnovital.net</a>{' '}
            stornieren. Folgende Stornierungsbedingungen gelten:
          </p>
          <ul>
            <li><strong>Bis 30 Tage vor Veranstaltungsbeginn:</strong> Vollständige Rückerstattung des bezahlten Betrags.</li>
            <li><strong>15–29 Tage vor Veranstaltungsbeginn:</strong> Rückerstattung von 50 % des bezahlten Betrags.</li>
            <li><strong>Weniger als 14 Tage vor Veranstaltungsbeginn:</strong> Keine Rückerstattung. Es besteht jedoch die Möglichkeit, eine Ersatzperson zu benennen.</li>
          </ul>
          <p>
            In jedem Fall kann der Kunde einen Gutschein im Wert des bezahlten Betrags beantragen,
            der für zukünftige Angebote von hypnovital® eingelöst werden kann.
          </p>

          <h2>6. Rücktritt bei Krankheit oder höherer Gewalt</h2>
          <p>
            Kann der Kunde aufgrund einer plötzlichen Erkrankung oder eines Unfalls nicht an der
            Veranstaltung teilnehmen, ist ein ärztliches Attest einzureichen. In diesem Fall wird der
            bezahlte Betrag als Gutschrift gespeichert und kann für eine andere Veranstaltung oder ein
            anderes Angebot von hypnovital® verwendet werden. Eine Barrückerstattung erfolgt in diesen
            Fällen nach Ermessen des Anbieters.
          </p>

          <h2>7. Absage oder Verschiebung durch den Anbieter</h2>
          <p>
            Der Anbieter behält sich vor, Veranstaltungen bei zu geringer Teilnehmerzahl, Krankheit
            des Referenten oder ausserordentlichen Umständen (höhere Gewalt, behördliche Anordnungen
            etc.) abzusagen oder zu verschieben. Im Falle einer Absage durch den Anbieter werden
            bereits bezahlte Beträge vollständig erstattet. Weitergehende Ansprüche, insbesondere für
            entstandene Reise- oder Übernachtungskosten, sind ausgeschlossen.
          </p>

          <h2>8. Gutscheine</h2>
          <p>
            Für hypnovital® Gutscheine gelten folgende Bedingungen:
          </p>
          <ul>
            <li><strong>Gültigkeit:</strong> Gutscheine sind ab Ausstellungsdatum 3 Jahre gültig (gesetzliche Verjährungsfrist gemäss § 195 BGB / Art. 128 OR).</li>
            <li><strong>Einlösung:</strong> Gutscheine können bei jedem zertifizierten hypnovital® Coach für die jeweils beschriebene Leistung eingelöst werden, sofern der Coach das entsprechende Angebot führt.</li>
            <li><strong>Übertragbarkeit:</strong> Gutscheine sind übertragbar und können von Dritten eingelöst werden.</li>
            <li><strong>Barauszahlung:</strong> Eine Barauszahlung des Gutscheinwerts ist ausgeschlossen.</li>
            <li><strong>Teileinlösung:</strong> Eine Teileinlösung ist nicht möglich; ein allfälliger Restbetrag verfällt nicht, sondern wird als Guthaben auf einen neuen Gutschein übertragen.</li>
            <li><strong>Verlust:</strong> Der Anbieter haftet nicht für verlorene, gestohlene oder beschädigte Gutscheine.</li>
          </ul>

          <h2>9. Durchführung und Teilnahmebedingungen</h2>
          <p>
            Veranstaltungen finden ab einer Mindestanzahl von Teilnehmenden statt. Die Mindestteilnehmerzahl
            wird bei der jeweiligen Veranstaltung angegeben. Der Anbieter behält sich vor, Teilnehmende
            auszuschliessen, die den Ablauf stören oder gegen die Hausordnung des Veranstaltungsorts
            verstossen. In diesem Fall besteht kein Anspruch auf Rückerstattung.
          </p>

          <h2>10. Gesundheitlicher Hinweis</h2>
          <p>
            Die Angebote von hypnovital® (Hypnose, Coaching, Audio-Programme) ersetzen{' '}
            <strong>keine medizinische, psychotherapeutische oder psychiatrische Behandlung</strong>.
            Sie dienen ausschliesslich der persönlichen Weiterentwicklung, Entspannung und Prävention.
            Personen mit psychischen Erkrankungen, Epilepsie oder schweren psychischen Störungen
            sollten vor der Teilnahme Rücksprache mit ihrer behandelnden Fachperson halten.
            Die Teilnahme erfolgt auf eigene Verantwortung. Der Anbieter haftet nicht für Schäden,
            die durch die Anwendung der vermittelten Methoden entstehen, sofern diese nicht auf
            grober Fahrlässigkeit oder Vorsatz des Anbieters beruhen.
          </p>

          <h2>11. Urheberrecht und Nutzungsrechte</h2>
          <p>
            Alle im Rahmen von Veranstaltungen und Produkten zur Verfügung gestellten Materialien
            (Handouts, Audio-Dateien, Präsentationen etc.) sind urheberrechtlich geschützt und dürfen
            ohne ausdrückliche schriftliche Zustimmung des Anbieters nicht vervielfältigt, weitergegeben
            oder öffentlich zugänglich gemacht werden. Audio-Programme sind ausschliesslich für die
            persönliche Nutzung bestimmt und dürfen nicht weitergegeben, kopiert oder kommerziell
            genutzt werden.
          </p>

          <h2>12. Datenschutz</h2>
          <p>
            Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäss der geltenden
            Datenschutzgesetzgebung (DSG Schweiz / DSGVO EU) und der{' '}
            <Link href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link>{' '}
            von hypnovital®. Die Daten werden ausschliesslich für die Abwicklung der Buchung und
            Kommunikation mit dem Kunden verwendet.
          </p>

          <h2>13. Änderungen der AGB</h2>
          <p>
            Der Anbieter behält sich vor, diese AGB jederzeit zu ändern. Die jeweils aktuelle Version
            ist auf der Website von hypnovital® einsehbar. Für bereits bestehende Verträge gelten die
            AGB zum Zeitpunkt des Vertragsabschlusses.
          </p>

          <h2>14. Anwendbares Recht und Gerichtsstand</h2>
          <p>
            Diese AGB unterliegen grundsätzlich dem Schweizer Recht (OR). Für Verbraucher mit Wohnsitz
            in einem EU-Mitgliedstaat (insbesondere Deutschland oder Österreich) bleiben die zwingenden
            Verbraucherschutzbestimmungen ihres Heimatlandes unberührt; in diesem Fall ist das für den
            Verbraucher günstigere Recht anwendbar (Art. 6 Rom-I-VO).
          </p>
          <p>
            Als Gerichtsstand für Streitigkeiten mit Unternehmern gilt der Sitz der Mind Rocket GmbH
            in Alpnach, Schweiz. Verbraucher mit Wohnsitz in Deutschland oder Österreich können
            Klagen wahlweise auch an ihrem Wohnsitzgericht einreichen.
          </p>

          <h2>15. Kontakt</h2>
          <p>
            Bei Fragen zu diesen AGB wende dich an:<br />
            Mind Rocket GmbH · hypnovital®<br />
            Gresigengasse 3 · 6055 Alpnach Dorf · Schweiz<br />
            E-Mail:{' '}
            <a href="mailto:info@hypnovital.net" className="text-primary hover:underline">
              info@hypnovital.net
            </a>
          </p>

        </div>
      </SectionWrapper>
    </>
  )
}
