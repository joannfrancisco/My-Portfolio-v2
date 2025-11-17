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
//     const sections = gsap.utils.toArray("section");

//     // Check if mobile landscape (height < width AND height < 500px)
//     const isMobileLandscape = () => {
//       return window.innerHeight < window.innerWidth && window.innerHeight < 500;
//     };

//     if (!isMobileLandscape()) {
//       // All screens except mobile landscape: Snap scrolling with GSAP ScrollTo
//       let currentSection = 0;

//       const scrollToSection = (index) => {
//         if (isScrolling.current) return;
//         isScrolling.current = true;

//         gsap.to(scroller, {
//           scrollTo: { y: sections[index], autoKill: false },
//           duration: 1,
//           ease: "power2.inOut",
//           onComplete: () => {
//             currentSection = index;
//             isScrolling.current = false;
//           },
//         });
//       };

//       // Wheel event for snap scrolling
//       const handleWheel = (e) => {
//         if (isScrolling.current) {
//           e.preventDefault();
//           return;
//         }

//         if (e.deltaY > 0 && currentSection < sections.length - 1) {
//           // Scroll down
//           e.preventDefault();
//           scrollToSection(currentSection + 1);
//         } else if (e.deltaY < 0 && currentSection > 0) {
//           // Scroll up
//           e.preventDefault();
//           scrollToSection(currentSection - 1);
//         }
//       };

//       // Touch events for mobile swipe
//       let touchStartY = 0;
//       let touchStartTime = 0;

//       const handleTouchStart = (e) => {
//         touchStartY = e.touches[0].clientY;
//         touchStartTime = Date.now();
//       };

//       const handleTouchMove = (e) => {
//         // Prevent default scrolling during snap scroll
//         if (isScrolling.current) {
//           e.preventDefault();
//         }
//       };

//       const handleTouchEnd = (e) => {
//         if (isScrolling.current) return;

//         const touchEndY = e.changedTouches[0].clientY;
//         const touchEndTime = Date.now();
//         const diff = touchStartY - touchEndY;
//         const timeDiff = touchEndTime - touchStartTime;

//         // Require minimum swipe distance and maximum time (for velocity)
//         if (Math.abs(diff) > 50 && timeDiff < 300) {
//           if (diff > 0 && currentSection < sections.length - 1) {
//             // Swipe up
//             e.preventDefault();
//             scrollToSection(currentSection + 1);
//           } else if (diff < 0 && currentSection > 0) {
//             // Swipe down
//             e.preventDefault();
//             scrollToSection(currentSection - 1);
//           }
//         }
//       };

//       // Keyboard navigation
//       const handleKeyDown = (e) => {
//         if (isScrolling.current) return;

//         if (
//           (e.key === "ArrowDown" || e.key === "PageDown") &&
//           currentSection < sections.length - 1
//         ) {
//           e.preventDefault();
//           scrollToSection(currentSection + 1);
//         } else if (
//           (e.key === "ArrowUp" || e.key === "PageUp") &&
//           currentSection > 0
//         ) {
//           e.preventDefault();
//           scrollToSection(currentSection - 1);
//         }
//       };

//       scroller.addEventListener("wheel", handleWheel, { passive: false });
//       scroller.addEventListener("touchstart", handleTouchStart, {
//         passive: true,
//       });
//       scroller.addEventListener("touchmove", handleTouchMove, {
//         passive: false,
//       });
//       scroller.addEventListener("touchend", handleTouchEnd, {
//         passive: false,
//       });
//       window.addEventListener("keydown", handleKeyDown);

//       // Handle resize to check if switched to/from landscape
//       const handleResize = () => {
//         if (isMobileLandscape()) {
//           scroller.removeEventListener("wheel", handleWheel);
//           scroller.removeEventListener("touchstart", handleTouchStart);
//           scroller.removeEventListener("touchmove", handleTouchMove);
//           scroller.removeEventListener("touchend", handleTouchEnd);
//           window.removeEventListener("keydown", handleKeyDown);
//         }
//       };

//       window.addEventListener("resize", handleResize);

//       return () => {
//         scroller.removeEventListener("wheel", handleWheel);
//         scroller.removeEventListener("touchstart", handleTouchStart);
//         scroller.removeEventListener("touchmove", handleTouchMove);
//         scroller.removeEventListener("touchend", handleTouchEnd);
//         window.removeEventListener("keydown", handleKeyDown);
//         window.removeEventListener("resize", handleResize);
//       };
//     }
//   }, []);

//   return (
//     <div ref={scrollerRef} className="h-screen overflow-hidden">
//       <section id="home" className="relative w-screen h-screen ">
//         <HeroSection />
//       </section>

//       <section
//         id="about"
//         className="w-screen h-screen flex items-start lg:items-center justify-center relative"
//       >
//         <AboutSection />
//       </section>

//       <section id="projects" className="w-screen h-screen ">
//         <ProjectsSection />
//       </section>

//       <section id="contact" className="w-screen h-screen">
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
  const listenersActive = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const sections = gsap.utils.toArray("section");
    let currentSection = 0;

    // Check if mobile landscape (height < width AND height < 500px)
    const isMobileLandscape = () => {
      return window.innerHeight < window.innerWidth && window.innerHeight < 500;
    };

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

    // Wheel event for snap scrolling
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
    let isSwiping = false;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
      isSwiping = true;
    };

    const handleTouchMove = (e) => {
      if (!isSwiping) return;

      // Only prevent if we're actively scrolling between sections
      if (isScrolling.current) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (!isSwiping || isScrolling.current) {
        isSwiping = false;
        return;
      }

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      const diff = touchStartY - touchEndY;
      const timeDiff = touchEndTime - touchStartTime;

      // Require minimum swipe distance of 30px and maximum time of 500ms
      if (Math.abs(diff) > 30 && timeDiff < 500) {
        if (diff > 0 && currentSection < sections.length - 1) {
          e.preventDefault();
          scrollToSection(currentSection + 1);
        } else if (diff < 0 && currentSection > 0) {
          e.preventDefault();
          scrollToSection(currentSection - 1);
        }
      }

      isSwiping = false;
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

    const addListeners = () => {
      if (listenersActive.current) return;

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

      listenersActive.current = true;
    };

    const removeListeners = () => {
      if (!listenersActive.current) return;

      scroller.removeEventListener("wheel", handleWheel);
      scroller.removeEventListener("touchstart", handleTouchStart);
      scroller.removeEventListener("touchmove", handleTouchMove);
      scroller.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);

      listenersActive.current = false;
    };

    // Initial setup
    if (!isMobileLandscape()) {
      addListeners();
    }

    // Handle resize to check if switched to/from landscape
    const handleResize = () => {
      if (isMobileLandscape()) {
        removeListeners();
      } else {
        addListeners();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      removeListeners();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="h-screen overflow-y-auto overflow-x-hidden"
    >
      <section id="home" className="relative w-screen h-screen">
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
