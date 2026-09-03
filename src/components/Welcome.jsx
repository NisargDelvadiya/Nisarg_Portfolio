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
      className="z-0 pointer-events-auto px-4 py-6 sm:p-8 flex flex-col items-center justify-center cursor-default select-none text-center w-full max-w-[1200px] mx-auto"
    >
      {/* Subtitle with TextPressure */}
      <div className="relative w-[92vw] max-w-[860px] h-[36px] sm:h-[48px] md:h-[58px] lg:h-[68px] select-none flex items-center justify-center mb-2 sm:mb-4">
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
          minFontSize={20}
          as="p"
          className="tracking-wider"
        />
      </div>

      {/* Main Title with TextPressure */}
      <div className="relative w-[92vw] max-w-[1100px] h-[110px] sm:h-[150px] md:h-[200px] lg:h-[250px] select-none flex items-center justify-center">
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
          minFontSize={42}
          as="h1"
        />
      </div>
    </section>
  )
}

export default Welcome
