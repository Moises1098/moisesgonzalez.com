"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function LightandDarkmode({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check if the user has already chosen a theme
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    // If they have not, use their device preference
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme =
      savedTheme ?? (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme);

    document.documentElement.classList.toggle(
      "dark",
      initialTheme === "dark"
    );
  }, []);

  function toggleTheme() {
    const newTheme =
      theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    // Save the user's choice
    localStorage.setItem("theme", newTheme);

    // Add/remove the "dark" class from <html>
    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside LightandDarkmode"
    );
  }

  return context;
}