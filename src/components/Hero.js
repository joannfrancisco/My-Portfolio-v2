"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { Button } from "./shared/Button";
import RotatingText from "./shared/RotatingText";
import PixelSnow from "./shared/PixelSnow";

export default function Hero() {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);

  const ctaRef = useRef(null);

  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
        .from(
          subheadlineRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4",
        )

        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="max-w-7xl mx-auto relative min-h-dvh flex items-center justify-start px-6 py-32 overflow-hidden"
    >
      {/* PixelSnow Background - Fixed position covering entire section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PixelSnow />
      </div>

      {/* Content */}
      <div className="max-w-7xl text-left relative z-10 ">
        {/* Headline */}
        <h1 ref={headlineRef} className="mb-6">
          <span className="block text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Hi, I&apos;m Ann.
          </span>
          <span className="block text-5xl md:text-7xl font-bold leading-[1.1] md:leading-snug tracking-tight">
            A Web & App{" "}
            <span className="inline-flex items-baseline">
              <RotatingText
                texts={["Designer", "Developer", "Alchemist"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-(--cyan) text-(--background) overflow-hidden pt-1.5 md:pt-5 justify-center rounded-md"
                staggerFrom={"last"}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                rotationInterval={2000}
              />
              <span className="ml-0.5">.</span>
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-lg md:text-2xl max-w-2xl mb-12 text-(--foreground)/80 leading-relaxed"
        >
          I build custom web and mobile apps, internal tools, and AI automations
          for businesses ready to leave spreadsheets and manual work behind.
        </p>

        {/* CTA */}
        <div ref={ctaRef}>
          <Button href="#contact">Start Your Project</Button>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-navy-300 dark:border-navy-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cyan-500 rounded-full animate-pulse" />
        </div>
      </div> */}
    </section>
  );
}
