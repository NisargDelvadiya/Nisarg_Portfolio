"use client";

import React, { useState, useEffect, useSyncExternalStore, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

/**
 * Footer Component
 * 
 * Includes:
 * 1. "Work With Me" Contact callout with one-click email clipboard copy
 * 2. Legal navigation links (Terms & Conditions, Privacy Policy)
 * 3. Social media and professional connect links (GitHub, LinkedIn, Instagram)
 * 4. Multi-language selector powered by Google Translate with zero top-banner visual shift
 * 5. DPDP Act 2023 compliant cookie & consent banner
 * 6. Responsive design with Spider-Man theme support
 */
export default function Footer() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let ctx;
    try {
      ctx = gsap.context(() => {
        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current.children,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top 85%",
              },
            }
          );
        }
      }, footerRef);
    } catch (err) {
      console.warn("Footer GSAP error:", err);
    }
    return () => {
      try { if (ctx) ctx.revert(); } catch (_) {}
    };
  }, []);

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

  /** Copy Email to Clipboard with fallback */
  const handleCopyEmail = async () => {
    const email = "nisarg.delvadiya1@zohomail.in";
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

  useEffect(() => {
    // Developer Signature Console Watermark
    try {
      console.log(
        "%c ⚡ Developed by Nisarg Jayesh Delvadiya ",
        "background: #AA0505; color: #ffffff; font-size: 12px; font-weight: bold; padding: 6px 12px; border-radius: 6px;"
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
      ref={footerRef}
      className="w-full relative select-none transition-colors duration-300 bg-black text-white overflow-hidden border-t-2 border-[#6A0C0B]/60"
      id="contact"
      aria-label="Footer Section"
    >
      {/* Blurred Background Photo (6.jpg: Malibu Cliff Mansion) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat md:bg-fixed filter blur-sm scale-105 opacity-40 select-none"
          style={{
            backgroundImage: "url('/Assets/2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
      </div>

      {/* Main Footer Full Width Content Container */}
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 pt-10 sm:pt-12 pb-4 sm:pb-6 flex flex-col gap-8 sm:gap-10">
          {/* Main Side-by-Side Responsive Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full">
            {/* Left Side: Work With Me / Copy Email Column */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-center lg:items-start gap-3 text-center lg:text-left w-full mb-8 lg:mb-0">
              <span className="font-black uppercase text-xs sm:text-sm tracking-[0.25em] transition-colors duration-300 text-[#AA0505]">
                WORK WITH ME
              </span>
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black italic tracking-tight uppercase leading-tight">
                HAVE A PROJECT IN MIND?
              </h2>
              <div className="flex flex-col gap-2.5 mt-2 w-full max-w-sm">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy Nisarg Jayesh Delvadiya's Email Address to Clipboard"
                  aria-label="Copy Email Address to Work With Me"
                  className="group relative w-full flex flex-col items-center justify-center gap-3 p-4 sm:p-4.5 rounded-2xl bg-white/5 hover:bg-white/10 border text-white font-extrabold transition-all duration-200 active:scale-95 cursor-pointer shadow-lg border-white/15 hover:border-[#AA0505]"
                >
                  {/* Line 1: Email Address */}
                  <div className="flex items-center justify-center gap-2.5 w-full px-1">
                    <span className="text-base sm:text-lg shrink-0">✉️</span>
                    <span className="text-gray-200 group-hover:text-white transition-colors text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                      nisarg.delvadiya1@zohomail.in
                    </span>
                  </div>

                  {/* Line 2: Copy Email Badge */}
                  <span
                    className={`w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-center transition-all duration-200 shadow-md ${
                      copiedEmail
                        ? "bg-[#3a4a61] text-white shadow-slate-900/50"
                        : "bg-[#AA0505] text-white group-hover:bg-[#6A0C0B]"
                    }`}
                  >
                    {copiedEmail ? "COPIED! 📋" : "COPY EMAIL"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side: Connect, Legal, NGOS & Donations Links */}
            <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full min-w-0">
              {/* Connect Column */}
              <div className="flex flex-col items-start text-left gap-3">
                <h3 className="text-base font-bold text-white border-b pb-1.5 w-max transition-colors duration-300 border-[#B97D10]/40">
                  Connect
                </h3>
                <a
                  href="https://github.com/NisargDelvadiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile (Opens in new tab)"
                  aria-label="GitHub Profile (Opens in new tab)"
                  className="text-gray-300 active:scale-95 active:translate-y-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03]"
                >
                  GitHub
                </a>
                <a
                  href="https://thenisargcritic.blogspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Blog (Opens in new tab)"
                  aria-label="Blog (Opens in new tab)"
                  className="text-gray-300 active:scale-95 active:translate-y-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03]"
                >
                  Blog
                </a>
              </div>

              {/* Legal Column */}
              <div className="flex flex-col items-start text-left gap-3">
                <h3 className="text-base font-bold text-white border-b pb-1.5 w-max transition-colors duration-300 border-[#B97D10]/40">
                  Legal
                </h3>
                <a
                  href="/T&C"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Terms & Conditions (Opens in new tab)"
                  aria-label="Terms & Conditions (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 active:translate-y-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03]"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/PrivacyPolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Privacy Policy (Opens in new tab)"
                  aria-label="Privacy Policy (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 active:translate-y-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03]"
                >
                  Privacy Policy
                </a>
                <a
                  href="/sitemap"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Portfolio Sitemap Directory (Opens in new tab)"
                  aria-label="Portfolio Sitemap Directory (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 active:translate-y-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03]"
                >
                  Sitemap
                </a>
              </div>

              {/* NGOS Column */}
              <div className="flex flex-col items-start text-left gap-3 min-w-0">
                <h3 className="text-base font-bold text-white border-b pb-1.5 w-max transition-colors duration-300 border-[#B97D10]/40 uppercase">
                  NGOS
                </h3>
                <a
                  href="https://rrvhfoundation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Raja Ravi Varma Heritage Foundation (Opens in new tab)"
                  aria-label="Raja Ravi Varma Heritage Foundation (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03] leading-snug break-words"
                >
                  <span className="break-words">Raja Ravi Varma Heritage Foundation</span>
                </a>
                <a
                  href="https://www.jaipurfoot.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Jaipur Foot (BMVSS) (Opens in new tab)"
                  aria-label="Jaipur Foot (BMVSS) (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03] leading-snug break-words"
                >
                  <span className="break-words">Jaipur Foot (BMVSS)</span>
                </a>
                <a
                  href="https://www.ecosattva.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="EcoSattva (Opens in new tab)"
                  aria-label="EcoSattva (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03] leading-snug break-words"
                >
                  <span className="break-words">EcoSattva</span>
                </a>
              </div>

              {/* DONATIONS Column */}
              <div className="flex flex-col items-start text-left gap-3 min-w-0">
                <h3 className="text-base font-bold text-white border-b pb-1.5 w-max transition-colors duration-300 border-[#B97D10]/40 uppercase">
                  DONATIONS
                </h3>
                <a
                  href="https://www.akshayapatra.org/donate-to-midday-meal-programme?utm_source=google&utm_medium=cpc&utm_campaign=gads&utm_content=lapsed-px-mdm-26&gad_source=1&gad_campaignid=23942140523&gbraid=0AAAAADtGwlyegnOx-VzkL8UHqs8vuzz7g"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="The Akshaya Patra Foundation (Opens in new tab)"
                  aria-label="The Akshaya Patra Foundation (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03] leading-snug break-words"
                >
                  <span className="break-words">The Akshaya Patra Foundation</span>
                </a>
                <a
                  href="https://hindu.fund"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Hindu Fund (Opens in new tab)"
                  aria-label="Hindu Fund (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03] leading-snug break-words"
                >
                  <span className="break-words">Hindu Fund</span>
                </a>
                <a
                  href="https://www.sangamtalks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Sangam Talks (Opens in new tab)"
                  aria-label="Sangam Talks (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03] leading-snug break-words"
                >
                  <span className="break-words">Sangam Talks</span>
                </a>
                <a
                  href="https://www.veducation.world"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Veducation (Opens in new tab)"
                  aria-label="Veducation (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03] leading-snug break-words"
                >
                  <span className="break-words">Veducation</span>
                </a>
                <a
                  href="https://www.adiveda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Adiveda (Opens in new tab)"
                  aria-label="Adiveda (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03] leading-snug break-words"
                >
                  <span className="break-words">Adiveda</span>
                </a>
                <a
                  href="https://www.shivdhaam.org.in/?gad_source=1&gad_campaignid=23949023171&gbraid=0AAAAA-wKSMMO4ZiZthKTvahdFl4GIwcLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Shiv Dhaam (Opens in new tab)"
                  aria-label="Shiv Dhaam (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03] leading-snug break-words"
                >
                  <span className="break-words">Shiv Dhaam</span>
                </a>
                <a
                  href="https://forthepeople.in/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="For The People (Opens in new tab)"
                  aria-label="For The People (Opens in new tab)"
                  className="text-left text-gray-300 active:scale-95 transition-all duration-150 cursor-pointer text-xs md:text-sm hover:text-[#FBCA03] leading-snug break-words"
                >
                  <span className="break-words">For The People</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright on Left, Controls on Right in One Line */}
          <div className="border-t border-white/10 pt-6 pb-2 sm:pb-3 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-400 w-full">
            {/* Copyright, UI Design Credit & Developer Watermark Line (Left) */}
            <p className="text-center md:text-left text-[11px] sm:text-xs md:text-sm text-gray-400 font-medium leading-relaxed">
              &copy; 2026 • Made with ❤️ in Bharat 🇮🇳 |{" "}
              <a
                href="https://www.nisargjayeshdelvadiya.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Nisarg Jayesh Delvadiya Official Website (Opens in new tab)"
                aria-label="Visit Nisarg Jayesh Delvadiya Official Website"
                className="text-gray-200 hover:text-[#FBCA03] transition-colors underline underline-offset-4 decoration-[#AA0505] hover:decoration-[#FBCA03] font-bold"
              >
                Nisarg Jayesh Delvadiya&trade;
              </a>{" "}
              • All Rights Reserved
            </p>

            {/* Controls: Fullscreen Access Button & Language Selector (Right) */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 shrink-0">
              {/* Fullscreen Access Toggle Button (Icon Only) */}
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
                className="group w-10 h-10 flex items-center justify-center rounded-xl text-white transition-all duration-200 active:scale-95 border cursor-pointer shadow-lg bg-[#180505] hover:bg-[#AA0505]/25 border-[#6A0C0B]/60 hover:border-[#AA0505] focus:ring-2 focus:ring-[#AA0505] shadow-red-950/20 shrink-0"
              >
                {isFullscreen ? (
                  <svg
                    className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110 text-[#FBCA03]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110 text-[#FBCA03]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                  </svg>
                )}
              </button>

              {/* Language Selector with Balanced Centered Layout */}
              <div className="relative group w-40 sm:w-44 h-10 rounded-xl border border-[#6A0C0B]/60 hover:border-[#AA0505] bg-[#111111] hover:bg-[#AA0505]/15 transition-all duration-200 shadow-lg flex items-center justify-center gap-2 px-3 cursor-pointer">
                <span className="notranslate text-xs sm:text-sm font-bold text-white tracking-wide truncate max-w-[105px] sm:max-w-[115px]">
                  {ALL_LANGUAGES.find((lang) => lang.code === currentLanguage)?.name || "English"}
                </span>
                <svg
                  className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors duration-200 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>

                {/* Accessible native select covering entire container */}
                <select
                  title="Select Website Language"
                  aria-label="Select Website Language"
                  onChange={(e) => changeLanguage(e.target.value)}
                  value={currentLanguage}
                  className="notranslate absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-xl"
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
              </div>

              <div
                id="google_translate_element"
                className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
      </div>
    </footer>
  );
}
