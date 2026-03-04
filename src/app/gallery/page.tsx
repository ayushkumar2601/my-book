// "use client";

// import { useState, useEffect } from "react";
// import Title from "@/src/components/ui/title";
// import { SeparatorLine } from "@/src/components/ui/separator-line";
// import { Separator } from "@/src/components/ui/separator";
// import SimpleGallery from "@/src/components/ui/SimpleGallery";

// const GalleryPageSkeleton = () => (
//   <div className="min-h-screen min-w-full bg-background flex items-center justify-center">
//     <div className="space-y-4 w-full max-w-2xl px-6">
//       <div className="h-6 w-1/3 bg-accent animate-pulse rounded" />
//       <div className="h-4 w-1/2 bg-accent animate-pulse rounded" />
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
//         {[...Array(8)].map((_, i) => (
//           <div key={i} className="aspect-square bg-accent animate-pulse rounded-lg" />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const galleryImages = [
//   { src: "/gallery/1.jpg", alt: "Gallery image 1" },
//   { src: "/gallery/2.jpeg", alt: "Gallery image 2" },
//   { src: "/gallery/3.jpeg", alt: "Gallery image 3" },
//   { src: "/gallery/4.jpeg", alt: "Gallery image 4" },
//   { src: "/gallery/5.jpeg", alt: "Gallery image 5" },
//   { src: "/gallery/6.jpeg", alt: "Gallery image 6" },
//   { src: "/gallery/7.jpeg", alt: "Gallery image 7" },
//   { src: "/gallery/8.jpeg", alt: "Gallery image 8" },
//   { src: "/gallery/9.jpeg", alt: "Gallery image 9" },
//   { src: "/gallery/10.jpeg", alt: "Gallery image 10" },
//   { src: "/gallery/11.jpeg", alt: "Gallery image 11" },
//   { src: "/gallery/12.jpeg", alt: "Gallery image 12" },
//   { src: "/gallery/13.jpeg", alt: "Gallery image 13" },
//   { src: "/gallery/14.jpeg", alt: "Gallery image 14" },
//   { src: "/gallery/15.jpeg", alt: "Gallery image 15" },
//   { src: "/gallery/16.jpeg", alt: "Gallery image 16" },
//   { src: "/gallery/17.jpeg", alt: "Gallery image 17" },
//   { src: "/gallery/18.jpeg", alt: "Gallery image 18" },
//   { src: "/gallery/19.jpeg", alt: "Gallery image 19" },
//   { src: "/gallery/20.jpeg", alt: "Gallery image 20" },
//   { src: "/gallery/21.jpeg", alt: "Gallery image 21" },
//   { src: "/gallery/22.jpeg", alt: "Gallery image 22" },
// ];

// const GalleryPage = () => {
//   const [mounted, setMounted] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setMounted(true);
//     setLoading(true);
//     const timeout = setTimeout(() => setLoading(false), 400);
//     return () => clearTimeout(timeout);
//   }, []);

//   if (!mounted || loading) return <GalleryPageSkeleton />;

//   return (
//     <div className="min-h-screen min-w-full bg-background relative overflow-hidden font-display antialiased selection:bg-pink-600 selection:text-foreground">
//       <div className="relative z-10 max-w-lg sm:max-w-3xl mx-auto">
//         <div className="relative min-h-screen px-6 sm:px-8 py-12 pt-24 sm:pt-28 md:pt-32">
//           <Separator orientation="vertical" className="absolute left-0 top-0 bottom-0 -translate-x-1/2 z-50" />
//           <Separator orientation="vertical" className="absolute right-0 top-0 bottom-0 translate-x-1/2 z-50" />
//           <SeparatorLine />
          
//           <Title title="Gallery" subtitle="A collection of my work and creative projects."/>
          
//           <SeparatorLine />

//           <div className="my-8">
//             <SimpleGallery images={galleryImages} />
//           </div>

//           <Separator/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;

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