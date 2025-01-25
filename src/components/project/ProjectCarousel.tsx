import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/Project";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  return (
    <Carousel className="w-full mx-auto">
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="max-w-lg px-10">
            <ProjectCard {...project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
