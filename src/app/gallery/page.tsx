"use client";

import React, { useState, useEffect } from "react";
import Title from "@/src/components/ui/title";
import { SeparatorLine } from "@/src/components/ui/separator-line";
import { Separator } from "@/src/components/ui/separator";

const GalleryPageSkeleton = () => (
  <div className="min-h-screen min-w-full bg-background flex items-center justify-center">
    <div className="space-y-4 w-full max-w-2xl">
      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-full bg-accent animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-6 w-1/2 bg-accent animate-pulse rounded" />
          <div className="h-4 w-1/3 bg-accent animate-pulse rounded" />
        </div>
      </div>
      <div className="h-10 w-full bg-accent animate-pulse rounded" />
      <div className="h-64 w-full bg-accent animate-pulse rounded" />
    </div>
  </div>
);

const GalleryPage = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted || loading) return <GalleryPageSkeleton />;

  return (
    <div className="min-h-screen min-w-full bg-background relative overflow-hidden font-display antialiased selection:bg-pink-600 selection:text-foreground">
      <div className="relative z-10 max-w-lg sm:max-w-3xl mx-auto">
        <div className="relative min-h-screen px-6 sm:px-8 py-12 pt-24 sm:pt-28 md:pt-32 ">
          <Separator orientation="vertical" className="absolute left-0 top-0 bottom-0 -translate-x-1/2 z-50" />
          <Separator orientation="vertical" className="absolute right-0 top-0 bottom-0 translate-x-1/2 z-50" />
          <SeparatorLine />
          
          {/* Section Header */}
          <Title title="Gallery" subtitle="Coming soon - A collection of my work and creative projects."/>
          
          <SeparatorLine />

          {/* Placeholder Content */}
          <div className="my-8 text-center">
            <div className="bg-card border border-edge rounded-xl p-12 sm:p-16">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl sm:text-2xl font-medium text-foreground mb-3">
                Gallery Coming Soon
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                This page is under construction. Check back soon for an amazing collection of visual content!
              </p>
            </div>
          </div>

          <Separator/>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
