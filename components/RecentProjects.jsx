import React from "react";
import { FaLocationArrow, FaGithub, FaHtml5 } from "react-icons/fa6";
import { SiNextdotjs, SiMongodb, SiJavascript, SiTailwindcss, SiReact, SiMongoose } from "react-icons/si";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

/**
 * Helper function to map skill icon names to React Icons SVG components
 * @param {string} iconName - The tech stack key name (e.g. "react", "nextjs", "mongoose", "mongodb")
 * @returns {JSX.Element|null} The corresponding React Icon component
 */
const renderSkillIcon = (iconName) => {
  const name = iconName.toLowerCase();
  if (name.includes("react")) {
    return <SiReact className="w-4 h-4 md:w-5 md:h-5 text-[#61DAFB]" aria-label="React.js" />;
  }
  if (name.includes("next")) {
    return <SiNextdotjs className="w-4 h-4 md:w-5 md:h-5 text-white" aria-label="Next.js" />;
  }
  if (name.includes("mongoose")) {
    return <SiMongoose className="w-4 h-4 md:w-5 md:h-5 text-[#880000]" aria-label="Mongoose" />;
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
 * vertical 1-column layout for screen widths under 1475px, 2-column layout at 1475px+, and 100% equal card heights.
 */
const RecentProjects = () => {
  return (
    <section className="py-20 relative w-full overflow-hidden" id="projects" aria-label="Recent Projects Section">
      {/* Section Heading */}
      <h2 className="heading text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h2>

      {/* Projects Grid Container (Stacked 1-column below 1475px, 2-column at 1475px and above) */}
      <div className="grid grid-cols-1 min-[1475px]:grid-cols-2 gap-12 sm:gap-16 min-[1475px]:gap-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 justify-items-center items-stretch">
        {projects.map((projectItem) => (
          <div
            className="flex items-stretch justify-center w-full max-w-[92vw] sm:max-w-md md:max-w-lg min-[1475px]:max-w-[32rem] min-h-[30rem] sm:min-h-[32rem] min-[1475px]:min-h-[34rem] h-full"
            key={projectItem.id}
          >
            {/* 3D Pin Container Wrapper */}
            <PinContainer
              title={projectItem.link}
              href={projectItem.link}
              containerClassName="h-full"
            >
              <div className="flex flex-col justify-between items-center w-full h-full text-center">
                {/* Project Preview Image Box (Uncropped Fully-Visible UI Photo) */}
                <div className="relative flex items-center justify-center w-full overflow-hidden h-44 sm:h-52 md:h-56 min-[1475px]:h-60 mb-4 rounded-2xl border border-white/10 shadow-inner bg-[#13162D] shrink-0">
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

                {/* Content Box (Flexible grow to fill equal height) */}
                <div className="flex flex-col justify-between flex-grow w-full">
                  {/* Project Title (Centered) */}
                  <h3 className="font-bold min-[1475px]:text-2xl lg:text-xl md:text-lg text-base line-clamp-1 text-white max-w-full tracking-tight text-center mb-1">
                    {projectItem.title}
                  </h3>

                  {/* Project Description (Fixed min-height ensures 100% equal card height for both projects) */}
                  <div className="min-h-[4rem] sm:min-h-[4.5rem] flex items-center justify-center w-full my-2">
                    <p
                      className="min-[1475px]:text-base lg:text-sm font-light text-xs line-clamp-3 leading-relaxed text-center"
                      style={{ color: "#BEC1DD" }}
                    >
                      {projectItem.des}
                    </p>
                  </div>

                  {/* Bottom Flex Container: Skills (Top Row) & Action Buttons (Next Line) */}
                  <div className="flex flex-col items-center justify-center mt-auto pt-4 pb-1 gap-3.5 w-full max-w-full">
                    {/* Tech Icons Stack (Line 1) */}
                    <div className="flex items-center justify-center shrink-0 ps-3" aria-label="Technologies used">
                      {projectItem.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black min-[1475px]:w-10 min-[1475px]:h-10 lg:w-9 lg:h-9 w-8 h-8 flex justify-center items-center shadow-inner shrink-0"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                          title={icon}
                        >
                          {renderSkillIcon(icon)}
                        </div>
                      ))}
                    </div>

                    {/* Action Links (Line 2: Source Code & Live Demo Buttons) */}
                    <div className="flex items-center justify-center gap-2.5 sm:gap-3 w-full flex-wrap z-20">
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
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
