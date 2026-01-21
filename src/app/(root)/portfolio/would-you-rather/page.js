"use client";

import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectWouldYouRather() {
  const projectData = {
    title: "Would You Rather?",
    badge: "Polling Web App",
    categories: ["Web App Development"],
    techStack: ["React", "Node", "Firebase", "Vanilla CSS", "GitHub Pages"],
    description: [
      "Would You Rather? is an interactive web app built with React and Firebase that lets users create playful polls, vote on choices, and see real-time results.",
      "Users can sign in with Google to create and manage polls, or participate anonymously for quick, frictionless voting.",
      "The experience is lightweight, engaging, and accessible to everyone.",
    ],
    liveLink: "https://joannfrancisco.github.io/would-you-rather/",
    heroImage: "/images/projects/wyr/wyr-cover.png",
    projectImages: [
      { src: "/images/projects/wyr/home.png", alt: "Homepage" },
      {
        src: "/images/projects/wyr/poll-google.png",
        alt: "Poll Section using Google Account",
      },
      {
        src: "/images/projects/wyr/poll-guest.png",
        alt: "Poll Section as Guest",
      },
    ],
    nextProject: {
      title: "Pawikan Divers",
      category: "Web Development",
      href: "/portfolio/pawikan-divers",
    },
  };

  return <ProjectDetail {...projectData} />;
}
