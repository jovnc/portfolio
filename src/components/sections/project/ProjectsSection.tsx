"use client";
import React from "react";
import { hackathons } from "@/data/Projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const allProjects = [...hackathons];

  return (
    <div className="relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse"></div>

      {/* Projects View */}
      <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-50 text-center">
          Projects & Hackathons
        </h2>

        {/* Grid layout for 2 projects per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {allProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isFirst={index === 0}
              isLast={index === allProjects.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
