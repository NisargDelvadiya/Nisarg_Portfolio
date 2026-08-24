'use client'

import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { techStack } from '#constants'

/**
 * macOS Terminal Application Window
 * Interactive command-line presentation of skills, frameworks, and developer stack with mobile responsiveness.
 */
const Terminal = ({ controls, isMaximized }) => {
  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#1c1c20] text-gray-900 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized ? 'w-full h-[calc(100vh-140px)]' : 'w-[580px] max-w-[94vw]'
      }`}
    >
      {/* Window Header */}
      <div id="window-header" className="bg-gray-100 dark:bg-[#26262b] border-b border-gray-200 dark:border-white/10 px-3 sm:px-4 py-2 flex items-center justify-between flex-shrink-0">
        {controls}
        <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-xs text-center flex-1 font-mono truncate px-2">
          nisarg@portfolio ~ (zsh)
        </h2>
        <div className="w-14" />
      </div>

      {/* Terminal Body */}
      <div
        className={`flex-1 overflow-y-auto overscroll-contain p-3.5 sm:p-6 bg-white dark:bg-[#141416] font-mono text-xs sm:text-sm space-y-3 sm:space-y-4 ${
          isMaximized ? 'h-[calc(100%-48px)]' : 'max-h-[70vh] sm:max-h-[75vh]'
        }`}
      >
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="text-[#00A154] font-bold">➜</span>
          <span className="text-cyan-600 font-semibold">~</span>
          <span className="text-gray-800 dark:text-gray-200">portfolio-skills --list</span>
        </div>

        <ul className="space-y-2.5 sm:space-y-3 py-2.5 sm:py-3 border-y border-dashed border-gray-300 dark:border-gray-800">
          {techStack.map((category, i) => (
            <li key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <span className="text-[#00A154]" aria-hidden="true">✔</span>
                <h3 className="font-semibold text-[#00A154] w-24 sm:w-32 text-xs sm:text-sm">{category.category}</h3>
              </div>
              <ul className="flex flex-wrap gap-1 sm:gap-1.5">
                {category.items.map((tech, j) => (
                  <li
                    key={j}
                    className="text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-white/10 px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="text-[#00A154] text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2">
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>All systems nominal. Ready for new projects.</span>
        </div>
      </div>
    </div>
  )
}

export default WindowWrapper(Terminal, 'terminal')
