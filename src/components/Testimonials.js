"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Button from "./shared/Button";
import Label from "./shared/Label";
import HeaderSpan from "./shared/HeaderSpan";

const AUTOPLAY_INTERVAL = 5000; // 5 seconds per slide

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Thank you so much! I'm really happy with how we're working together. I definitely made the right choice. You're super easy to work with and incredibly fast. Truly a 10/10! ❤️",
      author: "Bea Candaza",
      position: "Founder",
      company: "B Digital Media Marketing Services",
      image: "/images/author/BeaCandaza.jpg",
      rating: 5,
    },
    {
      id: 2,
      text: "Ann was a dream to work with! She took the time to understand our goals and built a beautiful, high-performance site that fits our business perfectly. She's professional, kind, and so talented. We couldn't have asked for a better experience.",
      author: "Zandor Magno",
      position: "Founder & CMAS Course Director",
      company: "Pawikan Divers",
      image: "/images/author/ZandorMagno.png",
      rating: 5,
    },
    {
      id: 3,
      text: "Working with Ann was so easy. She didn't just redesign our site, she made it easier and more enjoyable to use. She simplified everything while keeping it visually clean. We couldn't be happier.",
      author: "Jeiann Ermac",
      position: "Systems Administrator",
      company: "KK Solutions",
      image: "/images/author/JeiannErmac.png",
      rating: 5,
    },
  ];

  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      if (width >= 1024)
        setScreenSize("desktop"); // lg and up: 3 cards
      else if (width >= 640)
        setScreenSize("tablet"); // sm/md: 2 cards
      else setScreenSize("mobile"); // below sm: 1 card
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const cardsPerView =
    screenSize === "desktop" ? 3 : screenSize === "tablet" ? 2 : 1;
  // Number of "pages" we can navigate to (last page shows last N cards aligned to end)
  const totalSlides = Math.max(
    1,
    Math.ceil(testimonials.length / cardsPerView),
  );

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex],
  );

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-rotate with pause on hover
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const interval = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, totalSlides]);

  // Reset index if cardsPerView changes (avoid out-of-bounds)
  useEffect(() => {
    if (currentIndex >= totalSlides) setCurrentIndex(0);
  }, [currentIndex, totalSlides]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  // Slide animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  // Get the testimonials to show in the current slide
  const visibleTestimonials = testimonials.slice(
    currentIndex * cardsPerView,
    currentIndex * cardsPerView + cardsPerView,
  );

  return (
    <section className="py-24 md:py-32 px-6 bg-white dark:bg-navy-900 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left sm:text-center mb-16"
        >
          <Label label="Client Success Stories" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            What <HeaderSpan span="Clients Say" />
          </h2>
          <p className="text-xl text-navy-300 max-w-2xl mx-auto text-(--foreground)/80">
            Don&apos;t just take my word for it. Hear from small business owners
            who&apos;ve transformed their online presence.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          {/* Slide Area */}
          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className={`grid gap-8 ${
                  visibleTestimonials.length === 1
                    ? "grid-cols-1 max-w-md mx-auto"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {visibleTestimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="hidden md:flex absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-(--cyan)/60 hover:bg-(--cyan) text-white items-center justify-center shadow-lg hover:scale-110 transition-all z-20 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="hidden md:flex absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-(--cyan)/60 text-white items-center justify-center shadow-lg hover:scale-110 transition-transform z-20 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots */}
          {totalSlides > 1 && (
            <div
              className="flex justify-center gap-2 mt-8"
              role="tablist"
              aria-label="Select testimonial slide"
            >
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    index === currentIndex
                      ? "w-8 bg-(--cyan)"
                      : "w-2 bg-(--foreground)/30 hover:bg-(--foreground)/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-[1.1]">
            Ready to join these successful businesses?
          </h3>
          <p className="text-(--foreground)/80 text-lg mb-6 max-w-2xl mx-auto">
            Let&apos;s build a website that reflects your brand and supports
            your business goals.
          </p>
          <Button href="#contact" icon={null}>
            Start Your Project
          </Button>
        </motion.div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_2px,transparent_3px),linear-gradient(90deg,rgba(6,182,212,0.03)_2px,transparent_3px)] bg-size-[64px_64px] pointer-events-none" />
    </section>
  );
}

// Extracted card component to keep the main component readable
function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative">
      <div className="relative p-8 rounded-2xl bg-white dark:bg-navy-900 backdrop-blur-xl border border-navy-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 h-full flex flex-col">
        {/* Quote Icon */}
        <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-(--cyan) flex items-center justify-center shadow-xl shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
          <Quote className="w-6 h-6 text-white" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-(--cyan) text-(--cyan)" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-navy-100 leading-relaxed mb-6 text-lg italic text-(--foreground)/80 flex-grow">
          &quot;{testimonial.text}&quot;
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-navy-700/50">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-cyan-500/20 group-hover:ring-cyan-500/50 transition-all flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div>
            <p className="font-bold text-lg text-(--foreground)/80">
              {testimonial.author}
            </p>
            <p className="text-sm text-(--foreground)/80">
              {testimonial.position}
            </p>
            <p className="text-sm text-(--foreground)/80 font-medium">
              {testimonial.company}
            </p>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-(--cyan)/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}
