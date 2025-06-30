import { Experience } from "@/data/Experiences";
import ExperienceCard from "./ExperienceCard";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line - centered on the dots (left-3 + w-0.5 centers on 6px dot) */}
      <div className="absolute left-3 top-4 bottom-0 w-0.5 bg-blue-400/30"></div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
            isFirst={index === 0}
          />
        ))}

        {/* Timeline end */}
        <div className="relative flex items-center gap-4">
          <div className="w-6 h-6 bg-blue-500/20 border-2 border-blue-400/40 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-2 h-2 bg-blue-400/60 rounded-full"></div>
          </div>
          <div className="text-sm italic opacity-70">Journey continues...</div>
        </div>
      </div>
    </div>
  );
}
