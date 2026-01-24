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
        "Beautiful, intuitive interfaces that guide users naturally toward taking action. First impressions matter—make yours count with design that converts.",
      forYouIf: [
        "Your website looks outdated and unprofessional",
        "You're starting from scratch and need a design that stands out",
        "Visitors leave within seconds without engaging",
        "Your mobile experience is broken or non-existent",
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
        "Lightning-fast, custom-coded websites built with modern technology. No templates. No limitations. Just clean, performant code designed for your business.",
      forYouIf: [
        "Your current site is painfully slow and loses customers",
        "You don't have a website yet and want to do it right",
        "You're stuck with a template that can't do what you need",
        "You need custom features that plugins can't deliver",
      ],
      features: [
        "Next.js & React development",
        "Custom web applications",
        "API integration & backend",
        "Progressive Web Apps (PWA)",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Complete online store solutions that actually convert. Custom design meets Shopify's powerful backend—professional, scalable, and ready to make money.",
      forYouIf: [
        "You're ready to start selling online but don't know where to begin",
        "Your current store looks generic and doesn't match your brand",
        "Cart abandonment is costing you sales every day",
        "You need a store that scales as you grow",
      ],
      features: [
        "Custom Next.js + Shopify integration",
        "Headless commerce architecture",
        "Secure payment & checkout optimization",
        "Inventory & order management",
      ],
    },
    {
      icon: FileText,
      title: "Landing Page",
      description:
        "High-converting landing pages laser-focused on one goal: turning visitors into customers. Perfect for campaigns, product launches, and lead generation.",
      forYouIf: [
        "You're running ads but getting terrible conversion rates",
        "You're launching a new product and need a dedicated page",
        "Your homepage is too cluttered for focused campaigns",
        "You need to capture leads fast without a full website rebuild",
      ],
      features: [
        "Conversion-focused design & copy",
        "A/B testing ready structure",
        "Lead capture forms & CTAs",
        "Analytics & performance tracking",
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

                {/* What You Get */}
                <div className="pt-4 border-t border-gray-200 dark:border-navy-700">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-(--foreground)/80 mb-3">
                    What&apos;s included:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
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
