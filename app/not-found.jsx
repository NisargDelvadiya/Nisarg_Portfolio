"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaRedo, FaExclamationTriangle } from "react-icons/fa";
import MagicButton from "@/components/MagicButton";

export default function NotFound() {
  const handleRetry = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <main className="min-h-screen bg-black-100 text-white flex flex-col items-center justify-center py-16 px-4 sm:px-8 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="w-full absolute inset-0 pointer-events-none opacity-30">
        <img src="/bg/footer-grid.svg" alt="grid" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-2xl w-full relative z-10 flex flex-col items-center text-center gap-8">
        
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/40 px-4 py-1.5 rounded-full text-purple font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(203,172,249,0.2)]">
          <FaExclamationTriangle className="w-3.5 h-3.5" /> Error 404 • Page Not Found
        </div>

        {/* Big 404 Hero Header */}
        <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-purple to-indigo-400 drop-shadow-[0_0_35px_rgba(203,172,249,0.3)]">
          404
        </h1>

        <div className="backdrop-blur-xl bg-black-200/70 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-left w-full">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Why did this error occur?
            </h2>
            <ul className="list-disc list-inside text-zinc-300 text-sm sm:text-base space-y-1.5">
              <li>The URL address you entered might have a typo or misspelling.</li>
              <li>The requested page path does not exist on this portfolio.</li>
              <li>The link or section may have been relocated or updated.</li>
            </ul>
          </div>

          <div className="border-t border-white/10 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              How can you solve it?
            </h2>
            <ul className="list-disc list-inside text-zinc-300 text-sm sm:text-base space-y-1.5">
              <li>Verify the web address spelling in your browser URL bar.</li>
              <li>Click the <strong>Retry / Refresh</strong> button below to re-request the route.</li>
              <li>Return to the portfolio home page to explore projects and experience.</li>
            </ul>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-2">
          <button
            type="button"
            onClick={handleRetry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-2xl border border-white/20 transition-all cursor-pointer text-sm shadow-lg hover:scale-105 active:scale-95"
          >
            <FaRedo className="w-4 h-4 text-purple" />
            Retry / Refresh Page
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
