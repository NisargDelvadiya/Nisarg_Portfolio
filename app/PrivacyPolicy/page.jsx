"use client";

import React from "react";
import { FaArrowLeft } from "react-icons/fa";

/**
 * @page PrivacyPolicy
 * @description Privacy Policy page for Nisarg's Developer Portfolio.
 * Outlines zero personal data collection, essential functional cookies (Google Translate),
 * infrastructure security, and DPDP Act 2023 compliance.
 */
export default function PrivacyPolicy() {
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
      {/* Background Grid Pattern */}
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

        {/* Main Privacy Policy Container */}
        <div className="backdrop-blur-xl bg-black-200/70 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-6 text-zinc-300 leading-relaxed text-sm sm:text-base">
          
          <div className="border-b border-purple/30 pb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Privacy <span className="text-purple">Policy</span>
            </h1>
            <p className="text-xs uppercase tracking-wider text-purple font-semibold mt-2">
              Last Updated: May 2026
            </p>
          </div>

          <p>
            Your privacy is deeply respected. Data protection parameters on Nisarg&apos;s Developer Portfolio Website are explicitly managed in total alignment with the Digital Personal Data Protection (DPDP) Act, 2023 of India.
          </p>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">1. ZERO PERSONAL DATA COLLECTION</h2>
            <p>
              This website serves strictly as an informational portfolio and engineering showcase. We do not require account registration, collect user passwords, or harvest personal identity information on this domain.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">2. ESSENTIAL FUNCTIONAL COOKIES & GOOGLE TRANSLATE</h2>
            <p>
              This portfolio operates on minimal, essential functional browser storage. We use functional cookies solely via Google Translate to remember your selected language preferences (<code className="text-purple">googtrans</code>) across site navigation. We do not employ third-party advertising, commercial tracking, or behavioral profiling cookies.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">3. COOKIE PREFERENCE MANAGEMENT</h2>
            <p>
              Upon visiting this website, you can manage your functional cookie preferences via our Cookie Consent banner. You may choose to accept essential cookies or dismiss the dialog at any time.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">4. HOSTING & INFRASTRUCTURE SECURITY</h2>
            <p>
              This portfolio is hosted on modern, global edge infrastructure with active HTTPS/SSL encryption to protect all web traffic between your browser and our servers.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">5. RIGHTS UNDER THE DPDP ACT, 2023</h2>
            <p>
              In compliance with Indian data principal rights, you have the right to request clarification regarding site operations or data handling parameters at any time.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">6. CONTACT INFORMATION</h2>
            <p>
              If you have any questions or privacy inquiries regarding this portfolio:
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
