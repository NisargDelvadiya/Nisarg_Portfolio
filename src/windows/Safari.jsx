'use client'

import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { blogPosts } from '#constants'

/**
 * macOS Safari Browser Window
 * Minimalist, elegant layout with proper alignment, full-width responsive rows, and favicons.
 */
const Safari = ({ controls, isMaximized }) => {
  const [activeTab, setActiveTab] = useState('donations')

  const nobleCauses = [
    {
      id: 1,
      name: 'The Akshaya Patra Foundation',
      category: 'Mid-Day Meals & Child Nutrition',
      description: 'Providing wholesome mid-day meals to millions of government school children across India.',
      favicon: '/icons/causes/akshayapatra.png',
      link: 'https://www.akshayapatra.org/donate-to-midday-meal-programme?utm_source=google&utm_medium=cpc&utm_campaign=gads&utm_content=lapsed-px-mdm-26&gad_source=1&gad_campaignid=23942140523&gbraid=0AAAAADtGwlyegnOx-VzkL8UHqs8vuzz7g&gclid=Cj0KCQjwteTUBhD4ARIsAEYjs3rUSyHEw9nWu5CbfvFXoTIkZdv4Ke30P2gYdi4b5n-ryB1I4cZs5BAaAukFEALw_wcB/',
    },
    {
      id: 2,
      name: 'Feeding India',
      category: 'Hunger Relief',
      description: 'Eliminating hunger, malnutrition, and food wastage across vulnerable communities.',
      favicon: '/icons/causes/feedingindia.png',
      link: 'https://www.feedingindia.org/',
    },
    {
      id: 3,
      name: 'Hindu Fund',
      category: 'Heritage & Community',
      description: 'Crowdfunding platform dedicated to supporting civilizational causes and temple restoration.',
      favicon: '/icons/causes/hindu_fund.png',
      link: 'https://hindu.fund/',
    },
    {
      id: 4,
      name: 'Veducation',
      category: 'Vedic Wisdom',
      description: 'Educational initiatives preserving and spreading timeless Vedic knowledge and philosophy.',
      favicon: '/icons/causes/veducation.png',
      link: 'https://www.veducation.world/',
    },
    {
      id: 5,
      name: 'The Sanskrit Channel',
      category: 'Sanskrit Revival',
      description: 'Making Sanskrit linguistics, chants, and ancient philosophical texts accessible globally.',
      favicon: '/icons/causes/thesanskritchannel.png',
      link: 'https://www.thesanskritchannel.org/',
    },
    {
      id: 6,
      name: 'Shivdhaam',
      category: 'Spiritual & Social Welfare',
      description: 'Preserving sacred heritage pilgrimage sites, devotee assistance, and charitable seva projects.',
      favicon: '/icons/causes/shivdhaam.png',
      link: 'https://www.shivdhaam.org.in/?gad_source=1&gad_campaignid=23949023171&gbraid=0AAAAA-wKSMMO4ZiZthKTvahdFl4GIwcLA&gclid=CjwKCAjwqJXUBhBNEiwA8BgG7ieXXDG3WGkjFA0uEGe8yEg6NRAmmD_r6jHUKL3IaqTBgIR3aL-AjBoCq5wQAvD_BwE',
    },
    {
      id: 7,
      name: 'For The People Foundation',
      category: 'Humanitarian Aid',
      description: 'Delivering grassroots emergency medical relief, education support, and assistance to families in need.',
      favicon: '/icons/causes/forthepeople.png',
      link: 'https://forthepeople.in/en',
    },
  ]

  const tabs = [
    {
      id: 'donations',
      title: 'Causes & Donations',
      url: 'https://donations.nisargjayeshdelvadiya.com/noble-causes',
    },
    {
      id: 'blogs',
      title: 'Blogs & Articles',
      url: 'https://draft.blogger.com/profile/06497378480775646608',
    },
  ]

  const currentTabObj = tabs.find((t) => t.id === activeTab) || tabs[0]

  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#18181c] text-gray-800 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized
          ? 'w-full h-[calc(100dvh-140px)]'
          : 'w-[720px] max-w-[94vw] h-[calc(100dvh-140px)] sm:h-[540px]'
      }`}
    >
      {/* Safari Header & Toolbar */}
      <div
        id="window-header"
        className="bg-[#f5f5f7] dark:bg-[#202024] border-b border-gray-200/70 dark:border-white/10 px-3 sm:px-4 py-2 flex items-center justify-between flex-shrink-0 gap-2 cursor-grab active:cursor-grabbing"
      >
        <div className="flex items-center gap-3 flex-shrink-0">
          {controls}
          <div className="hidden sm:flex items-center gap-1 text-gray-400 dark:text-gray-500">
            <button
              type="button"
              className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              title="Back"
              aria-label="Back"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              title="Forward"
              aria-label="Forward"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Smart Search / Address Bar */}
        <div
          className="search flex-1 min-w-0 max-w-full sm:max-w-md mx-auto flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#151518] border border-black/10 dark:border-white/10 shadow-2xs"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <svg className="w-3 h-3 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            readOnly
            value={currentTabObj.url}
            className="w-full text-[11px] text-gray-600 dark:text-gray-300 bg-transparent outline-none cursor-text truncate select-text"
            aria-label="Browser address URL"
          />
        </div>

        <div className="w-10 sm:w-14" />
      </div>

      {/* Safari Tab Bar */}
      <div className="bg-[#ebebef] dark:bg-[#1a1a1d] px-2 pt-1 flex items-center gap-1 border-b border-gray-200/70 dark:border-white/10 select-none overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-t-md text-xs font-medium transition-colors cursor-pointer truncate ${
                isActive
                  ? 'bg-white dark:bg-[#18181c] text-gray-900 dark:text-white shadow-2xs border-t border-x border-black/5 dark:border-white/10 relative z-10'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <span className="truncate text-[11px] sm:text-xs">{tab.title}</span>
            </button>
          )
        })}
      </div>

      {/* Browser Main View with Clean Full-Width Content */}
      <main className="flex-1 overflow-y-auto overscroll-contain bg-white dark:bg-[#18181c] p-4 sm:p-6">
        {activeTab === 'donations' && (
          <div className="w-full">
            <div className="mb-4 pb-2.5 border-b border-gray-100 dark:border-white/5">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                Causes & Foundations
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Direct links to verified charitable foundations and cultural initiatives
              </p>
            </div>

            {/* Clean Cause Rows */}
            <div className="divide-y divide-gray-100 dark:divide-white/5">
              {nobleCauses.map((cause) => (
                <div
                  key={cause.id}
                  className="py-3 flex items-center justify-between gap-3 sm:gap-4 hover:bg-gray-50/70 dark:hover:bg-white/[0.02] px-2.5 -mx-2.5 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {/* Website Favicon */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 p-1 flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <img
                        src={cause.favicon}
                        alt=""
                        aria-hidden="true"
                        className="size-full object-contain rounded"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>

                    <div className="space-y-0.5 min-w-0 flex-1">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">
                          {cause.name}
                        </span>
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate hidden sm:inline">
                          • {cause.category}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 line-clamp-1 sm:line-clamp-2">
                        {cause.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={cause.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1 cursor-pointer flex-shrink-0 px-2.5 py-1 rounded hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                    title={`Donate to ${cause.name}`}
                  >
                    <span>Donate</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="w-full">
            <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-gray-100 dark:border-white/5">
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  Articles & Publications
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Technical writeups, guides, and tutorials
                </p>
              </div>
              <a
                href="https://draft.blogger.com/profile/06497378480775646608"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
              >
                <span>Blogger</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Clean Blog Rows */}
            <div className="divide-y divide-gray-100 dark:divide-white/5">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="py-3 flex items-center justify-between gap-3 sm:gap-4 hover:bg-gray-50/70 dark:hover:bg-white/[0.02] px-2.5 -mx-2.5 rounded-lg transition-colors"
                >
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      {post.date}
                    </span>
                    <h3 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white line-clamp-1 sm:line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1 cursor-pointer flex-shrink-0 px-2.5 py-1 rounded hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                    title={`Read: ${post.title}`}
                  >
                    <span>Read</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default WindowWrapper(Safari, 'safari')
