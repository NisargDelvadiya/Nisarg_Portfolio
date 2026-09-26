"use client";

import Link from "next/link";

/**
 * Visual HTML Sitemap Page
 * 
 * Provides an accessible, search-engine-friendly, and interactive directory of all portfolio sections,
 * legal documentation, downloads, and external connections for Nisarg Jayesh Delvadiya.
 */
export default function SitemapPage() {
  const sections = [
    {
      category: "Main Portfolio Sections",
      description: "Interactive single-page landing components and milestones",
      links: [
        { name: "Hero & Suit Reveal", url: "/#hero", desc: "Interactive Iron Man suit & Arc Reactor reveal" },
        { name: "Skills Ticker Marquee", url: "/#skills", desc: "Dual angled high-speed tech & cultural marquee" },
        { name: "About & Credentials", url: "/#about", desc: "Bio, full-stack engineering, Indology & vision" },
        { name: "Technical Skills Matrix", url: "/#skills-matrix", desc: "Next.js, Sarvam AI, React, Node.js & core tools" },
        { name: "Featured Projects Showcase", url: "/#projects", desc: "Bookified, Artezen, Priyanka & web apps" },
        { name: "Career Journey & Milestones", url: "/#experiences", desc: "Freelance Web Developer & Co-Founder at Duo Brothers" },
        { name: "Contact & Work With Me", url: "/#contact", desc: "Direct email copy, 20-language translator & NGO philanthropy" },
      ],
    },
    {
      category: "Pages & Legal Documents",
      description: "Official legal guidelines, cookie disclosures, and terms",
      links: [
        { name: "Featured Projects Section", url: "/#projects", desc: "Showcase of projects and live website links" },
        { name: "Privacy Policy", url: "/PrivacyPolicy", desc: "DPDP Act 2023 compliance & data handling" },
        { name: "Terms & Conditions", url: "/T&C", desc: "Terms of service, usage licenses & IP rules" },
        { name: "Visual HTML Sitemap", url: "/sitemap", desc: "Directory index of all website routes" },
        { name: "XML Search Engine Sitemap", url: "/sitemap.xml", desc: "Standards-compliant XML sitemap for crawlers" },
      ],
    },
    {
      category: "Downloads & External Resources",
      description: "Resume, blog, and professional developer profiles",
      links: [
        { name: "Curriculum Vitae (Resume PDF)", url: "/Assets/files/Nisarg_Jayesh_Delvadiya_Resume.pdf", desc: "Official professional resume download" },
        { name: "GitHub Profile", url: "https://github.com/NisargDelvadiya", desc: "Open-source code repositories & contributions", external: true },
        { name: "The Nisarg Critic (Blog)", url: "https://thenisargcritic.blogspot.com", desc: "Cinema, geopolitics, philosophy & essays", external: true },
        { name: "Duo Brothers Co-Partner (Mahin)", url: "https://mahin-portfolio-spidey.vercel.app", desc: "Mahin Sidhartha Gunjal — Web Designer & VFX Artist", external: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-6 sm:p-12 md:p-16 flex flex-col items-center justify-center select-none">
      <div className="max-w-5xl w-full bg-white border-4 border-black rounded-3xl p-6 sm:p-12 shadow-[10px_10px_0px_#AA0505] flex flex-col gap-10 relative overflow-hidden">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-gray-200 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#AA0505] rounded-2xl border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000000]">
              <span className="text-white font-black italic text-2xl">N</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-black italic tracking-tighter uppercase text-gray-900">
                Portfolio Sitemap
              </h1>
              <p className="text-xs uppercase tracking-widest text-[#AA0505] font-extrabold">
                Nisarg Jayesh Delvadiya — Directory Index & Architecture
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#AA0505] hover:bg-[#6A0C0B] text-white font-black text-xs uppercase tracking-wider transition-all border-2 border-black shadow-[3px_3px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000000] cursor-pointer"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border-2 border-black rounded-2xl p-6 flex flex-col gap-4 shadow-[4px_4px_0px_#000000]"
            >
              <div className="border-b-2 border-black pb-3">
                <h2 className="font-black text-lg uppercase tracking-tight text-gray-900">
                  {sec.category}
                </h2>
                <p className="text-xs text-gray-600 font-medium mt-1">
                  {sec.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {sec.links.map((item, lIdx) => (
                  <li key={lIdx} className="flex flex-col">
                    {item.external ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-black text-[#AA0505] hover:text-[#6A0C0B] underline flex items-center gap-1.5"
                      >
                        {item.name} <span className="text-xs">↗</span>
                      </a>
                    ) : (
                      <Link
                        href={item.url}
                        className="text-sm font-black text-[#AA0505] hover:text-[#6A0C0B] underline"
                      >
                        {item.name}
                      </Link>
                    )}
                    <span className="text-xs text-gray-500 font-medium">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="border-t-2 border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-bold">
          <p>© 2026 Nisarg Jayesh Delvadiya • All Rights Reserved.</p>
          <div className="flex gap-4">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#AA0505] underline"
            >
              XML Feed
            </a>
            <span>•</span>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#AA0505] underline"
            >
              Robots.txt
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
