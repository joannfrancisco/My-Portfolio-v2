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
    default: "Jo Ann Francisco | Web Designer & Full-Stack Developer",
    template: "%s | Jo Ann Francisco",
  },
  description:
    "Freelance web designer and full-stack developer specializing in modern, high-performance websites for small businesses. Expert in Next.js, React, TypeScript, and responsive design. Based in the Philippines.",

  keywords: [
    // Primary Services
    "web developer",
    "web designer",
    "freelance web developer",
    "freelance web designer",
    "full-stack developer",
    "frontend developer",
    "web development services",

    // Location-based
    "web developer Philippines",
    "web designer Philippines",
    "Cebu web developer",
    "Bacolod web developer",
    "Filipino web developer",

    // Skills & Technologies
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Tailwind CSS expert",
    "responsive web design",
    "UI/UX designer",

    // Services
    "website design",
    "web application development",
    "portfolio website",
    "business website design",
    "e-commerce development",
    "landing page design",
    "custom coded websites",

    // Target Clients
    "small business websites",
    "startup web development",
    "custom web solutions",

    // Professional
    "Jo Ann Francisco",
    "joannfrancisco",
    "web developer portfolio",
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
    siteName: "Jo Ann Francisco - Web Designer & Developer",
    title: "Jo Ann Francisco | Web Designer & Full-Stack Developer",
    description:
      "Transform your vision into a high-performance website that converts visitors into customers. Freelance web designer specializing in Next.js, React, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jo Ann Francisco - Web Designer & Full-Stack Developer",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Jo Ann Francisco | Web Designer & Full-Stack Developer",
    description:
      "Modern, high-performance websites designed to help small businesses grow. Freelance web designer based in the Philippines.",
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

  // Verification (Add your codes)
  verification: {
    google: "W3noX_Wtgmscc2LQwuxEpoQypipHoCHfVSOr_TkrtnE",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
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
    jobTitle: "Web Designer & Full-Stack Developer",
    description:
      "Freelance web designer and full-stack developer specializing in modern, high-performance websites using Next.js, React, and TypeScript.",

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
      "Website",
      "E-Commerce",
      "Landing Page",
      "Web Development",
      "Web Design",
      "Frontend Development",
      "Full-Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "UI/UX Design",
      "Responsive Design",
      "Performance Optimization",
      "Custom Web Development",
    ],

    // Work
    hasOccupation: {
      "@type": "Occupation",
      name: "Web Designer & Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Philippines",
      },
      skills:
        "Next.js, React, TypeScript, Tailwind CSS, UI/UX Design, Custom Web Development",
    },
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.joannfrancisco.com/#website",
    url: "https://www.joannfrancisco.com",
    name: "Jo Ann Francisco - Web Designer & Developer",
    description:
      "Portfolio and services website for freelance web designer and full-stack developer Jo Ann Francisco",
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
    name: "Jo Ann Francisco Web Design & Development",
    description:
      "Professional web design and development services specializing in modern, high-performance websites for small businesses",
    url: "https://www.joannfrancisco.com",
    provider: {
      "@id": "https://www.joannfrancisco.com/#person",
    },
    serviceType: [
      "Web Design",
      "Web Development",
      "Frontend Development",
      "Full-Stack Development",
      "UI/UX Design",
      "Responsive Web Design",
      "Website Optimization",
      "Custom Web Development",
    ],
    areaServed: {
      "@type": "Country",
      name: "Philippines",
    },
    availableLanguage: ["English", "Filipino"],
    priceRange: "$800 - $5000",
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
        {/* Structured Data - Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Structured Data - Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        {/* Structured Data - Breadcrumb */}
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

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-EB6GXHJXE5" />
      </body>
    </html>
  );
}
