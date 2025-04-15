"use client";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface WebsiteButtonProps {
  url: string;
  label?: string;
}

export const WebsiteButton = ({
  url,
  label = "Visit Website",
}: WebsiteButtonProps) => {
  return (
    <Button
      variant="outline"
      size="lg"
      className="flex items-center gap-2"
      onClick={() => window.open(url, "_blank")}
    >
      <Globe size={18} />
      {label}
    </Button>
  );
};
