import { Poppins, Archivo, Homemade_Apple } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const homemadeapple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-homemadeapple",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://joannfrancisco.com"),

  // Primary Metadata
  title: {
    default: "Jo Ann Francisco | Web Designer & Full-Stack Developer",
    template: "%s | Jo Ann Francisco",
  },
  description:
    "Freelance web designer and full-stack developer specializing in modern, high-performance websites for small businesses. Expert in Next.js, React, TypeScript, and responsive design. Based in the Philippines.",

  keywords: [
    // Primary Services
    "freelance web developer",
    "freelance web designer",
    "full-stack developer",
    "frontend developer",
    "web development services",

    // Location-based
    "web developer Philippines",
    "web designer Philippines",
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
  authors: [{ name: "Jo Ann Francisco", url: "https://joannfrancisco.com" }],
  creator: "Jo Ann Francisco",
  publisher: "Jo Ann Francisco",

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joannfrancisco.com",
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
    // images: ["/twitter-image.png"],
    images: ["/og-image.png"],
    creator: "@joannfrancisco",
    site: "@joannfrancisco",
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
    canonical: "https://joannfrancisco.com",
    languages: {
      "en-US": "https://joannfrancisco.com",
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
    "@id": "https://joannfrancisco.com/#person",
    name: "Jo Ann Francisco",
    alternateName: "Jo Ann V. Francisco",
    url: "https://joannfrancisco.com",
    image: "https://joannfrancisco.com/images/AboutImage.png",
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
      "https://twitter.com/joannfrancisco",
    ],

    // Skills & Expertise
    knowsAbout: [
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
    ],

    // Work
    hasOccupation: {
      "@type": "Occupation",
      name: "Web Designer & Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Philippines",
      },
      skills: "Next.js, React, TypeScript, Tailwind CSS, UI/UX Design",
    },
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://joannfrancisco.com/#website",
    url: "https://joannfrancisco.com",
    name: "Jo Ann Francisco - Web Designer & Developer",
    description:
      "Portfolio and services website for freelance web designer and full-stack developer Jo Ann Francisco",
    publisher: {
      "@id": "https://joannfrancisco.com/#person",
    },
    inLanguage: "en-US",
  };

  // Professional Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://joannfrancisco.com/#service",
    name: "Jo Ann Francisco Web Design & Development",
    description:
      "Professional web design and development services specializing in modern, high-performance websites for small businesses",
    url: "https://joannfrancisco.com",
    provider: {
      "@id": "https://joannfrancisco.com/#person",
    },
    serviceType: [
      "Web Design",
      "Web Development",
      "Frontend Development",
      "Full-Stack Development",
      "UI/UX Design",
      "Responsive Web Design",
      "Website Optimization",
    ],
    areaServed: {
      "@type": "Country",
      name: "Philippines",
    },
    availableLanguage: ["English", "Filipino"],
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
        item: "https://joannfrancisco.com",
      },
    ],
  };

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="icon" href="/icon.svg" type="image/svg+xml" /> */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

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
        className={`${poppins.variable} ${homemadeapple.variable} ${archivo.variable} antialiased`}
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
