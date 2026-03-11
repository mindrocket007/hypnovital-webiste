import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/success', '/cancel'],
      },
    ],
    sitemap: 'https://hypnovital.net/sitemap.xml',
  }
}
