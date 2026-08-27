/**
 * Dynamic Sitemap Generator for Next.js App Router
 * 
 * Ensures optimal search engine crawling & indexing (Google, Bing, DuckDuckGo, Yahoo, Yandex).
 * Generates standards-compliant XML sitemap entries for all portfolio routes with error resiliency.
 */
export default function sitemap() {
  const baseUrl = "https://mahingunjal.com";

  try {
    const now = new Date();

    return [
      {
        url: `${baseUrl}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 1.0,
        images: [`${baseUrl}/Assets/Mahin.jpeg`],
      },
      {
        url: `${baseUrl}/projects`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/sitemap`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/PrivacyPolicy`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/T&C`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      },
    ];
  } catch (err) {
    console.error("Sitemap generation error:", err);
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1.0,
      },
    ];
  }
}
