"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "@/context/ThemeContext";

/**
 * Projects showcase dataset
 */
const projectsData = [
  {
    title: "MULTI-TENANT SAAS PLATFORM",
    description:
      "Engineered a containerized multi-tenant SaaS application featuring strict data isolation, dynamic tenancy resolution, and role-based access control.",
    tags: ["REACT", "NODE.JS", "POSTGRESQL", "DOCKER"],
    link: "https://github.com/mahingunjal",
  },
  {
    title: "FULL-STACK PAYMENT GATEWAY",
    description:
      "Built a robust payment gateway system simulating real-time transaction state management, secure webhooks, and multi-method processing workflows.",
    tags: ["NODE.JS", "EXPRESS", "MONGODB", "REST APIS"],
    link: "https://github.com/mahingunjal",
  },
  {
    title: "NOTICE HUB UNIVERSITY PORTAL",
    description:
      "Developed a centralized real-time notification platform to streamline university announcements, student communication, and campus updates.",
    tags: ["REACT", "TAILWIND CSS", "NODE.JS"],
    link: "https://github.com/mahingunjal",
  },
  {
    title: "PRODUCTIVITY SUITE EXTENSION",
    description:
      "Created a feature-rich Chrome extension utilizing JavaScript and Chrome APIs to optimize personal daily task management and workflow tracking.",
    tags: ["JAVASCRIPT", "CHROME APIS", "TAILWIND"],
    link: "https://github.com/mahingunjal",
  },
];

/**
 * ProjectsSection Component
 * 
 * Features:
 * - 2x2 grid of featured software engineering & web development projects
 * - Animated corner Spider-Man / Venom peek character with subtle floating oscillation
 * - Continuous rotating web background graphic
 * - High-contrast tag badges and interactive external GitHub redirection links
 */
export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const webBgRef = useRef(null);
  const spideyCornerRef = useRef(null);
  const { isVenomMode } = useTheme();

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
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border-3 shadow-xl transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.98] ${
              isVenomMode
                ? "bg-[#0f0f18] border-purple-900/60 shadow-purple-950/20 hover:border-purple-500 hover:shadow-purple-900/40"
                : "bg-white border-red-900/20 shadow-red-950/10 hover:border-[#a31515] hover:shadow-red-900/20"
            }`}
          >
            {/* Top Card Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-black tracking-widest uppercase transition-colors duration-300 ${
                    isVenomMode ? "text-purple-400" : "text-[#a31515]"
                  }`}
                >
                  PROJECT 0{index + 1}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`View ${project.title} on GitHub (Opens in new tab)`}
                  aria-label={`View ${project.title} on GitHub (Opens in new tab)`}
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 active:scale-90 ${
                    isVenomMode
                      ? "border-purple-800 bg-purple-950/60 text-purple-300 hover:bg-purple-600 hover:text-white"
                      : "border-red-200 bg-red-50 text-[#a31515] hover:bg-[#a31515] hover:text-white"
                  }`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3zm-9 4h6v2H5v10h10v-6h2v8H3V7h2z" />
                  </svg>
                </a>
              </div>

              <h3
                className={`text-xl sm:text-2xl font-black italic tracking-tight uppercase leading-snug transition-colors duration-300 ${
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

            {/* Bottom Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-6 mt-4 border-t border-gray-100 dark:border-purple-950/60">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className={`px-3 py-1 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${
                    isVenomMode
                      ? "bg-purple-950/80 text-purple-300 border border-purple-800/60"
                      : "bg-red-50 text-[#a31515] border border-red-100"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
