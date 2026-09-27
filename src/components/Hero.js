"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import gsap from "gsap";

const subscribeTouch = (callback) => {
  if (typeof window === "undefined") return () => {};
  try {
    const mql = window.matchMedia("(pointer: coarse)");
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  } catch (_) {
    return () => {};
  }
};

const getTouchSnapshot = () => {
  if (typeof window === "undefined") return false;
  return Boolean(
    "ontouchstart" in window ||
      (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) ||
      window.matchMedia("(pointer: coarse)").matches
  );
};

const getTouchServerSnapshot = () => false;

/**
 * Hero Component
 * 
 * Features:
 * - High-impact hero visual layer featuring Iron Man suit armor
 * - Dynamic cursor / touch unmask reveal showing Nisarg's photo beneath armor
 * - Hall of Armor background with soft focus blur and gradient overlay
 * - Arc Reactor HUD targeting lens indicator
 * - GSAP entrance animations for typography
 * - Action buttons: Explore Projects and Download Nisarg's Resume PDF
 */
export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const [maskPos, setMaskPos] = useState(null);
  const [isTouching, setIsTouching] = useState(false);

  const isTouchDevice = useSyncExternalStore(
    subscribeTouch,
    getTouchSnapshot,
    getTouchServerSnapshot
  );

  useEffect(() => {
    let ctx;
    try {
      ctx = gsap.context(() => {
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
      }, heroRef);
    } catch (err) {
      console.warn("Hero GSAP initialization error:", err);
    }

    return () => {
      try {
        if (ctx) ctx.revert();
      } catch (_) {}
    };
  }, []);

  /**
   * Track cursor movements across hero banner to position dynamic mask reveal
   */
  const handleMouseMove = (e) => {
    if (isTouchDevice) return;
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Strict bounding check: trigger mask reveal only when cursor is within hero container
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setMaskPos({ x, y });
      } else {
        setMaskPos(null);
      }
    } catch (_) {
      setMaskPos(null);
    }
  };

  const handleMouseLeave = () => {
    setMaskPos(null);
  };

  /**
   * Mobile touch drag tracking
   */
  const updateTouchPos = (e) => {
    try {
      if (!e.touches || e.touches.length === 0 || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setMaskPos({ x, y });
      }
    } catch (_) {}
  };

  const handleTouchStart = (e) => {
    setIsTouching(true);
    updateTouchPos(e);
  };

  const handleTouchMove = (e) => {
    updateTouchPos(e);
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
    setMaskPos(null);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center transition-colors duration-300 bg-white dark:bg-[#0a0a0a] cursor-crosshair select-none"
    >
      {/* Bottom Identity Layer (Human Face / Unmasked Nisarg) */}
      <div className="absolute inset-0 pointer-events-none z-15">
        <Image
          alt="Nisarg Jayesh Delvadiya Unmasked Layer"
          src="/Assets/me.png"
          fill
          priority
          quality={60}
          sizes="100vw"
          className="object-contain object-bottom pointer-events-none select-none scale-100 [@media(max-aspect-ratio:7/10)]:scale-[1.75] lg:!scale-100 translate-x-0 lg:!translate-x-40 origin-bottom translate-y-0 lg:!translate-y-0"
        />
      </div>

      

      {/* Top Mask Layer (Iron Man Armor) - Rendered with dynamic radial reveal mask */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
        <div
          className="hidden [@media(hover:hover)]:block absolute inset-0 pointer-events-none"
          style={
            maskPos
              ? {
                  maskImage: `radial-gradient(circle 220px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, transparent 45%, rgba(0, 0, 0, 0.3) 75%, black 100%)`,
                  WebkitMaskImage: `radial-gradient(circle 220px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, transparent 45%, rgba(0, 0, 0, 0.3) 75%, black 100%)`,
                }
              : {
                  maskImage: "none",
                  WebkitMaskImage: "none",
                }
          }
        >
          <Image
            alt="Iron Man Suit Layer"
            src="/Assets/Iron_Man.png"
            fill
            priority
            quality={60}
            sizes="100vw"
            className="object-contain object-bottom pointer-events-none select-none scale-125 [@media(max-aspect-ratio:7/10)]:scale-[2.18] lg:!scale-125 origin-bottom translate-y-20 [@media(max-aspect-ratio:7/10)]:-translate-y-[12rem] lg:!translate-y-20 -translate-x-4 [@media(max-aspect-ratio:7/10)]:-translate-x-[0.57rem] lg:!translate-x-[9.5rem]"
          />
        </div>
      </div>



      {/* Blurred Background Photo (1.jpg: Hall of Armor) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          alt="Hall of Armor Background"
          src="/Assets/1.jpg"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter blur-sm scale-105 opacity-80 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-white/20 dark:from-black/90 dark:via-black/60 dark:to-black/30" />
      </div>

      {/* Hero Overlay Content */}
      <div className="absolute top-[58%] lg:top-1/2 -translate-y-1/2 left-4 md:left-6 lg:left-12 z-30 flex flex-col gap-3 pointer-events-none drop-shadow-md max-w-lg w-full">
        <a
          href="https://www.nisargjayeshdelvadiya.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Nisarg Jayesh Delvadiya Official Website"
          aria-label="Visit Nisarg Jayesh Delvadiya Official Website"
          className="pointer-events-auto group block"
        >
          <div ref={titleRef} className="opacity-0 flex flex-col items-start gap-1">
            <span className="font-black uppercase italic text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wider text-[#AA0505] block pl-1.5 sm:pl-2">
              I AM
            </span>
            <h1
              className="text-[3rem] leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter italic uppercase transition-transform duration-200 text-gray-900 dark:text-white group-hover:scale-[1.01]"
              style={{
                textShadow: "4px 4px 0px #AA0505, 7px 7px 0px #6A0C0B",
              }}
            >
              <span className="block">NISARG</span>
              <span className="block">JAYESH</span>
              <span className="block">DELVADIYA</span>
            </h1>
          </div>
        </a>
        <div className="flex flex-col items-start gap-3 mt-6 pointer-events-auto">
          <a
            href="#projects"
            title="Explore Projects Section"
            aria-label="Explore Projects Section"
            className="px-6 py-3 font-bold text-xs md:text-sm tracking-wider uppercase rounded-md shadow-lg inline-flex items-center justify-center transition-all duration-150 active:scale-95 active:translate-y-0.5 cursor-pointer select-none bg-[#AA0505] hover:bg-[#6A0C0B] text-white border border-[#B97D10]/40 shadow-[0_4px_20px_rgba(170,5,5,0.35)] hover:shadow-[0_4px_25px_rgba(251,202,3,0.35)]"
          >
            EXPLORE PROJECTS
          </a>
          <a
            href="/Assets/files/Nisarg_Jayesh_Delvadiya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Nisarg_Jayesh_Delvadiya_Resume.pdf"
            title="Download Nisarg Jayesh Delvadiya Resume (PDF)"
            aria-label="Download Nisarg Jayesh Delvadiya Resume"
            className="px-6 py-3 font-bold text-xs md:text-sm tracking-wider uppercase rounded-md shadow-md inline-flex items-center gap-2 transition-all duration-150 active:scale-95 active:translate-y-0.5 cursor-pointer select-none bg-black/70 hover:bg-[#AA0505] text-white border border-white/20 hover:border-[#AA0505] shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_20px_rgba(170,5,5,0.4)] backdrop-blur-sm"
          >
            <span>RESUME.PDF</span>
            <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
