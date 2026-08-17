"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import TextType from "@/components/TextType";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const [maskPos, setMaskPos] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { isVenomMode } = useTheme();

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const webTopRef = useRef(null);
  const webBottomRef = useRef(null);

  useEffect(() => {
    // Detect touch / non-hover devices (iPads, mobile phones)
    if (typeof window !== "undefined") {
      const checkTouch = () => {
        const hasTouch =
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.matchMedia("(hover: none)").matches;
        setIsTouchDevice(hasTouch);
      };
      checkTouch();
      window.addEventListener("resize", checkTouch);
      return () => window.removeEventListener("resize", checkTouch);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title entrance
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

  const handleMouseMove = (e) => {
    if (isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Strict bounding check: trigger mask reveal only when cursor is fully within container
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      setMaskPos({ x, y });
    } else {
      setMaskPos(null);
    }
  };

  const handleMouseLeave = () => {
    setMaskPos(null);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-screen overflow-hidden flex items-center justify-center cursor-crosshair transition-colors duration-300 ${
        isVenomMode ? "bg-[#050508]" : "bg-white"
      }`}
    >
      {/* Bottom Identity Layer (Human Face / Unmasked Mahin_Man.jpeg) */}
      <img
        alt="Mahin Man Unmasked Layer"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-10 transition-all duration-300"
        src="/Assets/Mahin_Man.jpeg"
        style={
          isVenomMode
            ? { filter: "grayscale(100%) brightness(0.85) contrast(125%)" }
            : {}
        }
      />

      {/* Top Mask Layer (Spider-Man Suit) - Displayed only on desktop hoverable screens */}
      {!isTouchDevice && (
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
                        maskImage: `radial-gradient(260px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, transparent 45%, rgba(0, 0, 0, 0.3) 75%, black 100%)`,
                        WebkitMaskImage: `radial-gradient(260px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, transparent 45%, rgba(0, 0, 0, 0.3) 75%, black 100%)`,
                      }
                    : {
                        maskImage: "none",
                        WebkitMaskImage: "none",
                      }),
                }
              : maskPos
              ? {
                  maskImage: `radial-gradient(260px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, transparent 45%, rgba(0, 0, 0, 0.3) 75%, black 100%)`,
                  WebkitMaskImage: `radial-gradient(260px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, transparent 45%, rgba(0, 0, 0, 0.3) 75%, black 100%)`,
                }
              : {
                  maskImage: "none",
                  WebkitMaskImage: "none",
                }
          }
        />
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
