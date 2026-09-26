"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Management, leadership & strategic domains in exact specified order
 */
const managementSkillsData = [
  { name: "LEADERSHIP", category: "VISION & EXECUTION" },
  { name: "COMMUNICATION", category: "RELATIONS & COLLABORATION" },
  { name: "NETWORKING", category: "PARTNERSHIPS & ALLIANCES" },
];

/**
 * Technical skills dataset in exact specified order
 */
const technicalSkillsData = [
  { name: "SARVAM AI", category: "INDIC AI & LLMS" },
  { name: "NEXT.JS", category: "FULL-STACK & SSR" },
  { name: "REACT.JS", category: "FRONTEND FRAMEWORK" },
  { name: "NODEMAILER", category: "EMAIL & AUTOMATION" },
  { name: "CLERK", category: "AUTH & USER MANAGEMENT" },
  { name: "PAYLOAD CMS", category: "HEADLESS CMS" },
  { name: "MONGOOSE ODM", category: "SCHEMA & MODELING" },
  { name: "MONGODB", category: "NOSQL DATABASE" },
  { name: "NODE.JS", category: "BACKEND RUNTIME" },
  { name: "GREENSOCK ANIMATION PLATFORM (GSAP)", category: "CREATIVE ANIMATIONS" },
  { name: "JAVASCRIPT", category: "CORE LANGUAGE" },
  { name: "SHADCN", category: "UI COMPONENT SYSTEM" },
  { name: "TAILWIND CSS", category: "MODERN STYLING" },
  { name: "HTML5", category: "SEMANTIC STRUCTURE" },
  { name: "GITHUB", category: "VERSION CONTROL & CI/CD" },
  { name: "GOOGLE ANTIGRAVITY", category: "AGENTIC WORKFLOWS" },
  { name: "MICROSOFT VS CODE", category: "DEV ENVIRONMENT" },
  { name: "JAVA", category: "OBJECT-ORIENTED PROGRAMMING" },
];

/**
 * SkillsSection Component
 * 
 * Features:
 * - Displays Management Skills first, followed by Technical Skills
 * - Interactive filter tabs (All, Management Skills, Technical Skills)
 * - 2-column interactive skills matrix with smooth origin-left hover expansion
 */
export default function SkillsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("management");

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

        // Animate Header
        if (headerRef.current) {
          tl.fromTo(
            headerRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            0
          );
        }

        // Animate Tabs
        if (tabsRef.current) {
          tl.fromTo(
            tabsRef.current.children,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", stagger: 0.1 },
            0.2
          );
        }

        // Animate Skills Container
        if (containerRef.current) {
          tl.fromTo(
            containerRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.05 },
            0.4
          );
        }
      }, sectionRef);
    } catch (err) {
      console.warn("SkillsSection GSAP error:", err);
    }
    return () => {
      try { if (ctx) ctx.revert(); } catch (_) {}
    };
  }, [activeTab]);

  const showManagement = activeTab === "management";
  const showTechnical = activeTab === "technical";

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full min-h-screen py-24 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden select-none transition-colors duration-300 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white"
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
          ARSENAL & EXPERTISE
        </span>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter italic uppercase transition-colors duration-300 text-gray-900 dark:text-white"
          style={{
            textShadow: "3px 3px 0px #AA0505, 5px 5px 0px #6A0C0B",
          }}
        >
          SKILLS
        </h2>
        <div className="w-16 h-1 rounded-full mt-1 transition-colors duration-300 bg-gradient-to-r from-[#AA0505] via-[#FBCA03] to-[#AA0505]"></div>
      </div>

      {/* Category Filter Tabs (Management & Technical) */}
      <div ref={tabsRef} className="relative z-20 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 max-w-xl mx-auto">

        <button
          type="button"
          onClick={() => setActiveTab("management")}
          title="Show Management & Leadership Skills"
          aria-label="Show Management & Leadership Skills"
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 active:scale-95 cursor-pointer border ${
            activeTab === "management"
              ? "bg-[#AA0505] text-white border-[#AA0505] shadow-md shadow-red-950/20"
              : "bg-white/90 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-zinc-800 hover:border-[#AA0505] hover:text-[#AA0505] dark:hover:text-[#AA0505]"
          }`}
        >
          MANAGEMENT SKILLS
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("technical")}
          title="Show Technical & Engineering Skills"
          aria-label="Show Technical & Engineering Skills"
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 active:scale-95 cursor-pointer border ${
            activeTab === "technical"
              ? "bg-[#AA0505] text-white border-[#AA0505] shadow-md shadow-red-950/20"
              : "bg-white/90 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-zinc-800 hover:border-[#AA0505] hover:text-[#AA0505] dark:hover:text-[#AA0505]"
          }`}
        >
          TECHNICAL SKILLS
        </button>
      </div>

      {/* Main Container */}
      <div ref={containerRef} className="relative z-20 max-w-4xl lg:max-w-5xl w-full mx-auto flex flex-col gap-12">
        {/* 1. Management Skills Sub-Section (First) */}
        {showManagement && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 border-b border-gray-200 dark:border-zinc-800 pb-3">
              <span className="w-3 h-3 rounded-full bg-[#B97D10] shadow-sm"></span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
                MANAGEMENT SKILLS
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4.5">
              {managementSkillsData.map((skill, index) => (
                <div
                  key={index}
                  title={`${skill.name} (${skill.category})`}
                  aria-label={`${skill.name} (${skill.category})`}
                  className="group relative backdrop-blur-sm border rounded-2xl p-4 md:p-4.5 flex items-center overflow-hidden transition-all duration-300 bg-white/90 dark:bg-zinc-900/90 border-gray-200/80 dark:border-zinc-800 shadow-md shadow-gray-200/40 dark:shadow-none hover:border-[#AA0505] hover:shadow-[0_8px_25px_rgba(170,5,5,0.2)] cursor-pointer"
                >
                  <div className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none rounded-2xl bg-gradient-to-r from-[#AA0505] to-[#6A0C0B]"></div>

                  <div className="relative z-10 flex items-center gap-3.5 min-w-0 flex-1">
                    <span className="w-3 h-3 rounded-full shrink-0 group-hover:bg-[#FBCA03] transition-colors duration-300 bg-[#B97D10]"></span>
                    <div className="flex flex-col items-start min-w-0">
                      <span className="font-extrabold text-sm md:text-base tracking-wide uppercase group-hover:text-white transition-colors duration-300 text-gray-900 dark:text-white leading-tight">
                        {skill.name}
                      </span>
                      <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider transition-colors duration-300 text-gray-400 group-hover:text-[#FBCA03] mt-0.5">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Technical Skills Sub-Section (Second) */}
        {showTechnical && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 border-b border-gray-200 dark:border-zinc-800 pb-3">
              <span className="w-3 h-3 rounded-full bg-[#AA0505] shadow-sm"></span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
                TECHNICAL SKILLS
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4.5">
              {technicalSkillsData.map((skill, index) => (
                <div
                  key={index}
                  title={`${skill.name} (${skill.category})`}
                  aria-label={`${skill.name} (${skill.category})`}
                  className="group relative backdrop-blur-sm border rounded-2xl p-4 md:p-4.5 flex items-center overflow-hidden transition-all duration-300 bg-white/90 dark:bg-zinc-900/90 border-gray-200/80 dark:border-zinc-800 shadow-md shadow-gray-200/40 dark:shadow-none hover:border-[#AA0505] hover:shadow-[0_8px_25px_rgba(170,5,5,0.2)] cursor-pointer"
                >
                  <div className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none rounded-2xl bg-gradient-to-r from-[#AA0505] to-[#6A0C0B]"></div>

                  <div className="relative z-10 flex items-center gap-3.5 min-w-0 flex-1">
                    <span className="w-3 h-3 rounded-full shrink-0 group-hover:bg-[#FBCA03] transition-colors duration-300 bg-[#AA0505]"></span>
                    <div className="flex flex-col items-start min-w-0">
                      <span className="font-extrabold text-sm md:text-base tracking-wide uppercase group-hover:text-white transition-colors duration-300 text-gray-900 dark:text-white leading-tight">
                        {skill.name}
                      </span>
                      <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider transition-colors duration-300 text-gray-400 group-hover:text-[#FBCA03] mt-0.5">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
