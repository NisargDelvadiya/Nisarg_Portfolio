"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "@/context/ThemeContext";

/**
 * Career timeline and milestones dataset
 */
const experiencesData = [
  {
    role: "Web Designer & WordPress Developer",
    company: "Rajarshi Solutions",
    duration: "1 Year | Internship",
    description:
      "Worked as a Web Designer and WordPress Developer, contributing to the design, development, customization, and maintenance of responsive websites. Worked extensively with WordPress, Elementor, HTML, CSS, and frontend technologies, creating user-friendly layouts and optimizing UX.",
    tags: ["WordPress", "Elementor", "HTML", "CSS", "UI/UX"],
  },
  {
    role: "WordPress Developer Intern",
    company: "MySphere Infotech",
    duration: "3 Months | Internship",
    description:
      "Worked as a WordPress Developer Intern, gaining hands-on experience in website development and customization. Worked with WordPress, PHP, HTML, and CSS to modify website components, customize layouts, fix design issues, and implement client requirements.",
    tags: ["WordPress", "PHP", "HTML", "CSS", "Customization"],
  },
  {
    role: "Chef",
    company: "Santushti",
    duration: "3 Months",
    description:
      "Gained practical experience in food preparation, kitchen operations, time management, teamwork, and maintaining quality standards. Developed discipline, responsibility, coordination, and high-efficiency performance in a fast-paced environment.",
    tags: ["Time Management", "Teamwork", "Operations", "Discipline"],
  },
  {
    role: "Core Member — Explora Club",
    company: "ITM SLS Baroda University",
    duration: "Semester 3–4 | ITMBU",
    description:
      "Actively contributed to the planning, coordination, and execution of college events and educational activities. Collaborated with team members to organize engaging events, manage activities, and support smooth event operations.",
    tags: ["Leadership", "Event Management", "Communication", "Teamwork"],
  },
  {
    role: "Office Administrative",
    company: "Baroda Public School",
    duration: "2 Months",
    description:
      "Managed reception and front-desk operations while supporting day-to-day administrative activities. Managed data entry, documentation, tele-calling, filing, office supply management, and test invigilation.",
    tags: ["Administration", "Data Entry", "Documentation", "Multitasking"],
  },
];

/**
 * ExperiencesSection Component
 * 
 * Features:
 * - Alternating left/right vertical timeline connected by a central glowing web thread
 * - Chronological work experience, internships, leadership roles & administrative experience
 * - Interactive cards with subtle scale feedback on click
 * - Smooth theme synchronization for Spider-Man / Venom styles
 */
export default function ExperiencesSection() {
  const sectionRef = useRef(null);
  const webBgRef = useRef(null);
  const { isVenomMode } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background web rotation
      gsap.to(webBgRef.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experiences"
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
          className={`w-[700px] md:w-[1000px] h-[700px] md:h-[1000px] object-contain opacity-10 mix-blend-multiply transition-all duration-300 ${
            isVenomMode ? "invert brightness-200" : ""
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
            className={`font-black uppercase text-xs md:text-sm tracking-[0.25em] transition-colors duration-300 ${
              isVenomMode ? "text-purple-400" : "text-[#a31515]"
            }`}
          >
            JOURNEY & MILESTONES
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
          EXPERIENCES
        </h2>
        <div
          className={`w-16 h-1 rounded-full mt-1 transition-colors duration-300 ${
            isVenomMode ? "bg-purple-500" : "bg-[#a31515]"
          }`}
        ></div>
      </div>

      {/* Timeline Container */}
      <div className="relative z-20 max-w-5xl w-full flex flex-col gap-6 md:gap-8">
        {/* Central Vertical Spider Web Thread Line (Desktop) */}
        <div
          className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block transition-all duration-300 ${
            isVenomMode
              ? "bg-gradient-to-b from-purple-600 via-purple-900/50 to-purple-600"
              : "bg-gradient-to-b from-[#a31515] via-gray-300 to-[#a31515]"
          }`}
        ></div>

        {experiencesData.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center w-full ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Center Node Badge */}
              <div
                className={`absolute left-4 md:left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center justify-center w-8 h-8 rounded-full border-2 shadow-md transition-colors duration-300 ${
                  isVenomMode
                    ? "bg-[#0b0b12] border-purple-500 shadow-purple-950/60"
                    : "bg-white border-[#a31515]"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    isVenomMode ? "bg-purple-500" : "bg-[#a31515]"
                  }`}
                ></div>
              </div>

              {/* Card Container */}
              <div className="w-full md:w-1/2 px-0 md:px-8">
                <div
                  className={`group relative backdrop-blur-sm border-2 rounded-2xl p-6 md:p-7 flex flex-col gap-4 overflow-hidden cursor-pointer transition-all duration-150 active:scale-95 active:translate-y-0.5 ${
                    isVenomMode
                      ? "bg-[#12121c]/90 border-purple-900/50 shadow-lg shadow-purple-950/40 hover:border-purple-500 hover:shadow-purple-950/60"
                      : "bg-white/95 border-gray-200/80 shadow-lg shadow-gray-200/40 hover:border-[#a31515] hover:shadow-red-900/15"
                  }`}
                >
                  {/* Top Header: Role & Duration Pill */}
                  <div
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b transition-colors duration-300 ${
                      isVenomMode ? "border-purple-900/40" : "border-gray-100"
                    }`}
                  >
                    <div>
                      <h3
                        className={`font-black text-lg md:text-xl uppercase tracking-tight transition-colors duration-300 ${
                          isVenomMode
                            ? "text-white group-hover:text-purple-400"
                            : "text-gray-900 group-hover:text-[#a31515]"
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <span
                        className={`font-extrabold text-xs md:text-sm tracking-wide transition-colors duration-300 ${
                          isVenomMode ? "text-purple-400" : "text-[#a31515]"
                        }`}
                      >
                        {exp.company}
                      </span>
                    </div>
                    <span
                      className={`self-start sm:self-center px-3 py-1 rounded-full border font-extrabold text-[10px] md:text-xs tracking-wider uppercase shrink-0 transition-colors duration-300 ${
                        isVenomMode
                          ? "border-purple-800/80 bg-purple-950/60 text-purple-300"
                          : "border-red-200 bg-red-50/60 text-[#a31515]"
                      }`}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description Paragraph */}
                  <p
                    className={`font-medium text-xs md:text-sm leading-relaxed transition-colors duration-300 ${
                      isVenomMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {exp.description}
                  </p>

                  {/* Tech / Skills Pill Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-2.5 py-1 rounded-xl border font-bold text-[10px] md:text-xs tracking-wide uppercase transition-colors duration-300 ${
                          isVenomMode
                            ? "border-purple-800/60 bg-purple-950/40 text-purple-300 group-hover:border-purple-400 group-hover:text-white"
                            : "border-gray-200 bg-gray-50/60 text-gray-700 group-hover:border-red-200 group-hover:text-[#a31515]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
