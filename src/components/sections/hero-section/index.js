"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Zap, Award, TrendingUp, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const trustRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.4,
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 0.9,
          },
          "-=0.3"
        )
        .from(
          subheadlineRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          statsRef.current?.children || [],
          {
            opacity: 0,
            y: 25,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          trustRef.current?.children || [],
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="max-w-screen-2xl mx-auto relative h-dvh sm:h-full sm:min-h-[800px] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-16 lg:py-25  bg-(--section)/20"
    >
      {/* Main Content */}
      <div className="hero-container relative z-10 text-center max-w-4xl w-full ">
        {/* Badge */}
        {/* <div ref={badgeRef} className="mb-10">
          <span className="hero-badge">
            <Zap className="w-4 h-4" />
            <span>Transform Your Online Presence</span>
          </span>
        </div> */}

        {/* Headline */}
        {/* Headline */}
        <h1 ref={headlineRef} className="hero-headline mb-6">
          <span className="hero-subtitle">Small Business</span>
          <span className="chrome-text">
            Web Designer <br /> & Developer
          </span>
        </h1>
        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-base lg:text-2xl max-w-lg lg:max-w-2xl mx-auto mb-10 text-(--foreground)/80"
        >
          Building high-performance websites that transform visitors into loyal
          customers.
        </p>
        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap items-center justify-center gap-5 md:gap-12 mb-12"
        >
          <div className="text-center">
            <div className="hero-stat-number mb-1">3x</div>
            <div className="hero-stat-label">Faster Loading</div>
          </div>

          <div className="stat-divider hidden sm:block" />

          <div className="text-center">
            <div className="hero-stat-number mb-1">2-4</div>
            <div className="hero-stat-label">Week Delivery</div>
          </div>

          <div className="stat-divider hidden sm:block" />

          <div className="text-center">
            <div className="hero-stat-number mb-1">100%</div>
            <div className="hero-stat-label">Custom-Coded</div>
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="mb-4">
          <a href="#contact">
            <button className="hero-cta group ">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </a>
        </div>

        {/* Trust Indicators */}
        <div
          ref={trustRef}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 opacity-70" />
            <span className="trust-label">Pixel-Perfect Design</span>
          </div>

          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 opacity-70" />
            <span className="trust-label">No Templates</span>
          </div>

          <div className="flex items-center gap-2.5">
            <TrendingUp className="w-5 h-5 opacity-70" />
            <span className="trust-label">SEO Optimized</span>
          </div>

          <div className="flex items-center gap-2.5">
            <Zap className="w-5 h-5 opacity-70" />
            <span className="trust-label">Mobile-First</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-inner">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
}
