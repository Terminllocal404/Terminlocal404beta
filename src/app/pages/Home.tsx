import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Values } from "../components/Values";
import { Team } from "../components/Team";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <div className="min-h-screen bg-[#020408]">
      <Hero />
      <Services />
      <About />
      <Values />
      <Team />
      <Contact />
    </div>
  );
}
