import "./globals.css";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Cursor from "@/components/Cursor/Cursor";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";

const siteUrl = "https://portfolio-pi-ivory-95.vercel.app";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Muhammad Shoaib Asghar — Software · AI · Security",
  description:
    "Portfolio of Muhammad Shoaib Asghar — Software Engineer, Cybersecurity Analyst, and AI enthusiast focused on secure, practical systems.",
  keywords: [
    "Muhammad Shoaib Asghar",
    "software engineer",
    "cybersecurity analyst",
    "AI enthusiast",
    "portfolio",
    "FastAPI",
    "Flutter",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Shoaib Asghar — Software · AI · Security",
    description:
      "Portfolio of Muhammad Shoaib Asghar — practical software, AI, and cybersecurity work with a security-first mindset.",
    url: siteUrl,
    siteName: "Muhammad Shoaib Asghar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Muhammad Shoaib Asghar — Software · AI · Security",
    description:
      "Portfolio of Muhammad Shoaib Asghar — practical software, AI, and cybersecurity work.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
        <ScrollProgress />
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
