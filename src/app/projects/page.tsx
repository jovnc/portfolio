import Hackathons from "@/components/project/Hackathons";
import PersonalProjects from "@/components/project/PersonalProjects";
import ProjectCard from "@/components/project/ProjectCard";
import { Separator } from "@/components/ui/separator";
import { Kanban } from "lucide-react";
import React from "react";

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-8 h-full w-full">
      <h1 className="text-3xl font-extrabold mt-20">
        <Kanban className="inline mr-4" />
        My Projects
      </h1>
      <Separator />
      <div>
        <p className="text-md text-center">
          Welcome to the project page! Here, you'll find detailed descriptions
          and insights into the various projects I've worked on. Each project
          highlights my technical skills, problem-solving abilities, and
          creative approach to development. Explore the projects to see the
          innovative solutions I've crafted and the impact they've had.
        </p>
      </div>
      <Separator />
      <Hackathons />
      <Separator />
      {/* <PersonalProjects /> */}
    </div>
  );
}
