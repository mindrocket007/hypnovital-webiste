import Link from 'next/link'

const steps = [
  { nr: '01', title: 'House of Change' },
  { nr: '02', title: 'Responsibility' },
  { nr: '03', title: 'Forgiveness' },
  { nr: '04', title: 'Resources' },
  { nr: '05', title: 'Power Room' },
]

export default function MethodeTeaser() {
  return (
    <div className="bg-gradient-to-br from-[#0e1e08] to-[#1a3e0e] rounded-2xl p-8 md:p-10">
      <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Die Methode</p>
      <h3 className="text-white font-headline font-black text-2xl md:text-3xl mb-3">
        House of Change
      </h3>
      <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xl">
        Die hypnovital® Methode begleitet dich in 5 psychologisch fundierten Schritten zur nachhaltigen Veränderung – dort wo andere aufhören, fangen wir erst an.
      </p>

      {/* Mini step indicators */}
      <div className="flex flex-wrap gap-2 mb-6">
        {steps.map((s) => (
          <div key={s.nr} className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5">
            <span className="text-primary text-xs font-bold">{s.nr}</span>
            <span className="text-white/80 text-xs font-medium">{s.title}</span>
          </div>
        ))}
      </div>

      <Link
        href="/methode"
        className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
      >
        Mehr zur Methode erfahren
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
      </Link>
    </div>
  )
}
