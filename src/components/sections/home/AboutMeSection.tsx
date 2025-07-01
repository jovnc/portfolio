import React from "react";
import TechStack from "./TechStack";

function AboutMeSection() {
  return (
    <section className="w-full mx-auto px-4 py-16 min-h-screen" id="aboutme">
      {/* Information Section */}
      <div className="text-center flex flex-col gap-2 max-w-2xl mx-auto">
        <h3 className="capitalise text-gray-400 font-semibold text-sm">
          KNOW ABOUT ME
        </h3>

        <h1 className="font-bold text-4xl">Full Stack Software Engineer</h1>
        <div className="text-gray-300 text-sm mb-4">
          NUS Computer Science | Expected Graduation 2028
        </div>

        <div className="text-gray-100 text-sm italic">
          I'm Jovan Ng, a proactive full-stack developer passionate about
          crafting solutions that make a difference. With a strong foundation in
          both front-end and back-end technologies, I thrive on challenges and
          continuously seek to expand my skill set. My journey in tech has been
          driven by a commitment to excellence and a desire to create impactful
          applications.
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-3xl mx-auto mt-12">
        <TechStack />
      </div>
    </section>
  );
}

export default AboutMeSection;
