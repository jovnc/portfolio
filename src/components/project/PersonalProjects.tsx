import React from "react";
import { ProjectCarousel } from "./ProjectCarousel";
import { personalProjects } from "@/data/Projects";
import { Card } from "../ui/card";

export default function PersonalProjects() {
  return (
    <Card className="w-full flex flex-col items-center gap-8 p-20">
      <h2 className="font-bold text-3xl">Other Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <ProjectCarousel projects={personalProjects} />
      </div>
    </Card>
  );
}
