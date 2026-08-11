import React from "react";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

/**
 * @component Grid
 * @description About Section wrapper component that maps over gridItems data and renders
 * the BentoGrid and individual BentoGridItem cards.
 */
const Grid = () => {
  return (
    <section id="about" aria-label="About Section" className="w-full relative">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
