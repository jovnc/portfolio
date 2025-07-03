"use client";

import { useEffect, useState, useRef } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
}

export default function AnimatedCursor() {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer, [data-cursor="pointer"]'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorVariant("hover"));
        el.addEventListener("mouseleave", () => setCursorVariant("default"));
      });
    };

    // Add event listeners for text elements
    const addTextListeners = () => {
      const textElements = document.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, span, div"
      );

      textElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          if (
            !el.querySelector('a, button, [role="button"]') &&
            !el.closest('a, button, [role="button"]')
          ) {
            setCursorVariant("text");
          }
        });
        el.addEventListener("mouseleave", () => setCursorVariant("default"));
      });
    };

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Delay to ensure DOM is ready
    setTimeout(() => {
      addHoverListeners();
      addTextListeners();
    }, 100);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isVisible]);

  // Trail animation
  useEffect(() => {
    const updateTrail = () => {
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail];

        // Add current position to trail
        newTrail.push({
          x: cursorPosition.x,
          y: cursorPosition.y,
          opacity: 1,
        });

        // Update opacities and remove old points
        const updatedTrail = newTrail
          .map((point, index) => ({
            ...point,
            opacity: point.opacity * 0.9,
          }))
          .filter((point) => point.opacity > 0.1)
          .slice(-15); // Keep only last 15 points

        return updatedTrail;
      });

      animationFrameRef.current = requestAnimationFrame(updateTrail);
    };

    if (isVisible) {
      animationFrameRef.current = requestAnimationFrame(updateTrail);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [cursorPosition, isVisible]);

  const cursorVariants = {
    default: {
      height: 20,
      width: 20,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      mixBlendMode: "difference" as const,
      scale: isClicking ? 0.8 : 1,
    },
    hover: {
      height: 40,
      width: 40,
      backgroundColor: "rgba(59, 130, 246, 0.4)",
      mixBlendMode: "normal" as const,
      scale: isClicking ? 0.9 : 1.1,
    },
    text: {
      height: 20,
      width: 2,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      mixBlendMode: "difference" as const,
      scale: isClicking ? 0.8 : 1,
    },
  };

  const currentVariant =
    cursorVariants[cursorVariant as keyof typeof cursorVariants];

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="fixed top-0 left-0 pointer-events-none z-[9996] rounded-full"
          style={{
            transform: `translate(${point.x - 4}px, ${point.y - 4}px)`,
            width: 8,
            height: 8,
            backgroundColor: "rgba(59, 130, 246, 0.6)",
            opacity: point.opacity,
            transition: "opacity 0.1s ease-out",
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out rounded-full"
        style={{
          transform: `translate(${
            cursorPosition.x - currentVariant.width / 2
          }px, ${cursorPosition.y - currentVariant.height / 2}px) scale(${
            currentVariant.scale
          })`,
          width: currentVariant.width,
          height: currentVariant.height,
          backgroundColor: currentVariant.backgroundColor,
          mixBlendMode: currentVariant.mixBlendMode,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out rounded-full border border-white/30"
        style={{
          transform: `translate(${cursorPosition.x - 25}px, ${
            cursorPosition.y - 25
          }px) scale(${
            isClicking ? 0.8 : cursorVariant === "hover" ? 1.3 : 1
          })`,
          width: 50,
          height: 50,
          opacity: isVisible ? 0.5 : 0,
        }}
      />

      {/* Pulsing glow effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997] transition-all duration-500 ease-out rounded-full animate-pulse"
        style={{
          transform: `translate(${cursorPosition.x - 40}px, ${
            cursorPosition.y - 40
          }px)`,
          width: 80,
          height: 80,
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          opacity: isVisible && cursorVariant === "hover" ? 0.6 : 0,
        }}
      />
    </>
  );
}
