"use client";

import { Experience } from "@/data/Experiences";
import { Calendar, MapPin, Tag, ExternalLink } from "lucide-react";
import { useState } from "react";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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
      "full-time": "bg-green-100 text-green-800 border-green-200",
      "part-time": "bg-blue-100 text-blue-800 border-blue-200",
      internship: "bg-purple-100 text-purple-800 border-purple-200",
      freelance: "bg-orange-100 text-orange-800 border-orange-200",
      contract: "bg-gray-100 text-gray-800 border-gray-200",
    };
    return colors[type];
  };

  const calculateDuration = () => {
    const start = new Date(experience.startDate);
    const end =
      experience.endDate === "Present"
        ? new Date()
        : new Date(experience.endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

    if (diffMonths < 12) {
      return `${diffMonths} month${diffMonths > 1 ? "s" : ""}`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      return `${years} year${years > 1 ? "s" : ""}${
        months > 0 ? ` ${months} month${months > 1 ? "s" : ""}` : ""
      }`;
    }
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {experience.position}
              </h3>
              <p className="text-lg font-medium text-gray-700 mb-2">
                {experience.company}
              </p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
          </div>
        </div>
        <div className="flex flex-col sm:items-end space-y-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(
              experience.type
            )}`}
          >
            {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
          </span>
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>
            {formatDate(experience.startDate)} -{" "}
            {formatDate(experience.endDate)}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-blue-600 font-medium">
            {calculateDuration()}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{experience.location}</span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <ul className="space-y-2">
          {experience.description
            .slice(0, isExpanded ? experience.description.length : 2)
            .map((item, index) => (
              <li key={index} className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-400 mt-2 text-xs">▶</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
        </ul>

        {experience.description.length > 2 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:underline"
          >
            {isExpanded
              ? "Show less"
              : `Show ${experience.description.length - 2} more`}
          </button>
        )}
      </div>

      {/* Technologies */}
      <div className="flex items-start gap-2">
        <Tag className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
