import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

/**
 * @component Hero
 * @description Hero Section component featuring ambient Spotlight effects, animated text generation,
 * personal intro paragraph, and a call-to-action button linking to the About section.
 */
const Hero = () => {
  return (
    <section className="pb-10 pt-20 md:pt-28 relative" id="hero" aria-label="Hero Section">
      {/* Ambient Spotlight Lighting Effects */}
      <div aria-hidden="true" className="pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Grid Pattern Background Layer */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        {/* Radial Mask for smooth edge fading */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero Content Container */}
      <div className="flex justify-center relative mt-4 md:mt-6 mb-12 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col items-center justify-center">
          {/* Greeting Header */}
          <p className="uppercase tracking-widest text-xs sm:text-sm md:text-base lg:text-lg font-bold text-center text-blue-100">
            Namaste!<br /> Welcome to My Portfolio Website
          </p>

          {/* Dynamic Animated Headline */}
          <TextGenerateEffect
            words="Your's Friendly Neighbourhood Next.js-Man"
            className="text-center text-[28px] sm:text-[40px] md:text-5xl lg:text-6xl"
          />

          {/* Intro Description */}
          <p className="text-center md:tracking-wider mb-4 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white-100 leading-relaxed sm:leading-normal">
            Hi, I&apos;m Nisarg — a Next.js Developer crafting fast, responsive, and SEO-optimized web applications. From concept to deployment, I build secure, seamless, scalable and high-impact digital experiences from server architecture to premium UI/UX.
          </p>

          {/* Call-to-Action Button */}
          <a
            href="#about"
            className="mt-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple rounded-xl"
            title="Explore About Section"
            aria-label="Scroll to About section"
          >
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow aria-hidden="true" />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
