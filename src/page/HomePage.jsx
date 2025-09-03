import React from "react";
import HeroSection from "../components/HeroSection";
import ContactPage from "./ContactPage";
import Experience from "./Experience";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

function HomePage() {
  return (
    <div>
      <div className="z-10 rounded-lg p-4">
        <ScrollProgress className="top-[65px]" />
        <h2 className="pb-4 font-bold">
          Note: The scroll progress is shown below the navbar of the page.
        </h2>
      </div>
      <HeroSection />
     
      <Experience />

      <ContactPage />
    </div>
  );
}

export default HomePage;
