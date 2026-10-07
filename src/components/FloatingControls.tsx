
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "./LightandDarkmode";
import { useLanguage } from "./LanguageProvider";

const options = [
  { id: "en", angle: 90 },
  { id: "es", angle: 120 },
  { id: "fr", angle: 150 },
  { id: "appearance", angle: 180 },
] as const;

const radius = 118;

const glass =
  "border border-sky-300/50 bg-sky-100/25 text-slate-900 " +
  "shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_8px_28px_rgba(0,0,0,0.12)] " +
  "backdrop-blur-2xl transition-all duration-300 " +
  "hover:border-cyan-400/90 hover:bg-cyan-200/40 " +
  "hover:shadow-[0_0_18px_rgba(34,211,238,0.4),inset_0_1px_3px_rgba(255,255,255,0.8)] " +
  "dark:border-sky-200/30 dark:bg-[#12314f]/40 dark:text-white " +
  "dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.18),0_8px_28px_rgba(0,0,0,0.35)] " +
  "dark:hover:border-cyan-300/90 dark:hover:bg-cyan-400/20 " +
  "dark:hover:shadow-[0_0_22px_rgba(34,211,238,0.45),inset_0_1px_3px_rgba(255,255,255,0.3)]";

const activeGlass =
  "border-cyan-400 bg-cyan-300/45 text-cyan-950 " +
  "ring-2 ring-cyan-400/80 " +
  "shadow-[0_0_25px_rgba(34,211,238,0.55)] " +
  "dark:border-cyan-300 dark:bg-cyan-400/30 dark:text-white " +
  "dark:ring-cyan-300/80 " +
  "dark:shadow-[0_0_28px_rgba(34,211,238,0.6)]";

export default function FloatingControls() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, translations } = useLanguage();

  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const labels = {
    en: translations.settings.english,
    es: translations.settings.spanish,
    fr: translations.settings.french,
    appearance: translations.settings.appearance,
  };

  function selectLanguage(value: "en" | "es") {
    setLanguage(value);
    setOpen(false);
  }

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[100] md:bottom-8 md:right-8"
    >
      <div className="relative h-14 w-14">
        <AnimatePresence>
          {open &&
            options.map((option, index) => {
              const radians = (option.angle * Math.PI) / 180;

              const x = Math.cos(radians) * radius;
              const y = -Math.sin(radians) * radius;

              const isAppearance = option.id === "appearance";
              const isFrench = option.id === "fr";

              const selected =
                !isAppearance &&
                !isFrench &&
                language === option.id;

              const labelRotation = 180 - option.angle;
              const label = labels[option.id];

              return (
                <motion.div
                  key={option.id}
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 0.2,
                    opacity: 0,
                  }}
                  animate={{
                    x,
                    y,
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{
                    x: 0,
                    y: 0,
                    scale: 0.2,
                    opacity: 0,
                    transition: {
                      delay:
                        (options.length - index - 1) * 0.035,
                      duration: 0.2,
                    },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 360,
                    damping: 23,
                    delay: index * 0.055,
                  }}
                  className="absolute left-1 top-1 h-12 w-12"
                >
                  <div className="relative flex h-full w-full items-center justify-center">
                    <div
                      className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden md:block"
                      style={{
                        transform: `rotate(${labelRotation}deg)`,
                      }}
                    >
                      <motion.div
                        initial={{
                          scaleX: 0,
                          opacity: 0,
                        }}
                        animate={{
                          scaleX: 1,
                          opacity: 1,
                        }}
                        exit={{
                          scaleX: 0,
                          opacity: 0,
                          transition: {
                            duration: 0.3,
                            delay: 0,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                        transition={{
                          scaleX: {
                            duration: 0.45,
                            delay: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.45,
                            delay: 0.35,
                          },
                        }}
                        style={{
                          transformOrigin: "right center",
                        }}
                        className="absolute right-0 top-1/2 flex h-9 w-max -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-l-full border border-r-0 border-sky-300/40 bg-sky-100/25 py-2 pl-4 pr-8 text-sm font-medium text-slate-900 shadow-lg backdrop-blur-2xl dark:border-sky-200/25 dark:bg-[#12314f]/40 dark:text-white"
                      >
                        {label}
                      </motion.div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (isAppearance) {
                          toggleTheme();
                        } else if (!isFrench) {
                          selectLanguage(option.id);
                        }
                      }}
                      aria-label={
                        isAppearance
                          ? label
                          : `${label}${
                              isFrench
                                ? " (coming soon)"
                                : ""
                            }`
                      }
                      aria-pressed={
                        selected || undefined
                      }
                      aria-disabled={isFrench}
                      title={
                        isFrench
                          ? "French translation coming soon"
                          : undefined
                      }
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full hover:scale-110 ${glass} ${
                        selected ? activeGlass : ""
                      } ${isFrench ? "opacity-60" : ""}`}
                    >
                      {isAppearance ? (
                        theme === "dark" ? (
                          <Sun size={20} strokeWidth={1.8} />
                        ) : (
                          <Moon size={20} strokeWidth={1.8} />
                        )
                      ) : (
                        <span className="text-xs font-bold uppercase">
                          {option.id}
                        </span>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={
            open
              ? `${translations.settings.title} — Close`
              : translations.settings.title
          }
          aria-expanded={open}
          whileTap={{ scale: 0.92 }}
          className={`relative z-20 flex h-14 w-14 items-center justify-center rounded-full ${glass} ${
            open ? activeGlass : ""
          }`}
        >
          <motion.span
            animate={{
              rotate: open ? 45 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 24,
            }}
          >
            <Settings size={25} strokeWidth={1.8} />
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
}
