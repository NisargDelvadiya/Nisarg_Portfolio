"use client";

import React from "react";
import Image from "next/image";

/**
 * Marquee skills dataset in exact requested order
 */
const marqueeSkills = [
  "SARVAM AI",
  "LEADERSHIP",
  "COMMUNICATION",
  "NETWORKING",
  "NEXT.JS",
  "REACT.JS",
  "NODEMAILER",
  "CLERK",
  "PAYLOAD CMS",
  "MONGOOSE ODM",
  "MONGODB",
  "NODE.JS",
  "GREENSOCK ANIMATION PLATFORM (GSAP)",
  "JAVASCRIPT",
  "SHADCN",
  "TAILWIND CSS",
  "HTML5",
  "GITHUB",
  "GOOGLE ANTIGRAVITY",
  "MICROSOFT VS CODE",
  "JAVA",
  "BLOGGING",
  "INDOLOGY",
  "SANSKRIT",
  "HINDI",
  "GUJARATI",
  "ENGLISH",
  "FLUTE",
  "MALLAYUDHA",
  "BHARATIYA HISTORY",
  "CINEPHILE FOR BHARATIYA CINEMA",
  "COOKING",
  "DRIVING CAR",
  "TRAVELLING BHARAT ALONG CAPTURING WITH MY EYES",
  "GEOPOLITICS",
  "PATRIOT",
];

const topSkills = marqueeSkills;
const bottomSkills = [...marqueeSkills].reverse();

/**
 * MarqueeBanner Component
 * 
 * Features:
 * - High-speed dual opposing animated ticker bands with 3D rotation angles (+3deg and -4deg)
 * - Infinite looping seamless marquee CSS animation with hardware GPU acceleration
 * - Spidey web logo separator icons between skill badges
 */
export default function MarqueeBanner() {
  /**
   * Helper function to render repeated list of items in the marquee track
   */
  const renderMarqueeItems = (skillsList, isDark = false) => {
    return (
      <div className="flex shrink-0 items-center h-full whitespace-nowrap">
        {skillsList.map((skill, index) => (
          <div key={index} className="flex shrink-0 items-center whitespace-nowrap">
            <span
              className={`mx-4 md:mx-6 text-sm md:text-base lg:text-xl font-black uppercase italic tracking-widest shrink-0 drop-shadow-sm whitespace-nowrap ${
                isDark ? "text-[#FBCA03]" : "text-white"
              }`}
            >
              {skill}
            </span>
            <Image
              alt="Iron Man Mask Separator"
              className="mx-3 md:mx-5 h-6 md:h-9 w-auto object-contain shrink-0 drop-shadow-md transition-all duration-300"
              src="/Assets/Iron_Man_Mask.png"
              width={36}
              height={36}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="relative w-full h-[20vh] md:h-[30vh] overflow-hidden flex items-center justify-center z-40 select-none">
      {/* Top Half: Extends Hero Background (1.jpg: Hall of Armor) */}
      <div className="absolute top-0 inset-x-0 h-1/2 pointer-events-none z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-bottom bg-no-repeat filter blur-sm scale-105 opacity-80 select-none"
          style={{
            backgroundImage: "url('/Assets/1.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-white/20 dark:from-black/90 dark:via-black/60 dark:to-black/30" />
      </div>

      {/* Bottom Half: Extends About Section Background (2.jpg) */}
      <div className="absolute bottom-0 inset-x-0 h-1/2 pointer-events-none z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-top bg-no-repeat md:bg-fixed filter blur-sm scale-105 opacity-75 select-none"
          style={{
            backgroundImage: "url('/Assets/2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/40 dark:from-black/95 dark:via-black/75 dark:to-black/50" />
      </div>

      {/* Top Angled Banner (Rotated 3deg) */}
      <div className="absolute w-[115vw] h-12 md:h-16 lg:h-20 border-y-[3px] rotate-[3deg] -translate-y-4 md:-translate-y-6 shadow-[0_10px_20px_rgba(106,12,11,0.4)] z-20 flex items-center overflow-hidden scale-105 transition-colors duration-300 bg-[#AA0505] border-[#6A0C0B]">
        <div className="animate-marquee-left">
          {renderMarqueeItems(topSkills, false)}
          {renderMarqueeItems(topSkills, false)}
        </div>
      </div>

      {/* Bottom Angled Banner (Rotated -4deg) */}
      <div className="absolute w-[115vw] h-12 md:h-16 lg:h-20 border-y-[3px] rotate-[-4deg] translate-y-4 md:translate-y-6 shadow-[0_8px_20px_rgba(0,0,0,0.5)] z-10 flex items-center overflow-hidden scale-105 transition-colors duration-300 bg-[#6A0C0B] border-[#B97D10]">
        <div className="animate-marquee-right">
          {renderMarqueeItems(bottomSkills, true)}
          {renderMarqueeItems(bottomSkills, true)}
        </div>
      </div>
    </section>
  );
}
