import React from "react";
import TechStackCard from "./TechStackCard";
import { frontendTechStack } from "@/data/TechStack";
import { Card } from "../ui/card";

export default function FrontendStack() {
  return (
    <Card className="flex flex-row items-center w-full p-8">
      <p className="font-bold text-md mr-10">Frontend</p>
      <div className="flex flex-row gap-8 items-center my-10 flex-wrap justify-center w-full">
        {frontendTechStack.map((tech) => (
          <TechStackCard
            key={tech.title}
            image={tech.image}
            title={tech.title}
          />
        ))}
      </div>
    </Card>
  );
}
