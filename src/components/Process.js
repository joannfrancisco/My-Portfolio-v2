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
      title: "Discovery",
      duration: "Week 1",
      description:
        "We map out how your business actually works, where the bottlenecks are, and what success looks like.",
      details: [
        "Understand your business & workflows",
        "Define goals & success metrics",
        "Identify integrations needed",
        "Establish timeline & budget",
      ],
    },
    {
      number: "02",
      icon: Palette,
      title: "Design & Prototype",
      duration: "Week 1-2",
      description:
        "I turn the plan into wireframes and clickable prototypes so you can see it before a single line of code gets written.",
      details: [
        "User flows & wireframes",
        "Interactive prototypes",
        "Design system & UI mockups",
        "Refinement based on feedback",
      ],
    },
    {
      number: "03",
      icon: Code,
      title: "Development",
      duration: "Ongoing",
      description:
        "I build in short sprints with a live staging environment, so you watch the system come together instead of waiting for a big reveal.",
      details: [
        "Full-stack development",
        "API & third-party integrations",
        "Rigorous testing & QA",
        "Regular progress updates",
      ],
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Support",
      duration: "Final week + 30 days",
      description:
        "Deployment, training, and 30 days of priority support. After that, I offer maintenance plans to keep things running as you grow.",
      details: [
        "Deployment & hosting setup",
        "Team training & documentation",
        "30-day priority support",
        "Ongoing maintenance available",
      ],
    },
  ];

  return (
    <section
      id="process"
      className="py-24 md:py-32 px-6 bg-white dark:bg-navy-900 relative overflow-hidden"
    >
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
            From first call to launch, here&apos;s exactly what to expect when
            we work together.
          </p>
        </motion.div>

        <div className="relative">
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
                <div className="w-full lg:w-5/12">
                  <div className="p-8 rounded-2xl bg-warm-50 dark:bg-navy-800 border border-navy-200 dark:border-navy-700 hover:border-cyan-500 hover:shadow-xl transition-all duration-300">
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

                    <p
                      className={`text-(--foreground)/80 leading-relaxed mb-6 ${
                        index % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      {step.description}
                    </p>

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

                <div className="relative z-10 hidden lg:flex items-center justify-center lg:w-2/12">
                  <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-xl shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="hidden lg:block lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center sm:p-8 rounded-2xl bg-linear-to-br from-navy-900 to-navy-800 dark:from-navy-800 dark:to-navy-700"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-[1.1]">
            Timeline: 2 Weeks to 3 Months
          </h3>
          <p className="text-(--foreground)/80 text-lg mb-6 max-w-2xl mx-auto">
            Websites and MVPs ship in 2 to 4 weeks. Full business systems take 2
            to 3 months. Either way, you&apos;ll get a clear timeline upfront.
          </p>

          <Button href="/#contact" icon={null}>
            Let&apos;s Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
