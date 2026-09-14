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
      {/* Main Title: Apple "hello" script font writing "macfolio" with top margin */}
      <h1 className="font-hello lowercase text-[76px] sm:text-[104px] md:text-[135px] lg:text-[165px] xl:text-[185px] leading-none text-white tracking-normal drop-shadow-[0_4px_35px_rgba(255,255,255,0.4)] select-none pt-2 sm:pt-4">
        macfolio
      </h1>
    </section>
  )
}

export default Welcome
