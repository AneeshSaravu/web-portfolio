import { SVGIcon } from "../../atoms";
import "./brand.scss";

export default function Brand() {
  return (
    <div className="flex-row-between brand-container">
      <SVGIcon name="brand" size="large" fill="none" />
      <span>port</span>
      <span>folio.</span>
    </div>
  );
}
