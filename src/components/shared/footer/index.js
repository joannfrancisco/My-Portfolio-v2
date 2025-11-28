"use client";

const Footer = () => {
  return (
    <footer className="border-t border-(--foreground)/20 text-center text-xs opacity-30 px-6 md:px-10 py-4 md:py-6">
      © {new Date().getFullYear()} Jo Ann Francisco. All rights reserved.
    </footer>
  );
};

export default Footer;
