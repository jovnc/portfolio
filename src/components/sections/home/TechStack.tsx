"use client";
import React, { useState } from "react";
import { frontendTechStack, backendTechStack } from "@/data/TechStack";
import { Card } from "@/components/ui/card";
import { Code2, Database } from "lucide-react";
import Image from "next/image";

interface TechItem {
  title: string;
  image: string;
}

// Tech logo mapping
const techLogos: Record<string, string> = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Query":
    "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg",
  NextJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TailwindCSS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  NodeJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Flask:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
};

interface TechCardProps {
  title: string;
  icon: React.ElementType;
  techStack: TechItem[];
  isSelected: boolean;
  onClick: () => void;
  glowColor: string;
}

function TechCard({
  title,
  icon: Icon,
  techStack,
  isSelected,
  onClick,
  glowColor,
}: TechCardProps) {
  return (
    <div className="relative">
      <Card
        className="relative cursor-pointer transition-all duration-300 overflow-hidden bg-gray-50/5 border-gray-200/10 hover:border-gray-200/20 hover:transform hover:scale-[1.005] hover:shadow-lg"
        onClick={onClick}
      >
        <div className="relative p-4">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon className="w-4 h-4 text-gray-400 transition-colors duration-300" />
            <h4 className="text-lg font-semibold text-gray-300 transition-colors duration-300">
              {title}
            </h4>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-3 gap-2">
            {techStack.map((tech, index) => (
              <div
                key={tech.title}
                className="group flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 hover:transform hover:scale-105 bg-gradient-to-br from-gray-200/5 to-gray-300/2 border border-gray-500/10 hover:border-gray-400/20"
              >
                {/* Tech Logo */}
                <div className="relative w-6 h-6 mb-1 flex items-center justify-center">
                  {techLogos[tech.title] ? (
                    <Image
                      src={techLogos[tech.title]}
                      alt={tech.title}
                      width={24}
                      height={24}
                      className="transition-all duration-300 brightness-90 group-hover:brightness-125 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-md flex items-center justify-center border transition-all duration-300 bg-gradient-to-br from-gray-200/10 to-gray-300/5 border-gray-500/10">
                      <span className="text-xs font-bold transition-colors duration-300 text-gray-400">
                        {tech.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Tech Name */}
                <span className="text-xs font-medium text-center leading-tight transition-colors duration-300 text-gray-400 group-hover:text-white">
                  {tech.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

function TechStack() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-gray-200 mb-2">Tech Stack</h4>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Technologies I use to build modern applications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <TechCard
          title="Frontend"
          icon={Code2}
          techStack={frontendTechStack}
          isSelected={false}
          onClick={() => {}}
          glowColor=""
        />

        <TechCard
          title="Backend"
          icon={Database}
          techStack={backendTechStack}
          isSelected={false}
          onClick={() => {}}
          glowColor=""
        />
      </div>
    </div>
  );
}

export default TechStack;
