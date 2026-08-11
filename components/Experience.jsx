"use client";

import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

/**
 * @component Experience
 * @description Work Experience section displaying developer roles and projects with moving animated border cards.
 */
const Experience = () => {
  return (
    <section className="py-20 w-full relative" id="experience" aria-label="Work Experience Section">
      {/* Section Heading */}
      <h2 className="heading text-center">
        My <span className="text-purple">work experience</span>
      </h2>

      {/* Experience Cards Responsive Grid */}
      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {workExperience.map((cardItem) => (
          <Button
            key={cardItem.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
            title={`${cardItem.title} Experience Card`}
          >
            {/* Inner Card Content */}
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={cardItem.thumbnail}
                alt={`${cardItem.title} Icon`}
                className="lg:w-32 md:w-20 w-16 h-16 md:h-20 lg:h-32 object-contain shrink-0"
              />
              <div className="lg:ms-5">
                <h3 className="text-start text-xl md:text-2xl font-bold text-white">
                  {cardItem.title}
                </h3>
                <p className="text-start text-white-100 mt-3 font-semibold text-sm md:text-base leading-relaxed">
                  {cardItem.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
