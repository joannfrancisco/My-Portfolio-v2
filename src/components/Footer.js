"use client";

import { Heart } from "lucide-react";
import SocialIcons from "./shared/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navigation: [
      { name: "Work", href: "/portfolio" },
      { name: "Services", href: "/#services" },
      { name: "Process", href: "/process" },
      { name: "FAQ", href: "/#faq" },
      { name: "About", href: "/#about" },
      { name: "Contact", href: "/#contact" },
    ],
    Services: [
      { name: "Websites & Landing Pages", href: "/#services" },
      { name: "Web & Mobile Apps", href: "/#services" },
      { name: "Custom Business Software", href: "/#services" },
      { name: "AI & Automation", href: "/#services" },
    ],
  };

  return (
    <footer className="relative bg-white dark:bg-navy-900 pt-20 pb-8 px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/30 rounded-full animate-ping"
          style={{ animationDuration: "3s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-500/30 rounded-full animate-ping"
          style={{ animationDuration: "4s", animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400/30 rounded-full animate-ping"
          style={{ animationDuration: "5s", animationDelay: "0.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="font-logo text-(--cyan)">{"< ann />"}</span>
            </h3>
            <p className="text-(--foreground)/80 leading-relaxed mb-6 max-w-md">
              Software engineer building websites, apps, and custom systems for
              businesses ready to leave spreadsheets and manual work behind.
            </p>

            <SocialIcons />
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="inline-block text-(--foreground)/80 hover:text-(--cyan) hover:translate-x-1 transition-all duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-navy-800 dark:border-navy-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-1">
            <p className="text-sm text-center md:text-left text-(--foreground)/70">
              © {currentYear} Jo Ann Francisco. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-(--foreground)/50">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-(--cyan) fill-(--cyan) animate-pulse" />
              <span>and lots of coffee.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
