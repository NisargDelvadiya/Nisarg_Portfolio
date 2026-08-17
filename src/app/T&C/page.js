"use client";

export default function TermsAndConditions() {
  const handleBackToHome = () => {
    if (typeof window !== "undefined") {
      if (window.history.length <= 1) {
        window.close();
      } else {
        window.location.href = "/";
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-6 sm:p-12 md:p-16 flex flex-col items-center justify-center select-none">
      {/* Container */}
      <div className="max-w-4xl w-full bg-white border-2 border-red-100 shadow-2xl rounded-3xl p-6 sm:p-10 flex flex-col gap-8 relative overflow-hidden">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#a31515] rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-black italic text-xl">M</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase text-gray-900">
                Terms & Conditions
              </h1>
              <p className="text-xs uppercase tracking-widest text-[#a31515] font-extrabold">
                Mahin Gunjal — Portfolio Legal Specs
              </p>
            </div>
          </div>

          {/* Single Primary Back to Home Button */}
          <button
            type="button"
            onClick={handleBackToHome}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#a31515] hover:bg-[#821010] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <svg
              className="w-4 h-4 fill-current transition-transform group-hover:-translate-x-1"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </button>
        </div>

        {/* Content Body */}
        <div className="flex flex-col gap-6 text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
          <p className="text-xs uppercase tracking-wider text-[#a31515] font-extrabold">
            Last Updated: May 2026
          </p>

          <p>
            Welcome to Mahin Gunjal&apos;s Web Designer & VFX Artist Portfolio (&quot;the Website&quot;). By accessing, viewing, or interacting with this website, you agree to comply with and be bound by the following Terms & Conditions under the Information Technology Act, 2000 of India.
          </p>

          <div className="flex flex-col gap-2">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 border-l-4 border-[#a31515] pl-3">
              1. Intellectual Property & Showcase Use
            </h2>
            <p>
              All original visual artwork, 3D modeling assets, user interface layouts, interactive GSAP animations, web development code, images, and text presented on this website belong exclusively to Mahin Gunjal unless explicitly attributed to clients or open-source libraries. Sharing links to this portfolio for recruitment or professional review is encouraged.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 border-l-4 border-[#a31515] pl-3">
              2. Acceptable Platform Conduct
            </h2>
            <p>
              You agree not to perform automated web scraping, execute denial-of-service (DoS) attempts, probe underlying server endpoints, or attempt to extract source assets without prior written consent.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 border-l-4 border-[#a31515] pl-3">
              3. External Links & Portfolio Demos
            </h2>
            <p>
              This website contains links to external platforms, GitHub repositories, and professional networks (LinkedIn). Mahin Gunjal is not responsible for the content, security parameters, or terms of third-party websites.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 border-l-4 border-[#a31515] pl-3">
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              These operational terms are governed strictly by the laws of the Republic of India. Any legal inquiries or disputes fall under the jurisdiction of courts in Vadodara, Gujarat, Bharat.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 border-l-4 border-[#a31515] pl-3">
              5. Accessibility & WCAG 2.1 Compliance
            </h2>
            <p>
              This portfolio is committed to digital accessibility for all users, including individuals with visual, auditory, motor, or cognitive disabilities. Engineered in alignment with Web Content Accessibility Guidelines (WCAG 2.1 Level AA & AAA standards), the site features high text contrast ratios (exceeding 7:1), semantic HTML5 landmarks, visible keyboard focus indicators, screen-reader ARIA labeling, and a dedicated skip-navigation mechanism.
            </p>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 border-l-4 border-[#a31515] pl-3">
              6. Contact Information
            </h2>
            <div className="bg-red-50/60 border border-red-200 rounded-2xl p-4 text-xs sm:text-sm text-gray-800">
              <p><strong>Name:</strong> Mahin Gunjal</p>
              <p><strong>Role:</strong> Web Designer & VFX Artist</p>
              <p><strong>Domain:</strong> mahingunjal.com</p>
              <p><strong>Location:</strong> Baroda, Gujarat, Bharat 🇮🇳</p>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-center border-t border-gray-100 pt-6 text-center">
          <p className="text-xs text-gray-500 font-bold">
            &copy; 2026 • Mahin Gunjal • All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
