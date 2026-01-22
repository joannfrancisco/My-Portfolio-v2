"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Paintbrush, Code, ShoppingCart, FileText, Check } from "lucide-react";
import Button from "./shared/Button";
import Label from "./shared/Label";
import HeaderSpan from "./shared/HeaderSpan";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description:
        "Your website looks outdated and visitors leave within seconds? Beautiful, intuitive interfaces that guide users naturally toward taking action—because first impressions matter.",
      forYouIf: [
        "Your current site feels unprofessional",
        "Users can't find what they need",
        "Mobile experience is broken or clunky",
        "Competitors' sites look better than yours",
      ],
      features: [
        "User research & wireframing",
        "Interactive prototypes & mockups",
        "Design systems & style guides",
        "Mobile-first responsive layouts",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Tired of slow, buggy websites that don't work right? Lightning-fast, custom-coded solutions built with modern technology that actually perform under pressure.",
      forYouIf: [
        "Your site takes forever to load",
        "You're stuck with a limited template",
        "You need custom features no plugin offers",
        "Your current site breaks on updates",
      ],
      features: [
        "Next.js & React development",
        "Custom web applications",
        "API integration & backend",
        "SEO optimization built-in",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Ready to sell online but overwhelmed by the options? Complete online store solutions combining custom design with Shopify's powerful backend—get selling fast without sacrificing quality.",
      forYouIf: [
        "You want to start selling online now",
        "Generic store templates aren't cutting it",
        "You need inventory management that works",
        "Cart abandonment is killing your sales",
      ],
      features: [
        "Custom Next.js + Shopify integration",
        "Headless commerce architecture",
        "Secure payment processing",
        "Product & inventory management",
      ],
    },
    {
      icon: FileText,
      title: "Landing Pages",
      description:
        "Running ads but getting zero results? High-converting landing pages laser-focused on one goal: turning visitors into customers with compelling copy and strategic design.",
      forYouIf: [
        "Your ads send traffic but no one converts",
        "You're launching a new product or service",
        "You need to capture leads fast",
        "Your homepage is too cluttered for campaigns",
      ],
      features: [
        "Conversion-focused design",
        "A/B testing ready structure",
        "Lead capture forms & CTAs",
        "Analytics & tracking integration",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6 ">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left sm:text-center mb-16"
        >
          <Label label="What I Do" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] ">
            <HeaderSpan span="Full-Stack" /> Solutions
          </h2>
          <p className="text-xl text-(--foreground)/80 max-w-2xl mx-auto">
            Everything you need to establish a powerful online presence that
            works for your business 24/7.
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
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 " />

              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 rounded-xl bg-(--cyan) flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4  group-hover:text-(--cyan) transition-colors">
                  {service.title}
                </h3>

                <p className="text-(--foreground)/80 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Is This For You Section */}
                <div className="mb-6 p-4 rounded-xl bg-(--background)/40 border border-gray-200 dark:border-navy-700">
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

                {/* What You Get */}
                <div className="pt-4 border-t border-gray-200 dark:border-navy-700">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-(--foreground)/50 mb-3">
                    What&apos;s included:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-(--foreground)/60"
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
          className="mt-16  sm:p-10 rounded-2xl text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-[1.1]">
              Not sure what you need?
            </h3>
            <p className="text-(--foreground)/80 text-lg mb-6 max-w-2xl mx-auto">
              I&apos;ll help you figure out the best solution for your business
              goals and budget. Every project starts with a conversation.
            </p>

            <Button href="#contact" icon={null}>
              Schedule a Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
