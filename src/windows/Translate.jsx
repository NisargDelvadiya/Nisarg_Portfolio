'use client'

import React, { useState, useEffect } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { ALL_LANGUAGES } from '#constants'

/**
 * macOS Translate & Language Selector Window
 * Powered by Google Translate for real-time translation across 20 languages.
 */
const Translate = ({ controls, isMaximized }) => {
  const [currentLang, setCurrentLang] = useState('en')
  const [statusMessage, setStatusMessage] = useState('')

  // Detect current active language from cookie or localStorage on mount
  useEffect(() => {
    try {
      const getCookie = (name) => {
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${name}=`)
        if (parts.length === 2) return parts.pop().split(';').shift()
        return null
      }

      const googtrans = getCookie('googtrans')
      if (googtrans) {
        // format usually /en/hi or /auto/hi
        const code = googtrans.split('/').filter(Boolean).pop()
        if (code) {
          setCurrentLang(code)
          return
        }
      }

      const saved = localStorage.getItem('portfolio_language')
      if (saved) {
        setCurrentLang(saved)
      }
    } catch (e) {
      console.warn('[Translate] Language detection error:', e)
    }
  }, [])

  // Trigger Google Translate engine
  const handleSelectLanguage = (code, name) => {
    try {
      setCurrentLang(code)
      localStorage.setItem('portfolio_language', code)

      const isEnglish = code === 'en'

      // Set cookie for Google Translate
      const domain = window.location.hostname
      const cookieValue = isEnglish ? '/en/en' : `/en/${code}`
      
      document.cookie = `googtrans=${cookieValue}; path=/;`
      if (domain && domain !== 'localhost') {
        document.cookie = `googtrans=${cookieValue}; domain=${domain}; path=/;`
        document.cookie = `googtrans=${cookieValue}; domain=.${domain}; path=/;`
      }

      // If Google Translate dropdown exists in DOM, trigger its change event
      const combo = document.querySelector('#google_translate_element select.goog-te-combo')
      if (combo) {
        combo.value = isEnglish ? 'en' : code
        combo.dispatchEvent(new Event('change', { bubbles: true }))
      } else {
        // Fallback: If Google widget needs page refresh to apply cookie
        window.location.reload()
        return
      }

      setStatusMessage(`Translated to ${name}`)
      setTimeout(() => setStatusMessage(''), 3000)
    } catch (err) {
      console.error('[Translate] Failed to change language:', err)
      setStatusMessage('Translation applied. Refreshing...')
      setTimeout(() => window.location.reload(), 600)
    }
  }

  const handleResetToEnglish = () => {
    handleSelectLanguage('en', 'English')
  }

  const currentLangObj = ALL_LANGUAGES.find((l) => l.code === currentLang) || ALL_LANGUAGES[0]

  return (
    <div
      translate="no"
      className={`notranslate flex flex-col bg-white dark:bg-[#1e1e22] text-gray-800 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 w-full ${
        isMaximized ? 'h-[calc(100vh-140px)]' : 'h-[500px]'
      }`}
    >
      {/* Window Header */}
      <div
        id="window-header"
        className="bg-gray-100 dark:bg-[#26262b] border-b border-gray-200 dark:border-white/10 px-4 py-2.5 flex items-center justify-between flex-shrink-0 cursor-grab active:cursor-grabbing"
      >
        {controls}
        <div className="flex items-center gap-2 flex-1 justify-center px-2">
          <img src="/images/translate.svg" alt="" className="size-4" aria-hidden="true" />
          <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm truncate">
            Translate Website
          </h2>
        </div>
        <div className="w-14 text-right">
          {currentLang !== 'en' && (
            <button
              type="button"
              data-clickable="true"
              onClick={handleResetToEnglish}
              className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-medium cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden bg-gray-50/50 dark:bg-[#18181c]">
        {/* Top Control Bar */}
        <div className="p-3 sm:p-3.5 border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#202026]/80 backdrop-blur-md">
          {/* Active Language & Status Banner */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 dark:text-gray-400">Current Language:</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300 border border-blue-500/20">
                <span className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
                {currentLangObj.name} {currentLangObj.nativeName ? `(${currentLangObj.nativeName})` : ''}
              </span>
            </div>

            {statusMessage && (
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 animate-fade-in">
                ✓ {statusMessage}
              </span>
            )}
          </div>
        </div>

        {/* Language Grid */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {ALL_LANGUAGES.map((lang) => {
              const isSelected = currentLang === lang.code
              return (
                <button
                  key={lang.code}
                  type="button"
                  data-clickable="true"
                  onClick={() => handleSelectLanguage(lang.code, lang.name)}
                  className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer group focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-400 dark:border-blue-500/60 shadow-sm'
                      : 'bg-white dark:bg-[#222228] border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-[#282830]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Code Avatar */}
                    <div
                      className={`size-9 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors uppercase ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-[#2e2e36] text-gray-700 dark:text-gray-300 group-hover:bg-blue-600/10 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                      }`}
                    >
                      {lang.code.slice(0, 3)}
                    </div>

                    {/* Language Title & Script */}
                    <div className="min-w-0">
                      <p
                        className={`text-xs sm:text-sm font-semibold truncate ${
                          isSelected
                            ? 'text-blue-700 dark:text-blue-300'
                            : 'text-gray-800 dark:text-gray-100'
                        }`}
                      >
                        {lang.name}
                      </p>
                      {lang.nativeName && (
                        <p className="text-[11px] text-gray-400 dark:text-gray-400 truncate">
                          {lang.nativeName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Active State Checkmark */}
                  {isSelected ? (
                    <div className="size-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 ml-2 shadow-sm">
                      <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <span className="text-[11px] font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                      Select →
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-4 py-2 bg-gray-100/70 dark:bg-[#1a1a20] border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1.5">
            <svg className="size-3.5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            Powered by Google Translate
          </span>
          <span>{ALL_LANGUAGES.length} Languages</span>
        </div>
      </div>
    </div>
  )
}

export default WindowWrapper(Translate, 'translate')
