"use client";

import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  const handleBackToHome = () => {
    if (typeof window !== "undefined") {
      if (window.history.length <= 1) {
        window.close();
      } else {
        router.push("/");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans p-6 sm:p-12 md:p-16 flex flex-col items-center justify-center select-none transition-colors duration-300">
      {/* Container */}
      <div className="max-w-4xl w-full bg-white dark:bg-zinc-900/90 border-2 border-red-100 dark:border-zinc-800 shadow-2xl dark:shadow-none rounded-3xl p-6 sm:p-10 flex flex-col gap-8 relative overflow-hidden transition-colors duration-300">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-zinc-800 pb-6 transition-colors duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#AA0505] rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-black italic text-xl">N</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase text-gray-900 dark:text-white transition-colors duration-300">
                Privacy Policy
              </h1>
              <p className="text-xs uppercase tracking-widest text-[#AA0505] font-extrabold">
                Nisarg Jayesh Delvadiya — Data Protection & Privacy Specs
              </p>
            </div>
          </div>

          {/* Single Primary Back to Home Button */}
          <button
            type="button"
            onClick={handleBackToHome}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#AA0505] hover:bg-[#6A0C0B] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
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
        <div className="flex flex-col gap-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium transition-colors duration-300">
          <p className="text-xs uppercase tracking-wider text-[#AA0505] font-extrabold">
            Last Updated: September 2026
          </p>

          <p>
            Your privacy is deeply respected. Data protection parameters on Nisarg Jayesh Delvadiya&apos;s Full-Stack Web Developer & Engineer Portfolio Website are explicitly managed in total alignment with the Digital Personal Data Protection (DPDP) Act, 2023 of India.
          </p>

          <div className="flex flex-col gap-2">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 dark:text-white border-l-4 border-[#AA0505] pl-3 transition-colors duration-300">
              1. Zero Personal Data Harvesting
            </h2>
            <p>
              This website serves strictly as an informational portfolio, engineering showcase, and direct contact channel. We do not require account registration, collect user passwords, or harvest personal identity information across this domain.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 dark:text-white border-l-4 border-[#AA0505] pl-3 transition-colors duration-300">
              2. Functional Storage & Google Translate Widget
            </h2>
            <p>
              This portfolio operates on minimal functional browser storage. We use essential functional cookies (<code className="text-[#AA0505]">googtrans</code>) solely via Google Translate to remember your chosen language preferences across your browser session. We do not employ third-party advertising, commercial tracking, or behavioral profiling cookies.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 dark:text-white border-l-4 border-[#AA0505] pl-3 transition-colors duration-300">
              3. Hosting & Transmission Security
            </h2>
            <p>
              This portfolio is delivered over high-speed global edge infrastructure with active HTTPS/SSL encryption to secure all network communication between your browser and our servers.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 dark:text-white border-l-4 border-[#AA0505] pl-3 transition-colors duration-300">
              4. Data Principal Rights Under DPDP Act 2023
            </h2>
            <p>
              In compliance with Indian data principal rights, you have full entitlement to inquire about site operations or request clarification regarding data handling parameters at any time.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 dark:text-white border-l-4 border-[#AA0505] pl-3 transition-colors duration-300">
              5. Digital Accessibility & WCAG 2.1 Statement
            </h2>
            <p>
              We believe the web should be accessible to everyone. This portfolio is engineered to comply with Web Content Accessibility Guidelines (WCAG 2.1 Level AA & AAA specifications), offering high-contrast typography ratios exceeding 7:1, keyboard navigability, semantic HTML landmarks, and ARIA attributes for screen-reading software.
            </p>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 dark:text-white border-l-4 border-[#AA0505] pl-3 transition-colors duration-300">
              6. Contact Information
            </h2>
            <div className="bg-red-50/60 dark:bg-zinc-800/60 border border-red-200 dark:border-zinc-700 rounded-2xl p-4 text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1 transition-colors duration-300">
              <p><strong>Name:</strong> Nisarg Jayesh Delvadiya</p>
              <p><strong>Role:</strong> Full-Stack Engineer & Co-Founder (Duo Brothers)</p>
              <p><strong>Email:</strong> nisarg.delvadiya1@zohomail.in</p>
              <p><strong>Domain:</strong> nisargjayeshdelvadiya.com</p>
              <p><strong>Location:</strong> Vadodara, Gujarat, Bharat 🇮🇳</p>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-center border-t border-gray-100 dark:border-zinc-800 pt-6 text-center transition-colors duration-300">
          <p className="text-xs text-gray-500 font-bold">
            &copy; 2026 • Nisarg Jayesh Delvadiya • All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
