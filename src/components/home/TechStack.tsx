import FrontendStack from "@/components/home/FrontendStack";
import BackendStack from "@/components/home/BackendStack";
import React from "react";
import FadeInSection from "../ui/FadeInSection";

export default function TechStack() {
  return (
    <FadeInSection>
      <div className="flex flex-col gap-8 items-start w-full">
        <h2 className="font-bold text-xl">My Tech Stack</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full p-8 rounded-lg">
          <FrontendStack />
          <BackendStack />
        </div>
      </div>
    </FadeInSection>
  );
}
