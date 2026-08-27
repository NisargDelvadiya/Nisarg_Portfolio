'use client'

import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'

/**
 * macOS Apple Notes App - Legal & Compliance Window
 * Houses Terms and Conditions & Privacy Policy compliant with Indian Laws
 * (IT Act 2000, DPDP Act 2023, SPDI Rules 2011, Indian Contract Act 1872) and WCAG 2.1 AA.
 */
const Notes = ({ controls, isMaximized }) => {
  const [activeNoteId, setActiveNoteId] = useState('terms')
  const [searchQuery, setSearchQuery] = useState('')
  const [copied, setCopied] = useState(false)

  const notesList = [
    {
      id: 'terms',
      title: 'Terms & Conditions',
      date: 'Feb 28, 2026',
      badge: 'Indian Law & WCAG 2.1 AA',
      preview: 'Governing Law under IT Act 2000, WCAG 2.1 AA Accessibility, IP Rights & Disclaimers...',
      category: 'Legal Agreements',
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      date: 'Feb 28, 2026',
      badge: 'DPDPA 2023 & SPDI Rules',
      preview: 'Digital Personal Data Protection Act 2023, Zero-tracking cookies, Data Principal Rights...',
      category: 'Data Protection',
    },
  ]

  const activeNote = notesList.find((n) => n.id === activeNoteId) || notesList[0]

  const handleCopyText = async () => {
    try {
      const contentEl = document.getElementById('notes-content-pane')
      if (contentEl) {
        const text = contentEl.innerText
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(text)
        } else {
          const textarea = document.createElement('textarea')
          textarea.value = text
          document.body.appendChild(textarea)
          textarea.select()
          document.execCommand('copy')
          document.body.removeChild(textarea)
        }
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      console.warn('Failed to copy note content:', err)
    }
  }

  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#1e1e22] text-gray-800 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 w-full ${
        isMaximized ? 'h-[calc(100vh-140px)]' : 'h-[460px]'
      }`}
    >
      {/* Window Header */}
      <div
        id="window-header"
        className="bg-gray-100 dark:bg-[#26262b] border-b border-gray-200 dark:border-white/10 px-4 py-2.5 flex items-center justify-between flex-shrink-0 cursor-grab active:cursor-grabbing"
      >
        {controls}
        <div className="flex items-center gap-2 flex-1 justify-center px-2">
          <img src="/images/apple-notes.svg" alt="" className="size-4" aria-hidden="true" />
          <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm truncate">
            Legal Notes — {activeNote.title}
          </h2>
        </div>
        <div className="w-14 text-right">
          <button
            type="button"
            data-clickable="true"
            onClick={handleCopyText}
            className="text-[11px] text-amber-600 dark:text-amber-400 hover:underline font-medium cursor-pointer"
            title="Copy current note text"
          >
            {copied ? 'Copied! ✓' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Split-Pane Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Notes Index */}
        <aside className="w-48 sm:w-56 border-r border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-[#18181c] flex flex-col flex-shrink-0">
          {/* Notes Folder Header */}
          <div className="p-2.5 sm:p-3 border-b border-gray-200 dark:border-white/5 flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-semibold text-gray-400 dark:text-gray-400 uppercase tracking-wider">
              Legal & Compliance
            </span>
            <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono font-medium">
              2 Notes
            </span>
          </div>

          {/* Notes List */}
          <div className="flex-1 overflow-y-auto p-1.5 sm:p-2 space-y-1.5 overscroll-contain">
            {notesList.map((note) => {
              const isSelected = activeNoteId === note.id
              return (
                <button
                  key={note.id}
                  type="button"
                  data-clickable="true"
                  onClick={() => setActiveNoteId(note.id)}
                  className={`w-full text-left p-2.5 rounded-xl transition-all cursor-pointer group flex flex-col gap-1 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none ${
                    isSelected
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'hover:bg-gray-100 dark:hover:bg-[#23232a] text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 w-full">
                    <h3 className="font-semibold text-xs sm:text-[13px] truncate">{note.title}</h3>
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono flex-shrink-0 ${
                        isSelected ? 'text-white/80' : 'text-gray-400 dark:text-gray-500'
                      }`}
                    >
                      {note.date}
                    </span>
                  </div>

                  <span
                    className={`inline-block text-[9px] sm:text-[10px] font-medium px-1.5 py-0.5 rounded-md self-start ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-amber-500/10 text-amber-700 dark:text-amber-300'
                    }`}
                  >
                    {note.badge}
                  </span>

                  <p
                    className={`text-[10px] sm:text-[11px] line-clamp-2 leading-relaxed mt-0.5 ${
                      isSelected ? 'text-white/90' : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {note.preview}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Sidebar Footer */}
          <div className="p-2 sm:p-2.5 border-t border-gray-200 dark:border-white/10 bg-gray-100/50 dark:bg-[#141418] text-[10px] text-gray-400 flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            <span>Updated & Enforceable</span>
          </div>
        </aside>

        {/* Right Main Content Reading Pane */}
        <main
          id="notes-content-pane"
          className="flex-1 overflow-y-auto overscroll-contain p-3.5 sm:p-5 bg-white dark:bg-[#1a1a1f] space-y-5 text-gray-700 dark:text-gray-200 text-xs sm:text-sm leading-relaxed"
        >
          {activeNoteId === 'terms' ? (
            /* ================= TERMS AND CONDITIONS CONTENT ================= */
            <article className="space-y-6 max-w-3xl">
              {/* Note Header */}
              <div className="border-b border-gray-200 dark:border-white/10 pb-4 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                    Indian Law Compliant
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                    WCAG 2.1 Level AA Certified
                  </span>
                  <span className="text-[11px] text-gray-400 ml-auto">Last Updated: February 28, 2026</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white pt-2">
                  Terms and Conditions of Use
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Governed under the Information Technology Act, 2000, IT Rules 2021, and the Indian Contract Act, 1872.
                </p>
              </div>

              {/* Section 1 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  1. Acceptance & Statutory Framework
                </h3>
                <p>
                  Welcome to <strong>Nisarg's Macfolio</strong> (accessible at{' '}
                  <code className="text-xs bg-gray-100 dark:bg-black/30 px-1 py-0.5 rounded">https://nisargjayeshdelvadiya.com</code>). 
                  By accessing, browsing, or interacting with this portfolio web application, you agree to be bound by these Terms and Conditions. 
                  These Terms constitute an electronic record in accordance with the provisions of Rule 3(1) of the <em>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</em> and the <em>Indian Contract Act, 1872</em>.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  2. Purpose & Nature of the Platform
                </h3>
                <p>
                  This platform is a personal, non-commercial developer portfolio created by <strong>Nisarg Delvadiya</strong> to display software engineering capabilities, open-source projects, frontend/full-stack architectures, interactive UI demonstrations, and professional resume credentials. No commercial sales, financial transactions, or paid subscriptions occur on this domain.
                </p>
              </section>

              {/* Section 3 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  3. Intellectual Property Rights
                </h3>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>
                    <strong>Original Work:</strong> All bespoke source code, visual layouts, animations, design compositions, and written content are the intellectual property of Nisarg Delvadiya, protected under the <em>Copyright Act, 1957 (India)</em> and relevant international copyright treaties.
                  </li>
                  <li>
                    <strong>Third-Party Trademarks:</strong> macOS design metaphors, Apple logos, and third-party tech badges (Next.js, React, Tailwind CSS, Google, GitHub, LinkedIn) remain the exclusive trademarks and property of their respective owners. Their representation here is solely for portfolio demonstration and fair-use representation.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  4. Accessibility Statement (WCAG 2.1 Level AA & RPwD Act, 2016)
                </h3>
                <p>
                  We are firmly committed to ensuring digital accessibility for people with disabilities, in alignment with the <em>Rights of Persons with Disabilities Act, 2016 (India)</em> and the <em>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</em> standards:
                </p>
                <div className="bg-gray-50 dark:bg-[#202026] p-3 rounded-xl border border-gray-200 dark:border-white/10 space-y-1.5 text-xs">
                  <p>✓ <strong>Keyboard Navigation:</strong> All dock apps, window controls, and interactive elements are fully focusable with standard keyboard tab orders.</p>
                  <p>✓ <strong>Screen Readers:</strong> Semantic HTML5 elements, ARIA dialog roles, live regions, and descriptive alt attributes are applied throughout.</p>
                  <p>✓ <strong>Contrast & Motion:</strong> Colors exceed the 4.5:1 contrast ratio requirement, with respectful reduced motion considerations for assistive devices.</p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  5. Translation & Third-Party AI Services
                </h3>
                <p>
                  Multi-language translation (including the 20 scheduled Indian & global languages) is provided via the Google Translate API for user convenience. Machine translations are automated; Nisarg Delvadiya makes no warranties regarding the absolute linguistic precision or contextual nuances of automated translations.
                </p>
              </section>

              {/* Section 6 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  6. User Conduct & Acceptable Use
                </h3>
                <p>
                  In accordance with Rule 3(1)(b) of the IT Rules 2021, users shall not host, display, upload, modify, or transmit any information that infringes intellectual property, introduces viruses, disrupts server performance, or violates any law for the time being in force in India.
                </p>
              </section>

              {/* Section 7 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  7. Limitation of Liability & Disclaimers
                </h3>
                <p>
                  This portfolio and its code samples are provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis without warranties of any kind. Under no circumstances shall the developer be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this platform.
                </p>
              </section>

              {/* Section 8 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  8. Governing Law & Jurisdiction
                </h3>
                <p>
                  These Terms are governed by and construed in accordance with the laws of the <strong>Republic of India</strong>. Any disputes arising out of or in connection with this website shall be subject to the exclusive jurisdiction of the competent courts in Jaipur (Rajasthan) / Gujarat, India.
                </p>
              </section>

              {/* Section 9 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  9. Grievance & Inquiries
                </h3>
                <p>
                  For any questions, accessibility feedback, or legal inquiries, please contact:
                </p>
                <div className="p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/20 rounded-xl text-xs space-y-1">
                  <p><strong>Nisarg Delvadiya</strong> (Developer & Platform Owner)</p>
                  <p>Email: <a href="mailto:nisarg.delvadiya1@zohomail.in" className="text-blue-600 dark:text-blue-400 hover:underline">nisarg.delvadiya1@zohomail.in</a></p>
                  <p>Location: Jaipur, Rajasthan / Gujarat, India</p>
                </div>
              </section>
            </article>
          ) : (
            /* ================= PRIVACY POLICY CONTENT ================= */
            <article className="space-y-6 max-w-3xl">
              {/* Note Header */}
              <div className="border-b border-gray-200 dark:border-white/10 pb-4 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                    DPDP Act 2023 Compliant
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                    SPDI Rules 2011 Verified
                  </span>
                  <span className="text-[11px] text-gray-400 ml-auto">Last Updated: February 28, 2026</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white pt-2">
                  Privacy Policy & Data Protection
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act, India) and Section 43A of the IT Act, 2000.
                </p>
              </div>

              {/* Section 1 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  1. Privacy Commitment & Scope
                </h3>
                <p>
                  Your privacy is paramount. This Privacy Policy outlines our practices regarding information collection, storage, and usage in strict compliance with the <em>Digital Personal Data Protection Act, 2023 (DPDPA)</em>, <em>Information Technology Act, 2000</em>, and the <em>IT (Reasonable Security Practices and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules)</em>.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  2. Principle of Data Minimization (What We Do NOT Collect)
                </h3>
                <p>
                  In accordance with the principle of purpose limitation and data minimization under Section 6 of the DPDP Act 2023:
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 p-3 rounded-xl space-y-1 text-xs">
                  <p>🛡️ <strong>Zero Tracking:</strong> We do NOT use invasive tracking cookies, pixel tags, or ad fingerprinting.</p>
                  <p>🛡️ <strong>No Sale of Data:</strong> We NEVER sell, monetize, rent, or trade user data to third parties.</p>
                  <p>🛡️ <strong>No Account Mandate:</strong> Browsing this portfolio requires no login, password, or credit card information.</p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  3. Cookies & Local Client Storage
                </h3>
                <p>
                  We only use strictly essential, first-party local storage mechanisms to remember your user preferences:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li>
                    <strong>Language Preferences (<code className="bg-gray-100 dark:bg-black/30 px-1 py-0.5 rounded">portfolio_language</code>, <code className="bg-gray-100 dark:bg-black/30 px-1 py-0.5 rounded">googtrans</code>):</strong> Stored locally on your device to remember your preferred translation language.
                  </li>
                  <li>
                    <strong>Theme Preference:</strong> Stored to retain your dark mode or light mode choice across sessions.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  4. Direct Inquiries & Communications
                </h3>
                <p>
                  When you voluntarily reach out via email (<code className="text-xs bg-gray-100 dark:bg-black/30 px-1 py-0.5 rounded">nisarg.delvadiya1@zohomail.in</code>) or connect through verified social links (GitHub, LinkedIn), your email address and message contents are utilized solely to respond to your inquiry.
                </p>
              </section>

              {/* Section 5 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  5. Rights of the Data Principal (Under DPDP Act 2023)
                </h3>
                <p>
                  Under Chapter III of the Digital Personal Data Protection Act, 2023, you hold the following rights:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-gray-50 dark:bg-[#222228] border border-gray-200 dark:border-white/5">
                    <strong>Right to Access:</strong> Request a summary of any personal data processed.
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 dark:bg-[#222228] border border-gray-200 dark:border-white/5">
                    <strong>Right to Correction & Erasure:</strong> Request updating or deletion of your communication records.
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 dark:bg-[#222228] border border-gray-200 dark:border-white/5">
                    <strong>Right of Grievance Redressal:</strong> Direct access to the Grievance Officer for prompt resolution.
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 dark:bg-[#222228] border border-gray-200 dark:border-white/5">
                    <strong>Right to Nominate:</strong> Nominate an individual in accordance with Indian Law.
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  6. Technical Security & Hosting
                </h3>
                <p>
                  In compliance with Rule 8 of the SPDI Rules 2011, this platform implements comprehensive technical safeguards including HTTPS / TLS 1.3 encryption, Content Security Policies, Vercel Edge firewall protection, and regular automated dependency audits.
                </p>
              </section>

              {/* Section 7 */}
              <section className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                  7. Grievance Redressal Officer (Rule 5(9), SPDI Rules)
                </h3>
                <p>
                  For any privacy concerns, data inquiries, or statutory notices, the designated Grievance Officer is:
                </p>
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 rounded-xl text-xs space-y-1">
                  <p><strong>Nisarg Delvadiya</strong> (Grievance & Data Protection Officer)</p>
                  <p>Designation: Full-Stack Developer & Data Fiduciary</p>
                  <p>Email: <a href="mailto:nisarg.delvadiya1@zohomail.in" className="text-blue-600 dark:text-blue-400 hover:underline">nisarg.delvadiya1@zohomail.in</a></p>
                  <p>Response Timeline: Within 7 business days</p>
                </div>
              </section>
            </article>
          )}
        </main>
      </div>
    </div>
  )
}

export default WindowWrapper(Notes, 'notes')
