import localFont from "next/font/local";
import { Homemade_Apple } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

// Logo
const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-homemade-apple",
  display: "swap",
});

// General Sans - Body Font
const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

const getaiGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/DTGetaiGroteskDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-getai-grotesk",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.joannfrancisco.com"),

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },

  manifest: "/manifest.json",

  // Primary Metadata
  title: {
    default: "Jo Ann Francisco | Software Engineer for Growing Businesses",
    template: "%s | Jo Ann Francisco",
  },
  description:
    "Independent software engineer building custom websites, web and mobile apps, internal tools, and AI automations. Full-stack development with Next.js, React, and TypeScript. Based in the Philippines, working worldwide.",

  keywords: [
    // Primary Positioning
    "software engineer",
    "full-stack developer",
    "freelance software engineer",
    "custom software developer",
    "full-stack engineer",

    // Core Services
    "web app development",
    "mobile app development",
    "custom business software",
    "SaaS development",
    "MVP development",
    "internal tools development",
    "CRM development",
    "dashboard development",
    "AI automation",
    "AI integration",
    "workflow automation",
    "business process automation",

    // Secondary Services (still offered)
    "web developer",
    "website development",
    "landing page development",
    "e-commerce development",

    // Location-based
    "software engineer Philippines",
    "web developer Philippines",
    "Filipino software engineer",
    "remote software engineer",
    "freelance developer Philippines",

    // Skills & Technologies
    "Next.js developer",
    "React developer",
    "React Native developer",
    "TypeScript developer",
    "Node.js developer",
    "Tailwind CSS expert",
    "API integration",
    "full-stack Next.js",

    // Target Clients
    "software for small business",
    "startup MVP development",
    "custom SaaS for startups",
    "business automation solutions",
    "small business software",

    // Professional
    "Jo Ann Francisco",
    "joannfrancisco",
  ],

  // Authors & Creator
  authors: [
    { name: "Jo Ann Francisco", url: "https://www.joannfrancisco.com" },
  ],
  creator: "Jo Ann Francisco",
  publisher: "Jo Ann Francisco",

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.joannfrancisco.com",
    siteName: "Jo Ann Francisco - Software Engineer",
    title: "Jo Ann Francisco | Software Engineer for Growing Businesses",
    description:
      "I build custom websites, apps, internal tools, and AI automations for businesses ready to move beyond spreadsheets and manual work. Full-stack engineer based in the Philippines.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jo Ann Francisco - Software Engineer",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Jo Ann Francisco | Software Engineer",
    description:
      "Custom websites, web and mobile apps, internal tools, and AI automations for businesses ready to scale. Full-stack engineer based in the Philippines.",
    images: ["/twitter-image.png"],
    creator: "@joannvfrancisco",
    site: "@joannvfrancisco",
  },

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "W3noX_Wtgmscc2LQwuxEpoQypipHoCHfVSOr_TkrtnE",
  },

  // Alternate Languages
  alternates: {
    canonical: "https://www.joannfrancisco.com",
    languages: {
      "en-US": "https://www.joannfrancisco.com",
    },
  },

  // Category
  category: "Technology",

  // Other
  applicationName: "Jo Ann Francisco Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  // Enhanced Schema.org structured data
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.joannfrancisco.com/#person",
    name: "Jo Ann Francisco",
    alternateName: "Jo Ann V. Francisco",
    url: "https://www.joannfrancisco.com",
    image: "https://www.joannfrancisco.com/images/AboutImage.png",
    jobTitle: "Software Engineer",
    description:
      "Independent software engineer building custom websites, web and mobile apps, internal tools, and AI automations for growing businesses. Specializes in Next.js, React, TypeScript, and full-stack development.",

    // Contact & Location
    email: "info@joannfrancisco.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Carlos City",
      addressRegion: "Western Visayas",
      addressCountry: "PH",
    },

    // Social Media
    sameAs: [
      "https://www.linkedin.com/in/joannfrancisco",
      "https://github.com/joannfrancisco",
      "https://www.instagram.com/joannfrancisco.dev/",
      "https://www.behance.net/joannvfrancisco",
      "https://twitter.com/joannvfrancisco",
      "https://threads.com/annf.dev",
    ],

    // Skills & Expertise
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "Web Application Development",
      "Mobile App Development",
      "Custom Business Software",
      "SaaS Development",
      "MVP Development",
      "Internal Tools",
      "CRM Development",
      "AI Automation",
      "Workflow Automation",
      "API Development",
      "API Integration",
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Tailwind CSS",
      "Responsive Design",
      "Performance Optimization",
      "Database Design",
      "Web Development",
      "Frontend Development",
      "Backend Development",
    ],

    // Work
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "Philippines",
      },
      skills:
        "Next.js, React, React Native, TypeScript, Node.js, Tailwind CSS, Full-Stack Development, AI Integration, Custom Business Software",
    },
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.joannfrancisco.com/#website",
    url: "https://www.joannfrancisco.com",
    name: "Jo Ann Francisco - Software Engineer",
    description:
      "Portfolio and services website for independent software engineer Jo Ann Francisco, specializing in custom software for growing businesses",
    publisher: {
      "@id": "https://www.joannfrancisco.com/#person",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.joannfrancisco.com/portfolio?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Professional Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.joannfrancisco.com/#service",
    name: "Jo Ann Francisco Software Engineering Services",
    description:
      "Custom software engineering services specializing in websites, web and mobile apps, internal business tools, SaaS products, and AI automation for growing businesses",
    url: "https://www.joannfrancisco.com",
    provider: {
      "@id": "https://www.joannfrancisco.com/#person",
    },
    serviceType: [
      "Custom Software Development",
      "Web Application Development",
      "Mobile App Development",
      "Full-Stack Development",
      "SaaS Development",
      "MVP Development",
      "Internal Business Tools",
      "CRM & Dashboard Development",
      "AI Automation",
      "Workflow Automation",
      "Website Development",
      "API Integration",
    ],
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    availableLanguage: ["English", "Filipino"],
    priceRange: "$2,500 - $50,000+",
  };

  // Breadcrumb Schema (base)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.joannfrancisco.com",
      },
    ],
  };

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body
        className={`${generalSans.variable} ${getaiGrotesk.variable} ${homemadeApple.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <GoogleAnalytics gaId="G-EB6GXHJXE5" />
      </body>
    </html>
  );
}
