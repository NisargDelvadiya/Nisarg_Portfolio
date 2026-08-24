'use client'

import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper'

/**
 * macOS Image Viewer Window
 * Displays project assets and full-fidelity image previews.
 */
const ImgFile = ({ controls, windowData, isMaximized }) => {
  const data = windowData || {
    name: 'Preview.png',
    imageUrl: '/images/project-1.png',
  }

  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#1e1e22] text-gray-800 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized ? 'w-full h-[calc(100vh-140px)]' : 'w-[580px] max-w-[92vw]'
      }`}
    >
      {/* Window Header */}
      <div id="window-header" className="bg-gray-100 dark:bg-[#26262b] border-b border-gray-200 dark:border-white/10 px-4 py-2.5 flex items-center justify-between flex-shrink-0">
        {controls}
        <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-xs truncate max-w-[220px] text-center flex-1">
          {data.name || 'Image Preview'}
        </h2>
        <div className="w-14" />
      </div>

      {/* Image Preview Area */}
      <main className="p-4 bg-gray-50 dark:bg-[#141416] flex items-center justify-center max-h-[70vh] overflow-auto">
        <img
          src={data.imageUrl || data.image || '/images/project-1.png'}
          alt={data.name || 'Project Preview'}
          className="max-h-[55vh] max-w-full object-contain rounded-lg shadow-md border border-black/5 dark:border-white/10"
        />
      </main>
    </div>
  )
}

export default WindowWrapper(ImgFile, 'imgfile')
