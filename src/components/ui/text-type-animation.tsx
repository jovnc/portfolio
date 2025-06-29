"use client";
import { TypeAnimation } from "react-type-animation";

export const TextTypeAnimation = ({ text }: { text: string }) => {
  return (
    <TypeAnimation
      sequence={[text, 2000]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "1em",
        display: "inline-block",
        fontWeight: "900",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      repeat={0}
    />
  );
};
