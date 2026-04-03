'use client'

import { useState } from 'react'
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react'
import type { QuizQuestion } from '@/lib/academy-data'

interface QuizSectionProps {
  questions: QuizQuestion[]
  onComplete?: (score: number, total: number) => void
}

export default function QuizSection({ questions, onComplete }: QuizSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const current = questions[currentIndex]
  const hasAnswered = selectedOption !== null
  const isCorrect = selectedOption === current?.correctIndex

  function handleSelect(optionIndex: number) {
    if (hasAnswered) return
    setSelectedOption(optionIndex)
    if (optionIndex === current.correctIndex) {
      setScore((s) => s + 1)
    }
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedOption(null)
    } else {
      setFinished(true)
      onComplete?.(score, questions.length)
    }
  }

  function handleRestart() {
    setCurrentIndex(0)
    setSelectedOption(null)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100)
    let message = ''
    if (percentage === 100) {
      message = 'Hervorragend! Alle Fragen richtig beantwortet.'
    } else if (percentage >= 70) {
      message = 'Gut gemacht! Du hast die wichtigsten Konzepte verstanden.'
    } else {
      message = 'Schau dir die Inhalte nochmals an und versuche es erneut.'
    }

    return (
      <div className="bg-[#f5f5f5] rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-headline font-black text-gray-900 mb-3">
          Quiz abgeschlossen
        </h3>
        <p className="text-4xl font-headline font-black text-primary mb-2">
          {score} von {questions.length}
        </p>
        <p className="text-gray-500 mb-6">{message}</p>
        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          <RotateCcw size={16} />
          Nochmals versuchen
        </button>
      </div>
    )
  }

  return (
    <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-8">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-500">
          Frage {currentIndex + 1} von {questions.length}
        </span>
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i < currentIndex
                  ? 'bg-primary'
                  : i === currentIndex
                  ? 'bg-primary/50'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h4 className="text-lg font-bold text-gray-900 mb-5">{current.question}</h4>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {current.options.map((option, i) => {
          let optionStyle = 'bg-white border border-[#eaeaea] hover:border-primary/50 cursor-pointer'

          if (hasAnswered) {
            if (i === current.correctIndex) {
              optionStyle = 'bg-green-50 border-2 border-green-500'
            } else if (i === selectedOption && !isCorrect) {
              optionStyle = 'bg-red-50 border-2 border-red-500'
            } else {
              optionStyle = 'bg-white border border-[#eaeaea] opacity-50'
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={hasAnswered}
              className={`w-full text-left rounded-xl p-4 text-sm transition-all duration-200 flex items-start gap-3 ${optionStyle}`}
            >
              <span className="w-6 h-6 rounded-full bg-[#f5f5f5] flex items-center justify-center text-xs font-bold text-gray-500 flex-shrink-0 mt-0.5">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-gray-700">{option}</span>
              {hasAnswered && i === current.correctIndex && (
                <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5 ml-auto" />
              )}
              {hasAnswered && i === selectedOption && !isCorrect && i !== current.correctIndex && (
                <XCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5 ml-auto" />
              )}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {hasAnswered && (
        <div
          className={`rounded-xl p-4 mb-6 text-sm leading-relaxed ${
            isCorrect
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}
        >
          <p className="font-semibold mb-1">{isCorrect ? 'Richtig!' : 'Leider falsch.'}</p>
          <p>{current.explanation}</p>
        </div>
      )}

      {/* Next Button */}
      {hasAnswered && (
        <button
          onClick={handleNext}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          {currentIndex < questions.length - 1 ? 'Nächste Frage' : 'Ergebnis anzeigen'}
          <ArrowRight size={16} />
        </button>
      )}
    </div>
  )
}
