import type { Metadata } from 'next'

// Seite stündlich neu generieren → neue Posts erscheinen automatisch am Veröffentlichungsdatum
export const revalidate = 3600
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { getPublishedBlogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog – Wissen rund um Hypnose & mentale Stärke',
  description:
    'Fundierte Artikel zu Hypnose, Coaching, Stressmanagement und mentaler Stärke – von hypnovital® Experten für dein Unterbewusstsein.',
  openGraph: {
    title: 'Blog – Wissen rund um Hypnose & mentale Stärke',
    description:
      'Fundierte Artikel zu Hypnose, Coaching, Stressmanagement und mentaler Stärke.',
    url: 'https://hypnovital.net/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog – Wissen rund um Hypnose & mentale Stärke',
    description:
      'Fundierte Artikel zu Hypnose, Coaching, Stressmanagement und mentaler Stärke.',
  },
  alternates: { canonical: 'https://hypnovital.net/blog' },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-CH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getPublishedBlogPosts()

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5 leading-tight tracking-tight">
              Wissen aus der Praxis
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              Fundierte Artikel zu Hypnose, Coaching und mentaler Stärke – verständlich erklärt,
              praxisnah aufbereitet.
            </p>
          </div>
        </div>
      </section>

      {/* Artikel-Liste */}
      <SectionWrapper bg="gray">
        {posts.length === 0 ? (
          <p className="text-gray-400 text-center py-12">Bald erscheinen hier die ersten Artikel.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl p-7 flex flex-col border border-brand-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5 min-h-[48px] content-start">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-6">
                  {post.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readingTime} Min. Lesezeit
                  </span>
                  <span>{formatDate(post.date)}</span>
                </div>

                <div className="flex items-center gap-1.5 text-primary font-semibold text-sm mt-5 group-hover:gap-2.5 transition-all">
                  Lesen <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </SectionWrapper>
    </>
  )
}
