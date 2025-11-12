"use client";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-(--foreground) text-(--background) py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/profilePic.png"
            alt="Jo Ann Francisco"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-semibold text-lg tracking-wide">
            Jo Ann Francisco
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <Link
            href="https://www.linkedin.com/in/yourlinkedin"
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://github.com/yourgithub"
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.behance.net/yourbehance"
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            <Globe size={20} />
          </Link>
          <Link
            href="https://www.instagram.com/yourinstagram"
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            <Instagram size={20} />
          </Link>
        </div>

        {/* Email */}
        <a
          href="mailto:joannfrancisco.dev@gmail.com"
          className="text-sm hover:text-accent transition-colors"
        >
          joannfrancisco.dev@gmail.com
        </a>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-8 border-t border-(--background)/20 pt-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Jo Ann Francisco. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
