import React from "react";
import { LinkedInButton } from "../contact/LinkedInButton";
import { WebsiteButton } from "./WebsiteButton";

export default function Socials() {
  return (
    <div className="flex flex-row gap-4">
      <LinkedInButton profileUrl="https://www.linkedin.com/in/jovan-ng-96645125a/" />
      <WebsiteButton
        url="https://examspecialist.vercel.app"
        label="Visit Exam Specialist"
      />
    </div>
  );
}
