'use client'

import React from 'react'

/**
 * Hero Welcome Component
 * Renders the primary aesthetic typography for the macOS desktop wallpaper.
 */
const Welcome = () => {
  return (
    <section
      id="welcome"
      aria-label="Welcome Hero"
      className="z-0 pointer-events-auto px-4 py-8 sm:p-12 flex flex-col items-center justify-center cursor-default select-none text-center max-w-full"
    >
      <p className="text-lg sm:text-2xl md:text-3xl font-georama font-extralight tracking-wide text-white/90 select-none">
        Namaste, I'm Nisarg! welcome to my
      </p>
      <h1 className="mt-2 sm:mt-4 text-5xl sm:text-7xl md:text-[105px] lg:text-[140px] italic font-georama font-normal leading-none tracking-tight text-white select-none">
        portfolio
      </h1>
    </section>
  )
}

export default Welcome
