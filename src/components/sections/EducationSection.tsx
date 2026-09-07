"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagicCard } from "@/src/components/ui/magic-card";
import { I_Education } from "@/src/types/type";
import { educationData } from "@/src/lib/constants";
import { SeparatorLine } from "@/src/components/ui/separator-line";

export const EducationSection = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <header className="text-center my-4 lg:my-6">
          <div
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground mb-3 tracking-tight"
            style={{ fontFamily: 'ClashDisplay, sans-serif' }}
          >
            Education
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My academic foundation and educational qualifications.
          </p>
        </header>

        <SeparatorLine />

        {/* Education Cards */}
        <div className="space-y-6 mt-8">
          {educationData.map((edu: I_Education, idx: number) => (
            <motion.div
              key={`${edu.institute_name}-${edu.course_title}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <EducationCard education={edu} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface EducationCardProps {
  education: I_Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div>
      <MagicCard className="bg-card/30 backdrop-blur-sm rounded-sm">
        <div className="p-4 lg:p-6 flex flex-col gap-6">
          <div className="flex items-start gap-4 sm:gap-6">
            {/* Institute Logo */}
            <Link
              href={education.institute_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform hover:scale-105"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border border-edge bg-card/80 dark:bg-black/50 shadow-sm flex items-center justify-center p-2">
                <Image
                  src={education.institute_logo}
                  alt={`${education.institute_name} logo`}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </Link>

            {/* Education Details */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg lg:text-xl font-normal text-foreground leading-tight mb-1">
                    {education.institute_name}
                  </h3>
                  <p className="text-base text-muted-foreground font-medium">
                    {education.course_title}
                  </p>
                </div>
                <span className="inline-flex items-center justify-center shrink-0 px-3.5 py-1 text-xs sm:text-sm text-foreground bg-muted rounded-full border border-edge w-fit font-medium whitespace-nowrap">
                  {education.ending_date}
                </span>
              </div>

              {/* Grade */}
              {education.grade && (
                <p className="text-sm sm:text-base text-muted-foreground font-medium mt-2">
                  {education.grade}
                </p>
              )}
            </div>
          </div>
        </div>
      </MagicCard>
    </div>
  );
};
