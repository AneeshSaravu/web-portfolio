import "./grain-filter.scss";

export default function GrainFilter({
  baseFrequency,
}: {
  baseFrequency: string;
}) {
  return (
    <svg>
      <filter id="grainy">
        <feTurbulence type="turbulence" baseFrequency={baseFrequency} />
      </filter>
    </svg>
  );
}
