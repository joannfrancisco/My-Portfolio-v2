import { Poppins, Inconsolata, Homemade_Apple } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const poppins = Poppins({
  //paragraphs
  weight: ["400", "500", "600", "700", "800", "900"],
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
  title: "Jo Ann Francisco | Creative Web Developer",
  description:
    "Creative UX/UI Designer and Full-Stack Web Developer from the Philippines, crafting modern, responsive, and seamless web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} '${homemadeapple.variable} '${inconsolata.variable} antialiased`}
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
      </body>
    </html>
  );
}
