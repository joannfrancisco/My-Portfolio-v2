"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSection from "../../components/sections/about-section";
import ProjectsSection from "../../components/sections/projects-section";
import ContactSection from "../../components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";
import Background from "@/components/shared/background";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Home = () => {
  const scrollerRef = useRef(null);
  const isScrolling = useRef(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    // Check for mobile landscape orientation
    const checkOrientation = () => {
      const isMobile = window.innerWidth < 940;
      const isLandscapeMode = window.innerHeight < window.innerWidth;
      setIsLandscape(isMobile && isLandscapeMode);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const sections = gsap.utils.toArray("section");
    let currentSection = 0;
    const isLargeScreen = window.innerWidth >= 1024;

    const scrollToSection = (index) => {
      if (isScrolling.current || !scroller) return;
      isScrolling.current = true;

      gsap.to(scroller, {
        scrollTo: { y: sections[index], autoKill: false },
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          currentSection = index;
          isScrolling.current = false;
        },
      });
    };

    // Wheel event for snap scrolling (large screens only)
    const handleWheel = (e) => {
      if (!isLargeScreen) return; // Allow native scroll on small screens

      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };

    // Keyboard navigation (large screens only)
    const handleKeyDown = (e) => {
      if (!isLargeScreen) return; // Allow native scroll on small screens
      if (isScrolling.current) return;

      if (
        (e.key === "ArrowDown" || e.key === "PageDown") &&
        currentSection < sections.length - 1
      ) {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (
        (e.key === "ArrowUp" || e.key === "PageUp") &&
        currentSection > 0
      ) {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };

    // Add event listeners
    scroller.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      scroller.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Landscape Warning Overlay */}
      {isLandscape && (
        <div className="fixed inset-0 z-9999 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center text-center px-6">
          <div className="animate-bounce mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Rotate Your Screen
          </h2>
          <p className="text-white/80 text-lg">
            Please rotate your device to portrait mode for a better viewing
            experience.
          </p>
        </div>
      )}

      {/* Main Content */}
      <div
        ref={scrollerRef}
        className="h-dvh lg:h-screen overflow-y-auto overflow-x-hidden scroll-smooth"
      >
        <Background />
        <section id="home" className="relative w-screen h-dvh lg:h-screen">
          <HeroSection />
        </section>

        <section
          id="about"
          className="w-screen h-auto lg:h-screen flex items-start lg:items-center justify-center"
        >
          <AboutSection />
        </section>

        <section id="projects" className="w-screen h-auto lg:h-screen">
          <ProjectsSection />
        </section>

        <section id="contact" className="w-screen h-dvh lg:h-screen">
          <ContactSection />
        </section>
      </div>
    </>
  );
};

export default Home;
