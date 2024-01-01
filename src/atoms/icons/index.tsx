import BrandGroup from "./brand.icon";
import "./svg-icon.scss";

import type { SVGIconProps } from "../../types";

const iconElements = {
  brand: {
    viewBox: "0 0 48 48",
    Component: BrandGroup,
  },
} as const;

export default function SVGIcon({
  name,
  size,
  className,
  ...rest
}: SVGIconProps & React.SVGProps<SVGSVGElement>) {
  const { viewBox, Component } = iconElements[name];

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (viewBox === undefined || Component === undefined) {
    // TODO: is this log acceptable?
    console.warn(`SVGIcon: ${name} is not a valid icon name`);
    return <></>;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={["svg-icon", size, className].filter(Boolean).join(" ")}
      viewBox={viewBox}
      {...rest}
    >
      <Component />
    </svg>
  );
}
