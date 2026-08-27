"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { projectsData } from "@/data/projectsData";

/**
 * ProjectsSection Component (Homepage Showcase)
 * 
 * Features:
 * - 2x2 grid of 4 featured 3D animation & VFX video project reels
 * - "View More Projects" CTA button opening the dedicated /projects archive in a new tab
 * - Integrated auto-playing, looping, muted video showcases
 * - Animated corner Spider-Man / Venom peek character with subtle floating oscillation
 * - Continuous rotating web background graphic
 */
export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const webBgRef = useRef(null);
  const spideyCornerRef = useRef(null);
  const { isVenomMode } = useTheme();

  // Display only the first 4 projects on the main homepage
  const featuredProjects = projectsData.slice(0, 4);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Standing Spidey subtle up and down peek animation from corner
      gsap.fromTo(
        spideyCornerRef.current,
        { y: 0 },
        {
          y: -35,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );

      // 2. Background web rotation
      gsap.to(webBgRef.current, {
        rotation: 360,
        duration: 55,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`relative w-full min-h-screen py-24 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden select-none transition-colors duration-300 ${
        isVenomMode ? "bg-[#07070c] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Background Rotating Web Accent Centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <img
          ref={webBgRef}
          src="/Assets/Web.png"
          alt="Background Spider Web"
          className={`w-[650px] md:w-[900px] h-[650px] md:h-[900px] object-contain opacity-15 mix-blend-multiply transition-all duration-300 ${
            isVenomMode ? "invert brightness-200" : ""
          }`}
        />
      </div>

      {/* Standing Spider-Man Peeking from Corner */}
      <div
        ref={spideyCornerRef}
        className="absolute bottom-2 sm:bottom-4 -left-2 sm:left-0 md:left-1 z-40 pointer-events-none"
      >
        <img
          src="/Assets/spidey_gif_2.png"
          alt="Spider-Man Corner Peek"
          className={`w-20 sm:w-28 md:w-32 lg:w-36 h-auto object-contain drop-shadow-2xl transition-all duration-300 ${
            isVenomMode
              ? "grayscale brightness-[0.35] contrast-[250%] drop-shadow-[0_0_15px_#9333ea]"
              : ""
          }`}
        />
      </div>

      {/* Section Header */}
      <div className="relative z-20 flex flex-col items-center gap-2 mb-16 text-center max-w-2xl">
        <div className="flex items-center gap-2">
          <div
            className={`px-1.5 py-0.5 rounded-sm flex items-center justify-center shadow-sm transition-colors duration-300 ${
              isVenomMode ? "bg-purple-600" : "bg-[#a31515]"
            }`}
          >
            <img
              src="/Assets/spidey_gif_1.png"
              alt="Spidey Mask"
              className={`w-3.5 h-3.5 object-contain ${
                isVenomMode
                  ? "invert brightness-200 grayscale"
                  : "invert brightness-200"
              }`}
            />
          </div>
          <span
            className={`font-black uppercase text-xs md:text-sm tracking-[0.2em] transition-colors duration-300 ${
              isVenomMode ? "text-purple-400" : "text-[#a31515]"
            }`}
          >
            CREATIVE PORTFOLIO
          </span>
        </div>

        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none italic uppercase transition-colors duration-300 ${
            isVenomMode ? "text-white" : "text-gray-900"
          }`}
          style={{
            textShadow: isVenomMode
              ? "3px 3px 0px #7e22ce, 6px 6px 0px #581c87"
              : "3px 3px 0px #ef4444, 6px 6px 0px #a31515",
          }}
        >
          FEATURED PROJECTS
        </h2>
      </div>

      {/* Projects Grid Container (2x2 on desktop) */}
      <div className="relative z-20 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {featuredProjects.map((project, index) => (
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

      {/* View More Projects CTA Button */}
      <div className="relative z-20 mt-14 flex items-center justify-center">
        <a
          href="/projects"
          target="_blank"
          rel="noopener noreferrer"
          title="View All Projects (Opens in a new tab)"
          aria-label="View All Projects (Opens in a new tab)"
          className={`group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm md:text-base uppercase tracking-widest transition-all duration-300 shadow-xl border-2 active:scale-95 active:translate-y-0.5 cursor-pointer ${
            isVenomMode
              ? "bg-purple-950/80 hover:bg-purple-600 text-purple-200 hover:text-white border-purple-600/80 shadow-[0_4px_20px_rgba(147,51,234,0.35)] hover:shadow-[0_8px_30px_rgba(147,51,234,0.6)]"
              : "bg-[#a31515] hover:bg-[#821010] text-white border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000]"
          }`}
        >
          <span>VIEW MORE PROJECTS</span>
          <svg
            className="w-5 h-5 fill-none stroke-current stroke-2 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
