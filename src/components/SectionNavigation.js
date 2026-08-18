"use client";

import { useEffect } from "react";

/**
 * Ordered landmark section IDs for keyboard arrow navigation
 */
const SECTION_IDS = [
  "main-content",
  "about",
  "skills",
  "projects",
  "experiences",
  "contact",
];

/**
 * SectionNavigation Component
 * 
 * Provides keyboard shortcut accessibility:
 * - Up Arrow (↑): Scrolls up smoothly to previous portfolio section
 * - Down Arrow (↓): Scrolls down smoothly to next portfolio section
 * Automatically ignores input elements and textarea fields to prevent conflict.
 * 
 * @returns {null} Invisible listener component
 */
export default function SectionNavigation() {
  useEffect(() => {
    let isNavigating = false;

    const navigateToSection = (direction) => {
      const scrollPos = window.scrollY + 150; // Offset buffer for sticky header

      // Find valid section elements
      const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

      if (sections.length === 0) return;

      // Find current section index based on scroll position
      let currentIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const top = sections[i].offsetTop;
        if (scrollPos >= top) {
          currentIndex = i;
        }
      }

      let targetIndex = currentIndex;
      if (direction === "down") {
        targetIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else if (direction === "up") {
        // If we are slightly below the top of current section, scroll to top of current section first or previous
        const currentTop = sections[currentIndex].offsetTop;
        if (window.scrollY - currentTop > 80) {
          targetIndex = currentIndex;
        } else {
          targetIndex = Math.max(currentIndex - 1, 0);
        }
      }

      if (sections[targetIndex]) {
        isNavigating = true;
        sections[targetIndex].scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          isNavigating = false;
        }, 800);
      }
    };

    const handleKeyDown = (e) => {
      // Ignore if user is typing inside form inputs
      const target = e.target;
      const isInput =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable);

      if (isInput) return;

      if (e.key === "ArrowDown" || e.code === "ArrowDown") {
        e.preventDefault();
        navigateToSection("down");
      } else if (e.key === "ArrowUp" || e.code === "ArrowUp") {
        e.preventDefault();
        navigateToSection("up");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
