"use client";

import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectMoviedux() {
  const projectData = {
    title: "Moviedux",
    badge: "Movie Discovery Web App",
    categories: ["Web App Development"],
    techStack: ["React", "Node", "TMDb API", "Vanilla CSS", "GitHub Pages"],
    description: [
      "Moviedux is a movie discovery and watchlist web app built with the React framework and the TMDb API.",
      "It allows users to explore trending films, search the full TMDb catalog, and build a personal watchlist. The interface is clean, fast, and fully responsive across all devices, making movie browsing simple and enjoyable.",
      "This project strengthened my skills in API integration, state management, and designing smooth, user-friendly components.",
    ],
    liveLink: "https://joannfrancisco.github.io/moviedux/",
    heroImage: "/images/projects/moviedux/moviedux-cover.png",
    projectImages: [
      { src: "/images/projects/moviedux/hero.png", alt: "Hero Section" },
      { src: "/images/projects/moviedux/selection.png", alt: "Select Genre" },
      {
        src: "/images/projects/moviedux/loadmore.png",
        alt: "Load More Movies",
      },
      {
        src: "/images/projects/moviedux/mobile.png",
        alt: "Mobile Responsiveness",
      },
    ],
    nextProject: {
      title: "Tidy Touch",
      category: "Webflow",
      href: "/portfolio/tidy-touch",
    },
  };

  return <ProjectDetail {...projectData} />;
}
