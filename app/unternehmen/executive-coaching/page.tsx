import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import InquiryForm from '@/components/forms/InquiryForm'
import { CheckCircle2, Shield, Target, Brain } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Executive Mental Performance Coaching',
  description: 'Exklusives Mental Performance Coaching für Geschäftsleitung, Führungskräfte und High Performer. Entscheidungsstärke, mentale Klarheit, Stressresilienz.',
}

export default function ExecutiveCoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Unternehmen · Executive Coaching
          </p>
          <h1 className="text-white font-headline font-black text-4xl md:text-6xl leading-tight max-w-4xl mb-6">
            executive mental performance coaching
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-10 leading-relaxed">
            Für Geschäftsleitung, Führungskräfte und High Performer. Mentale Klarheit, Entscheidungsstärke und Stressresilienz auf höchstem Niveau.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="#anfrage"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors"
            >
              Coaching anfragen
            </Link>
            <Link
              href="/unternehmen/firmenangebote"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Alle Firmenangebote
            </Link>
          </div>
          <p className="text-white/40 text-sm">
            Exklusiv · Vertraulich · Massgeschneidert
          </p>
        </div>
      </section>

      {/* Preisbox + Überblick */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-6">
              Mentale Performance für Führungskräfte
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Führungskräfte stehen unter extremem Druck. Entscheidungen unter Unsicherheit, hohe Verantwortung, permanente Erreichbarkeit. Das Executive Mental Performance Coaching von hypnovital® arbeitet direkt mit dem Unterbewusstsein – dort, wo Führungsverhalten wirklich entsteht.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              In vertraulichen Einzelsitzungen entwickeln Sie die mentalen Ressourcen, die Sie brauchen, um auch unter Druck klar, fokussiert und resilient zu bleiben.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Brain, label: 'Mentale Klarheit', desc: 'Bessere Entscheidungen durch klares Denken' },
                { icon: Shield, label: 'Resilienz', desc: 'Stark bleiben auch unter hohem Druck' },
                { icon: Target, label: 'Fokus', desc: 'Prioritäten klar erkennen und halten' },
              ].map((item) => (
                <div key={item.label} className="bg-[#f5f5f5] rounded-2xl p-4">
                  <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#eaeaea] bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                Exklusiv
              </span>
              <span className="inline-block bg-[#f5f5f5] text-gray-500 text-xs font-semibold px-3 py-1 rounded-full">
                Vertraulich
              </span>
            </div>

            <h3 className="font-headline font-bold text-2xl text-gray-900 mb-6">
              Executive Coaching
            </h3>

            <div className="bg-[#f5f5f5] rounded-xl p-5 mb-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Ihre Investition
              </p>
              <p className="text-4xl font-headline font-black text-primary">Preis auf Anfrage</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'Einzelsitzungen',
                'Online oder vor Ort',
                'Vollständig vertraulich',
                'Massgeschneidert auf Ihre Situation',
                'Flexible Terminplanung',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#anfrage"
              className="block text-center px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors"
            >
              Erstgespräch anfragen
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Themen */}
      <SectionWrapper bg="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline font-black text-gray-900 mb-8 text-center">
            Coaching-Themen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Entscheidungsstärke', desc: 'Klarheit in komplexen, unsicheren Situationen. Vertrauen in die eigene Urteilsfähigkeit.' },
              { title: 'Mentale Klarheit', desc: 'Gedankenklarheit unter Druck. Priorisierung. Abgrenzung von externem Lärm.' },
              { title: 'Stressresilienz', desc: 'Innere Ruhe als Führungsressource. Erholung optimieren, Belastung reduzieren.' },
              { title: 'Fokus & Performance', desc: 'Deep Work, Flow-Zustände und nachhaltige Hochleistung ohne Burnout.' },
              { title: 'Selbstführung', desc: 'Innere Überzeugungen, Antreiber und blinde Flecken erkennen und transformieren.' },
              { title: 'Kommunikation & Einfluss', desc: 'Sprache, Körpersprache und Überzeugungskraft auf unbewusster Ebene stärken.' },
            ].map((topic) => (
              <div key={topic.title} className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-1.5">{topic.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Prozess */}
      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-headline font-black text-gray-900 mb-4">
            So funktioniert das Coaching
          </h2>
          <p className="text-gray-500">
            Klar strukturiert, vollständig auf Ihre Situation angepasst.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { step: '01', title: 'Erstgespräch', desc: 'Kostenloses 30-Minuten Kennenlerngespräch. Wir klären Ziele, Erwartungen und ob wir zueinander passen.' },
            { step: '02', title: 'Analyse', desc: 'Tiefes Verständnis Ihrer Situation, aktuellen Herausforderungen und mentalen Ressourcen.' },
            { step: '03', title: 'Coaching-Prozess', desc: 'Regelmässige Einzelsitzungen mit Hypnose, Coaching-Interventionen und konkreten Tools.' },
            { step: '04', title: 'Integration', desc: 'Transfer in den Führungsalltag. Übungen, Audio-Programme und Follow-up nach Bedarf.' },
          ].map((phase) => (
            <div key={phase.step} className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-black text-sm font-headline">{phase.step}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{phase.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA / Anfrage */}
      <SectionWrapper bg="gray" id="anfrage">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
              Erstgespräch anfragen
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Unverbindlich, vertraulich, kostenlos. Wir melden uns innerhalb von 24 Stunden.
            </p>
          </div>
          <InquiryForm title="Executive Coaching anfragen" context="Executive Mental Performance Coaching" showFunction requirePhone showDeliveryMethod />
        </div>
      </SectionWrapper>
    </>
  )
}
