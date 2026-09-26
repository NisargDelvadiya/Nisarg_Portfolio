"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * 404 Not Found Page (not-found.js)
 * 
 * Displayed whenever an invalid or missing route is requested.
 */
export default function NotFound() {
  const handleRetry = () => {
    try {
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    } catch {
      // Safe fallback
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6 select-none relative overflow-hidden">
      {/* Iron Man Graphic */}
      <div className="absolute top-8 right-8 md:right-20 z-20 pointer-events-none hidden sm:block">
        <Image
          src="/Assets/Iron_Man_Mask.png"
          alt="Iron Man 404 Mask"
          width={128}
          height={128}
          className="w-24 md:w-32 h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Main 404 Error Card */}
      <div className="max-w-2xl w-full bg-white border-4 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_#6A0C0B] flex flex-col gap-6 text-center z-10">
        {/* Error Code & Badge */}
        <div className="flex flex-col items-center gap-2">
          <span className="px-3.5 py-1 rounded-full bg-red-100 text-[#AA0505] border border-red-200 font-extrabold text-xs tracking-widest uppercase">
            404 — PAGE NOT FOUND
          </span>
          <h1
            className="text-6xl sm:text-8xl font-black italic tracking-tighter text-gray-900 uppercase"
            style={{ textShadow: "4px 4px 0px #AA0505" }}
          >
            LOST IN THE WEB!
          </h1>
        </div>

        {/* Diagnostic Explanation */}
        <div className="flex flex-col gap-4 text-left bg-gray-50 border border-gray-200 rounded-2xl p-5 text-sm leading-relaxed">
          <div>
            <h2 className="font-extrabold text-black uppercase text-xs tracking-wider text-[#AA0505] mb-1">
              ⚠️ Why did this error occur?
            </h2>
            <p className="text-gray-700 font-medium">
              The URL address you requested could not be found. It may have been moved, renamed, deleted, or mistyped in the browser address bar.
            </p>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <h2 className="font-extrabold text-black uppercase text-xs tracking-wider text-[#AA0505] mb-1">
              💡 How to solve this issue:
            </h2>
            <p className="text-gray-700 font-medium">
              Double-check your browser URL spelling, use the Retry button to attempt reloading, or navigate back to the main portfolio homepage.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={handleRetry}
            title="Retry Loading current page"
            aria-label="Retry Loading current page"
            className="w-full sm:w-auto px-6 py-3 bg-[#FBCA03] hover:bg-[#B97D10] hover:text-white text-black font-black uppercase text-xs tracking-wider rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000000] transition-all cursor-pointer"
          >
            🔄 Retry Loading
          </button>
          <Link
            href="/"
            title="Return to Home Page"
            aria-label="Return to Home Page"
            className="w-full sm:w-auto px-6 py-3 bg-[#AA0505] hover:bg-[#6A0C0B] text-white font-black uppercase text-xs tracking-wider rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000000] transition-all cursor-pointer text-center"
          >
            🏠 Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
