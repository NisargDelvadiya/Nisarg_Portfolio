"use client";

import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

/**
 * List of supported Indian and major international languages for the Google Translate widget
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
 * @component Footer
 * @description Glassmorphic footer section containing Legal navigation links, Social connect links,
 * Blog link, Philanthropic donation links, dynamic Google Translate language switcher, and interactive modal dialogs for T&C and Privacy Policy.
 */
const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  /** Close active legal modal overlay */
  const closeModal = () => setActiveModal(null);

  /**
   * Switches website active language using Google Translate cookie dispatch
   * @param {string} langCode - Two-letter language code (e.g., 'hi', 'gu', 'en')
   */
  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    if (typeof window !== "undefined") {
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;

      const selectElem = document.querySelector(".goog-te-combo");
      if (selectElem) {
        selectElem.value = langCode;
        selectElem.dispatchEvent(new Event("change"));
      } else {
        window.location.reload();
      }
    }
  };

  /** Check existing language cookie on mount and initialize Google Translate script */
  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length >= 2) return parts.pop().split(";").shift();
    };

    const cookieVal = getCookie("googtrans");
    if (cookieVal) {
      const lang = cookieVal.split("/").pop();
      if (lang) {
        setCurrentLanguage(lang);
      }
    }

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    if (!document.getElementById("google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    }
  }, []);

  return (
    <footer
      className="w-full relative pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto"
      id="contact"
      aria-label="Footer Section"
    >
      {/* Background Decorative Grid */}
      <div
        className="w-full absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/bg/footer-grid.svg"
          alt="Decorative footer grid background"
          className="w-full h-full opacity-30 object-cover"
        />
      </div>

      {/* Main Footer Glassmorphic Card Container */}
      <div className="relative z-10 backdrop-blur-xl bg-black-200/60 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 lg:gap-12">
          {/* Navigation Links Grid (4 Columns) */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-sm">
            {/* Legal Column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-white border-b border-purple/40 pb-1.5 w-max">
                Legal
              </h3>
              <a
                href="/T&C"
                target="_blank"
                rel="noopener noreferrer"
                title="View Terms & Conditions page"
                aria-label="View Terms & Conditions page"
                className="text-left text-white-200 hover:text-purple transition-colors cursor-pointer"
              >
                Terms & Conditions
              </a>
              <a
                href="/PrivacyPolicy"
                target="_blank"
                rel="noopener noreferrer"
                title="View Privacy Policy page"
                aria-label="View Privacy Policy page"
                className="text-left text-white-200 hover:text-purple transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
            </div>

            {/* Connect Column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-white border-b border-purple/40 pb-1.5 w-max">
                Connect
              </h3>
              <a
                href="https://github.com/NisargDelvadiya"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Nisarg Delvadiya's GitHub profile"
                aria-label="Visit Nisarg Delvadiya's GitHub profile"
                className="text-white-200 hover:text-purple transition-colors cursor-pointer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nisarg-delvadiya/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Nisarg Delvadiya's LinkedIn profile"
                aria-label="Visit Nisarg Delvadiya's LinkedIn profile"
                className="text-white-200 hover:text-purple transition-colors cursor-pointer"
              >
                LinkedIn
              </a>
            </div>

            {/* Blog Column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-white border-b border-purple/40 pb-1.5 w-max">
                Blog
              </h3>
              <a
                href="https://draft.blogger.com/profile/06497378480775646608"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Nisarg Delvadiya's Blog"
                aria-label="Visit Nisarg Delvadiya's Blog"
                className="text-white-200 hover:text-purple transition-colors cursor-pointer"
              >
                Blog
              </a>
            </div>

            {/* Donations Column */}
            <div className="flex flex-col gap-3">
              <h3
                title="dātavyam iti yad dānaṁ dīyate 'nupakāriṇe deśhe kāle cha pātre cha tad dānaṁ sāttvikaṁ smṛitam — Charity given to a worthy person simply because it is right to give, without consideration of anything in return, at the proper time and in the proper place, is stated to be in the mode of goodness. (Bhagavad Gita, Chapter 17, Verse 20)"
                className="text-base font-bold text-white border-b border-purple/40 pb-1.5 w-max cursor-help"
              >
                Donations
              </h3>
              <a
                href="https://www.akshayapatra.org"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Akshaya Patra Foundation website"
                aria-label="Visit Akshaya Patra Foundation website"
                className="text-white-200 hover:text-purple transition-colors cursor-pointer"
              >
                Akshaya Patra Foundation
              </a>
              <a
                href="https://hindu.fund"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Hindu Fund website"
                aria-label="Visit Hindu Fund website"
                className="text-white-200 hover:text-purple transition-colors cursor-pointer"
              >
                Hindu Fund
              </a>
              <a
                href="https://www.veducation.world"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Veducation website"
                aria-label="Visit Veducation website"
                className="text-white-200 hover:text-purple transition-colors cursor-pointer"
              >
                Veducation
              </a>
              <a
                href="https://www.thesanskritchannel.org/support"
                target="_blank"
                rel="noopener noreferrer"
                title="Support The Sanskrit Channel"
                aria-label="Support The Sanskrit Channel"
                className="text-white-200 hover:text-purple transition-colors cursor-pointer"
              >
                The Sanskrit Channel
              </a>
              <a
                href="https://forthepeople.in/en"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit forthepeople organization website"
                aria-label="Visit forthepeople organization website"
                className="text-white-200 hover:text-purple transition-colors cursor-pointer"
              >
                forthepeople
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Language Selector & Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col items-center justify-center gap-4 text-xs sm:text-sm text-white-200">
          {/* Language Selector Dropdown (Above Copyright) */}
          <div className="flex flex-row items-center justify-center gap-4">
            <select
              title="Select Website Language"
              aria-label="Select Website Language"
              onChange={(e) => changeLanguage(e.target.value)}
              value={currentLanguage}
              className="notranslate bg-[#10132E] text-white border border-purple/40 rounded-xl px-4 py-2 text-xs sm:text-sm font-medium hover:border-purple focus:outline-none focus:ring-2 focus:ring-purple cursor-pointer shadow-lg transition-all"
            >
              {ALL_LANGUAGES.map((lang) => (
                <option
                  key={lang.code}
                  value={lang.code}
                  className="bg-[#10132E] text-white"
                >
                  {lang.name}
                </option>
              ))}
            </select>
            <div
              id="google_translate_element"
              className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Copyright Line */}
          <p className="text-center">
            &copy; 2026 • Made with ❤️ in Bharat 🇮🇳 | All Rights are Reserved
          </p>
        </div>
      </div>

      {/* Interactive Legal Modal Overlay */}
      {activeModal && (
        <div
          className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#10132E] border border-purple/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl text-white flex flex-col gap-6">
            {/* Close Icon Button */}
            <button
              onClick={closeModal}
              type="button"
              title="Close Legal Modal"
              aria-label="Close Legal Modal"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-purple hover:text-black flex items-center justify-center transition-colors cursor-pointer z-20"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            {/* Terms & Conditions Modal */}
            {activeModal === "tc" && (
              <div className="flex flex-col gap-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <h2 className="text-2xl font-bold text-purple border-b border-white/10 pb-3">
                  Terms & Conditions
                </h2>
                <p className="text-xs uppercase tracking-wider text-purple font-semibold">
                  Last Updated: May 2026
                </p>
                <p>
                  Welcome to MyTodo (&quot;the Application&quot;). By creating an
                  account or using our task tracking dashboard, you agree to be
                  bound by these Terms under the Information Technology Act,
                  2000.
                </p>

                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="font-bold text-white">
                    1. ACCOUNT INTEGRITY & SECURITY
                  </h3>
                  <p>
                    To save and track your missions, you must maintain a secure
                    login configuration via our supported OAuth providers. You
                    are entirely responsible for protecting your local Master
                    Password and authentication metrics.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-white">
                    2. ACCEPTABLE PLATFORM USE
                  </h3>
                  <p>
                    You explicitly agree not to introduce query injections,
                    execute API scraping operations, or attempt to compromise
                    our active cloud storage databases or backend infrastructure
                    environments.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-white">
                    3. LIMITATION OF LIABILITY
                  </h3>
                  <p>
                    The Application services are provided strictly &quot;as-is&quot;.
                    Under no legal frameworks shall the developer be liable for
                    accidental cloud synchronization lapses, data deletions, or
                    server downtime occurrences.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-white">
                    4. JURISDICTIONAL AUTHORITY
                  </h3>
                  <p>
                    These operational terms are governed completely by the cyber
                    laws of the Republic of India. Any digital disputes fall under
                    the exclusive handling of local state court nodes.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-white">
                    5. ACTIVITY TRACKING & AUDIT LOGS
                  </h3>
                  <p>
                    To maintain the security and integrity of the Application, we
                    automatically track and log critical account actions (including
                    but not limited to logins, profile updates, and task
                    creations). By using the Application, you consent to this
                    tracking. You have the right to export these logs at any time
                    via your account dashboard.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-white">6. CONTACT DETAILS</h3>
                  <p>
                    If you have any questions or require clarification regarding
                    these Terms, please feel free to reach out:
                  </p>
                  <p className="pl-3 border-l-2 border-purple text-xs sm:text-sm">
                    <strong>Name:</strong> Nisarg Jayesh Delvadiya<br />
                    <strong>Email:</strong> nisarg.delvadiya1@zohomail.in<br />
                    <strong>Location:</strong> Vadodara, Gujarat, Bharat
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-white">
                    7. ACCESSIBILITY & WCAG 2.1 COMPLIANCE
                  </h3>
                  <p>
                    This portfolio is deeply committed to digital accessibility. We
                    continuously strive to ensure our platform is inclusive and
                    operable by everyone, aligning with the Web Content
                    Accessibility Guidelines (WCAG 2.1 Level AA & AAA standards). Our interfaces are engineered with high contrast ratios exceeding 7:1, semantic HTML5 landmarks, distinct focus states, comprehensive keyboard navigability, screen-reader ARIA labeling, and a dedicated skip-navigation mechanism.
                  </p>
                </div>
              </div>
            )}

            {/* Privacy Policy Modal */}
            {activeModal === "privacy" && (
              <div className="flex flex-col gap-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <h2 className="text-2xl font-bold text-purple border-b border-white/10 pb-3">
                  Privacy Policy
                </h2>
                <p className="text-xs uppercase tracking-wider text-purple font-semibold">
                  Last Updated: May 2026
                </p>
                <p>
                  Your data protection parameters are explicitly managed in total
                  alignment with the Digital Personal Data Protection Act (DPDP),
                  2023 of India.
                </p>

                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="font-bold text-white">
                    1. PURPOSEFUL DATA COLLECTION & USAGE
                  </h3>
                  <p>
                    We use Google and Zoho authentication services solely to verify
                    your identity and securely sync your task vault across devices.
                    We collect minimal identity tags including your name and email
                    address. We do not request, access, or share any additional
                    personal data from your accounts. We also register and hold
                    your written mission text entries safely within your profile
                    dashboard context.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-white">
                    2. HASHING & STORAGE STANDARDS
                  </h3>
                  <p>
                    All your tasks are encrypted end-to-end on your local device
                    before hitting our remote database clusters. We cannot read
                    your tasks. Active authentication relies on secure NextAuth
                    integration.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-white">
                    3. DISTRIBUTION EXCLUSIONS
                  </h3>
                  <p>
                    We maintain an absolute zero-sharing profile layout. Your
                    identity paths, contact parameters, and custom task
                    collections are never traded or exposed to third-party
                    commercial analytics platforms.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-white">
                    4. RIGHT TO DATA ERASURE
                  </h3>
                  <p>
                    In strict compliance with Indian data principal rights, choosing
                    to terminate your workspace triggers a complete automated purge
                    sequence, permanently erasing your identity files and task
                    indexes from live database nodes.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-white">
                    5. RIGHT TO DATA PORTABILITY & AUDIT LOGS
                  </h3>
                  <p>
                    In alignment with global privacy standards (like GDPR and
                    CCPA), you have the absolute right to request and download a
                    copy of your data. We maintain a secure Audit Log of your
                    account activity (e.g., logins, task creation, profile
                    updates) to prevent brute-force attacks and ensure
                    accountability. You can download a complete timeline of this
                    activity alongside your tasks at any time using the &quot;Export
                    PDF&quot; feature.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-white">
                    6. COOKIE USAGE & CONSENT
                  </h3>
                  <p>
                    MyTodo respects your browser storage and operates purely on
                    minimal, functional cookies. We use essential tokens (via
                    NextAuth) to maintain your secure login session and functional
                    cookies (via Google Translate) to remember your language
                    preferences. We do not employ any third-party tracking,
                    advertising, or behavioral analytics cookies. By using our
                    application, you acknowledge the use of these strictly
                    essential operations.
                  </p>
                </div>
              </div>
            )}

            {/* Modal Close Footer Action */}
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                title="Close Legal Specs"
                aria-label="Close Legal Specs"
                className="bg-purple/20 hover:bg-purple text-purple hover:text-black font-semibold px-6 py-2 rounded-xl transition-all cursor-pointer text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
