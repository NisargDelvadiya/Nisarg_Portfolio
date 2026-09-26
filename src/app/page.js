"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import SectionDivider from "@/components/SectionDivider";

// Dynamically loaded client-only background modules (deferred from critical path)
const AudioPlayer = dynamic(() => import("@/components/AudioPlayer"), {
  ssr: false,
});
const SectionNavigation = dynamic(() => import("@/components/SectionNavigation"), {
  ssr: false,
});

/**
 * Home Page (Root Landing Page)
 * 
 * Aggregates all interactive portfolio components with ErrorBoundary fault isolation:
 * - Navbar: Sticky navigation header
 * - Hero: Interactive cursor mask reveal hero with resume download
 * - MarqueeBanner: High-speed dual skill tickers
 * - AboutSection: Bio, academic credentials, and interactive tech stack
 * - SkillsSection: Visual skills matrix with pendulum animations
 * - ProjectsSection: Interactive showcase of featured web & SaaS projects
 * - ExperiencesSection: Vertical milestone journey timeline
 * - Footer: Email clipboard copy, legal links, Google translate selector, and DPDP cookie modal
 * - AudioPlayer: Background theme audio controller
 * - SectionNavigation: Up/down arrow key shortcuts
 * 
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <div
      className="relative w-full min-h-screen font-sans select-none overflow-x-hidden transition-colors duration-300 bg-white text-gray-900"
    >
      <ErrorBoundary sectionName="Navigation Bar">
        <Navbar />
      </ErrorBoundary>

      <main id="main-content" role="main" tabIndex={-1} className="outline-none">
        <ErrorBoundary sectionName="Hero Banner">
          <Hero />
        </ErrorBoundary>

        <ErrorBoundary sectionName="Marquee Skills Banner">
          <MarqueeBanner />
        </ErrorBoundary>

        <ErrorBoundary sectionName="About Section">
          <AboutSection />
        </ErrorBoundary>

        <SectionDivider />

        <ErrorBoundary sectionName="Skills Matrix">
          <SkillsSection />
        </ErrorBoundary>

        <SectionDivider />

        <ErrorBoundary sectionName="Projects Section">
          <ProjectsSection />
        </ErrorBoundary>

        <SectionDivider />

        <ErrorBoundary sectionName="Experiences Timeline">
          <ExperiencesSection />
        </ErrorBoundary>
      </main>

      <SectionDivider />

      <ErrorBoundary sectionName="Footer & Contact">
        <Footer />
      </ErrorBoundary>

      <ErrorBoundary sectionName="Audio Player">
        <AudioPlayer />
      </ErrorBoundary>

      <ErrorBoundary sectionName="Section Navigation Controls">
        <SectionNavigation />
      </ErrorBoundary>
    </div>
  );
}
