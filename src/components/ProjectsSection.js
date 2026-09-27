"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/data/projectsData";

gsap.registerPlugin(ScrollTrigger);

/**
 * ProjectsSection Component
 * 
 * Features:
 * - Horizontal swipeable carousel matching Experiences section layout
 * - Left/Right arrow navigation buttons and progress indicator dots
 * - Keyboard ArrowLeft / ArrowRight listener with viewport visibility awareness
 * - Touch swipe gesture support for mobile devices
 * - Preserved client badges, links, and responsive glassmorphism styling
 */
export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

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
      console.warn("ProjectsSection GSAP error:", err);
    }
    return () => {
      try { if (ctx) ctx.revert(); } catch (_) {}
    };
  }, []);

  const minSwipeDistance = 45;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projectsData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projectsData.length - 1 ? prev + 1 : 0));
  };

  // Auto-swipe carousel every 5 seconds (paused on hover or touch)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < projectsData.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Keyboard Arrow navigation (only when section is actively in viewport)
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
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projectsData.length - 1));
          } else {
            setCurrentIndex((prev) => (prev < projectsData.length - 1 ? prev + 1 : 0));
          }
        }
      } catch (keyErr) {
        console.warn("ProjectsSection key handler error:", keyErr);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch & Mouse Swipe handlers
  const onDragStart = (clientX) => {
    try {
      setIsPaused(true);
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
      setIsPaused(false);
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
      id="projects"
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden select-none transition-colors duration-300 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white"
    >
      {/* Blurred Background Photo (Fixed to Viewport for Natural Scale & Framing) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat md:bg-fixed filter blur-sm scale-105 opacity-75 select-none"
          style={{
            backgroundImage: "url('/Assets/2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-white/50 dark:bg-black/85 backdrop-blur-[1px]" />
      </div>

      {/* Section Header */}
      <div ref={headerRef} className="relative z-20 flex flex-col items-center gap-2 mb-10 text-center max-w-2xl opacity-0">

        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter italic uppercase transition-colors duration-300 text-gray-900 dark:text-white"
          style={{
            textShadow: "3px 3px 0px #AA0505, 5px 5px 0px #6A0C0B",
          }}
        >
          PROJECTS
        </h2>
        <div className="w-16 h-1 rounded-full mt-1 transition-colors duration-300 bg-gradient-to-r from-[#AA0505] via-[#FBCA03] to-[#AA0505]"></div>
      </div>

      {/* Horizontal Swipeable Container */}
      <div
        ref={carouselRef}
        className="relative z-20 max-w-4xl w-full flex flex-col items-center opacity-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carousel Track Viewport */}
        <div
          className="w-full overflow-hidden rounded-3xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEndHandler}
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projectsData.map((project, index) => (
              <div key={project.id || index} className="w-full shrink-0 px-2 sm:px-4 py-2">
                <div className="group relative backdrop-blur-md border-2 rounded-3xl px-8 sm:px-14 md:px-16 py-6 sm:py-8 md:py-10 flex flex-col gap-6 overflow-hidden transition-all duration-300 bg-white/95 dark:bg-zinc-900/90 border-gray-200/90 dark:border-zinc-800 shadow-2xl shadow-gray-300/40 dark:shadow-none hover:border-[#AA0505] hover:shadow-[0_15px_40px_rgba(170,5,5,0.18)] min-h-[380px] sm:min-h-[400px] justify-between">
                  {/* Top Bar: Client Badge */}
                  {project.isClientProject && (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-zinc-800">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border border-emerald-600/30 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 shadow-xs">
                          ★ CLIENT PROJECT
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Project Main Details: Title & Description */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="font-black text-2xl sm:text-3xl uppercase tracking-tight transition-colors duration-300 text-gray-900 dark:text-white group-hover:text-[#AA0505] dark:group-hover:text-[#AA0505]">
                      {project.title}
                    </h3>

                    <div className="w-12 h-1 bg-gradient-to-r from-[#AA0505] to-[#FBCA03] rounded-full transition-all duration-300 group-hover:w-20" />

                    {project.description ? (
                      <p className="font-medium text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        {project.description}
                      </p>
                    ) : null}
                  </div>

                  {/* Bottom Bar: Action Buttons (Website Link & GitHub Repo) */}
                  <div className="pt-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between gap-4">
                    <div className="flex items-center">
                      <a
                        href={project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Visit ${project.title} live website`}
                        aria-label={`Visit ${project.title} live website`}
                        className="group/btn inline-flex items-center gap-2 px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 bg-[#AA0505] hover:bg-[#6A0C0B] text-white shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                      >
                        <span>
                          {project.link?.includes("github.com")
                            ? "VIEW ON GITHUB"
                            : "WEBSITE LINK"}
                        </span>
                        <svg
                          className="w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>

                    {project.github ? (
                      <div className="flex items-center justify-end">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`View ${project.title} source code on GitHub`}
                          aria-label={`View ${project.title} source code on GitHub`}
                          className="group/gh inline-flex items-center gap-2 px-4 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-zinc-700 shadow-sm active:scale-95 cursor-pointer"
                        >
                          <span>GITHUB REPO</span>
                          <svg
                            className="w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Navigation Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          title="Previous Project (Arrow Left)"
          aria-label="Previous Project"
          className="hidden lg:flex absolute left-4 sm:left-7 top-1/2 -translate-y-1/2 z-30 group items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 transition-all duration-200 active:scale-90 cursor-pointer shadow-lg bg-white/95 border-gray-200 hover:border-[#AA0505] hover:bg-[#AA0505] hover:text-white text-gray-900 shadow-gray-300/50 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#AA0505] select-none"
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
          title="Next Project (Arrow Right)"
          aria-label="Next Project"
          className="hidden lg:flex absolute right-4 sm:right-7 top-1/2 -translate-y-1/2 z-30 group items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 transition-all duration-200 active:scale-90 cursor-pointer shadow-lg bg-white/95 border-gray-200 hover:border-[#AA0505] hover:bg-[#AA0505] hover:text-white text-gray-900 shadow-gray-300/50 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#AA0505] select-none"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 stroke-current stroke-3 fill-none transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Centered Swipe Indicator Dots (Outside Box) */}
        <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6 z-20">
          {projectsData.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              title={`Go to project ${i + 1}`}
              aria-label={`Go to project ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#AA0505] select-none ${
                i === currentIndex
                  ? "w-8 bg-[#AA0505] shadow-md shadow-red-900/30"
                  : "w-2.5 bg-gray-300 hover:bg-[#AA0505]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
