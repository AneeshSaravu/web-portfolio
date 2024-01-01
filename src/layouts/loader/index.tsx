import "./loader.scss";

export default function Loader({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={["loader-container", !isOpen && "hidden"]
        .filter(Boolean)
        .join(" ")}
    >
      <svg viewBox="0 0 400 160">
        <text
          x="50%"
          y="50%"
          dy=".32em"
          textAnchor="middle"
          className="text-body"
        >
          portfolio
        </text>
        <text
          x="50%"
          y="50%"
          dy=".32em"
          dx="2.2em"
          textAnchor="middle"
          className="text-body"
        >
          .
        </text>
      </svg>
    </div>
  );
}
