'use client'

import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { socials } from '#constants'

/**
 * macOS Contact Window
 * Interactive 1-click email copy action and verified social profiles with responsive layout.
 */
const Contact = ({ controls, isMaximized }) => {
  const [copied, setCopied] = useState(false)
  const email = 'nisarg.delvadiya1@zohomail.in'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2500)
  }

  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#1e1e22] text-gray-800 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized ? 'w-full h-[calc(100vh-140px)]' : 'w-[520px] max-w-[94vw]'
      }`}
    >
      {/* Window Header */}
      <div id="window-header" className="bg-gray-100 dark:bg-[#26262b] border-b border-gray-200 dark:border-white/10 px-4 py-2.5 flex items-center justify-between flex-shrink-0">
        {controls}
        <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm flex-1 text-center truncate px-2">
          Contact Me
        </h2>
        <div className="w-14" />
      </div>

      {/* Body Content */}
      <main className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 flex-1 overflow-y-auto overscroll-contain bg-white dark:bg-[#18181c]">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Let's Connect</h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Feel free to reach out directly via email or on socials:
          </p>
        </div>

        {/* Copy Email Card / Button */}
        <div className="bg-gray-50 dark:bg-[#222228] border border-gray-200 dark:border-white/10 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-[11px] font-medium text-gray-400 dark:text-gray-400">Email Address</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-100 truncate font-mono select-text">
                {email}
              </p>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className={`w-full sm:w-auto px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm flex-shrink-0 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none ${
              copied
                ? 'bg-green-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95'
            }`}
            title="Copy email to clipboard"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Social Profiles</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {socials.map((social) => (
              <li
                key={social.id}
                style={{ backgroundColor: social.bg }}
                className="rounded-xl p-2.5 sm:p-3 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 sm:gap-3 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded"
                  title={`Open ${social.text}`}
                  aria-label={`Open ${social.text}`}
                >
                  <img src={social.icon} alt="" className="w-4 h-4 sm:w-5 sm:h-5 invert flex-shrink-0" aria-hidden="true" />
                  <p className="font-semibold text-xs sm:text-sm text-white truncate">{social.text}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default WindowWrapper(Contact, 'contact')
