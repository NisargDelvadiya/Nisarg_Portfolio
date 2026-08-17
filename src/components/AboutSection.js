"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "@/context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const leftWebRef = useRef(null);
  const rightWebRef = useRef(null);
  const profileRef = useRef(null);
  const textContentRef = useRef(null);
  const { isVenomMode } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline triggered when scrolling into AboutSection
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // 1. Drop down Left Web with bounce physics
      tl.fromTo(
        leftWebRef.current,
        { y: -350, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "bounce.out" },
        0
      );

      // 2. Drop down Right Web with bounce physics (staggered slightly)
      tl.fromTo(
        rightWebRef.current,
        { y: -350, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "bounce.out" },
        0.2
      );

      // 3. Drop down Main Profile Photo with bounce physics
      tl.fromTo(
        profileRef.current,
        { y: -450, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: "bounce.out" },
        0.4
      );

      // 4. Slide in Left Text Content from the left
      tl.fromTo(
        textContentRef.current.children,
        { x: -120, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15 },
        0.6
      );

      // Infinite web rotations after landing
      if (leftWebRef.current) {
        gsap.to(leftWebRef.current.querySelector(".web-img"), {
          rotation: 360,
          duration: 35,
          repeat: -1,
          ease: "none",
        });
      }

      if (rightWebRef.current) {
        gsap.to(rightWebRef.current.querySelector(".web-img"), {
          rotation: -360,
          duration: 40,
          repeat: -1,
          ease: "none",
        });
      }

      // Pendulum swing animation for main profile photo
      if (profileRef.current) {
        gsap.to(profileRef.current, {
          rotation: 3,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformOrigin: "top center",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative w-full min-h-screen py-24 px-6 md:px-12 lg:px-20 flex items-center justify-center overflow-hidden select-none transition-colors duration-300 ${
        isVenomMode ? "bg-[#07070c] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Hanging Left Spider Web with Line extending up */}
      <div
        ref={leftWebRef}
        className="absolute top-0 left-4 md:left-12 z-0 flex flex-col items-center pointer-events-none opacity-0"
      >
        <div
          className={`w-[1px] h-48 md:h-72 transition-colors duration-300 ${
            isVenomMode ? "bg-purple-900/60" : "bg-gray-200/90"
          }`}
        ></div>
        <img
          src="/Assets/Web.png"
          alt="Spider Web Left"
          className={`web-img w-52 md:w-64 h-52 md:h-64 object-contain opacity-20 mix-blend-multiply -mt-20 transition-all duration-300 ${
            isVenomMode ? "invert brightness-200" : ""
          }`}
        />
      </div>

      {/* Hanging Right Spider Web with Line extending up */}
      <div
        ref={rightWebRef}
        className="absolute top-0 right-4 md:right-12 z-0 flex flex-col items-center pointer-events-none opacity-0"
      >
        <div
          className={`w-[1px] h-40 md:h-64 transition-colors duration-300 ${
            isVenomMode ? "bg-purple-900/60" : "bg-gray-200/90"
          }`}
        ></div>
        <img
          src="/Assets/Web.png"
          alt="Spider Web Right"
          className={`web-img w-60 md:w-72 h-60 md:h-72 object-contain opacity-20 mix-blend-multiply -mt-24 transition-all duration-300 ${
            isVenomMode ? "invert brightness-200" : ""
          }`}
        />
      </div>

      {/* Main Section Content Container */}
      <div className="relative z-20 max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-12">
        {/* Left Side: Bio & Tech Stack Text */}
        <div ref={textContentRef} className="flex-1 flex flex-col items-start gap-6 max-w-xl">
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
              BEHIND THE MASK
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none italic uppercase whitespace-normal sm:whitespace-nowrap transition-colors duration-300 ${
              isVenomMode ? "text-white" : "text-gray-900"
            }`}
            style={{
              textShadow: isVenomMode
                ? "3px 3px 0px #7e22ce, 6px 6px 0px #581c87"
                : "3px 3px 0px #ef4444, 6px 6px 0px #a31515",
            }}
          >
            MAHIN GUNJAL
          </h2>

          <p
            className={`font-medium text-sm md:text-base leading-relaxed transition-colors duration-300 ${
              isVenomMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I’m Mahin Gunjal, a passionate Web Designer and VFX Artist pursuing my Bachelor’s degree at ITM SLS Baroda University. I specialize in creating modern, responsive, and visually engaging websites that combine clean UI/UX design with interactive digital experiences.
          </p>

          <p
            className={`font-medium text-sm md:text-base leading-relaxed transition-colors duration-300 ${
              isVenomMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Alongside my web design journey, I am currently pursuing a VFX course at ZICA (Zee Institute of Creative Art), developing skills in visual effects, motion graphics, compositing, video editing, 3D design, and digital storytelling.
          </p>

          {/* Primary Tech Stack */}
          <div className="w-full pt-3 flex flex-col items-start gap-3">
            <span
              className={`font-bold uppercase text-xs tracking-widest transition-colors duration-300 ${
                isVenomMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              PRIMARY TECH STACK
            </span>
            <div className="flex flex-wrap gap-2.5">
              {[
                "HTML",
                "CSS",
                "Wordpress",
                "Figma",
                "Canva",
                "Adobe Photoshop",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Adobe Illustrator",
                "Autodesk Maya",
                "Blender",
                "Davinci Resolve",
                "Prompt Engineering",
              ].map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-2xl border font-bold text-xs tracking-wide shadow-sm active:scale-95 active:translate-y-0.5 cursor-pointer transition-all duration-150 ${
                    isVenomMode
                      ? "border-purple-800/80 bg-purple-950/40 text-purple-300 hover:border-purple-400 hover:text-white"
                      : "border-red-200 bg-white text-[#a31515] hover:border-[#a31515]"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Hanging Profile Photo Pendulum */}
        <div className="flex-1 flex justify-center lg:justify-center -translate-x-6 md:-translate-x-12 lg:-translate-x-20 relative w-full z-30">
          <div
            ref={profileRef}
            className="relative flex flex-col items-center pointer-events-auto opacity-0 origin-top"
          >
            {/* Hanging Thread Line */}
            <div
              className={`w-[1.5px] h-28 md:h-36 shadow-sm transition-colors duration-300 ${
                isVenomMode ? "bg-purple-600" : "bg-[#a31515]"
              }`}
            ></div>

            {/* Profile Picture Frame */}
            <div
              className={`group relative w-56 md:w-72 h-56 md:h-72 rounded-full p-2 border-4 shadow-2xl cursor-pointer transition-all duration-300 ${
                isVenomMode
                  ? "bg-purple-950 border-purple-600 shadow-purple-950/50"
                  : "bg-white border-[#a31515] shadow-red-900/20"
              }`}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-100/10 bg-gray-100">
                <img
                  src="/Assets/Mahin.jpeg"
                  alt="Mahin Gunjal Profile"
                  className={`w-full h-full object-cover object-center transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110 ${
                    isVenomMode
                      ? "grayscale-0 lg:grayscale contrast-125 brightness-90 lg:group-hover:brightness-100"
                      : "grayscale-0 lg:grayscale contrast-110"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
