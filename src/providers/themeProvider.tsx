import { useEffect, useState, type ReactNode } from "react";
import type { Theme } from "@/types";
import { useLocalStorage } from "@/hooks";
import { ThemeContext } from "../contexts/ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  // step 1: use local storage hook api
  const { getItem, setItem } = useLocalStorage();

  const [theme, setTheme] = useState<Theme>(() => {
    // read theme from local storage
    const savedTheme = getItem<Theme>("theme");

    // validate theme values
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

    // check client system theme
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    // toggle dark class on html element
    document.documentElement.classList.toggle("dark", theme === "dark");

    // set theme on local storage
    setItem("theme", theme);
  }, [theme, setItem]);

  // toggle theme
  const toggleTheme = () =>
    setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
