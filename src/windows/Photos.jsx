'use client'

import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { photosLinks, gallery } from '#constants'

/**
 * macOS Photos Window
 * Responsive photo gallery with full-screen inspection mode.
 */
const Photos = ({ controls, isMaximized }) => {
  const [activeTab, setActiveTab] = useState(1)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#1e1e22] text-gray-800 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized ? 'w-full h-[calc(100vh-140px)]' : 'w-[560px] max-w-[94vw] h-[330px]'
      }`}
    >
      {/* Window Header */}
      <div id="window-header" className="bg-gray-100 dark:bg-[#26262b] border-b border-gray-200 dark:border-white/10 px-3 sm:px-4 py-2 flex items-center justify-between flex-shrink-0">
        {controls}
        <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm flex-1 text-center truncate px-2">
          Photos
        </h2>
        <div className="w-14 flex justify-end">
          {selectedPhoto && (
            <button
              onClick={() => setSelectedPhoto(null)}
              className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
              title="Return to Grid View"
              aria-label="Return to Grid View"
            >
              Grid View
            </button>
          )}
        </div>
      </div>

      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-28 sm:w-36 flex-shrink-0 bg-gray-50/80 dark:bg-[#18181c] border-r border-gray-200 dark:border-white/10 p-2 sm:p-2.5 space-y-1 overflow-y-auto">
          <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 px-1 sm:px-2 mb-1">
            Photos
          </p>
          <ul className="space-y-0.5">
            {photosLinks.map((item) => {
              const isActive = activeTab === item.id
              return (
                <li
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setActiveTab(item.id)
                    setSelectedPhoto(null)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveTab(item.id)
                      setSelectedPhoto(null)
                    }
                  }}
                  className={`flex items-center gap-1.5 sm:gap-2 px-1.5 sm:px-2 py-1 rounded-md text-[10px] sm:text-[11px] font-medium cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  title={item.title}
                  aria-label={item.title}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className={`w-3.5 h-3.5 object-contain flex-shrink-0 ${isActive ? 'brightness-0 invert' : 'opacity-75'}`}
                    aria-hidden="true"
                  />
                  <span className="truncate">{item.title}</span>
                </li>
              )
            })}
          </ul>
        </aside>

        {/* Gallery Content Area */}
        <main className="flex-1 p-2.5 sm:p-3 bg-white dark:bg-[#141416] overflow-y-auto overscroll-contain">
          {selectedPhoto ? (
            <div className="flex flex-col items-center justify-center h-full p-1">
              <img
                src={selectedPhoto.img}
                alt={`Photo ${selectedPhoto.id}`}
                className="max-h-[260px] sm:max-h-[290px] max-w-full object-contain rounded-lg shadow-md border border-black/10 dark:border-white/10"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
              {gallery.map((item) => (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedPhoto(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedPhoto(item)
                    }
                  }}
                  className="group relative aspect-[4/3] rounded-md overflow-hidden bg-gray-100 dark:bg-[#202026] cursor-pointer border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                  title={`View Photo ${item.id}`}
                  aria-label={`View Photo ${item.id}`}
                >
                  <img
                    src={item.img}
                    alt={`Gallery item ${item.id}`}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default WindowWrapper(Photos, 'photos')
