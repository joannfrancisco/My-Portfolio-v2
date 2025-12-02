import { Poppins, Inconsolata, Homemade_Apple } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inconsolata",
  display: "swap",
});

const homemadeapple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-homemadeapple",
  display: "swap",
});

export const metadata = {
  title: "Jo Ann Francisco | Web Developer Portfolio",
  description:
    "Building Modern, User-Centered Web Experiences. Full-Stack Developer from the Philippines.",
  metadataBase: new URL("https://joannfrancisco.com"),
  keywords: [
    "Web Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Philippines Web Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Design",
    "Web Development",
    "Responsive Web Design",
  ],
  openGraph: {
    title: "Jo Ann Francisco | Web Developer Portfolio",
    description:
      "Building Modern, User-Centered Web Experiences. Full-Stack Developer from the Philippines.",
    url: "https://joannfrancisco.com",
    siteName: "Jo Ann Francisco Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jo Ann Francisco | Web Developer Portfolio",
    description:
      "Building Modern, User-Centered Web Experiences. Full-Stack Developer from the Philippines.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://joannfrancisco.com",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jo Ann Francisco",
    jobTitle: "Web Developer",
    url: "https://joannfrancisco.com",
    sameAs: [
      "https://www.linkedin.com/in/joannfrancisco",
      "https://github.com/joannfrancisco",
      "https://www.instagram.com/joannfrancisco.dev/",
      "https://www.behance.net/joannvfrancisco",
    ],
  };

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${poppins.variable} ${homemadeapple.variable} ${inconsolata.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
