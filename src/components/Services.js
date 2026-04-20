"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Smartphone, Cog, Sparkles, Check } from "lucide-react";
import Button from "./shared/Button";
import Label from "./shared/Label";
import HeaderSpan from "./shared/HeaderSpan";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Globe,
      title: "Websites & Landing Pages",
      description:
        "Fast, beautiful sites that actually convert. Built to rank, built to sell, built around your brand.",
      forYouIf: [
        "You want a site that stands out, not a template",
        "Your current site is slow or losing leads",
        "You need landing pages that match your ad spend",
      ],
      features: [
        "Next.js & modern stack",
        "SEO optimized",
        "Conversion focused",
      ],
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Apps",
      description:
        "Full applications for customers, teams, or both. One codebase, every device, zero compromises on performance.",
      forYouIf: [
        "You have an idea and need an MVP fast",
        "You're ready to launch something real",
        "Your users expect a proper app, not a clunky web page",
      ],
      features: [
        "iOS, Android & web from one codebase",
        "Secure auth & payments",
        "Scales with your users",
      ],
    },
    {
      icon: Cog,
      title: "Custom Business Software",
      description:
        "CRMs, dashboards, internal tools, and SaaS products built around how your business actually works. No more workarounds.",
      forYouIf: [
        "You've outgrown spreadsheets and generic SaaS",
        "Your team juggles too many disconnected tools",
        "You need software that fits your workflow exactly",
      ],
      features: [
        "Custom dashboards & admin panels",
        "Integrates with your existing stack",
        "You own the code and data",
      ],
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      description:
        "AI agents, smart workflows, and automations that quietly do the repetitive work so your team can focus on what matters.",
      forYouIf: [
        "Your team loses hours to manual, repetitive work",
        "You want AI that actually solves problems, not gimmicks",
        "You have data sitting idle that could be working for you",
      ],
      features: [
        "AI-powered workflows",
        "Auto-reporting & data sync",
        "Custom GPT integrations",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left sm:text-center mb-16"
        >
          <Label label="What I Build" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            <HeaderSpan span="Full-Stack" /> Solutions
          </h2>
          <p className="text-xl text-(--foreground)/80 max-w-2xl mx-auto">
            From a simple landing page to a full business system, everything I
            build is made to run fast, scale with you, and actually get used.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 rounded-2xl bg-white dark:bg-navy-900 border-2 border-gray-200 dark:border-navy-700 hover:border-(--cyan) hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10 transition-all duration-300 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 rounded-xl bg-(--cyan) flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-(--cyan) transition-colors">
                  {service.title}
                </h3>

                <p className="text-(--foreground)/80 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6 p-4 rounded-xl bg-(--background)/20 border border-gray-200 dark:border-navy-700">
                  <h4 className="text-sm font-bold text-(--cyan) mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--cyan)" />
                    Is this for you?
                  </h4>
                  <ul className="space-y-2">
                    {service.forYouIf.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-(--cyan) mt-0.5 shrink-0" />
                        <span className="text-sm text-(--foreground)/80">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-navy-700">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-(--foreground)/80 mb-3">
                    What&apos;s included
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-(--foreground)/65"
                      >
                        <span className="text-(--cyan)">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 sm:p-10 rounded-2xl text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-[1.1]">
              Not sure what you need?
            </h3>
            <p className="text-(--foreground)/80 text-lg mb-6 max-w-2xl mx-auto">
              Tell me the problem, not the solution. We&apos;ll figure out the
              right shape together.
            </p>

            <Button href="#contact" icon={null}>
              Book a Free Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
