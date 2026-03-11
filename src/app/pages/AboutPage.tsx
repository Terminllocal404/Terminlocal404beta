import { About } from "../components/About";
import { Values } from "../components/Values";
import { Team } from "../components/Team";

export function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#05070D]">
      <About />
      <Values />
      <Team />
    </div>
  );
}
