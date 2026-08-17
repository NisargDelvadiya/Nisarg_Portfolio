"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "@/context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: "HTML", category: "FRONTEND", level: "ADVANCED" },
  { name: "CSS", category: "FRONTEND", level: "ADVANCED" },
  { name: "WORDPRESS", category: "CMS & WEB", level: "ADVANCED" },
  { name: "FIGMA", category: "UI/UX DESIGN", level: "ADVANCED" },
  { name: "CANVA", category: "DESIGN TOOLS", level: "ADVANCED" },
  { name: "ADOBE PHOTOSHOP", category: "GRAPHICS & EDITING", level: "ADVANCED" },
  { name: "ADOBE PREMIERE PRO", category: "VIDEO EDITING", level: "ADVANCED" },
  { name: "ADOBE AFTER EFFECTS", category: "VFX & MOTION", level: "ADVANCED" },
  { name: "ADOBE ILLUSTRATOR", category: "VECTOR DESIGN", level: "ADVANCED" },
  { name: "AUTODESK MAYA", category: "3D MODELING", level: "ADVANCED" },
  { name: "BLENDER", category: "3D MODELING & VFX", level: "ADVANCED" },
  { name: "DAVINCI RESOLVE", category: "POST PRODUCTION", level: "BASIC" },
  { name: "PROMPT ENGINEERING", category: "AI & AUTOMATION", level: "ADVANCED" },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const webBgRef = useRef(null);
  const spideyRef = useRef(null);
  const cardsRef = useRef(null);
  const { isVenomMode } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hanging Spidey Pendulum Animation
      gsap.to(spideyRef.current, {
        rotation: 5,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "top center",
      });

      // 2. Background Web Slow Rotation
      gsap.to(webBgRef.current, {
        rotation: 360,
        duration: 50,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`relative w-full min-h-screen py-24 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden select-none transition-colors duration-300 ${
        isVenomMode ? "bg-[#0a0a10] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Background Rotating Web Accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          ref={webBgRef}
          src="/Assets/Web.png"
          alt="Background Spider Web"
          className={`w-[650px] md:w-[900px] h-[650px] md:h-[900px] object-contain opacity-15 mix-blend-multiply transition-all duration-300 ${
            isVenomMode ? "invert brightness-200" : ""
          }`}
        />
      </div>

      {/* Hanging Upside-Down Spider-Man Pendulum on the Right */}
      <div
        ref={spideyRef}
        className="absolute top-0 right-2 md:right-4 lg:right-6 z-30 pointer-events-none origin-top"
      >
        <img
          src="/Assets/spidey_gif_1.png"
          alt="Hanging Spider-Man"
          className={`w-32 md:w-40 lg:w-48 h-auto object-contain drop-shadow-2xl opacity-90 lg:opacity-100 transition-all duration-300 ${
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
            ARSENAL & EXPERTISE
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
          TECHNICAL SKILLS
        </h2>
        <div
          className={`w-16 h-1 rounded-full mt-1 transition-colors duration-300 ${
            isVenomMode ? "bg-purple-500" : "bg-[#a31515]"
          }`}
        ></div>
      </div>

      {/* Skills Grid Container */}
      <div
        ref={cardsRef}
        className="relative z-20 max-w-4xl lg:max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4.5"
      >
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`group relative backdrop-blur-sm border rounded-2xl p-3.5 md:p-4.5 flex items-center justify-between overflow-hidden cursor-pointer transition-all duration-150 active:scale-95 active:translate-y-0.5 ${
              isVenomMode
                ? "bg-[#12121c]/90 border-purple-900/50 shadow-md shadow-purple-950/40 hover:border-purple-500 hover:shadow-purple-950/60"
                : "bg-white/90 border-gray-200/80 shadow-md shadow-gray-200/40 hover:border-[#a31515] hover:shadow-red-900/15"
            }`}
          >
            {/* Smooth Color Fading Left-to-Right Hover Overlay */}
            <div
              className={`absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none rounded-2xl ${
                isVenomMode ? "bg-[#7e22ce]" : "bg-[#a31515]"
              }`}
            ></div>

            {/* Left Content: Dot + Skill Name & Category */}
            <div className="relative z-10 flex items-center gap-3.5">
              <span
                className={`w-3 h-3 rounded-full shrink-0 group-hover:bg-white transition-colors duration-300 ${
                  isVenomMode ? "bg-purple-500" : "bg-[#a31515]"
                }`}
              ></span>
              <div className="flex flex-col items-start">
                <span
                  className={`font-extrabold text-sm md:text-base tracking-wide uppercase group-hover:text-white transition-colors duration-300 ${
                    isVenomMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {skill.name}
                </span>
                <span
                  className={`font-bold text-[10px] md:text-xs uppercase tracking-wider transition-colors duration-300 ${
                    isVenomMode
                      ? "text-purple-300/70 group-hover:text-purple-100"
                      : "text-gray-400 group-hover:text-red-100"
                  }`}
                >
                  {skill.category}
                </span>
              </div>
            </div>

            {/* Right Content: Level Tag Pill */}
            <div className="relative z-10">
              <span
                className={`px-3.5 py-1.5 rounded-full border text-font-extrabold text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:border-black ${
                  isVenomMode
                    ? "border-purple-800/80 text-purple-300"
                    : "border-gray-200 text-gray-700"
                }`}
              >
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
