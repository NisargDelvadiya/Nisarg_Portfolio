"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isVenomMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = item.toLowerCase();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Main Navigation Header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-8 md:px-12 flex items-center justify-between pointer-events-auto ${
        isScrolled
          ? isVenomMode
            ? "bg-black/95 backdrop-blur-md border-b border-purple-900/60 py-3 shadow-[0_4px_30px_rgba(147,51,234,0.25)]"
            : "bg-black/90 backdrop-blur-md border-b border-red-900/50 py-3 shadow-[0_4px_30px_rgba(220,38,38,0.15)]"
          : "bg-transparent py-4 sm:py-5 border-b border-transparent"
      }`}
    >
      {/* Left Container: Brand Logo + High Contrast Theme Toggle Switch */}
      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href="https://mahingunjal.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Mahin Gunjal Official Website"
          aria-label="Mahin Gunjal Official Website"
          className="group inline-flex items-center gap-2 cursor-pointer select-none active:scale-95 active:translate-y-0.5 transition-transform duration-150"
        >
          <span
            className={`text-xl sm:text-2xl font-black italic tracking-tighter transition-colors duration-200 ${
              isVenomMode
                ? "text-white group-hover:text-purple-400"
                : isScrolled
                ? "text-white group-hover:text-[#a31515]"
                : "text-black group-hover:text-[#a31515]"
            }`}
          >
            <span className={isVenomMode ? "text-purple-500" : "text-[#a31515]"}>
              M
            </span>
            AHIN
          </span>
        </a>

        {/* High Contrast Theme Toggle Switch (After MAHIN Logo) */}
        <label
          className="relative inline-flex items-center cursor-pointer select-none active:scale-95 transition-transform ml-1"
          title={
            isVenomMode
              ? "Switch to Spider-Man Red Mode"
              : "Switch to Venom Symbiote Dark Mode"
          }
          aria-label={
            isVenomMode
              ? "Switch to Spider-Man Red Mode"
              : "Switch to Venom Symbiote Dark Mode"
          }
        >
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isVenomMode}
            onChange={toggleTheme}
          />
          <div
            className="w-14 h-7 sm:w-16 sm:h-8 rounded-full bg-gradient-to-r from-red-600 to-[#a31515] peer-checked:from-purple-600 peer-checked:to-purple-900 transition-all duration-500 after:content-['☀️'] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-6 after:w-6 sm:after:h-7 sm:after:w-7 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-7 sm:peer-checked:after:translate-x-8 peer-checked:after:content-['🌙'] after:shadow-md after:text-xs sm:after:text-sm border border-white/20 shadow-md"
          ></div>
        </label>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Desktop Navigation Links */}
        <div
          className={`hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-extrabold tracking-widest uppercase transition-colors duration-200 ${
            isVenomMode ? "text-gray-200" : isScrolled ? "text-white" : "text-black"
          }`}
        >
          {["ABOUT", "SKILLS", "PROJECTS", "EXPERIENCES"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              title={`Scroll to ${item} section`}
              aria-label={`Scroll to ${item} section`}
              onClick={(e) => handleNavClick(e, item)}
              className={`relative inline-block pb-0.5 transition-all duration-150 active:scale-95 active:translate-y-0.5 cursor-pointer ${
                isVenomMode ? "hover:text-purple-400" : "hover:text-[#a31515]"
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] ${
                isVenomMode ? "after:bg-purple-500" : "after:bg-[#a31515]"
              } after:opacity-0 after:scale-x-0 hover:after:opacity-100 hover:after:scale-x-100 after:transition-all after:duration-200 after:origin-left`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors active:scale-95 cursor-pointer ${
            isVenomMode ? "text-white" : isScrolled ? "text-white" : "text-black"
          }`}
          title="Toggle Mobile Navigation Menu"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Glassmorphic Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`absolute top-full left-0 w-full backdrop-blur-xl border-b py-6 px-6 flex flex-col gap-4 shadow-2xl md:hidden ${
            isVenomMode
              ? "bg-black/95 border-purple-900/60"
              : "bg-black/95 border-red-900/50"
          }`}
        >
          {["ABOUT", "SKILLS", "PROJECTS", "EXPERIENCES"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              title={`Scroll to ${item} section`}
              aria-label={`Scroll to ${item} section`}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-white font-extrabold text-sm tracking-widest uppercase transition-all duration-150 py-2 border-b border-white/5 active:scale-95 active:translate-y-0.5 origin-left cursor-pointer ${
                isVenomMode
                  ? "hover:text-purple-400 active:text-purple-400"
                  : "hover:text-[#a31515]"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
