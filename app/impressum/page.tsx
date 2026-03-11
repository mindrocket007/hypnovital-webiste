import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'

export const metadata: Metadata = {
  title: 'Impressum',
}

export default function ImpressumPage() {
  return (
    <SectionWrapper bg="white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-headline font-black text-gray-900 mb-2">Impressum</h1>
        <p className="text-sm text-gray-400 mb-10">
          Angaben gemäss Art. 13 OR (CH) · § 5 DDG (DE) · § 5 ECG (AT)
        </p>

        <div className="space-y-10 text-gray-600 text-sm leading-relaxed">

          {/* Anbieter */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">Anbieter</h2>
            <p className="font-semibold text-gray-800">Mind Rocket GmbH</p>
            <p>Gresigengasse 3</p>
            <p>6055 Alpnach Dorf</p>
            <p>Schweiz</p>
            <p className="mt-3">
              Vertreten durch den Geschäftsführer: <span className="font-medium text-gray-700">Franz Ruchti</span>
            </p>
            <p className="mt-3">
              Telefon:{' '}
              <a href="tel:+41788815379" className="text-gray-700 hover:text-primary transition-colors">
                +41 78 881 53 79
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a href="mailto:info@hypnovital.net" className="text-gray-700 hover:text-primary transition-colors">
                info@hypnovital.net
              </a>
            </p>
            <p>
              Website:{' '}
              <a href="https://hypnovital.net" className="text-gray-700 hover:text-primary transition-colors">
                https://hypnovital.net
              </a>
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Handelsregister */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">Handelsregister</h2>
            <p>
              Eingetragen im Handelsregister des Kantons Obwalden, Schweiz
            </p>
            <p className="mt-2">
              Handelsregister-Nr.: <span className="font-medium text-gray-700">CH-140-4004121-4</span>
            </p>
            <p>
              UID (Unternehmens-Identifikation):{' '}
              <span className="font-medium text-gray-700">CHE-491.002.733</span>
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Mehrwertsteuer */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">Mehrwertsteuer</h2>
            <p>
              Die Mind Rocket GmbH unterliegt der Schweizer Mehrwertsteuerpflicht (MWST).
              Für Leistungen an Kundinnen und Kunden in Deutschland und Österreich kann
              je nach Leistungsart und Umsatz die entsprechende EU-Mehrwertsteuerregelung
              (EU-OSS) zur Anwendung kommen.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Verantwortlich für den Inhalt */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">
              Verantwortlich für den Inhalt
            </h2>
            <p>
              Franz Ruchti<br />
              Gresigengasse 3<br />
              6055 Alpnach Dorf<br />
              Schweiz
            </p>
            <p className="mt-2 text-xs text-gray-400">
              (gemäss § 18 Abs. 2 MStV für Nutzer aus Deutschland)
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Berufsbezeichnung */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">Berufsrechtliche Hinweise</h2>
            <p>
              Die von hypnovital® angebotenen Leistungen im Bereich Hypnose, Coaching und
              mentale Entwicklung stellen{' '}
              <span className="font-semibold text-gray-700">
                keine medizinische, psychotherapeutische oder heilkundliche Tätigkeit
              </span>{' '}
              dar. Die Berufsbezeichnungen «Hypnose-Coach», «Life Coach» und «Mental Coach»
              sind in der Schweiz, Deutschland und Österreich nicht gesetzlich geregelt und
              unterliegen keiner staatlichen Aufsicht oder Zulassungspflicht.
            </p>
            <p className="mt-2">
              Unsere Angebote dienen ausschliesslich der persönlichen Weiterentwicklung,
              Entspannung und Prävention. Sie ersetzen keine ärztliche oder psychotherapeutische
              Diagnose, Beratung oder Behandlung. Bei gesundheitlichen Beschwerden wenden Sie
              sich bitte an eine qualifizierte medizinische Fachperson.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Markenhinweis */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">Markenrecht</h2>
            <p>
              <span className="font-medium text-gray-700">hypnovital®</span> ist eine beim
              Eidgenössischen Institut für Geistiges Eigentum (IGE/IPI), Schweiz, eingetragene Marke.
            </p>
            <p className="mt-2">
              Markennummer: <span className="font-semibold text-gray-800">556713</span>
            </p>
            <p>
              Nizza-Klassen: <span className="font-semibold text-gray-800">9, 16, 35, 41, 44</span>
            </p>
            <p className="mt-2">
              Die Marke hypnovital® sowie alle damit verbundenen Inhalte, Logos und Konzepte
              sind markenrechtlich geschützt. Jede unbefugte Verwendung ist untersagt.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Urheberrechte */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website
              unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
              jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung der Mind Rocket GmbH. Downloads und Kopien dieser Website
              sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-2">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
              die Urheberrechte Dritter beachtet. Solltest du trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
              Hinweis an{' '}
              <a href="mailto:info@hypnovital.net" className="text-gray-700 hover:text-primary transition-colors">
                info@hypnovital.net
              </a>
              . Bei Bekanntwerden von Rechtsverletzungen werden wir den entsprechenden Inhalt
              umgehend entfernen.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Haftungsausschluss */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">Haftungsausschluss</h2>

            <h3 className="font-semibold text-gray-700 mb-1">Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Website wurden mit grösster Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
              Gewähr übernehmen. Als Diensteanbieter sind wir gemäss § 7 Abs. 1 DDG (DE) für
              eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
              DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen.
            </p>

            <h3 className="font-semibold text-gray-700 mt-4 mb-1">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
              zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstösse überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Online-Streitbeilegung */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-3">
              Online-Streitbeilegung (EU/EWR)
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors underline underline-offset-2"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              Unsere E-Mail-Adresse für etwaige Beschwerden:{' '}
              <a href="mailto:info@hypnovital.net" className="text-gray-700 hover:text-primary transition-colors">
                info@hypnovital.net
              </a>
            </p>
            <p className="mt-2">
              Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
