import { useContext } from "react";
import { ThemeContext } from "../providers/themeProvider";

import type { IThemeContext } from "../types";

export default function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  if (context == null) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }

  return context;
}
