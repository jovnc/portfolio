"use client";
import React from "react";
import { hackathons } from "@/data/Projects";
import ProjectCard from "./ProjectCard";
import { StatsCard } from "../experience";
import { Award, PercentCircle } from "lucide-react";

export default function ProjectsSection() {
  const allProjects = [...hackathons];

  return (
    <section className="relative" id="projects">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse"></div>

      {/* Projects View */}
      <div className="flex flex-col gap-4 w-full max-w-6xl mx-auto px-4 py-16">
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold text-gray-50 text-center">
            Projects & Hackathons
          </h2>
          <p className="text-gray-100 max-w-3xl mx-auto mb-4 italic text-sm">
            My journey through the tech industry, building impactful solutions
            and growing as a developer
          </p>
          {/* Stats */}
          <div className="flex flex-row gap-6 max-w-2xl mx-auto mb-12">
            <StatsCard icon={Award} value={5} label="Hackathons Won" />
            <StatsCard icon={PercentCircle} value={"83%"} label="Win Rate" />
          </div>
        </div>

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
    </section>
  );
}
