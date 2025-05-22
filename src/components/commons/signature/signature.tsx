import { useEffect, useRef, useState } from "react";

interface SignatureProps {
  width?: number;
  height?: number;
  color?: string;
  timeStep?: number;
  svgSrc: string; // đường dẫn file SVG
}

const Signature = ({
  width = 200,
  height = 50,
  color = "#ff6900",
  timeStep = 0.3,
  svgSrc,
}: SignatureProps) => {
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

    // Reset nét vẽ
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.stroke = color;
      path.style.transition = "none";
      path.style.strokeDasharray = `${length}px`;
      path.style.strokeDashoffset = `${length}px`; // Ẩn hết
    });

    // Force reflow để trình duyệt nhận style reset
    paths.forEach((path) => path.getBoundingClientRect());

    // Sau đó set lại transition và cho offset về 0
    paths.forEach((path, index) => {
      path.style.transition = `stroke-dashoffset ${timeStep}s linear ${
        index * timeStep
      }s`;
      path.style.strokeDashoffset = "0"; // Bắt đầu vẽ
    });
  }, [animationKey, color, timeStep, svgElement]);

  const handleClick = () => {
    setAnimationKey((k) => k + 1);
  };

  return (
    <div
    className="w-fit"
      ref={containerRef}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Signature;
