"use client";
import React from "react";
import { certifications } from "@/data/Certifications";
import { Card } from "@/components/ui/card";
import { ExternalLink, Calendar, Award } from "lucide-react";
import Image from "next/image";

interface CertificationCardProps {
  title: string;
  issuer: string;
  startDate: string;
  endDate: string;
  image: string;
  credentialUrl: string;
}

function CertificationCard({
  title,
  issuer,
  startDate,
  endDate,
  image,
  credentialUrl,
}: CertificationCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Card className="group relative cursor-pointer transition-all duration-300 overflow-hidden bg-gray-50/5 border-gray-200/10 hover:border-gray-200/20 hover:transform hover:scale-[1.02] hover:shadow-xl">
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo */}
          <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-200/5 border border-gray-500/10 group-hover:border-gray-400/20 transition-all duration-300">
            <Image
              src={image}
              alt={issuer}
              width={32}
              height={32}
              className="transition-all duration-300 brightness-90 group-hover:brightness-125"
            />
          </div>

          {/* Title and Issuer */}
          <div className="flex-1 min-w-0">
            <h3 className="text-md font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 leading-tight">
              {title}
            </h3>
            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">
              {issuer}
            </p>
          </div>
        </div>

        {/* Date Range */}
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-400">
            {formatDate(startDate)} - {formatDate(endDate)}
          </span>
        </div>

        {/* Credential Link */}
        <div className="flex items-center justify-between">
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/30 hover:text-blue-300 transition-all duration-300 text-sm font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Verify</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </Card>
  );
}

function Certifications() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-gray-200 mb-2">
          Certifications
        </h4>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Industry-recognized certifications that validate my skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={cert.title}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <CertificationCard {...cert} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
