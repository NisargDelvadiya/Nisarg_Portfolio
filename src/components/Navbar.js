"use client";

import { useState, useEffect } from "react";

/**
 * Navbar Component
 * 
 * Features:
 * - Dynamic scroll listener providing glassmorphic backdrop on page scroll
 * - Brand logo linking to official domain
 * - Smooth section navigation on anchor clicks
 * - Mobile responsive sliding hamburger menu
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past threshold for glassmorphic styling
      setIsScrolled(currentScrollY > 50);

      // Determine floating visibility based on scroll direction
      if (currentScrollY <= 10) {
        // At the very top of page, always show
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Scrolling down -> hide navbar & close mobile menu
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    try {
      const targetId = item.toLowerCase();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } catch (err) {
      console.warn("Navbar navigation scroll error:", err);
    }
  };

  return (
    <nav
      aria-label="Main Navigation Header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform px-4 sm:px-8 md:px-12 flex items-center justify-between ${
        isVisible ? "translate-y-0" : "-translate-y-full pointer-events-none"
      } ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[#6A0C0B]/60 py-3 shadow-[0_4px_30px_rgba(170,5,5,0.2)]"
          : "bg-transparent py-4 sm:py-5 border-b border-transparent"
      }`}
    >
      {/* Left Container: Brand Logo */}
      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href="https://www.nisargjayeshdelvadiya.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Nisarg Jayesh Delvadiya Official Website"
          aria-label="Nisarg Jayesh Delvadiya Official Website"
          className="group inline-flex items-center gap-2 cursor-pointer select-none active:scale-95 active:translate-y-0.5 transition-transform duration-150"
        >
          <span
            className="inline-flex items-center gap-1.5 sm:gap-2 text-base sm:text-xl md:text-2xl font-black italic tracking-tight uppercase whitespace-nowrap transition-colors duration-200 text-white group-hover:text-[#FBCA03]"
          >
            <span><span className="text-[#AA0505]">N</span>ISARG</span>
            <span><span className="text-[#AA0505]">J</span>AYESH</span>
            <span>DELVADIYA</span>
          </span>
        </a>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Desktop Navigation Links */}
        <div
          className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-extrabold tracking-widest uppercase transition-colors duration-200 text-white"
        >
          {["ABOUT", "SKILLS", "PROJECTS", "EXPERIENCES"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              title={`Scroll to ${item} section`}
              aria-label={`Scroll to ${item} section`}
              onClick={(e) => handleNavClick(e, item)}
              className="relative inline-block pb-0.5 transition-all duration-150 active:scale-95 active:translate-y-0.5 cursor-pointer hover:text-[#AA0505] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#AA0505] after:via-[#FBCA03] after:to-[#67C7EB] after:opacity-0 after:scale-x-0 hover:after:opacity-100 hover:after:scale-x-100 after:transition-all after:duration-200 after:origin-left"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors active:scale-95 cursor-pointer text-white"
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
        <div className="absolute top-full left-0 w-full backdrop-blur-xl border-b py-6 px-6 flex flex-col gap-4 shadow-2xl md:hidden bg-black/95 border-[#6A0C0B]/60">
          {["ABOUT", "SKILLS", "PROJECTS", "EXPERIENCES"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              title={`Scroll to ${item} section`}
              aria-label={`Scroll to ${item} section`}
              onClick={(e) => handleNavClick(e, item)}
              className="text-white font-extrabold text-sm tracking-widest uppercase transition-all duration-150 py-2 border-b border-white/5 active:scale-95 active:translate-y-0.5 origin-left cursor-pointer hover:text-[#FBCA03]"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
