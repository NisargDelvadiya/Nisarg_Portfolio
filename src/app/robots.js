/**
 * Dynamic robots.txt Generator for Next.js App Router
 * Directs search engine crawlers and points directly to the sitemap index.
 */
export default function robots() {
  const baseUrl = "https://mahingunjal.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
