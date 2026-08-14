import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import dynamic from "next/dynamic";

// Dynamic import for Lottie animation to optimize client-side bundle size
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

import { cn } from "@/lib/utils";
import GridGlobe from "./GridGlobe";
import { leftLists, rightLists } from "@/data";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

/**
 * @component BentoGrid
 * @description Container component that renders a responsive grid system for Bento cards.
 */
export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * @component BentoGridItem
 * @description Individual card component in the Bento Grid. Renders customized content
 * based on card ID (Globe, Tech Stack, University, Profile Avatar, Contact CTA).
 */
export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}) => {
  const [copied, setCopied] = useState(false);

  // Lottie confetti options for email copy feedback
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  /**
   * Copies developer email address to user clipboard and triggers confetti
   */
  const handleCopy = () => {
    const text = "nisarg.delvadiya1@zohomail.in";
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Background Image Container */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0">
          {img && (
            <img
              src={img}
              alt={title || "Bento visual"}
              className={cn("object-cover object-center", imgClassName)}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 pointer-events-none z-0 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt="Bento background overlay"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {/* Card Body Content */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* Card Description */}
          {description && (
            <div
              className={cn(
                "font-sans font-normal max-w-full md:text-sm lg:text-base text-xs text-[#C1C2D3] z-10",
                id === 4 &&
                  "text-white/90 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]"
              )}
            >
              {description}
            </div>
          )}

          {/* Card Title */}
          {title && (
            <div
              className={cn(
                "font-sans text-base sm:text-lg lg:text-3xl font-bold z-10 text-white",
                id === 1 && "max-w-[85%] sm:max-w-[75%] lg:max-w-[65%] pb-16 sm:pb-0",
                id === 3 && "max-w-[42%] sm:max-w-[45%] md:max-w-[48%] lg:max-w-[50%]",
                id === 4 && "drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] max-w-96"
              )}
            >
              {title}
            </div>
          )}

          {/* Card 1: Service Contract Download Button (Positioned cleanly at bottom left) */}
          {id === 1 && (
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-20">
              <a
                href="/about/Website Development Service Contract (Version 1).pdf"
                download="Website_Development_Service_Contract.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Website Development Service Contract PDF"
                aria-label="Download Website Development Service Contract PDF"
                className="cursor-pointer focus:outline-none"
              >
                <MagicButton
                  title="T&C for My Service"
                  icon={<FaDownload aria-hidden="true" />}
                  position="right"
                  containerClassName="!mt-0"
                  otherClasses="bg-[#161A31] text-xs md:text-sm font-semibold px-4 sm:px-5 py-2.5"
                />
              </a>
            </div>
          )}

          {/* Card 2: Interactive 3D GitHub Globe */}
          {id === 2 && <GridGlobe />}

          {/* Card 3: Two-column Staggered Tech Stack Badges */}
          {id === 3 && (
            <div className="flex gap-2 sm:gap-3 lg:gap-4 w-fit absolute right-3 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20">
              {/* Left Tech Column */}
              <div className="flex flex-col gap-2 lg:gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-1.5 sm:py-2 px-2.5 sm:px-3 text-xs sm:text-xs lg:text-sm opacity-90 lg:opacity-100 rounded-lg text-center bg-[#10132E] whitespace-nowrap text-white font-medium shadow-md border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {/* Right Tech Column (Offset Downward) */}
              <div className="flex flex-col gap-2 lg:gap-3 mt-3">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-1.5 sm:py-2 px-2.5 sm:px-3 text-xs sm:text-xs lg:text-sm opacity-90 lg:opacity-100 rounded-lg text-center bg-[#10132E] whitespace-nowrap text-white font-medium shadow-md border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Card 5: Profile Photo & Download Resume Button */}
          {id === 5 && (
            <>
              {/* Dark subtle overlay */}
              <div className="absolute inset-0 bg-black-100/10 pointer-events-none rounded-3xl" />

              <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 z-20 relative py-6 px-4">
                {/* Profile Photo Avatar */}
                <div className="relative group flex-shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple via-violet-600 to-indigo-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-purple/60 bg-[#10132E] flex items-center justify-center shadow-2xl">
                    <img
                      src="/about/profile_pic.jpeg"
                      alt="Nisarg Profile Photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Download Resume Button */}
                <div className="flex items-center justify-center z-20 flex-shrink-0">
                  <a
                    href="/about/Nisarg_Resume.pdf"
                    download="Nisarg_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Download Nisarg's Resume PDF"
                    aria-label="Download Nisarg's Resume PDF"
                    className="z-20 cursor-pointer focus:outline-none"
                  >
                    <MagicButton
                      title="Download Resume"
                      icon={<FaDownload aria-hidden="true" />}
                      position="right"
                      containerClassName="!mt-0"
                      otherClasses="bg-[#161A31] text-base font-semibold px-8 py-3"
                    />
                  </a>
                </div>
              </div>
            </>
          )}

          {/* Card 6: Copy Email CTA Button */}
          {id === 6 && (
            <div className="mt-5 relative z-20">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "hidden"
                }`}
              >
                {copied && (
                  <Lottie options={defaultOptions} height={200} width={400} />
                )}
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline aria-hidden="true" />}
                position="left"
                handleClick={handleCopy}
                otherClasses="bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
