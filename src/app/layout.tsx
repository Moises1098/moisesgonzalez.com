import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import LightandDarkmode from "@/components/LightandDarkmode";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moises Gonzalez",
  description: "Personal portfolio",

  icons: {
    icon: "/favicon.svg",
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <LightandDarkmode>
          <Navbar />
          {children}
        </LightandDarkmode>
      </body>
    </html>
  );
}