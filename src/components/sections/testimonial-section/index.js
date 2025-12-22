"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    id: 1,
    text: "Ann didn't just redesign our site, she made it easier and more enjoyable to use. She simplified everything while keeping it visually clean. We couldn't be happier.",
    author: "Jeiann Ermac",
    position: "Systems Administrator",
    company: "KK Solutions",
    image: "/images/author/JeiannErmac.png",
  },
  {
    id: 2,
    text: "Ann was a dream to work with! She took the time to understand our goals and built a beautiful, high-performance site that fits our business perfectly. She's professional, kind, and so talented. We couldn't have asked for a better experience.",
    author: "Zandor Magno",
    position: "CMAS Course Director",
    company: "Pawikan Dive Center",
    image: "/images/author/ZandorMagno.png",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialRef = useRef(null);
  const authorRef = useRef(null);
  const quoteRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const animateTestimonial = (direction = "next") => {
    const tl = gsap.timeline();

    // Animate out
    tl.to([testimonialRef.current, authorRef.current, imageRef.current], {
      opacity: 0,
      y: direction === "next" ? -30 : 30,
      duration: 0.4,
      ease: "power2.in",
    })
      .to(
        quoteRef.current,
        {
          scale: 0.8,
          opacity: 0.5,
          duration: 0.3,
        },
        "<"
      )
      .call(() => {
        // Change content in the middle
        setCurrentIndex((prev) => {
          if (direction === "next") {
            return (prev + 1) % testimonials.length;
          } else {
            return (prev - 1 + testimonials.length) % testimonials.length;
          }
        });
      })
      // Animate in
      .fromTo(
        [testimonialRef.current, authorRef.current, imageRef.current],
        {
          opacity: 0,
          y: direction === "next" ? 30 : -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }
      )
      .to(
        quoteRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
        },
        "<"
      );
  };

  const handleNext = () => {
    animateTestimonial("next");
  };

  const handlePrev = () => {
    animateTestimonial("prev");
  };

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        animateTestimonial("next");
      }
    }, 6000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    // Initial entrance animation
    gsap.fromTo(
      [testimonialRef.current, authorRef.current, imageRef.current],
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    gsap.from(quoteRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    // Start autoplay
    startAutoplay();

    return () => stopAutoplay();
  }, []);

  // Restart autoplay when isPaused changes
  useEffect(() => {
    if (!isPaused) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    return () => stopAutoplay();
  }, [isPaused]);

  useEffect(() => {
    const section = sectionRef.current;

    // GSAP animation - scroll trigger
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
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="max-w-screen-2xl mx-auto w-full px-6 md:px-10 py-16 lg:py-25 flex justify-center items-center border-t border-(--foreground)/15"
    >
      <div className="max-w-4xl flex-1">
        <h1 className="text-5xl lg:text-6xl font-header chrome-text">
          TESTIMO<span className="font-wide chrome-text">N</span>&nbsp;IALS
        </h1>
        <hr className="mt-2 mb-6 border-t-2" />
        <p>
          Don&apos;t just take our word for it. Hear from some of our satisfied
          clients.
        </p>

        {/* Testimonial Card */}
        <div
          className="mt-4 relative bg-(--foreground)/5 border border-(--foreground)/20 rounded-2xl p-8 md:p-16 overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Pause Indicator */}
          {isPaused && (
            <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-(--foreground)/10 backdrop-blur-sm border border-(--foreground)/20 rounded-full text-xs text-(--foreground)/60">
              Paused
            </div>
          )}

          {/* Quote Icon */}
          <div ref={quoteRef} className="absolute top-8 right-8 opacity-10">
            <Quote className="w-24 md:w-40 h-24 md:h-40 text-(--foreground)/10" />
          </div>

          {/* Testimonial Text */}
          <div className="relative z-10">
            <p
              ref={testimonialRef}
              className="text-lg md:text-2xl text-(--foreground) leading-relaxed mb-8 italic"
            >
              &quot;{currentTestimonial.text}&quot;
            </p>

            {/* Author Info */}
            <div ref={authorRef} className="flex items-center gap-4">
              {/* Client Image */}
              <div
                ref={imageRef}
                className="relative w-16 h-16 md:w-20 md:h-20 shrink-0"
              >
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  fill
                  className="rounded-full object-cover border-4 border-(--foreground)/20 shadow-lg"
                  sizes="(max-width: 768px) 64px, 80px"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-lg font-bold text-(--foreground)">
                  {currentTestimonial.author}
                </p>
                <p className="text-sm text-(--foreground)/60 mb-[-5]">
                  {currentTestimonial.position}
                </p>
                <p className="text-sm text-(--foreground)/80">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 gap-4">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="group flex items-center justify-center w-12 h-12 border border-(--foreground)/30 text-(--foreground) hover:bg-(--foreground) hover:text-(--background) transition-all duration-300 disabled:opacity-50 shadow-[4px_4px_0_0_var(--foreground)] hover:shadow-[8px_8px_0_0_var(--foreground)] active:shadow-[2px_2px_0_0_var(--foreground)]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index !== currentIndex) {
                      const direction = index > currentIndex ? "next" : "prev";
                      setCurrentIndex(index);
                      animateTestimonial(direction);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-(--foreground) w-8"
                      : "bg-(--foreground)/30 hover:bg-(--foreground)/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="group flex items-center justify-center w-12 h-12 border border-(--foreground)/30 text-(--foreground) hover:bg-(--foreground) hover:text-(--background) transition-all duration-300 disabled:opacity-50 shadow-[4px_4px_0_0_var(--foreground)] hover:shadow-[8px_8px_0_0_var(--foreground)] active:shadow-[2px_2px_0_0_var(--foreground)]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-6">
          <p className="text-sm text-(--foreground)/50">
            {currentIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}
