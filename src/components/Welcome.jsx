'use client'

import React from 'react'
import TextPressure from './TextPressure'

/**
 * Hero Welcome Component
 * Renders the primary interactive typography for the macOS desktop wallpaper.
 */
const Welcome = () => {
  return (
    <section
      id="welcome"
      aria-label="Welcome Hero"
      className="z-0 pointer-events-auto px-4 py-6 sm:p-8 flex flex-col items-center justify-center cursor-default select-none text-center w-full max-w-[1000px] mx-auto"
    >
      <p className="text-base sm:text-xl md:text-2xl font-georama font-extralight tracking-wide text-white/90 select-none mb-2 sm:mb-4">
        Namaste, I&apos;m Nisarg! welcome to my
      </p>

      <div className="relative w-[90vw] max-w-[850px] h-[110px] sm:h-[150px] md:h-[200px] select-none flex items-center justify-center">
        <TextPressure
          text="PORTFOLIO"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={36}
        />
      </div>
    </section>
  )
}

export default Welcome
