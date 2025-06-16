"use client";
import "@google/model-viewer";
import React, { useEffect, useRef } from "react";

export default function ArViewer() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    const viewer = modelViewerRef.current;
    if (viewer) {
      // Đợi 500ms rồi tự vào AR
      const arTimer = setTimeout(() => {
        if (viewer.enterAR) {
          viewer.enterAR();
        }
      }, 500);

      //  6.667s thì pause animation
      const stopTimer = setTimeout(() => {
        viewer.pause();
      }, 9400);

      return () => {
        clearTimeout(arTimer);
        clearTimeout(stopTimer);
      };
    }
  }, []);

  return React.createElement("model-viewer", {
    ref: modelViewerRef,
    src: "/glb/kawaiimeka.glb",
    // src: "/glb/phantom__titanfall_fan_concept.glb",

    "ios-src": "",
    ar: true,    
    "ar-modes": "webxr scene-viewer quick-look",
    "camera-controls": true,
    "auto-rotate": false,
    poster:
      "https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717",
    style: { width: "100%", height: "100vh" },
  });
}
