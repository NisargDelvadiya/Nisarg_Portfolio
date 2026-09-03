'use client'

import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { blogPosts } from '#constants'

/**
 * macOS Safari Browser Window
 * Features authentic Safari tab bar with multiple tabs (Blogs & Donations),
 * dynamic smart search address bar, and interactive content views.
 */
const Safari = ({ controls, isMaximized }) => {
  const [activeTab, setActiveTab] = useState('blogs')
  const [copiedUpi, setCopiedUpi] = useState(false)
  const [selectedTier, setSelectedTier] = useState(1)

  const tabs = [
    {
      id: 'blogs',
      title: 'Blogs & Articles',
      url: 'https://draft.blogger.com/profile/06497378480775646608',
      icon: (
        <svg className="w-3.5 h-3.5 flex-shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.5 3h-15C3.12 3 2 4.12 2 5.5v13C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-13C22 4.12 20.88 3 19.5 3zM18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2z" />
        </svg>
      ),
    },
    {
      id: 'donations',
      title: 'Support & Donations',
      url: 'https://buymeacoffee.com/nisargdelvadiya',
      icon: (
        <svg className="w-3.5 h-3.5 flex-shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
        </svg>
      ),
    },
  ]

  const currentTabObj = tabs.find((t) => t.id === activeTab) || tabs[0]

  const handleCopyUpi = (upiId) => {
    navigator.clipboard.writeText(upiId)
    setCopiedUpi(true)
    setTimeout(() => setCopiedUpi(false), 2000)
  }

  return (
    <div
      className={`flex flex-col bg-[#fbfbfd] dark:bg-[#1a1a1e] text-gray-800 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized ? 'w-full h-[calc(100vh-140px)]' : 'w-[720px] max-w-[95vw]'
      }`}
    >
      {/* Window Header / Safari Toolbar */}
      <div
        id="window-header"
        className="bg-[#ebebef] dark:bg-[#25252b] border-b border-gray-200/80 dark:border-white/10 px-3 sm:px-4 py-2 flex items-center justify-between flex-shrink-0 gap-2 cursor-grab active:cursor-grabbing"
      >
        <div className="flex items-center gap-3">
          {controls}
          {/* Safari back/forward buttons */}
          <div className="hidden sm:flex items-center gap-1 text-gray-400 dark:text-gray-500">
            <button
              type="button"
              className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-40 cursor-pointer"
              title="Back"
              aria-label="Back"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-40 cursor-pointer"
              title="Forward"
              aria-label="Forward"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Safari Smart Search / Address Bar */}
        <div
          className="search flex-1 max-w-lg mx-auto flex items-center gap-2 px-3 py-1 rounded-lg bg-white/90 dark:bg-[#151518]/90 border border-black/10 dark:border-white/10 shadow-xs"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <svg className="w-3 h-3 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            readOnly
            value={currentTabObj.url}
            className="w-full text-[11px] sm:text-xs text-gray-700 dark:text-gray-200 bg-transparent outline-none cursor-text truncate select-text"
            aria-label="Browser address URL"
          />
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            title="Reload Page"
            aria-label="Reload Page"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        {/* Safari Action / Share icon */}
        <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
          <button
            type="button"
            className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
            title="Share"
            aria-label="Share"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Safari Tab Bar */}
      <div className="bg-[#dfdfe4] dark:bg-[#1e1e24] px-2 pt-1.5 flex items-center gap-1 border-b border-gray-200 dark:border-white/10 overflow-x-auto select-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-t-lg text-xs font-medium transition-all max-w-[220px] flex-1 sm:flex-initial cursor-pointer ${
                isActive
                  ? 'bg-[#fbfbfd] dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs border-t border-x border-black/5 dark:border-white/10 relative z-10'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100'
              }`}
              aria-label={tab.title}
              title={tab.title}
            >
              {tab.icon}
              <span className="truncate text-[11px] sm:text-xs">{tab.title}</span>
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              )}
            </button>
          )
        })}

        {/* Plus Tab Button */}
        <div className="px-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>

      {/* Safari Browser Main View */}
      <main
        className={`flex-1 overflow-y-auto overscroll-contain bg-[#fbfbfd] dark:bg-[#1a1a1e] ${
          isMaximized ? 'max-h-[calc(100vh-190px)]' : 'max-h-[65vh]'
        }`}
      >
        {activeTab === 'blogs' && (
          <div className="p-4 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-6 border-b border-gray-100 dark:border-white/5 pb-3">
              <div>
                <h2 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="text-orange-500">📝</span> Blog Posts & Publications
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Tutorials, tech guides, and architectural writeups
                </p>
              </div>
              <a
                href="https://draft.blogger.com/profile/06497378480775646608"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
              >
                <span>Visit Blogger Profile</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col sm:flex-row gap-3 sm:gap-4 p-3.5 rounded-xl bg-white dark:bg-[#222228] hover:bg-gray-50 dark:hover:bg-[#282830] transition-all border border-black/5 dark:border-white/5 shadow-xs hover:shadow-md"
                >
                  <div className="w-full sm:w-36 h-28 sm:h-24 rounded-lg overflow-hidden bg-gray-100 dark:bg-black/20 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="content space-y-1.5 flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <span className="text-[10px] font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                        {post.date}
                      </span>
                      <h3 className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100 line-clamp-2 mt-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                    </div>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-xs font-medium hover:underline inline-flex items-center gap-1 cursor-pointer w-fit"
                      title={`Read: ${post.title}`}
                    >
                      <span>Read Article</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'donations' && (
          <div className="p-4 sm:p-7 max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 text-amber-500 flex items-center justify-center mx-auto mb-2.5 text-2xl shadow-inner">
                ☕
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                Support My Work & Projects
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-md mx-auto">
                If you find my open-source projects, tools, or articles helpful, consider buying me a coffee!
              </p>
            </div>

            {/* Donation Tiers */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6">
              {[
                { id: 1, name: '1 Coffee', amount: '₹100 / $2', emoji: '☕', desc: 'Quick spark' },
                { id: 2, name: '3 Coffees', amount: '₹300 / $5', emoji: '🚀', desc: 'Fuel a sprint' },
                { id: 3, name: 'Super Sponsor', amount: '₹1000 / $15', emoji: '🍕', desc: 'Host servers' },
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTier(tier.id)}
                  className={`p-3 rounded-xl text-center border transition-all cursor-pointer ${
                    selectedTier === tier.id
                      ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/20 shadow-xs ring-2 ring-amber-500/20'
                      : 'border-black/5 dark:border-white/5 bg-white dark:bg-[#222228] hover:border-black/10 dark:hover:border-white/10'
                  }`}
                >
                  <span className="text-xl block mb-1">{tier.emoji}</span>
                  <div className="text-xs font-semibold text-gray-900 dark:text-white">{tier.name}</div>
                  <div className="text-[11px] font-bold text-amber-600 dark:text-amber-400 mt-0.5">{tier.amount}</div>
                  <div className="text-[9px] text-gray-500 dark:text-gray-400 mt-0.5">{tier.desc}</div>
                </button>
              ))}
            </div>

            {/* Direct Payment Methods */}
            <div className="space-y-3">
              {/* Buy Me a Coffee / External Link */}
              <a
                href="https://buymeacoffee.com/nisargdelvadiya"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#FFDD00] hover:bg-[#FACC15] text-black font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">💛</span>
                  <span>Buy Me a Coffee (International & Cards)</span>
                </div>
                <span>&rarr;</span>
              </a>

              {/* UPI Direct Card */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#222228] border border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                    UPI
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-gray-900 dark:text-white">Instant UPI (GPay / PhonePe / Paytm)</div>
                    <div className="text-[11px] font-mono text-gray-500 dark:text-gray-400">nisargdelvadiya@okaxis</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyUpi('nisargdelvadiya@okaxis')}
                  className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-xs font-medium text-gray-800 dark:text-white transition-colors cursor-pointer"
                >
                  {copiedUpi ? '✓ Copied UPI' : 'Copy UPI ID'}
                </button>
              </div>

              {/* GitHub Sponsors Card */}
              <a
                href="https://github.com/sponsors/NisargDelvadiya"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#24292e] hover:bg-[#1b1f23] text-white font-medium text-xs sm:text-sm transition-all shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-pink-500">💖</span>
                  <span>Sponsor on GitHub</span>
                </div>
                <span className="text-gray-400">&rarr;</span>
              </a>
            </div>

            <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mt-6">
              Thank you for supporting open source software and independent development! ❤️
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default WindowWrapper(Safari, 'safari')
