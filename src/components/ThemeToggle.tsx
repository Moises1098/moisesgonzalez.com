"use client";

import { motion } from "motion/react";
import { useTheme } from "./LightandDarkmode";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const dark = theme === "dark";

  return (
    <motion.button
      type="button"
      aria-label={
        dark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        dark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      onClick={toggleTheme}
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      whileTap={{
        scale: 0.92,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 24,
      }}
      style={{
        position: "fixed",

        right: 24,
        bottom: 24,

        width: 58,
        height: 58,

        borderRadius: "50%",

        display: "grid",
        placeItems: "center",

        border: dark
          ? "1px solid rgba(205,235,255,.14)"
          : "1px solid rgba(255,255,255,.55)",

        background: dark
          ? `
              linear-gradient(
                135deg,
                rgba(120,175,220,.13),
                rgba(70,120,165,.055)
              )
            `
          : `
              linear-gradient(
                135deg,
                rgba(235,248,255,.48),
                rgba(185,220,245,.20)
              )
            `,

        backdropFilter:
          "blur(30px) saturate(180%) brightness(1.08)",

        WebkitBackdropFilter:
          "blur(30px) saturate(180%) brightness(1.08)",

        boxShadow: dark
          ? `
              0 14px 35px rgba(0,0,0,.22),
              0 4px 12px rgba(0,0,0,.10),
              inset 0 1px 0 rgba(225,245,255,.18),
              inset 0 -1px 0 rgba(0,0,0,.10)
            `
          : `
              0 14px 35px rgba(55,85,115,.13),
              0 4px 12px rgba(55,85,115,.07),
              inset 0 1px 0 rgba(255,255,255,.75),
              inset 0 -1px 0 rgba(90,130,160,.08)
            `,

        color: dark
          ? "#68D5FF"
          : "#1689C9",

        padding: 0,
        margin: 0,

        cursor: "pointer",

        overflow: "hidden",

        zIndex: 200,
      }}
    >
      {/* Glass reflection */}
      <span
        aria-hidden
        style={{
          position: "absolute",

          top: -18,
          left: 5,

          width: 44,
          height: 30,

          borderRadius: "50%",

          background: dark
            ? "rgba(220,245,255,.12)"
            : "rgba(255,255,255,.60)",

          filter: "blur(10px)",

          pointerEvents: "none",
        }}
      />

      {/* SUN / MOON */}
      <div
        style={{
          position: "relative",

          width: 27,
          height: 27,

          display: "grid",
          placeItems: "center",

          zIndex: 2,
        }}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: dark ? -90 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
          }}
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          {dark ? <MoonIcon /> : <SunIcon />}
        </motion.div>
      </div>
    </motion.button>
  );
}

/* =========================================================
   SUN
========================================================= */

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="27"
      height="27"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3.5" />

      <path d="M12 2v2" />
      <path d="M12 20v2" />

      <path d="m4.93 4.93 1.42 1.42" />
      <path d="m17.65 17.65 1.42 1.42" />

      <path d="M2 12h2" />
      <path d="M20 12h2" />

      <path d="m6.35 17.65-1.42 1.42" />
      <path d="m19.07 4.93-1.42 1.42" />
    </svg>
  );
}

/* =========================================================
   MOON
========================================================= */

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="27"
      height="27"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5a8.5 8.5 0 1 0 10.9 10.9Z" />
    </svg>
  );
}