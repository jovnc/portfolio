"use client";
import { NameTypeAnimation } from "@/components/home/NameTypeAnimation";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

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
      <div className="relative z-10 text-center px-4 animate-fade-in italic">
        <span className="inline text-3xl font-medium text-white/90 tracking-wide">
          Hi I'm
        </span>
        <h1 className="text-5xl font-bold gradient-text tracking-tight leading-none mt-2">
          <NameTypeAnimation />
        </h1>
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
