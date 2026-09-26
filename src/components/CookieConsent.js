"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";

const subscribeCookieConsent = (callback) => {
  if (typeof window === "undefined") return () => {};
  try {
    window.addEventListener("storage", callback);
    window.addEventListener("cookie-consent-change", callback);
    return () => {
      window.removeEventListener("storage", callback);
      window.removeEventListener("cookie-consent-change", callback);
    };
  } catch (_) {
    return () => {};
  }
};

const getCookieConsentSnapshot = () => {
  if (typeof window === "undefined") return "accepted";
  try {
    return window.localStorage.getItem("cookie_consent") || "pending";
  } catch (_) {
    return "pending";
  }
};

const getCookieConsentServerSnapshot = () => "accepted";

/**
 * CookieConsent Component
 * 
 * Features:
 * - DPDP Act 2023 compliant cookie & consent banner
 * - Features ONLY two user actions: Close Cross (✕) and Accept button
 * - Persistent enforcement: If user clicks cross (✕), modal reappears after 30 seconds until accepted
 * - Iron Man Stark-themed design with accessible attributes and smooth interaction
 */
export default function CookieConsent() {
  const consentStatus = useSyncExternalStore(
    subscribeCookieConsent,
    getCookieConsentSnapshot,
    getCookieConsentServerSnapshot
  );

  const [isTemporarilyDismissed, setIsTemporarilyDismissed] = useState(false);
  const timerRef = useRef(null);

  // Clean up any pending 30-second timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  /**
   * Handle Close (Cross Button)
   * Dismisses the modal temporarily and schedules re-prompting after 30 seconds
   */
  const handleClose = () => {
    setIsTemporarilyDismissed(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setIsTemporarilyDismissed(false);
    }, 30000); // 30 seconds
  };

  /**
   * Handle Accept
   * Stores acceptance permanently in localStorage and prevents future re-prompts
   */
  const handleAccept = () => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("cookie_consent", "accepted");
        window.dispatchEvent(new Event("cookie-consent-change"));
      }
    } catch (err) {
      console.warn("CookieConsent: Failed to save consent:", err);
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsTemporarilyDismissed(true);
  };

  // Only display if consent has not been granted and modal is not in 30-second dismissal cooldown
  const isVisible = consentStatus !== "accepted" && !isTemporarilyDismissed;

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie Consent Banner"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-[100000] w-[calc(100%-2.5rem)] max-w-sm sm:max-w-md border-4 rounded-3xl p-5 sm:p-6 flex flex-col gap-4 select-none transition-all duration-300 bg-white border-[#AA0505] shadow-[8px_8px_0px_#6A0C0B] text-gray-900 animate-in fade-in slide-in-from-bottom-4"
    >
      {/* Header Row: Cookie Icon + Title + Close Cross (✕) Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl" aria-hidden="true">
            🍪
          </span>
          <h3 className="font-black text-xl italic tracking-tight uppercase text-gray-900">
            COOKIE CONSENT
          </h3>
        </div>

        {/* Cross Button: Dismisses for 30 seconds */}
        <button
          type="button"
          onClick={handleClose}
          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg cursor-pointer transition-colors text-gray-500 hover:text-[#AA0505] hover:bg-red-50 active:scale-95"
          title="Dismiss for 30 seconds"
          aria-label="Close cookie consent (will remind in 30 seconds)"
        >
          ✕
        </button>
      </div>

      {/* Consent Explanation Body */}
      <p className="font-extrabold text-sm sm:text-base leading-snug text-gray-800">
        We use essential cookies to maintain system security and functional preferences. No invasive tracking. Read our{" "}
        <Link
          href="/PrivacyPolicy"
          target="_blank"
          rel="noopener noreferrer"
          title="Read Privacy Policy (Opens in new tab)"
          aria-label="Read Privacy Policy (Opens in new tab)"
          className="underline decoration-2 font-black cursor-pointer text-[#AA0505] hover:text-[#6A0C0B]"
        >
          Privacy Policy
        </Link>{" "}
        for details.
      </p>

      {/* Action Button: ACCEPT Only */}
      <button
        type="button"
        onClick={handleAccept}
        title="Accept Cookies and Policies"
        aria-label="Accept Cookies and Policies"
        className="w-full py-3.5 font-black uppercase text-base tracking-wider rounded-2xl border-3 border-black shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000000] transition-all cursor-pointer mt-1 bg-[#AA0505] hover:bg-[#6A0C0B] text-white"
      >
        ACCEPT
      </button>
    </div>
  );
}
