import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  HTMLAttributes,
} from "react";

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const magnetRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const magnetInnerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (disabled) return;

    const updatePosition = () => {
      if (!magnetInnerRef.current) return;
      const { x, y } = positionRef.current;
      magnetInnerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } =
        magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        positionRef.current = { x: offsetX, y: offsetY };
      } else {
        positionRef.current = { x: 0, y: 0 };
      }

      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(() => {
          updatePosition();
          animationFrameRef.current = null;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [padding, disabled, magnetStrength]);

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        ref={magnetInnerRef}
        className={innerClassName}
        style={{
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
