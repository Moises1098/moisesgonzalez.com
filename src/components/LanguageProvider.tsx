
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import en from "@/messages/en.json";
import es from "@/messages/es.json";

type Language = "en" | "es";

type Translations = typeof en;

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Translations;
};

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setCurrentLanguage] =
    useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language");

    if (saved === "en" || saved === "es") {
      setCurrentLanguage(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  function setLanguage(value: Language) {
    setCurrentLanguage(value);
    localStorage.setItem("language", value);
    document.documentElement.lang = value;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations:
          language === "es" ? es : en,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}
