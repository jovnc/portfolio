"use client";
import React, { useState, useEffect } from "react";
import { navigationRoutes, NAVBAR_CONFIG } from "@/data/Navigation";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navigationRoutes.map((route) => route.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`
        fixed top-10 left-1/2 transform -translate-x-1/2 z-50
        ${NAVBAR_CONFIG.height}
        ${NAVBAR_CONFIG.animation}
        rounded-2xl
        p-2
        px-10
        ${
          isScrolled
            ? `${NAVBAR_CONFIG.blur} bg-white/8 ${NAVBAR_CONFIG.shadow} border border-white/15`
            : "backdrop-blur-lg bg-white/5 border border-white/10"
        }
      `}
      style={{
        boxShadow: isScrolled
          ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          : "0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="px-6 h-full flex items-center justify-center">
        {/* Navigation Links - Centered */}
        <div className="flex items-center space-x-3">
          {navigationRoutes.map((route) => (
            <button
              key={route.id}
              onClick={() => handleNavClick(route.href)}
              className={`
                relative px-3 py-2 rounded-lg text-xs font-medium
                transition-all duration-300 ease-out
                hover:bg-white/15 hover:backdrop-blur-sm hover:scale-105
                ${
                  activeSection === route.id
                    ? "bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/25 scale-105"
                    : "text-white/85 hover:text-white"
                }
              `}
              style={{
                boxShadow:
                  activeSection === route.id
                    ? "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 4px 16px rgba(255, 255, 255, 0.1)"
                    : "none",
              }}
            >
              {/* Active indicator glow */}
              {activeSection === route.id && (
                <>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/25 to-blue-500/25 blur-sm"></div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/10 to-blue-400/10"></div>
                </>
              )}

              <span className="relative z-10">{route.label}</span>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/15 to-blue-500/15 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
