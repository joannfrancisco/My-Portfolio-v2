"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

const accordionData = [
  {
    id: 1,
    title: "What kind of websites do you build?",
    content:
      "I specialize in custom-coded websites, portfolios, and landing pages for small business owners. Every site is hand-built from scratch—no templates, no page builders—just clean, fast code designed specifically for your business goals.",
  },
  {
    id: 2,
    title: "How is custom-coded different from WordPress or Wix?",
    content:
      "Custom-coded sites are built from scratch specifically for your business. This approach offers faster performance through optimized code, complete design flexibility, and full ownership without platform dependencies. While WordPress and Wix are great solutions for many use cases, custom development gives you maximum control over features, scalability, and performance—perfect for businesses with specific needs or those wanting a truly unique online presence.",
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
      "I'll need your branding materials (logo, colors, fonts if you have them), any text content you want on the site, and high-quality images or photos. If you don't have everything ready, no problem—I can guide you through the process and even help with content recommendations.",
  },
  {
    id: 7,
    title: "Will my website work on mobile phones?",
    content:
      "Absolutely! Every website I build is fully responsive, meaning it looks great and functions perfectly on phones, tablets, and desktops. With most people browsing on mobile, this isn't optional—it's standard.",
  },
  // {
  //   id: 8,
  //   title: "Can I update the website myself after it's done?",
  //   content:
  //     "Yes! I can integrate a simple content management system (CMS) that lets you update text, images, and basic content yourself. I'll also provide clear instructions and training. For more complex changes, I'm always available to help.",
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
      "You get 30 days of free support for any bugs or technical issues. After that, I offer ongoing maintenance packages starting at $50/month, which includes updates, backups, security monitoring, and minimal content changes. Many clients prefer this peace of mind, but it's completely optional.",
  },
  {
    id: 11,
    title: "Will my website be optimized for search engines (SEO)?",
    content:
      "Yes! Every site I build includes fundamental SEO best practices: fast loading speeds, mobile optimization, clean code, proper heading structure, and meta tags. This gives you a strong foundation. For advanced SEO services like keyword research or ongoing optimization, I can recommend trusted specialists.",
  },
  {
    id: 12,
    title: "Do you redesign existing websites?",
    content:
      "Absolutely! If your current website is outdated, slow, or not converting visitors into customers, I can rebuild it from the ground up with modern design and performance in mind. I'll keep what's working and improve everything else.",
  },
  {
    id: 13,
    title: "What makes you different from other web designers?",
    content:
      "I focus exclusively on small businesses and understand the challenges you face. Every site I build is custom-coded for speed and performance, not just aesthetics. I'm also transparent about pricing, timelines, and what you're getting. You're not just another client—you're a business I want to see succeed.",
  },
  {
    id: 14,
    title: "Can you integrate forms, booking systems, or e-commerce?",
    content:
      "Yes! I can add contact forms, appointment booking, payment processing, email marketing integration, and basic e-commerce functionality. If you need advanced features, I'll let you know upfront whether it's within scope or if you'd need a specialized platform.",
  },
  {
    id: 15,
    title: "How do we get started?",
    content:
      "Simple! Send me a message or email describing your project. We'll schedule a free consultation call to discuss your goals, timeline, and budget. From there, I'll send you a proposal, and if it's a good fit, we'll get started right away.",
  },
];

function AccordionItem({ item, isOpen, onToggle, index }) {
  const contentRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (itemRef.current) {
      gsap.fromTo(
        itemRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.05,
          ease: "power2.out",
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={itemRef}
      className="group overflow-hidden"
      style={{
        border: `1px solid var(--foreground)`,
        opacity: isOpen ? 1 : 0.7,
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        style={{
          color: "var(--foreground)",
        }}
      >
        <span className="text-base md:text-lg font-medium pr-8">
          {item.title}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        id={`accordion-content-${item.id}`}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-6 pb-5">
          <p
            className="leading-relaxed text-sm md:text-base"
            style={{
              color: "var(--foreground)",
              opacity: 0.8,
            }}
          >
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Accordion() {
  const [openItems, setOpenItems] = useState([1]);

  const toggleItem = (id) => {
    setOpenItems(
      (prev) => (prev.includes(id) ? [] : [id]) // Close all and open only the clicked one
    );
  };

  return (
    <div className="w-full my-4">
      <div className="space-y-2">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openItems.includes(item.id)}
            onToggle={() => toggleItem(item.id)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
