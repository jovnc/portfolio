export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "GovTech",
    position: "Incoming Software Engineer Intern",
    location: "Singapore",
    startDate: "2026-01",
    endDate: "2026-05",
    description: [
      "Singpass Login will be integrated into the platform, allowing users to login using their Singpass credentials",
    ],
    technologies: ["Typescript"],
  },
  {
    company: "Doctor Anywhere",
    position: "Software Engineer Intern",
    location: "Singapore",
    startDate: "2025-08",
    endDate: "Present",
    description: [
      "Developed and integrate QA Automation platform into CI/CD pipeline, using Java Spring Boot and Appium, reducng manual effort in mobile app testing by 80%",
    ],
    technologies: ["Java", "Spring Boot", "Appium", "CI/CD", "Android", "iOS"],
  },
  {
    company: "Formo.so",
    position: "Full Stack Software Engineer Intern",
    location: "Ho Chi Minh City, Vietnam",
    startDate: "2025-05",
    endDate: "2025-08",
    description: [
      "Developed and deployed core features using Next.js, Express.js, ClickHouse, Vercel AI and PostgreSQL, implementing automated weekly email reports, custom chart builder with 6 visualization types, and AI MCP integration that enabled 800+ customers to effortlessly transform web2 and web3 raw data into actionable insights and reduce time-to-analysis by 75%",
    ],
    technologies: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "ExpressJS",
      "PostgreSQL",
      "AWS",
    ],
  },
  {
    company: "Defence Science Technology Agency (DSTA)",
    position: "Application Security Intern",
    location: "Singapore",
    startDate: "2024-04",
    endDate: "2024-06",
    description: [
      "Conducted penetration testing on 4 internal libraries using Burp Suite, Kali Linux, and Caido, identifying vulnerabilities and delivering detailed VAPT reports with actionable remediation strategies",
      "Developed testing application using Java Spring Boot, ReactJS, and PostgreSQL to validate role-based access controls across Windows (Active Directory), Linux (IPA Server), and AWS environments, implementing least-privilege principles that reduced unauthorized access risks by 30%",
    ],
    technologies: [
      "ReactJS",
      "TailwindCSS",
      "Spring Boot",
      "PostgreSQL",
      "AWS",
      "Linux",
      "AD",
    ],
  },
  {
    company: "Ministry of Education (MOE) EdTech HQ",
    position: "EdTech Research Assistant Intern",
    location: "Singapore",
    startDate: "2024-01",
    endDate: "2024-03",
    description: [
      "Streamlined digitalization of 100+ exam papers in SLS eLearning platform",
    ],
    technologies: ["OpenAI"],
  },
];
