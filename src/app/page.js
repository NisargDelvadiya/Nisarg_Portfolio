"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isVenomMode } = useTheme();

  return (
    <div
      className={`relative w-full min-h-screen font-sans select-none overflow-x-hidden transition-colors duration-300 ${
        isVenomMode ? "bg-[#050508] text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1} className="outline-none">
        <Hero />
        <MarqueeBanner />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperiencesSection />
      </main>
      <Footer />
      <AudioPlayer />
    </div>
  );
}
