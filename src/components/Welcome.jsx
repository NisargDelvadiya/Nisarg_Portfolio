'use client'

import React from 'react'

/**
 * Hero Welcome Component
 * Renders the iconic Apple "hello"-style monoline cursive "macfolio" hero text.
 */
const Welcome = () => {
  return (
    <section
      id="welcome"
      aria-label="Welcome Hero"
      className="z-0 pointer-events-auto px-4 py-6 sm:p-8 flex flex-col items-center justify-center cursor-default select-none text-center w-full max-w-[1200px] mx-auto"
    >
      {/* Subtitle */}
      <p className="text-xs sm:text-sm md:text-base text-white/80 font-light tracking-wide mb-1 sm:mb-2 select-none">
        Namaste, I'm Nisarg! welcome to my
      </p>

      {/* Main Title: Apple "hello" script font writing "macfolio" */}
      <div className="relative select-none flex items-center justify-center py-2 sm:py-4">
        <h1
          className="font-hello text-white text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-wide lowercase leading-tight drop-shadow-[0_4px_35px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_6px_50px_rgba(255,255,255,0.55)] transition-all duration-300 hover:scale-[1.02] cursor-default"
        >
          macfolio
        </h1>
      </div>
    </section>
  )
}

export default Welcome
