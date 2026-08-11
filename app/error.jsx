"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaHome, FaRedo, FaServer } from "react-icons/fa";
import MagicButton from "@/components/MagicButton";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application error logged:", error);
  }, [error]);

  const handleRetry = () => {
    if (reset) {
      reset();
    }
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <main className="min-h-screen bg-black-100 text-white flex flex-col items-center justify-center py-16 px-4 sm:px-8 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="w-full absolute inset-0 pointer-events-none opacity-30">
        <img src="/bg/footer-grid.svg" alt="grid" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-2xl w-full relative z-10 flex flex-col items-center text-center gap-8">
        
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/40 px-4 py-1.5 rounded-full text-red-400 font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.2)]">
          <FaServer className="w-3.5 h-3.5" /> Error 500 • Application Error
        </div>

        {/* Big 500 Hero Header */}
        <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-purple drop-shadow-[0_0_35px_rgba(239,68,68,0.3)]">
          500
        </h1>

        <div className="backdrop-blur-xl bg-black-200/70 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-left w-full">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Why did this error occur?
            </h2>
            <ul className="list-disc list-inside text-zinc-300 text-sm sm:text-base space-y-1.5">
              <li>Temporary network glitch or connection timeout during data fetch.</li>
              <li>Unexpected runtime error while executing client script components.</li>
              <li>High traffic or temporary browser hydration mismatch.</li>
            </ul>
          </div>

          <div className="border-t border-white/10 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              How can you solve it?
            </h2>
            <ul className="list-disc list-inside text-zinc-300 text-sm sm:text-base space-y-1.5">
              <li>Click the <strong>Retry / Re-attempt</strong> button below to reset the application state.</li>
              <li>Refresh your browser tab or clear browser session cache.</li>
              <li>Return to the main homepage to reload the portfolio.</li>
            </ul>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-2">
          <button
            type="button"
            onClick={handleRetry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600/20 hover:bg-red-600/30 text-white font-semibold px-6 py-3 rounded-2xl border border-red-500/30 transition-all cursor-pointer text-sm shadow-lg hover:scale-105 active:scale-95"
          >
            <FaRedo className="w-4 h-4 text-red-400" />
            Retry / Re-attempt
          </button>

          <Link href="/" className="w-full sm:w-auto">
            <MagicButton
              title="Return to Home"
              icon={<FaHome />}
              position="right"
              containerClassName="!mt-0 w-full sm:w-auto"
              otherClasses="bg-[#161A31] text-xs md:text-sm font-semibold px-6 py-3"
            />
          </Link>
        </div>

      </div>
    </main>
  );
}
