import React from "react";

const StatsCard = ({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string | number;
  label: string;
}) => (
  <div className="flex flex-col items-center p-4 bg-gray-50/5 border-[0.5px] rounded-lg gap-1 w-[156px]">
    <Icon className="w-8 h-8 mb-1" />
    <span className="text-2xl font-bold">{value}</span>
    <span className="text-sm italic">{label}</span>
  </div>
);
export default StatsCard;
