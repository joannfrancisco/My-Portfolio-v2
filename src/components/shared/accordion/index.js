"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    id: 1,
    title: "Who is this service for?",
    content:
      "This is for small businesses that want a professional website they can rely on. If you’re mostly using social media or dealing with a slow, outdated site, I’ll build you a fast, credible online home that helps turn visitors into real leads.",
  },
  {
    id: 2,
    title: "What’s included in the website package?",
    content:
      "You’ll get a custom, hand-coded website with up to five main pages, additional basic pages if needed, and built-in contact or lead forms. Every site is mobile-friendly, SEO-ready, and designed with speed, security, and business growth in mind. I also include 30 days of free maintenance after launch.",
  },
  {
    id: 3,
    title: "How much does it cost?",
    content:
      "Projects start at $800 USD, depending on the size and goals of the site. I occasionally offer a limited-time introductory discount, which can lower the starting price. I’ll always be upfront about pricing before we begin.",
  },
  {
    id: 4,
    title: "Why don’t you use WordPress or page builders?",
    content:
      "I hand-code every site to keep it clean, fast, and secure. There’s no unnecessary code, no plugins to update, no monthly lock-in fee just to keep it running, and far fewer risks overall. The result is a website that loads instantly and performs better in the long term.",
  },
  {
    id: 5,
    title: "How does a fast website help my business?",
    content:
      "Faster sites keep people engaged. When your website loads quickly, visitors stay longer, contact you more often, and your ads and search rankings perform better.",
  },
  {
    id: 6,
    title: "How long does it take to build?",
    content:
      "Most websites are completed within 1–3 weeks. I’ll send a short questionnaire to gather all the necessary details, keeping the process simple and minimally disruptive to your day-to-day work. Timelines may vary depending on how quickly content and feedback are provided.",
  },
  {
    id: 7,
    title: "How do payments and ownership work?",
    content:
      "It’s 50% upfront and 50% before launch. Once paid, the website is 100% yours. If you don’t have hosting or a domain yet, I’ll guide you through it.",
  },
  {
    id: 8,
    title: "What happens after the site goes live?",
    content:
      "You’ll get one month of free support for small updates or questions. If you want ongoing help later, I offer an optional maintenance plan at $50/month (covering up to 6 hours of work). ",
  },
  {
    id: 9,
    title: "Why work with you?",
    content:
      "I don’t just build websites — I build tools that help your business grow. I focus on speed, clarity, and clean design so your site attracts the right visitors, builds trust, and actually works for you, not against you.                                           ",
  },
  {
    id: 10,
    title: "How do we get started?",
    content:
      "Just send a message or email. I’ll confirm your needs, share a simple proposal, and send over a quick questionnaire so we can get started.",
  },
];

export default function Accordion() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="space-y-3">
          {accordionData.map((item, index) => {
            const isOpen = openItems.includes(item.id);

            return (
              <div
                key={item.id}
                className="mt-4 mb-4 w-fit border border-(--foreground)] text-sm transition-all hover:text-background disabled:opacity-50 shadow-[4px_4px_0_0_var(--foreground)] hover:shadow-[8px_8px_0_0_var(--foreground)] active:shadow-[2px_2px_0_0_var(--foreground)]"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-300 ease-in-out"
                >
                  <span className="text-lg font-medium text-(--foreground) pr-8 transition-colors duration-200">
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5">
                    <p className="leading-relaxed text-base font-light text-(--foreground)/90">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
