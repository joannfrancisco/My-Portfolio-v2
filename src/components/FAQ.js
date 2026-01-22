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
      title: "What kind of websites do you build?",
      content:
        "Custom-coded websites for small businesses like yours. Think portfolios, business sites, and landing pages. No templates or page builders, just clean code built specifically for your needs.",
    },
    {
      id: 3,
      title: "How much does a website cost?",
      content:
        "It really depends on what you need. Most small business websites run between $800 and $5,000, but I offer budget-friendly rates and can work with different budgets. After we chat, I'll give you a clear quote with no hidden fees.",
    },
    {
      id: 4,
      title: "Do you offer payment plans?",
      content:
        "Yes! I usually do 50% to start and 50% when we're done, but I'm flexible. We can work out a payment plan that fits your budget.",
    },
    {
      id: 5,
      title: "How long does it take?",
      content:
        "Most sites go live in 1 to 4 weeks, depending on how complex your project is and how quickly you can give feedback. I'll give you a realistic timeline upfront and keep you updated along the way.",
    },
    {
      id: 6,
      title: "What do you need from me?",
      content:
        "Your logo, brand colors, any text you want on the site, and some quality images. Don't have everything ready? That's totally fine. I'll walk you through what we need.",
    },
    {
      id: 9,
      title: "Do you handle hosting and domains?",
      content:
        "I can help you pick the right hosting and get your domain set up. You'll own it and pay for it directly (usually $10 to $30 a month), but I'll take care of all the technical setup.",
    },
    {
      id: 10,
      title: "What happens after launch?",
      content:
        "You get 30 days of free support for any bugs or issues. After that, I offer maintenance packages starting at $50 a month if you want help with updates, backups, and peace of mind. Totally optional though.",
    },
    {
      id: 11,
      title: "Will my site be SEO-friendly?",
      content:
        "Absolutely! Every site I build includes SEO basics like fast loading, mobile optimization, clean code, and proper structure. For advanced SEO stuff, I can connect you with trusted specialists.",
    },
    {
      id: 13,
      title: "What makes you different?",
      content:
        "I focus on small businesses and actually understand the challenges you're dealing with. Every site is custom-coded for speed and performance, not just pretty design. Plus, I'm upfront about pricing and timelines. I genuinely want to see your business succeed.",
    },
    {
      id: 15,
      title: "How do we get started?",
      content:
        "Just send me a message telling me about your project! We'll jump on a free call to talk about your goals and budget. If it feels like a good fit, I'll send over a proposal and we can get started.",
    },
    {
      id: 17,
      title: "Need help after launch?",
      content:
        "I've got you! The first 30 days are free for any bugs or issues. After that, you can always reach out. I offer one-time fixes or monthly plans, whatever works best for you.",
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
