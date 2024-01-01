import type { IThemeSwitchProps } from "../../types";

export default function ThemeSwitch({
  value,
  activeTheme,
  themeChangeHandler,
  children,
}: IThemeSwitchProps) {
  return (
    <label>
      <input
        type="radio"
        name="theme"
        value={value}
        checked={activeTheme === value}
        onChange={() => {
          themeChangeHandler(value);
        }}
        disabled={activeTheme === value}
      />
      {children}
    </label>
  );
}
