'use client'

import React from 'react'

const WindowControls = ({ onClose }) => {
  return (
    <div id="window-controls" className="group flex items-center gap-2" role="group" aria-label="Window management controls">
      {/* Red: Active Close */}
      <button
        type="button"
        className="close size-3.5 rounded-full bg-[#ff6157] border border-[#e0443e] flex items-center justify-center cursor-pointer transition-transform active:scale-90 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:outline-none"
        onClick={(e) => {
          e.stopPropagation()
          onClose?.()
        }}
        title="Close Window"
        aria-label="Close Window"
      >
        <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 text-[9px] font-bold text-[#4d0000] leading-none select-none">
          ✕
        </span>
      </button>

      {/* Yellow: Showpiece */}
      <div
        className="minimize size-3.5 rounded-full bg-[#ffc030] border border-[#dea123] cursor-default"
        title="Minimize"
        aria-label="Minimize Window"
      />

      {/* Green: Showpiece */}
      <div
        className="maximize size-3.5 rounded-full bg-[#2acb42] border border-[#1fa733] cursor-default"
        title="Maximize"
        aria-label="Maximize Window"
      />
    </div>
  )
}

export default WindowControls
