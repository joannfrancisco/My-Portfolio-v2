"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, TrendingUp, Zap, ArrowRight } from "lucide-react";
import Label from "./shared/Label";

export default function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: Target,
      stat: "24/7",
      text: "Your digital storefront never sleeps—shouldn't it work tirelessly for you?",
    },
    {
      icon: TrendingUp,
      stat: "100%",
      text: "Turn every single visitor into a meaningful opportunity with optimized conversion",
    },
    {
      icon: Zap,
      stat: "<3s",
      text: "Users abandon slow sites. Every second of load time costs you revenue",
    },
  ];

  return (
    <section className="relative bg-background max-w-screen-2xl mx-auto">
      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32"
      >
        {/* PROBLEM SECTION - Z Pattern Part 1 (Top Left to Right) */}
        <div className="relative mb-24 md:mb-32">
          {/* Decorative 01 - Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -top-20 -right-10 md:-right-20 text-[12rem] md:text-[20rem] lg:text-[25rem] font-black  leading-none select-none pointer-events-none"
          >
            01
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - Problem Header */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <Label label="The Challenge" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 ">
                Your Website Should Be Your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-(--cyan)">
                    Best Salesperson
                  </span>
                </span>
              </h2>
              <div className="w-24 h-1 bg-linear-to-r from-(--cyan) to-transparent" />
            </motion.div>

            {/* Right - Problem Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10"
            >
              <p className="text-xl md:text-2xl text-(--foreground)/80 leading-relaxed">
                Most small business websites are outdated, slow, and lose
                customers before they even engage. Custom-coded solutions
                eliminate these obstacles and turn visitors into revenue.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Middle section - Stats/Features */}
        <div className="border-b border-t border-foreground/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/10">
              {problems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="p-8 md:p-12 group hover:bg-foreground/5 transition-colors duration-500"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300 border border-cyan-500/20">
                      <item.icon className="w-6 h-6 text-(--cyan)" />
                    </div>
                    <span className="text-4xl md:text-5xl font-black text-(--cyan) group-hover:scale-110 transition-transform duration-300 origin-left">
                      {item.stat}
                    </span>
                  </div>
                  <p className="text-(--foreground)/80 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SOLUTION SECTION - Z Pattern Part 3 (Bottom Right to Left) */}
        <div className="relative mt-24 md:mt-32">
          {/* Decorative 02 - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute -bottom-20 -left-10 md:-left-20 text-[12rem] md:text-[20rem] lg:text-[25rem] font-black  leading-none select-none pointer-events-none"
          >
            02
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - Solution Description (comes second visually, but first in code for mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 1 }}
              className="relative z-10 order-2 md:order-1"
            >
              <p className="text-xl md:text-2xl text-(--foreground)/80 leading-relaxed mb-8">
                Hand-crafted code. Blazing performance. Designed to convert
                casual browsers into loyal customers—all while you focus on
                growing your business.
              </p>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <a
                  href="#services"
                  className="group inline-flex items-center gap-3 text-foreground font-semibold hover:text-(--cyan) transition-colors"
                >
                  <span className="relative">
                    See how it works
                    <span className="absolute bottom-0 left-0 w-full h-px bg-(--cyan) scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </span>
                  <span className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-(--cyan) group-hover:border-(--cyan) transition-all duration-300">
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 group-hover:text-white transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right - Solution Header (comes first visually) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="relative z-10 order-1 md:order-2"
            >
              <Label label="The Solution" />
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] ">
                That&apos;s where{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-(--cyan)">
                    custom development
                  </span>
                </span>{" "}
                transforms everything.
              </h3>
              <div className="w-24 h-1 bg-linear-to-r from-(--cyan) to-transparent mt-6" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
