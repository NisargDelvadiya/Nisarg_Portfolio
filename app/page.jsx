"use client";

import { useEffect } from "react";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

/**
 * @component Home
 * @description Main entry page for Nisarg Delvadiya's Developer Portfolio.
 * Configures manual scroll restoration on mount and renders Hero, Bento Grid, Recent Projects,
 * Work Experience, and Footer links.
 */
const Home = () => {
  // Ensure smooth top scroll position on page load / refresh
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto px-4 sm:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-7xl w-full">
        {/* Hero Section */}
        <Hero />

        {/* Bento Grid (About Section) */}
        <Grid />

        {/* Recent Projects Showcase */}
        <RecentProjects />

        {/* Work Experience */}
        <Experience />

        {/* Footer Links & Contact Details */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
