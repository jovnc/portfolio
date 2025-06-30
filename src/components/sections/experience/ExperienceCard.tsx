import { Experience } from "@/data/Experiences";
import { Briefcase, MapPin } from "lucide-react";
import { TechTag } from "@/components/common";

interface ExperienceCardProps {
  experience: Experience;
  isFirst: boolean;
}

const formatDate = (dateString: string) => {
  if (dateString === "Present") return "Present";
  const [year, month] = dateString.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

export default function ExperienceCard({
  experience,
  isFirst,
}: ExperienceCardProps) {
  return (
    <div className="relative flex items-start gap-4 group">
      {/* Timeline dot */}
      <div className="relative flex-shrink-0 z-10">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center bg-blue-500/30 border-2 border-blue-400/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/40 group-hover:border-blue-400/70`}
        >
          <Briefcase className="w-3 h-3 text-blue-200" />
        </div>

        {/* Current position indicator */}
        {isFirst && experience.endDate === "Present" && (
          <>
            <div className="absolute -top-0.5 -left-0.5 w-7 h-7 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-1 -left-1 w-8 h-8 bg-green-400 rounded-full opacity-10 animate-ping"></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pb-3">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-xl group-hover:-translate-y-1">
          {/* Header Section */}
          <div className="flex justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-bold mb-1 truncate">
                {experience.position}
              </h4>
              <p className="text-sm font-semibold opacity-90 truncate">
                {experience.company}
              </p>
              <div className="flex items-center gap-2 text-xs opacity-70 mt-1">
                <MapPin className="w-3 h-3" />
                <span className="truncate">{experience.location}</span>
              </div>
            </div>

            {/* Date - Top Right */}
            <div className="text-right">
              <div className="text-xs font-medium opacity-70">
                {formatDate(experience.startDate)} to{" "}
                {formatDate(experience.endDate)}
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="flex flex-col gap-4">
            {/* Description */}
            <div className="lg:col-span-3">
              {experience.description?.length > 0 && (
                <div>
                  <div className="text-xs font-semibold mb-2 opacity-90">
                    Responsibilities
                  </div>

                  <ul className="space-y-1 text-xs">
                    {experience.description.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 leading-relaxed"
                      >
                        <span className="w-1 h-1 bg-current rounded-full mt-1.5 opacity-60"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="w-full">
              {experience.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {experience.technologies.map((tech, index) => (
                    <TechTag
                      key={index}
                      tech={tech}
                      index={index}
                      className="tech-tag-enter"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
