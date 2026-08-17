"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "@/context/ThemeContext";

const projectsData = [
  {
    title: "MULTI-TENANT SAAS PLATFORM",
    description:
      "Engineered a containerized multi-tenant SaaS application featuring strict data isolation, dynamic tenancy resolution, and role-based access control.",
    tags: ["REACT", "NODE.JS", "POSTGRESQL", "DOCKER"],
    link: "https://github.com",
  },
  {
    title: "FULL-STACK PAYMENT GATEWAY",
    description:
      "Built a robust payment gateway system simulating real-time transaction state management, secure webhooks, and multi-method processing workflows.",
    tags: ["NODE.JS", "EXPRESS", "MONGODB", "REST APIS"],
    link: "https://github.com",
  },
  {
    title: "NOTICE HUB UNIVERSITY PORTAL",
    description:
      "Developed a centralized real-time notification platform to streamline university announcements, student communication, and campus updates.",
    tags: ["REACT", "TAILWIND CSS", "NODE.JS"],
    link: "https://github.com",
  },
  {
    title: "PRODUCTIVITY SUITE EXTENSION",
    description:
      "Created a feature-rich Chrome extension utilizing JavaScript and Chrome APIs to optimize personal daily task management and workflow tracking.",
    tags: ["JAVASCRIPT", "CHROME APIS", "TAILWIND"],
    link: "https://github.com",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const webBgRef = useRef(null);
  const spideyCornerRef = useRef(null);
  const { isVenomMode } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Standing Spidey subtle up and down peek animation from corner
      gsap.to(spideyCornerRef.current, {
        y: -30,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

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
        className="absolute bottom-0 -left-2 sm:left-0 md:left-1 z-30 pointer-events-none"
      >
        <img
          src="/Assets/spidey_gif_2.png"
          alt="Spider-Man Corner Peek"
          className={`w-20 sm:w-28 md:w-32 lg:w-36 h-auto object-contain drop-shadow-2xl translate-y-3 sm:translate-y-4 transition-all duration-300 ${
            isVenomMode
              ? "grayscale brightness-[0.4] contrast-[220%] drop-shadow-[0_0_15px_#9333ea]"
              : ""
          }`}
        />
      </div>

      {/* Section Header */}
      <div className="relative z-20 flex flex-col items-center gap-2 mb-14 text-center max-w-2xl">
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
            className={`font-black uppercase text-xs md:text-sm tracking-[0.25em] transition-colors duration-300 ${
              isVenomMode ? "text-purple-400" : "text-[#a31515]"
            }`}
          >
            FEATURED WORKS
          </span>
        </div>
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter italic uppercase transition-colors duration-300 ${
            isVenomMode ? "text-white" : "text-gray-900"
          }`}
          style={{
            textShadow: isVenomMode
              ? "3px 3px 0px #7e22ce, 5px 5px 0px #581c87"
              : "3px 3px 0px #ef4444, 5px 5px 0px #a31515",
          }}
        >
          PROJECTS
        </h2>
        <div
          className={`w-16 h-1 rounded-full mt-1 transition-colors duration-300 ${
            isVenomMode ? "bg-purple-500" : "bg-[#a31515]"
          }`}
        ></div>
      </div>

      {/* Projects Grid Container */}
      <div className="relative z-20 max-w-4xl lg:max-w-5xl w-full mx-auto pl-0 md:pl-20 lg:pl-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${project.title} project`}
            aria-label={`View ${project.title} project`}
            className={`group relative backdrop-blur-sm border-2 rounded-2xl p-5 md:p-6 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-150 active:scale-95 active:translate-y-0.5 ${
              isVenomMode
                ? "bg-[#12121c]/90 border-purple-900/50 shadow-lg shadow-purple-950/40 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
                : "bg-white/95 border-gray-200/80 shadow-lg shadow-gray-200/50 hover:border-[#a31515] hover:shadow-red-900/15"
            }`}
          >
            {/* Top Row: Title & External Link Icon */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3
                  className={`font-black text-lg md:text-xl tracking-tight uppercase transition-colors duration-300 ${
                    isVenomMode
                      ? "text-white group-hover:text-purple-400"
                      : "text-gray-900 group-hover:text-[#a31515]"
                  }`}
                >
                  {project.title}
                </h3>
                <svg
                  className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                    isVenomMode
                      ? "text-gray-400 group-hover:text-purple-400"
                      : "text-gray-400 group-hover:text-[#a31515]"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>

              {/* Description Paragraph */}
              <p
                className={`font-medium text-xs md:text-sm leading-relaxed mb-6 transition-colors duration-300 ${
                  isVenomMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>
            </div>

            {/* Bottom Row: Tech Stack Pill Tags */}
            <div
              className={`flex flex-wrap gap-2 pt-4 border-t transition-colors duration-300 ${
                isVenomMode ? "border-purple-900/40" : "border-gray-100"
              }`}
            >
              {project.tags.map((tag, tIndex) => (
                <span
                  key={tIndex}
                  className={`px-3 py-1.5 rounded-xl border font-extrabold text-[10px] md:text-xs tracking-wider uppercase transition-colors duration-300 ${
                    isVenomMode
                      ? "border-purple-800/60 bg-purple-950/60 text-purple-300 group-hover:border-purple-400 group-hover:text-white"
                      : "border-gray-200 bg-gray-50/60 text-gray-700 group-hover:border-red-200 group-hover:text-[#a31515]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
