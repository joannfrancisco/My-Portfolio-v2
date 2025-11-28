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
  );
};

export default Home;
