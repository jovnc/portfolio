"use client";
import { TypeAnimation } from "react-type-animation";

export const NameTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={["Hello I'm Jovan", 1000]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "4em", display: "inline-block", fontWeight: "bold" }}
      repeat={Infinity}
    />
  );
};
