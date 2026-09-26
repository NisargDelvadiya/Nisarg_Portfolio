"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Career timeline and milestones dataset
 */
const experiencesData = [
  {
    role: "Freelance Web Developer & Co-Founder",
    company: "Duo Brothers",
    logo: "/Assets/Duo_Brothers.png",
    duration: "2026 – Present",
    isCurrent: true,
    partner: {
      name: "Mahin Sidhartha Gunjal",
      role: "Web Designer & VFX Artist",
      website: "https://mahin-portfolio-spidey.vercel.app",
    },
    description:
      "Collaborating alongside partner Mahin Sidhartha Gunjal (Web Designer & VFX Artist) under our team Duo Brothers to engineer high-performance web applications, bespoke UI/UX designs, and immersive digital solutions. Successfully delivered end-to-end freelance projects for 3+ satisfied clients.",
  },
];

/**
 * ExperiencesSection Component
 * 
 * Features:
 * - Horizontal swipeable carousel layout with smooth CSS translate animation
 * - Left/Right arrow button controls and indicator dots
 * - Keyboard ArrowLeft / ArrowRight listener for instant navigation
 * - Touch swipe gestures on mobile and touch devices
 */
export default function ExperiencesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    let ctx;
    try {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });

        if (headerRef.current) {
          tl.fromTo(
            headerRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            0
          );
        }

        if (carouselRef.current) {
          tl.fromTo(
            carouselRef.current,
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.2)" },
            0.2
          );
        }
      }, sectionRef);
    } catch (err) {
      console.warn("ExperiencesSection GSAP error:", err);
    }
    return () => {
      try { if (ctx) ctx.revert(); } catch (_) {}
    };
  }, []);

  const minSwipeDistance = 45;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : experiencesData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < experiencesData.length - 1 ? prev + 1 : 0));
  };

  // Keyboard Arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      try {
        if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;

        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const isVisible =
            rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
          if (!isVisible) return;

          e.preventDefault();
          if (e.key === "ArrowLeft") {
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : experiencesData.length - 1));
          } else {
            setCurrentIndex((prev) => (prev < experiencesData.length - 1 ? prev + 1 : 0));
          }
        }
      } catch (keyErr) {
        console.warn("ExperiencesSection key handler error:", keyErr);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch & Mouse Swipe handlers
  const onDragStart = (clientX) => {
    try {
      setTouchEnd(null);
      setTouchStart(clientX);
    } catch (_) {}
  };

  const onDragMove = (clientX) => {
    try {
      if (touchStart !== null) {
        setTouchEnd(clientX);
      }
    } catch (_) {}
  };

  const onDragEnd = () => {
    try {
      if (touchStart === null || touchEnd === null) {
        setTouchStart(null);
        setTouchEnd(null);
        return;
      }
      const distance = touchStart - touchEnd;
      if (distance > minSwipeDistance) {
        handleNext();
      } else if (distance < -minSwipeDistance) {
        handlePrev();
      }
      setTouchStart(null);
      setTouchEnd(null);
    } catch (_) {}
  };

  const onTouchStart = (e) => e.targetTouches?.[0] && onDragStart(e.targetTouches[0].clientX);
  const onTouchMove = (e) => e.targetTouches?.[0] && onDragMove(e.targetTouches[0].clientX);
  const onTouchEndHandler = () => onDragEnd();

  const onMouseDown = (e) => {
    e.preventDefault(); // Prevent text selection
    onDragStart(e.clientX);
  };
  const onMouseMove = (e) => {
    if (touchStart !== null) {
      e.preventDefault();
      onDragMove(e.clientX);
    }
  };
  const onMouseUp = () => onDragEnd();
  const onMouseLeave = () => {
    if (touchStart !== null) onDragEnd();
  };

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="relative w-full min-h-screen py-24 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden select-none transition-colors duration-300 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white"
    >
      {/* Blurred Background Photo (Fixed to Viewport for Natural Scale & Framing) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat md:bg-fixed filter blur-sm scale-105 opacity-75 select-none"
          style={{
            backgroundImage: "url('/Assets/1.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-white/50 dark:bg-black/85 backdrop-blur-[1px]" />
      </div>

      {/* Section Header */}
      <div ref={headerRef} className="relative z-20 flex flex-col items-center gap-2 mb-10 text-center max-w-2xl opacity-0">
        <span className="font-black uppercase text-xs md:text-sm tracking-[0.25em] transition-colors duration-300 text-[#AA0505]">
          JOURNEY & MILESTONES
        </span>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter italic uppercase transition-colors duration-300 text-gray-900 dark:text-white"
          style={{
            textShadow: "3px 3px 0px #AA0505, 5px 5px 0px #6A0C0B",
          }}
        >
          EXPERIENCES
        </h2>
        <div className="w-16 h-1 rounded-full mt-1 transition-colors duration-300 bg-gradient-to-r from-[#AA0505] via-[#FBCA03] to-[#AA0505]"></div>
      </div>

      {/* Horizontal Swipeable Container */}
      <div ref={carouselRef} className="relative z-20 max-w-4xl w-full flex flex-col items-center opacity-0">
        {/* Carousel Track Viewport */}
        <div
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing rounded-3xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEndHandler}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {experiencesData.map((exp, index) => (
              <div key={index} className="w-full shrink-0 px-2 sm:px-4 py-2">
                <div className="group relative backdrop-blur-md border-2 rounded-3xl px-8 sm:px-12 md:px-14 py-8 sm:py-10 flex flex-col gap-6 overflow-hidden transition-all duration-300 bg-white/95 dark:bg-zinc-900/90 border-gray-200/90 dark:border-zinc-800 shadow-2xl shadow-gray-300/40 dark:shadow-none hover:border-[#AA0505] hover:shadow-[0_15px_40px_rgba(170,5,5,0.18)]">
                  {/* Top Bar: Role, Company & Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-zinc-800">
                    <div className="flex flex-col gap-1">
                      {experiencesData.length > 1 && (
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[11px] font-bold text-gray-400">
                            {index + 1} of {experiencesData.length}
                          </span>
                        </div>
                      )}

                      <h3 className="font-black text-xl sm:text-2xl uppercase tracking-tight transition-colors duration-300 text-gray-900 dark:text-white group-hover:text-[#AA0505] dark:group-hover:text-[#AA0505] pt-1">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="self-start sm:self-center shrink-0">
                      <span className="px-3.5 py-1.5 rounded-full border font-black text-xs tracking-wider uppercase border-[#B97D10]/40 dark:border-[#FBCA03]/30 bg-[#FBCA03]/15 dark:bg-[#FBCA03]/10 text-[#6A0C0B] dark:text-[#FBCA03] shadow-sm">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Accent Gradient Line */}
                  <div className="w-14 h-1 bg-gradient-to-r from-[#AA0505] via-[#FBCA03] to-[#AA0505] rounded-full" />

                  {/* Body Content: Duo Brothers Logo & Details */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8">
                    {/* Duo Brothers Logo Emblem */}
                    {exp.logo && (
                      <div className="relative shrink-0 w-44 sm:w-48 md:w-52 aspect-[3/2] rounded-2xl overflow-hidden bg-black border-2 border-gray-900 shadow-xl shadow-black/20 p-2.5 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#AA0505]/50 group-hover:shadow-[0_10px_30px_rgba(170,5,5,0.2)]">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} Logo`}
                          fill
                          sizes="(max-width: 640px) 176px, (max-width: 768px) 192px, 208px"
                          className="object-contain p-2.5"
                        />
                      </div>
                    )}

                    <div className="flex-1 flex flex-col justify-center">
                      {/* Description Body */}
                      <p className="font-medium text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        {exp.partner && exp.description.includes(exp.partner.name) ? (
                          (() => {
                            const parts = exp.description.split(exp.partner.name);
                            return (
                              <>
                                {parts[0]}
                                <a
                                  href={exp.partner.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title={`Visit ${exp.partner.name}'s Portfolio`}
                                  className="font-bold text-[#AA0505] hover:text-[#6A0C0B] underline decoration-[#AA0505]/40 hover:decoration-[#AA0505] underline-offset-2 transition-colors cursor-pointer"
                                >
                                  {exp.partner.name}
                                </a>
                                {parts.slice(1).join(exp.partner.name)}
                              </>
                            );
                          })()
                        ) : (
                          exp.description
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Shown only when multiple slides exist */}
        {experiencesData.length > 1 && (
          <>
            {/* Left Navigation Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              title="Previous Experience (Arrow Left)"
              aria-label="Previous Experience"
              className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2 z-30 group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 transition-all duration-200 active:scale-90 cursor-pointer shadow-lg bg-white/95 border-gray-200 hover:border-[#AA0505] hover:bg-[#AA0505] hover:text-white text-gray-900 shadow-gray-300/50 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#AA0505] select-none"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 stroke-current stroke-3 fill-none transition-transform group-hover:-translate-x-0.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Navigation Arrow */}
            <button
              type="button"
              onClick={handleNext}
              title="Next Experience (Arrow Right)"
              aria-label="Next Experience"
              className="absolute right-4 sm:right-7 top-1/2 -translate-y-1/2 z-30 group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 transition-all duration-200 active:scale-90 cursor-pointer shadow-lg bg-white/95 border-gray-200 hover:border-[#AA0505] hover:bg-[#AA0505] hover:text-white text-gray-900 shadow-gray-300/50 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#AA0505] select-none"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 stroke-current stroke-3 fill-none transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Centered Pagination Dots (Outside Box) */}
            <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6 z-20">
              {experiencesData.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  title={`Go to slide ${i + 1}`}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#AA0505] select-none ${
                    i === currentIndex
                      ? "w-8 bg-[#AA0505] shadow-md shadow-red-900/30"
                      : "w-2.5 bg-gray-300 hover:bg-[#AA0505]/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
