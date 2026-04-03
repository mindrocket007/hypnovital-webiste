'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Clock, CheckCircle2, ArrowRight, Circle, Play } from 'lucide-react'
import type { Lesson } from '@/lib/academy-data'

interface ProgressEntry {
  lesson_slug: string
  completed_at: string | null
  quiz_score: number | null
  quiz_total: number | null
}

interface Props {
  lessons: Lesson[]
  courseSlug: string
}

export default function LessonList({ lessons, courseSlug }: Props) {
  const [isParticipant, setIsParticipant] = useState(false)
  const [progress, setProgress] = useState<ProgressEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('academy_token')
    if (!token) {
      setIsParticipant(false)
      setLoading(false)
      return
    }
    setIsParticipant(true)

    fetch(`/api/academy/progress?token=${token}`)
      .then(res => res.json())
      .then(data => {
        if (data.progress) {
          setProgress(data.progress)
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  // Bestimme welche Lektion die nächste offene ist
  const completedSlugs = new Set(
    progress.filter(p => p.completed_at).map(p => p.lesson_slug)
  )
  const nextLessonIndex = lessons.findIndex(l => !completedSlugs.has(l.slug))
  const allCompleted = completedSlugs.size === lessons.length

  return (
    <div className="space-y-4">
      {/* Fortschrittsanzeige für Teilnehmende */}
      {isParticipant && !loading && (
        <div className="flex items-center gap-4 mb-2">
          <div className="flex-1 h-2 bg-[#f0f0f0] rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${(completedSlugs.size / lessons.length) * 100}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-gray-500 flex-shrink-0">
            {completedSlugs.size} / {lessons.length} abgeschlossen
          </span>
        </div>
      )}

      {/* "Weiter bei..." Hinweis */}
      {isParticipant && !loading && !allCompleted && completedSlugs.size > 0 && nextLessonIndex >= 0 && (
        <Link
          href={`/academy/kurs/${courseSlug}/${lessons[nextLessonIndex].slug}`}
          className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-2xl px-5 py-4 hover:bg-primary/10 transition-colors"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <Play size={18} className="text-white ml-0.5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">Weiter bei Lektion {nextLessonIndex + 1}</p>
            <p className="text-xs text-gray-500">{lessons[nextLessonIndex].title}</p>
          </div>
          <ArrowRight size={18} className="text-primary flex-shrink-0" />
        </Link>
      )}

      {/* Alle abgeschlossen */}
      {isParticipant && !loading && allCompleted && (
        <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-2xl px-5 py-4">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <CheckCircle2 size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Kurs abgeschlossen</p>
            <p className="text-xs text-gray-500">Du hast alle Lektionen erfolgreich absolviert.</p>
          </div>
        </div>
      )}

      {/* Lektionen */}
      {lessons.map((lesson, index) => {
        const isCompleted = completedSlugs.has(lesson.slug)
        const isNext = index === nextLessonIndex && isParticipant
        const quizEntry = progress.find(p => p.lesson_slug === lesson.slug && p.completed_at)

        const inner = (
          <>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm font-headline font-bold ${
              isCompleted
                ? 'bg-primary text-white'
                : isNext
                ? 'bg-white border-2 border-primary text-primary'
                : 'bg-white text-primary'
            }`}>
              {isCompleted ? (
                <CheckCircle2 size={20} />
              ) : (
                index + 1
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className={`font-bold text-gray-900 ${isParticipant ? 'group-hover:text-primary transition-colors' : ''}`}>
                  {lesson.title}
                </h3>
                {isCompleted && (
                  <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    Abgeschlossen
                  </span>
                )}
                {isNext && !isCompleted && (
                  <span className="text-[10px] font-semibold text-white bg-primary px-2 py-0.5 rounded-full">
                    Aktuell
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-2">
                {lesson.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {lesson.duration}
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={12} />
                  {lesson.quiz.length} Quizfragen
                </span>
                {quizEntry && quizEntry.quiz_score !== null && (
                  <span className="flex items-center gap-1 text-primary font-semibold">
                    Quiz: {quizEntry.quiz_score}/{quizEntry.quiz_total}
                  </span>
                )}
              </div>
            </div>
            {isParticipant && (
              <div className="flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1">
                {isCompleted ? 'Nochmal' : 'Starten'}
                <ArrowRight size={14} />
              </div>
            )}
          </>
        )

        if (isParticipant) {
          return (
            <Link
              key={lesson.slug}
              href={`/academy/kurs/${courseSlug}/${lesson.slug}`}
              className={`group flex items-start gap-4 rounded-2xl p-5 hover:shadow-md transition-all duration-200 ${
                isCompleted ? 'bg-primary/5' : isNext ? 'bg-[#f5f5f5] ring-2 ring-primary/30' : 'bg-[#f5f5f5]'
              }`}
            >
              {inner}
            </Link>
          )
        }

        return (
          <div
            key={lesson.slug}
            className="flex items-start gap-4 bg-[#f5f5f5] rounded-2xl p-5"
          >
            {inner}
          </div>
        )
      })}
    </div>
  )
}
