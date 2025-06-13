"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Khởi tạo Lenis với cấu hình tối ưu
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08, // Tăng nhẹ để cuộn mượt hơn
      orientation: "vertical",
      gestureOrientation: "vertical",
   
      touchMultiplier: 2, // Tăng tốc độ cuộn trên thiết bị cảm ứng
      wheelMultiplier: 1.2, // Tăng nhẹ tốc độ cuộn chuột
      autoResize: true, // Tự động điều chỉnh khi kích thước thay đổi
      syncTouch: true, // Đồng bộ với touch events
    });

    lenisRef.current = lenis;

    // Đảm bảo Lenis biết về chiều cao thực của trang
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    
    resizeObserver.observe(document.body);

    // Thiết lập animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // Xử lý khi có thay đổi về nội dung trang
    const mutationObserver = new MutationObserver(() => {
      lenis.resize();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup khi component unmount
    return () => {
      lenis.destroy();
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      cancelAnimationFrame(requestAnimationFrame(raf));
    };
  }, []);

  return <>{children}</>;
}