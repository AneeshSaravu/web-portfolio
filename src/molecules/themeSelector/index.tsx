import { useTheme } from "../../hooks";
import { ThemeSwitch } from "../../atoms";

import "./theme-switch.scss";

import type { IThemePreference } from "../../types";

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  function handleThemeChange(targetTheme: IThemePreference) {
    if (targetTheme === theme) return;
    setTheme(targetTheme);
  }

  // TODO: upgrade
  return (
    <div>
      <ThemeSwitch
        activeTheme={theme}
        value="light"
        themeChangeHandler={handleThemeChange}
      >
        light-theme
      </ThemeSwitch>
      <ThemeSwitch
        activeTheme={theme}
        value="dark"
        themeChangeHandler={handleThemeChange}
      >
        dark-theme
      </ThemeSwitch>
    </div>
  );
}
