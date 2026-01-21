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
        "I specialize in custom-coded websites, portfolios, and landing pages for small business owners. Every site is hand-built from scratch - no templates, no page builders - just clean, fast code designed specifically for your business goals.",
    },
    {
      id: 3,
      title: "How much does a website cost?",
      content:
        "Every project is unique, so pricing depends on your specific needs, goals, and features. I work with various budgets and can create a custom package that fits your business. After our initial conversation, I'll provide a transparent quote with no hidden fees. Most small business websites range from $800 to $5,000, but I'm happy to discuss budget-friendly options.",
    },
    {
      id: 4,
      title: "Do you offer payment plans?",
      content:
        "Yes! I understand cash flow matters for small businesses. I typically work with a 50% deposit to start and 50% upon completion, but I'm open to discussing flexible payment arrangements that work for your budget.",
    },
    {
      id: 5,
      title: "How long does it take to build a website?",
      content:
        "Most projects take 2-4 weeks from start to launch, depending on complexity and how quickly you can provide content and feedback. I'll give you a clear timeline during our initial consultation and keep you updated throughout the process.",
    },
    {
      id: 6,
      title: "What do I need to provide?",
      content:
        "I'll need your branding materials (logo, colors, fonts if you have them), any text content you want on the site, and high-quality images or photos. If you don't have everything ready, no problem - I can guide you through the process and even help with content recommendations.",
    },
    // {
    //   id: 7,
    //   title: "Will my website work on mobile phones?",
    //   content:
    //     "Absolutely! Every website I build is fully responsive, meaning it looks great and functions perfectly on phones, tablets, and desktops. With most people browsing on mobile, this isn't optional - it's standard.",
    // },
    // {
    //   id: 8,
    //   title: "Can I update the website myself?",
    //   content:
    //     "Yes! For simple content updates like text and images, I can set you up with an easy-to-use content management system. I'll also provide clear documentation and a quick training session so you feel confident making changes. For anything more complex, I'm always available to help.",
    // },
    {
      id: 9,
      title: "Do you provide hosting and domain setup?",
      content:
        "I can help you choose the right hosting provider and guide you through domain registration. While you'll own and pay for these separately (usually $10-30/month for hosting), I'll handle all the technical setup and make sure everything runs smoothly.",
    },
    {
      id: 10,
      title: "What happens after the website launches?",
      content:
        "You get 30 days of free support for any bugs or technical issues. After that, I offer ongoing maintenance packages starting at $50/month, which includes updates, backups, security monitoring, and minor content changes. Many clients prefer this peace of mind, but it's completely optional.",
    },
    {
      id: 11,
      title: "Will my website be optimized for search engines (SEO)?",
      content:
        "Yes! Every site I build includes fundamental SEO best practices: fast loading speeds, mobile optimization, clean code, proper heading structure, and meta tags. This gives you a strong foundation. For advanced SEO services like keyword research or ongoing optimization, I can recommend trusted specialists.",
    },
    // {
    //   id: 12,
    //   title: "Do you redesign existing websites?",
    //   content:
    //     "Absolutely! If your current website is outdated, slow, or not converting visitors into customers, I can rebuild it from the ground up with modern design and performance in mind. I'll keep what's working and improve everything else.",
    // },
    {
      id: 13,
      title: "What makes you different from other web designers?",
      content:
        "I focus exclusively on small businesses and understand the challenges you face. Every site I build is custom-coded for speed and performance, not just aesthetics. I'm also transparent about pricing, timelines, and what you're getting. You're not just another client - you're a business I want to see succeed.",
    },
    // {
    //   id: 14,
    //   title: "Can you integrate forms, booking systems, or e-commerce?",
    //   content:
    //     "Yes! I can add contact forms, appointment booking, payment processing, email marketing integration, and basic e-commerce functionality. If you need advanced features, I'll let you know upfront whether it's within scope or if you'd need a specialized platform.",
    // },
    {
      id: 15,
      title: "How do we get started?",
      content:
        "Simple! Send me a message or email describing your project. We'll schedule a free consultation call to discuss your goals, timeline, and budget. From there, I'll send you a proposal, and if it's a good fit, we'll get started right away.",
    },

    {
      id: 17,
      title: "What if I need help after my website is live?",
      content:
        "I'm here for you! The first 30 days after launch include free support for any bugs or issues. After that, you can reach out anytime for help - either as a one-time service or through a monthly maintenance plan. I want to make sure you always feel supported.",
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ">
            Frequently Asked <HeaderSpan span="Questions" />
          </h2>
          <p className="text-xl text-navy-600">
            Everything you need to know about working together. Don't see your
            question? Just ask!
          </p>
        </motion.div>

        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl bg-white border border-navy-200 overflow-hidden hover:border-cyan-500 transition-colors"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-warm-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-semibold text-navy-900 pr-4">
                  {item.title}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  {openId === item.id ? (
                    <Minus className="w-5 h-5 text-cyan-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-cyan-600" />
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
                    <div className="px-8 pb-6 text-navy-600 leading-relaxed">
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
          className="mt-12 text-center p-8 rounded-2xl bg-white border border-navy-200"
        >
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-navy-600 mb-6">
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
