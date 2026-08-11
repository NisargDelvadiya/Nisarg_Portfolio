"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - (scrollYProgress.getPrevious() || 0);

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <div className="fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 z-[5000] pointer-events-none">
        <motion.nav
          aria-label="Main Navigation"
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "pointer-events-auto flex max-w-[95vw] sm:max-w-fit px-3 sm:px-8 py-2.5 sm:py-4 rounded-full items-center justify-center space-x-1 sm:space-x-4",
            className
          )}
        style={{
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
          backgroundColor: "rgba(17, 25, 40, 0.55)",
          borderRadius: "9999px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 0 30px rgba(203, 172, 249, 0.08), inset 0 0 20px rgba(255, 255, 255, 0.03)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            aria-label={navItem.name}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 hover:text-purple transition-colors duration-200 px-2 sm:px-3 py-1.5 rounded-md active:scale-95 focus-visible:outline-none"
            )}
          >
            <span className="block sm:hidden text-xs" aria-hidden="true">{navItem.icon}</span>
            <span className="text-xs sm:text-sm font-bold !cursor-pointer hover:text-purple whitespace-nowrap">{navItem.name}</span>
          </Link>
        ))}
      </motion.nav>
      </div>
    </AnimatePresence>
  );
};
