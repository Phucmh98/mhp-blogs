// components/InteractiveIcon.tsx
import { Player } from "@lordicon/react";
import { useEffect, useRef, useState } from "react";

type InteractiveIconProps = {
  iconUrl: string;
  label: string;
  colors?: string;
  sizeIcon?: number;
  animationState?: string;
  animationHover?: string;
  classNameContainer?: string;
  classNameLabel?: string;
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
        setAnimation(animationHover);
        playerRef.current?.play();
      }}
      onMouseLeave={() => {
        setAnimation(animationState);
        playerRef.current?.play();
      }}
    >
      <Player
        ref={playerRef}
        icon={iconData}
        size={sizeIcon}
        state={animation}
        colors={colors}
        onComplete={() => playerRef.current?.pause()}
      />
      <div className={classNameLabel}>{label}</div>
    </div>
  );
};
