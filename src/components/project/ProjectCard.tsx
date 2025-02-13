import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";
import Image from "next/image";
import StackIcon from "tech-stack-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import Link from "next/link";
import { Youtube } from "lucide-react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  date: string;
  github: string;
  youtube?: string;
}

export default function ProjectCard({
  imageSrc,
  title,
  subtitle,
  description,
  techStack,
  date,
  github,
  youtube,
}: ProjectCardProps) {
  return (
    <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
      <CardHeader className="flex flex-col gap-4 items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={1200}
          height={200}
          className="rounded-lg"
        />
        <div className="w-full flex flex-col gap-2">
          <CardTitle className="text-2xl font-extrabold">{title}</CardTitle>
          <CardDescription className="text-sm">{subtitle}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 items-end">
        <p className="text-sm">{description}</p>
        <div className="flex flex-row gap-4">
          <Button variant={"outline"} asChild>
            <Link
              href={github}
              className="flex flex-row gap-2 items-center"
              rel="noopener noreferrer"
              target="_blank"
            >
              <StackIcon name="github" className="w-4 h-4" />
              <p>View GitHub</p>
            </Link>
          </Button>
          {youtube && (
            <Button variant={"secondary"} asChild>
              <Link
                href={youtube}
                className="flex flex-row gap-2 items-center"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Youtube className="w-4 h-4" />
                <p>View Demo</p>
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex flex-col gap-4 py-4 items-start">
        <p className="font-bold">Tech Stack</p>
        <div className="flex flex-row gap-4">
          {techStack.map((tech) => (
            <TooltipProvider key={tech}>
              <Tooltip>
                <TooltipTrigger>
                  <StackIcon name={tech} className="w-8 h-8" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">{tech}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
