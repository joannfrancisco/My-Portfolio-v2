"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // GSAP animation - converts Framer Motion's whileInView
    gsap.fromTo(
      section,
      {
        opacity: 0,
        x: 80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // When top of element hits 80% of viewport
          once: true, // Only animate once (viewport: { once: true })
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      // ref={sectionRef}
      className="max-w-screen-2xl mx-auto py-16 xl:py-0 w-full h-full relative border-y border-(--foreground)/15 "
    >
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-5 pt-5  lg:pb-10 ">
        <div className="lg:max-w-2xl xl:max-w-5xl order-1 lg:order-0 px-6 md:px-10 xl:pl-40">
          <h1 className="text-5xl lg:text-6xl font-header chrome-text">
            A<span className="font-wide chrome-text">B</span>&nbsp;OUT
          </h1>
          <hr className="mt-2 mb-6 border-t-2" />

          <p className="text-base md:text-lg font-light text-left leading-relaxed">
            Hello! I&apos;m{" "}
            <span className="font-semibold">Jo Ann Francisco</span>, but you can
            call me Ann.{" "}
          </p>
          <p className="text-base md:text-lg font-light text-left leading-relaxed mt-5  text-(--foreground)/80">
            I help small businesses level up with fast, credible &quot;online
            homes.&quot; Whether you are outgrowing social media or struggling
            with an outdated site, I build professional platforms that turn
            casual visitors into real leads. My mission is simple: to give your
            business a high-performance tool that moves the needle and gives you
            the competitive edge you deserve.
          </p>

          {/* <div className="mt-8 font-semibold text-base md:text-lg">
            <LinkHover href="/JFranciscoResume.pdf" label=" view résumé" />
          </div> */}
          <Link href="#contact">
            <button className="mt-6 w-fit border border-(--foreground)] px-6 py-2 text-sm transition-all  hover:text-background disabled:opacity-50 shadow-[4px_4px_0_0_var(--foreground)] hover:shadow-[8px_8px_0_0_var(--foreground)] active:shadow-[2px_2px_0_0_var(--foreground)]">
              let&apos;s connect
            </button>
          </Link>
        </div>

        <Image
          src="/images/AboutImage.png"
          alt="Image of Jo Ann Francisco in black and white"
          width={500}
          height={700}
          priority
          className="relative lg:absolute lg:top-0 lg:right-0 mb-4 object-cover opacity-95 rounded-tr-4xl lg:rounded-tr-none rounded-br-4xl lg:rounded-br-none lg:rounded-bl-4xl  w-full lg:w-[300px] xl:w-[350px] min-h-[200px] h-[40vh] lg:h-[500px] -ml-12 md:-ml-20 lg:ml-0"
        />

        <Image
          src="/images/AboutImage.png"
          alt="Image of Jo Ann Francisco"
          width={500}
          height={700}
          priority
          className="z-[-1] mb-4 object-cover opacity-0 hidden lg:block w-screen lg:w-[300px] xl:w-[350px] h-[60vmin] lg:h-[500px]"
        />
      </div>
    </div>
  );
};

export default AboutSection;
