"use client";
import React, { useState } from "react";
import { Project } from "@/types/Project";
import { Github, Calendar, Award, Play } from "lucide-react";
import Image from "next/image";
import { TechTag } from "@/components/common";

interface ProjectCardProps {
  project: Project;
  index: number;
  isFirst: boolean;
  isLast: boolean;
}

const formatDate = (dateString: string) => {
  return dateString;
};

export default function ProjectCard({
  project,
  index,
  isFirst,
  isLast,
}: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Card */}
      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-white/30 transition-all duration-700 hover:shadow-xl hover:shadow-purple-500/10 group-hover:-translate-y-2 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-800/50">
          <div className="aspect-[16/10] w-full relative">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className={`object-cover transition-all duration-700 ${
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              } ${isHovered ? "scale-110" : "scale-100"}`}
              onLoad={() => setImageLoaded(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Overlay gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            ></div>

            {/* Action buttons overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/80 rounded-full hover:bg-black/90 transition-all duration-200 hover:scale-110 shadow-lg"
                >
                  <Github className="w-4 h-4 text-white" />
                </a>
              )}
              {project.youtube && (
                <a
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-red-600/80 rounded-full hover:bg-red-600/90 transition-all duration-200 hover:scale-110 shadow-lg"
                >
                  <Play className="w-4 h-4 text-white" />
                </a>
              )}
            </div>

            {/* Award badge for first project */}
            {isFirst && (
              <div className="absolute top-3 right-3">
                <div className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm rounded-full p-2 border border-purple-400/50 shadow-lg">
                  <Award className="w-4 h-4 text-purple-100" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-3 flex-1 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold mb-1 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent leading-tight">
                {project.title}
              </h3>
              <p className="text-sm font-semibold opacity-90 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                {project.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-1 text-xs opacity-70 bg-white/5 px-2 py-1 rounded-full">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(project.date)}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed opacity-80 line-clamp-3 flex-grow">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech, techIndex) => (
              <TechTag key={techIndex} tech={tech} index={techIndex} />
            ))}
          </div>

          {/* Action Links */}
          <div className="flex gap-3 pt-3 mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 flex-1 justify-center"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
            {project.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-400/20 hover:border-red-400/30 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 text-red-300 flex-1 justify-center"
              >
                <Play className="w-4 h-4" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
