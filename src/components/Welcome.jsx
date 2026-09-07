'use client'

import React from 'react'

/**
 * Hero Welcome Component
 * Renders the iconic Apple "hello"-style cursive "macfolio" hero text
 * with clean static typography and no hover effects.
 */
const Welcome = () => {
  return (
    <section
      id="welcome"
      aria-label="Welcome Hero"
      className="z-0 pointer-events-none px-4 py-6 sm:p-8 flex flex-col items-center justify-center cursor-default select-none text-center w-full max-w-[1200px] mx-auto"
    >
      {/* Subtitle */}
      <p className="text-white/85 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wider mb-2 sm:mb-3 font-['Georama',sans-serif]">
        Namaste, I&apos;m Nisarg! welcome to my
      </p>

      {/* Main Title: Apple "hello" script font writing "macfolio" */}
      <h1 className="font-hello lowercase text-[64px] sm:text-[92px] md:text-[120px] lg:text-[150px] xl:text-[170px] leading-none text-white tracking-normal drop-shadow-[0_4px_30px_rgba(255,255,255,0.35)] select-none">
        macfolio
      </h1>
    </section>
  )
}

export default Welcome
