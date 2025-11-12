import { ChevronsRight } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-6 w-full relative">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Text Content - Left Side */}
          <div className="max-w-xl flex-1">
            <h1 className="text-6xl font-header">
              A<span className="font-wide">B</span> OUT
            </h1>
            <hr className="mt-2 mb-6 border-t-2 " />

            <p className="text-base md:text-lg leading-relaxed">
              Hello! My name is Jo Ann Francisco but you can call me Ann for
              short. I'm an aspiring Full-Stack Web Developer who loves the
              creative side of coding. For me, it's not just about making things
              work, it's about making them feel right. I spend my days crafting
              custom websites that are clean, intuitive, and actually fun to
              navigate while listening to music. The best part? Every project
              teaches me something new, and I'm always excited to see where that
              takes me next.
            </p>

            <a
              href="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold relative group  "
            >
              More About Me
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                <ChevronsRight className="h-5 w-5" />
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-500 ease-out"></span>
            </a>
          </div>

          {/* Image - Right Side */}
          {/* <div className="w-full lg:w-auto flex justify-center lg:justify-end"> */}
          <div className="bg-amber-400">
            <Image
              src="/images/profilePic.png"
              alt="Profile picture of Jo Ann Francisco"
              width={400}
              height={400}
              className="rounded-bl-4xl object-cover w-64 h-80 md:w-80 md:h-96 lg:w-70 lg:h-[400px] shadow-lg absolute top-0 right-0"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
