import Image from "next/image";
import ProjectHover from "@/components/shared/link-hover-project";

const ProjectSection = () => {
  return (
    <div className="w-screen h-dvh lg:h-screen">
      <div className="max-w-screen-2xl mx-auto w-full h-full relative overflow-hidden px-6 lg:px-0">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_3fr] place-items-center relative lg:absolute bottom-0 left-0 w-[90vw] lg:w-[90vw] h-4/6 transition gap-5">
          {/* Left Box - 60% */}
          <div className="h-[40vh] lg:h-full w-full relative overflow-hidden lg:rounded-tr-4xl rounded-bl-4xl lg:rounded-bl-none rounded-br-4xl lg:rounded-br-none ">
            <Image
              src="/images/profilePic.png"
              alt="Profile picture of Jo Ann Francisco"
              fill
              priority
              className="object-cover object-top lg:object-bottom-left opacity-90 z-[-1]"
            />
          </div>

          {/* Right Box - 40% */}
          <div className="h-[60vh] lg:h-full w-full ">
            <div className="flex flex-col">
              <h1 className="text-5xl lg:text-6xl font-header">
                P<span className="font-wide">R</span> OJ
                <span className="font-wide">E</span> CT
              </h1>
              <hr className="mt-2 border-t-2" />
              <ProjectHover
                href="https://www.google.com"
                name="ann"
                desc="Branding + Web Development"
              />
              <ProjectHover
                href="https://www.google.com"
                name="moviedux"
                desc="Web Development"
              />
              <ProjectHover
                href="https://www.google.com"
                name="wouldyourather"
                desc="Web Development"
              />
              <ProjectHover
                href="https://www.google.com"
                name="tidytouch"
                desc="UI/UX + Webflow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
