"use client";

import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectTidyTouch() {
  const projectData = {
    title: "Tidy Touch",
    badge: "Cleaning Service Website",
    categories: ["Webflow", "UI/UX Design"],
    techStack: ["Webflow", "Figma"],
    description: [
      "Tidy Touch is a cleaning service website built in Webflow, designed to demonstrate a clean, modern, and user-friendly layout.",
      "It highlights services, FAQs, reviews, and customer information while also featuring a CMS-powered blog to display articles and cleaning tips.",
      "The project focuses on presenting a polished, professional look through thoughtful UI/UX design, intentional typography choices, and a cohesive color palette.",
    ],
    liveLink: "https://tidy-touch.webflow.io/",
    heroImage: "/images/projects/tidy-touch/tidy-touch-cover.png",
    projectImages: [
      { src: "/images/projects/tidy-touch/hero.png", alt: "Hero Section" },
      { src: "/images/projects/tidy-touch/services.png", alt: "Services" },
      { src: "/images/projects/tidy-touch/quote.png", alt: "Quote Section" },
      { src: "/images/projects/tidy-touch/review.png", alt: "Review Section" },
      {
        src: "/images/projects/tidy-touch/mobile.png",
        alt: "Mobile Responsiveness",
      },
    ],
    nextProject: {
      title: "Would You Rather?",
      category: "Web App Development",
      href: "/portfolio/would-you-rather",
    },
  };

  return <ProjectDetail {...projectData} />;
}
