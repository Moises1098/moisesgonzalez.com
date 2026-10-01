"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useState } from "react";
import "./Navbar.css";
import { useTheme } from "./LightandDarkmode";

export default function Navbar() {
  const pathname = usePathname();

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  /*
    NAVBAR SCROLL BEHAVIOR

    - Stay visible near the top of the page.
    - Hide when scrolling down past 150px.
    - Show again as soon as the user scrolls up.
  */
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className="portfolio-navbar"
      animate={{
        y: hidden && !mobileMenuOpen ? -140 : 0,
        opacity: hidden && !mobileMenuOpen ? 0 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {/* DESKTOP NAVBAR */}
      <div className="desktop-navbar">
        <div className="navbar-bar">
          <img
            src="/NavBar-BG.png"
            alt=""
            className="navbar-background"
          />

          <div className="navbar-dark-overlay" />
          <div className="navbar-glass-highlight" />
          <div className="navbar-inner-border" />

          <div className="navbar-content">
            {/* LEFT */}
            <div className="navbar-left">
              <div className="profile-container">
                <Image
                  src="/Profile.png"
                  alt="Moises Gonzalez"
                  fill
                  sizes="52px"
                  priority
                  className="profile-image"
                />
              </div>

              <span className="navbar-divider" />

              <span className="navbar-name">
                Moises Gonzalez
              </span>
            </div>

            {/* CENTER */}
            <div
              className="navbar-links"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                const showIndicator =
                  hoveredLink === link.href ||
                  (hoveredLink === null && isActive);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() =>
                      setHoveredLink(link.href)
                    }
                    className={`navbar-link ${
                      isActive ? "navbar-link-active" : ""
                    }`}
                  >
                    {link.name}

                    {showIndicator && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="navbar-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      >
                        <div className="navbar-indicator-line" />
                        <div className="navbar-indicator-dot" />
                      </motion.div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* RIGHT */}
            <div className="navbar-right">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="resume-button"
              >
                Resume

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
              </Link>

              <span className="navbar-divider" />

              {/* DESKTOP THEME BUTTON */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  theme === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
                className="theme-button"
              >
                {theme === "light" ? (
                  /* SUN */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                ) : (
                  /* MOON */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="mobile-navbar">
        <div
          className={`mobile-navbar-bar ${
            mobileMenuOpen ? "mobile-navbar-open" : ""
          }`}
        >
          <img
            src="/NavBar-BG.png"
            alt=""
            className="navbar-background"
          />

          <div className="navbar-dark-overlay" />
          <div className="navbar-glass-highlight" />
          <div className="navbar-inner-border" />

          <div className="mobile-navbar-content">
            {/* MOBILE PROFILE */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-profile-section"
            >
              <div className="profile-container">
                <Image
                  src="/Profile.png"
                  alt="Moises Gonzalez"
                  fill
                  sizes="52px"
                  priority
                  className="profile-image"
                />
              </div>

              <span className="mobile-navbar-name">
                Moises Gonzalez
              </span>
            </Link>

            {/* HAMBURGER */}
            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() =>
                setMobileMenuOpen((open) => !open)
              }
              className="hamburger-button"
            >
              <div className="hamburger">
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 9 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                />

                <motion.span
                  animate={{
                    opacity: mobileMenuOpen ? 0 : 1,
                    scaleX: mobileMenuOpen ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                />

                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? -9 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-dropdown"
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
            >
              <img
                src="/NavBar-BG.png"
                alt=""
                className="dropdown-background"
              />

              <div className="dropdown-dark-overlay" />

              <div className="dropdown-content">
                {/* MOBILE LINKS */}
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() =>
                        setMobileMenuOpen(false)
                      }
                      className={`mobile-nav-link ${
                        isActive
                          ? "mobile-nav-link-active"
                          : ""
                      }`}
                    >
                      <span>{link.name}</span>

                      {isActive && (
                        <span className="mobile-active-dot" />
                      )}
                    </Link>
                  );
                })}

                <div className="mobile-divider" />

                {/* MOBILE RESUME */}
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className="mobile-resume-button"
                >
                  Resume

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v12" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                </Link>

                {/* MOBILE THEME */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={
                    theme === "light"
                      ? "Switch to dark mode"
                      : "Switch to light mode"
                  }
                  className="mobile-theme-button"
                >
                  {theme === "light" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                    </svg>
                  )}

                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}