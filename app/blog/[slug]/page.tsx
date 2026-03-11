import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import { getBlogPostBySlug, getPublishedBlogPosts, isPublished, type BlogSection } from '@/lib/blog-data'

// Stündlich neu generieren → veröffentlichte Posts werden automatisch zugänglich
export const revalidate = 3600

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  // Nur veröffentlichte Posts werden beim Build statisch generiert
  return getPublishedBlogPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return { title: 'Artikel nicht gefunden' }
  const url = `https://hypnovital.net/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: { canonical: url },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-CH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case 'heading':
      return (
        <h2
          key={index}
          className="text-2xl font-bold text-gray-900 mt-10 mb-4 tracking-tight"
        >
          {section.text}
        </h2>
      )
    case 'paragraph':
      return (
        <p key={index} className="text-gray-600 leading-relaxed mb-5">
          {section.text}
        </p>
      )
    case 'list':
      return (
        <ul key={index} className="space-y-3 mb-6 pl-1">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'callout':
      return (
        <div
          key={index}
          className="my-8 bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-5"
        >
          <p className="text-gray-700 font-medium leading-relaxed">{section.text}</p>
        </div>
      )
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug)
  if (!post || !isPublished(post)) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'hypnovital',
      url: 'https://hypnovital.net',
    },
    publisher: {
      '@type': 'Organization',
      name: 'hypnovital',
      url: 'https://hypnovital.net',
    },
    url: `https://hypnovital.net/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Alle Artikel
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs font-medium bg-primary/20 text-primary px-2.5 py-1 rounded-full"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-5">
            {post.title}
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-7">{post.intro}</p>

          <div className="flex items-center gap-4 text-sm text-white/40 border-t border-white/10 pt-5">
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readingTime} Min. Lesezeit
            </span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>hypnovital® Redaktion</span>
          </div>
        </div>
      </section>

      {/* Artikelinhalt */}
      <section className="bg-[#f5f5f5] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl px-8 py-10 shadow-sm">
            {post.sections.map((section, i) => renderSection(section, i))}
          </div>

          {/* CTA-Box */}
          <div className="mt-10 bg-white rounded-2xl p-8 border border-brand-border shadow-sm text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
              Nächster Schritt
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Hypnose selbst erleben
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              Starte mit einem unserer Audio-Programme – jederzeit, von zuhause aus, ohne
              Vorkenntnisse.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/shop"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm"
              >
                Audio-Programme entdecken
              </Link>
              <Link
                href="/coach"
                className="px-6 py-3 border border-primary text-primary font-semibold rounded-xl hover:bg-primary/5 transition-colors text-sm"
              >
                Coach finden
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
