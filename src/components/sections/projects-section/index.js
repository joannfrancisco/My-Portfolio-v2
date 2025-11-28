"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectHover from "@/components/shared/link-hover-project";

const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectImages = {
    ann: "/images/projects/ann/ann-cover.png",
    gr8nola: "/images/projects/granola/granola-cover.png",
    moviedux: "/images/projects/moviedux/moviedux-cover.png",
    tidytouch: "/images/projects/tidy-touch/tidy-touch-cover.png",
    wouldyourather: "/images/projects/wyr/wyr-cover.png",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-screen-2xl mx-auto w-full h-full relative px-6 md:px-10 lg:px-0 py-16 lg:py-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[4fr_3fr] place-items-center relative lg:absolute bottom-0 left-0 w-full lg:w-[90vw] max-h-5/6 transition gap-5">
        {/* Left Image Box */}
        <div className="min-h-[200px] h-[40vh] lg:h-full ml-12 md:ml-18 lg:ml-0 w-screen lg:w-full relative overflow-hidden rounded-4xl lg:rounded-tl-none lg:rounded-bl-none lg:rounded-br-none">
          <Image
            src="/images/projects/ann/ann-cover.png"
            alt="Profile picture of Jo Ann Francisco"
            fill
            priority
            className={`object-cover transition-opacity duration-500 -z-1 ${
              hoveredProject ? "opacity-0" : "opacity-90"
            }`}
          />

          {Object.entries(projectImages).map(([projectName, imageSrc]) => (
            <Image
              key={projectName}
              src={imageSrc}
              alt={`${projectName} project preview`}
              fill
              className={`object-cover transition-opacity duration-500 -z-1 ${
                hoveredProject === projectName ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Right Box */}
        <div className="h-[60vh] lg:h-full w-full">
          <div className="flex flex-col">
            <h1 className="text-5xl lg:text-6xl font-header">
              P<span className="font-wide">R</span>&nbsp;OJECTS
            </h1>
            <hr className="mt-2 border-t-2" />

            <ProjectHover
              href="/project-ann"
              name="ann"
              desc="UI/UX | Web Development"
              onHover={setHoveredProject}
            />
            <ProjectHover
              href="/project-granola"
              name="gr8nola"
              desc="Parallax | Web Development"
              onHover={setHoveredProject}
            />
            <ProjectHover
              href="/project-moviedux"
              name="moviedux"
              desc="API | Web App Development"
              onHover={setHoveredProject}
            />
            <ProjectHover
              href="/project-tidy-touch"
              name="tidytouch"
              desc="UI/UX | Webflow"
              onHover={setHoveredProject}
            />
            <ProjectHover
              href="/project-would-you-rather"
              name="wouldyourather"
              desc="Web App Development"
              onHover={setHoveredProject}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
