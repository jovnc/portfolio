"use client";
import { hackathons, personalProjects } from "@/data/Projects";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card } from "../ui/card";

export default function ProjectOverview() {
  const projects = hackathons;
  return (
    <div className="w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
      <div className=" rounded-lg p-8 mb-8 w-full">
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col items-center p-10 gap-8">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4 text-center flex flex-col gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
