"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

const topSkills = [
  "WEB DESIGNER",
  "BLENDER",
  "HTML",
  "ADOBE AFTER EFFECTS",
  "WORDPRESS",
  "CSS",
  "VFX ARTIST",
  "FIGMA",
  "ADOBE PHOTOSHOP",
  "AUTODESK MAYA",
  "ADOBE PREMIERE PRO",
  "DAVINCI RESOLVE",
  "ADOBE ILLUSTRATOR",
  "PROMPT ENGINEERING",
  "CANVA",
];

const bottomSkills = [
  "VFX ARTIST",
  "ADOBE PHOTOSHOP",
  "HTML",
  "BLENDER",
  "ADOBE ILLUSTRATOR",
  "WEB DESIGNER",
  "CANVA",
  "AUTODESK MAYA",
  "WORDPRESS",
  "ADOBE AFTER EFFECTS",
  "DAVINCI RESOLVE",
  "CSS",
  "FIGMA",
  "PROMPT ENGINEERING",
  "ADOBE PREMIERE PRO",
];

export default function MarqueeBanner() {
  const { isVenomMode } = useTheme();

  const renderMarqueeItems = (skillsList, isDark = false) => {
    return (
      <div className="flex shrink-0 items-center h-full whitespace-nowrap">
        {skillsList.map((skill, index) => (
          <div key={index} className="flex shrink-0 items-center whitespace-nowrap">
            <span
              className={`mx-4 md:mx-6 text-sm md:text-base lg:text-xl font-black uppercase italic tracking-widest shrink-0 drop-shadow-sm whitespace-nowrap ${
                isVenomMode
                  ? isDark
                    ? "text-purple-400"
                    : "text-white"
                  : isDark
                  ? "text-[#a31515]"
                  : "text-white"
              }`}
            >
              {skill}
            </span>
            <img
              alt="Separator"
              className={`mx-4 md:mx-6 h-8 md:h-12 w-auto object-contain shrink-0 drop-shadow-md transition-all duration-300 ${
                isVenomMode ? "invert brightness-200" : ""
              }`}
              src="/Assets/Web.png"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      className={`relative w-full h-[20vh] md:h-[30vh] overflow-hidden flex items-center justify-center z-40 select-none transition-colors duration-300 ${
        isVenomMode ? "bg-[#050508]" : "bg-white"
      }`}
    >
      {/* Top Angled Banner (Rotated 3deg) */}
      <div
        className={`absolute w-[115vw] h-12 md:h-16 lg:h-20 border-y-[3px] rotate-[3deg] -translate-y-4 md:-translate-y-6 shadow-[0_10px_20px_rgba(0,0,0,0.4)] z-20 flex items-center overflow-hidden scale-105 transition-colors duration-300 ${
          isVenomMode
            ? "bg-[#7e22ce] border-purple-400 shadow-purple-950/50"
            : "bg-[#a31515] border-black"
        }`}
      >
        <div className="animate-marquee-left">
          {renderMarqueeItems(topSkills, false)}
          {renderMarqueeItems(topSkills, false)}
        </div>
      </div>

      {/* Bottom Angled Banner (Rotated -4deg) */}
      <div
        className={`absolute w-[115vw] h-12 md:h-16 lg:h-20 border-y-[3px] rotate-[-4deg] translate-y-4 md:translate-y-6 shadow-[0_5px_15px_rgba(0,0,0,0.5)] z-10 flex items-center overflow-hidden scale-105 transition-colors duration-300 ${
          isVenomMode
            ? "bg-[#0b0b14] border-purple-600 shadow-purple-950/80"
            : "bg-[#111111] border-[#a31515]"
        }`}
      >
        <div className="animate-marquee-right">
          {renderMarqueeItems(bottomSkills, true)}
          {renderMarqueeItems(bottomSkills, true)}
        </div>
      </div>
    </section>
  );
}
