"use client";
import { TextTypeAnimation } from "@/components/ui/text-type-animation";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Socials from "./Socials";

export default function HomeHeader() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center w-full">
      {/* Main content */}
      <div className="flex flex-row gap-2 items-center justify-center">
        {/* Name and role */}
        <div className="relative z-10 text-center px-4 animate-fade-in italic flex flex-col items-center justify-center gap-2">
          <h1 className="text-6xl font-bold gradient-text tracking-tight leading-none mt-2 py-2">
            <TextTypeAnimation text="Jovan Ng" />
          </h1>
          <p className="text-white">Full Stack Software Engineer</p>
        </div>

        {/* Avatar */}
        {/* <div className="relative z-10">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div> */}
      </div>

      {/* Socials */}
      <div className="mt-8">
        <Socials />
      </div>

      {/* Animated scroll indicator */}
      {showArrow && (
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group transition-all duration-500 hover:scale-110"
          onClick={scrollToNext}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToNext();
            }
          }}
        >
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-white/60 text-sm font-medium mb-2 group-hover:text-white/80 transition-colors duration-300">
              Scroll to explore
            </span>
            <ChevronDown className="w-6 h-6 text-white/60 group-hover:text-white/80 transition-colors duration-300" />
          </div>
        </div>
      )}
    </section>
  );
}
