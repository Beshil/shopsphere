import { useEffect, useMemo, useState, type ReactNode } from "react";

import { ThemeContext } from "./ThemeContext";
import { THEME, type Theme } from "@/shared/constans/theme";

type ThemeProviderProps = {
  children: ReactNode;
};

const STORAGE_KEY = "shopsphere-theme";

const getSystemTheme = (): Theme => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? THEME.DARK : THEME.LIGHT;
};

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;

  if (savedTheme === THEME.DARK || savedTheme === THEME.LIGHT) {
    return savedTheme;
  }

  return getSystemTheme();
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK));
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
