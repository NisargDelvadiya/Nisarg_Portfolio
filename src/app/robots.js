/**
 * Dynamic robots.txt Generator for Next.js App Router
 * 
 * Directs search engine crawlers, protects private assets/sourcemaps, and specifies the sitemap index.
 */
export default function robots() {
  const baseUrl = "https://mahingunjal.com";

  try {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/", "/_next/", "/scratch/", "/*.json$"],
        },
        {
          userAgent: "Googlebot",
          allow: "/",
          disallow: ["/api/"],
        },
        {
          userAgent: "Bingbot",
          allow: "/",
          disallow: ["/api/"],
        },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    };
  } catch (err) {
    console.error("Robots.txt generation error:", err);
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }
}
