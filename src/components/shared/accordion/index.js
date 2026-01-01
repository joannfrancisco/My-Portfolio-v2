// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const accordionData = [
//   {
//     id: 1,
//     title: "Who is this service for?",
//     content:
//       "This is for small businesses that want a professional website they can rely on. If you’re mostly using social media or dealing with a slow, outdated site, I’ll build you a fast, credible online home that helps turn visitors into real leads.",
//   },
//   {
//     id: 2,
//     title: "What’s included in the website package?",
//     content:
//       "You’ll get a custom, hand-coded website with up to five main pages, additional basic pages if needed, and built-in contact or lead forms. Every site is mobile-friendly, SEO-ready, and designed with speed, security, and business growth in mind. I also include 30 days of free maintenance after launch.",
//   },
//   {
//     id: 3,
//     title: "How much does it cost?",
//     content:
//       "Projects start at $800 USD, depending on the size and goals of the site. I occasionally offer a limited-time introductory discount, which can lower the starting price. I’ll always be upfront about pricing before we begin.",
//   },
//   {
//     id: 4,
//     title: "Why don’t you use WordPress or page builders?",
//     content:
//       "I hand-code every site to keep it clean, fast, and secure. There’s no unnecessary code, no plugins to update, no monthly lock-in fee just to keep it running, and far fewer risks overall. The result is a website that loads instantly and performs better in the long term.",
//   },
//   {
//     id: 5,
//     title: "How does a fast website help my business?",
//     content:
//       "Faster sites keep people engaged. When your website loads quickly, visitors stay longer, contact you more often, and your ads and search rankings perform better.",
//   },
//   {
//     id: 6,
//     title: "How long does it take to build?",
//     content:
//       "Most websites are completed within 1–3 weeks. I’ll send a short questionnaire to gather all the necessary details, keeping the process simple and minimally disruptive to your day-to-day work. Timelines may vary depending on how quickly content and feedback are provided.",
//   },
//   {
//     id: 7,
//     title: "How do payments and ownership work?",
//     content:
//       "It’s 50% upfront and 50% before launch. Once paid, the website is 100% yours. If you don’t have hosting or a domain yet, I’ll guide you through it.",
//   },
//   {
//     id: 8,
//     title: "What happens after the site goes live?",
//     content:
//       "You’ll get one month of free support for small updates or questions. If you want ongoing help later, I offer an optional maintenance plan at $50/month (covering up to 6 hours of work). ",
//   },
//   {
//     id: 9,
//     title: "Why work with you?",
//     content:
//       "I don’t just build websites — I build tools that help your business grow. I focus on speed, clarity, and clean design so your site attracts the right visitors, builds trust, and actually works for you, not against you.                                           ",
//   },
//   {
//     id: 10,
//     title: "How do we get started?",
//     content:
//       "Just send a message or email. I’ll confirm your needs, share a simple proposal, and send over a quick questionnaire so we can get started.",
//   },
// ];

// export default function Accordion() {
//   const [openItems, setOpenItems] = useState([]);

//   const toggleItem = (id) => {
//     setOpenItems((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="flex items-center justify-center">
//       <div className="w-full max-w-4xl">
//         <div className="space-y-3">
//           {accordionData.map((item, index) => {
//             const isOpen = openItems.includes(item.id);

//             return (
//               <div
//                 key={item.id}
//                 className="mt-4 mb-4 w-fit border border-(--foreground)] text-sm transition-all hover:text-background disabled:opacity-50 shadow-[4px_4px_0_0_var(--foreground)]/90 hover:shadow-[8px_8px_0_0_var(--foreground)]/90 active:shadow-[2px_2px_0_0_var(--foreground)/90]"
//                 style={{
//                   animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
//                 }}
//               >
//                 <button
//                   onClick={() => toggleItem(item.id)}
//                   className="w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-300 ease-in-out"
//                 >
//                   <span className="text-lg font-medium text-(--foreground) pr-8 transition-colors duration-200">
//                     {item.title}
//                   </span>
//                   <ChevronDown
//                     className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
//                       isOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <div
//                   className="overflow-hidden transition-all duration-300 ease-in-out"
//                   style={{
//                     maxHeight: isOpen ? "500px" : "0px",
//                     opacity: isOpen ? 1 : 0,
//                   }}
//                 >
//                   <div className="px-6 pb-5">
//                     <p className="leading-relaxed text-base font-light text-(--foreground)/90">
//                       {item.content}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
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
      "Custom-coded sites are built specifically for you with clean, lightweight code. This means faster loading times, better security, no monthly platform fees, and full ownership. Unlike WordPress or Wix, there are no plugins to update, no bloated code slowing you down, and no restrictions on what you can do with your site.",
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
  {
    id: 8,
    title: "Can I update the website myself after it's done?",
    content:
      "Yes! I can integrate a simple content management system (CMS) that lets you update text, images, and basic content yourself. I'll also provide clear instructions and training. For more complex changes, I'm always available to help.",
  },
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
      "You get 30 days of free support for any bugs or technical issues. After that, I offer ongoing maintenance packages starting at $100/month, which includes updates, backups, security monitoring, and content changes. Many clients prefer this peace of mind, but it's completely optional.",
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
