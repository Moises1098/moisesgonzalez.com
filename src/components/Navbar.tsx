"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

/*
 * =========================================================
 * HOME PILL NAVIGATION
 * =========================================================
 *
 * Home is intentionally NOT included here.
 */

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

/*
 * =========================================================
 * DEFAULT NAVIGATION
 * =========================================================
 *
 * Home is included here.
 */

const defaultNavigation = [
  { name: "Home", href: "/" },
  ...navigation,
];

/*
 * =========================================================
 * MORPH SETTINGS
 * =========================================================
 */

const morphDuration = 0.85;

const morphEase = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const pathname = usePathname();

  const { scrollY } = useScroll();

  const isHome = pathname === "/";

  const [hidden, setHidden] = useState(false);

  /*
   * Mobile menu state.
   *
   * Starts CLOSED.
   */
  const [mobileOpen, setMobileOpen] = useState(false);

  /*
   * Close mobile menu whenever the route changes.
   */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /*
   * =========================================================
   * HIDE NAVBAR WHEN SCROLLING DOWN
   * =========================================================
   */

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  /*
   * =========================================================
   * NAVIGATION HANDLER
   * =========================================================
   */

  const handleNavigation = () => {
    setMobileOpen(false);
  };

  return (
    <motion.header
      className="
        pointer-events-none
        fixed
        inset-x-0
        top-0
        z-50
      "
      animate={{
        y: hidden ? -140 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: morphEase,
      }}
    >

      {/* ===================================================== */}
      {/*                                                       */}
      {/*                 ONE NAVBAR SHELL                      */}
      {/*                                                       */}
      {/* ===================================================== */}

      <motion.nav
        initial={false}
        className="
          pointer-events-auto
          absolute
          left-1/2
          overflow-hidden
          shadow-lg
        "
        style={{
          x: "-50%",
        }}

        /*
         * ===================================================
         * START / END STATES
         * ===================================================
         *
         * HOME:
         *
         *   width        → 700px
         *   top          → 24px
         *   radius       → pill
         *   color        → white
         *
         * DEFAULT:
         *
         *   width        → 100vw
         *   top          → 0
         *   radius       → square
         *   color        → navy
         *
         * Motion interpolates these values on the SAME
         * physical navbar element.
         */

        animate={{
          width: isHome
            ? "min(700px, calc(100vw - 2rem))"
            : "100vw",

          top: isHome ? 24 : 0,

          borderRadius: isHome ? 9999 : 0,

          backgroundColor: isHome
            ? "#ffffff"
            : "#0f172a",
        }}

        /*
         * ===================================================
         * MORPH TRANSITION
         * ===================================================
         *
         * Width, position, corners and color all start
         * and finish together.
         */

        transition={{
          width: {
            duration: morphDuration,
            ease: morphEase,
          },

          top: {
            duration: morphDuration,
            ease: morphEase,
          },

          borderRadius: {
            duration: morphDuration,
            ease: morphEase,
          },

          backgroundColor: {
            duration: morphDuration,
            ease: morphEase,
          },
        }}
      >

        {/* ================================================= */}
        {/*                                                   */}
        {/*                 HOME PILL CONTENT                 */}
        {/*                                                   */}
        {/* ================================================= */}

        <motion.div
          animate={{
            opacity: isHome ? 1 : 0,
            scale: isHome ? 1 : 0.96,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}

          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            gap-[clamp(1rem,5vw,2.5rem)]
            px-6
          "

          style={{
            pointerEvents: isHome ? "auto" : "none",
          }}
        >

          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleNavigation}

              className="
                group
                relative
                whitespace-nowrap

                text-[clamp(1rem,2vw,1.125rem)]
                font-medium
                text-black

                transition-all
                duration-300

                hover:text-cyan-950

                hover:[text-shadow:
                  0_0_5px_#22d3ee,
                  0_0_15px_#22d3ee,
                  0_0_30px_#22d3ee
                ]

                after:absolute
                after:-bottom-1
                after:left-1/2
                after:h-[2px]
                after:w-0
                after:-translate-x-1/2

                after:bg-cyan-950
                after:shadow-[0_0_8px_#22d3ee]

                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item.name}
            </Link>
          ))}

        </motion.div>


        {/* ================================================= */}
        {/*                                                   */}
        {/*              DEFAULT NAVBAR CONTENT               */}
        {/*                                                   */}
        {/* ================================================= */}

        <motion.div
          animate={{
            opacity: isHome ? 0 : 1,
            scale: isHome ? 0.96 : 1,
          }}

          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}

          className="
            relative
            w-full
            text-white
          "

          style={{
            pointerEvents: isHome ? "none" : "auto",
          }}
        >

          {/* ================================================= */}
          {/* MAIN NAVIGATION ROW                               */}
          {/* ================================================= */}

          <div
            className="
              flex
              min-h-[72px]
              w-full
              items-center
              justify-between
              px-6
              py-4
            "
          >

            {/* ================================================= */}
            {/* NAME                                              */}
            {/* ================================================= */}

            <Link
              href="/"
              onClick={handleNavigation}

              className="
                text-xl
                font-bold
                text-white
              "
            >
              Moises Gonzalez
            </Link>


            {/* ================================================= */}
            {/* DESKTOP NAVIGATION                                */}
            {/* ================================================= */}

            <div
              className="
                hidden
                items-center
                gap-6
                md:flex
              "
            >

              {defaultNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavigation}

                  className="
                    text-lg
                    font-medium
                    text-white

                    transition-colors
                    duration-200

                    hover:text-slate-300
                  "
                >
                  {item.name}
                </Link>
              ))}

            </div>


            {/* ================================================= */}
            {/* MOBILE HAMBURGER                                  */}
            {/* ================================================= */}

            <button
              type="button"

              onClick={() =>
                setMobileOpen((open) => !open)
              }

              className="
                rounded-md
                p-2
                text-white

                transition-colors

                hover:bg-white/10

                md:hidden
              "

              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }

              aria-expanded={mobileOpen}
            >

              {mobileOpen ? (
                <XMarkIcon className="size-6" />
              ) : (
                <Bars3Icon className="size-6" />
              )}

            </button>

          </div>


          {/* ================================================= */}
          {/* MOBILE MENU                                       */}
          {/* ================================================= */}

          <AnimatePresence initial={false}>

            {mobileOpen && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}

                animate={{
                  height: "auto",
                  opacity: 1,
                }}

                exit={{
                  height: 0,
                  opacity: 0,
                }}

                transition={{
                  duration: 0.3,
                  ease: morphEase,
                }}

                className="
                  overflow-hidden
                  px-6
                  pb-4
                  md:hidden
                "
              >

                <div className="flex flex-col space-y-1">

                  {defaultNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleNavigation}

                      className="
                        rounded-md
                        px-3
                        py-2
                        text-white

                        transition-colors

                        hover:bg-white/10
                      "
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </motion.div>

      </motion.nav>

    </motion.header>
  );
}