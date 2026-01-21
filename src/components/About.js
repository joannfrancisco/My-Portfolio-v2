"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Button from "./shared/Button";
import Label from "./shared/Label";
import HeaderSpan from "./shared/HeaderSpan";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      {/* <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 chrome-text leading-snug">
            Building Digital Success Stories
          </h2>
        </motion.div>
      </div> */}

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
              <Image
                src="/images/AboutImage.png"
                alt="Jo Ann Francisco"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative elements */}
              {/* <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl" /> */}
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white dark:bg-navy-800 rounded-2xl p-4 shadow-xl border border-navy-100 dark:border-navy-700">
              <p className="text-3xl font-bold text-cyan-500">15+</p>
              <p className="text-sm text-navy-600 dark:text-navy-400">
                Years in Business
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 space-y-6"
          >
            <Label label="About Me" />
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-navy-50 leading-tight">
              Hi, <HeaderSpan span="I'm Ann" />.
            </h2>

            <div className="space-y-4 text-lg text-navy-600 dark:text-navy-300 leading-relaxed">
              <p>
                I&apos;m a full-stack developer who builds clean, modern
                websites that actually help businesses grow. No fluff, no
                unnecessary complexity, just thoughtful work that gets results.
              </p>

              <p>
                Before tech, I spent 15 years in banking. That&apos;s where I
                learned how businesses really work, why details matter, and how
                to solve problems that count. Now I bring that same mindset to
                every project I take on.
              </p>

              <p>
                I believe good design should feel effortless. Simple layouts.
                Clear navigation. Fast performance. When users get it right
                away, your business wins.
              </p>
            </div>

            {/* Values */}

            <div className="grid grid-cols-2 gap-4 pt-4 ">
              {[
                "Business-minded",
                "Detail-oriented",
                "Clear communicator",
                "Built to last",
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-navy-700 dark:text-navy-300"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center lg:text-left">
              <Button href="#contact" icon={null}>
                Let&apos;s Work Together
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
