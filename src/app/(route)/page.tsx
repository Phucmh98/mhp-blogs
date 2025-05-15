import Image from "next/image";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
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
    </section>
  );
}
