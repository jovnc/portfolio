"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const FadeInSection = ({ children }: { children: React.ReactElement }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move up
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
