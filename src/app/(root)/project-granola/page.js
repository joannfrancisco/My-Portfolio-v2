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

const ProjectGranola = () => {
  useEffect(() => {
    // initialize smoother
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    return () => smoother.kill();
  }, []);

  // For blue theme
  // background: 'radial-gradient(ellipse at center, #3B82F666 0%, #93C5FD33 40%, transparent 70%)'

  // For green theme
  // background: 'radial-gradient(ellipse at center, #22C55E66 0%, #86EFAC33 40%, transparent 70%)'

  // For purple theme
  // background: 'radial-gradient(ellipse at center, #A855F766 0%, #C4B5FD33 40%, transparent 70%)'

  return (
    <div id="smooth-wrapper" className="relative">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[900px] h-[450px] -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-60 blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(ellipse at center, #4f214a88 0%, #702c6355 40%, transparent 70%)",
            animation: "pulse 8s ease-in-out infinite",
          }}
        />
      </div>

      <div id="smooth-content">
        <div className="w-screen max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-15 lg:px-30 xl:px-50">
          <div className="h-[300px] md:h-[400px] w-full mt-20 md:mt-0 mb-10 rounded-4xl md:rounded-tl-none md:rounded-tr-none relative overflow-hidden">
            <Image
              src="/images/projects/granola/granola-cover.png"
              alt="Granola Cover"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* title */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-header text-(--granola)">
              G<span className="font-wide">R</span>&nbsp;8N
              <span className="font-wide">O</span>&nbsp;LA
            </h1>
            <hr className="mt-2 mb-5 border-t-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-10">
            {/* left grid */}
            <div className="">
              <div className="flex items-center mb-5">
                <h1
                  className="w-40 text-xl font-extrabold text-(--granola) pr-1 md:pr-0"
                  style={{ fontFamily: "var(--font-inconsolata)" }}
                >
                  CATEGO<span className="font-wide">R</span>&nbsp;Y
                </h1>
                <ul className="text-base pl-1 w-[75vw] lg:w-[250px]">
                  <li>Web Development</li>
                </ul>
              </div>

              <div className="flex mb-5 ">
                <h1
                  className="w-40 text-xl font-extrabold text-(--granola) pr-1 md:pr-0"
                  style={{ fontFamily: "var(--font-inconsolata)" }}
                >
                  TEC<span className="font-wide">H</span>&nbsp; STACK
                </h1>
                <h1 className="text-base pl-1 w-[75vw] lg:w-[250px]">
                  Next.js | React | GSAP | Tailwind CSS | ShadCN | Vercel
                </h1>
                {/* <ul className="text-base pl-1 w-[75vw] lg:w-[250px]">
                  <li>
                    Next.js{" "}
                    <span className="opacity-60 font-light">
                      - framework & routing
                    </span>
                  </li>
                  <li>
                    React{" "}
                    <span className="opacity-60 font-light">
                      - component structure
                    </span>
                  </li>
                  <li>
                    Tailwind CSS{" "}
                    <span className="opacity-60 font-light">
                      - styling & layout
                    </span>
                  </li>
                  <li>
                    GSAP{" "}
                    <span className="opacity-60 font-light">
                      - animations & parallax
                    </span>
                  </li>
                  <li>
                    ShadCN{" "}
                    <span className="opacity-60 font-light">
                      - UI components
                    </span>
                  </li>

                  <li>
                    Vercel{" "}
                    <span className="opacity-60 font-light">
                      - deployment & hosting
                    </span>
                  </li>
                </ul> */}
              </div>
            </div>

            {/* right grid */}
            <div className="">
              <p className="text-base leading-relaxed">
                Gr8nola is a delicious, low-sugar whole-food brand offering a
                variety of healthy and flavorful options. For this project, I
                redesigned their homepage to better reflect the quality of their
                products, drawing inspiration from leading health and wellness
                brands to create a more engaging experience. The result features
                refined GSAP parallax effects, smooth animations, and a clean,
                modern, responsive layout that highlights their brand story and
                encourages visitors to keep exploring.
              </p>
              <div className="mt-8 mb-4 font-semibold text-base">
                <LinkHover
                  href="https://project-granola.vercel.app/"
                  label="view live site"
                />
              </div>
            </div>
          </div>

          {/* figma files */}
          <div className="mt-5">
            <h1
              className="w-[170px] mb-3 text-xl font-extrabold text-(--granola)"
              style={{ fontFamily: "var(--font-inconsolata)" }}
            >
              <span className="font-wide">H</span>&nbsp;OME
              <span className="font-wide">P</span>&nbsp;AGE
            </h1>
            <FigmaFiles
              src="/images/projects/granola/hero.png"
              alt="hero section"
            />
            <FigmaFiles
              src="/images/projects/granola/story.png"
              alt="story section"
            />

            <FigmaFiles
              src="/images/projects/granola/product.png"
              alt="product section"
            />
            <FigmaFiles
              src="/images/projects/granola/subscription.png"
              alt="subscribe section"
            />

            <h1
              className="w-[170px] mb-3 mt-5 lg:mt-10 text-xl font-extrabold text-(--granola)"
              style={{ fontFamily: "var(--font-inconsolata)" }}
            >
              <span className="font-wide">M</span>&nbsp;O
              <span className="font-wide">B</span>&nbsp;ILE
            </h1>
            <FigmaFiles
              src="/images/projects/granola/mobile.png"
              alt="mobile responsiveness"
            />
          </div>

          {/* next project */}
          <div className="pb-10">
            <hr className="mt-5 border-t-2" />
            <Link
              href="/project-moviedux"
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
                  m<span className="font-wide">o</span>&nbsp;vi
                  <span className="font-wide">e</span>&nbsp;dux
                </h2>
                <p className="font-light text-xs md:text-base">
                  Web App Development
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

export default ProjectGranola;
