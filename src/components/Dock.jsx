'use client'

import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { dockApps } from '#constants'
import useWindowStore from '#store/windows'

/**
 * macOS Interactive Dock Component
 * Features realistic GSAP magnification on desktop hover, snappy tap/click bounce on mobile/iPad,
 * active window indicators, and full WCAG accessibility.
 */
const Dock = () => {
  const dockRef = useRef(null)
  const [hoveredApp, setHoveredApp] = useState(null)
  const { windows, openWindow } = useWindowStore()

  useGSAP(() => {
    const dock = dockRef.current
    if (!dock) return

    // Check if the device has a precision pointer (desktop mouse vs mobile/iPad touch)
    const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isDesktopPointer) return

    const icons = dock.querySelectorAll('.dock-icon')

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect()
      const mouseX = e.clientX - left

      icons.forEach((icon) => {
        const { left: iconLeft, width: iconWidth } = icon.getBoundingClientRect()
        const iconCenter = iconLeft - left + iconWidth / 2
        const distance = Math.abs(mouseX - iconCenter)
        const intensity = Math.max(0, 1 - distance / 100)
        const scale = 1 + intensity * 0.18
        const y = -intensity * 12

        gsap.to(icon, {
          scale,
          y,
          duration: 0.18,
          ease: 'power2.out',
          transformOrigin: 'bottom center',
        })
      })
    }

    const handleMouseLeave = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.25,
          ease: 'power2.out',
          transformOrigin: 'bottom center',
        })
      })
    }

    dock.addEventListener('mousemove', handleMouseMove)
    dock.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      dock.removeEventListener('mousemove', handleMouseMove)
      dock.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleAppClick = (app, e) => {
    const icon = e.currentTarget
    const isTouchOrMobile = !window.matchMedia('(hover: hover) and (pointer: fine)').matches

    if (isTouchOrMobile) {
      // Snappy tap & launch animation for mobile & iPad
      gsap
        .timeline()
        .to(icon, {
          scale: 0.85,
          duration: 0.08,
          ease: 'power2.out',
        })
        .to(icon, {
          scale: 1.12,
          y: -16,
          duration: 0.16,
          ease: 'back.out(2)',
        })
        .to(icon, {
          scale: 1,
          y: 0,
          duration: 0.18,
          ease: 'power2.out',
        })
    } else {
      // Standard macOS launch bounce for desktop
      gsap.to(icon, {
        y: -20,
        duration: 0.18,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out',
      })
    }

    if (app.canOpen) {
      openWindow(app.id)
    }
  }

  const handleKeyDown = (app, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleAppClick(app, e)
    }
  }

  return (
    <section id="dock" role="toolbar" aria-label="macOS Application Dock">
      <div
        ref={dockRef}
        className="dock-container gap-1.5 sm:gap-2 p-1.5 sm:p-2 overflow-visible max-w-[96vw]"
      >
        {dockApps.map((app) => {
          const isOpen = windows[app.id]?.isOpen
          return (
            <div
              key={app.id}
              data-app-id={app.id}
                role="button"
                tabIndex={0}
                aria-label={`Open ${app.name}`}
                title={app.name}
                className="dock-icon relative flex flex-col items-center origin-bottom cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded-xl active:scale-90 transition-transform duration-75"
                onClick={(e) => handleAppClick(app, e)}
                onKeyDown={(e) => handleKeyDown(app, e)}
                onMouseEnter={() => {
                  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                    setHoveredApp(app.id)
                  }
                }}
                onMouseLeave={() => setHoveredApp(null)}
                onFocus={() => {
                  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                    setHoveredApp(app.id)
                  }
                }}
                onBlur={() => setHoveredApp(null)}
              >
                {hoveredApp === app.id && (
                  <span
                    role="tooltip"
                    className="tooltip absolute -top-9 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap z-50 text-[11px] sm:text-xs"
                  >
                    {app.name}
                  </span>
                )}
                <img
                  src={`/images/${app.icon}`}
                  alt={app.name}
                  className="size-full object-contain pointer-events-none"
                  loading="lazy"
                />
                {isOpen && (
                  <span
                    aria-hidden="true"
                    className="size-1 bg-black/70 dark:bg-white/80 rounded-full absolute -bottom-1"
                  />
                )}
              </div>
          )
        })}
      </div>
    </section>
  )
}

export default Dock
