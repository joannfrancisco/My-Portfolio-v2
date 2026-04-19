"use client";

import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectBDigital() {
  const projectData = {
    title: "B Digital Media",
    badge: "Influencer Marketing Agency",
    categories: ["Branding", "Web Development", "UI/UX Design"],
    techStack: [
      "Next.js 16",
      "GSAP",
      "Tailwind CSS v4",
      "Vercel",
      "Google Forms API",
    ],
    description: [
      "B Digital Media is a Dubai-based influencer marketing agency founded by Bea Candaza. It specializes in connecting brands with creators across Southeast Asia, specifically covering the Philippines, Singapore, Thailand, and Malaysia. I built this project from the ground up, starting with the brand identity and visual direction before moving into a full website build. Bea wanted a look that felt premium and bold without the stiffness of a corporate firm. The tone is intentionally witty and confident to reflect her personality and the Gen-Z audience she serves.",
      "For the brand identity, I developed a color system rooted in burgundy, which is Bea's personal favorite. I paired it with gold accents to create a luxury-meets-digital aesthetic. A deep navy-black base gives the site depth while allowing the gradients and typography to breathe. After testing several options, I landed on League Gothic for headlines because its tall, condensed shape creates a strong editorial impact. This is balanced by Poppins for body text, which offers a clean and modern feel that keeps the site approachable.",
      "The website is a high-energy experience powered by GSAP scroll animations. I designed these to be intentional rather than decorative, featuring word-by-word color reveals, parallax product images, and scrolling creator showcases. Key features include campaign detail pages with embedded social media content, a live commerce section with autoplay video, and country-filtered browsing. The entire site is fully responsive, with mobile-specific navigation and staggered menu animations to keep the experience seamless on any device.",
      "The final copy direction was a collaborative effort focused on one-liners that cut through the noise. Lines like \u201CLikes are nice; sell-outs are better\u201D set a professional yet punchy tone that resonates with both beauty brands and modern creators. The result is a visual-heavy portfolio that positions B Digital Media as a serious player in the influencer space while staying true to the creative energy of the industry.",
    ],
    liveLink: "https://thebdigitalmedia.com",
    heroImage: "/images/projects/bdigital/hero.jpg",
    projectImages: [
      {
        src: "/images/projects/bdigital/hero.png",
        alt: "Hero Section — From Local to Global",
      },
      {
        src: "/images/projects/bdigital/about.png",
        alt: "About Reveal — Word-by-word scroll animation",
      },
      {
        src: "/images/projects/bdigital/services.png",
        alt: "Services Section — What We Offer",
      },
      {
        src: "/images/projects/bdigital/campaigns.png",
        alt: "Campaign Detail Page",
      },

      {
        src: "/images/projects/bdigital/contact.png",
        alt: "Work With Us — Dual Form System",
      },
      {
        src: "/images/projects/bdigital/mobile.png",
        alt: "Mobile Responsive Design",
      },
      {
        src: "/images/projects/bdigital/branding.png",
        alt: "Brand Color Palette & Typography",
      },
    ],
    nextProject: {
      title: "Pawikan Dive Center",
      category: "Web Development",
      href: "/portfolio/pawikan-divers",
    },
  };

  return <ProjectDetail {...projectData} />;
}
