"use client";

import React, { useState, useEffect } from "react";
import { FaCookieBite, FaTimes } from "react-icons/fa";

/**
 * @component CookieConsent
 * @description Accessible cookie consent notification banner that asks user for preference regarding
 * strictly essential cookies (e.g. Google Translate language state) and persists choices in localStorage.
 */
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check consent preference on initial client mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("portfolio_cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  /** Save accept choice in localStorage and dismiss banner */
  const handleAccept = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_cookie_consent", "accepted");
    }
    setIsVisible(false);
  };

  /** Save decline choice in localStorage and dismiss banner */
  const handleDecline = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_cookie_consent", "declined");
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="dialog"
      aria-live="polite"
      aria-label="Cookie Consent"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[99999] animate-fade-in"
    >
      <div className="backdrop-blur-2xl bg-[#10132E]/95 border border-purple/40 rounded-3xl p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.8)] text-white flex flex-col gap-4 relative">
        {/* Close Icon Button */}
        <button
          type="button"
          onClick={handleDecline}
          title="Dismiss cookie consent banner"
          aria-label="Dismiss cookie consent banner"
          className="absolute top-4 right-4 text-white-200 hover:text-purple transition-colors p-1 rounded-full focus-visible:outline-none cursor-pointer"
        >
          <FaTimes className="w-4 h-4" />
        </button>

        {/* Banner Title & Cookie Icon */}
        <div className="flex items-center gap-3 pr-6">
          <div
            className="w-10 h-10 rounded-2xl bg-purple/20 border border-purple/50 flex items-center justify-center text-purple shrink-0"
            aria-hidden="true"
          >
            <FaCookieBite className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-white tracking-tight">
            Cookie & Privacy Preference
          </h2>
        </div>

        {/* Banner Description */}
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          We use strictly essential functional cookies to remember your language choices (via Google Translate) and preserve UI preferences. We do not track or sell your personal data.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleDecline}
            title="Accept essential cookies only"
            aria-label="Accept essential cookies only"
            className="px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10 cursor-pointer"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={handleAccept}
            title="Accept all cookies"
            aria-label="Accept all cookies"
            className="px-5 py-2 text-xs font-bold text-black bg-purple hover:bg-purple/90 rounded-xl transition-all shadow-[0_0_15px_rgba(203,172,249,0.4)] cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CookieConsent;
