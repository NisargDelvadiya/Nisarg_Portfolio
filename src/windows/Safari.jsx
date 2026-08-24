'use client'

import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { blogPosts } from '#constants'

/**
 * macOS Safari Browser Window
 * Displays blog publications and external articles with a realistic browser address bar and responsive article cards.
 */
const Safari = ({ controls, isMaximized }) => {
  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#1e1e22] text-gray-800 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized ? 'w-full h-[calc(100vh-140px)]' : 'w-[680px] max-w-[94vw]'
      }`}
    >
      {/* Window Header / Address Bar */}
      <div id="window-header" className="bg-gray-100 dark:bg-[#26262b] border-b border-gray-200 dark:border-white/10 px-3 sm:px-4 py-2 flex items-center justify-between flex-shrink-0">
        {controls}

        <div
          className="search flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white dark:bg-[#16161a] border border-gray-300 dark:border-white/10 w-3/4 max-w-md mx-auto"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            readOnly
            value="https://draft.blogger.com/profile/06497378480775646608"
            className="w-full text-[11px] sm:text-xs text-gray-700 dark:text-gray-200 bg-transparent outline-none cursor-text truncate select-text"
            aria-label="Browser address URL"
          />
        </div>

        <div className="w-14" />
      </div>

      {/* Browser Body */}
      <main
        className={`blog flex-1 overflow-y-auto overscroll-contain p-4 sm:p-8 bg-white dark:bg-[#18181c] ${
          isMaximized ? 'max-h-[calc(100vh-180px)]' : 'max-h-[70vh]'
        }`}
      >
        <h2 className="text-base sm:text-xl font-bold text-pink-600 dark:text-pink-500 mb-3 sm:mb-6">
          Blog Posts & Articles
        </h2>
        <div className="space-y-3 sm:space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="blog-post flex flex-col sm:flex-row gap-3 sm:gap-5 p-3 sm:p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border border-black/5 dark:border-white/5"
            >
              <div className="w-full sm:w-32 h-28 sm:h-24 flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="size-full rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
              <div className="content space-y-1 sm:space-y-2 min-w-0">
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                <h3 className="font-semibold text-xs sm:text-base text-gray-900 dark:text-gray-100 line-clamp-2">
                  {post.title}
                </h3>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-xs font-medium hover:underline inline-flex items-center gap-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded"
                  title={`Read full article: ${post.title}`}
                  aria-label={`Read full article: ${post.title}`}
                >
                  <span>Read Article</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

export default WindowWrapper(Safari, 'safari')
