'use client';
import dynamic from "next/dynamic";

const ArViewer = dynamic(() => import("@/components/commons/ar/ar-viewer"), {
  ssr: false,
});


export default function ArViewerPage() {
  return (
    <div className="w-full h-screen">
      <ArViewer />
    </div>
  );
}
