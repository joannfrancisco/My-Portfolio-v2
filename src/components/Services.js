"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Paintbrush, Code, ShoppingCart, FileText } from "lucide-react";
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
        "Beautiful, intuitive interfaces that put your users first. Every design decision backed by user psychology and conversion optimization principles.",
      features: [
        "User research & wireframing",
        "Interactive prototypes",
        "Design systems & style guides",
        "Responsive design for all devices",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom-coded websites and web applications built with cutting-edge technology. Fast, secure, and scalable solutions tailored to your needs.",
      features: [
        "Next.js & React development",
        "Custom web applications",
        "API integration & backend",
        "Performance optimization",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Complete online store solutions that turn browsers into buyers. Custom Next.js storefronts with Shopify backend integration for seamless shopping experiences.",
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
        "High-converting landing pages designed to capture leads and drive sales. Focused messaging, compelling CTAs, and optimized for maximum conversions.",
      features: [
        "Conversion-focused design",
        "A/B testing ready",
        "Lead capture forms",
        "Analytics integration",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 bg-warm-50 dark:bg-navy-900"
    >
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left sm:text-center mb-16"
        >
          <Label label="What I Do" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug">
            <HeaderSpan span="Full-Stack" /> Solutions
          </h2>
          <p className="text-xl text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
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
              className="group p-8 rounded-2xl bg-white dark:bg-navy-800 border border-navy-200 dark:border-navy-700 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy-900 dark:text-navy-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                    <span className="text-navy-700 dark:text-navy-300 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 dark:from-navy-800 dark:to-navy-700 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Not sure what you need?
          </h3>
          <p className="text-navy-300 dark:text-navy-400 text-lg mb-6 max-w-2xl mx-auto">
            I'll help you figure out the best solution for your business goals
            and budget. Every project starts with a conversation.
          </p>

          <Button href="#contact" icon={null}>
            Schedule a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
