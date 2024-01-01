export interface SVGIconProps {
  name: "brand";
  size: "small" | "medium" | "large" | "xlarge";
}

export type IThemePreference = "light" | "dark";
// type ILanguagePreference = 'en' | 'es' | 'fr';
// interface AccessibilityPreference {
//   increasedFontSize: boolean;
//   highContrastMode: boolean;
// }
// type ContactFormData = { name: string; email: string };
type IScrollPosition = number;

export interface IThemeSwitchProps {
  value: IThemePreference;
  activeTheme: IThemePreference;
  themeChangeHandler: (value: IThemePreference) => void;
  children?: React.ReactNode;
}

export interface ILocalStorageValues {
  themePreference: IThemePreference;
  // languagePreference: Language;
  // accessibilityOptionsPreference: AccessibilityOptions;
  // customizationPreference: Customization;
  // contactFormData: ContactFormData;
  scrollPosition: IScrollPosition;
}

export interface IThemeContext {
  theme: IThemePreference;
  setTheme: (theme: IThemePreference) => void;
}
