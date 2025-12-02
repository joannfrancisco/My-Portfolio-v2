"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import LinkHover from "@/components/shared/link-hover";
import FigmaFiles from "@/components/shared/figma-files";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/shared/footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ProjectWouldYouRather = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    return () => smoother.kill();
  }, []);

  return (
    <div id="smooth-wrapper" className="relative">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[900px] h-[450px] -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-60 blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(ellipse at center, #3B82F666 0%, #93C5FD33 40%, transparent 70%)",
            animation: "pulse 8s ease-in-out infinite",
          }}
        />
      </div>

      <div id="smooth-content">
        <div className="w-screen max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-15 lg:px-30 xl:px-50">
          <div className="h-[300px] md:h-[400px] w-full mt-20 md:mt-0 mb-10 rounded-4xl md:rounded-tl-none md:rounded-tr-none relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
            <Image
              src="/images/projects/wyr/wyr-cover.png"
              alt="Would You Rather? Cover"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* title */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-header text-(--wyr) ">
              W<span className="font-wide">O</span>&nbsp;ULD Y
              <span className="font-wide">O</span>&nbsp;U RATH
              <span className="font-wide">E</span>&nbsp;R?
            </h1>
            <hr className="mt-2 mb-5 border-t-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-10">
            {/* left grid */}
            <div className="">
              <div className="flex mb-5">
                <h1
                  className="w-40 text-xl font-extrabold text-(--wyr) pr-1 md:pr-0"
                  style={{ fontFamily: "var(--font-inconsolata)" }}
                >
                  CATEGO<span className="font-wide">R</span>&nbsp;Y
                </h1>
                <ul className="text-base pl-1 w-[75vw] lg:w-[250px] text-left">
                  <li>Web App Development</li>
                </ul>
              </div>

              <div className="flex mb-5 ">
                <h1
                  className="w-40 text-xl font-extrabold text-(--wyr) pr-1 md:pr-0"
                  style={{ fontFamily: "var(--font-inconsolata)" }}
                >
                  TEC<span className="font-wide">H</span>&nbsp; STACK
                </h1>
                <h1 className="text-base pl-1 w-[75vw] lg:w-[250px]">
                  React | Node | Firebase | Vanilla CSS | GitHub Pages
                </h1>
              </div>
            </div>

            {/* right grid */}
            <div className="">
              <p className="text-base leading-relaxed text-left">
                Would You Rather? is an interactive web app built with React and
                Firebase that lets users create playful polls, vote on choices,
                and see real-time results. Users can sign in with Google to
                create and manage polls, or participate anonymously for quick,
                frictionless voting. The experience is lightweight, engaging,
                and accessible to everyone.
              </p>
              <div className="mt-8 mb-4 font-semibold text-base">
                <LinkHover
                  href="https://joannfrancisco.github.io/would-you-rather/"
                  label="view live site"
                />
              </div>
            </div>
          </div>

          {/* figma files */}
          <div className="mt-5">
            <h1
              className="w-[170px] mb-3 text-xl font-extrabold text-(--wyr)"
              style={{ fontFamily: "var(--font-inconsolata)" }}
            >
              <span className="font-wide">H</span>&nbsp;OME
              <span className="font-wide">P</span>&nbsp;AGE
            </h1>
            <FigmaFiles src="/images/projects/wyr/home.png" alt="homepage" />
            <h1
              className="w-[170px] mb-3 mt-5 lg:mt-10 text-xl font-extrabold text-(--wyr)"
              style={{ fontFamily: "var(--font-inconsolata)" }}
            >
              <span className="font-wide">P</span>&nbsp;OLL&nbsp;
              <span className="font-wide">P</span>&nbsp;AGE
            </h1>
            <FigmaFiles
              src="/images/projects/wyr/poll-google.png"
              alt="poll section using google account"
            />

            <FigmaFiles
              src="/images/projects/wyr/poll-guest.png"
              alt="poll section as guest"
            />
          </div>

          {/* next project */}
          <div className="pb-5">
            <hr className="mt-5 border-t-2" />
            <Link
              href="/project-ann"
              className="flex justify-between items-center py-4 md:py-6 text-sm md:text-lg group"
            >
              <h2
                className="font-black text-base md:text-2xl inline-flex items-center text-left"
                style={{ fontFamily: "var(--font-inconsolata)" }}
              >
                <ArrowRight className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 ease-out" />
                <span className="inline-block transition-transform duration-300 ease-out">
                  <span className="font-wide">n</span>&nbsp;ext&nbsp;
                  <span className="font-wide">p</span>&nbsp;roject
                </span>
              </h2>
              <div className="text-right">
                <h2
                  className="font-black text-base md:text-2xl inline-flex items-center text-left"
                  style={{ fontFamily: "var(--font-inconsolata)" }}
                >
                  <span className="font-wide">a</span>&nbsp;nn
                </h2>
                <p className="font-light text-xs md:text-base">
                  Web Development
                </p>
              </div>
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectWouldYouRather;
