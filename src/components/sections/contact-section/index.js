import { ArrowUpRight } from "lucide-react";
import LinkHover from "@/components/shared/link-hover";

const ContactSection = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="h-full flex justify-center items-center">
        <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-10 py-6 flex justify-center items-center">
          <div className="max-w-[850px] flex-1">
            <h1 className="text-5xl md:text-6xl font-header">
              CO<span className="font-wide">N</span> TACT
            </h1>
            <hr className="mt-2 mb-6 border-t-2 " />

            <div className="flex flex-col lg:flex-row justify-between items-start gap-7 lg:gap-20">
              <div className="flex gap-5 ">
                <h2 className="font-bold text-base md:text-xl">MAIL</h2>
                <a
                  href="mailto:joannfrancisco.dev@gmail.com"
                  aria-label="Email Jo Ann Francisco"
                  className="text-base md:text-xl font-light inline-flex w-fit items-center relative group "
                >
                  <ArrowUpRight className="w-5 h-5 mr-1" />
                  joannfrancisco.dev@gmail.com
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-500 ease-out"></span>
                </a>
              </div>

              <div className="flex  gap-5">
                <h2 className="font-bold text-base md:text-xl">
                  ONLINE PROFILES
                </h2>
                <div className="text-base md:text-xl font-light flex flex-col gap-2">
                  <LinkHover
                    href="https://www.linkedin.com/in/joannfrancisco"
                    label="LinkedIn"
                  />
                  <LinkHover
                    href="https://github.com/joannfrancisco"
                    label="Github"
                  />
                  <LinkHover
                    href="https://www.instagram.com/joannfrancisco.design/"
                    label="Instagram"
                  />
                  <LinkHover
                    href="https://www.behance.net/joannvfrancisco"
                    label="Behance"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-(--foreground)/20 text-center text-xs opacity-30 px-6 md:px-10 py-4 md:py-6">
        © {new Date().getFullYear()} Jo Ann Francisco. All rights reserved.
      </div>
    </div>
  );
};

export default ContactSection;
