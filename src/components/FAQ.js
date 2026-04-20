"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Button from "./shared/Button";
import Label from "./shared/Label";
import HeaderSpan from "./shared/HeaderSpan";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openId, setOpenId] = useState(null);

  const accordionData = [
    {
      id: 1,
      title: "What do you build?",
      content:
        "Custom software that solves real business problems. Internal tools like CRMs and dashboards, web and mobile apps, websites, and AI automations. Whether it's an MVP for a new idea or a system to replace your team's spreadsheet chaos, I build it from scratch. No templates.",
    },
    {
      id: 3,
      title: "How much does it cost?",
      content:
        "Smaller projects and MVPs start around $2,500. Larger systems with integrations and custom logic go up from there. After a quick discovery call, I'll send a fixed-price proposal so there are no surprises.",
    },
    {
      id: 4,
      title: "How can AI automation help my business?",
      content:
        "AI is a practical way to take boring, repetitive tasks off your team's plate. Think auto-posting to social media, sorting leads automatically, generating reports, or handling data entry in the background. If your team is losing hours to busywork, there's probably a way to automate it.",
    },
    {
      id: 5,
      title: "How long does it take?",
      content:
        "Depends on scope. An MVP or landing system usually takes 2 to 4 weeks. A full business management system is more like 2 to 3 months. I work in short sprints and give you a staging link, so you can watch it come together instead of waiting for a big reveal.",
    },
    {
      id: 6,
      title: "Do you offer payment plans?",
      content:
        "Yes. For bigger projects, I split payments into milestones (usually Discovery, Beta, and Launch). You only pay as we hit each stage, and we can shape the schedule around your cash flow.",
    },
    {
      id: 7,
      title: "What happens after launch?",
      content:
        "I don't disappear. You get 30 days of priority support to make sure everything runs smoothly. After that, I offer maintenance and scaling plans to keep things secure, updated, and ready to grow with you.",
    },
    {
      id: 8,
      title: "Can you work with my existing tools?",
      content:
        "Yes. I can plug into what you already use: Google Workspace, Stripe, Meta APIs, industry-specific platforms, whatever fits. The goal is one connected system, not another app to babysit.",
    },
    {
      id: 9,
      title: "What's your process?",
      content:
        "We start with a Discovery call to map out how your business actually works. Then Design and Prototyping, so the UX feels right before any code gets written. After that, I handle development, testing, and launch. You're part of the process the whole way through.",
    },
    {
      id: 10,
      title: "How do we get started?",
      content:
        "Hit the 'Start a Project' button and tell me a bit about what you need. We'll hop on a free strategy call to see if we're a good fit. If we are, I'll send a detailed proposal and we can start building.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-warm-50">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left sm:text-center mb-16"
        >
          <Label label="Questions & Answers" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            Frequently Asked <HeaderSpan span="Questions" />
          </h2>
          <p className="text-xl text-(--foreground)/80">
            Everything you need to know about working together. Don&apos;t see
            your question? Just ask!
          </p>
        </motion.div>

        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl bg-white border  overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-warm-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-semibold text-(--foreground)/90 pr-4">
                  {item.title}
                </span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  {openId === item.id ? (
                    <Minus className="w-5 h-5 text-(--cyan)" />
                  ) : (
                    <Plus className="w-5 h-5 text-(--cyan)" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-navy-600 leading-relaxed text-(--foreground)/80">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center sm:p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-3 leading-[1.1]">
            Still have questions?
          </h3>
          <p className="text-(--foreground)/80 mb-6">
            Im here to help. Reach out and Ill get back to you within 24 hours.
          </p>

          <Button href="#contact" icon={null}>
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
