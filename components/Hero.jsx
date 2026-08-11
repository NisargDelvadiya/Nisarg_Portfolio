import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

/**
 * @component Hero
 * @description Clean, high-impact Hero Section featuring animated headline, personal developer intro,
 * and call-to-action button linking to the About section.
 */
const Hero = () => {
  return (
    <section className="pb-10 pt-20 md:pt-28 relative w-full" id="hero" aria-label="Hero Section">
      {/* Hero Content Container */}
      <div className="flex justify-center relative mt-4 md:mt-6 mb-12 z-10 w-full">
        <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl flex flex-col items-center justify-center px-4 sm:px-6">
          {/* Greeting Header */}
          <p className="uppercase tracking-widest text-xs sm:text-sm md:text-base lg:text-lg font-bold text-center text-blue-100 mb-2">
            Namaste!<br /> Welcome to My Portfolio Website
          </p>

          {/* Dynamic Animated Headline */}
          <TextGenerateEffect
            words="Your's Friendly Neighbourhood Next.js-Man"
            className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight"
          />

          {/* Intro Description */}
          <p className="text-center md:tracking-wider mb-6 mt-4 max-w-3xl lg:max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white-100 leading-relaxed sm:leading-relaxed">
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
