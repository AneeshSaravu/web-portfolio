import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks";

import type { IThemeContext } from "../types";
import type React from "react";

// TODO: Does this implement multiple context instance for multiple invocations?
// Is this good practice?
export const ThemeContext = createContext<IThemeContext | null>(null);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [storedTheme, setStoredTheme] = useLocalStorage(
    "themePreference",
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, [storedTheme]);

  return (
    <ThemeContext.Provider
      value={{ theme: storedTheme, setTheme: setStoredTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
