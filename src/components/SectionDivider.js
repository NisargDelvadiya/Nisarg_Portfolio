"use client";

/**
 * SectionDivider Component
 * 
 * Renders a crisp, clean horizontal divider line between sections
 * to cleanly demarcate background photos and prevent blurry gradient seams.
 */
export default function SectionDivider({ className = "" }) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`relative z-30 w-full h-[1.5px] bg-gray-300 select-none ${className}`}
    />
  );
}
