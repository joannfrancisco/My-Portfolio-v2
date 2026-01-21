"use client";

import Image from "next/image";

const socialLinks = [
  {
    src: "/icons/linkedin.png",
    href: "https://www.linkedin.com/in/joannfrancisco",
    alt: "LinkedIn",
  },
  {
    src: "/icons/github.png",
    href: "https://github.com/joannfrancisco",
    alt: "GitHub",
  },
  {
    src: "/icons/instagram.png",
    href: "https://www.instagram.com/joannfrancisco.dev/",
    alt: "Instagram",
  },
  {
    src: "/icons/behance.png",
    href: "https://www.behance.net/joannvfrancisco",
    alt: "Behance",
  },
];

const Footer = () => {
  return (
    <footer className="max-w-screen-2xl mx-auto w-full border-t border-(--foreground)/10 px-6 md:px-10 py-4 md:py-6">
      {/* Social Icons */}
      <div className="mb-3 flex justify-center gap-5">
        {socialLinks.map(({ src, href, alt }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-150 hover:-translate-y-1 "
          >
            <Image
              src={src}
              alt={alt}
              width={24}
              height={24}
              className="opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-360"
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-center text-xs opacity-40">
        © {new Date().getFullYear()} Jo Ann Francisco. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
