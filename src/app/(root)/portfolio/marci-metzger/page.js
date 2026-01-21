"use client";

import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectMarciMetzger() {
  const projectData = {
    title: "Marci Metzger",
    badge: "Real Estate Homepage Redesign",
    categories: ["Web Development"],
    techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
    description: [
      "Marci Metzger is a real estate professional with a modern, lead-converting homepage built with HTML, CSS, and JavaScript.",
      "This project focused on creating a clean, responsive design that highlights her services and encourages potential clients to take action.",
      "The result features subtle micro-interactions and a user-friendly layout that enhances the overall user experience.",
    ],
    liveLink: "https://marci-metzger-six.vercel.app/",
    heroImage: "/images/projects/marci/marci-hero.png",
    projectImages: [
      { src: "/images/projects/marci/marci-hero.png", alt: "Hero Section" },
      { src: "/images/projects/marci/about.png", alt: "About Section" },
      { src: "/images/projects/marci/listings.png", alt: "Listings Section" },
    ],
    nextProject: {
      title: "Gr8nola",
      category: "Web Development",
      href: "/portfolio/granola",
    },
  };

  return <ProjectDetail {...projectData} />;
}
