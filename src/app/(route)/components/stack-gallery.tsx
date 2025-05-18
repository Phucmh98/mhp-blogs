import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";
import { Technology } from "./technologies";
import { SVGIcons } from "@/components/commons/icons/svg-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import Image from "next/image";

interface StackGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  data: Technology[];
}

const StackGallery = ({
  autoplay = false,
  pauseOnHover = false,
  data = [],
}: StackGalleryProps) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    handleResize(); // Gọi lần đầu khi component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3D geometry
  const cylinderWidth = isScreenSizeSm ? 700 : 1300;
  const faceCount = data.length;
  const faceWidth = (cylinderWidth / faceCount) * 1;
  const radius = cylinderWidth / (2 * Math.PI);

  // Framer Motion
  const dragFactor = 0.02;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  // Convert rotation -> 3D transform
  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: { rotateY: number }) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: unknown, info: any) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: unknown, info: any) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <>
      <div className="relative flex justify-center text-4xl font-semibold text-gray-500">
        <Image
          src="/image/gif/arrow-animate.gif"
          alt="tech-stack-1"
          className="absolute top-[-25px] left-[calc(50%+15px)]"
          width={100}
          height={100}
        />
        <Image
          src="/image/gif/arrow-animate.gif"
          alt="tech-stack-2"
          className="absolute top-[-25px] left-[calc(50%-95px)]"
          width={100}
          height={100}
        />
        <span className="z-0"> Tech Stack</span>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex h-[100px] items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
          <motion.div
            drag="x"
            dragElastic={0}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={controls}
            onUpdate={handleUpdate}
            style={{
              transform: transform,
              rotateY: rotation,
              width: cylinderWidth,
              transformStyle: "preserve-3d",
            }}
            className="flex items-center justify-center [transform-style:preserve-3d] cursor-pointer"
          >
            {data.map((tech, idx) => {
              const Icon = SVGIcons[tech.icon];
              return (
                <div
                  key={tech.icon + idx}
                  className="position absolute flex items-center justify-center top-1/2 left-1/2 [backface-visibility:hidden] "
                  style={{
                    width: faceWidth,
                    transform: `translate(-50%, -50%) rotateY(${
                      (360 / faceCount) * idx
                    }deg) translateZ(${radius}px)`,
                    transformOrigin: "center center",
                  }}
                >
                  <TooltipProvider key={tech.url}>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Link
                          href={tech.url}
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label={tech.name}
                          draggable={false}
                        >
                          <Icon className="size-8 hover:scale-125 transition-transform duration-300 " />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <TooltipArrow />
                        {tech.name}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StackGallery;
