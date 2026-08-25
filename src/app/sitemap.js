export default function sitemap() {
  const baseUrl = 'https://nisargjayeshdelvadiya.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
