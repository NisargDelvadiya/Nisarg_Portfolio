'use client'

import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { navLinks } from '#constants'
import useWindowStore from '#store/windows'

/**
 * macOS Top Menu Bar Component
 * Displays branding, quick navigation links, and dynamic clock with responsive multi-row adaptation on smaller viewports.
 */
const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState(dayjs())
  const { openWindow } = useWindowStore()

  useEffect(() => {
    setMounted(true)
    const root = document.documentElement
    root.classList.add('dark')
    document.body.classList.add('dark')

    const timer = setInterval(() => {
      setTime(dayjs())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleKeyDown = (e, type) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openWindow(type)
    }
  }

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 w-full bg-gradient-to-b from-[#181238]/70 to-[#0c0822]/55 backdrop-blur-3xl saturate-180 border-b border-white/[0.14] shadow-[inset_0_-1px_0_rgba(255,255,255,0.06),0_4px_24px_rgba(0,0,0,0.3)] z-[9999] flex flex-col md:flex-row items-center justify-between px-3 sm:px-6 md:px-8 py-1.5 md:py-0 md:h-11 gap-1 md:gap-0 text-sm text-white select-none transition-all duration-300"
    >
      {/* Row 1 on mobile / Left Section on desktop */}
      <nav
        aria-label="Desktop menu"
        className="w-full md:w-auto flex items-center justify-between md:justify-start gap-2.5 sm:gap-6 md:gap-10 overflow-x-auto no-scrollbar bg-transparent"
      >
        {/* Apple Icon & Brand */}
        <a
          href="https://nisargjayeshdelvadiya.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 sm:gap-2.5 cursor-pointer hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded-md px-1 flex-shrink-0"
          title="Visit Nisarg's Portfolio Website"
          aria-label="Visit Nisarg's official website"
        >
          {/* Official Apple Logo */}
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white flex-shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill="#ffffff"
              d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.64-.78 1.08-1.86.96-2.95-1 .04-2.15.66-2.81 1.44-.58.68-1.1 1.77-.96 2.84 1.12.09 2.18-.55 2.81-1.33z"
            />
          </svg>
          <span className="font-bold tracking-tight text-white text-xs sm:text-[14px] md:text-[15px] whitespace-nowrap">
            Nisarg's Portfolio
          </span>
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-2 sm:gap-4 md:gap-8 flex-shrink-0">
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              role="button"
              tabIndex={0}
              onClick={() => openWindow(type)}
              onKeyDown={(e) => handleKeyDown(e, type)}
              className="cursor-pointer text-white/90 hover:text-white transition-colors duration-150 font-medium px-1 text-[11px] sm:text-xs md:text-sm whitespace-nowrap focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded-md"
              title={`Open ${name}`}
              aria-label={`Open ${name} window`}
            >
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Row 2 on mobile / Right Section on desktop */}
      <div className="flex items-center justify-center md:justify-end flex-shrink-0 w-full md:w-auto">
        <time
          suppressHydrationWarning
          className="font-medium text-white/80 md:text-white/95 text-[11px] sm:text-xs md:text-sm tracking-wide whitespace-nowrap"
          aria-label="Current system time"
        >
          {mounted ? time.format('ddd MMM D h:mm A') : ''}
        </time>
      </div>
    </header>
  )
}

export default Navbar
