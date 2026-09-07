'use client'

import React from 'react'
import TextPressure from './TextPressure'

/**
 * Hero Welcome Component
 * Renders the iconic Apple "hello"-style monoline cursive "macfolio" hero text
 * with interactive hover proximity effect on desktop.
 */
const Welcome = () => {
  return (
    <section
      id="welcome"
      aria-label="Welcome Hero"
      className="z-0 pointer-events-auto px-4 py-6 sm:p-8 flex flex-col items-center justify-center cursor-default select-none text-center w-full max-w-[1200px] mx-auto"
    >
      {/* Subtitle */}
      <div className="relative w-[92vw] max-w-[860px] h-[36px] sm:h-[44px] md:h-[50px] select-none flex items-center justify-center mb-1 sm:mb-2">
        <TextPressure
          text="Namaste, I'm Nisarg! welcome to my"
          fontFamily="'Georama', -apple-system, BlinkMacSystemFont, sans-serif"
          flex={false}
          uppercase={false}
          alpha={false}
          stroke={false}
          width
          weight
          italic={false}
          textColor="rgba(255, 255, 255, 0.88)"
          defaultWeight={200}
          minWeight={200}
          maxWeight={500}
          defaultWidth={100}
          minFontSize={18}
          as="p"
          className="tracking-wider text-sm sm:text-base md:text-lg font-light"
        />
      </div>

      {/* Main Title: Apple "hello" script font writing "macfolio" with interactive hover effect */}
      <div className="relative w-[92vw] max-w-[1100px] h-[120px] sm:h-[160px] md:h-[220px] lg:h-[260px] select-none flex items-center justify-center py-2 sm:py-4">
        <TextPressure
          text="macfolio"
          fontFamily="'Playwrite US Trad', 'Sacramento', 'Dancing Script', 'Caveat', cursive"
          fontUrl="https://fonts.googleapis.com/css2?family=Playwrite+US+Trad:wght@100..400&family=Sacramento&family=Dancing+Script:wght@400..700&family=Caveat:wght@400..700&display=swap"
          flex={false}
          uppercase={false}
          alpha={false}
          stroke={false}
          width={false}
          weight={true}
          italic={false}
          textColor="#ffffff"
          defaultWeight={400}
          minWeight={200}
          maxWeight={700}
          minFontSize={54}
          as="h1"
          className="font-hello lowercase tracking-normal drop-shadow-[0_4px_35px_rgba(255,255,255,0.35)] hover:drop-shadow-[0_6px_50px_rgba(255,255,255,0.6)]"
        />
      </div>
    </section>
  )
}

export default Welcome
