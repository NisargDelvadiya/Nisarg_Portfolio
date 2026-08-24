'use client'

import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { locations } from '#constants'
import useWindowStore from '#store/windows'

/**
 * macOS Finder Application Window
 * Enables directory browsing, project inspection, and opening associated document viewers.
 */
const Finder = ({ controls, isMaximized }) => {
  const { openWindow } = useWindowStore()
  const [activeLocationKey, setActiveLocationKey] = useState('work')
  const [folderStack, setFolderStack] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  const rootLocation = locations[activeLocationKey] || locations.work
  const currentFolder = folderStack.length > 0 ? folderStack[folderStack.length - 1] : rootLocation
  const workProjects = locations.work?.children || []

  const handleLocationClick = (key) => {
    setActiveLocationKey(key)
    setFolderStack([])
    setSelectedId(null)
  }

  const handleSidebarProjectClick = (project) => {
    setActiveLocationKey('work')
    setFolderStack([project])
    setSelectedId(null)
  }

  const handleBack = () => {
    setFolderStack((prev) => prev.slice(0, -1))
    setSelectedId(null)
  }

  const handleItemOpen = (item) => {
    if (item.kind === 'folder' && item.children) {
      setFolderStack((prev) => [...prev, item])
      setSelectedId(null)
    } else if (item.fileType === 'txt') {
      openWindow('txtfile', { name: item.name, description: item.description })
    } else if (item.fileType === 'img') {
      openWindow('imgfile', { name: item.name, imageUrl: item.imageUrl || item.image })
    } else if (item.fileType === 'pdf') {
      openWindow('resume')
    } else if (item.fileType === 'url' && item.href) {
      window.open(item.href, '_blank')
    }
  }

  const handleItemClick = (item) => {
    setSelectedId(item.id)
    handleItemOpen(item)
  }

  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#1e1e22] text-gray-800 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized ? 'w-full h-[calc(100vh-140px)]' : 'w-[580px] max-w-[94vw] h-[330px]'
      }`}
    >
      {/* Window Header */}
      <div id="window-header" className="bg-gray-100/90 dark:bg-[#26262b] border-b border-gray-200 dark:border-white/10 px-3 sm:px-4 py-2 flex items-center justify-between flex-shrink-0 cursor-grab active:cursor-grabbing">
        {controls}

        <div className="flex items-center gap-2">
          {folderStack.length > 0 && (
            <button
              type="button"
              data-clickable="true"
              onClick={handleBack}
              className="p-1 hover:bg-gray-200 dark:hover:bg-white/10 rounded cursor-pointer text-gray-600 dark:text-gray-300 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
              title="Navigate back to previous folder"
              aria-label="Back"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm">{currentFolder.name}</h2>
        </div>

        <div className="w-14" />
      </div>

      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-28 sm:w-36 bg-gray-50 dark:bg-[#25252a]/95 border-r border-gray-200 dark:border-white/10 flex flex-col p-2 sm:p-2.5 space-y-3 overflow-y-auto flex-shrink-0">
          {/* Favorites */}
          <div>
            <h3 className="text-[9px] sm:text-[10px] font-semibold text-gray-400 dark:text-gray-400 uppercase tracking-wider mb-1.5">Favorites</h3>
            <div className="space-y-0.5">
              {Object.entries(locations).map(([key, loc]) => {
                const isActive = activeLocationKey === key && folderStack.length === 0
                return (
                  <button
                    type="button"
                    key={key}
                    data-clickable="true"
                    className={`w-full flex items-center gap-1.5 sm:gap-2 px-2 py-1 rounded-md cursor-pointer transition-colors text-[11px] sm:text-xs font-medium text-left ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold shadow-sm'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-white/10'
                    }`}
                    onClick={() => handleLocationClick(key)}
                    title={loc.name}
                    aria-label={`Open ${loc.name}`}
                  >
                    <img
                      src={loc.icon}
                      alt=""
                      className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'brightness-0 invert' : 'opacity-80'}`}
                      aria-hidden="true"
                    />
                    <span className="truncate">{loc.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Work Projects Section */}
          {workProjects.length > 0 && (
            <div>
              <h3 className="text-[9px] sm:text-[10px] font-semibold text-gray-400 dark:text-gray-400 uppercase tracking-wider mb-1.5">Projects</h3>
              <div className="space-y-0.5">
                {workProjects.map((project) => {
                  const isProjectActive = folderStack.some((f) => f.id === project.id)
                  return (
                    <button
                      type="button"
                      key={project.id}
                      data-clickable="true"
                      className={`w-full flex items-center gap-1.5 sm:gap-2 px-2 py-1 rounded-md cursor-pointer transition-colors text-[11px] sm:text-xs font-medium truncate text-left ${
                        isProjectActive
                          ? 'bg-blue-600 text-white font-semibold shadow-sm'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-white/10'
                      }`}
                      onClick={() => handleSidebarProjectClick(project)}
                      title={project.name}
                      aria-label={`Open ${project.name} project`}
                    >
                      <img src="/images/folder.png" alt="" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                      <span className="truncate">{project.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </aside>

        {/* Content Area */}
        <main
          className="content relative overflow-y-auto overscroll-contain flex-1 bg-white dark:bg-[#18181c] p-3 sm:p-5 transition-colors duration-200"
          onClick={() => setSelectedId(null)}
        >
          <div className="flex flex-col sm:flex-row flex-wrap items-start gap-4 sm:gap-6 w-full">
            {currentFolder.children?.map((item) => {
              const isSelected = selectedId === item.id
              return (
                <button
                  type="button"
                  key={item.id}
                  data-clickable="true"
                  aria-label={`Open ${item.name}`}
                  title={`Click to open ${item.name}`}
                  className={`finder-item flex flex-col items-center justify-center gap-1 p-2 sm:p-2.5 w-24 sm:w-28 rounded-xl cursor-pointer transition-all select-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none active:scale-95 ${
                    isSelected
                      ? 'bg-blue-500/20 dark:bg-white/10 ring-1 ring-blue-400 dark:ring-white/20 shadow-sm'
                      : 'hover:bg-gray-100/80 dark:hover:bg-white/5'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleItemClick(item)
                  }}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="size-11 sm:size-14 pointer-events-none drop-shadow-md object-contain"
                    aria-hidden="true"
                  />
                  <p className="text-[11px] sm:text-xs text-center font-medium text-gray-800 dark:text-gray-200 line-clamp-2 select-none pointer-events-none break-words leading-tight mt-1">
                    {item.name}
                  </p>
                </button>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}

export default WindowWrapper(Finder, 'finder')
