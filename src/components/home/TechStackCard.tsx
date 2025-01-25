"use client";
import React from "react";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

export default function TechStackCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Card className="px-8 py-4 flex flex-col gap-2 items-center">
        <StackIcon name={image} className="w-16 h-16" />
        <p className="text-sm">{title}</p>
      </Card>
    </motion.button>
  );
}
