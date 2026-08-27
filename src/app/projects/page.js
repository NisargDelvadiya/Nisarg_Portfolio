"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { projectsData } from "@/data/projectsData";

/**
 * Projects Archive Page
 * 
 * Displays the complete collection of 3D animations, commercial CGI visuals,
 * and motion graphics projects. Includes a "Back to Home" button that closes
 * the current tab (or navigates back to the homepage).
 */
export default function ProjectsPage() {
  const containerRef = useRef(null);
  const webBgRef = useRef(null);
  const { isVenomMode, toggleTheme } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle background web rotation
      if (webBgRef.current) {
        gsap.to(webBgRef.current, {
          rotation: 360,
          duration: 60,
          repeat: -1,
          ease: "none",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /**
   * Closes the opened tab to return to the original window,
   * with automatic graceful fallback navigation.
   */
  const handleBackToHome = (e) => {
    e.preventDefault();

    // Check if opened as child tab / window
    try {
      if (window.opener || window.history.length > 1) {
        window.close();
      }
    } catch (err) {
      console.warn("Tab close prevented by browser:", err);
    }

    // Fallback: If browser security prevents window.close(), smoothly navigate to main portfolio
    setTimeout(() => {
      window.location.href = "/#projects";
    }, 120);
  };

  return (
    <div
      ref={containerRef}
      className={`min-h-screen w-full relative py-12 px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col items-center select-none transition-colors duration-300 overflow-x-hidden ${
        isVenomMode ? "bg-[#07070c] text-white" : "bg-[#f8f9fa] text-gray-900"
      }`}
    >
      {/* Background Rotating Web Accent */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <img
          ref={webBgRef}
          src="/Assets/Web.png"
          alt="Background Spider Web"
          className={`w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] object-contain opacity-10 mix-blend-multiply transition-all duration-300 ${
            isVenomMode ? "invert brightness-200" : ""
          }`}
        />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-20 max-w-7xl w-full flex flex-col gap-12">
        {/* Top Header Navigation Bar */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b pb-8 border-gray-200 dark:border-purple-900/40">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shadow-md ${
                isVenomMode
                  ? "bg-purple-950/80 border-purple-600 text-purple-300"
                  : "bg-[#a31515] border-black text-white shadow-[3px_3px_0px_#000000]"
              }`}
            >
              <img
                src="/Assets/spidey_gif_1.png"
                alt="Spidey Mask"
                className="w-7 h-7 object-contain invert brightness-200"
              />
            </div>
            <div>
              <span
                className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isVenomMode ? "text-purple-400" : "text-[#a31515]"
                }`}
              >
                MAHIN GUNJAL • PORTFOLIO
              </span>
              <h1 className="text-2xl sm:text-4xl font-black italic tracking-tighter uppercase leading-none mt-0.5">
                All Projects Archive
              </h1>
            </div>
          </div>

          {/* Action Buttons: Theme Toggle & Back To Home Button */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={toggleTheme}
              title={`Switch to ${isVenomMode ? "Spider-Man Light" : "Venom Dark"} Mode`}
              aria-label="Toggle Spider-Man / Venom Theme"
              className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border cursor-pointer active:scale-95 ${
                isVenomMode
                  ? "bg-purple-950/80 hover:bg-purple-900 border-purple-800 text-purple-300"
                  : "bg-white hover:bg-gray-100 border-gray-300 text-gray-800 shadow-sm"
              }`}
            >
              {isVenomMode ? "🕷️ SPIDER-MAN MODE" : "🖤 VENOM MODE"}
            </button>

            {/* Back to Home Button (closes tab & returns to previous) */}
            <button
              onClick={handleBackToHome}
              title="Close this tab and return to the main homepage"
              aria-label="Close this tab and return to the main homepage"
              className={`group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 border-2 active:scale-95 cursor-pointer ${
                isVenomMode
                  ? "bg-purple-600 hover:bg-purple-500 text-white border-purple-400 shadow-[0_4px_15px_rgba(147,51,234,0.4)]"
                  : "bg-[#a31515] hover:bg-[#821010] text-white border-black shadow-[3px_3px_0px_#000000] active:shadow-[1px_1px_0px_#000000]"
              }`}
            >
              <svg
                className="w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover:-translate-x-1"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </button>
          </div>
        </header>

        {/* Section Subheading & Category Filter Counter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase">
              Selected 3D, CGI & VFX Showcases
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-2xl leading-relaxed">
              Explore the comprehensive showcase of dynamic product commercials, brand advertisements, character visual effects, and cinematic concept animations.
            </p>
          </div>
          <div
            className={`px-4 py-2 rounded-2xl border text-xs font-black uppercase tracking-widest ${
              isVenomMode
                ? "bg-purple-950/40 border-purple-800 text-purple-300"
                : "bg-red-50 border-red-200 text-[#a31515]"
            }`}
          >
            {projectsData.length} TOTAL WORKS
          </div>
        </div>

        {/* Complete Projects Grid (3 cols on large, 2 cols on medium, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id || index}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border-3 shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                isVenomMode
                  ? "bg-[#0f0f18] border-purple-900/60 shadow-purple-950/20 hover:border-purple-500 hover:shadow-[0_10px_30px_rgba(147,51,234,0.25)]"
                  : "bg-white border-red-900/20 shadow-red-950/10 hover:border-[#a31515] hover:shadow-[0_10px_30px_rgba(163,21,21,0.2)]"
              }`}
            >
              {/* Top Project Tag & Badge */}
              <div className="px-6 pt-5 pb-3 flex items-center justify-between">
                <span
                  className={`text-xs font-black tracking-widest uppercase transition-colors duration-300 ${
                    isVenomMode ? "text-purple-400" : "text-[#a31515]"
                  }`}
                >
                  PROJECT {project.id || `0${index + 1}`}
                </span>
                <span
                  className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border transition-colors duration-300 ${
                    isVenomMode
                      ? "border-purple-800/60 bg-purple-950/50 text-purple-300"
                      : "border-red-200 bg-red-50 text-[#a31515]"
                  }`}
                >
                  {project.category || "3D / VFX"}
                </span>
              </div>

              {/* Video Player Showcase */}
              <div className="relative mx-5 my-2 aspect-video overflow-hidden rounded-2xl bg-black border border-black/10 dark:border-white/10 shadow-inner">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Details (Title & Description) */}
              <div className="flex flex-col gap-2.5 p-6 pt-4 flex-1">
                <h3
                  className={`text-lg sm:text-xl font-black italic tracking-tight uppercase leading-snug transition-colors duration-300 ${
                    isVenomMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm font-medium leading-relaxed transition-colors duration-300 ${
                    isVenomMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Return Action */}
        <footer className="mt-8 pt-8 border-t border-gray-200 dark:border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            &copy; 2026 • Mahin Gunjal Portfolio • All 3D & VFX rights reserved.
          </p>

          <button
            onClick={handleBackToHome}
            className={`inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider underline decoration-2 cursor-pointer transition-colors ${
              isVenomMode
                ? "text-purple-400 hover:text-purple-300"
                : "text-[#a31515] hover:text-[#821010]"
            }`}
          >
            ← Close tab and return to main website
          </button>
        </footer>
      </div>
    </div>
  );
}
