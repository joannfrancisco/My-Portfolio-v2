"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, TrendingUp, Zap } from "lucide-react";
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
      {/* Large decorative number */}
      <div className="absolute opacity-[0.03] dark:opacity-[0.08] top-6 right-16 text-[20rem] md:text-[30rem] font-black text-foreground leading-none select-none pointer-events-none -translate-y-1/4 translate-x-1/4">
        01
      </div>

      <div ref={ref} className="relative z-10">
        {/* Top section - Header */}
        <div className="border-b border-foreground/10">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
            <div className="grid md:grid-cols-12 gap-1 md:gap-12 items-end">
              {/* Left - Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="md:col-span-3"
              >
                <Label label="The Challenge" />
                <div className="hidden md:block w-12 h-px bg-linear-to-r from-cyan-500 to-transparent mt-6" />
              </motion.div>

              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-9"
              >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                  Your Website Should Be Your{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-(--cyan)">
                      Best Salesperson
                    </span>
                    {/* <motion.span
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="absolute bottom-2 left-0 right-0 h-3 bg-cyan-500/20 dark:bg-cyan-500/30 z-0 origin-left"
                    /> */}
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-(--foreground)/80 max-w-3xl leading-relaxed">
                  Most small business websites are outdated, slow, and lose
                  customers before they even engage. Custom-coded solutions
                  eliminate these obstacles and turn visitors into revenue.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Middle section - Stats/Features */}
        <div className="border-b border-foreground/10">
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

        {/* Bottom section - The Solution */}
        <div className="relative">
          {/* Decorative number */}
          <div className="absolute opacity-[0.03] dark:opacity-[0.08] bottom-16 left-0 text-[20rem] md:text-[30rem] font-black text-foreground leading-none select-none pointer-events-none translate-y-1/4 -translate-x-1/4">
            02
          </div>

          <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              {/* Left - Big statement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="md:col-span-7"
              >
                <Label label="The Solution" />
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-[1.1]">
                  That&apos;s where{" "}
                  <span className="text-(--cyan)">custom development</span>{" "}
                  transforms everything.
                </h3>
              </motion.div>

              {/* Right - Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="md:col-span-5 flex flex-col justify-end"
              >
                <p className="text-xl text-(--foreground)/80 leading-relaxed mb-8">
                  Hand-crafted code. Blazing performance. Designed to convert
                  casual browsers into loyal customers—all while you focus on
                  growing your business.
                </p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
