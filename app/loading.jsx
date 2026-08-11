import React from "react";

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-black-100 flex flex-col items-center justify-center px-5 py-20 mx-auto max-w-7xl relative overflow-hidden">
      {/* Background ambient glow skeleton */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="w-full flex flex-col gap-16 z-10">
        
        {/* Navbar Skeleton */}
        <div className="w-full flex justify-center">
          <div className="h-12 w-80 sm:w-[500px] bg-white/5 border border-white/10 rounded-full animate-pulse" />
        </div>

        {/* Hero Skeleton */}
        <div className="flex flex-col items-center gap-6 mt-10">
          <div className="h-4 w-48 bg-white/10 rounded-full animate-pulse" />
          <div className="h-12 sm:h-16 w-3/4 sm:w-2/3 bg-white/10 rounded-2xl animate-pulse" />
          <div className="h-6 w-full max-w-xl bg-white/5 rounded-xl animate-pulse" />
          <div className="h-12 w-44 bg-purple/20 border border-purple/30 rounded-xl animate-pulse mt-4" />
        </div>

        {/* BentoGrid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mt-8">
          <div className="lg:col-span-3 md:col-span-6 h-64 bg-white/5 border border-white/10 rounded-3xl animate-pulse p-6 flex flex-col justify-end gap-3">
            <div className="h-4 w-1/3 bg-white/10 rounded-lg" />
            <div className="h-8 w-2/3 bg-white/10 rounded-lg" />
          </div>
          <div className="lg:col-span-2 md:col-span-3 h-64 bg-white/5 border border-white/10 rounded-3xl animate-pulse p-6 flex flex-col justify-end gap-3">
            <div className="h-4 w-1/2 bg-white/10 rounded-lg" />
            <div className="h-8 w-3/4 bg-white/10 rounded-lg" />
          </div>
        </div>

      </div>
    </div>
  );
}
