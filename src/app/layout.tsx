import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import LightandDarkmode from "@/components/LightandDarkmode";

export const metadata: Metadata = {
  title: "Moises Gonzalez",
  description: "Personal portfolio",
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