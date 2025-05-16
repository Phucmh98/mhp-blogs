'use client'
import Banner from "./components/banner";
import About from "./about/page";
import AnimatedContent from "@/components/animated-content";
interface FallingTextProps {
  text?: string;
  highlightWords?: string[];
  trigger?: "auto" | "scroll" | "click" | "hover";
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
  fontSize?: string;
}
export default function Home() {
  return (
    <section className="container w-full h-full mx-auto">
      <Banner />
      <AnimatedContent >      
        <About />
      </AnimatedContent>
    </section>
  );
}
