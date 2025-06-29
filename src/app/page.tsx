import HomeHeader from "@/components/sections/home/HomeHeader";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <HomeHeader />

      {/* Remaining sections */}
      <div className="flex-1">
        {/* Experiences section */}
        <ExperienceSection />
        {/* Skills section */}

        {/* Projects & Hackathons section */}

        {/* Others section */}

        {/* Contact section */}
      </div>
    </main>
  );
}
