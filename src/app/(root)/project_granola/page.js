"use client";

import Image from "next/image";
import LinkHover from "@/components/shared/link-hover";
import FigmaFiles from "@/components/shared/figma-files";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectGranola = () => {
  return (
    <div className="w-screen ">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-50">
        <div className="h-[300px] md:h-[400px] w-full mt-20 md:mt-0 mb-10 rounded-4xl md:rounded-tl-none md:rounded-tr-none relative overflow-hidden">
          <Image
            src="/images/profilePic.png"
            alt="Profile picture of Jo Ann Francisco"
            fill
            priority
            className="object-cover opacity-90"
          />
        </div>

        {/* title */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-header">
            G<span className="font-wide">R</span>&nbsp;8N
            <span className="font-wide">O</span>&nbsp;LA
          </h1>
          <hr className="mt-2 mb-5 border-t-2" />
        </div>

        {/* left grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="flex mb-5">
              <h1 className="w-[170px] font-bold text-base md:text-xl">
                CATEGORY
              </h1>
              <p className="text-base md:text-lg leading-relaxed">
                Web Development
              </p>
            </div>
            <div className="flex mb-5">
              <h1 className="w-[170px] font-bold text-base md:text-xl">
                KEY FEATURES
              </h1>
              <ul className="text-base md:text-lg leading-relaxed ">
                <li>first</li>
                <li>first</li>
                <li>first</li>
                <li>first</li>
                <li>first</li>
              </ul>
            </div>
          </div>

          {/* right grid */}
          <div>
            <p className="text-base md:text-lg leading-relaxed">
              granola is a chuchsndfl kjshdflks hosdhjf ;sidfh ;sldhfjosdjhf
              lsdf
            </p>
            <div className="mt-8 mb-4 font-semibold text-base md:text-lg">
              <LinkHover href="/sampleresume.pdf" label="view live site" />
            </div>
          </div>
        </div>

        {/* figma files */}
        <div className="mt-5">
          <h1 className="w-[170px] font-bold text-base md:text-xl mb-3">
            HOMEPAGE
          </h1>
          <FigmaFiles src="/images/profilePic.png" alt="homepage" />
          <FigmaFiles src="/images/profilePic.png" alt="homepage" />
        </div>

        {/* next project */}
        <hr className="mt-5 border-t-2" />
        <Link
          href="/project_moviedux"
          className="flex justify-between items-center border-b py-4 md:py-6 text-sm md:text-lg group"
        >
          <h2
            className="font-black text-base md:text-xl inline-flex items-center text-left"
            style={{ fontFamily: "var(--font-inconsolata)" }}
          >
            <ArrowRight className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 ease-out" />
            <span className="inline-block transition-transform duration-300 ease-out">
              next project
            </span>
          </h2>
          <div className="text-right">
            <h1>moviedux</h1>
            <p className="">Web Development</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectGranola;
