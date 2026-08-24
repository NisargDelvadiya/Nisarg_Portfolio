'use client'

import React from 'react'

/**
 * macOS System Boot & Skeleton Loading Screen
 * Displays realistic Apple boot logo, shimmering progress indicator, and desktop skeleton state.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] w-dvw h-dvh bg-black flex flex-col items-center justify-center select-none text-white transition-opacity duration-500">
      {/* Apple Boot Logo */}
      <div className="flex flex-col items-center gap-10 animate-pulse">
        <svg
          className="w-16 h-16 sm:w-20 sm:h-20 fill-white drop-shadow-[0_0_24px_rgba(255,255,255,0.25)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill="#ffffff"
            d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.64-.78 1.08-1.86.96-2.95-1 .04-2.15.66-2.81 1.44-.58.68-1.1 1.77-.96 2.84 1.12.09 2.18-.55 2.81-1.33z"
          />
        </svg>

        {/* macOS Progress Bar */}
        <div className="w-48 sm:w-56 h-1.5 bg-white/20 rounded-full overflow-hidden relative shadow-inner">
          <div className="absolute top-0 bottom-0 left-0 w-3/5 bg-white rounded-full animate-[shimmer_1.5s_infinite]" />
        </div>
      </div>

      <p className="absolute bottom-10 font-mono text-[11px] text-white/40 tracking-wider">
        Initializing macOS Desktop...
      </p>
    </div>
  )
}
