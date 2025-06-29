import { Experience } from "@/data/Experiences";
import { Briefcase, MapPin } from "lucide-react";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Present";
    const [year, month] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const getTypeColor = (type: Experience["type"]) => {
    const colors = {
      "full-time": "bg-green-500 border-green-200",
      "part-time": "bg-blue-500 border-blue-200",
      internship: "bg-purple-500 border-purple-200",
      freelance: "bg-orange-500 border-orange-200",
      contract: "bg-gray-500 border-gray-200",
    };
    return colors[type];
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-300"></div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="relative flex items-start gap-4 group"
          >
            {/* Timeline dot */}
            <div className="relative flex-shrink-0 z-10">
              <div
                className={`w-8 h-8 ${getTypeColor(
                  experience.type
                )} rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}
              >
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              {/* Current position indicator */}
              {index === 0 && experience.endDate === "Present" && (
                <>
                  <div className="absolute -top-1 -left-1 w-10 h-10 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -top-2 -left-2 w-12 h-12 bg-green-400 rounded-full opacity-10 animate-ping"></div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
                  {experience.position}
                </h4>
                <p className="text-sm text-gray-700 font-medium mb-2">
                  {experience.company}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{experience.location}</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  {formatDate(experience.startDate)} -{" "}
                  {formatDate(experience.endDate)}
                </p>

                {/* Type badge */}
                <div className="mt-2">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
                      experience.type
                    )
                      .replace("bg-", "bg-opacity-10 bg-")
                      .replace("border-", "text-")} border`}
                  >
                    {experience.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Timeline end */}
        <div className="relative flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
          <div className="text-sm text-gray-500 italic">
            Journey continues...
          </div>
        </div>
      </div>
    </div>
  );
}
