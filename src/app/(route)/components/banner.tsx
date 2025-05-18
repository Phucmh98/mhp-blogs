"use client";
import AnimatedContent from "@/components/animated-content";
import FallingText from "./falling-text";
import ThreeScene from "@/components/commons/view/threejs/threejs-scene";
import { useState } from "react";

const Banner = () => {
  const [actionIndex, setActionIndex] = useState(1);
  return (
    <div className="relative pt-20 w-full h-[600px]  flex flex-col items-center justify-center">
      <FallingText />
      <div className="absolute top-0 right-0 w-[500px] h-full pt-20 ">
        <ThreeScene indexAction={actionIndex} />
      </div>
      {/* <button className="absolute bottom-0 left-0 z-50" onClick={() => setActionIndex(3)}>
        Đổi animation
      </button> */}
    </div>
  );
};
export default Banner;
