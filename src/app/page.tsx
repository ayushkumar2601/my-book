"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Hero, AchievementsSection, ProjectsSection, BentoGrid } from "@/src/components/sections";
import { Footer } from "@/src/components/layout";
import { SeparatorLine } from "@/src/components/ui/separator-line";
import { PageSkeleton } from "@/src/components/ui/loading-skeleton";
import { Separator } from "../components/ui/separator";
import DisplacementText from "../components/ui/displacement-text";
import Link from "next/link";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/src/lib/personal-info";
import { Toaster, toast } from "sonner";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const [isAtBottom, setIsAtBottom] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Check if we are very close to the bottom (e.g., 99% scrolled)
    setIsAtBottom(latest >= 0.99);
  });

  useEffect(() => setMounted(true), []);

  const handleBookCallClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    try {
      // Send notification email
      const response = await fetch('/api/notify-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      });

      if (response.ok) {
        toast.success('Request sent! Opening calendar...', {
          description: 'You will be redirected to book a call.',
        });
        
        // Redirect after a short delay
        setTimeout(() => {
          window.open(PERSONAL_INFO.cal, '_blank');
        }, 1000);
      } else {
        toast.error('Failed to send notification', {
          description: 'But you can still book a call!',
        });
        window.open(PERSONAL_INFO.cal, '_blank');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong', {
        description: 'But you can still book a call!',
      });
      window.open(PERSONAL_INFO.cal, '_blank');
    }
  };

  if (!mounted) return <PageSkeleton />;

  return (
    <div className="min-h-screen min-w-full bg-background relative font-display antialiased selection:bg-pink-600 overflow-x-hidden selection:text-foreground">
      <Toaster position="bottom-right" richColors />
      {/* Interactive Cat Component */}
      {/* <OnekoCat /> */}
      <div className="relative z-10 max-w-lg sm:max-w-3xl mx-auto">
        <div className="relative">
          {/* Vertical Separators for the main container */}
          <Separator
            orientation="vertical"
            className="absolute left-0 top-0 bottom-0 -translate-x-1/2 z-50"
          />
          <Separator
            orientation="vertical"
            className="absolute right-0 top-0 bottom-0 translate-x-1/2 z-50"
          />

          {/* Hero Section */}
          <Hero />

          {/* Bento Grid Section */}
          <div className="px-6 sm:px-8 ">
            <SeparatorLine />
            <BentoGrid />
          </div>

          {/* Projects Section */}
          <div className="px-6 sm:px-8 py-4 sm:py-8">
            <SeparatorLine />
            <ProjectsSection />
          </div>

          {/* Achievements Section */}
          <div className="px-6 sm:px-8 mb-12 ">
            <SeparatorLine />
            <AchievementsSection />
          </div>

 <SeparatorLine />

            {/* CTA Section */}
            <div className="pt-6 flex flex-col lg:flex-row items-center justify-center gap-6 ">
              <h2 className="text-foreground text-xl font-thin sm:text-2xl " style={{ fontFamily: '"Instrument Serif", serif' }}>
                Let&apos;s build something great together
              </h2>

              <div className="flex flex-wrap flex-col lg:flex-row items-center gap-3 sm:gap-4">
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn cursor-pointer"
                >
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    className="flex items-center gap-2 bg-background dark:bg-black text-foreground"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Me</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-1 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-200" />
                  </HoverBorderGradient>
                </a>

                <span className="text-muted-foreground text-lg" style={{ fontFamily: '"Instrument Serif", serif' }}>or</span>

                <button onClick={handleBookCallClick} className="group/btn">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    className="flex items-center gap-2 bg-background dark:bg-black text-foreground"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book a Call</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-1 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-200" />
                  </HoverBorderGradient>
                </button>
              </div>
            </div>
          {/* Footer Section */}
          <div
            className="px-6 sm:px-8 py-10 sm:py-8 relative"
          >
            <motion.div
              animate={{
                opacity: isAtBottom ? 1 : 0,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gradient-to-t from-indigo-500/30 via-purple-500/10 to-transparent blur-3xl -z-10 pointer-events-none"
            />
            <SeparatorLine />
            <Footer />
            <DisplacementText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
