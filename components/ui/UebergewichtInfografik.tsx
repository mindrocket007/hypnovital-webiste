export default function UebergewichtInfografik() {
  return (
    <div className="rounded-2xl border border-[#eaeaea] shadow-sm overflow-hidden bg-white">

      {/* ── Header ────────────────────────────────── */}
      <div className="px-6 pt-6 pb-4">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
          Beispielrechnung · 100 Mitarbeitende · pro Jahr
        </p>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h3 className="font-headline font-black text-xl text-gray-900 leading-snug">
            Die wahren Kosten<br />von Übergewicht im Unternehmen
          </h3>
          <div className="text-right shrink-0">
            <p className="text-xs text-gray-400 mb-0.5">Gesamtkosten</p>
            <p className="font-headline font-black text-2xl text-gray-900">€/CHF 500'000</p>
          </div>
        </div>
      </div>

      {/* ── Proportionalbalken ────────────────────── */}
      <div className="px-6 pb-1">
        <div className="flex rounded-lg overflow-hidden h-8 text-xs font-bold">
          <div
            className="bg-primary flex items-center justify-center text-white gap-1"
            style={{ width: '24%' }}
          >
            24 %
          </div>
          <div
            className="bg-[#1a3d0e] flex items-center justify-center text-white gap-1 flex-1"
          >
            76 %
          </div>
        </div>
        <div className="flex text-[11px] font-semibold mt-1.5">
          <div className="text-primary" style={{ width: '24%' }}>Sichtbar</div>
          <div className="text-[#a3e635] flex-1">Unsichtbar</div>
        </div>
      </div>

      <p className="px-6 pt-1 pb-4 text-[11px] text-gray-400">
        Annahme: 40 von 100 MA übergewichtig, 5 Zusatz-Fehltage/Jahr, CHF/€ 600 Tagessatz.
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
            <p className="font-headline font-black text-primary text-2xl">€/CHF 120'000</p>
            <p className="text-gray-400 text-xs">40 MA × 5 Zusatztage × €/CHF 600 / Tag</p>
          </div>

          <div className="rounded-xl bg-white border border-[#eaeaea] px-4 py-3">
            <p className="text-xs text-gray-500 leading-relaxed italic">
              Was HR-Abteilungen erfassen – doch nur ein Bruchteil der tatsächlichen Belastung.
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
                <p className="font-semibold text-white text-sm">Präsentismus & Leistungsminderung</p>
                <p className="font-headline font-black text-[#a3e635] text-lg whitespace-nowrap">€/CHF 240'000</p>
              </div>
              <p className="text-white/40 text-xs mt-0.5">Anwesend, aber eingeschränkt leistungsfähig (2× Absenzkosten)</p>
            </div>

            <div className="border-b border-white/10 pb-4">
              <div className="flex justify-between items-baseline gap-2 flex-wrap">
                <p className="font-semibold text-white text-sm">Gesundheitskosten & Folgebehandlungen</p>
                <p className="font-headline font-black text-[#a3e635] text-lg whitespace-nowrap">€/CHF 80'000</p>
              </div>
              <p className="text-white/40 text-xs mt-0.5">Arzt, Physiotherapie, Medikamente, Prämienanteile</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline gap-2 flex-wrap">
                <p className="font-semibold text-white text-sm">Fluktuation & Frühaustritte</p>
                <p className="font-headline font-black text-[#a3e635] text-lg whitespace-nowrap">€/CHF 60'000</p>
              </div>
              <p className="text-white/40 text-xs mt-0.5">Rehab, Ersatzrekrutierung, Frühpension</p>
            </div>

          </div>
        </div>
      </div>

      {/* ── Footer ────────────────────────────────── */}
      <div className="px-6 py-3 bg-white border-t border-[#eaeaea]">
        <p className="text-gray-400 text-[11px]">
          Schätzwerte auf Basis von BAG, SECO, WHO & arbeitsmedizinischer Forschung. Präsentismuskosten konservativ mit 2× Absenzkosten berechnet.
        </p>
      </div>

    </div>
  )
}
