"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Zap, Palette, Shield } from "lucide-react";
import Label from "./shared/Label";
import HeaderSpan from "./shared/HeaderSpan";

export default function WhyCustomCoded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: "Lightning-Fast Performance",
      description:
        "Custom code is optimized specifically for your needs—no bloated templates or unnecessary features slowing you down.",
      stat: "3x faster load times",
    },
    {
      icon: Palette,
      title: "Complete Design Freedom",
      description:
        "Not limited by templates or drag-and-drop constraints. Every element is designed and coded exactly as you envision it.",
      stat: "100% unique to your brand",
    },
    {
      icon: Shield,
      title: "Full Ownership & Control",
      description:
        "You own everything—the code, the design, the hosting. No monthly platform fees or vendor lock-in.",
      stat: "Zero platform dependencies",
    },
  ];

  const comparison = [
    { feature: "Page Load Speed", custom: true, nocode: false },
    { feature: "Unique Design", custom: true, nocode: false },
    { feature: "SEO Performance", custom: true, nocode: false },
    { feature: "Scalability", custom: true, nocode: false },
    { feature: "Full Code Ownership", custom: true, nocode: false },
    { feature: "No Monthly Platform Fees", custom: true, nocode: false },
    { feature: "Advanced Animations", custom: true, nocode: false },
    { feature: "Mobile Optimization", custom: true, nocode: true },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-warm-50 dark:bg-navy-800">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left sm:text-center mb-16"
        >
          <Label label="The Custom-Coded Difference" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6  leading-[1.1]">
            Why <HeaderSpan span="Custom Development" />?
          </h2>
          <p className="text-xl text-(--foreground)/80 max-w-3xl mx-auto">
            No-code platforms are great for quick starts, but custom development
            gives you maximum control, performance, and long-term value.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-700 hover:border-cyan-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 mb-6 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-(--cyan)" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-(--foreground)">
                {benefit.title}
              </h3>
              <p className="text-(--foreground)/80 leading-relaxed mb-4">
                {benefit.description}
              </p>
              <div className="inline-block px-4 py-2 rounded-lg bg-cyan-500/10 text-(--cyan) text-sm font-semibold">
                {benefit.stat}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="overflow-hidden rounded-2xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900 shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-900 dark:bg-navy-950 ">
                  <th className="text-left p-6 font-bold text-lg">Feature</th>
                  <th className="text-center p-6 font-bold text-lg">
                    <span className="text-(--cyan)">Custom-Coded</span>
                  </th>
                  <th className="text-center p-6 font-semibold">
                    No-Code Platforms
                    <div className="text-xs font-normal text-navy-400 mt-1">
                      (Wix, Squarespace, etc.)
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-navy-100 dark:border-navy-800 ${
                      index % 2 === 0
                        ? "bg-warm-50 dark:bg-navy-900"
                        : "bg-white dark:bg-navy-950"
                    }`}
                  >
                    <td className="p-6 font-medium text-(--foreground)/80">
                      {row.feature}
                    </td>
                    <td className="text-center p-6">
                      {row.custom ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-(--cyan)">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy-200 dark:bg-navy-700">
                          <X className="w-5 h-5 text-(--foreground)/80" />
                        </div>
                      )}
                    </td>
                    <td className="text-center p-6">
                      {row.nocode ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy-300 dark:bg-navy-700">
                          <Check className="w-5 h-5 text-navy-700 dark:text-navy-300" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy-200 dark:bg-navy-800">
                          <X className="w-5 h-5 text-navy-500 dark:text-navy-400" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-left sm:text-center"
        >
          <p className=" text-lg max-w-3xl mx-auto text-(--foreground)/80">
            <strong>Bottom line:</strong> Custom development is the best choice
            when you want maximum performance, complete design control, and a
            website that truly stands out. For businesses serious about their
            online presence, it&apos;s the smartest investment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
