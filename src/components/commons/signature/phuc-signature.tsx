import { useEffect, useRef, useState } from "react";

interface PhucSignatureProps {
  width?: number;
  height?: number;
  color?: string;
  timeStep?: number;
  svgSrc: string; // đường dẫn file SVG
}

const PhucSignature = ({
  width = 200,
  height = 50,
  color = "#ff6900",
  timeStep = 0.3,
  svgSrc,
}: PhucSignatureProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [svgElement, setSvgElement] = useState<SVGSVGElement | null>(null);

  // Load file SVG khi svgSrc thay đổi
  useEffect(() => {
    if (!svgSrc) return;

    fetch(svgSrc)
      .then((res) => res.text())
      .then((svgText) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, "image/svg+xml");
        const svg = doc.querySelector("svg");
        if (svg) {
          setSvgElement(svg);
        } else {
          console.error("Không tìm thấy thẻ <svg> trong file");
        }
      })
      .catch((e) => console.error("Lỗi tải file SVG:", e));
  }, [svgSrc]);

  // Render svgElement vào container
  useEffect(() => {
    if (!svgElement || !containerRef.current) return;

    containerRef.current.innerHTML = "";

    const svgClone = svgElement.cloneNode(true) as SVGSVGElement;
    svgClone.style.width = `${width}px`;
    svgClone.style.height = `${height}px`;

    containerRef.current.appendChild(svgClone);
  }, [svgElement, width, height]);

  // Animation vẽ lại
  useEffect(() => {
    if (!containerRef.current) return;

    const svg = containerRef.current.querySelector("svg");
    if (!svg) return;

    const paths = svg.querySelectorAll<SVGPathElement>("path");
    paths.forEach((path, index) => {
      const length = path.getTotalLength();
      path.style.stroke = color;
      path.style.strokeDasharray = `${length}px`;
      path.style.strokeDashoffset = `${length}px`; // ẩn hết
      path.style.transition = `stroke-dashoffset ${timeStep}s linear ${
        index * timeStep
      }s`;
      path.style.webkitTransition = path.style.transition;
    });

    // Force reflow để trình duyệt nhận style trên
    paths.forEach((path) => path.getBoundingClientRect());

    // Sau delay, bắt đầu animation vẽ nét (offset giảm từ length về 0)
    setTimeout(() => {
      paths.forEach((path) => {
        path.style.strokeDashoffset = "0"; // hiện đầy đủ
      });
    }, 50);
  }, [animationKey, color, timeStep, svgElement]);

  const handleClick = () => {
    setAnimationKey((k) => k + 1);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default PhucSignature;
