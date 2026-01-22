"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./shared/ThemeToggle";
import gsap from "gsap";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import SocialIcons from "./shared/SocialIcons";
import { ButtonContact } from "./shared/ButtonContact";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "PORTFOLIO", href: "/portfolio", isPage: true },
    { name: "SERVICES", href: "/#services", isPage: false },
    { name: "PROCESS", href: "/process", isPage: true },
    { name: "FAQ", href: "/#faq", isPage: false },
    { name: "ABOUT", href: "/#about", isPage: false },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (link.isPage) {
      router.push(link.href);
    } else {
      const hashIndex = link.href.indexOf("#");
      const hash = link.href.substring(hashIndex);

      if (pathname === "/") {
        scrollToSection(hash);
      } else {
        router.push(link.href);
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (pathname === "/") {
      scrollToSection("#hero");
    } else {
      router.push("/#hero");
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (pathname === "/") {
      scrollToSection("#contact");
    } else {
      router.push("/#contact");
    }
  };

  // Ribbon Effect Link Component
  const RibbonLink = ({ children, href, onClick, className = "" }) => {
    const linkRef = useRef(null);
    const lettersRef = useRef([]);

    useEffect(() => {
      const link = linkRef.current;
      if (!link) return;

      const handleMouseEnter = () => {
        // Scale entire link up slightly
        gsap.to(link, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });

        // Ribbon effect: squeeze middle letters
        lettersRef.current.forEach((letter, index) => {
          const totalLetters = lettersRef.current.length;
          const middle = (totalLetters - 1) / 2;
          const distanceFromMiddle = Math.abs(index - middle);
          const maxDistance = middle;
          const normalizedDistance = distanceFromMiddle / maxDistance;

          // Letters closer to middle get squeezed more
          const scaleX = 1 - (1 - normalizedDistance) * 0.5;
          const scaleY = 1 + (1 - normalizedDistance) * 0.3;

          gsap.to(letter, {
            scaleX: scaleX,
            scaleY: scaleY,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      };

      const handleMouseLeave = () => {
        gsap.to(link, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(lettersRef.current, {
          scaleX: 1,
          scaleY: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    const letters = children.split("");

    return (
      <a
        ref={linkRef}
        href={href}
        onClick={onClick}
        className={`text-sm font-bold text-foreground/70 hover:text-(--cyan) transition-colors relative inline-flex origin-center ${className}`}
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            ref={(el) => (lettersRef.current[index] = el)}
            className="inline-block origin-center"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </a>
    );
  };

  // Logo with Ribbon Effect
  const RibbonLogo = ({ onClick }) => {
    const logoRef = useRef(null);
    const lettersRef = useRef([]);
    const logoText = "< ann />";

    useEffect(() => {
      const logo = logoRef.current;
      if (!logo) return;

      const handleMouseEnter = () => {
        gsap.to(logo, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });

        lettersRef.current.forEach((letter, index) => {
          const totalLetters = lettersRef.current.length;
          const middle = (totalLetters - 1) / 2;
          const distanceFromMiddle = Math.abs(index - middle);
          const maxDistance = middle;
          const normalizedDistance = distanceFromMiddle / maxDistance;

          const scaleX = 1 - (1 - normalizedDistance) * 0.5;
          const scaleY = 1 + (1 - normalizedDistance) * 0.3;

          gsap.to(letter, {
            scaleX: scaleX,
            scaleY: scaleY,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      };

      const handleMouseLeave = () => {
        gsap.to(logo, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(lettersRef.current, {
          scaleX: 1,
          scaleY: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      logo.addEventListener("mouseenter", handleMouseEnter);
      logo.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        logo.removeEventListener("mouseenter", handleMouseEnter);
        logo.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <Link
        ref={logoRef}
        href="/#hero"
        onClick={onClick}
        className="text-2xl font-logo font-bold tracking-tight inline-flex overflow-hidden cursor-pointer text-foreground hover:text-(--cyan) transition-colors origin-center"
      >
        {logoText.split("").map((letter, index) => (
          <span
            key={index}
            ref={(el) => (lettersRef.current[index] = el)}
            className="inline-block origin-center"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </Link>
    );
  };

  // Theme Toggle with Ribbon Effect
  const RibbonThemeToggle = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const handleMouseEnter = () => {
        gsap.to(wrapper, {
          scale: 1.1,
          scaleX: 0.85,
          scaleY: 1.15,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(wrapper, {
          scale: 1,
          scaleX: 1,
          scaleY: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      wrapper.addEventListener("mouseenter", handleMouseEnter);
      wrapper.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        wrapper.removeEventListener("mouseenter", handleMouseEnter);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <div
        ref={wrapperRef}
        className="inline-block origin-center hover:text-(--cyan) transition-colors"
      >
        <ThemeToggle />
      </div>
    );
  };

  // Nine Dots Hamburger Menu Component
  const NineDotsMenu = ({ isOpen, onClick }) => {
    const dotStyle = { backgroundColor: "var(--foreground)" };

    return (
      <button
        onClick={onClick}
        className="relative w-12 h-12 flex items-center justify-center group cursor-pointer touch-manipulation"
        aria-label="Toggle menu"
      >
        <div className="relative w-8 h-8">
          <span
            style={dotStyle}
            className={`absolute w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "top-0 left-0" : "top-0 left-0"
            }`}
          />
          <span
            style={dotStyle}
            className={`absolute rounded-full transition-all duration-300 ease-in-out ${
              isOpen
                ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-1.5 h-7"
                : "w-2 h-2 top-0 left-1/2 -translate-x-1/2"
            }`}
          />
          <span
            style={dotStyle}
            className={`absolute w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "top-0 right-0" : "top-0 right-0"
            }`}
          />
          <span
            style={dotStyle}
            className={`absolute rounded-full transition-all duration-300 ease-in-out ${
              isOpen
                ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-1.5 h-7"
                : "w-2 h-2 top-1/2 -translate-y-1/2 left-0"
            }`}
          />
          <span
            style={dotStyle}
            className={`absolute w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-0 scale-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            }`}
          />
          <span
            style={dotStyle}
            className={`absolute w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-0 scale-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                : "top-1/2 -translate-y-1/2 right-0"
            }`}
          />
          <span
            style={dotStyle}
            className={`absolute w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "bottom-0 left-0" : "bottom-0 left-0"
            }`}
          />
          <span
            style={dotStyle}
            className={`absolute w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-0 scale-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                : "bottom-0 left-1/2 -translate-x-1/2"
            }`}
          />
          <span
            style={dotStyle}
            className={`absolute w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "bottom-0 right-0" : "bottom-0 right-0"
            }`}
          />
        </div>
      </button>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/5 dark:bg-navy-900/5 backdrop-blur-xl   shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-14" : "h-20"
            }`}
          >
            {/* Logo - Left */}
            <div className="shrink-0">
              <RibbonLogo onClick={handleLogoClick} />
            </div>

            {/* Desktop Navigation - Center (xl screens only) */}
            <div className="hidden xl:flex items-center justify-center gap-8 flex-1">
              {navLinks.map((link) => (
                <RibbonLink
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.name}
                </RibbonLink>
              ))}
            </div>

            {/* Theme Toggle & CTA - Right (xl screens only) */}
            <div className="hidden xl:flex items-center gap-4 shrink-0">
              <RibbonThemeToggle />
              <ButtonContact onClick={handleContactClick}>
                GET IN TOUCH
              </ButtonContact>
            </div>

            {/* Mobile/Tablet Menu Button (visible below xl) */}
            <div className="xl:hidden flex items-center gap-2">
              <ThemeToggle />
              <NineDotsMenu
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu (visible below xl) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 xl:hidden bg-white"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-8">
              {/* Navigation Links - Left Aligned */}
              <div className="flex flex-col items-start justify-center flex-1 gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-3xl navlink text-foreground hover:text-(--cyan) transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-6"
                >
                  <ButtonContact
                    onClick={handleContactClick}
                    className="px-8 py-4 text-lg"
                  >
                    GET IN TOUCH
                  </ButtonContact>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
                className="flex items-center justify-center gap-6 pt-8 border-t border-foreground/10"
              >
                <SocialIcons />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
