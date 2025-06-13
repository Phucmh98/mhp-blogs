import React, { useMemo, useState } from "react";
import FallingText from "../common/banner/falling-text";
import AnimatedContent from "@/components/animated-content";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const InteractiveIcon = dynamic(
  () =>
    import("../../../../components/commons/interactive-icon/interactive-icon"),
  { ssr: false }
);

const HeroSection = () => {


  // dùng state để control clickable
  const [isClickable, setIsClickable] = useState(false);
  const [fallingTextKey, setFallingTextKey] = useState(0);
  const fallingTextMemo = useMemo(
    () => <FallingText key={fallingTextKey} />,
    [fallingTextKey]
  );
  return (
    <div
      id="hero"
      className="relative w-full h-screen max-w-5xl mx-auto"
      onClick={() => {
        if (isClickable) return;
        setIsClickable(true);
      }}
    >
      {fallingTextMemo}

      {isClickable && (
        <div className="absolute top-[30px] right-[50px] pt-20 z-[10]">
          <AnimatedContent reverse={true} delay={300}>
            <Button
              className="rounded-full bg-amber-500 border-none shadow-sm shadow-black/20"
              onClick={(e) => {
                e.stopPropagation(); // chặn click bubble lên div cha
                setIsClickable(false); // ẩn lại nút
                // tăng key để re-render FallingText
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

export default HeroSection;
