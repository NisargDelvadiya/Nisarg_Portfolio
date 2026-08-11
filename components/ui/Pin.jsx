"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * @component PinContainer
 * @description 3D Perspective Pin wrapper component. Renders 3D perspective tilt on desktop (lg:),
 * and static flat card on mobile/iPad (< lg) where click effects are scoped exclusively to inner action buttons.
 */
export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50 w-full flex items-center justify-center lg:cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Desktop 3D Pin View (lg screens and up) */}
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="hidden lg:block absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 sm:p-5 md:p-6 top-1/2 flex justify-start items-start rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.85)] border border-white/15 group-hover/pin:border-purple/60 transition duration-700 bg-[#04071D] bg-gradient-to-br from-[#04071D] via-[#0B0E23] to-[#04071D]"
        >
          <div className={cn("relative z-50 w-full", className)}>{children}</div>
        </div>
      </div>

      {/* Mobile & iPad View (< lg): Static Flat Card with NO card-level click/tap scaling effect */}
      <div className="block lg:hidden relative p-4 sm:p-5 md:p-6 rounded-3xl border border-white/15 w-full bg-[#04071D] bg-gradient-to-br from-[#04071D] via-[#0B0E23] to-[#04071D] shadow-[0_12px_40px_rgba(0,0,0,0.85)] select-none">
        <div className={cn("relative z-50 w-full", className)}>{children}</div>
      </div>

      {/* Desktop Pin Floating Perspective Title & Beam (lg screens and up) */}
      <div className="hidden lg:block pointer-events-none">
        <PinPerspective title={title} href={href} />
      </div>
    </div>
  );
};

export const PinPerspective = ({ title, href }) => {
  return (
    <motion.div className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 shadow-lg pointer-events-auto"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple/0 via-purple to-purple/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-purple/10 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-purple/10 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-purple/10 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-purple translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-purple translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-purple translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-white translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
