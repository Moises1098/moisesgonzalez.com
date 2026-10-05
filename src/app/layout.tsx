import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import LightandDarkmode from "@/components/LightandDarkmode";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Moises Gonzalez",
  description: "Personal portfolio",
  icons: {
    icon: [
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={spaceGrotesk.variable}
    >
      <body>
        <LightandDarkmode>
          <Navbar />

          {children}

          <Footer />
          <ThemeToggle />
        </LightandDarkmode>
      </body>
    </html>
  );
}