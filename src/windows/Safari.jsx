'use client'

import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'

/**
 * macOS Safari Browser Window
 * Clean, cool glass cards with direct list view (top hero banner removed).
 */
const Safari = ({ controls, isMaximized }) => {
  const [activeTab, setActiveTab] = useState('donations')

  const nobleCauses = [
    {
      id: 1,
      name: 'The Akshaya Patra Foundation',
      category: 'Mid-Day Meals & Child Nutrition',
      description: 'Providing wholesome, nutritious mid-day meals to millions of government school children across India every day.',
      favicon: '/icons/causes/akshayapatra.png',
      tagColor: 'text-amber-500 dark:text-amber-400 bg-amber-500/10 border-amber-500/20',
      glow: 'group-hover:border-amber-500/40 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]',
      btnGradient: 'from-amber-500 to-orange-600 shadow-amber-500/25 hover:shadow-amber-500/40',
      link: 'https://www.akshayapatra.org/donate-to-midday-meal-programme?utm_source=google&utm_medium=cpc&utm_campaign=gads&utm_content=lapsed-px-mdm-26&gad_source=1&gad_campaignid=23942140523&gbraid=0AAAAADtGwlyegnOx-VzkL8UHqs8vuzz7g&gclid=Cj0KCQjwteTUBhD4ARIsAEYjs3rUSyHEw9nWu5CbfvFXoTIkZdv4Ke30P2gYdi4b5n-ryB1I4cZs5BAaAukFEALw_wcB/',
    },
    {
      id: 2,
      name: 'Feeding India',
      category: 'Hunger Relief & Malnutrition',
      description: 'Eliminating hunger, malnutrition, and food wastage across vulnerable communities with nationwide daily meal drives.',
      favicon: '/icons/causes/feedingindia.png',
      tagColor: 'text-rose-500 dark:text-rose-400 bg-rose-500/10 border-rose-500/20',
      glow: 'group-hover:border-rose-500/40 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]',
      btnGradient: 'from-rose-500 to-red-600 shadow-rose-500/25 hover:shadow-rose-500/40',
      link: 'https://www.feedingindia.org/',
    },
    {
      id: 3,
      name: 'Hindu Fund',
      category: 'Heritage & Community Empowerment',
      description: 'Crowdfunding platform dedicated to supporting civilizational causes, temple restoration, and community welfare.',
      favicon: '/icons/causes/hindu_fund.png',
      tagColor: 'text-orange-500 dark:text-orange-400 bg-orange-500/10 border-orange-500/20',
      glow: 'group-hover:border-orange-500/40 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]',
      btnGradient: 'from-orange-500 to-amber-600 shadow-orange-500/25 hover:shadow-orange-500/40',
      link: 'https://hindu.fund/',
    },
    {
      id: 4,
      name: 'Veducation',
      category: 'Vedic Wisdom & Culture',
      description: 'Educational initiatives preserving and spreading timeless Vedic knowledge, philosophy, and cultural values.',
      favicon: '/icons/causes/veducation.png',
      tagColor: 'text-blue-500 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
      glow: 'group-hover:border-blue-500/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
      btnGradient: 'from-blue-600 to-indigo-600 shadow-blue-500/25 hover:shadow-blue-500/40',
      link: 'https://www.veducation.world/',
    },
    {
      id: 5,
      name: 'The Sanskrit Channel',
      category: 'Sanskrit Revival & Linguistics',
      description: 'Making Sanskrit linguistics, meditative chants, and ancient philosophical wisdom accessible and engaging globally.',
      favicon: '/icons/causes/thesanskritchannel.png',
      tagColor: 'text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      glow: 'group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]',
      btnGradient: 'from-emerald-500 to-teal-600 shadow-emerald-500/25 hover:shadow-emerald-500/40',
      link: 'https://www.thesanskritchannel.org/',
    },
    {
      id: 6,
      name: 'Shivdhaam',
      category: 'Spiritual & Social Welfare',
      description: 'Preserving sacred heritage pilgrimage sites, devotee assistance, environmental cleanliness, and charitable seva projects.',
      favicon: '/icons/causes/shivdhaam.png',
      tagColor: 'text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      glow: 'group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
      btnGradient: 'from-cyan-500 to-blue-600 shadow-cyan-500/25 hover:shadow-cyan-500/40',
      link: 'https://www.shivdhaam.org.in/?gad_source=1&gad_campaignid=23949023171&gbraid=0AAAAA-wKSMMO4ZiZthKTvahdFl4GIwcLA&gclid=CjwKCAjwqJXUBhBNEiwA8BgG7ieXXDG3WGkjFA0uEGe8yEg6NRAmmD_r6jHUKL3IaqTBgIR3aL-AjBoCq5wQAvD_BwE',
    },
    {
      id: 7,
      name: 'For The People Foundation',
      category: 'Humanitarian Aid & Emergency Relief',
      description: 'Delivering grassroots emergency medical relief, education support, and direct aid to underprivileged families.',
      favicon: '/icons/causes/forthepeople.png',
      tagColor: 'text-purple-500 dark:text-purple-400 bg-purple-500/10 border-purple-500/20',
      glow: 'group-hover:border-purple-500/40 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]',
      btnGradient: 'from-purple-600 to-pink-600 shadow-purple-500/25 hover:shadow-purple-500/40',
      link: 'https://forthepeople.in/en',
    },
  ]

  const blogPostsExtended = [
    {
      id: 1,
      date: 'Sep 2, 2025',
      title: 'TypeScript Explained: What It Is, Why It Matters, and How to Master It',
      tag: 'TypeScript',
      badge: 'TS',
      tagColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      gradient: 'from-blue-600 to-indigo-700',
      link: 'https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it',
    },
    {
      id: 2,
      date: 'Aug 28, 2025',
      title: 'The Ultimate Guide to Mastering Three.js for 3D Development',
      tag: 'Three.js',
      badge: '3D',
      tagColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      gradient: 'from-purple-600 to-pink-600',
      link: 'https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development',
    },
    {
      id: 3,
      date: 'Aug 15, 2025',
      title: 'The Ultimate Guide to Mastering GSAP Animations',
      tag: 'GSAP Motion',
      badge: 'GSAP',
      tagColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      gradient: 'from-emerald-600 to-teal-700',
      link: 'https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations',
    },
  ]

  const tabs = [
    {
      id: 'donations',
      title: 'Dharma & Causes',
      url: 'https://donations.nisarg.com/dharma',
      icon: '🪷',
    },
    {
      id: 'blogs',
      title: 'Blogs & Articles',
      url: 'https://draft.blogger.com/profile/06497378480775646608',
      icon: '✍️',
    },
  ]

  const currentTabObj = tabs.find((t) => t.id === activeTab) || tabs[0]

  return (
    <div
      className={`flex flex-col bg-[#fdfdfd] dark:bg-[#151518] text-gray-800 dark:text-white rounded-2xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized
          ? 'w-full h-[calc(100dvh-140px)]'
          : 'w-[760px] max-w-[94vw] h-[calc(100dvh-140px)] sm:h-[560px] md:h-[600px]'
      }`}
    >
      {/* Cool macOS Safari Header & Address Bar */}
      <div
        id="window-header"
        className="bg-[#ebebef]/90 dark:bg-[#1f1f24]/90 backdrop-blur-md border-b border-gray-200/80 dark:border-white/10 px-3.5 py-2.5 flex items-center justify-between flex-shrink-0 gap-3 cursor-grab active:cursor-grabbing"
      >
        <div className="flex items-center gap-3 flex-shrink-0">
          {controls}
          <div className="hidden sm:flex items-center gap-1 text-gray-400 dark:text-gray-500">
            <button
              type="button"
              className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors"
              title="Back"
              aria-label="Back"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors"
              title="Forward"
              aria-label="Forward"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Smart Glass Search / Address Bar */}
        <div
          className="search flex-1 min-w-0 max-w-full sm:max-w-md mx-auto flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#111114]/90 border border-black/10 dark:border-white/10 shadow-xs ring-1 ring-black/5 dark:ring-white/5"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            readOnly
            value={currentTabObj.url}
            className="w-full text-[11px] sm:text-xs font-mono text-gray-700 dark:text-gray-300 bg-transparent outline-none cursor-text truncate select-text"
            aria-label="Browser address URL"
          />
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 flex-shrink-0 cursor-pointer transition-colors"
            title="Reload Page"
            aria-label="Reload Page"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        <div className="w-10 sm:w-14" />
      </div>

      {/* Safari Glass Tab Bar */}
      <div className="bg-[#e0e0e5]/80 dark:bg-[#18181c]/80 backdrop-blur-md px-2.5 pt-1.5 flex items-center gap-1.5 border-b border-gray-200/80 dark:border-white/10 select-none overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-t-xl text-xs font-medium transition-all duration-200 cursor-pointer truncate ${
                isActive
                  ? 'bg-[#fdfdfd] dark:bg-[#151518] text-gray-900 dark:text-white shadow-xs border-t border-x border-black/5 dark:border-white/10 relative z-10 font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="truncate text-[11px] sm:text-xs">{tab.title}</span>
            </button>
          )
        })}
      </div>

      {/* Safari Main View with Clean Glass Cards (Direct List View) */}
      <main
        className="window-scroll-body flex-1 bg-gradient-to-b from-[#fdfdfd] to-[#f7f7f9] dark:from-[#151518] dark:to-[#0f0f12] p-4 sm:p-6"
        onWheel={(e) => e.stopPropagation()}
      >
        {activeTab === 'donations' && (
          <div className="w-full space-y-3">
            {/* Direct Cool Cause Cards */}
            <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
              {nobleCauses.map((cause) => (
                <div
                  key={cause.id}
                  className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-[#1c1c22]/90 hover:bg-white dark:hover:bg-[#22222a] border border-black/5 dark:border-white/10 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${cause.glow}`}
                >
                  <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                    {/* Glowing Favicon Badge */}
                    <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-2 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-200">
                      <img
                        src={cause.favicon}
                        alt={cause.name}
                        className="size-full object-contain rounded"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 min-w-0">
                        <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {cause.name}
                        </span>
                        <span className={`text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md border ${cause.tagColor}`}>
                          {cause.category}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                        {cause.description}
                      </p>
                    </div>
                  </div>

                  {/* Glowing Cool Action Button */}
                  <a
                    href={cause.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`self-stretch sm:self-center flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r ${cause.btnGradient} text-white font-semibold text-xs shadow-md transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex-shrink-0`}
                    title={`Donate to ${cause.name}`}
                  >
                    <span>Donate</span>
                    <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-white/5">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Publications & Writeups
              </span>
              <a
                href="https://draft.blogger.com/profile/06497378480775646608"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Blogger Profile</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Cool Blog Cards */}
            <div className="grid grid-cols-1 gap-3">
              {blogPostsExtended.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/90 dark:bg-[#1c1c22]/90 hover:bg-white dark:hover:bg-[#22222a] border border-black/5 dark:border-white/10 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${post.gradient} text-white flex items-center justify-center text-xs font-extrabold flex-shrink-0 shadow-sm`}
                    >
                      {post.badge}
                    </div>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                          {post.date}
                        </span>
                        <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded border ${post.tagColor}`}>
                          {post.tag}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                    </div>
                  </div>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="self-stretch sm:self-center flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-gray-800 dark:text-white text-xs font-semibold transition-all duration-200 flex-shrink-0 cursor-pointer"
                    title={`Read: ${post.title}`}
                  >
                    <span>Read Article</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default WindowWrapper(Safari, 'safari')
