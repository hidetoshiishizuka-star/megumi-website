import type { MetadataRoute } from 'next'
import { columns } from '@/data/columns'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.megumizaitaku.jp'

  const staticPages = [
    '', '/privacy',
    '/clinic/services', '/clinic/first-visit', '/clinic/fee', '/clinic/faq',
    '/clinic/staff', '/clinic/grief', '/clinic/recruit', '/clinic/partnership', '/clinic/contact',
    '/concept/about', '/concept/philosophy', '/concept/palliative-care',
    '/concept/training', '/concept/lecture', '/concept/books', '/concept/blog',
  ]

  const routes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const blogRoutes = columns.map((col) => ({
    url: `${baseUrl}/concept/blog/${col.slug}`,
    lastModified: new Date(col.date),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [...routes, ...blogRoutes]
}
