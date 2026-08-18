/**
 * Dynamic Sitemap Generator for Next.js App Router
 * Ensures optimal search engine crawling & indexing (Google, Bing, DuckDuckGo)
 */
export default function sitemap() {
  const baseUrl = "https://mahingunjal.com";
  const currentDate = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/PrivacyPolicy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/T&C`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
