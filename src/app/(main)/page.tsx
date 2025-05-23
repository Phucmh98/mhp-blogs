"use client";
import About from "./components/layout/about";
import Banner from "./components/layout/banner";
import AnimatedContent from "@/components/animated-content";
import StackGallery from "./components/layout/stack-gallery";
import { technologies } from "./lib/technologies";
import SelectProject from "./components/layout/project";
import { Button } from "@/components/ui/button";
import { InteractiveIcon } from "../../components/commons/interactive-icon/interactive-icon";
import Footer from "./components/layout/footer";
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
    <section className="container w-full h-full mx-auto max-w-5xl px-3 sm:px-10 ">
        <Banner />
      <AnimatedContent>
        <About />
      </AnimatedContent>
      <AnimatedContent>
        <StackGallery autoplay={true} pauseOnHover={true} data={technologies} />
        <div className="flex items-center justify-center my-5">
          <InteractiveIcon
            iconUrl="https://cdn.lordicon.com/fiytezjs.json"
            label="Know me better"
            sizeIcon={32}
            colors="primary:#ffffff,secondary:#ffffff"
            animationState="in-reveal"
            animationHover="hover-launch"
            classNameContainer="pl-3.5 pr-1.5 py-1.5 text-white flex items-center shadow-md cursor-pointer flex-row-reverse bg-amber-500 rounded-full hover:bg-amber-600 transition-all duration-300 "
            classNameLabel="p-0"
          />
        </div>
      </AnimatedContent>
      <AnimatedContent>
        <SelectProject />
      </AnimatedContent>
    </section>
  );
}
