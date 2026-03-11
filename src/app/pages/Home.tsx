import { Hero } from "../components/Hero";
import { Services } from "../components/Services";

export function Home() {
  return (
    <div className="min-h-screen bg-[#05070D]">
      <Hero />
      <Services />
    </div>
  );
}
