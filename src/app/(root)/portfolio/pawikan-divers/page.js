"use client";

import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectPawikan() {
  const projectData = {
    title: "Pawikan Dive Center",
    badge: "Dive & Tourism Website",
    categories: ["Web Development", "UI/UX Design"],
    techStack: ["Next.js", "GSAP", "Tailwind CSS", "Vercel"],
    description: [
      "Pawikan Divers is a CMAS-certified dive center in Cebu, Philippines, offering scuba diving courses and underwater adventures for all skill levels.",
      "For this project, I built a comprehensive website to showcase their services and make booking seamless, drawing inspiration from leading adventure tourism and dive center websites to create an immersive experience.",
      "The result features a hero video with wavy text animations using GSAP, smooth scroll-triggered section reveals, and a mobile-first responsive design with progressive image loading and 'load more' functionality for galleries.",
      "The site prioritizes trust-building through prominent CMAS certification displays, authentic dive photography, and clear service categorization (Discover Scuba Diving, Scuba Certification, Fun Dives) that guides users from curiosity to confident booking decisions.",
    ],
    liveLink: "https://pawikandivers.com",
    heroImage: "/images/projects/pawikan/hero.png",
    projectImages: [
      { src: "/images/projects/pawikan/hero.png", alt: "Hero Section" },
      { src: "/images/projects/pawikan/service.png", alt: "Service Section" },
      { src: "/images/projects/pawikan/review.png", alt: "Review Section" },
      { src: "/images/projects/pawikan/blog.png", alt: "Blog Section" },
      { src: "/images/projects/pawikan/contact.png", alt: "Contact Section" },
      { src: "/images/projects/pawikan/404.png", alt: "404 Page" },
    ],
    nextProject: {
      title: "Marci Metzger",
      category: "Web Development",
      href: "/portfolio/marci-metzger",
    },
  };

  return <ProjectDetail {...projectData} />;
}
