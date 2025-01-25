import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import Link from "next/link";

interface LinkedInButtonProps {
  profileUrl: string;
}

export function LinkedInButton({ profileUrl }: LinkedInButtonProps) {
  return (
    <Button asChild className="bg-[#0077B5] hover:bg-[#006699] text-white">
      <Link href={profileUrl} target="_blank" rel="noopener noreferrer">
        <Linkedin className="mr-2 h-4 w-4" />
        LinkedIn
      </Link>
    </Button>
  );
}
