"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * AboutSection Component
 * 
 * Features:
 * - GSAP ScrollTrigger physics: entrance animation with bounce easing
 * - Hanging pendulum animation on profile portrait (Mahin.jpeg)
 * - Biography detailing full-stack engineering, Sarvam AI, Indology, and visionary leadership
 * - Interactive profile picture frame with zoom hover dynamics
 */
export default function AboutSection() {
  const sectionRef = useRef(null);
  const profileRef = useRef(null);
  const textContentRef = useRef(null);

  useEffect(() => {
    let ctx;
    try {
      ctx = gsap.context(() => {
        // Timeline triggered when scrolling into AboutSection
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });

        // 1. Drop down Main Profile Photo with bounce physics
        tl.fromTo(
          profileRef.current,
          { y: -450, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.4, ease: "bounce.out" },
          0
        );

        // 2. Slide in Left Text Content from the left
        tl.fromTo(
          textContentRef.current.children,
          { x: -120, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15 },
          0.2
        );

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
    } catch (err) {
      console.warn("AboutSection GSAP initialization error:", err);
    }

    return () => {
      try {
        if (ctx) ctx.revert();
      } catch (_) {}
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen py-24 px-6 md:px-12 lg:px-20 flex items-center justify-center overflow-hidden select-none transition-colors duration-300 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white"
    >
      {/* Blurred Background Photo (Fixed to Viewport for Natural Scale & Framing) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat md:bg-fixed filter blur-sm scale-105 opacity-75 select-none"
          style={{
            backgroundImage: "url('/Assets/2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/40 dark:from-black/95 dark:via-black/75 dark:to-black/50" />
      </div>

      {/* Main Section Content Container */}
      <div className="relative z-20 max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-12">
        {/* Left Side: Bio & Tech Stack Text */}
        <div ref={textContentRef} className="flex-1 flex flex-col items-start gap-6 max-w-xl">


          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none italic uppercase transition-colors duration-300 text-gray-900 dark:text-white"
            style={{
              textShadow: "3px 3px 0px #AA0505, 6px 6px 0px #6A0C0B",
            }}
          >
            NISARG JAYESH DELVADIYA
          </h2>

          <p className="font-medium text-sm md:text-base leading-relaxed transition-colors duration-300 text-gray-700 dark:text-gray-300">
            I’m Nisarg Jayesh Delvadiya — an entrepreneur, full-stack engineer, and visionary leader driven by building high-impact digital products and meaningful ventures. Combining deep expertise in modern web technologies like Next.js, React, Node.js, and GSAP with Indian AI innovations like Sarvam AI, I bridge robust engineering with strategic leadership, networking, and philanthropic purpose.
          </p>

          <p className="font-medium text-sm md:text-base leading-relaxed transition-colors duration-300 text-gray-700 dark:text-gray-300">
            Currently pursuing my B.Tech in Information Technology (IT) at Manipal University Jaipur (2024 – 2028), my journey is rooted in Indology, geopolitics, and patriotism, fueled by a passion for exploring and capturing Bharat through my own eyes. When I’m not architecting software or writing thoughtful blogs, you’ll find me analyzing global dynamics, enjoying cinema, driving, or diving into culinary arts.
          </p>


        </div>

        {/* Right Side: Hanging Profile Photo Pendulum */}
        <div className="flex-1 flex justify-center lg:justify-end translate-x-0 md:translate-x-4 lg:translate-x-8 lg:pr-6 relative w-full z-30">
          <div
            ref={profileRef}
            className="relative flex flex-col items-center pointer-events-auto opacity-0 origin-top"
          >
            {/* Hanging Thread Line */}
            <div className="w-[2px] h-16 md:h-20 lg:h-24 shadow-sm transition-colors duration-300 bg-[#AA0505]"></div>

            {/* College / Profile Picture Frame */}
            <div
              title="Manipal University Jaipur Campus (2024 – 2028)"
              aria-label="Manipal University Jaipur Campus (2024 – 2028)"
              className="group relative w-64 sm:w-80 md:w-96 lg:w-[26rem] h-64 sm:h-80 md:h-96 lg:h-[26rem] rounded-full p-2.5 sm:p-3 border-4 md:border-[5px] shadow-2xl cursor-pointer transition-all duration-300 bg-white dark:bg-zinc-950 border-[#AA0505] shadow-[0_20px_50px_rgba(106,12,11,0.3)]"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-[3px] border-[#FBCA03]/50 bg-gray-100 dark:bg-zinc-900">
                <Image
                  src="/Assets/Manipal_University_Jaipur.jpg"
                  alt="Manipal University Jaipur Campus"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 416px"
                  className="object-cover object-[center_60%] transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
