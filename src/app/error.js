'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

/**
 * Custom macOS 500 Internal Error Boundary
 * Displays system exception diagnostics, causes, recovery steps, and retry trigger.
 */
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log exception to diagnostic console
    console.error('System Exception Encountered:', error)
  }, [error])

  return (
    <main className="w-dvw h-dvh overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#0c0822] via-[#140f35] to-[#080517] p-4 text-white select-none">
      {/* Frosted Glass Diagnostic Window */}
      <div className="w-full max-w-lg bg-[#1e1e24]/90 backdrop-blur-2xl rounded-2xl border border-red-500/20 shadow-[0_24px_64px_rgba(0,0,0,0.7)] overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Window Header with macOS Traffic Lights */}
        <div className="bg-red-950/30 border-b border-white/10 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#ff6157] border border-[#e0443e]" />
            <span className="size-3 rounded-full bg-[#ffc030] border border-[#dea123]" />
            <span className="size-3 rounded-full bg-[#2acb42] border border-[#1fa733]" />
          </div>
          <p className="font-mono text-xs text-red-400 font-semibold">System Panic: Error 500</p>
          <div className="w-12" />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Status & Icon */}
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0 text-red-400">
              <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">System Encountered an Error</h1>
              <p className="text-xs text-red-400/90 font-mono mt-0.5">HTTP Status 500 • Runtime Exception</p>
            </div>
          </div>

          {/* Diagnostic breakdown */}
          <div className="space-y-3 bg-black/40 rounded-xl p-4 border border-white/5 text-xs text-gray-300">
            <div>
              <strong className="text-white block font-medium mb-1">🔍 Why this occurred:</strong>
              <p className="text-gray-400 leading-relaxed font-mono break-all">
                {error?.message || 'An unexpected client runtime exception occurred during component render.'}
              </p>
            </div>

            <div className="pt-2 border-t border-white/5">
              <strong className="text-white block font-medium mb-1">💡 How to solve:</strong>
              <ul className="list-disc list-inside space-y-1 text-gray-400 pl-1">
                <li>Click <strong>Retry Session</strong> to re-execute the component tree.</li>
                <li>If the problem persists, reload the desktop or clear your browser cache.</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Return Home</span>
            </Link>

            <button
              onClick={() => reset()}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-600/30 active:scale-95 cursor-pointer"
            >
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Retry Session</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
