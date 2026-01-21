"use client";

import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectGranola() {
  const projectData = {
    title: "Gr8nola",
    badge: "E-Commerce Homepage Redesign",
    categories: ["Web Development"],
    techStack: ["React", "GSAP", "Tailwind CSS", "ShadCN", "Vercel"],
    description: [
      "Gr8nola is a delicious, low-sugar whole-food brand offering a variety of healthy and flavorful options.",
      "For this project, I redesigned their homepage to better reflect the quality of their products, drawing inspiration from leading health and wellness brands to create a more engaging experience.",
      "The result features refined GSAP parallax effects, smooth animations, and a clean, modern, responsive layout that highlights their brand story and encourages visitors to keep exploring.",
    ],
    liveLink: "https://project-granola.vercel.app/",
    heroImage: "/images/projects/granola/granola-cover.png",
    projectImages: [
      { src: "/images/projects/granola/hero.png", alt: "Hero Section" },
      { src: "/images/projects/granola/story.png", alt: "Story Section" },
      { src: "/images/projects/granola/product.png", alt: "Product Section" },
      {
        src: "/images/projects/granola/subscription.png",
        alt: "Subscribe Section",
      },
      {
        src: "/images/projects/granola/mobile.png",
        alt: "Mobile Responsiveness",
      },
    ],
    nextProject: {
      title: "Moviedux",
      category: "Web App Development",
      href: "/portfolio/moviedux",
    },
  };

  return <ProjectDetail {...projectData} />;
}
