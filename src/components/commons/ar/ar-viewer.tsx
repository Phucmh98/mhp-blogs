"use client";
import '@google/model-viewer';
import React from 'react';

export default function ArViewer() {
  return React.createElement("model-viewer", {
    src: "/glb/kawaiimeka.glb",
    "ios-src": "",
    poster:
      "https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717",
    ar: true,
    "ar-modes": "webxr scene-viewer quick-look",
    "camera-controls": true,
    style: { width: "100%", height: "100vh" ,background:'transparent'},
  });
}
