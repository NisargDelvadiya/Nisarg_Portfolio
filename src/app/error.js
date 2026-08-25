"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Route-Level Error Boundary (error.js)
 * 
 * Captures route-level errors gracefully, providing interactive diagnostics and recovery actions.
 */
export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    try {
      console.error("Route Error caught by error.js:", error);
    } catch {
      // Safe fallback
    }
  }, [error]);

  const handleReset = () => {
    try {
      if (typeof reset === "function") {
        reset();
      } else if (typeof window !== "undefined") {
        window.location.reload();
      }
    } catch {
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6 select-none relative overflow-hidden">
      {/* Corner Spidey Peek */}
      <div className="absolute bottom-0 left-4 z-20 pointer-events-none hidden sm:block">
        <img
          src="/Assets/spidey_gif_1.png"
          alt="Spider-Man Error Peek"
          className="w-32 md:w-44 h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Main 500 Error Card */}
      <div className="max-w-2xl w-full bg-white border-4 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_#a31515] flex flex-col gap-6 text-center z-10">
        {/* Error Code & Badge */}
        <div className="flex flex-col items-center gap-2">
          <span className="px-3.5 py-1 rounded-full bg-red-100 text-[#a31515] border border-red-200 font-extrabold text-xs tracking-widest uppercase">
            500 — INTERNAL SERVER ERROR
          </span>
          <h1
            className="text-5xl sm:text-7xl font-black italic tracking-tighter text-gray-900 uppercase"
            style={{ textShadow: "4px 4px 0px #a31515" }}
          >
            SYSTEM GLITCH!
          </h1>
        </div>

        {/* Diagnostic Explanation */}
        <div className="flex flex-col gap-4 text-left bg-gray-50 border border-gray-200 rounded-2xl p-5 text-sm leading-relaxed">
          <div>
            <h2 className="font-extrabold text-black uppercase text-xs tracking-wider text-[#a31515] mb-1">
              ⚠️ Why did this error occur?
            </h2>
            <p className="text-gray-700 font-medium">
              An unexpected runtime exception or internal server processing error occurred while attempting to execute components on this page.
            </p>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <h2 className="font-extrabold text-black uppercase text-xs tracking-wider text-[#a31515] mb-1">
              💡 How to solve this issue:
            </h2>
            <p className="text-gray-700 font-medium">
              Click the Retry execution button below to reset component state and re-render. If the glitch persists, navigate back to the main homepage.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-6 py-3 bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-black uppercase text-xs tracking-wider rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000000] transition-all cursor-pointer"
          >
            🔄 Retry Execution
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-[#a31515] hover:bg-[#821010] text-white font-black uppercase text-xs tracking-wider rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000000] transition-all cursor-pointer text-center"
          >
            🏠 Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
