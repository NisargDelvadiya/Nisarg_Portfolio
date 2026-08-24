'use client'

import React from 'react'
import Link from 'next/link'

/**
 * Custom macOS 404 Not Found Page
 * Displays diagnostic reason, troubleshooting steps, and a quick return to Desktop.
 */
export default function NotFound() {
  return (
    <main className="w-dvw h-dvh overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#0c0822] via-[#140f35] to-[#080517] p-4 text-white select-none">
      {/* Frosted Glass Diagnostic Window */}
      <div className="w-full max-w-lg bg-[#1e1e24]/90 backdrop-blur-2xl rounded-2xl border border-white/15 shadow-[0_24px_64px_rgba(0,0,0,0.6)] overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Window Header with macOS Traffic Lights */}
        <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#ff6157] border border-[#e0443e]" />
            <span className="size-3 rounded-full bg-[#ffc030] border border-[#dea123]" />
            <span className="size-3 rounded-full bg-[#2acb42] border border-[#1fa733]" />
          </div>
          <p className="font-mono text-xs text-gray-400">System Alert: 404 Not Found</p>
          <div className="w-12" />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Status & Icon */}
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center flex-shrink-0 text-amber-400">
              <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">Resource Not Found</h1>
              <p className="text-xs text-gray-400 font-mono mt-0.5">HTTP Status 404 • File or Directory Missing</p>
            </div>
          </div>

          {/* Diagnostic breakdown */}
          <div className="space-y-3 bg-black/30 rounded-xl p-4 border border-white/5 text-xs text-gray-300">
            <div>
              <strong className="text-white block font-medium mb-1">🔍 Why this occurred:</strong>
              <p className="text-gray-400 leading-relaxed">
                The requested application path or document does not exist in the macOS portfolio directory structure, or the link may have been updated.
              </p>
            </div>

            <div className="pt-2 border-t border-white/5">
              <strong className="text-white block font-medium mb-1">💡 How to solve:</strong>
              <ul className="list-disc list-inside space-y-1 text-gray-400 pl-1">
                <li>Double check the destination URL for typos.</li>
                <li>Return to the main desktop wallpaper to access your apps via the Dock.</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/25 active:scale-95 cursor-pointer"
            >
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Return to Desktop</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
