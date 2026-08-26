'use client'

import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper'

/**
 * macOS PDF Viewer / Document Preview Window
 * Provides full-fidelity PDF document rendering, download action, and responsive macOS controls.
 */
const PdfViewer = ({ controls, windowData, isMaximized }) => {
  const data = windowData || {
    name: 'Terms and Conditions.pdf',
    fileUrl: '/files/terms-and-conditions.pdf',
  }

  const fileUrl = data.fileUrl || '/files/terms-and-conditions.pdf'
  const fileName = data.name || 'Document.pdf'

  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#1e1e22] text-gray-900 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized ? 'w-full h-[calc(100vh-140px)]' : 'w-[780px] max-w-[94vw] h-[560px] max-h-[82vh]'
      }`}
    >
      {/* Window Header */}
      <div
        id="window-header"
        className="bg-gray-100/90 dark:bg-[#28282e] border-b border-gray-200 dark:border-white/10 px-3 sm:px-4 py-2 flex items-center justify-between flex-shrink-0 cursor-grab active:cursor-grabbing"
      >
        {controls}

        {/* Title */}
        <div className="flex items-center gap-1.5 truncate max-w-[280px] sm:max-w-md px-2">
          <img
            src="/images/pdf.png"
            alt="PDF icon"
            className="w-4 h-4 object-contain flex-shrink-0 pointer-events-none"
            aria-hidden="true"
          />
          <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm truncate">
            {fileName}
          </h2>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Open in New Tab */}
          <a
            href={fileUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white p-1 sm:p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
            title="Open in new tab"
            aria-label={`Open ${fileName} in new tab`}
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          {/* Download PDF Button */}
          <a
            href={fileUrl}
            download={fileName}
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white p-1 sm:p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
            title="Download PDF"
            aria-label={`Download ${fileName}`}
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* PDF Content Area */}
      <main className="flex-1 w-full h-full bg-[#525659] dark:bg-[#1a1a1e] relative overflow-hidden">
        <iframe
          src={`${fileUrl}#toolbar=1`}
          title={fileName}
          className="w-full h-full border-none bg-white"
        />
      </main>
    </div>
  )
}

export default WindowWrapper(PdfViewer, 'pdf')
