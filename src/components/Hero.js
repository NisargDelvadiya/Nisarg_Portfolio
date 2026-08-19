"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import TextType from "@/components/TextType";
import { useTheme } from "@/context/ThemeContext";

/**
 * Hero Component
 * 
 * Features:
 * - Interactive Spider-Man mask reveal via dynamic CSS radial-gradient mask
 * - Desktop: Mouse hover mask reveal with custom web cursor
 * - Mobile & iPad: Dedicated touch-draggable lens circle (Torch icon in night mode, Web lens in day mode)
 * - Split hero layers: unmasked face (Mahin_Man.jpeg) and masked suit (Spider_Man.png)
 * - Dynamic typing banner with TextType component
 * - GSAP entrance animations & continuous rotating web background accents
 * - Action buttons: Smooth scroll to Projects & direct download for Mahin_Resume.pdf
 * - Full support for Spider-Man Red and Venom Symbiote Dark themes
 */
export default function Hero() {
  const [maskPos, setMaskPos] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const { isVenomMode } = useTheme();

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const webTopRef = useRef(null);
  const webBottomRef = useRef(null);

  useEffect(() => {
    // Detect touch / non-hover devices (iPads, tablets, mobile phones)
    if (typeof window !== "undefined") {
      const checkTouch = () => {
        const hasTouch =
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.matchMedia("(hover: none)").matches ||
          window.innerWidth < 1024;
        setIsTouchDevice(hasTouch);

        // Set initial preview position for touch screens directly over face center
        if (hasTouch && heroRef.current) {
          const rect = heroRef.current.getBoundingClientRect();
          setMaskPos({
            x: rect.width * 0.5,
            y: rect.height * 0.45,
          });
        }
      };
      checkTouch();
      window.addEventListener("resize", checkTouch);
      return () => window.removeEventListener("resize", checkTouch);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title entrance animation
      gsap.fromTo(
        [titleRef.current],
        {
          x: -120,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      // Top Web: Rotation & Shrink/Grow scale loop
      gsap.to(webTopRef.current, {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });
      gsap.to(webTopRef.current, {
        scale: 1.15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Bottom Web: Counter-clockwise rotation & Shrink/Grow scale loop
      gsap.to(webBottomRef.current, {
        rotation: -360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
      gsap.to(webBottomRef.current, {
        scale: 1.18,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /**
   * Desktop: Track cursor movements across hero banner to position dynamic mask reveal
   */
  const handleMouseMove = (e) => {
    if (isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      setMaskPos({ x, y });
    } else {
      setMaskPos(null);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setMaskPos(null);
    }
  };

  /**
   * Mobile & iPad: Track touch gestures with non-passive listener to lock scroll while unmasking
   */
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        if (e.cancelable) {
          e.preventDefault(); // Stop native page scrolling while unmasking
        }
        const touch = e.touches[0];
        const rect = heroEl.getBoundingClientRect();
        const x = Math.max(0, Math.min(rect.width, touch.clientX - rect.left));
        const y = Math.max(0, Math.min(rect.height, touch.clientY - rect.top));
        setMaskPos({ x, y });
        setIsTouching(true);
      }
    };

    const onTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        const rect = heroEl.getBoundingClientRect();
        const x = Math.max(0, Math.min(rect.width, touch.clientX - rect.left));
        const y = Math.max(0, Math.min(rect.height, touch.clientY - rect.top));
        setMaskPos({ x, y });
        setIsTouching(true);
      }
    };

    const onTouchEnd = () => {
      setIsTouching(false);
    };

    heroEl.addEventListener("touchstart", onTouchStart, { passive: true });
    heroEl.addEventListener("touchmove", onTouchMove, { passive: false });
    heroEl.addEventListener("touchend", onTouchEnd, { passive: true });
    heroEl.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      heroEl.removeEventListener("touchstart", onTouchStart);
      heroEl.removeEventListener("touchmove", onTouchMove);
      heroEl.removeEventListener("touchend", onTouchEnd);
      heroEl.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-screen overflow-hidden flex items-center justify-center transition-colors duration-300 touch-none ${
        isVenomMode ? "bg-[#050508]" : "bg-white"
      }`}
    >
      {/* Bottom Identity Layer (Human Face / Unmasked Mahin_Man.jpeg) */}
      <img
        alt="Mahin Man Unmasked Layer"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-10 transition-all duration-300"
        src="/Assets/Mahin_Man.jpeg"
        fetchPriority="high"
        style={
          isVenomMode
            ? { filter: "grayscale(100%) brightness(0.85) contrast(125%)" }
            : {}
        }
      />

      {/* Top Mask Layer (Spider-Man Suit) - Rendered with dynamic radial reveal mask */}
      <img
        alt="Top Mask Layer"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-20 transition-all duration-150"
        src="/Assets/Spider_Man.png"
        style={
          isVenomMode
            ? {
                filter:
                  "grayscale(100%) brightness(0.4) contrast(250%) drop-shadow(0 0 25px #9333ea)",
                ...(maskPos
                  ? {
                      maskImage: `radial-gradient(circle 180px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.3) 70%, black 100%)`,
                      WebkitMaskImage: `radial-gradient(circle 180px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.3) 70%, black 100%)`,
                    }
                  : {
                      maskImage: "none",
                      WebkitMaskImage: "none",
                    }),
              }
            : maskPos
            ? {
                maskImage: `radial-gradient(circle 180px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.3) 70%, black 100%)`,
                WebkitMaskImage: `radial-gradient(circle 180px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.3) 70%, black 100%)`,
              }
            : {
                maskImage: "none",
                WebkitMaskImage: "none",
              }
        }
      />

      {/* Mobile & iPad: Touch Reveal Circle Indicator / Torch Lens */}
      {isTouchDevice && maskPos && (
        <div
          className="absolute pointer-events-none z-25 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center will-change-transform select-none"
          style={{
            left: `${maskPos.x}px`,
            top: `${maskPos.y}px`,
          }}
        >
          {/* Glowing Reveal Ring */}
          <div
            className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-dashed flex items-center justify-center transition-all duration-200 ${
              isTouching ? "scale-110" : "scale-100"
            } ${
              isVenomMode
                ? "border-amber-400/80 shadow-[0_0_30px_rgba(251,191,36,0.5),inset_0_0_20px_rgba(168,85,247,0.3)] bg-amber-400/10"
                : "border-[#ef4444]/90 shadow-[0_0_30px_rgba(239,68,68,0.5),inset_0_0_20px_rgba(239,68,68,0.25)] bg-red-500/10"
            }`}
          >
            {/* Center Icon Badge (Torch in Night mode, Web Lens in Day mode) */}
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center shadow-xl backdrop-blur-md transition-all ${
                isVenomMode
                  ? "bg-[#111111]/90 border border-amber-400/70 shadow-amber-400/40"
                  : "bg-black/90 border border-red-500/70 shadow-red-500/40"
              }`}
            >
              {isVenomMode ? (
                /* Torch / Flashlight Icon for Night Mode */
                <svg
                  className="w-6 h-6 text-amber-300 drop-shadow-[0_0_10px_rgba(252,211,77,0.9)] animate-pulse"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15.5 3H8.5C7.67 3 7 3.67 7 4.5V7.2L9 9.2V20C9 20.55 9.45 21 10 21H14C14.55 21 15 20.55 15 20V9.2L17 7.2V4.5C17 3.67 16.33 3 15.5 3ZM10.5 5H13.5V6.5H10.5V5ZM13 14H11V12H13V14Z" />
                </svg>
              ) : (
                /* Web Lens Icon for Day Mode */
                <img
                  src="/Assets/web-cursor.svg"
                  alt="Web Lens"
                  className="w-6 h-6 object-contain drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]"
                />
              )}
            </div>

            {/* Ripple Pulse Rings */}
            <div
              className={`absolute inset-0 rounded-full animate-ping opacity-25 pointer-events-none ${
                isVenomMode ? "bg-amber-400" : "bg-red-500"
              }`}
            />
          </div>

          {/* Floating Hint Tag under Circle */}
          <div
            className={`mt-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md border shadow-lg whitespace-nowrap transition-opacity duration-300 ${
              isTouching ? "opacity-40" : "opacity-100"
            } ${
              isVenomMode
                ? "bg-black/80 text-amber-300 border-amber-400/40 shadow-purple-950/50"
                : "bg-black/80 text-white border-red-500/40 shadow-black/50"
            }`}
          >
            {isVenomMode ? "🔦 Drag Torch To Unmask" : "🕸️ Drag Lens To Unmask"}
          </div>
        </div>
      )}

      {/* Spider Web Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
        <img
          ref={webTopRef}
          alt="Spider Web Top"
          className={`absolute top-0 left-0 w-[250px] h-[250px] object-contain opacity-20 -translate-x-1/4 -translate-y-1/4 mix-blend-multiply pointer-events-none origin-center transition-all duration-300 ${
            isVenomMode ? "invert brightness-200" : ""
          }`}
          src="/Assets/Web.png"
        />
        <img
          ref={webBottomRef}
          alt="Spider Web Bottom"
          className={`absolute bottom-0 right-0 w-[300px] h-[300px] object-contain opacity-20 translate-x-1/4 translate-y-1/4 mix-blend-multiply pointer-events-none origin-center transition-all duration-300 ${
            isVenomMode ? "invert brightness-200" : ""
          }`}
          src="/Assets/Web.png"
        />
      </div>

      {/* Hero Overlay Content */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 lg:left-12 z-30 flex flex-col gap-3 pointer-events-none drop-shadow-md max-w-lg w-full">
        <div
          className={`font-extrabold uppercase text-sm md:text-base lg:text-lg tracking-[0.2em] flex flex-col items-start gap-1 transition-colors duration-300 ${
            isVenomMode
              ? "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
              : "text-[#a31515]"
          }`}
        >
          <span className="block">YOUR FRIENDLY NEIGHBORHOOD</span>
          <TextType
            text={["WEB DESIGNER", "VFX ARTIST"]}
            typingSpeed={60}
            deletingSpeed={40}
            pauseDuration={1800}
            showCursor={true}
            cursorCharacter="|"
            loop={true}
          />
        </div>
        <h1
          ref={titleRef}
          className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none italic uppercase opacity-0 transition-colors duration-300 ${
            isVenomMode ? "text-white" : "text-gray-900"
          }`}
          style={{
            textShadow: isVenomMode
              ? "4px 4px 0px #7e22ce, 7px 7px 0px #581c87"
              : "4px 4px 0px #ef4444, 7px 7px 0px #a31515",
          }}
        >
          <span className="block">MAHIN</span>
          <span className="block">GUNJAL</span>
        </h1>
        <div className="flex flex-col items-start gap-3 mt-6 pointer-events-auto">
          <a
            href="#projects"
            title="Explore Projects Section"
            aria-label="Explore Projects Section"
            className={`px-6 py-3 font-bold text-xs md:text-sm tracking-wider uppercase rounded-md shadow-lg inline-flex items-center justify-center transition-all duration-150 active:scale-95 active:translate-y-0.5 cursor-pointer select-none ${
              isVenomMode
                ? "bg-[#7e22ce] hover:bg-[#6b21a8] text-white shadow-purple-950/50"
                : "bg-[#a31515] hover:bg-[#821010] text-white"
            }`}
          >
            EXPLORE PROJECTS
          </a>
          <a
            href="/Mahin_Resume.pdf"
            download="Mahin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Mahin Gunjal's Resume PDF"
            aria-label="Download Mahin Gunjal's Resume PDF"
            className="px-6 py-3 bg-[#111111] hover:bg-[#282828] text-white font-bold text-xs md:text-sm tracking-wider uppercase rounded-md shadow-lg inline-flex items-center gap-2 transition-colors duration-200 active:scale-95 active:translate-y-0.5 cursor-pointer select-none"
          >
            <span>MAHIN_RESUME.PDF</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

