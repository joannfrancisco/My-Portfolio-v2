"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Accordion from "@/components/shared/accordion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FaqSection = () => {
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
    <div className="h-full flex flex-col border-y border-(--foreground)/15 max-w-screen-2xl mx-auto w-full">
      <div ref={sectionRef} className="h-full flex justify-center items-center">
        <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-10 py-16 lg:py-25 flex justify-center items-center bg-(--section)/20">
          <div className="max-w-4xl flex-1">
            <h1 className="text-5xl lg:text-6xl font-header chrome-text">
              FA<span className="font-wide chrome-text">Q</span>
            </h1>
            <hr className="mt-2 mb-6 border-t-2" />
            <p>Here are some common questions clients often ask.</p>
            <Accordion />
            <p className="text-xs">
              For additional inquiries, please don’t hesitate to send a message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
