import { experiences } from "@/data/Experiences";
import { TrendingUp, Users, Award } from "lucide-react";
import ExperienceTimeline from "./ExperienceTimeline";
import StatsCard from "./StatsCard";

export default function ExperienceSection() {
  const totalYears = Math.floor(
    new Date().getFullYear() - 2023 + new Date().getMonth() / 12
  );
  const totalCompanies = experiences.length;
  const totalProjects = 5;

  return (
    <section className="w-full mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-center mb-6">Experiences</h3>
        <p className="text-gray-100 max-w-3xl mx-auto mb-8 italic text-sm">
          My journey through the tech industry, building impactful solutions and
          growing as a developer
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
          <StatsCard
            icon={TrendingUp}
            value={`${totalYears}+`}
            label="Years Experience"
          />
          <StatsCard icon={Users} value={totalCompanies} label="Companies" />
          <StatsCard
            icon={Award}
            value={totalProjects}
            label="Hackathons Won"
          />
        </div>
      </div>

      {/* Timeline View */}
      <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto px-4">
        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  );
}
