
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import Navbar from "@/components/Navbar";
import LightandDarkmode from "@/components/LightandDarkmode";
import LanguageProvider from "@/components/LanguageProvider";
import FloatingControls from "@/components/FloatingControls";
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
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
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
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
            <FloatingControls />
          </LanguageProvider>
        </LightandDarkmode>
      </body>
    </html>
  );
}
