'use client'

import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper'

/**
 * macOS TextEdit Document Reader Window
 * Displays formatted document text with clean typography and full responsiveness.
 */
const TxtFile = ({ controls, windowData, isMaximized }) => {
  const data = windowData || {
    name: 'Project.txt',
    description: ['Interactive MacFolio portfolio preview.'],
  }

  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#1c1c20] text-gray-800 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized ? 'w-full h-[calc(100vh-140px)]' : 'w-[560px] max-w-[92vw]'
      }`}
    >
      {/* Window Header */}
      <div id="window-header" className="bg-gray-100 dark:bg-[#26262b] border-b border-gray-200 dark:border-white/10 px-4 py-2.5 flex items-center justify-between flex-shrink-0">
        {controls}
        <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-xs truncate max-w-[240px] text-center flex-1">
          {data.name || 'Document.txt'}
        </h2>
        <div className="w-14" />
      </div>

      {/* Scrollable Text Body */}
      <main
        className={`bg-white dark:bg-[#18181c] text-gray-800 dark:text-gray-100 p-4 sm:p-6 md:p-8 font-sans space-y-3 sm:space-y-4 select-text cursor-auto leading-relaxed text-xs sm:text-sm md:text-[15px] overflow-y-auto transition-colors duration-200 ${
          isMaximized ? 'w-full h-[calc(100vh-160px)]' : 'w-full max-h-[68vh]'
        }`}
      >
        {Array.isArray(data.description) ? (
          data.description.map((para, i) => (
            <p key={i} className="text-gray-700 dark:text-gray-200 break-words leading-relaxed">
              {para}
            </p>
          ))
        ) : (
          <p className="text-gray-700 dark:text-gray-200 break-words leading-relaxed">
            {data.description || 'No content'}
          </p>
        )}
      </main>
    </div>
  )
}

export default WindowWrapper(TxtFile, 'txtfile')
