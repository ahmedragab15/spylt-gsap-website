import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
}
