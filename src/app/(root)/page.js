"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSection from "../../components/sections/about-section";
import ProjectsSection from "../../components/sections/projects-section";
import ContactSection from "../../components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Home = () => {
  const scrollerRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const sections = gsap.utils.toArray("section");

    // Check if mobile landscape (height < width AND height < 500px)
    const isMobileLandscape = () => {
      return window.innerHeight < window.innerWidth && window.innerHeight < 500;
    };

    if (!isMobileLandscape()) {
      // All screens except mobile landscape: Snap scrolling with GSAP ScrollTo
      let currentSection = 0;

      const scrollToSection = (index) => {
        if (isScrolling.current) return;
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

      // Wheel event for snap scrolling
      const handleWheel = (e) => {
        if (isScrolling.current) {
          e.preventDefault();
          return;
        }

        if (e.deltaY > 0 && currentSection < sections.length - 1) {
          // Scroll down
          e.preventDefault();
          scrollToSection(currentSection + 1);
        } else if (e.deltaY < 0 && currentSection > 0) {
          // Scroll up
          e.preventDefault();
          scrollToSection(currentSection - 1);
        }
      };

      // Touch events for mobile swipe
      let touchStartY = 0;
      const handleTouchStart = (e) => {
        touchStartY = e.touches[0].clientY;
      };

      const handleTouchEnd = (e) => {
        if (isScrolling.current) return;

        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;

        if (Math.abs(diff) > 50) {
          if (diff > 0 && currentSection < sections.length - 1) {
            // Swipe up
            scrollToSection(currentSection + 1);
          } else if (diff < 0 && currentSection > 0) {
            // Swipe down
            scrollToSection(currentSection - 1);
          }
        }
      };

      // Keyboard navigation
      const handleKeyDown = (e) => {
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

      scroller.addEventListener("wheel", handleWheel, { passive: false });
      scroller.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      scroller.addEventListener("touchend", handleTouchEnd, { passive: true });
      window.addEventListener("keydown", handleKeyDown);

      // Handle resize to check if switched to/from landscape
      const handleResize = () => {
        if (isMobileLandscape()) {
          scroller.removeEventListener("wheel", handleWheel);
          scroller.removeEventListener("touchstart", handleTouchStart);
          scroller.removeEventListener("touchend", handleTouchEnd);
          window.removeEventListener("keydown", handleKeyDown);
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        scroller.removeEventListener("wheel", handleWheel);
        scroller.removeEventListener("touchstart", handleTouchStart);
        scroller.removeEventListener("touchend", handleTouchEnd);
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="h-screen overflow-y-auto scroll-smooth landscape:max-h-[500px]:overflow-y-auto overflow-hidden"
    >
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
