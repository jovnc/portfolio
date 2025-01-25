"use client";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "Jul 2024 - Present",
    cardTitle: "Student",
    cardSubtitle: "NUS Computer Science Undergraduate",
  },
  {
    title: "Apr-Jun 2024",
    cardTitle: "DSTA Application Security Intern",
    cardSubtitle: "Under Enterprise Digital Services (EDS) Cluster",
  },
  {
    title: "Jan-Mar 2024",
    cardTitle: "MOE Research Assistant Intern",
    cardSubtitle: "Under MOE HQ EdTech Division",
  },
];

export default function WorkTimeline() {
  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      disableInteraction={true}
      highlightCardsOnHover={true}
    />
  );
}
