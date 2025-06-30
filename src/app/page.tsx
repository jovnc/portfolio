import HomeHeader from "@/components/sections/home/HomeHeader";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";
import { ProjectsSection } from "@/components/sections/project";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <HomeHeader />

      {/* Remaining sections */}
      <div className="flex-1">
        {/* Experiences section */}
        <ExperienceSection />

        {/* Projects & Hackathons section */}
        <ProjectsSection />

        {/* Skills section */}

        {/* Education & Certification section */}

        {/* Contact section */}
      </div>
    </main>
  );
}
