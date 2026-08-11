"use client";

import React from "react";
import { FaArrowLeft } from "react-icons/fa";

/**
 * @page TermsAndConditions
 * @description Terms & Conditions legal specification page for Nisarg's Developer Portfolio.
 * Outlines intellectual property rights, acceptable use policies, WCAG accessibility compliance standards, and contact details.
 */
export default function TermsAndConditions() {
  const handleBackToPortfolio = () => {
    if (typeof window !== "undefined") {
      window.close();
      setTimeout(() => {
        window.location.href = "/";
      }, 100);
    }
  };

  return (
    <main className="min-h-screen bg-black-100 text-white flex flex-col items-center py-12 px-4 sm:px-8 relative overflow-x-hidden">
      {/* Background Grid */}
      <div className="w-full absolute left-0 top-0 min-h-screen pointer-events-none opacity-30" aria-hidden="true">
        <img src="/bg/footer-grid.svg" alt="Background grid pattern" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-4xl w-full relative z-10 flex flex-col gap-8">
        
        {/* Back Link Button */}
        <button
          type="button"
          onClick={handleBackToPortfolio}
          title="Return to Portfolio main page"
          aria-label="Return to Portfolio main page"
          className="inline-flex items-center gap-2 text-purple hover:text-white font-semibold text-sm transition-colors w-max bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple"
        >
          <FaArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Portfolio
        </button>

        {/* Main Terms & Conditions Box */}
        <div className="backdrop-blur-xl bg-black-200/70 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-6 text-zinc-300 leading-relaxed text-sm sm:text-base">
          
          <div className="border-b border-purple/30 pb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Terms & <span className="text-purple">Conditions</span>
            </h1>
            <p className="text-xs uppercase tracking-wider text-purple font-semibold mt-2">
              Last Updated: May 2026
            </p>
          </div>

          <p>
            Welcome to Nisarg&apos;s Developer Portfolio (&quot;the Website&quot;). By browsing, viewing, or interacting with this website, you agree to be bound by these Terms of Use in compliance with the Information Technology Act, 2000 of India.
          </p>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">1. INTELLECTUAL PROPERTY & CONTENT USE</h2>
            <p>
              All project showcases, source code demonstrations, user interface designs, images, and text contained on this website are the intellectual property of Nisarg unless explicitly noted otherwise. You may share links to this portfolio for recruitment, professional evaluation, or referral purposes.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">2. ACCEPTABLE PLATFORM USE</h2>
            <p>
              You explicitly agree not to perform automated web scraping, execute denial-of-service attempts, probe backend endpoints, or attempt to compromise the hosting infrastructure and edge delivery networks of this website.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">3. THIRD-PARTY LINKS & EXTERNAL PROJECTS</h2>
            <p>
              This website links to external live projects (such as LogDiary and MyTodo), GitHub repositories, and professional networks (LinkedIn). Nisarg is not responsible for the content, privacy policies, or practices of third-party domains.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">4. LIMITATION OF LIABILITY</h2>
            <p>
              The content on this website is provided strictly &quot;as-is&quot; for informational and professional demonstration purposes. Under no circumstances shall the developer be liable for temporary hosting downtime, internet connectivity lapses, or third-party service outages.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">5. ACCESSIBILITY & WCAG 2.1 COMPLIANCE</h2>
            <p>
              This portfolio is engineered in full alignment with the Web Content Accessibility Guidelines (WCAG 2.1 Level AA & AAA standards). The codebase enforces high-contrast ratios exceeding 7:1, semantic HTML5 landmark tags, comprehensive keyboard navigability (<kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20 text-xs">Tab</kbd> / <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20 text-xs">Enter</kbd>), focus-visible indicators, screen-reader ARIA labeling, and a dedicated skip-navigation mechanism.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">6. GOVERNING LAW & JURISDICTION</h2>
            <p>
              These operational terms are governed completely by the cyber laws of the Republic of India. Any legal inquiries or disputes fall under the jurisdiction of courts in Gujarat, Bharat.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">7. CONTACT DETAILS</h2>
            <p>
              If you have any questions, professional inquiries, or feedback regarding these Terms or Accessibility:
            </p>
            <div className="p-4 bg-white/5 border-l-4 border-purple rounded-r-xl text-xs sm:text-sm text-white flex flex-col gap-1 mt-1">
              <p><strong>Name:</strong> Nisarg</p>
              <p><strong>Email:</strong> nisarg.delvadiya1@zohomail.in</p>
              <p><strong>Location:</strong> Vadodara, Gujarat, Bharat</p>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <p className="text-center text-xs text-white-200">
          &copy; 2026 • Made with ❤️ in Bharat 🇮🇳 | Nisarg • All Rights Reserved
        </p>

      </div>
    </main>
  );
}
