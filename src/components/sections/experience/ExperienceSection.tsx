import { experiences } from "@/data/Experiences";
import { TrendingUp, Users, Award } from "lucide-react";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceCard from "./ExperienceCard";

const StatsCard = ({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string | number;
  label: string;
}) => (
  <div className="flex flex-col items-center p-4 bg-gray-50/5 border-[0.5px] rounded-lg gap-1">
    <Icon className="w-8 h-8 mb-1" />
    <span className="text-2xl font-bold">{value}</span>
    <span className="text-sm italic">{label}</span>
  </div>
);

export default function ExperienceSection() {
  const totalYears = Math.floor(
    new Date().getFullYear() - 2023 + new Date().getMonth() / 12
  );
  const totalCompanies = experiences.length;
  const totalProjects = 5;

  return (
    <section className="w-full mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
          Professional Experience
        </h2>
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Timeline View */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Career Timeline
            </h3>
            <ExperienceTimeline experiences={experiences} />
          </div>
        </div>

        {/* Experience Cards */}
        <div className="lg:col-span-3 space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
