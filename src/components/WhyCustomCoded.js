"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Zap, Wrench, Shield } from "lucide-react";
import Label from "./shared/Label";
import HeaderSpan from "./shared/HeaderSpan";

export default function WhyCustomCoded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Wrench,
      title: "Built Around Your Workflow",
      description:
        "Off-the-shelf software makes you adapt to it. Custom software adapts to how your business actually runs, no workarounds, no duct tape.",
      stat: "Fits your process, not the other way around",
    },
    {
      icon: Zap,
      title: "Automate the Busywork",
      description:
        "Repetitive tasks, manual data entry, copy-pasting between tools. I build systems that handle the boring stuff quietly in the background.",
      stat: "Hours back in your week",
    },
    {
      icon: Shield,
      title: "Full Ownership, No Lock-In",
      description:
        "You own the code, the data, and the infrastructure. No per-seat fees that scale with your team, no vendor holding your business hostage.",
      stat: "Zero platform dependencies",
    },
  ];

  const comparison = [
    { feature: "Fits Your Exact Workflow", custom: true, saas: false },
    { feature: "Custom Business Logic", custom: true, saas: false },
    { feature: "AI & Automation Built In", custom: true, saas: false },
    { feature: "Scales Without Per-Seat Fees", custom: true, saas: false },
    { feature: "Full Data Ownership", custom: true, saas: false },
    { feature: "Integrates With Anything", custom: true, saas: false },
    { feature: "No Vendor Lock-In", custom: true, saas: false },
    { feature: "Quick to Launch", custom: true, saas: true },
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
          <Label label="The Custom Software Difference" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            Why <HeaderSpan span="Build Custom" />?
          </h2>
          <p className="text-xl text-(--foreground)/80 max-w-3xl mx-auto">
            Off-the-shelf tools are great for getting started. But as your
            business grows, generic software starts to cost you time, money, and
            flexibility. Custom is how you take that back.
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
                <tr className="bg-navy-900 dark:bg-navy-950">
                  <th className="text-left p-6 font-bold text-lg">Feature</th>
                  <th className="text-center p-6 font-bold text-lg">
                    <span className="text-(--cyan)">Custom Software</span>
                  </th>
                  <th className="text-center p-6 font-semibold">
                    Off-the-Shelf SaaS
                    <div className="text-xs font-normal text-navy-400 mt-1">
                      (Salesforce, Monday, etc.)
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
                      {row.saas ? (
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
          <p className="text-lg max-w-3xl mx-auto text-(--foreground)/80">
            <strong>Bottom line:</strong> If your business has outgrown generic
            tools, or you need software that actually matches how your team
            works, custom is the answer. Built once, owned forever, shaped
            around you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
