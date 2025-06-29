export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  type: "full-time" | "part-time" | "internship" | "freelance" | "contract";
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Company",
    position: "Software Engineer",
    location: "San Francisco, CA",
    startDate: "2023-01",
    endDate: "Present",
    description: [
      "Developed and maintained scalable web applications using React and Node.js",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Implemented responsive designs and optimized application performance",
      "Participated in code reviews and mentored junior developers",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    type: "full-time",
  },
  {
    id: "2",
    company: "Startup Inc",
    position: "Frontend Developer",
    location: "Remote",
    startDate: "2022-06",
    endDate: "2022-12",
    description: [
      "Built responsive user interfaces using React and TailwindCSS",
      "Integrated RESTful APIs and implemented state management with Redux",
      "Collaborated with designers to create pixel-perfect implementations",
      "Optimized applications for maximum speed and scalability",
    ],
    technologies: ["React", "TailwindCSS", "Redux", "JavaScript", "Git"],
    type: "internship",
  },
  {
    id: "3",
    company: "Freelance",
    position: "Full Stack Developer",
    location: "Remote",
    startDate: "2021-09",
    endDate: "2022-05",
    description: [
      "Developed custom web applications for various clients",
      "Created responsive designs and implemented database solutions",
      "Provided technical consultation and project management",
      "Delivered projects on time and within budget",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Vercel"],
    type: "freelance",
  },
];
