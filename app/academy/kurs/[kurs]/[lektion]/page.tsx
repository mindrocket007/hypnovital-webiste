'use client'

import { useParams } from 'next/navigation'
import { useEffect, useCallback } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCourseBySlug } from '@/lib/academy-data'
import QuizSection from '@/components/academy/QuizSection'
import { Play, ArrowLeft, ArrowRight, CheckCircle2, BookOpen, Clock, Circle } from 'lucide-react'

function trackProgress(action: 'start' | 'complete', courseSlug: string, lessonSlug: string, quizScore?: number, quizTotal?: number) {
  try {
    const token = typeof window !== 'undefined' ? localStorage.getItem('academy_token') : null
    if (!token) return
    fetch('/api/academy/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, courseSlug, lessonSlug, action, quizScore, quizTotal }),
    }).catch(() => {})
  } catch {
    // Fire and forget
  }
}

export default function LessonPage() {
  const params = useParams()
  const kurs = params.kurs as string
  const lektion = params.lektion as string

  const course = getCourseBySlug(kurs)
  const lessonIndex = course ? course.lessons.findIndex((l) => l.slug === lektion) : -1
  const lesson = course && lessonIndex !== -1 ? course.lessons[lessonIndex] : null
  const prevLesson = course && lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null
  const nextLesson = course && lessonIndex < (course?.lessons.length ?? 0) - 1 ? course.lessons[lessonIndex + 1] : null

  useEffect(() => {
    trackProgress('start', kurs, lektion)
  }, [kurs, lektion])

  const handleQuizComplete = useCallback(
    (score: number, total: number) => {
      trackProgress('complete', kurs, lektion, score, total)
    },
    [kurs, lektion]
  )

  if (!course || lessonIndex === -1 || !lesson) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/academy/kurs/${course.slug}`}
            className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft size={14} />
            {course.title}
          </Link>
          <div className="flex items-center gap-3 text-white/50 text-sm mb-3">
            <span className="flex items-center gap-1.5">
              <BookOpen size={14} />
              Lektion {lessonIndex + 1} von {course.lessons.length}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {lesson.duration}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-headline font-black text-white leading-tight">
            {lesson.title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-10">

            {/* Sidebar – Kursnavigation */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Kursinhalt</p>
                <nav className="space-y-1">
                  {course.lessons.map((l, i) => {
                    const isCurrent = l.slug === lektion
                    const isPast = i < lessonIndex
                    return (
                      <Link
                        key={l.slug}
                        href={`/academy/kurs/${course.slug}/${l.slug}`}
                        className={`flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm ${
                          isCurrent
                            ? 'bg-primary/10 text-gray-900 font-semibold'
                            : 'hover:bg-[#f5f5f5] text-gray-500'
                        }`}
                      >
                        <span className="flex-shrink-0 mt-0.5">
                          {isPast ? (
                            <CheckCircle2 size={16} className="text-primary" />
                          ) : isCurrent ? (
                            <span className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center">
                              <span className="w-2 h-2 bg-primary rounded-full" />
                            </span>
                          ) : (
                            <Circle size={16} className="text-gray-300" />
                          )}
                        </span>
                        <span className="leading-snug">
                          <span className="block text-xs text-gray-400 font-normal">Lektion {i + 1}</span>
                          {l.title}
                        </span>
                      </Link>
                    )
                  })}
                </nav>

                {/* Fortschrittsbalken */}
                <div className="mt-6 pt-6 border-t border-[#eaeaea]">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Fortschritt</span>
                    <span>{Math.round(((lessonIndex + 1) / course.lessons.length) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-[#f0f0f0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${((lessonIndex + 1) / course.lessons.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-4xl">
              {/* Video */}
              {lesson.videoUrl ? (
                <div className="rounded-2xl overflow-hidden mb-10 bg-[#1a1a1a]">
                  <video
                    controls
                    preload="metadata"
                    className="w-full aspect-video"
                    poster=""
                  >
                    <source src={lesson.videoUrl} type="video/mp4" />
                    Dein Browser unterstützt kein Video.
                  </video>
                </div>
              ) : (
                <div className="bg-[#1a1a1a] rounded-2xl aspect-video flex flex-col items-center justify-center mb-10">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <Play size={28} className="text-white/60 ml-1" />
                  </div>
                  <p className="text-white/40 text-sm">Video kommt bald...</p>
                </div>
              )}

              {/* Text Content – Bullet Points */}
              <div className="mb-12">
                <h3 className="font-headline font-bold text-gray-900 text-lg mb-4">Das Wichtigste auf einen Blick</h3>
                <ul className="space-y-3">
                  {lesson.content.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Points */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-12">
                <h3 className="font-headline font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-primary" />
                  Die wichtigsten Punkte
                </h3>
                <ul className="space-y-3">
                  {lesson.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quiz */}
              <div className="mb-12">
                <h3 className="text-2xl font-headline font-black text-gray-900 mb-6">
                  Wissenscheck
                </h3>
                <QuizSection questions={lesson.quiz} onComplete={handleQuizComplete} />
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 border-t border-[#eaeaea]">
                {prevLesson ? (
                  <Link
                    href={`/academy/kurs/${course.slug}/${prevLesson.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#f5f5f5] text-gray-700 font-semibold rounded-xl hover:bg-[#eaeaea] transition-colors text-sm"
                  >
                    <ArrowLeft size={16} />
                    {prevLesson.title}
                  </Link>
                ) : (
                  <Link
                    href={`/academy/kurs/${course.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#f5f5f5] text-gray-700 font-semibold rounded-xl hover:bg-[#eaeaea] transition-colors text-sm"
                  >
                    <ArrowLeft size={16} />
                    Zurück zur Übersicht
                  </Link>
                )}
                {nextLesson ? (
                  <Link
                    href={`/academy/kurs/${course.slug}/${nextLesson.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm"
                  >
                    Nächste Lektion
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <Link
                    href={`/academy/kurs/${course.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm"
                  >
                    Kurs abschliessen
                    <CheckCircle2 size={16} />
                  </Link>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
