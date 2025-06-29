import React from "react";
import { Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface Socials {
  url: string;
  icon: React.ReactNode;
  className?: string;
}

const SOCIALS_LINKS: Socials[] = [
  {
    url: "https://www.linkedin.com/in/jovan-ng-96645125a/",
    icon: <Linkedin className="h-8 w-8" />,
    className: "text-blue-600 border-blue-600 bg-white/5 hover:bg-white/10",
  },
  {
    url: "https://github.com/jovnc",
    icon: <GitHubLogoIcon className="h-8 w-8" />,
    className: "bg-white/5 hover:bg-white/10",
  },
];

const SocialButton = ({ url, icon, className }: Socials) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center p-2 rounded-md transition-colors border ${className}`}
  >
    {icon}
  </a>
);

export default function Socials() {
  return (
    <div className="flex flex-row gap-4">
      {SOCIALS_LINKS.map((social, index) => (
        <SocialButton
          key={index}
          url={social.url}
          icon={social.icon}
          className={social.className || ""}
        />
      ))}
    </div>
  );
}
