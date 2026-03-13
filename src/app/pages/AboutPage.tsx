import { About } from "../components/About";
import { Values } from "../components/Values";
import { Team } from "../components/Team";

export function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#020408]">
      <About />
      <Values />
      <Team />
    </div>
  );
}
