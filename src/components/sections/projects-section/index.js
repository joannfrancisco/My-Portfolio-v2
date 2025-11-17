"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectHover from "@/components/shared/link-hover-project";

const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Define images for each project
  const projectImages = {
    ann: "/images/profilePic.png",
    gr8nola: "/images/profilePic.png",
    moviedux: "/images/profilePic.png",
    tidytouch: "/images/profilePic.png",
    wouldyourather: "/images/profilePic.png",
  };

  return (
    <div className="max-w-screen-2xl mx-auto w-full h-full relative overflow-y-scroll px-6 md:px-10 lg:px-0">
      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-[4fr_3fr] place-items-center relative lg:absolute bottom-0 left-0 w-full lg:w-[90vw] max-h-5/6 transition gap-5">
        {/* Left Box - 60% with dynamic images */}
        <div className="h-[40vh] lg:h-full w-full relative overflow-hidden lg:rounded-tr-4xl rounded-bl-4xl lg:rounded-bl-none rounded-br-4xl lg:rounded-br-none">
          {/* Default Image */}
          <Image
            src="/images/profilePic.png"
            alt="Profile picture of Jo Ann Francisco"
            fill
            priority
            className={`object-cover transition-opacity duration-500 -z-1 ${
              hoveredProject ? "opacity-0" : "opacity-90"
            }`}
          />

          {/* Project Images */}
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

        {/* Right Box - 40% */}
        <div className="h-[60vh] lg:h-full w-full">
          <div className="flex flex-col">
            <h1 className="text-5xl lg:text-6xl font-header">
              P<span className="font-wide">R</span>&nbsp;OJ
              <span className="font-wide">E</span>&nbsp;CTS
            </h1>
            <hr className="mt-2 border-t-2" />
            <ProjectHover
              href="/project_ann"
              name="ann"
              desc="UI/UX | Web Development"
              onHover={setHoveredProject}
            />
            <ProjectHover
              href="/project_granola"
              name="gr8nola"
              desc="Parallax | Web Development"
              onHover={setHoveredProject}
            />
            <ProjectHover
              href="/project_moviedux"
              name="moviedux"
              desc="API | Web Development"
              onHover={setHoveredProject}
            />
            <ProjectHover
              href="/project_tidy_touch"
              name="tidytouch"
              desc="UI/UX | Webflow"
              onHover={setHoveredProject}
            />
            <ProjectHover
              href="/project_would_you_rather"
              name="wouldyourather"
              desc="BaaS | Web Development"
              onHover={setHoveredProject}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
