"use client";
import AnimatedContent from "@/components/animated-content";
import FallingText from "../common/banner/falling-text";
import ThreeScene from "@/components/commons/view/threejs/threejs-scene";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InteractiveIcon } from "../../../../components/commons/interactive-icon/interactive-icon";

const Banner = () => {
  const [actionIndexs, setActionIndexs] = useState<number[]>([0, 1]);
  const [durations, setDurations] = useState<number[]>([3000, 6000]);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [fallingTextKey, setFallingTextKey] = useState(0);
  return (
    <div
      className="relative pt-20 w-full h-[600px]  flex flex-col items-center justify-center"
      onClick={() => {
        // console.log("click");
        if (isClick) return;
        setActionIndexs([2]);
        setDurations([1300]);
        setIsAnimationPaused(true);
        setIsClick(true);
      }}
    >
      <FallingText key={fallingTextKey} />

      <div className="absolute top-0 right-0 w-[500px] h-full pt-20 ">
        <ThreeScene
          indexActions={actionIndexs}
          autoStop={isAnimationPaused}
          durations={durations}
        />
      </div>

      {isClick && (
        <div className="absolute top-[30px] right-[50px] pt-20 z-[10]">
          <AnimatedContent reverse={true} delay={300}>
            <Button
              className="rounded-full bg-amber-500 border-none shadow-sm shadow-black/20"
              onClick={() => {
                setActionIndexs([0, 1]);
                setDurations([3000, 6000]);
                setIsAnimationPaused(false); // Đặt lại thành false để animation chạy lại
                setIsClick(false); // Đặt lại thành false để ẩn nút

                setFallingTextKey((k) => k + 1);
              }}
            >
              <InteractiveIcon
                iconUrl="https://cdn.lordicon.com/jxhgzthg.json"
                colors="primary:#ffffff,secondary:#ffffff"
                animationHover="in-reveal"
                animationState="loop-cycle"
                label="Click me to refesh"
                isLoop={true}
                classNameContainer="flex items-center justify-center py-2"
                sizeIcon={28}
              />
            </Button>
          </AnimatedContent>
        </div>
      )}
    </div>
  );
};
export default Banner;
