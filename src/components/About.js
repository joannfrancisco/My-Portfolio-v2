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
    <section
      id="about"
      className="py-24 md:py-32 px-6 bg-white dark:bg-navy-900"
    >
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
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-black rounded-2xl p-4 shadow-xl border border-navy-100 dark:border-navy-700">
              <p className="text-3xl font-bold text-(--cyan)">15+</p>
              <p className="text-xs text-cyan-50 ">Years in Business</p>
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
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1]">
              Hi, <HeaderSpan span="I'm Ann" />.
            </h2>

            <div className="space-y-4 text-lg text-(--foreground)/80 leading-relaxed">
              <p>
                I&apos;m a software engineer who builds things businesses
                actually use. Websites that earn their keep, web and mobile apps
                that feel good to open, and custom software that quietly handles
                the heavy lifting. I&apos;m not just interested in the code;
                I&apos;m interested in the results.
              </p>

              <p>
                Before tech, I spent 15 years in banking. That&apos;s where I
                learned how businesses really work, why details matter, and how
                to solve problems that count. Now I bring that same mindset to
                every project I take on.
              </p>

              <p>
                I call myself an alchemist because the best software feels a
                little like magic. Clean design, fast performance, thoughtful
                details. You shouldn&apos;t have to think about how it works,
                only about what it frees you up to do.
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
                  className="flex items-center gap-2 text-(--foreground)/80"
                >
                  <span className="w-2 h-2 rounded-full bg-(--cyan)" />
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
