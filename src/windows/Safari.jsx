'use client'

import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'

/**
 * macOS Safari Browser Window
 * Compact, rock-solid width constraints, no container overflow.
 */
const Safari = ({ controls, isMaximized }) => {
  const [activeTab, setActiveTab] = useState('donations')

  const nobleCauses = [
    {
      id: 1,
      name: 'The Akshaya Patra Foundation',
      category: 'Mid-Day Meals',
      description: 'Wholesome mid-day meals to millions of school children across India every day.',
      image: '/images/causes/akshaya_patra.jpg',
      tagColor: 'text-amber-500 dark:text-amber-400 bg-amber-500/10 border-amber-500/20',
      btnGradient: 'from-amber-500 to-orange-600 shadow-amber-500/25',
      link: 'https://www.akshayapatra.org/donate-to-midday-meal-programme?utm_source=google&utm_medium=cpc&utm_campaign=gads&utm_content=lapsed-px-mdm-26&gad_source=1&gad_campaignid=23942140523&gbraid=0AAAAADtGwlyegnOx-VzkL8UHqs8vuzz7g&gclid=Cj0KCQjwteTUBhD4ARIsAEYjs3rUSyHEw9nWu5CbfvFXoTIkZdv4Ke30P2gYdi4b5n-ryB1I4cZs5BAaAukFEALw_wcB/',
    },
    {
      id: 2,
      name: 'Feeding India',
      category: 'Hunger Relief',
      description: 'Eliminating hunger, malnutrition, and food wastage across vulnerable communities.',
      image: '/images/causes/feeding_india.jpg',
      tagColor: 'text-rose-500 dark:text-rose-400 bg-rose-500/10 border-rose-500/20',
      btnGradient: 'from-rose-500 to-red-600 shadow-rose-500/25',
      link: 'https://www.feedingindia.org/',
    },
    {
      id: 3,
      name: 'Hindu Fund',
      category: 'Heritage & Seva',
      description: 'Crowdfunding platform dedicated to supporting civilizational causes and temple restoration.',
      image: '/images/causes/hindu_fund.jpg',
      tagColor: 'text-orange-500 dark:text-orange-400 bg-orange-500/10 border-orange-500/20',
      btnGradient: 'from-orange-500 to-amber-600 shadow-orange-500/25',
      link: 'https://hindu.fund/',
    },
    {
      id: 4,
      name: 'Veducation',
      category: 'Vedic Wisdom',
      description: 'Preserving and spreading timeless Vedic knowledge, philosophy, and cultural values.',
      image: '/images/causes/veducation.jpg',
      tagColor: 'text-blue-500 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
      btnGradient: 'from-blue-600 to-indigo-600 shadow-blue-500/25',
      link: 'https://www.veducation.world/',
    },
    {
      id: 5,
      name: 'The Sanskrit Channel',
      category: 'Sanskrit Revival',
      description: 'Making Sanskrit linguistics, meditative chants, and philosophical texts accessible globally.',
      image: '/images/causes/sanskrit_channel.jpg',
      tagColor: 'text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      btnGradient: 'from-emerald-500 to-teal-600 shadow-emerald-500/25',
      link: 'https://www.thesanskritchannel.org/',
    },
    {
      id: 6,
      name: 'Shivdhaam',
      category: 'Pilgrim Welfare',
      description: 'Preserving sacred pilgrimage heritage sites, devotee assistance, and charitable seva.',
      image: '/images/causes/shivdhaam.jpg',
      tagColor: 'text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      btnGradient: 'from-cyan-500 to-blue-600 shadow-cyan-500/25',
      link: 'https://www.shivdhaam.org.in/?gad_source=1&gad_campaignid=23949023171&gbraid=0AAAAA-wKSMMO4ZiZthKTvahdFl4GIwcLA&gclid=CjwKCAjwqJXUBhBNEiwA8BgG7ieXXDG3WGkjFA0uEGe8yEg6NRAmmD_r6jHUKL3IaqTBgIR3aL-AjBoCq5wQAvD_BwE',
    },
    {
      id: 7,
      name: 'For The People Foundation',
      category: 'Humanitarian Aid',
      description: 'Grassroots emergency medical relief, education support, and direct family assistance.',
      image: '/images/causes/for_people.jpg',
      tagColor: 'text-purple-500 dark:text-purple-400 bg-purple-500/10 border-purple-500/20',
      btnGradient: 'from-purple-600 to-pink-600 shadow-purple-500/25',
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
      className={`flex flex-col bg-[#fdfdfd] dark:bg-[#151518] text-gray-800 dark:text-white rounded-2xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 w-full ${
        isMaximized
          ? 'h-[calc(100dvh-140px)]'
          : 'h-[calc(100dvh-140px)] sm:h-[480px]'
      }`}
    >
      {/* Safari Header & Address Bar */}
      <div
        id="window-header"
        className="bg-[#ebebef]/90 dark:bg-[#1f1f24]/90 backdrop-blur-md border-b border-gray-200/80 dark:border-white/10 px-3 py-2 flex items-center justify-between flex-shrink-0 gap-2 cursor-grab active:cursor-grabbing w-full"
      >
        <div className="flex items-center gap-2.5 flex-shrink-0">
          {controls}
          <div className="hidden sm:flex items-center gap-0.5 text-gray-400 dark:text-gray-500">
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

        {/* Smart Search Address Bar */}
        <div
          className="search flex-1 min-w-0 max-w-full sm:max-w-xs mx-auto flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/95 dark:bg-[#111114]/90 border border-black/10 dark:border-white/10 shadow-2xs"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <svg className="w-3 h-3 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            readOnly
            value={currentTabObj.url}
            className="w-full text-[11px] font-mono text-gray-700 dark:text-gray-300 bg-transparent outline-none cursor-text truncate select-text"
            aria-label="Browser address URL"
          />
        </div>

        <div className="w-8 sm:w-10" />
      </div>

      {/* Safari Tab Bar */}
      <div className="bg-[#e0e0e5]/80 dark:bg-[#18181c]/80 backdrop-blur-md px-2 pt-1 flex items-center gap-1 border-b border-gray-200/80 dark:border-white/10 select-none overflow-x-auto w-full">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-t-lg text-xs font-medium transition-all duration-200 cursor-pointer truncate ${
                isActive
                  ? 'bg-[#fdfdfd] dark:bg-[#151518] text-gray-900 dark:text-white shadow-2xs border-t border-x border-black/5 dark:border-white/10 relative z-10 font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100'
              }`}
            >
              <span className="text-xs">{tab.icon}</span>
              <span className="truncate text-[11px]">{tab.title}</span>
            </button>
          )
        })}
      </div>

      {/* Safari Main View */}
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
                className="group flex items-center justify-between gap-2 p-2 rounded-xl bg-white/90 dark:bg-[#1c1c22]/90 hover:bg-white dark:hover:bg-[#23232b] border border-black/5 dark:border-white/10 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer w-full max-w-full box-border overflow-hidden"
                title={`Donate to ${cause.name}`}
              >
                {/* Left: Image & Details */}
                <div className="flex items-center gap-2.5 min-w-0 flex-1 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform bg-gray-100 dark:bg-white/5">
                    <img
                      src={cause.image}
                      alt={cause.name}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1 space-y-0.5 overflow-hidden">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <h3 className="text-xs font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-500 transition-colors">
                        {cause.name}
                      </h3>
                      <span className={`text-[9px] font-semibold px-1.5 py-0.2 rounded border flex-shrink-0 hidden md:inline ${cause.tagColor}`}>
                        {cause.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate leading-tight">
                      {cause.description}
                    </p>
                  </div>
                </div>

                {/* Right: Direct Donate Button */}
                <div className="flex-shrink-0 ml-1.5">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gradient-to-r ${cause.btnGradient} text-white font-semibold text-[11px] shadow-2xs group-hover:shadow-sm group-hover:scale-105 transition-all`}
                  >
                    <span>Donate</span>
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="w-full max-w-full space-y-2 flex flex-col">
            <div className="flex items-center justify-between pb-1.5 border-b border-gray-100 dark:border-white/5">
              <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Publications & Writeups
              </span>
              <a
                href="https://draft.blogger.com/profile/06497378480775646608"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Blogger Profile</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {blogPostsExtended.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-2 p-2 rounded-xl bg-white/90 dark:bg-[#1c1c22]/90 hover:bg-white dark:hover:bg-[#23232b] border border-black/5 dark:border-white/10 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer w-full max-w-full box-border overflow-hidden"
                title={`Read: ${post.title}`}
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1 overflow-hidden">
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${post.gradient} text-white flex items-center justify-center text-[11px] font-extrabold flex-shrink-0 shadow-2xs`}
                  >
                    {post.badge}
                  </div>

                  <div className="min-w-0 flex-1 space-y-0.5 overflow-hidden">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider flex-shrink-0">
                        {post.date}
                      </span>
                      <span className={`text-[9px] font-semibold px-1.5 py-0.2 rounded border flex-shrink-0 hidden md:inline ${post.tagColor}`}>
                        {post.tag}
                      </span>
                    </div>
                    <h3 className="text-xs font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-500 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="flex-shrink-0 ml-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/10 group-hover:bg-blue-600 group-hover:text-white text-gray-800 dark:text-white text-[11px] font-semibold transition-all">
                    <span>Read</span>
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
