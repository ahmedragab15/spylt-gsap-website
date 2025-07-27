"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import MessageSection from "@/sections/MessageSection";
import NutritionSection from "@/sections/NutritionSection";
import FlavorSection from "@/sections/FlavorSection";
import BenefitSection from "@/sections/BenefitSection";
import TestimonialSection from "@/sections/TestimonialSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>
        </div>
      </div>
    </main>
  );
}
