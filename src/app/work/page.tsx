import { Separator } from "@/components/ui/separator";
import WorkTimeline from "@/components/work/WorkTimeline";
import { Kanban } from "lucide-react";
import React from "react";
import Footer from "@/components/footer/Footer";

export default function WorkPage() {
  return (
    <div className="flex flex-col items-center justify-items-center p-8 pb-20 gap-8 h-full w-full">
      <h1 className="text-3xl font-extrabold">
        <Kanban className="inline mr-4" />
        My Work Experience
      </h1>
      <Separator />
      <div>
        <p className="text-md text-center">
          Summary of my professional journey, showcasing the various roles and
          responsibilities I have undertaken over the years. Each experience has
          contributed to my growth and expertise in the tech industry.
        </p>
      </div>
      <div className="flex flex-col gap-8 w-3/4">
        <WorkTimeline />
      </div>
      <Separator />
    </div>
  );
}
