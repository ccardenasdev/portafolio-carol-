"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import * as es from "./content";
import * as en from "./content.en";

export type Lang = "es" | "en";

const dictionaries = { es, en };

type Dictionary = typeof es;

interface LanguageContextValue {
  lang: Lang;
  t: Dictionary;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    // Only knowable client-side (set by the blocking init script in
    // layout.tsx before hydration), so it must sync after mount — see the
    // same pattern/reasoning as the theme toggle in BentoNav.
    const current = document.documentElement.getAttribute("lang");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLang(current === "en" ? "en" : "es");
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "es" ? "en" : "es";
      document.documentElement.setAttribute("lang", next);
      try {
        localStorage.setItem("lang", next);
      } catch {
        // localStorage may be unavailable (e.g. private mode); just won't persist
      }
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
