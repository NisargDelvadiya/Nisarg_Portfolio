'use client'

import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { blogPosts } from '#constants'

/**
 * macOS Safari Browser Window
 * Features authentic Safari tab bar with multiple tabs (Donations & Blogs),
 * dynamic smart search address bar, and curated noble causes in exact requested order.
 */
const Safari = ({ controls, isMaximized }) => {
  const [activeTab, setActiveTab] = useState('donations')

  const nobleCauses = [
    {
      id: 1,
      name: 'The Akshaya Patra Foundation',
      category: 'Mid-Day Meals & Child Nutrition',
      description: 'Providing wholesome, nutritious mid-day meals to millions of government school children across India every day.',
      emoji: '🍛',
      gradient: 'from-orange-500 via-amber-500 to-yellow-600',
      tagColor: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40',
      link: 'https://www.akshayapatra.org/donate-to-midday-meal-programme?utm_source=google&utm_medium=cpc&utm_campaign=gads&utm_content=lapsed-px-mdm-26&gad_source=1&gad_campaignid=23942140523&gbraid=0AAAAADtGwlyegnOx-VzkL8UHqs8vuzz7g&gclid=Cj0KCQjwteTUBhD4ARIsAEYjs3rUSyHEw9nWu5CbfvFXoTIkZdv4Ke30P2gYdi4b5n-ryB1I4cZs5BAaAukFEALw_wcB/',
      domain: 'akshayapatra.org',
    },
    {
      id: 2,
      name: 'Feeding India',
      category: 'Hunger Relief & Malnutrition',
      description: 'A non-profit initiative dedicated to eradicating hunger, malnutrition, and food wastage across vulnerable communities.',
      emoji: '🍲',
      gradient: 'from-red-500 via-rose-500 to-pink-600',
      tagColor: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/40',
      link: 'https://www.feedingindia.org/',
      domain: 'feedingindia.org',
    },
    {
      id: 3,
      name: 'Hindu Fund',
      category: 'Heritage & Community Empowerment',
      description: 'Crowdfunding platform dedicated to supporting Hindu civilizational initiatives, temple restoration, and cultural causes.',
      emoji: '🕉️',
      gradient: 'from-amber-600 via-orange-600 to-red-600',
      tagColor: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-800/40',
      link: 'https://hindu.fund/',
      domain: 'hindu.fund',
    },
    {
      id: 4,
      name: 'Veducation',
      category: 'Vedic Wisdom & Education',
      description: 'Creating high-impact educational content to preserve and spread timeless Vedic knowledge, philosophy, and Dharmic roots.',
      emoji: '📚',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      tagColor: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40',
      link: 'https://www.veducation.world/',
      domain: 'veducation.world',
    },
    {
      id: 5,
      name: 'The Sanskrit Channel',
      category: 'Sanskrit Revival & Linguistics',
      description: 'Decoding and sharing the beauty of Sanskrit chants, grammar, ancient texts, and sonic meditation for global audiences.',
      emoji: '🪕',
      gradient: 'from-teal-600 via-emerald-600 to-cyan-700',
      tagColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40',
      link: 'https://www.thesanskritchannel.org/',
      domain: 'thesanskritchannel.org',
    },
    {
      id: 6,
      name: 'Shivdhaam',
      category: 'Spiritual & Pilgrim Welfare',
      description: 'Supporting sacred heritage pilgrimage preservation, devotee assistance, environmental cleanliness, and seva projects.',
      emoji: '🔱',
      gradient: 'from-cyan-600 via-blue-600 to-indigo-700',
      tagColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/40',
      link: 'https://www.shivdhaam.org.in/?gad_source=1&gad_campaignid=23949023171&gbraid=0AAAAA-wKSMMO4ZiZthKTvahdFl4GIwcLA&gclid=CjwKCAjwqJXUBhBNEiwA8BgG7ieXXDG3WGkjFA0uEGe8yEg6NRAmmD_r6jHUKL3IaqTBgIR3aL-AjBoCq5wQAvD_BwE',
      domain: 'shivdhaam.org.in',
    },
    {
      id: 7,
      name: 'For The People Foundation',
      category: 'Humanitarian Aid & Social Impact',
      description: 'Grassroots social impact foundation delivering emergency medical relief, education support, and assistance to families in need.',
      emoji: '🤝',
      gradient: 'from-violet-600 via-purple-600 to-pink-600',
      tagColor: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/40',
      link: 'https://forthepeople.in/en',
      domain: 'forthepeople.in',
    },
  ]

  const tabs = [
    {
      id: 'donations',
      title: 'Causes & Donations',
      fullTitle: 'Causes & Donations',
      url: 'https://donations.nisargjayeshdelvadiya.com/noble-causes',
      icon: (
        <svg className="w-3.5 h-3.5 flex-shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
    {
      id: 'blogs',
      title: 'Blogs',
      fullTitle: 'Blogs & Articles',
      url: 'https://draft.blogger.com/profile/06497378480775646608',
      icon: (
        <svg className="w-3.5 h-3.5 flex-shrink-0 text-orange-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.5 3h-15C3.12 3 2 4.12 2 5.5v13C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-13C22 4.12 20.88 3 19.5 3zM18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2z" />
        </svg>
      ),
    },
  ]

  const postGradients = [
    {
      gradient: 'from-blue-600 via-indigo-600 to-blue-800',
      badge: 'TS',
      tag: 'TypeScript',
    },
    {
      gradient: 'from-purple-600 via-fuchsia-600 to-indigo-800',
      badge: '3D',
      tag: 'Three.js',
    },
    {
      gradient: 'from-emerald-600 via-teal-600 to-cyan-800',
      badge: 'GSAP',
      tag: 'Animation',
    },
  ]

  const currentTabObj = tabs.find((t) => t.id === activeTab) || tabs[0]

  return (
    <div
      className={`flex flex-col bg-[#fbfbfd] dark:bg-[#1a1a1e] text-gray-800 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized
          ? 'w-full h-[calc(100dvh-140px)]'
          : 'w-full max-w-[94vw] sm:max-w-[700px] md:max-w-[780px] lg:max-w-[860px] h-[calc(100dvh-140px)] sm:h-[560px] md:h-[600px]'
      }`}
    >
      {/* Window Header / Safari Toolbar */}
      <div
        id="window-header"
        className="bg-[#ebebef] dark:bg-[#25252b] border-b border-gray-200/80 dark:border-white/10 px-2.5 sm:px-4 py-2 flex items-center justify-between flex-shrink-0 gap-1.5 sm:gap-3 cursor-grab active:cursor-grabbing"
      >
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {controls}
          {/* Safari back/forward buttons */}
          <div className="hidden md:flex items-center gap-0.5 text-gray-400 dark:text-gray-500">
            <button
              type="button"
              className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              title="Back"
              aria-label="Back"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
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
          className="search flex-1 min-w-0 max-w-full sm:max-w-md md:max-w-lg mx-1 sm:mx-auto flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-lg bg-white/90 dark:bg-[#151518]/90 border border-black/10 dark:border-white/10 shadow-xs"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <svg className="w-3 h-3 text-emerald-500 dark:text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            readOnly
            value={currentTabObj.url}
            className="w-full text-[10px] sm:text-xs text-gray-700 dark:text-gray-200 bg-transparent outline-none cursor-text truncate select-text"
            aria-label="Browser address URL"
          />
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex-shrink-0 cursor-pointer"
            title="Reload Page"
            aria-label="Reload Page"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        {/* Safari Action / Share icon */}
        <div className="hidden sm:flex items-center gap-1.5 text-gray-400 dark:text-gray-500 flex-shrink-0">
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
      <div className="bg-[#dfdfe4] dark:bg-[#1e1e24] px-1.5 sm:px-2 pt-1.5 flex items-center gap-1 border-b border-gray-200 dark:border-white/10 select-none overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-t-lg text-xs font-medium transition-all max-w-[220px] flex-1 sm:flex-initial cursor-pointer truncate ${
                isActive
                  ? 'bg-[#fbfbfd] dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs border-t border-x border-black/5 dark:border-white/10 relative z-10'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100'
              }`}
              aria-label={tab.fullTitle}
              title={tab.fullTitle}
            >
              {tab.icon}
              <span className="truncate text-[11px] sm:text-xs">
                <span className="sm:hidden">{tab.title}</span>
                <span className="hidden sm:inline">{tab.fullTitle}</span>
              </span>
            </button>
          )
        })}

        {/* Plus Tab Button */}
        <div className="px-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer hidden sm:block">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>

      {/* Safari Browser Main View */}
      <main className="flex-1 overflow-y-auto overscroll-contain bg-[#fbfbfd] dark:bg-[#1a1a1e]">
        {activeTab === 'donations' && (
          <div className="p-3.5 sm:p-6 md:p-8 max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-5 sm:mb-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-2">
                <span>🙏</span>
                <span>Noble Causes & Foundations</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Support Meaningful Causes
              </h2>
              <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 mt-1 max-w-lg mx-auto leading-relaxed">
                Direct verified donation portals for hunger relief, Vedic wisdom, cultural heritage, and grassroots humanitarian aid.
              </p>
            </div>

            {/* Noble Causes Cards in Exact Requested Order */}
            <div className="space-y-3 sm:space-y-3.5">
              {nobleCauses.map((cause) => (
                <div
                  key={cause.id}
                  className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#222228] hover:bg-gray-50 dark:hover:bg-[#282830] transition-all border border-black/5 dark:border-white/5 shadow-xs hover:shadow-md"
                >
                  <div className="flex items-start gap-3 sm:gap-3.5 min-w-0 flex-1">
                    {/* Cause Badge */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${cause.gradient} text-white flex items-center justify-center text-lg sm:text-xl flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200`}
                    >
                      {cause.emoji}
                    </div>

                    {/* Content */}
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">#{cause.id}</span>
                        <h3 className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white truncate">
                          {cause.name}
                        </h3>
                        <span className={`text-[9px] sm:text-[10px] font-medium px-1.5 py-0.5 rounded border ${cause.tagColor}`}>
                          {cause.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                        {cause.description}
                      </p>
                    </div>
                  </div>

                  {/* Direct Donate Button */}
                  <a
                    href={cause.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-xs shadow-xs hover:shadow transition-all cursor-pointer flex-shrink-0"
                    title={`Donate to ${cause.name}`}
                    aria-label={`Donate to ${cause.name}`}
                  >
                    <span>Donate Now</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>

            <p className="text-[10px] sm:text-[11px] text-gray-400 dark:text-gray-500 text-center mt-6">
              All links redirect securely to the official, verified foundation donation portals. ✨
            </p>
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="p-3.5 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-4 sm:mb-6 border-b border-gray-100 dark:border-white/5 pb-3">
              <div>
                <h2 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="text-orange-500">📝</span> Blog Posts & Publications
                </h2>
                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Tutorials, tech guides, and architectural writeups
                </p>
              </div>
              <a
                href="https://draft.blogger.com/profile/06497378480775646608"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] sm:text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium w-fit"
              >
                <span>Visit Blogger</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {blogPosts.map((post, idx) => {
                const styleMeta = postGradients[idx % postGradients.length]
                return (
                  <article
                    key={post.id}
                    className="group flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[#222228] hover:bg-gray-50 dark:hover:bg-[#282830] transition-all border border-black/5 dark:border-white/5 shadow-xs hover:shadow-md"
                  >
                    {/* Visual Card Banner with Rich Gradient */}
                    <div
                      className={`w-full sm:w-36 h-28 sm:h-24 rounded-lg overflow-hidden bg-gradient-to-br ${styleMeta.gradient} flex flex-col justify-between p-2.5 sm:p-3 text-white flex-shrink-0 relative shadow-inner group-hover:scale-[1.02] transition-transform duration-300`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-xs px-1.5 py-0.5 rounded">
                          {styleMeta.tag}
                        </span>
                        <span className="text-xs opacity-75 font-mono">#{idx + 1}</span>
                      </div>
                      <div className="font-extrabold text-lg sm:text-xl tracking-tight opacity-90">
                        {styleMeta.badge}
                      </div>
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
                        className="text-blue-600 dark:text-blue-400 text-xs font-medium hover:underline inline-flex items-center gap-1 cursor-pointer w-fit mt-1 sm:mt-0"
                        title={`Read: ${post.title}`}
                      >
                        <span>Read Article</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default WindowWrapper(Safari, 'safari')
