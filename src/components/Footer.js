"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { useTheme } from "@/context/ThemeContext";

/**
 * 20 Indian Official Languages Supported by the Custom Language Dropdown
 * Integrated with the Google Translate Client API
 */
const ALL_LANGUAGES = [
  { code: "en", name: "English" },
  { code: "as", name: "Assamese" },
  { code: "bn", name: "Bengali" },
  { code: "doi", name: "Dogri" },
  { code: "gu", name: "Gujarati" },
  { code: "hi", name: "Hindi" },
  { code: "kn", name: "Kannada" },
  { code: "ks", name: "Kashmiri" },
  { code: "gom", name: "Konkani" },
  { code: "mai", name: "Maithili" },
  { code: "ml", name: "Malayalam" },
  { code: "mni-Mtei", name: "Manipuri (Meiteilon)" },
  { code: "mr", name: "Marathi" },
  { code: "ne", name: "Nepali" },
  { code: "or", name: "Odia" },
  { code: "pa", name: "Punjabi" },
  { code: "sa", name: "Sanskrit" },
  { code: "sat", name: "Santali" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
];

// Defensive snapshot for user language consent
const getConsentSnapshot = () => {
  try {
    if (typeof window !== "undefined") {
      const consent = window.localStorage.getItem("user_language_consent");
      return !consent; // true = show modal if not yet answered
    }
  } catch {
    // Safe fallback
  }
  return false;
};

const getConsentServerSnapshot = () => false;

const subscribeConsent = (callback) => {
  try {
    if (typeof window !== "undefined") {
      window.addEventListener("storage", callback);
      window.addEventListener("consent-change", callback);
      return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener("consent-change", callback);
      };
    }
  } catch {
    // Safe fallback
  }
  return () => {};
};

/**
 * Footer Component
 * 
 * Includes:
 * 1. "Work With Me" Contact callout with one-click email clipboard copy
 * 2. Legal navigation links (Terms & Conditions, Privacy Policy)
 * 3. Social media and professional connect links (GitHub, LinkedIn, Instagram)
 * 4. Multi-language selector powered by Google Translate with zero top-banner visual shift
 * 5. DPDP Act 2023 compliant cookie & consent banner
 * 6. Responsive design with Spider-Man & Venom theme support
 */
export default function Footer() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { isVenomMode } = useTheme();

  // Track and synchronize browser fullscreen state
  useEffect(() => {
    const updateFullscreenState = () => {
      const isCurrentlyFullscreen = Boolean(
        typeof document !== "undefined" &&
          (document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement)
      );
      setIsFullscreen(isCurrentlyFullscreen);
    };

    if (typeof document !== "undefined") {
      document.addEventListener("fullscreenchange", updateFullscreenState);
      document.addEventListener("webkitfullscreenchange", updateFullscreenState);
      document.addEventListener("mozfullscreenchange", updateFullscreenState);
      document.addEventListener("MSFullscreenChange", updateFullscreenState);
    }

    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("fullscreenchange", updateFullscreenState);
        document.removeEventListener("webkitfullscreenchange", updateFullscreenState);
        document.removeEventListener("mozfullscreenchange", updateFullscreenState);
        document.removeEventListener("MSFullscreenChange", updateFullscreenState);
      }
    };
  }, []);

  /** Toggle Fullscreen mode to provide immersive full screen access */
  const handleToggleFullscreen = async () => {
    try {
      if (typeof document === "undefined") return;

      const doc = document;
      const isFull = Boolean(
        doc.fullscreenElement ||
          doc.webkitFullscreenElement ||
          doc.mozFullScreenElement ||
          doc.msFullscreenElement
      );

      if (!isFull) {
        const docEl = doc.documentElement;
        if (docEl.requestFullscreen) {
          await docEl.requestFullscreen();
        } else if (docEl.webkitRequestFullscreen) {
          await docEl.webkitRequestFullscreen();
        } else if (docEl.mozRequestFullScreen) {
          await docEl.mozRequestFullScreen();
        } else if (docEl.msRequestFullscreen) {
          await docEl.msRequestFullscreen();
        }
      } else {
        if (doc.exitFullscreen) {
          await doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          await doc.webkitExitFullscreen();
        } else if (doc.mozCancelFullScreen) {
          await doc.mozCancelFullScreen();
        } else if (doc.msExitFullscreen) {
          await doc.msExitFullscreen();
        }
      }
    } catch (err) {
      console.warn("Footer: Fullscreen toggle error:", err);
    }
  };

  const showConsent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot
  );

  /** Copy Email to Clipboard with fallback */
  const handleCopyEmail = async () => {
    const email = "mahingunjal@gmail.com";
    try {
      if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
        return;
      }
      // Fallback method for older browsers or restricted sandboxes
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.warn("Footer: Clipboard copy failed:", err);
      // Still give UI feedback so user knows email is selected
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  /** Handle consent response */
  const handleAcceptConsent = () => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("user_language_consent", "granted");
        window.dispatchEvent(new Event("consent-change"));
      }
    } catch (err) {
      console.warn("Footer: Consent storage failed:", err);
    }
  };

  const handleDeclineConsent = () => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("user_language_consent", "declined");
        window.dispatchEvent(new Event("consent-change"));
      }
    } catch (err) {
      console.warn("Footer: Consent decline storage failed:", err);
    }
  };

  useEffect(() => {
    // Developer Signature Console Watermark
    try {
      console.log(
        "%c 🕷️ Developed by Nisarg ",
        "background: #a31515; color: #ffffff; font-size: 12px; font-weight: bold; padding: 6px 12px; border-radius: 6px;"
      );
    } catch {
      // Ignore console logging issues
    }

    // Google Translate Initialization Script with error protection
    const addScript = () => {
      try {
        if (typeof document === "undefined" || document.getElementById("google-translate-script")) return;
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.onerror = () => {
          console.warn("Footer: Google Translate script failed to load (offline or blocked by adblocker).");
        };
        document.body.appendChild(script);
      } catch (err) {
        console.warn("Footer: Error attaching translate script:", err);
      }
    };

    window.googleTranslateElementInit = () => {
      try {
        if (
          window.google &&
          window.google.translate &&
          window.google.translate.TranslateElement
        ) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: ALL_LANGUAGES.map((l) => l.code).join(","),
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      } catch (err) {
        console.warn("Footer: Google Translate initialization error:", err);
      }
    };

    addScript();

    // Prevent Google Translate from setting inline top offsets or displaying header banners
    const enforceZeroTop = () => {
      try {
        if (document.body && document.body.style.top && document.body.style.top !== "0px") {
          document.body.style.setProperty("top", "0px", "important");
        }
        if (document.documentElement && document.documentElement.style.top && document.documentElement.style.top !== "0px") {
          document.documentElement.style.setProperty("top", "0px", "important");
        }
      } catch {
        // Safe fallback
      }
    };

    let observer = null;
    try {
      if (typeof MutationObserver !== "undefined" && document.body && document.documentElement) {
        observer = new MutationObserver(() => {
          enforceZeroTop();
        });

        observer.observe(document.body, {
          attributes: true,
          attributeFilter: ["style", "class"],
        });

        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["style", "class"],
        });
      }
    } catch (err) {
      console.warn("Footer: MutationObserver setup error:", err);
    }

    const interval = setInterval(enforceZeroTop, 500);

    return () => {
      if (observer) {
        try {
          observer.disconnect();
        } catch {
          // Ignore observer teardown error
        }
      }
      clearInterval(interval);
    };
  }, []);

  /** Programmatically change Google Translate language selection */
  const changeLanguage = (langCode) => {
    try {
      setCurrentLanguage(langCode);
      const selectElem = document.querySelector(".goog-te-combo");
      if (selectElem) {
        selectElem.value = langCode;
        selectElem.dispatchEvent(new Event("change"));
      }
    } catch (err) {
      console.warn("Footer: Error switching translation language:", err);
    }
  };

  return (
    <footer
      className={`w-full relative pt-12 pb-10 px-4 sm:px-8 select-none transition-colors duration-300 ${
        isVenomMode ? "bg-[#050508]" : "bg-white"
      }`}
      id="contact"
      aria-label="Footer Section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Dark Glassmorphic Container */}
        <div
          className={`relative z-10 backdrop-blur-xl border rounded-3xl p-6 sm:p-10 flex flex-col gap-10 transition-colors duration-300 ${
            isVenomMode
              ? "bg-black/95 border-purple-900/60 shadow-2xl shadow-purple-950/40"
              : "bg-black/90 border-red-900/40 shadow-2xl shadow-red-950/20"
          }`}
        >
          {/* Main Side-by-Side Grid Layout */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
            {/* Left Side: Work With Me / Copy Email Column */}
            <div className="flex flex-col items-start gap-3 text-left max-w-lg w-full">
              <span
                className={`font-black uppercase text-xs sm:text-sm tracking-[0.25em] transition-colors duration-300 ${
                  isVenomMode ? "text-purple-400" : "text-[#a31515]"
                }`}
              >
                WORK WITH ME
              </span>
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black italic tracking-tight uppercase leading-tight">
                HAVE A PROJECT IN MIND?
              </h2>
              <div className="flex flex-col gap-2.5 mt-2 w-full">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy Mahin Gunjal's Email Address to Clipboard"
                  aria-label="Copy Email Address to Work With Me"
                  className={`group relative w-full flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border text-white font-extrabold transition-all duration-200 active:scale-95 active:translate-y-0.5 cursor-pointer shadow-lg ${
                    isVenomMode
                      ? "border-purple-800/40 hover:border-purple-500"
                      : "border-white/15 hover:border-[#a31515]"
                  }`}
                >
                  {/* Line 1: Email Address */}
                  <div className="flex items-center justify-center gap-2 w-full">
                    <span className="text-base sm:text-lg">✉️</span>
                    <span className="text-gray-200 group-hover:text-white transition-colors text-xs sm:text-sm font-bold break-all">
                      mahingunjal@gmail.com
                    </span>
                  </div>

                  {/* Line 2: Copy Email Badge */}
                  <span
                    className={`w-full py-2 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider text-center transition-all duration-200 shadow-md ${
                      copiedEmail
                        ? "bg-[#3a4a61] text-white shadow-slate-900/50"
                        : isVenomMode
                        ? "bg-purple-600 text-white group-hover:bg-purple-700"
                        : "bg-[#a31515] text-white group-hover:bg-[#821010]"
                    }`}
                  >
                    {copiedEmail ? "COPIED! 📋" : "COPY EMAIL"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side: Legal & Connect Links */}
            <div className="flex flex-row items-start gap-12 sm:gap-20 shrink-0 self-start lg:self-center">
              {/* Legal Column */}
              <div className="flex flex-col gap-3">
                <h3
                  className={`text-base font-bold text-white border-b pb-1.5 w-max transition-colors duration-300 ${
                    isVenomMode ? "border-purple-800/60" : "border-[#a31515]/40"
                  }`}
                >
                  Legal
                </h3>
                <a
                  href="/T&C"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Terms & Conditions (Opens in new tab)"
                  aria-label="Terms & Conditions (Opens in new tab)"
                  className={`text-left text-gray-300 active:scale-95 active:translate-y-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm ${
                    isVenomMode ? "hover:text-purple-400" : "hover:text-[#a31515]"
                  }`}
                >
                  Terms & Conditions
                </a>
                <a
                  href="/PrivacyPolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Privacy Policy (Opens in new tab)"
                  aria-label="Privacy Policy (Opens in new tab)"
                  className={`text-left text-gray-300 active:scale-95 active:translate-y-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm ${
                    isVenomMode ? "hover:text-purple-400" : "hover:text-[#a31515]"
                  }`}
                >
                  Privacy Policy
                </a>
                <a
                  href="/sitemap"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Portfolio Sitemap Directory (Opens in new tab)"
                  aria-label="Portfolio Sitemap Directory (Opens in new tab)"
                  className={`text-left text-gray-300 active:scale-95 active:translate-y-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm ${
                    isVenomMode ? "hover:text-purple-400" : "hover:text-[#a31515]"
                  }`}
                >
                  Sitemap
                </a>
              </div>

              {/* Connect Column */}
              <div className="flex flex-col gap-3">
                <h3
                  className={`text-base font-bold text-white border-b pb-1.5 w-max transition-colors duration-300 ${
                    isVenomMode ? "border-purple-800/60" : "border-[#a31515]/40"
                  }`}
                >
                  Connect
                </h3>
                <a
                  href="https://github.com/mahingunjal"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile (Opens in new tab)"
                  aria-label="GitHub Profile (Opens in new tab)"
                  className={`text-gray-300 active:scale-95 active:translate-y-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm ${
                    isVenomMode ? "hover:text-purple-400" : "hover:text-[#a31515]"
                  }`}
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mahin-gunjal-669006275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile (Opens in new tab)"
                  aria-label="LinkedIn Profile (Opens in new tab)"
                  className={`text-gray-300 active:scale-95 active:translate-y-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm ${
                    isVenomMode ? "hover:text-purple-400" : "hover:text-[#a31515]"
                  }`}
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/mahingunjal?igsh=MTlxOXF5YXphbXowcw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram Profile (Opens in new tab)"
                  aria-label="Instagram Profile (Opens in new tab)"
                  className={`text-gray-300 active:scale-95 active:translate-y-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm ${
                    isVenomMode ? "hover:text-purple-400" : "hover:text-[#a31515]"
                  }`}
                >
                  Instagram
                </a>
                <a
                  href="https://www.instagram.com/marvell.paglu?igsh=Y2hvbDVqMDhqMmM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram (Marvel Paglu) Profile (Opens in new tab)"
                  aria-label="Instagram (Marvel Paglu) Profile (Opens in new tab)"
                  className={`text-gray-300 active:scale-95 active:translate-y-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm ${
                    isVenomMode ? "hover:text-purple-400" : "hover:text-[#a31515]"
                  }`}
                >
                  Instagram (Marvel Paglu)
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Language Selector, Fullscreen Mode & Copyright */}
          <div className="border-t border-white/10 pt-6 flex flex-col items-center justify-center gap-4 text-xs sm:text-sm text-gray-400">
            {/* Controls: Language Selector & Fullscreen Access Button */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <select
                title="Select Website Language"
                aria-label="Select Website Language"
                onChange={(e) => changeLanguage(e.target.value)}
                value={currentLanguage}
                className={`notranslate bg-[#111111] text-white border rounded-xl px-4 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 cursor-pointer shadow-lg transition-all ${
                  isVenomMode
                    ? "border-purple-800/60 hover:border-purple-500 focus:ring-purple-500"
                    : "border-[#a31515]/50 hover:border-[#a31515] focus:ring-[#a31515]"
                }`}
              >
                {ALL_LANGUAGES.map((lang) => (
                  <option
                    key={lang.code}
                    value={lang.code}
                    className="bg-[#111111] text-white"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>

              {/* Fullscreen Access Toggle Button */}
              <button
                type="button"
                id="fullscreen-toggle-btn"
                onClick={handleToggleFullscreen}
                title={
                  isFullscreen
                    ? "Exit Full Screen"
                    : "Enter Full Screen (Hides browser search bar and chrome)"
                }
                aria-label={
                  isFullscreen
                    ? "Exit Full Screen"
                    : "Enter Full Screen"
                }
                className={`group flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white transition-all duration-200 active:scale-95 border cursor-pointer shadow-lg ${
                  isVenomMode
                    ? "bg-purple-950/40 hover:bg-purple-900/60 border-purple-800/60 hover:border-purple-500 focus:ring-2 focus:ring-purple-500 shadow-purple-950/40"
                    : "bg-[#180505] hover:bg-[#a31515]/25 border-[#a31515]/50 hover:border-[#a31515] focus:ring-2 focus:ring-[#a31515] shadow-red-950/20"
                }`}
              >
                {isFullscreen ? (
                  <>
                    <svg
                      className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                        isVenomMode ? "text-purple-400" : "text-[#ff4d4d]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M4 14h6v6m10-10h-6V4m0 6 7-7M10 14l-7 7" />
                    </svg>
                    <span>Exit Full Screen</span>
                  </>
                ) : (
                  <>
                    <svg
                      className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                        isVenomMode ? "text-purple-400" : "text-[#ff4d4d]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                    <span>Full Screen</span>
                  </>
                )}
              </button>

              <div
                id="google_translate_element"
                className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Copyright, UI Design Credit & Developer Watermark Line */}
            <p className="text-center text-[11px] sm:text-xs md:text-sm text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
              &copy; 2026 • Made with ❤️ in Bharat 🇮🇳 | Mahin Gunjal&trade; • All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Spider-Man Cookie Consent Popup Card */}
      {showConsent && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-[100000] w-[calc(100%-2.5rem)] max-w-sm sm:max-w-md border-4 rounded-3xl p-5 sm:p-6 text-gray-900 flex flex-col gap-4 select-none transition-colors duration-300 ${
            isVenomMode
              ? "bg-[#12121c] border-purple-600 shadow-[8px_8px_0px_#7e22ce] text-white"
              : "bg-white border-[#a31515] shadow-[8px_8px_0px_#a31515] text-gray-900"
          }`}
        >
          {/* Header Row: Emoji + Title + Close X Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🍪</span>
              <h3
                className={`font-black text-xl italic tracking-tight uppercase ${
                  isVenomMode ? "text-white" : "text-gray-900"
                }`}
              >
                COOKIES
              </h3>
            </div>
            <button
              type="button"
              onClick={handleDeclineConsent}
              className={`font-bold text-xl p-1 cursor-pointer transition-colors ${
                isVenomMode
                  ? "text-gray-400 hover:text-purple-400"
                  : "text-gray-500 hover:text-[#a31515]"
              }`}
              title="Close Cookie Popup"
              aria-label="Close Cookie Popup"
            >
              ✕
            </button>
          </div>

          {/* Body Text */}
          <p
            className={`font-extrabold text-sm sm:text-base leading-snug ${
              isVenomMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            We use essential cookies strictly for secure authentication and functional cookies for language preferences. No tracking. No nonsense. Read our{" "}
            <a
              href="/PrivacyPolicy"
              target="_blank"
              rel="noopener noreferrer"
              title="Read Privacy Policy (Opens in new tab)"
              aria-label="Read Privacy Policy (Opens in new tab)"
              className={`underline decoration-2 font-black cursor-pointer ${
                isVenomMode
                  ? "text-purple-400 hover:text-purple-300"
                  : "text-[#a31515] hover:text-[#821010]"
              }`}
            >
              Privacy Policy
            </a>{" "}
            for details.
          </p>

          {/* Action Button: GOT IT! */}
          <button
            type="button"
            onClick={handleAcceptConsent}
            title="Accept Cookies and Language Preferences"
            aria-label="Accept Cookies and Language Preferences"
            className={`w-full py-3.5 font-black uppercase text-base tracking-wider rounded-2xl border-3 border-black shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000000] transition-all cursor-pointer mt-1 ${
              isVenomMode
                ? "bg-[#7e22ce] hover:bg-[#6b21a8] text-white"
                : "bg-[#a31515] hover:bg-[#821010] text-white"
            }`}
          >
            GOT IT!
          </button>
        </div>
      )}
    </footer>
  );
}
