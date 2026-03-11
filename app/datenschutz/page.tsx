import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'

export const metadata: Metadata = {
  title: 'Datenschutz',
}

export default function DatenschutzPage() {
  return (
    <SectionWrapper bg="white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-headline font-black text-gray-900 mb-2">Datenschutzerklärung</h1>
        <p className="text-sm text-gray-400 mb-10">Stand: März 2026</p>

        <div className="space-y-8 text-gray-600 text-sm leading-relaxed">

          {/* 1. Verantwortliche Stelle */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">1. Verantwortliche Stelle</h2>
            <p>
              Mind Rocket GmbH<br />
              Gresigengasse 3<br />
              6055 Alpnach, Schweiz<br />
              Vertreten durch: Franz Ruchti<br />
              E-Mail: <a href="mailto:info@hypnovital.net" className="text-gray-700 hover:text-primary transition-colors">info@hypnovital.net</a><br />
              Telefon: +41 78 881 53 79
            </p>
            <p className="mt-3">
              Diese Datenschutzerklärung gilt für die Website <strong>hypnovital.net</strong> und alle damit
              verbundenen Dienstleistungen. Da wir in der Schweiz, in Deutschland und in Österreich tätig sind,
              gilt sowohl das schweizerische Datenschutzgesetz (DSG) als auch – für Nutzerinnen und Nutzer mit
              Wohnsitz in der EU – die Datenschutz-Grundverordnung (DSGVO).
            </p>
          </div>

          {/* 2. Welche Daten wir erheben */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">2. Welche Daten wir erheben und wozu</h2>

            <div className="space-y-5">

              <div className="bg-[#f9f9f9] rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-2">a) Kontaktformular & allgemeine Anfragen</h3>
                <p>
                  Wenn du unser Kontaktformular nutzt, erheben wir: Name, E-Mail-Adresse, optional Telefonnummer und deine Nachricht.
                  Diese Daten werden ausschliesslich zur Beantwortung deiner Anfrage verwendet und danach nicht weiterverarbeitet.
                </p>
                <p className="mt-2 text-xs text-gray-400">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Massnahmen) bzw. lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen)</p>
              </div>

              <div className="bg-[#f9f9f9] rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-2">b) Coach-Buchung</h3>
                <p>
                  Bei einer Anfrage für ein Coaching-Gespräch erheben wir: Name, E-Mail-Adresse und deine Nachricht.
                  Die Anfrage wird direkt an den gewählten Coach weitergeleitet; eine Kopie geht unsichtbar (BCC) an info@hypnovital.net.
                  Deine Daten werden nicht an Dritte ausserhalb des hypnovital-Netzwerks weitergegeben.
                </p>
                <p className="mt-2 text-xs text-gray-400">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)</p>
              </div>

              <div className="bg-[#f9f9f9] rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-2">c) Veranstaltungsanmeldung</h3>
                <p>
                  Bei der Anmeldung zu einem Seminar, Workshop oder einer anderen Veranstaltung erheben wir:
                  Vor- und Nachname, E-Mail-Adresse, Telefonnummer, Postadresse (Strasse, PLZ, Ort).
                  Diese Daten werden für die Vertragsabwicklung (Anmeldebestätigung, Kommunikation zur Veranstaltung,
                  Rechnungsstellung) benötigt.
                </p>
                <p className="mt-2 text-xs text-gray-400">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</p>
              </div>

              <div className="bg-[#f9f9f9] rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-2">d) Firmenangebote & Executive Coaching</h3>
                <p>
                  Bei Anfragen für Firmenworkshops, Keynotes, BGM-Angebote oder Executive Coaching erheben wir
                  zusätzlich: Unternehmen, Funktion/Position, Wohnort/Land, gewünschte Durchführungsart und
                  gewünschter Standort. Diese Daten dienen der Ausarbeitung eines massgeschneiderten Angebots.
                </p>
                <p className="mt-2 text-xs text-gray-400">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Massnahmen)</p>
              </div>

              <div className="bg-[#f9f9f9] rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-2">e) Shop / Audio-Programme</h3>
                <p>
                  Beim Kauf eines Audio-Programms wird deine E-Mail-Adresse verarbeitet, um dir den Downloadlink
                  zu senden. Die Zahlungsabwicklung erfolgt ausschliesslich über <strong>Stripe</strong>; wir
                  speichern keine Kreditkarten- oder Bankdaten. Weitere Informationen: stripe.com/privacy.
                  Der E-Mail-Versand des Downloadlinks erfolgt via <strong>Resend</strong>.
                </p>
                <p className="mt-2 text-xs text-gray-400">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</p>
              </div>

            </div>
          </div>

          {/* 3. Auftragsverarbeiter */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">3. Auftragsverarbeiter & Drittanbieter</h2>
            <p className="mb-3">
              Für den Betrieb dieser Website setzen wir folgende Dienstleister ein, mit denen Auftragsverarbeitungsverträge
              bestehen:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="text-left px-3 py-2 font-semibold text-gray-700 rounded-tl-lg">Anbieter</th>
                    <th className="text-left px-3 py-2 font-semibold text-gray-700">Zweck</th>
                    <th className="text-left px-3 py-2 font-semibold text-gray-700 rounded-tr-lg">Sitz / Datenschutz</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f0f0]">
                  <tr>
                    <td className="px-3 py-2 font-medium text-gray-800">Vercel Inc.</td>
                    <td className="px-3 py-2 text-gray-600">Website-Hosting & Infrastruktur</td>
                    <td className="px-3 py-2 text-gray-600">USA – vercel.com/legal/privacy-policy</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-gray-800">Stripe Inc.</td>
                    <td className="px-3 py-2 text-gray-600">Zahlungsabwicklung</td>
                    <td className="px-3 py-2 text-gray-600">USA – stripe.com/privacy</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-gray-800">Resend Inc.</td>
                    <td className="px-3 py-2 text-gray-600">Transaktionaler E-Mail-Versand</td>
                    <td className="px-3 py-2 text-gray-600">USA – resend.com/legal/privacy-policy</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Alle genannten US-Anbieter sind nach dem EU-US Data Privacy Framework zertifiziert bzw. haben
              Standardvertragsklauseln (SCCs) der EU-Kommission abgeschlossen, die einen angemessenen Datenschutz
              bei der Übertragung in Drittländer gewährleisten.
            </p>
          </div>

          {/* 4. Hosting */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">4. Hosting & Server-Logs</h2>
            <p>
              Diese Website wird bei <strong>Vercel Inc.</strong> (San Francisco, USA) gehostet. Bei jedem Aufruf
              unserer Website werden automatisch technische Informationen übermittelt (IP-Adresse, Browser, Betriebssystem,
              aufgerufene Seite, Datum/Uhrzeit). Diese Daten werden von Vercel in Server-Logs gespeichert und dienen
              ausschliesslich der Sicherheit und Stabilität des Betriebs. Wir haben keinen direkten Zugriff auf
              diese Logs und werten sie nicht aus.
            </p>
            <p className="mt-2 text-xs text-gray-400">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website)</p>
          </div>

          {/* 5. Cookies */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">5. Cookies</h2>
            <p>
              Diese Website verwendet ausschliesslich technisch notwendige Cookies (z. B. Session-Cookies für
              Formulare). Es werden <strong>keine Tracking-Cookies, Werbe-Cookies oder Analyse-Tools</strong> (wie
              Google Analytics) eingesetzt. Eine gesonderte Cookie-Einwilligung ist daher nicht erforderlich.
            </p>
          </div>

          {/* 6. Aufbewahrung */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">6. Speicherdauer</h2>
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
              <li>Kontaktanfragen: bis zur abschliessenden Bearbeitung, danach Löschung innerhalb von 6 Monaten</li>
              <li>Veranstaltungsanmeldungen: 10 Jahre gemäss gesetzlicher Aufbewahrungspflicht (OR/HGB)</li>
              <li>Rechnungsdaten (Shop): 10 Jahre gemäss Buchführungspflicht</li>
              <li>E-Mail-Kommunikation: 3 Jahre ab letztem Kontakt</li>
            </ul>
          </div>

          {/* 7. Deine Rechte */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">7. Deine Rechte</h2>
            <p className="mb-3">
              Du hast gegenüber uns jederzeit folgende Rechte bezüglich deiner personenbezogenen Daten:
            </p>
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li><strong className="text-gray-700">Auskunft</strong> – du kannst erfahren, welche Daten wir über dich gespeichert haben</li>
              <li><strong className="text-gray-700">Berichtigung</strong> – unrichtige Daten können korrigiert werden</li>
              <li><strong className="text-gray-700">Löschung</strong> – du kannst die Löschung deiner Daten verlangen (soweit keine gesetzliche Aufbewahrungspflicht besteht)</li>
              <li><strong className="text-gray-700">Einschränkung der Verarbeitung</strong> – du kannst die Verarbeitung einschränken lassen</li>
              <li><strong className="text-gray-700">Datenübertragbarkeit</strong> – du kannst deine Daten in einem maschinenlesbaren Format erhalten</li>
              <li><strong className="text-gray-700">Widerspruch</strong> – du kannst der Verarbeitung auf Basis unserer berechtigten Interessen widersprechen</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung deiner Rechte wende dich an:{' '}
              <a href="mailto:info@hypnovital.net" className="text-gray-700 hover:text-primary transition-colors">
                info@hypnovital.net
              </a>
            </p>
          </div>

          {/* 8. Beschwerderecht */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">8. Beschwerderecht bei einer Aufsichtsbehörde</h2>
            <p>
              Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig sind je nach
              Wohnsitz:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
              <li><strong className="text-gray-700">Schweiz:</strong> Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB) – edoeb.admin.ch</li>
              <li><strong className="text-gray-700">Deutschland:</strong> Die/der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI) oder die jeweils zuständige Landesbehörde</li>
              <li><strong className="text-gray-700">Österreich:</strong> Österreichische Datenschutzbehörde (DSB) – dsb.gv.at</li>
            </ul>
          </div>

          {/* 9. Änderungen */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">9. Änderungen dieser Erklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, etwa bei Änderungen unserer
              Dienstleistungen oder der Rechtslage. Die jeweils aktuelle Version ist unter hypnovital.net/datenschutz
              abrufbar. Das Datum der letzten Aktualisierung ist oben angegeben.
            </p>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
