export default function robots() {
  const baseUrl = 'https://nisargjayeshdelvadiya.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
