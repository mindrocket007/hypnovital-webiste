export default function DemotivationInfografik() {
  return (
    <div className="rounded-2xl border border-[#eaeaea] shadow-sm overflow-hidden bg-white">

      {/* ── Header ────────────────────────────────── */}
      <div className="px-6 pt-6 pb-4">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
          Beispielrechnung · 100 Mitarbeitende · pro Jahr
        </p>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h3 className="font-headline font-black text-xl text-gray-900 leading-snug">
            Die wahren Kosten<br />von Demotivation & innerer Kündigung
          </h3>
          <div className="text-right shrink-0">
            <p className="text-xs text-gray-400 mb-0.5">Gesamtkosten</p>
            <p className="font-headline font-black text-2xl text-gray-900">€/CHF 680'000</p>
          </div>
        </div>
      </div>

      {/* ── Proportionalbalken ────────────────────── */}
      <div className="px-6 pb-1">
        <div className="flex rounded-lg overflow-hidden h-8 text-xs font-bold">
          <div
            className="bg-primary flex items-center justify-center text-white gap-1"
            style={{ width: '22%' }}
          >
            22 %
          </div>
          <div
            className="bg-[#1a3d0e] flex items-center justify-center text-white gap-1 flex-1"
          >
            78 %
          </div>
        </div>
        <div className="flex text-[11px] font-semibold mt-1.5">
          <div className="text-primary" style={{ width: '22%' }}>Sichtbar</div>
          <div className="text-[#a3e635] flex-1">Unsichtbar</div>
        </div>
      </div>

      <p className="px-6 pt-1 pb-4 text-[11px] text-gray-400">
        Annahme: 30 von 100 MA demotiviert, 10 Abgänge/Jahr, CHF/€ 600 Tagessatz.
      </p>

      {/* ── Zwei Spalten ──────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#eaeaea]">

        {/* Links: Sichtbar */}
        <div className="bg-[#f8faf5] px-6 py-6 sm:border-r border-[#eaeaea]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Sichtbare Kosten</span>
          </div>

          <div className="space-y-1 mb-4">
            <p className="font-semibold text-gray-900 text-sm">Fluktuation & Recruiting</p>
            <p className="font-headline font-black text-primary text-2xl">€/CHF 150'000</p>
            <p className="text-gray-400 text-xs">10 Abgänge × €/CHF 15'000 Ersatzkosten</p>
          </div>

          <div className="rounded-xl bg-white border border-[#eaeaea] px-4 py-3">
            <p className="text-xs text-gray-500 leading-relaxed italic">
              Was Unternehmen direkt sehen – doch die eigentliche Schadenssumme liegt weit darunter verborgen.
            </p>
          </div>
        </div>

        {/* Rechts: Unsichtbar */}
        <div className="bg-[#1a3d0e] px-6 py-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635] shrink-0" />
            <span className="text-xs font-bold text-[#a3e635] uppercase tracking-wider">Unsichtbare Kosten</span>
          </div>

          <div className="space-y-4">

            <div className="border-b border-white/10 pb-4">
              <div className="flex justify-between items-baseline gap-2 flex-wrap">
                <p className="font-semibold text-white text-sm">Produktivitätsverlust</p>
                <p className="font-headline font-black text-[#a3e635] text-lg whitespace-nowrap">€/CHF 300'000</p>
              </div>
              <p className="text-white/40 text-xs mt-0.5">Anwesend, aber ohne Engagement und Leistungsbereitschaft</p>
            </div>

            <div className="border-b border-white/10 pb-4">
              <div className="flex justify-between items-baseline gap-2 flex-wrap">
                <p className="font-semibold text-white text-sm">Führungsaufwand & Reibungsverluste</p>
                <p className="font-headline font-black text-[#a3e635] text-lg whitespace-nowrap">€/CHF 130'000</p>
              </div>
              <p className="text-white/40 text-xs mt-0.5">Konfliktmanagement, Eskalationen, Motivationsarbeit</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline gap-2 flex-wrap">
                <p className="font-semibold text-white text-sm">Fehler & Qualitätsverlust</p>
                <p className="font-headline font-black text-[#a3e635] text-lg whitespace-nowrap">€/CHF 100'000</p>
              </div>
              <p className="text-white/40 text-xs mt-0.5">Unaufmerksamkeit, Kundenunzufriedenheit, Imageschäden</p>
            </div>

          </div>
        </div>
      </div>

      {/* ── Footer ────────────────────────────────── */}
      <div className="px-6 py-3 bg-white border-t border-[#eaeaea]">
        <p className="text-gray-400 text-[11px]">
          Schätzwerte auf Basis von Gallup Research & Harvard Business Review. Rekrutierungskosten nach SHRM-Branchendurchschnitt.
        </p>
      </div>

    </div>
  )
}
