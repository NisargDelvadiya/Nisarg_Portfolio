import React from "react";
import { FaLocationArrow, FaGithub, FaHtml5 } from "react-icons/fa6";
import { SiNextdotjs, SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

/**
 * Helper function to map skill icon names to React Icons SVG components
 * @param {string} iconName - The tech stack key name (e.g. "nextjs", "mongodb")
 * @returns {JSX.Element|null} The corresponding React Icon component
 */
const renderSkillIcon = (iconName) => {
  const name = iconName.toLowerCase();
  if (name.includes("next")) {
    return <SiNextdotjs className="w-4 h-4 md:w-5 md:h-5 text-white" aria-label="Next.js" />;
  }
  if (name.includes("mongo")) {
    return <SiMongodb className="w-4 h-4 md:w-5 md:h-5 text-[#47A248]" aria-label="MongoDB" />;
  }
  if (name.includes("java") || name.includes("js")) {
    return <SiJavascript className="w-4 h-4 md:w-5 md:h-5 text-[#F7DF1E] bg-black rounded-sm" aria-label="JavaScript" />;
  }
  if (name.includes("tail")) {
    return <SiTailwindcss className="w-4 h-4 md:w-5 md:h-5 text-[#06B6D4]" aria-label="Tailwind CSS" />;
  }
  if (name.includes("html")) {
    return <FaHtml5 className="w-4 h-4 md:w-5 md:h-5 text-[#E34F26]" aria-label="HTML5" />;
  }
  if (name.includes("github")) {
    return <FaGithub className="w-4 h-4 md:w-5 md:h-5 text-white" aria-label="GitHub" />;
  }
  return null;
};

/**
 * @component RecentProjects
 * @description Showcase section displaying developer's top projects with 3D pin tilt effect on desktop,
 * vertical 1-column alignment on mobile/tablets/laptops (< 1280px), and 2-column side-by-side grid on wide screens.
 */
const RecentProjects = () => {
  return (
    <section className="py-20 relative w-full overflow-hidden" id="projects" aria-label="Recent Projects Section">
      {/* Section Heading */}
      <h2 className="heading text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h2>

      {/* Projects Grid Container (Stacked vertically 1-column on mobile/tablet/laptops < 1280px, 2-column on xl: >= 1280px) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 sm:gap-16 xl:gap-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 justify-items-center">
        {projects.map((projectItem) => (
          <div
            className="flex items-center justify-center w-full max-w-[92vw] sm:max-w-md md:max-w-lg xl:max-w-[32rem] min-h-[25rem] sm:min-h-[27rem] xl:min-h-[29.5rem]"
            key={projectItem.id}
          >
            {/* 3D Pin Container Wrapper */}
            <PinContainer
              title={projectItem.link}
              href={projectItem.link}
            >
              <div className="flex flex-col justify-between w-full h-full">
                {/* Project Preview Image Box (Uncropped Fully-Visible UI Photo) */}
                <div className="relative flex items-center justify-center w-full overflow-hidden h-44 sm:h-52 md:h-56 xl:h-60 mb-4 rounded-2xl border border-white/10 shadow-inner bg-[#13162D]">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-2xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img
                      src="/bg/bg.png"
                      alt="Project card background container"
                      aria-hidden="true"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  {/* 100% Fully Visible Uncropped UI Screenshot Photo */}
                  <img
                    src={projectItem.img}
                    alt={`${projectItem.title} Preview Screenshot`}
                    className="z-10 absolute inset-0 m-auto w-[96%] h-[96%] object-contain object-center rounded-xl transition-transform duration-300 group-hover/pin:scale-[1.02] drop-shadow-2xl"
                  />
                </div>

                {/* Project Title */}
                <h3 className="font-bold xl:text-2xl lg:text-xl md:text-lg text-base line-clamp-1 text-white max-w-full tracking-tight text-center sm:text-left">
                  {projectItem.title}
                </h3>

                {/* Project Description */}
                <p
                  className="xl:text-base lg:text-sm font-light text-xs line-clamp-3 my-2 sm:my-2.5 leading-relaxed text-center sm:text-left"
                  style={{ color: "#BEC1DD" }}
                >
                  {projectItem.des}
                </p>

                {/* Bottom Flex Container: Tech Icons & Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mt-4 mb-1 gap-3 w-full max-w-full">
                  {/* Tech Icons Stack */}
                  <div className="flex items-center justify-center shrink-0 ps-3" aria-label="Technologies used">
                    {projectItem.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-9 lg:h-9 xl:w-10 xl:h-10 w-8 h-8 flex justify-center items-center shadow-inner shrink-0"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                        title={icon}
                      >
                        {renderSkillIcon(icon)}
                      </div>
                    ))}
                  </div>

                  {/* Action Links (Source Code & Live Demo Buttons) */}
                  <div className="flex items-center justify-center gap-2 shrink-0 z-20">
                    {/* GitHub Source Code Button */}
                    <a
                      href={projectItem.github || "https://github.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View ${projectItem.title} Source Code on GitHub`}
                      aria-label={`View ${projectItem.title} Source Code on GitHub`}
                      className="flex justify-center items-center cursor-pointer px-3 sm:px-3.5 py-1.5 rounded-lg bg-[#10132E] border border-white/10 hover:border-purple/50 active:scale-95 active:bg-purple/20 text-purple text-xs md:text-sm font-semibold gap-1.5 transition-all duration-150 shadow-md group/btn whitespace-nowrap shrink-0"
                    >
                      <span className="whitespace-nowrap">Source Code</span>
                      <FaGithub className="w-3.5 h-3.5 text-white shrink-0 transition-transform group-hover/btn:scale-110" aria-hidden="true" />
                    </a>

                    {/* Live Site Demo Button */}
                    <a
                      href={projectItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${projectItem.title} Live Website`}
                      aria-label={`Visit ${projectItem.title} Live Website`}
                      className="flex justify-center items-center cursor-pointer px-3 sm:px-3.5 py-1.5 rounded-lg bg-[#10132E] border border-white/10 hover:border-purple/50 active:scale-95 active:bg-purple/20 text-purple text-xs md:text-sm font-semibold gap-1.5 transition-all duration-150 shadow-md group/btn whitespace-nowrap shrink-0"
                    >
                      <span className="whitespace-nowrap">Check Live Site</span>
                      <FaLocationArrow className="w-3 h-3 text-[#CBACF9] shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
