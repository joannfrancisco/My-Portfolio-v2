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
      { name: "Website Design", href: "/#services" },
      { name: "Website Development", href: "/#services" },
      { name: "Performance & SEO", href: "/#services" },
      { name: "Integrations", href: "/#services" },
    ],
  };

  return (
    <footer className="bg-navy-500 dark:bg-navy-950 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="font-logo text-cyan-600 dark:text-cyan-600">
                {"< ann />"}
              </span>
            </h3>
            <p className="text-navy-300 dark:text-navy-400 leading-relaxed mb-6 max-w-md">
              Full-stack developer specializing in custom websites for small
              businesses. Building digital success stories, one project at a
              time.
            </p>

            {/* Social Icons */}
            <SocialIcons />
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4 ">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="inline-block opacity-80 text-navy-300 dark:text-navy-400 hover:text-cyan-400 dark:hover:text-cyan-400 hover:translate-x-1 transition-all duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-300 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-1 opacity-80">
            <p className="text-sm text-center md:text-left text-navy-300 dark:text-navy-400">
              © {currentYear} Jo Ann Francisco. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm opacity-60 text-navy-300 dark:text-navy-400">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400 animate-pulse" />
              <span>and lots of coffee.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
