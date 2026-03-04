"use client";

import DomeGallery from "@/src/components/sections/DomeGallery";


export default function Page() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DomeGallery
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale={false}
      />
    </div>
  );
}