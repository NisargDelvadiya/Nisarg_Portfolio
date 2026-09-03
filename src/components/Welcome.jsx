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
      {/* Subtitle with TextPressure */}
      <div className="relative w-[90vw] max-w-[680px] h-[34px] sm:h-[42px] md:h-[48px] select-none flex items-center justify-center mb-1 sm:mb-2">
        <TextPressure
          text="Namaste, I'm Nisarg! welcome to my"
          flex={false}
          uppercase={false}
          alpha={false}
          stroke={false}
          width
          weight
          italic
          textColor="rgba(255, 255, 255, 0.92)"
          defaultWeight={200}
          defaultWidth={100}
          defaultItalic={0}
          minFontSize={18}
          as="p"
          className="tracking-wide"
        />
      </div>

      {/* Main Title with TextPressure */}
      <div className="relative w-[90vw] max-w-[850px] h-[100px] sm:h-[140px] md:h-[180px] select-none flex items-center justify-center">
        <TextPressure
          text="PORTFOLIO"
          flex
          uppercase
          alpha={false}
          stroke={false}
          width
          weight
          italic
          textColor="#ffffff"
          strokeColor="#5227FF"
          defaultWeight={400}
          defaultWidth={100}
          defaultItalic={0}
          minFontSize={36}
          as="h1"
        />
      </div>
    </section>
  )
}

export default Welcome
