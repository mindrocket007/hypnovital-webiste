export default function StresskostenInfografik() {
  return (
    <div className="rounded-2xl border border-[#eaeaea] shadow-sm overflow-hidden bg-white">

      {/* ── Header ────────────────────────────────── */}
      <div className="px-6 pt-6 pb-4">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
          Beispielrechnung · 100 Mitarbeitende · pro Jahr
        </p>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h3 className="font-headline font-black text-xl text-gray-900 leading-snug">
            Die wahren Kosten<br />von Stress im Unternehmen
          </h3>
          <div className="text-right shrink-0">
            <p className="text-xs text-gray-400 mb-0.5">Gesamtkosten</p>
            <p className="font-headline font-black text-2xl text-gray-900">€/CHF 1'280'000</p>
          </div>
        </div>
      </div>

      {/* ── Proportionalbalken ────────────────────── */}
      <div className="px-6 pb-1">
        <div className="flex rounded-lg overflow-hidden h-8 text-xs font-bold">
          <div
            className="bg-primary flex items-center justify-center text-white gap-1"
            style={{ width: '28%' }}
          >
            28 %
          </div>
          <div
            className="bg-[#1a3d0e] flex items-center justify-center text-white gap-1 flex-1"
          >
            72 %
          </div>
        </div>
        {/* Labels unterhalb des Balkens */}
        <div className="flex text-[11px] font-semibold mt-1.5">
          <div className="text-primary" style={{ width: '28%' }}>Sichtbar</div>
          <div className="text-[#a3e635] flex-1">Unsichtbar</div>
        </div>
      </div>

      <p className="px-6 pt-1 pb-4 text-[11px] text-gray-400">
        Der Balken zeigt die Kostenverteilung – sichtbare und unsichtbare Anteile am gleichen Gesamtproblem.
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
            <p className="font-semibold text-gray-900 text-sm">Kranktage / Absenzen</p>
            <p className="font-headline font-black text-primary text-2xl">€/CHF 360'000</p>
            <p className="text-gray-400 text-xs">6 Tage × 100 MA × €/CHF 600 / Tag</p>
          </div>

          <div className="rounded-xl bg-white border border-[#eaeaea] px-4 py-3">
            <p className="text-xs text-gray-500 leading-relaxed italic">
              Was HR-Abteilungen typischerweise erfassen – aber nur ein Bruchteil der echten Kosten.
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
                <p className="font-semibold text-white text-sm">Präsentismus</p>
                <p className="font-headline font-black text-[#a3e635] text-lg whitespace-nowrap">€/CHF 720'000</p>
              </div>
              <p className="text-white/40 text-xs mt-0.5">Anwesend, aber kaum leistungsfähig (2× Absenzkosten)</p>
            </div>

            <div className="border-b border-white/10 pb-4">
              <div className="flex justify-between items-baseline gap-2 flex-wrap">
                <p className="font-semibold text-white text-sm">Fluktuation</p>
                <p className="font-headline font-black text-[#a3e635] text-lg whitespace-nowrap">€/CHF 120'000</p>
              </div>
              <p className="text-white/40 text-xs mt-0.5">Recruiting, Einarbeitung, Know-how-Verlust</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline gap-2 flex-wrap">
                <p className="font-semibold text-white text-sm">Fehler & Qualitätsverlust</p>
                <p className="font-headline font-black text-[#a3e635] text-lg whitespace-nowrap">€/CHF 80'000</p>
              </div>
              <p className="text-white/40 text-xs mt-0.5">Konzentrationsmängel, Fehlentscheide</p>
            </div>

          </div>
        </div>
      </div>

      {/* ── Footer ────────────────────────────────── */}
      <div className="px-6 py-3 bg-white border-t border-[#eaeaea]">
        <p className="text-gray-400 text-[11px]">
          Schätzwerte gemäss SECO, WHO & Harvard Business Review. Präsentismuskosten konservativ mit 2× Absenzkosten berechnet.
        </p>
      </div>

    </div>
  )
}
