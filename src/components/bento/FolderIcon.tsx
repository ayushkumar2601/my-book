import React from "react";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export const FolderIcon = () => {
    return (
        <Link
            href="/gallery"
            className="flex flex-col items-center justify-center group cursor-pointer relative w-full h-full p-4"
        >
            {/* Title on top left */}
            <div className="absolute top-3 left-4 opacity-100 transition-opacity duration-300 flex items-center gap-1">
                <span className="text-sm md:text-base font-medium text-foreground">Gallery</span>
            </div>

            {/* Arrow on top right */}
            <div className="absolute top-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4 text-foreground" />
            </div>

            {/* Scaled-up Folder Container */}
            <div className="relative mt-5 w-24 h-18 md:w-30 md:h-24 perspective-1000 scale-110 md:scale-130 transition-transform duration-300">
                {/* Folder Back */}
                <div
                    className="absolute bottom-0 w-full h-full bg-neutral-800 dark:bg-neutral-800 shadow-xl rounded-t-md transform transition-transform duration-300 origin-bottom"
                    style={{
                        clipPath: "path('M 0 6 Q 0 0 6 0 L 28 0 Q 38 0 44 10 L 85 10 Q 92 10 92 16 L 92 58 Q 92 64 85 64 L 6 64 Q 0 64 0 58 Z')",
                    }}
                ></div>

                {/* Documents popping out of the folder */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-24 transition-all duration-300 ease-out translate-y-1 opacity-90 group-hover:-translate-y-5 group-hover:opacity-100 will-change-transform z-0">
                    {/* Doc 3 (Left / Back) */}
                    <div className="absolute bottom-0 left-0 w-16 h-20 bg-neutral-800 dark:bg-neutral-800 rounded-md shadow-md border border-white/20 transform origin-bottom transition-all duration-300 ease-out will-change-transform group-hover:-translate-x-6 group-hover:-translate-y-4 group-hover:-rotate-16 flex flex-col p-1 justify-between overflow-hidden">
                        <div className="w-full h-12 overflow-hidden rounded">
                            <img src="/gallery/1.jpeg" alt="Gallery preview 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-0.5 px-0.5 pb-0.5">
                            <div className="w-3/4 h-1 bg-white/40 rounded"></div>
                            <div className="w-1/2 h-1 bg-white/20 rounded"></div>
                        </div>
                    </div>

                    {/* Doc 2 (Center / Middle) */}
                    <div className="absolute bottom-0 left-2 w-16 h-20 bg-neutral-800 dark:bg-neutral-800 rounded-md shadow-md border border-white/20 transform origin-bottom transition-all duration-300 ease-out will-change-transform group-hover:-translate-y-7 flex flex-col p-1 justify-between overflow-hidden">
                        <div className="w-full h-12 overflow-hidden rounded">
                            <img src="/gallery/2.jpeg" alt="Gallery preview 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-0.5 px-0.5 pb-0.5">
                            <div className="w-4/5 h-1 bg-white/40 rounded"></div>
                            <div className="w-3/5 h-1 bg-white/20 rounded"></div>
                        </div>
                    </div>

                    {/* Doc 1 (Right / Front) */}
                    <div className="absolute bottom-0 left-4 w-16 h-20 bg-neutral-800 dark:bg-neutral-800 rounded-md shadow-lg border border-white/20 transform origin-bottom transition-all duration-300 ease-out will-change-transform group-hover:translate-x-6 group-hover:-translate-y-4 group-hover:rotate-16 flex flex-col p-1 justify-between overflow-hidden">
                        <div className="w-full h-12 overflow-hidden rounded">
                            <img src="/gallery/3.jpeg" alt="Gallery preview 3" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-0.5 px-0.5 pb-0.5">
                            <div className="w-2/3 h-1 bg-white/40 rounded"></div>
                            <div className="w-1/2 h-1 bg-white/20 rounded"></div>
                        </div>
                    </div>
                </div>

                {/* Folder Front (Glass effect) */}
                <div
                    className="absolute bottom-0 w-full h-5/6 z-10 pointer-events-none"
                    style={{
                        filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.3)) drop-shadow(0 1px 0 rgba(255,255,255,0.15))"
                    }}
                >
                    <div
                        className="w-full h-full bg-neutral-300/90 dark:bg-neutral-900/90 bg-gradient-to-b from-black/10 dark:from-white/20 to-transparent backdrop-blur-md flex items-center justify-center overflow-hidden rounded-md md:rounded-lg border-t border-white/20"
                    >
                    </div>
                </div>
            </div>
        </Link>
    );
};
