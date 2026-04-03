import { MetadataRoute } from 'next'
import { coaches } from '@/lib/data'
import { events as staticEvents } from '@/lib/events-data'
import { getPublishedBlogPosts } from '@/lib/blog-data'

const BASE_URL = 'https://hypnovital.net'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = getPublishedBlogPosts().map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    priority: 0.7,
  }))

  const staticRoutes = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/blog`, priority: 0.8 },
    { url: `${BASE_URL}/programme`, priority: 0.9 },
    { url: `${BASE_URL}/coach`, priority: 0.9 },
    { url: `${BASE_URL}/shop`, priority: 0.8 },
    { url: `${BASE_URL}/persoenliches-audio`, priority: 0.9 },
    { url: `${BASE_URL}/methode`, priority: 0.9 },
    { url: `${BASE_URL}/veranstaltungen`, priority: 0.8 },
    { url: `${BASE_URL}/unternehmen/firmenangebote`, priority: 0.8 },
    { url: `${BASE_URL}/unternehmen/executive-coaching`, priority: 0.7 },
    { url: `${BASE_URL}/unternehmen/keynotes`, priority: 0.7 },
    { url: `${BASE_URL}/franchise`, priority: 0.7 },
    { url: `${BASE_URL}/ueber-uns`, priority: 0.6 },
    { url: `${BASE_URL}/kontakt`, priority: 0.6 },
    { url: `${BASE_URL}/datenschutz`, priority: 0.2 },
    { url: `${BASE_URL}/impressum`, priority: 0.2 },
    { url: `${BASE_URL}/agb`, priority: 0.2 },
  ]

  const coachRoutes = coaches
    .filter((c) => c.isActive)
    .map((c) => ({
      url: `${BASE_URL}/coach/${c.slug}`,
      priority: 0.7,
    }))

  const eventRoutes = staticEvents.map((e) => ({
    url: `${BASE_URL}/veranstaltungen/${e.slug}`,
    priority: 0.6,
  }))

  return [...staticRoutes, ...coachRoutes, ...eventRoutes, ...blogRoutes].map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }))
}
