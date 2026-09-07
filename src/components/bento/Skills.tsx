"use client";
import React from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiPython,
  SiFastapi,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiOpenai,
  SiOllama,
  SiNodedotjs,
  SiGithubactions,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbBrain, TbRobot, TbApi, TbCpu, TbDatabase } from "react-icons/tb";

import { TechBadge } from "@/src/components/ui/tech-badge";

const skills = [
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-foreground" },
  { icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiOpenai, name: "OpenAI", color: "#10A37F" },
  { icon: SiOllama, name: "Ollama", color: "text-foreground" },
  { icon: TbBrain, name: "RAG Systems", color: "#8B5CF6" },
  { icon: TbRobot, name: "AI Agents", color: "#EC4899" },
  { icon: TbCpu, name: "MCP Protocol", color: "#3B82F6" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { icon: FaJava, name: "Java", color: "#ED8B00" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiPostgresql, name: "pgvector", color: "#336791" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: TbDatabase, name: "Qdrant", color: "#DC2626" },
  { icon: SiGithubactions, name: "CI/CD", color: "#2088FF" },
  { icon: TbApi, name: "REST APIs", color: "#10B981" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
];

export const SkillsCarousel = () => {
  return (
    <div className="w-full h-full p-3 md:p-4 flex flex-col group">
      <div className="text-sm md:text-base font-medium flex justify-between items-center px-1 mb-2.5">
        <span>Skills & Tech Stack</span>
        <span className="text-xs text-muted-foreground font-normal hidden sm:inline">Backend • GenAI • Systems</span>
      </div>
      <div className="flex flex-wrap gap-1.5 md:gap-2 px-1 justify-start items-center flex-1 content-center">
        {skills.map((skill, idx) => (
          <TechBadge
            key={`skill-${idx}`}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
};
