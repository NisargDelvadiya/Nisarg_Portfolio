'use client'

import React from 'react'

/**
 * Hero Welcome Component
 * Renders the iconic Apple "hello"-style cursive "macfolio" hero text
 * with clear multi-line prominent subtitle typography and generous breathing gap.
 */
const Welcome = () => {
  return (
    <section
      id="welcome"
      aria-label="Welcome Hero"
      className="z-0 pointer-events-none px-4 py-6 sm:p-8 flex flex-col items-center justify-center cursor-default select-none text-center w-full max-w-[1200px] mx-auto"
    >
      {/* Subtitle with Namaste on first line and rest on next line */}
      <div className="flex flex-col items-center justify-center mb-4 sm:mb-6 md:mb-8 font-['Georama',sans-serif] tracking-wide">
        <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] leading-tight">
          Namaste,
        </span>
        <span className="text-white/90 text-sm sm:text-base md:text-xl lg:text-2xl font-light mt-1.5 tracking-wider drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] leading-tight">
          I&apos;m Nisarg! welcome to my
        </span>
      </div>

      {/* Main Title: Apple "hello" script font writing "macfolio" with top margin */}
      <h1 className="font-hello lowercase text-[76px] sm:text-[104px] md:text-[135px] lg:text-[165px] xl:text-[185px] leading-none text-white tracking-normal drop-shadow-[0_4px_35px_rgba(255,255,255,0.4)] select-none pt-2 sm:pt-4">
        macfolio
      </h1>
    </section>
  )
}

export default Welcome
