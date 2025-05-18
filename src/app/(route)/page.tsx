"use client";
import About from "./components/about";
import Banner from "./components/banner";
import AnimatedContent from "@/components/animated-content";
import StackGallery from "./components/stack-gallery";
import { technologies } from "./components/technologies";
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
    <section className="container w-full h-full mx-auto max-w-5xl px-10">
      <Banner />
      <AnimatedContent>
        <About />
      </AnimatedContent>
      <AnimatedContent>
        <StackGallery autoplay={true} pauseOnHover={true} data={technologies}/>
      </AnimatedContent>
    </section>
  );
}
