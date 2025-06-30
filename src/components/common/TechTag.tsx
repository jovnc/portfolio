import React from "react";
import { TECH_CATEGORIES } from "@/constants/experience";

interface TechTagProps {
  tech: string;
  index?: number;
  className?: string;
  variant?: "default" | "compact";
}

const getTechColor = (tech: string) => {
  const techLower = tech.toLowerCase();

  for (const category of Object.values(TECH_CATEGORIES)) {
    if (category.techs.includes(techLower)) {
      return category.color;
    }
  }

  return "bg-white/10 border-white/20 text-white/70";
};

export default function TechTag({ 
  tech, 
  index = 0, 
  className = "", 
  variant = "default" 
}: TechTagProps) {
  const baseClasses = "rounded-full font-medium border backdrop-blur-sm hover:scale-105 transition-all duration-200 animate-fade-in-up";
  
  const variantClasses = {
    default: "px-2 py-0.5 text-xs",
    compact: "px-2 py-0.5 text-xs"
  };

  // Different animation delays for different contexts
  const getAnimationDelay = () => {
    if (className.includes('tech-tag-enter')) {
      return `${index * 60}ms`; // For experience cards
    }
    return `${index * 100 + 300}ms`; // For project cards
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${getTechColor(tech)} ${className}`}
      style={{
        animationDelay: getAnimationDelay(),
      }}
    >
      {tech}
    </span>
  );
}
