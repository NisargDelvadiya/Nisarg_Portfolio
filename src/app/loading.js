"use client";

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6 select-none relative overflow-hidden">
      {/* Spider-Man Pulsing Spinner Icon */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-red-100 border-t-[#a31515] animate-spin"></div>
          <div className="w-12 h-12 bg-[#a31515] rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-white font-black italic text-2xl">M</span>
          </div>
        </div>
        <span className="text-[#a31515] font-black uppercase text-xs md:text-sm tracking-[0.3em] animate-pulse">
          SWINGING INTO ACTION...
        </span>
      </div>

      {/* Skeleton Loading State Wireframe */}
      <div className="max-w-5xl w-full flex flex-col gap-8 opacity-75">
        {/* Navbar Skeleton */}
        <div className="w-full h-12 bg-gray-100 rounded-2xl animate-pulse"></div>

        {/* Hero Section Skeleton */}
        <div className="w-full h-72 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-3xl animate-pulse flex flex-col justify-center p-8 gap-4">
          <div className="w-1/3 h-6 bg-gray-300/80 rounded-lg"></div>
          <div className="w-2/3 h-12 bg-gray-300/80 rounded-xl"></div>
          <div className="w-1/2 h-5 bg-gray-300/80 rounded-lg"></div>
        </div>

        {/* Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-44 bg-gray-100 rounded-2xl animate-pulse"></div>
          <div className="w-full h-44 bg-gray-100 rounded-2xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
