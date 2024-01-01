import { Brand, ThemeSwitch } from "../../molecules";

import "./header.scss";

export default function Header() {
  return (
    <header className="flex-row-between">
      <Brand />
      <ThemeSwitch />
    </header>
  );
}
