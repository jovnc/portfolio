import React from "react";
import TechStackCard from "./TechStackCard";
import { backendTechStack } from "@/data/TechStack";
import { Card } from "../ui/card";

export default function BackendStack() {
  return (
    <Card className="flex flex-row items-center w-full p-4">
      <p className="font-bold text-md mr-10">Backend</p>
      <div className="flex flex-row gap-8 items-center my-10 flex-wrap justify-center w-full">
        {backendTechStack.map((tech) => (
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
