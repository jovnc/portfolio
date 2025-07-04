import HomeHeader from "@/components/sections/home/HomeHeader";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";
import { ProjectsSection } from "@/components/sections/project";
import AboutMeSection from "@/components/sections/home/AboutMeSection";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <HomeHeader />

      {/* Remaining sections */}
      <div className="flex-1">
        {/* About Myself section (Education, Certification, Skills) */}
        <AboutMeSection />

        {/* Experiences section */}
        <ExperienceSection />

        {/* Projects & Hackathons section */}
        <ProjectsSection />

        {/* Contact section */}
      </div>
    </main>
  );
}
