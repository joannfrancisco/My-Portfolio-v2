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

const ProjectPawikan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

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
              "radial-gradient(ellipse at center, #0ea5a588 0%, #22d3ee55 40%, transparent 70%)",
            animation: "pulse 8s ease-in-out infinite",
          }}
        />
      </div>

      <div id="smooth-content">
        <div className="w-screen max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-15 lg:px-30 xl:px-50">
          <div className="h-[300px] md:h-[400px] w-full mt-20 md:mt-0 mb-10 rounded-4xl md:rounded-tl-none md:rounded-tr-none relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
            <Image
              src="/images/projects/pawikan/hero.png"
              alt="Granola Cover"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* title */}
          <div>
            <h1 className="text-[31px] lg:text-6xl font-header text-(--pawikan)">
              <span className="font-wide">P</span>&nbsp;&nbsp;&nbsp;AWIKAN&nbsp;
              DIVE<span className="font-wide">R</span>&nbsp;&nbsp;&nbsp;&nbsp;S
            </h1>
            <hr className="mt-2 mb-5 border-t-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-10">
            {/* left grid */}
            <div className="">
              <div className="flex mb-5">
                <h1
                  className="w-50 text-lg font-extrabold text-(--pawikan) pr-1 md:pr-0"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  CATEGO<span className="font-wide">R</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;Y
                </h1>
                <ul className="text-base pl-1 w-[75vw] lg:w-[250px]">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>

              <div className="flex mb-5 ">
                <h1
                  className="w-50 text-lg font-extrabold text-(--pawikan) pr-1 md:pr-0"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  TEC<span className="font-wide">H</span>
                  &nbsp;&nbsp;&nbsp;&nbsp; STACK
                </h1>
                <h1 className="text-base pl-1 w-[75vw] lg:w-[250px]">
                  Next.js | GSAP | Tailwind CSS | Vercel
                </h1>
              </div>
            </div>

            {/* right grid */}
            <div className="">
              <p className="text-base leading-relaxed text-left">
                Pawikan Divers is a CMAS-certified dive center in Cebu,
                Philippines, offering scuba diving courses and underwater
                adventures for all skill levels. For this project, I built a
                comprehensive website to showcase their services and make
                booking seamless, drawing inspiration from leading adventure
                tourism and dive center websites to create an immersive
                experience. The result features a hero video with wavy text
                animations using GSAP, smooth scroll-triggered section reveals,
                and a mobile-first responsive design with progressive image
                loading and &quot;load more&quot; functionality for galleries.
                The site prioritizes trust-building through prominent CMAS
                certification displays, authentic dive photography, and clear
                service categorization (Discover Scuba Diving, Scuba
                Certification, Fun Dives) that guides users from curiosity to
                confident booking decisions.
              </p>
              <div className="mt-8 mb-4 font-semibold text-base">
                <LinkHover
                  href="https://pawikandivers.com"
                  label="view live site"
                />
              </div>
            </div>
          </div>

          {/* figma files */}
          <div className="mt-5">
            <h1
              className="w-[170px] mb-3 text-lg font-extrabold text-(--pawikan)"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              <span className="font-wide">H</span>
              &nbsp;&nbsp;&nbsp;OME&nbsp;&nbsp;
              <span className="font-wide">P</span>&nbsp;&nbsp;&nbsp;AGE
            </h1>
            <FigmaFiles
              src="/images/projects/pawikan/service.png"
              alt="service section"
            />
            <FigmaFiles
              src="/images/projects/pawikan/review.png"
              alt="review section"
            />

            <FigmaFiles
              src="/images/projects/pawikan/blog.png"
              alt="blog section"
            />
            <FigmaFiles
              src="/images/projects/pawikan/contact.png"
              alt="contact section"
            />

            <h1
              className="w-[170px] mb-3 mt-5 lg:mt-10 text-lg font-extrabold text-(--pawikan)"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              4<span className="font-wide">0</span>
              &nbsp;&nbsp;&nbsp;&nbsp;4
            </h1>
            <FigmaFiles
              src="/images/projects/pawikan/404.png"
              alt="not-found"
            />

            {/* <h1
              className="w-[170px] mb-3 mt-5 lg:mt-10 text-lg font-extrabold text-(--pawikan)"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              <span className="font-wide">M</span>
              &nbsp;&nbsp;&nbsp;&nbsp;O
              <span className="font-wide">B</span>&nbsp;&nbsp;&nbsp;ILE
            </h1>
            <FigmaFiles
              src="/images/projects/granola/mobile.png"
              alt="mobile responsiveness"
            /> */}
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
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                <ArrowRight className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 ease-out" />
                <span className="inline-block transition-transform duration-300 ease-out">
                  <span className="font-wide">n</span>
                  &nbsp;&nbsp;&nbsp;ext&nbsp;
                  <span className="font-wide">p</span>&nbsp;&nbsp;&nbsp;roject
                </span>
              </h2>
              <div className="text-right">
                <h2
                  className="font-black text-base md:text-2xl inline-flex items-center text-left"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  <span className="font-wide">a</span>&nbsp;&nbsp;&nbsp;nn
                </h2>
                <p className="font-light text-xs md:text-base">
                  Web App Development
                </p>
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectPawikan;
