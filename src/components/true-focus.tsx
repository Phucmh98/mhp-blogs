import { useEffect, useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface FocusFrameProps {
  children: ReactNode;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  interval?: number;
}

const FocusFrame: React.FC<FocusFrameProps> = ({
  children,
  borderColor = "rgb(34,197,94)",
  glowColor = "rgba(34,197,94,0.5)",
  animationDuration = 0.5,
  interval = 2000, // 2.5 giây đổi focus
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const focusableItems = containerRef.current.querySelectorAll(".focusable");
    if (focusableItems.length === 0) return;
    if (!focusableItems[activeIndex]) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = focusableItems[activeIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [activeIndex, children]);

  // Auto loop
  useEffect(() => {
    if (!containerRef.current) return;

    const focusableItems = containerRef.current.querySelectorAll(".focusable");
    if (focusableItems.length === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % focusableItems.length);
    }, interval);

    return () => clearInterval(timer);
  }, [children, interval]);

  return (
    <div ref={containerRef} className="relative">
      {children}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
        }}
        transition={{
          duration: animationDuration,
        }}
        style={
          {
            "--border-color": borderColor,
            "--glow-color": glowColor,
          } as React.CSSProperties
        }
      >
        {/* Góc trên trái */}
        <span
          className="absolute w-3 h-3 border-[2px] rounded-[2px] top-[-7px] left-[-7px] border-r-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        />
        {/* Đường top */}
        <span
          className="absolute w-full h-3  border-[1px]  top-[-4px] left-[-4px] border-r-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
          }}
        />
        {/* Góc trên phải */}
        <span
          className="absolute w-3 h-3 border-[2px] rounded-[2px] top-[-7px] right-[-7px] border-l-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        />
        {/* Đường phải */}
        <span
          className="absolute h-full w-2  border-[1px]  top-[-4px] right-[-4px] border-l-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
          }}
        />
        {/* Góc dưới trái */}
        <span
          className="absolute w-3 h-3 border-[2px] rounded-[2px] bottom-[-7px] left-[-7px] border-r-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        />
        {/* Đường trái*/}
        <span
          className="absolute w-3 h-full  border-[1px] bottom-[-4px] left-[-4px] border-r-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
          }}
        />
        {/* Góc dưới phải */}
        <span
          className="absolute w-3 h-3 border-[2px] rounded-[2px] bottom-[-7px] right-[-7px] border-l-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        />
        {/* đường dưới */}
        <span
          className="absolute w-full h-3 border-[1px] bottom-[-4px] right-[-4px] border-l-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default FocusFrame;
