// components/InteractiveIcon.tsx
import { Player } from "@lordicon/react";
import React, { useEffect, useRef, useState } from "react";

type InteractiveIconProps = {
  iconUrl: string;
  label: React.ReactNode;
  colors?: string;
  sizeIcon?: number;
  animationState?: string;
  animationHover?: string;
  classNameContainer?: string;
  classNameLabel?: string;
  isLoop?: boolean;
  onClick?: () => void;
};

export const InteractiveIcon = ({
  iconUrl,
  label,
  sizeIcon = 32,
  colors = "primary:#da6300,secondary:#da6300",
  animationState = "in-reveal",
  animationHover = "hover-roll",
  classNameContainer = "focusable ml-3.5 mt-1.5 font-medium flex w-fit items-center cursor-pointer",
  classNameLabel = "ml-2",
  isLoop = false,
  onClick = () => {},
}: InteractiveIconProps) => {
  const [iconData, setIconData] = useState<any>(null);
  const [animation, setAnimation] = useState(animationState);
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    fetch(iconUrl)
      .then((res) => res.json())
      .then((data) => setIconData(data));
  }, [iconUrl]);

  useEffect(() => {
    if (iconData) {
      playerRef.current?.playFromBeginning();
    }
  }, [iconData]);

  return (
    <div
      className={classNameContainer}
      onMouseEnter={() => {
        if (playerRef.current && iconData) {
          setAnimation(animationHover);
          playerRef.current.play();
        }
      }}
      onMouseLeave={() => {
        if (playerRef.current && iconData) {
          setAnimation(animationState);
          playerRef.current.play();
        }
      }}
      onClick={onClick}
    >
      <Player
        ref={playerRef}
        icon={iconData}
        size={sizeIcon}
        state={animation}
        colors={colors}
        onComplete={() => {
          if (isLoop) {
            playerRef.current?.playFromBeginning();
          } else {
            playerRef.current?.pause();
          }
        }}
      />
      <div className={classNameLabel}>{label}</div>
    </div>
  );
};
