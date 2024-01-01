import { GradientBlurFilter, GrainFilter } from "../../atoms";
import "./landing.scss";

// TODO: Move Background component to molecules
function LandingBackground({ children }: { children: React.ReactNode }) {
  return (
    <section className="landing">
      <GrainFilter baseFrequency="0.75" />
      <GradientBlurFilter stdDeviation="10" />
      {children}
    </section>
  );
}

export default function Landing() {
  return (
    <LandingBackground>
      <h1>Aneesh</h1>
      <h2>Saravu Karekad</h2>
    </LandingBackground>
  );
}
