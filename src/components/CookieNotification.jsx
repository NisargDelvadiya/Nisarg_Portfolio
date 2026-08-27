'use client'

import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import useWindowStore from '#store/windows'

/**
 * macOS Top-Right Cookie Consent Notification
 * Styled authentically like a macOS push notification banner.
 * If dismissed via the cross '✕' without accepting, it pops up again every 30 seconds until accepted.
 */
const CookieNotification = () => {
  const [visible, setVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const notificationRef = useRef(null)
  const repopTimerRef = useRef(null)
  const { openWindow } = useWindowStore()

  useEffect(() => {
    try {
      const accepted = localStorage.getItem('cookie_consent_accepted') === 'true'
      if (!accepted) {
        // Show after a slight natural delay for macOS desktop boot-in feel
        const timer = setTimeout(() => {
          setVisible(true)
        }, 1200)
        return () => clearTimeout(timer)
      }
    } catch (e) {
      console.warn('[CookieNotification] localStorage access error:', e)
    }

    return () => {
      if (repopTimerRef.current) {
        clearTimeout(repopTimerRef.current)
      }
    }
  }, [])

  // Slide-in animation on visible
  useEffect(() => {
    if (visible && notificationRef.current) {
      gsap.fromTo(
        notificationRef.current,
        { x: 120, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.2)' }
      )
    }
  }, [visible])

  // Permanent Accept Action
  const handleAccept = () => {
    try {
      localStorage.setItem('cookie_consent_accepted', 'true')
    } catch (e) {
      console.warn(e)
    }

    if (repopTimerRef.current) {
      clearTimeout(repopTimerRef.current)
      repopTimerRef.current = null
    }

    if (notificationRef.current) {
      gsap.to(notificationRef.current, {
        x: 120,
        opacity: 0,
        scale: 0.92,
        duration: 0.28,
        ease: 'power2.in',
        onComplete: () => {
          setVisible(false)
        },
      })
    } else {
      setVisible(false)
    }
  }

  // Dismiss via Cross (will pop up again in 30 seconds)
  const handleCrossDismiss = () => {
    if (notificationRef.current) {
      gsap.to(notificationRef.current, {
        x: 120,
        opacity: 0,
        scale: 0.92,
        duration: 0.28,
        ease: 'power2.in',
        onComplete: () => {
          setVisible(false)
          // Schedule repop in 30 seconds if not accepted
          if (repopTimerRef.current) clearTimeout(repopTimerRef.current)
          repopTimerRef.current = setTimeout(() => {
            try {
              const accepted = localStorage.getItem('cookie_consent_accepted') === 'true'
              if (!accepted) {
                setVisible(true)
              }
            } catch (err) {
              console.warn(err)
            }
          }, 30000) // 30 seconds
        },
      })
    } else {
      setVisible(false)
      if (repopTimerRef.current) clearTimeout(repopTimerRef.current)
      repopTimerRef.current = setTimeout(() => {
        const accepted = localStorage.getItem('cookie_consent_accepted') === 'true'
        if (!accepted) setVisible(true)
      }, 30000)
    }
  }

  const handleOpenPrivacyPolicy = () => {
    openWindow('notes')
    handleCrossDismiss()
  }

  if (!visible) return null

  return (
    <aside
      ref={notificationRef}
      role="region"
      aria-label="Cookie and Privacy Consent Notification"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-9 sm:top-10 right-3 sm:right-5 z-[9999] w-[340px] sm:w-[370px] rounded-2xl p-3.5 backdrop-blur-2xl bg-white/80 dark:bg-[#1e1e24]/90 border border-white/40 dark:border-white/10 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.45)] select-none text-gray-800 dark:text-gray-100 transition-colors"
    >
      {/* macOS Notification Hover Dismiss Button (re-pops in 30s) */}
      {isHovered && (
        <button
          type="button"
          data-clickable="true"
          onClick={handleCrossDismiss}
          aria-label="Temporarily dismiss notification"
          title="Dismiss (will reappear in 30s until accepted)"
          className="absolute -top-2 -left-2 size-5 rounded-full bg-gray-600/80 hover:bg-gray-700 text-white flex items-center justify-center text-[10px] font-bold shadow-md cursor-pointer transition-transform hover:scale-110"
        >
          ✕
        </button>
      )}

      {/* Notification Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="size-5 rounded-md bg-blue-500/10 dark:bg-blue-400/20 flex items-center justify-center flex-shrink-0">
            <svg className="size-3.5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </div>
          <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider truncate">
            Privacy & Cookies
          </span>
        </div>
        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 flex-shrink-0">
          now
        </span>
      </div>

      {/* Notification Body */}
      <div className="mt-2 space-y-1">
        <h4 className="text-xs sm:text-[13px] font-semibold text-gray-900 dark:text-white leading-tight">
          Essential Cookie Notice
        </h4>
        <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
          We use strictly essential cookies and local storage to remember your translation language and theme settings under the Indian DPDP Act 2023. No ad tracking.
        </p>
      </div>

      {/* Notification Action Buttons (macOS Notification Style) */}
      <div className="mt-3 flex items-center justify-end gap-2 pt-1 border-t border-gray-200/50 dark:border-white/5">
        <button
          type="button"
          data-clickable="true"
          onClick={handleOpenPrivacyPolicy}
          className="px-2.5 py-1 text-[11px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          Privacy Policy
        </button>

        <button
          type="button"
          data-clickable="true"
          onClick={handleAccept}
          className="px-3.5 py-1 text-[11px] font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-lg shadow-sm transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
        >
          Accept
        </button>
      </div>
    </aside>
  )
}

export default CookieNotification
