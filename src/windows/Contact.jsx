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
      className={`flex flex-col bg-white dark:bg-[#1e1e22] text-gray-800 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 w-full ${
        isMaximized ? 'h-[calc(100vh-140px)]' : ''
      }`}
    >
      {/* Window Header */}
      <div id="window-header" className="bg-gray-100 dark:bg-[#26262b] border-b border-gray-200 dark:border-white/10 px-4 py-2.5 flex items-center justify-between flex-shrink-0 cursor-grab active:cursor-grabbing">
        {controls}
        <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm flex-1 text-center truncate px-2">
          Contact Me
        </h2>
        <div className="w-14" />
      </div>

      {/* Body Content */}
      <main className="p-4 sm:p-6 space-y-4 flex-1 overflow-y-auto overscroll-contain bg-white dark:bg-[#18181c] w-full box-border">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Let's Connect</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Feel free to reach out directly via email or on socials:
          </p>
        </div>

        {/* Copy Email Card */}
        <div className="bg-gray-50 dark:bg-[#222228] border border-gray-200 dark:border-white/10 rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-2.5 shadow-sm w-full box-border">
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <div className="size-8 sm:size-9 rounded-lg bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
              <svg className="size-4 sm:size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-[11px] font-medium text-gray-400 dark:text-gray-400">Email Address</p>
              <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-100 truncate font-mono select-text">
                {email}
              </p>
            </div>
          </div>

          <button
            type="button"
            data-clickable="true"
            onClick={handleCopyEmail}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer shadow-sm flex-shrink-0 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none ${
              copied
                ? 'bg-green-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95'
            }`}
            title="Copy email to clipboard"
            aria-label="Copy email address"
          >
            {copied ? (
              <span>Copied! ✓</span>
            ) : (
              <span>Copy</span>
            )}
          </button>
        </div>

        {/* Social Links */}
        <div className="space-y-2 w-full">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Social Profiles</p>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full box-border">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                data-clickable="true"
                style={{ backgroundColor: social.bg }}
                className="flex items-center justify-center gap-2 sm:gap-2.5 rounded-xl p-2.5 sm:p-3 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none min-w-0 w-full box-border"
                title={`Open ${social.text}`}
                aria-label={`Open ${social.text}`}
              >
                <img src={social.icon} alt="" className="size-4 sm:size-5 invert flex-shrink-0" aria-hidden="true" />
                <span className="font-semibold text-xs sm:text-sm text-white truncate">{social.text}</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default WindowWrapper(Contact, 'contact')
