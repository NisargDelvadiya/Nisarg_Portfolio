export const metadata = {
  title: "HTML Sitemap & Navigation Directory | Mahin Gunjal",
  description:
    "Explore the complete sitemap directory for Mahin Gunjal's official portfolio. Browse sections, featured projects, work experiences, skills matrix, and legal policies.",
  alternates: {
    canonical: "/sitemap",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sitemap Directory — Mahin Gunjal Portfolio",
    description:
      "Explore the complete sitemap directory for Mahin Gunjal's official portfolio.",
    url: "https://mahingunjal.com/sitemap",
  },
};

export default function SitemapLayout({ children }) {
  return children;
}
