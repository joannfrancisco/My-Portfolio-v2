// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import AboutSection from "../../components/sections/about-section";
// import ProjectsSection from "../../components/sections/projects-section";
// import ContactSection from "../../components/sections/contact-section";
// import HeroSection from "@/components/sections/hero-section";

// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// const Home = () => {
//   const scrollerRef = useRef(null);
//   const isScrolling = useRef(false);

//   useEffect(() => {
//     const scroller = scrollerRef.current;
//     if (!scroller) return;

//     const sections = gsap.utils.toArray("section");
//     let currentSection = 0;

//     const scrollToSection = (index) => {
//       if (isScrolling.current || !scroller) return;
//       isScrolling.current = true;

//       gsap.to(scroller, {
//         scrollTo: { y: sections[index], autoKill: false },
//         duration: 1,
//         ease: "power2.inOut",
//         onComplete: () => {
//           currentSection = index;
//           isScrolling.current = false;
//         },
//       });
//     };

//     // Wheel event for snap scrolling
//     const handleWheel = (e) => {
//       if (isScrolling.current) {
//         e.preventDefault();
//         return;
//       }

//       if (e.deltaY > 0 && currentSection < sections.length - 1) {
//         e.preventDefault();
//         scrollToSection(currentSection + 1);
//       } else if (e.deltaY < 0 && currentSection > 0) {
//         e.preventDefault();
//         scrollToSection(currentSection - 1);
//       }
//     };

//     // Touch events for mobile swipe
//     let touchStartY = 0;
//     let touchStartTime = 0;

//     const handleTouchStart = (e) => {
//       // Don't interfere with touches on the canvas or header
//       if (e.target.tagName === "CANVAS" || e.target.closest("header")) {
//         return;
//       }
//       touchStartY = e.touches[0].clientY;
//       touchStartTime = Date.now();
//     };

//     const handleTouchEnd = (e) => {
//       if (isScrolling.current) return;
//       if (e.target.tagName === "CANVAS" || e.target.closest("header")) {
//         return;
//       }

//       const touchEndY = e.changedTouches[0].clientY;
//       const touchEndTime = Date.now();
//       const diff = touchStartY - touchEndY;
//       const timeDiff = touchEndTime - touchStartTime;

//       // Lenient thresholds for better mobile experience
//       if (Math.abs(diff) > 50 && timeDiff < 800) {
//         if (diff > 0 && currentSection < sections.length - 1) {
//           scrollToSection(currentSection + 1);
//         } else if (diff < 0 && currentSection > 0) {
//           scrollToSection(currentSection - 1);
//         }
//       }
//     };

//     // Keyboard navigation
//     const handleKeyDown = (e) => {
//       if (isScrolling.current) return;

//       if (
//         (e.key === "ArrowDown" || e.key === "PageDown") &&
//         currentSection < sections.length - 1
//       ) {
//         e.preventDefault();
//         scrollToSection(currentSection + 1);
//       } else if (
//         (e.key === "ArrowUp" || e.key === "PageUp") &&
//         currentSection > 0
//       ) {
//         e.preventDefault();
//         scrollToSection(currentSection - 1);
//       }
//     };

//     // Add event listeners
//     scroller.addEventListener("wheel", handleWheel, { passive: false });
//     scroller.addEventListener("touchstart", handleTouchStart, {
//       passive: true,
//     });
//     scroller.addEventListener("touchend", handleTouchEnd, {
//       passive: true,
//     });
//     window.addEventListener("keydown", handleKeyDown);

//     // Cleanup
//     return () => {
//       scroller.removeEventListener("wheel", handleWheel);
//       scroller.removeEventListener("touchstart", handleTouchStart);
//       scroller.removeEventListener("touchend", handleTouchEnd);
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return (
//     <div ref={scrollerRef} className="h-dvh overflow-y-auto overflow-x-hidden">
//       <section id="home" className="relative w-screen h-dvh">
//         <HeroSection />
//       </section>

//       <section
//         id="about"
//         className="w-screen h-dvh flex items-start lg:items-center justify-center relative"
//       >
//         <AboutSection />
//       </section>

//       <section id="projects" className="w-screen h-dvh">
//         <ProjectsSection />
//       </section>

//       <section id="contact" className="w-screen h-dvh">
//         <ContactSection />
//       </section>
//     </div>
//   );
// };

// export default Home;

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
  const isMobile = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const sections = gsap.utils.toArray("section");
    let currentSection = 0;

    // Detect if mobile
    isMobile.current = window.innerWidth < 768;

    // const isMobile = window.innerWidth < 768;

    // Only add GSAP listeners on desktop
    if (!isMobile) {
      scroller.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("keydown", handleKeyDown);
    }

    const scrollToSection = (index) => {
      if (isScrolling.current || !scroller) return;
      isScrolling.current = true;

      gsap.to(scroller, {
        scrollTo: { y: sections[index], autoKill: false },
        duration: isMobile.current ? 0.8 : 1, // Faster on mobile
        ease: "power2.inOut",
        onComplete: () => {
          currentSection = index;
          isScrolling.current = false;
        },
      });
    };

    // Wheel event for snap scrolling (Desktop)
    const handleWheel = (e) => {
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

    // Touch events for mobile swipe
    let touchStartY = 0;
    let touchStartTime = 0;
    let isTouching = false;

    const handleTouchStart = (e) => {
      // Don't interfere with touches on interactive elements
      if (
        e.target.tagName === "CANVAS" ||
        e.target.closest("header") ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        return;
      }
      isTouching = true;
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    };

    const handleTouchMove = (e) => {
      // Don't prevent default unless actively snapping
      if (isScrolling.current && isTouching) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (!isTouching || isScrolling.current) {
        isTouching = false;
        return;
      }

      // Don't interfere with interactive elements
      if (
        e.target.tagName === "CANVAS" ||
        e.target.closest("header") ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        isTouching = false;
        return;
      }

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      const diff = touchStartY - touchEndY;
      const timeDiff = touchEndTime - touchStartTime;

      // More lenient for mobile - require faster swipe
      if (Math.abs(diff) > 80 && timeDiff < 600) {
        e.preventDefault();
        if (diff > 0 && currentSection < sections.length - 1) {
          scrollToSection(currentSection + 1);
        } else if (diff < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1);
        }
      }

      isTouching = false;
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

    // Add event listeners
    scroller.addEventListener("wheel", handleWheel, { passive: false });
    scroller.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    scroller.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    scroller.addEventListener("touchend", handleTouchEnd, {
      passive: false,
    });
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      scroller.removeEventListener("wheel", handleWheel);
      scroller.removeEventListener("touchstart", handleTouchStart);
      scroller.removeEventListener("touchmove", handleTouchMove);
      scroller.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="h-screen overflow-y-auto overflow-x-hidden md:snap-none snap-y snap-mandatory"
    >
      {/* snap-start */}
      <section
        id="home"
        className="relative w-screen h-screen md:snap-none snap-start"
      >
        <HeroSection />
      </section>

      <section
        id="about"
        className="w-screen h-screen flex items-start lg:items-center justify-center relative"
      >
        <AboutSection />
      </section>

      <section id="projects" className="w-screen h-screen">
        <ProjectsSection />
      </section>

      <section id="contact" className="w-screen h-screen">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
