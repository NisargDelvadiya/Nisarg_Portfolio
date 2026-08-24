'use client'

import React from 'react'

/**
 * Root Global Error Boundary
 * Handles catastrophic exceptions at the root layout layer.
 */
export default function GlobalError({ error, reset }) {
  return (
    <html lang="en" className="dark">
      <body className="w-dvw h-dvh overflow-hidden flex items-center justify-center bg-[#0a0718] p-4 text-white font-sans select-none">
        <div className="w-full max-w-md bg-[#181820] p-8 rounded-2xl border border-red-500/20 shadow-2xl text-center space-y-6">
          <div className="size-14 mx-auto rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
            <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          <div className="space-y-2">
            <h1 className="text-xl font-bold text-white">System Critical Error</h1>
            <p className="text-xs text-gray-400 font-mono break-all">
              {error?.message || 'A root-level exception occurred during initialization.'}
            </p>
          </div>

          <button
            onClick={() => reset()}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            Reboot System
          </button>
        </div>
      </body>
    </html>
  )
}
