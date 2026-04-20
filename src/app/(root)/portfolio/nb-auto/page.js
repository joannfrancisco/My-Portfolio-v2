"use client";

import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectNBAuto() {
  const projectData = {
    title: "NB Auto Trading",
    badge: "Car Dealership Management System",
    categories: [
      "Business System",
      "Full-Stack Development",
      "UI/UX Design",
      "Automation",
    ],
    techStack: [
      "Next.js 16",
      "Supabase",
      "Tailwind CSS v4",
      "Facebook Graph API",
      "Vercel",
      "Google OAuth",
    ],
    description: [
      "NB Auto Trading is a secondhand car dealership in Lapu-Lapu City, Cebu. When we started this project, the business was handling everything manually through Salesforce, spreadsheets and Facebook threads, which made it difficult to track inventory and profits. I designed and built a 4-in-1 management system that acts as a public website, inventory manager, CRM, and marketing automation tool all rolled into one.",
      "My process began with UX research into how local car dealers actually work. I realized that while Facebook is the primary sales tool, dealers often lack a central place to track vehicle costs, document status, or long-term trends. Because the team is always on the move, I built the entire system to be mobile-first. Every feature was designed to be simple enough for the owner and his staff to manage on their phones while walking around the car lot.",
      "The public website uses a bold maroon and black design that matches with their logo and an easy \u201CSell Your Car\u201D form. Each vehicle page includes a full inventory gallery and a one-tap button that pre-fills vehicle details into a Messenger inquiry for the buyer. On the back end, the admin dashboard is the real powerhouse. It uses real-time alerts to flag \u201Caging\u201D inventory and includes an automated Facebook integration that posts new units, deletes sold ones, and even adds \u201CPrice Drop\u201D badges to posts when rates are lowered.",
      "Beyond just listings, the system handles the heavy lifting of the business financials. It tracks per-vehicle profit, agent performance, and monthly overhead to provide a clear picture of the dealership\u2019s health. By organizing everything from acquisition to the final ownership transfer, the system has replaced a messy manual workflow with a professional, data-driven platform that gives the team full visibility over their operations.",
    ],
    liveLink: "https://nbauto.ph",
    heroImage: "/images/projects/nbauto/homepage.png",
    projectImages: [
      {
        src: "/images/projects/nbauto/homepage.png",
        alt: "Homepage \u2014 Quality Proven at Every Peak",
      },
      {
        src: "/images/projects/nbauto/featured.png",
        alt: "Public Inventory \u2014 Filter and Browse Vehicles",
      },
      {
        src: "/images/projects/nbauto/detail.png",
        alt: "Vehicle Detail Page \u2014 Specs, Gallery & Inquiry",
      },
      {
        src: "/images/projects/nbauto/admin.png",
        alt: "Admin Dashboard \u2014 Real-time Stats & Filters",
      },
      {
        src: "/images/projects/nbauto/add.png",
        alt: "Add Vehicle \u2014 Auto-posts to Facebook on Save",
      },
      {
        src: "/images/projects/nbauto/add2.png",
        alt: "Add Vehicle \u2014 Auto-posts to Facebook on Save",
      },
      {
        src: "/images/projects/nbauto/inventory.png",
        alt: "Vehicle Inventory \u2014 Tracks Costs, Profits & Aging",
      },
      //   {
      //     src: "/images/projects/nbauto/mobile.png",
      //     alt: "Fully Responsive \u2014 Admin & Public Pages",
      //   },
    ],
    nextProject: {
      title: "B Digital Media",
      category: "Web Development",
      href: "/portfolio/b-digital-media",
    },
  };

  return <ProjectDetail {...projectData} />;
}
