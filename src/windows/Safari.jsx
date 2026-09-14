'use client'

import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'

/**
 * macOS Safari Browser Window
 * Fully responsive across Mobile, Tablet, iPad, and Desktop screens.
 */
const Safari = ({ controls, isMaximized }) => {
  const [activeTab, setActiveTab] = useState('donations')

  const nobleCauses = [
    {
      id: 1,
      name: 'The Akshaya Patra Foundation',
      description: 'Wholesome mid-day meals to millions of school children across India every day.',
      image: '/images/causes/akshaya_patra.jpg',
      btnGradient: 'from-blue-600 to-blue-500 shadow-blue-500/25',
      link: 'https://www.akshayapatra.org/donate-to-midday-meal-programme?utm_source=google&utm_medium=cpc&utm_campaign=gads&utm_content=lapsed-px-mdm-26&gad_source=1&gad_campaignid=23942140523&gbraid=0AAAAADtGwlyegnOx-VzkL8UHqs8vuzz7g&gclid=Cj0KCQjwteTUBhD4ARIsAEYjs3rUSyHEw9nWu5CbfvFXoTIkZdv4Ke30P2gYdi4b5n-ryB1I4cZs5BAaAukFEALw_wcB/',
    },
    {
      id: 2,
      name: 'Hindu Fund',
      description: 'Crowdfunding platform dedicated to supporting civilizational causes and temple restoration.',
      image: '/images/causes/hindu_fund.jpg',
      btnGradient: 'from-blue-600 to-blue-500 shadow-blue-500/25',
      link: 'https://hindu.fund/',
    },
    {
      id: 3,
      name: 'Veducation',
      description: 'Preserving and spreading timeless Vedic knowledge, philosophy, and cultural values.',
      image: '/images/causes/veducation.jpg',
      btnGradient: 'from-blue-600 to-blue-500 shadow-blue-500/25',
      link: 'https://www.veducation.world/',
    },
    {
      id: 4,
      name: 'The Sanskrit Channel',
      description: 'Making Sanskrit linguistics, meditative chants, and philosophical texts accessible globally.',
      image: '/images/causes/sanskrit_channel.jpg',
      btnGradient: 'from-blue-600 to-blue-500 shadow-blue-500/25',
      link: 'https://www.thesanskritchannel.org/',
    },
    {
      id: 5,
      name: 'Shivdhaam',
      description: 'Preserving sacred pilgrimage heritage sites, devotee assistance, and charitable seva.',
      image: '/images/causes/shivdhaam.jpg',
      btnGradient: 'from-blue-600 to-blue-500 shadow-blue-500/25',
      link: 'https://www.shivdhaam.org.in/?gad_source=1&gad_campaignid=23949023171&gbraid=0AAAAA-wKSMMO4ZiZthKTvahdFl4GIwcLA&gclid=CjwKCAjwqJXUBhBNEiwA8BgG7ieXXDG3WGkjFA0uEGe8yEg6NRAmmD_r6jHUKL3IaqTBgIR3aL-AjBoCq5wQAvD_BwE',
    },
    {
      id: 6,
      name: 'For The People Foundation',
      description: 'Grassroots emergency medical relief, education support, and direct family assistance.',
      image: '/images/causes/for_people.jpg',
      btnGradient: 'from-blue-600 to-blue-500 shadow-blue-500/25',
      link: 'https://forthepeople.in/en',
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
      className={`flex flex-col bg-[#fdfdfd] dark:bg-[#151518] text-gray-800 dark:text-white rounded-2xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 w-full ${
        isMaximized
          ? 'h-[calc(100dvh-130px)]'
          : 'h-[calc(100dvh-130px)] sm:h-[480px] max-h-[560px]'
      }`}
    >
      {/* Responsive Safari Header & Address Bar */}
      <div
        id="window-header"
        className="bg-[#ebebef]/90 dark:bg-[#1f1f24]/90 backdrop-blur-md border-b border-gray-200/80 dark:border-white/10 px-2.5 sm:px-3 py-2 flex items-center justify-between flex-shrink-0 gap-1.5 sm:gap-2 cursor-grab active:cursor-grabbing w-full"
      >
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          {controls}
          <div className="hidden xs:flex sm:flex items-center gap-0.5 text-gray-400 dark:text-gray-500">
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

        {/* Responsive Smart Search Address Bar */}
        <div
          className="search flex-1 min-w-0 max-w-[220px] sm:max-w-xs mx-auto flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-xl bg-white/95 dark:bg-[#111114]/90 border border-black/10 dark:border-white/10 shadow-2xs"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <svg className="w-3 h-3 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            readOnly
            value={currentTabObj.url}
            className="w-full text-[10px] sm:text-[11px] font-mono text-gray-700 dark:text-gray-300 bg-transparent outline-none cursor-text truncate select-text"
            aria-label="Browser address URL"
          />
        </div>

        <div className="w-6 sm:w-10" />
      </div>

      {/* Safari Tab Bar */}
      <div className="bg-[#e0e0e5]/80 dark:bg-[#18181c]/80 backdrop-blur-md px-2 pt-1 flex items-center gap-1 border-b border-gray-200/80 dark:border-white/10 select-none overflow-x-auto w-full">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                if (tab.id === 'blogs') return
                setActiveTab(tab.id)
              }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-t-lg text-xs font-medium transition-all duration-200 truncate ${
                isActive
                  ? 'bg-[#fdfdfd] dark:bg-[#151518] text-gray-900 dark:text-white shadow-2xs border-t border-x border-black/5 dark:border-white/10 relative z-10 font-semibold cursor-pointer'
                  : tab.id === 'blogs'
                  ? 'text-gray-400 dark:text-gray-600 opacity-50 cursor-default'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100 cursor-pointer'
              }`}
            >
              <span className="text-xs">{tab.icon}</span>
              <span className="truncate text-[11px]">{tab.title}</span>
            </button>
          )
        })}
      </div>

      {/* Responsive Scrollable Main View */}
      <main
        className="window-scroll-body flex-1 bg-gradient-to-b from-[#fdfdfd] to-[#f7f7f9] dark:from-[#151518] dark:to-[#0f0f12] p-2.5 sm:p-3 overflow-x-hidden w-full"
        onWheel={(e) => e.stopPropagation()}
      >
        {activeTab === 'donations' && (
          <div className="w-full max-w-full space-y-2 flex flex-col">
            {nobleCauses.map((cause) => (
              <a
                key={cause.id}
                href={cause.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-xl bg-white/90 dark:bg-[#1c1c22]/90 hover:bg-white dark:hover:bg-[#23232b] border border-black/5 dark:border-white/10 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer w-full max-w-full box-border overflow-hidden"
                title={`Donate to ${cause.name}`}
              >
                {/* Left: Responsive Image & Cause Info */}
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 overflow-hidden">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform bg-gray-100 dark:bg-white/5">
                    <img
                      src={cause.image}
                      alt={cause.name}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1 space-y-0.5 overflow-hidden">
                    <h3 className="text-[11px] sm:text-xs font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-500 transition-colors">
                      {cause.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 truncate leading-tight">
                      {cause.description}
                    </p>
                  </div>
                </div>

                {/* Right: Responsive Donate Button */}
                <div className="flex-shrink-0 ml-1">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg bg-gradient-to-r ${cause.btnGradient} text-white font-semibold text-[10px] sm:text-[11px] shadow-2xs group-hover:shadow-sm group-hover:scale-105 transition-all`}
                  >
                    <span>Donate</span>
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default WindowWrapper(Safari, 'safari')
