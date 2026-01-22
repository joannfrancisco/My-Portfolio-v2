"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Palette, Code, Rocket } from "lucide-react";
import { Button } from "./shared/Button";
import Label from "./shared/Label";
import HeaderSpan from "./shared/HeaderSpan";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Discovery Call",
      duration: "Week 1",
      description:
        "We discuss your business goals, target audience, and what success looks like for your website.",
      details: [
        "Understand your business & customers",
        "Define goals & success metrics",
        "Review competitor landscape",
        "Establish timeline & budget",
      ],
    },
    {
      number: "02",
      icon: Palette,
      title: "Design & Feedback",
      duration: "Week 1-2",
      description:
        "I create custom designs that reflect your brand and guide users toward conversion. You review and provide feedback.",
      details: [
        "Wireframes & layout concepts",
        "High-fidelity mockups",
        "Interactive prototypes",
        "Refinement based on your feedback",
      ],
    },
    {
      number: "03",
      icon: Code,
      title: "Development",
      duration: "Week 1-3",
      description:
        "I build your website with clean, performant code. You get regular updates and can see progress in real-time.",
      details: [
        "Custom Next.js development",
        "Responsive across all devices",
        "SEO optimization built-in",
        "Regular progress updates",
      ],
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Support",
      duration: "Week 2-3",
      description:
        "Final testing, deployment, and 30 days of free support. Your site goes live and starts working for you.",
      details: [
        "Comprehensive testing & QA",
        "Domain & hosting setup",
        "Training on content updates",
        "30-day post-launch support",
      ],
    },
  ];

  return (
    <section
      id="process"
      className="py-24 md:py-32 px-6 bg-white dark:bg-navy-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left sm:text-center mb-16"
        >
          <Label label="How It Works" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            Simple, Transparent <HeaderSpan span="Process" />
          </h2>
          <p className="text-xl text-(--foreground)/80 max-w-2xl mx-auto">
            From first conversation to launch, here&apos;s exactly what to
            expect when working together.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 via-cyan-300 to-cyan-500 -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-full lg:w-5/12">
                  <div
                    className={`p-8 rounded-2xl bg-warm-50 dark:bg-navy-800 border border-navy-200 dark:border-navy-700 hover:border-cyan-500 hover:shadow-xl transition-all duration-300`}
                  >
                    {/* Header - Right aligned for even indices (01, 03) */}
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0
                          ? "lg:flex-row-reverse lg:justify-start"
                          : ""
                      }`}
                    >
                      <span className="text-5xl font-bold text-cyan-500/20">
                        {step.number}
                      </span>
                      <div className={index % 2 === 0 ? "lg:text-right" : ""}>
                        <h3 className="text-2xl font-bold mb-1 text-(--foreground)">
                          {step.title}
                        </h3>
                        <span className="text-sm text-cyan-600 font-semibold">
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description - Right aligned for even indices (01, 03) */}
                    <p
                      className={`text-(--foreground)/80 leading-relaxed mb-6 ${
                        index % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Details list - Right aligned for even indices (01, 03) */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-3 ${
                            index % 2 === 0
                              ? "lg:flex-row-reverse lg:text-right"
                              : ""
                          }`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                          <span className="text-sm text-(--foreground)/80">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 hidden lg:flex items-center justify-center lg:w-2/12">
                  <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-xl shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center sm:p-8 rounded-2xl bg-linear-to-br from-navy-900 to-navy-800 dark:from-navy-800 dark:to-navy-700 "
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-[1.1]">
            Timeline: 2-3 Weeks Start to Finish
          </h3>
          <p className="text-(--foreground)/80 text-lg mb-6 max-w-2xl mx-auto">
            Most projects launch within a month. Complex projects may take
            longer, but I&apos;ll give you a clear timeline upfront.
          </p>

          <Button href="/#contact" icon={null}>
            Let&apos;s Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
