import React from "react";
import { ProjectCarousel } from "./ProjectCarousel";
import { hackathons } from "@/data/Projects";
import FadeInSection from "../ui/FadeInSection";

export default function Hackathons() {
  return (
    <FadeInSection>
      <div className="w-full flex flex-col items-center gap-8 p-10 rounded-lg">
        <h2 className="font-bold text-2xl">Hackathons</h2>
        <div className="flex flex-col items-center gap-4 w-full">
          <ProjectCarousel projects={hackathons} />
        </div>
      </div>
    </FadeInSection>
  );
}
