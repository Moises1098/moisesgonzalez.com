
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
  useEffect,
  useState,
  type CSSProperties,
} from "react";

import { useTheme } from "./LightandDarkmode";
import { useLanguage } from "./LanguageProvider";

const MOBILE_BREAKPOINT = 768;
const COMPACT_DISTANCE = 140;
const HIDE_AFTER = 160;
const SCROLL_TOLERANCE = 2;

export default function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const { translations } = useLanguage();

  const dark = theme === "dark";

  const links = [
    { name: translations.navigation.home, href: "/" },
    { name: translations.navigation.about, href: "/about" },
    { name: translations.navigation.builds, href: "/builds" },
    { name: translations.navigation.research, href: "/research" },
    { name: translations.navigation.resume, href: "/resume" },
  ];

  const [mobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [hovered, setHovered] = useState<number | null>(null);

  const { scrollY } = useScroll();

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

  useMotionValueEvent(scrollY, "change", (current) => {
    if (menuOpen) {
      setNavVisible(true);
      return;
    }

    const previous = scrollY.getPrevious() ?? current;
    const difference = current - previous;

    if (current < HIDE_AFTER) {
      setNavVisible(true);
      return;
    }

    if (Math.abs(difference) < SCROLL_TOLERANCE) return;

    setNavVisible(difference < 0);
  });

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

    return () => {
      query.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobile || !menuOpen) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [mobile, menuOpen]);

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
      ? "0 18px 45px rgba(0,0,0,.22), 0 4px 14px rgba(0,0,0,.10), inset 0 1px 0 rgba(225,245,255,.18), inset 0 -1px 0 rgba(0,0,0,.10)"
      : "0 18px 45px rgba(55,85,115,.13), 0 4px 14px rgba(55,85,115,.07), inset 0 1px 0 rgba(255,255,255,.75), inset 0 -1px 0 rgba(90,130,160,.08)",
  };

  const underlineColor = dark ? "#68D5FF" : "#1689C9";

  const underlineShadow = dark
    ? "0 0 5px rgba(104,213,255,.9), 0 0 12px rgba(60,185,255,.35)"
    : "0 0 5px rgba(22,137,201,.35)";

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
            x: "-50%",
            width: "calc(100% - 32px)",
            maxWidth: 430,
            height: 64,
            borderRadius: 999,
            color: dark ? "#F7FBFF" : "#102A43",
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
              gridTemplateColumns: "56px 1fr 56px",
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
              onClick={() => {
                setMenuOpen((previous) => !previous);
              }}
            />
          </div>
        </motion.nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              style={{
                position: "fixed",
                inset: 0,
                width: "100%",
                height: "100dvh",
                background: dark
                  ? "linear-gradient(145deg, rgba(3,18,39,.86), rgba(7,35,65,.78))"
                  : "linear-gradient(145deg, rgba(242,249,255,.88), rgba(213,235,249,.78))",
                backdropFilter:
                  "blur(30px) saturate(160%)",
                WebkitBackdropFilter:
                  "blur(30px) saturate(160%)",
                color: dark ? "#F7FBFF" : "#102A43",
                overflow: "hidden",
                zIndex: 100,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
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
                  padding: "100px 24px 40px",
                }}
              >
                {links.map((link, index) => {
                  const isActive = index === active;

                  return (
                    <motion.div
                      key={link.href}
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
                        delay: 0.05 + index * 0.055,
                        duration: 0.36,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                          position: "relative",
                          minWidth: 220,
                          height: 64,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "inherit",
                          textDecoration: "none",
                          fontSize: 30,
                          lineHeight: 1,
                          fontWeight: isActive ? 650 : 500,
                          letterSpacing: "-.02em",
                          opacity: isActive ? 1 : 0.72,
                        }}
                      >
                        {link.name}

                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-line"
                            style={{
                              position: "absolute",
                              bottom: 5,
                              left: "50%",
                              width: 46,
                              height: 3,
                              borderRadius: 99,
                              background: underlineColor,
                              boxShadow: underlineShadow,
                              transform: "translateX(-50%)",
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
        scale: desktopScale,
        position: "fixed",
        top: 24,
        left: "50%",
        x: "-50%",
        width: "88%",
        height: 80,
        borderRadius: 999,
        overflow: "hidden",
        color: dark ? "#F7FBFF" : "#102A43",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transformOrigin: "top center",
        zIndex: 50,
      }}
    >
      <GlassReflections dark={dark} />

      <div
        style={{
          position: "relative",
          width: 680,
          maxWidth: "84%",
          height: 60,
          display: "grid",
          gridTemplateColumns: `repeat(${links.length}, 1fr)`,
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {links.map((link, index) => {
          const isActive = index === active;
          const isHovered = index === hovered;

          return (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
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
                style={{
                  position: "relative",
                  display: "inline-block",
                  fontSize: 17,
                  lineHeight: 1,
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: ".01em",
                  opacity:
                    isActive || isHovered ? 1 : 0.72,
                  whiteSpace: "nowrap",
                  transition: "opacity .2s ease",
                }}
              >
                {link.name}

                <motion.span
                  aria-hidden
                  initial={false}
                  animate={{
                    scaleX: isActive || isHovered ? 1 : 0,
                    opacity: isActive || isHovered ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    position: "absolute",
                    left: -6,
                    right: -6,
                    bottom: -10,
                    height: 3,
                    borderRadius: 99,
                    background: underlineColor,
                    boxShadow: underlineShadow,
                    transformOrigin: "center",
                    pointerEvents: "none",
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
      aria-label={open ? "Close menu" : "Open menu"}
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
          transition={{ duration: 0.15 }}
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
          background: dark
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
          background: dark
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
            ${
              dark
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
  ease: [0.22, 1, 0.36, 1] as [
    number,
    number,
    number,
    number,
  ],
};
