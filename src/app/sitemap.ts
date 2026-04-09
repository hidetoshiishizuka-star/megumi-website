import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.megumizaitaku.jp'

  const staticPages = [
    '', '/privacy',
    '/clinic/services', '/clinic/first-visit', '/clinic/fee', '/clinic/faq',
    '/clinic/staff', '/clinic/grief', '/clinic/recruit', '/clinic/partnership', '/clinic/contact',
    '/concept/about', '/concept/philosophy', '/concept/palliative-care',
    '/concept/training', '/concept/lecture', '/concept/books',
  ]

  const routes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  return routes
}
