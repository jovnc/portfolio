"use client";
import { TypeAnimation } from "react-type-animation";

export const NameTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={["Jovan", 2000]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "1em",
        display: "inline-block",
        fontWeight: "700",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      repeat={0}
    />
  );
};
