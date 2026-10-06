"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { useTheme } from "./LightandDarkmode";
import ECGAnimation, { type LinkGeometry } from "./ECGanimation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Builds", href: "/builds" },
  { name: "Research", href: "/research" },
  { name: "Resume", href: "/resume" },
];

const ECG_TIME = 1800;
const LINE_OFFSET = 10;
const LINE_PAD = 6;
const MOBILE_BREAKPOINT = 768;

const COMPACT_DISTANCE = 140;
const HIDE_AFTER = 160;
const SCROLL_TOLERANCE = 2;

export default function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const dark = theme === "dark";

  const navRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const animationId = useRef(0);

  const [geometry, setGeometry] = useState<LinkGeometry[]>([]);
  const [navSize, setNavSize] = useState({ width: 680, height: 60 });
  const [hovered, setHovered] = useState<number | null>(null);
  const [animating, setAnimating] = useState<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const [mobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const { scrollY } = useScroll();

  /*
    These respond continuously to scroll position.

    0px:
      scale = 1
      opacity/tint = lighter

    140px:
      scale = .965
      glass = stronger
  */
  const desktopScale = useTransform(
    scrollY,
    [0, COMPACT_DISTANCE],
    [1, 0.965]
  );

  const mobileScale = useTransform(
    scrollY,
    [0, COMPACT_DISTANCE],
    [1, 0.975]
  );

  const active = links.findIndex((link) =>
    link.href === "/"
      ? pathname === "/"
      : pathname.startsWith(link.href)
  );

  const currentName = links[active]?.name ?? "Menu";
  const visualActive = animating ?? active;

  /* ======================================================
     SCROLL DIRECTION
  ====================================================== */

  useMotionValueEvent(scrollY, "change", (current) => {
    /*
      Never hide the navbar while the mobile menu is open.
    */
    if (menuOpen) {
      setNavVisible(true);
      return;
    }

    const previous = scrollY.getPrevious() ?? current;
    const difference = current - previous;

    /*
      Always visible near the top.

      This gives us the "stick for a little" behavior.
    */
    if (current < HIDE_AFTER) {
      setNavVisible(true);
      return;
    }

    /*
      Ignore extremely tiny changes so trackpads don't
      make the navbar jitter.
    */
    if (Math.abs(difference) < SCROLL_TOLERANCE) return;

    if (difference > 0) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
  });

  /* ======================================================
     ECG MEASUREMENTS
  ====================================================== */

  const measure = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;

    const navRect = nav.getBoundingClientRect();

    const measurements = links.map((_, index): LinkGeometry | null => {
      const el = textRefs.current[index];
      if (!el) return null;

      const rect = el.getBoundingClientRect();
      const left = rect.left - navRect.left;

      return {
        left,
        right: rect.right - navRect.left,
        center: left + rect.width / 2,
        baselineY: rect.bottom - navRect.top + LINE_OFFSET,
      };
    });

    if (measurements.some((item) => item === null)) return;

    setGeometry(measurements as LinkGeometry[]);

    setNavSize({
      width: navRect.width,
      height: navRect.height,
    });
  }, []);

  /* ======================================================
     RESPONSIVE
  ====================================================== */

  useEffect(() => {
    const query = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT}px)`
    );

    const update = () => {
      setMobile(query.matches);

      if (!query.matches) {
        setMenuOpen(false);
      }
    };

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    if (!mobile) measure();
  }, [mobile, measure]);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav || mobile) return;

    const observer = new ResizeObserver(measure);

    observer.observe(nav);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [mobile, measure]);

  useLayoutEffect(() => {
    if (!mobile) {
      requestAnimationFrame(measure);
    }
  }, [pathname, mobile, measure]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /*
    Prevent scrolling behind the full-screen mobile menu.
  */
  useEffect(() => {
    if (!mobile || !menuOpen) return;

    const oldOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [mobile, menuOpen]);

  /* ======================================================
     ECG
  ====================================================== */

  const playECG = (index: number) => {
    const id = ++animationId.current;

    setHovered(null);
    setAnimating(null);
    setAnimationKey((key) => key + 1);

    requestAnimationFrame(() => {
      if (animationId.current === id) {
        setAnimating(index);
      }
    });

    window.setTimeout(() => {
      if (animationId.current === id) {
        setAnimating(null);
      }
    }, ECG_TIME);
  };

  /* ======================================================
     GLASS
  ====================================================== */

  const glass: CSSProperties = {
    background: dark
      ? "linear-gradient(135deg, rgba(120,175,220,.13), rgba(70,120,165,.055))"
      : "linear-gradient(135deg, rgba(235,248,255,.48), rgba(185,220,245,.20))",

    backdropFilter:
      "blur(30px) saturate(180%) brightness(1.08)",

    WebkitBackdropFilter:
      "blur(30px) saturate(180%) brightness(1.08)",

    border: dark
      ? "1px solid rgba(205,235,255,.14)"
      : "1px solid rgba(255,255,255,.55)",

    boxShadow: dark
      ? `
          0 18px 45px rgba(0,0,0,.22),
          0 4px 14px rgba(0,0,0,.10),
          inset 0 1px 0 rgba(225,245,255,.18),
          inset 0 -1px 0 rgba(0,0,0,.10)
        `
      : `
          0 18px 45px rgba(55,85,115,.13),
          0 4px 14px rgba(55,85,115,.07),
          inset 0 1px 0 rgba(255,255,255,.75),
          inset 0 -1px 0 rgba(90,130,160,.08)
        `,
  };

  /* ======================================================
     MOBILE
  ====================================================== */

  if (mobile) {
    return (
      <>
        <motion.nav
          initial={false}
          animate={{
            y: navVisible || menuOpen ? 0 : -100,
            opacity: navVisible || menuOpen ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 34,
            mass: 0.8,
          }}
          style={{
            ...glass,

            scale: menuOpen ? 1 : mobileScale,

            position: "fixed",
            top: 18,
            left: "50%",

            /*
              x replaces translateX(-50%) because this is
              now a Motion component.
            */
            x: "-50%",

            width: "calc(100% - 32px)",
            maxWidth: 430,
            height: 64,

            borderRadius: 999,

            color: dark
              ? "#F7FBFF"
              : "#102A43",

            overflow: "hidden",

            transformOrigin: "top center",

            zIndex: 101,
          }}
        >
          <GlassReflections dark={dark} />

          <div
            style={{
              position: "relative",

              height: "100%",

              display: "grid",
              gridTemplateColumns:
                "56px 1fr 56px",

              alignItems: "center",

              padding: "0 8px",

              zIndex: 2,
            }}
          >
            <div />

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              aria-label="Go to home page"
              style={{
                justifySelf: "center",
                textAlign: "center",
                fontSize: 17,
                fontWeight: 600,
                letterSpacing: ".01em",
                color: "inherit",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Moises Gonzalez
            </Link>

            <Hamburger
              open={menuOpen}
              onClick={() =>
                setMenuOpen((open) => !open)
              }
            />
          </div>
        </motion.nav>

        {/* FULL-SCREEN MOBILE MENU */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.28,
              }}
              style={{
                position: "fixed",
                inset: 0,

                width: "100%",
                height: "100dvh",

                background: dark
                  ? `
                      linear-gradient(
                        145deg,
                        rgba(3,18,39,.86),
                        rgba(7,35,65,.78)
                      )
                    `
                  : `
                      linear-gradient(
                        145deg,
                        rgba(242,249,255,.88),
                        rgba(213,235,249,.78)
                      )
                    `,

                backdropFilter:
                  "blur(30px) saturate(160%)",

                WebkitBackdropFilter:
                  "blur(30px) saturate(160%)",

                color: dark
                  ? "#F7FBFF"
                  : "#102A43",

                overflow: "hidden",

                zIndex: 100,
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                style={{
                  position: "absolute",

                  top: "-15%",
                  left: "-15%",

                  width: "80vw",
                  height: "50vh",

                  borderRadius: "50%",

                  background: dark
                    ? "rgba(40,140,220,.13)"
                    : "rgba(255,255,255,.50)",

                  filter: "blur(70px)",

                  pointerEvents: "none",
                }}
              />

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                style={{
                  position: "absolute",

                  right: "-25%",
                  bottom: "-15%",

                  width: "80vw",
                  height: "55vh",

                  borderRadius: "50%",

                  background: dark
                    ? "rgba(40,110,180,.10)"
                    : "rgba(130,205,245,.20)",

                  filter: "blur(80px)",

                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,

                  display: "flex",
                  flexDirection: "column",

                  alignItems: "center",
                  justifyContent: "center",

                  gap: 12,

                  padding:
                    "100px 24px 40px",
                }}
              >
                {links.map((link, index) => {
                  const isActive =
                    index === active;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{
                        opacity: 0,
                        y: 28,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 14,
                      }}
                      transition={{
                        delay:
                          0.05 +
                          index * 0.055,

                        duration: 0.36,

                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() =>
                          setMenuOpen(false)
                        }
                        style={{
                          position: "relative",

                          minWidth: 220,
                          height: 64,

                          display: "flex",

                          alignItems: "center",
                          justifyContent:
                            "center",

                          color: "inherit",

                          textDecoration:
                            "none",

                          fontSize: 30,
                          lineHeight: 1,

                          fontWeight:
                            isActive
                              ? 650
                              : 500,

                          letterSpacing:
                            "-.02em",

                          opacity:
                            isActive
                              ? 1
                              : 0.72,
                        }}
                      >
                        {link.name}

                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-line"
                            style={{
                              position:
                                "absolute",

                              bottom: 5,
                              left: "50%",

                              width: 46,
                              height: 3,

                              borderRadius: 99,

                              background:
                                dark
                                  ? "#68D5FF"
                                  : "#1689C9",

                              boxShadow:
                                dark
                                  ? `
                                      0 0 5px rgba(104,213,255,.9),
                                      0 0 12px rgba(60,185,255,.35)
                                    `
                                  : "0 0 5px rgba(22,137,201,.25)",

                              transform:
                                "translateX(-50%)",
                            }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  /* ======================================================
     DESKTOP
  ====================================================== */

  return (
    <motion.nav
      initial={false}
      animate={{
        y: navVisible ? 0 : -115,
        opacity: navVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 360,
        damping: 34,
        mass: 0.8,
      }}
      style={{
        ...glass,

        /*
          Gradually shrinks during the first 140px.
        */
        scale: desktopScale,

        position: "fixed",

        top: 24,
        left: "50%",

        /*
          Motion x instead of CSS transform so scale and
          translate don't fight each other.
        */
        x: "-50%",

        width: "88%",
        height: 80,

        borderRadius: 999,

        overflow: "hidden",

        color: dark
          ? "#F7FBFF"
          : "#102A43",

        display: "flex",

        alignItems: "center",
        justifyContent: "center",

        transformOrigin: "top center",

        zIndex: 50,
      }}
    >
      <GlassReflections dark={dark} />

      <div
        ref={navRef}
        style={{
          position: "relative",

          width: 680,
          maxWidth: "84%",
          height: 60,

          display: "grid",

          gridTemplateColumns:
            `repeat(${links.length}, 1fr)`,

          alignItems: "center",

          zIndex: 2,
        }}
      >
        {geometry.length === links.length &&
          visualActive >= 0 && (
            <ECGAnimation
              geometry={geometry}
              navSize={navSize}
              activeIndex={visualActive}
              animateECG={
                animating !== null
              }
              animationKey={
                animationKey
              }
              isDark={dark}
            />
          )}

        {links.map((link, index) => {
          const isActive =
            index === active;

          const isAnimating =
            index === animating;

          const isHovered =
            index === hovered;

          const showHover =
            isHovered &&
            !isActive &&
            !isAnimating &&
            animating === null;

          return (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() =>
                animating === null &&
                setHovered(index)
              }
              onMouseLeave={() =>
                setHovered(null)
              }
              onMouseDown={() =>
                setHovered(null)
              }
              onClick={() =>
                playECG(index)
              }
              style={{
                position: "relative",

                height: 60,

                display: "flex",

                alignItems: "center",
                justifyContent: "center",

                color: "inherit",

                textDecoration: "none",

                zIndex: 5,
              }}
            >
              <span
                ref={(el) => {
                  textRefs.current[index] =
                    el;
                }}
                style={{
                  position: "relative",

                  display:
                    "inline-block",

                  fontSize: 17,
                  lineHeight: 1,

                  fontWeight:
                    isActive
                      ? 600
                      : 500,

                  letterSpacing:
                    ".01em",

                  opacity:
                    isActive ||
                      isAnimating ||
                      isHovered
                      ? 1
                      : 0.72,

                  whiteSpace: "nowrap",

                  transition:
                    "opacity .2s ease",
                }}
              >
                {link.name}

                <motion.span
                  aria-hidden
                  initial={false}
                  animate={{
                    scaleX:
                      showHover
                        ? 1
                        : 0,

                    opacity:
                      showHover
                        ? 1
                        : 0,
                  }}
                  transition={{
                    scaleX: {
                      duration:
                        showHover
                          ? 0.22
                          : 0.04,

                      ease:
                        showHover
                          ? [
                            0.22,
                            1,
                            0.36,
                            1,
                          ]
                          : "easeOut",
                    },

                    opacity: {
                      duration:
                        showHover
                          ? 0.1
                          : 0.025,
                    },
                  }}
                  style={{
                    position: "absolute",

                    left: -LINE_PAD,
                    right: -LINE_PAD,
                    bottom: -LINE_OFFSET,

                    height: 3,

                    borderRadius: 99,

                    background:
                      dark
                        ? "#68D5FF"
                        : "#1689C9",

                    boxShadow:
                      dark
                        ? `
                            0 0 4px rgba(104,213,255,.95),
                            0 0 9px rgba(60,185,255,.35)
                          `
                        : "0 0 4px rgba(22,137,201,.35)",

                    transformOrigin:
                      "center",

                    pointerEvents:
                      "none",
                  }}
                />
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}

/* =========================================================
   HAMBURGER
========================================================= */

function Hamburger({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={
        open
          ? "Close menu"
          : "Open menu"
      }
      aria-expanded={open}
      onClick={onClick}
      style={{
        width: 48,
        height: 48,

        border: 0,
        padding: 0,

        background: "transparent",
        color: "inherit",

        cursor: "pointer",

        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 24,
          height: 18,
        }}
      >
        <motion.span
          animate={{
            y: open ? 8 : 0,
            rotate: open ? 45 : 0,
          }}
          transition={hamburgerTransition}
          style={hamburgerLine}
        />

        <motion.span
          animate={{
            opacity: open ? 0 : 1,
            scaleX: open ? 0 : 1,
          }}
          transition={{
            duration: 0.15,
          }}
          style={{
            ...hamburgerLine,
            top: 8,
          }}
        />

        <motion.span
          animate={{
            y: open ? -8 : 0,
            rotate: open ? -45 : 0,
          }}
          transition={hamburgerTransition}
          style={{
            ...hamburgerLine,
            top: 16,
          }}
        />
      </div>
    </button>
  );
}

/* =========================================================
   GLASS REFLECTIONS
========================================================= */

function GlassReflections({
  dark,
}: {
  dark: boolean;
}) {
  return (
    <>
      <div
        style={{
          position: "absolute",

          top: -58,
          left: "5%",

          width: "68%",
          height: 100,

          borderRadius: "50%",

          background:
            dark
              ? "rgba(210,240,255,.10)"
              : "rgba(255,255,255,.40)",

          filter: "blur(27px)",

          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",

          top: -32,
          right: "7%",

          width: "30%",
          height: 62,

          borderRadius: "50%",

          background:
            dark
              ? "rgba(125,205,255,.065)"
              : "rgba(205,238,255,.25)",

          filter: "blur(22px)",

          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",

          top: 1,
          left: "5%",
          right: "5%",

          height: 1,

          background: `linear-gradient(
            90deg,
            transparent,
            ${dark
              ? "rgba(225,245,255,.22)"
              : "rgba(255,255,255,.85)"
            },
            transparent
          )`,

          opacity: 0.75,

          pointerEvents: "none",
        }}
      />
    </>
  );
}

/* =========================================================
   STYLES
========================================================= */

const hamburgerLine: CSSProperties = {
  position: "absolute",

  top: 0,
  left: 0,

  width: 24,
  height: 2,

  borderRadius: 99,

  background: "currentColor",

  transformOrigin: "center",
};

const hamburgerTransition = {
  duration: 0.25,

  ease: [
    0.22,
    1,
    0.36,
    1,
  ] as [
      number,
      number,
      number,
      number,
    ],
};