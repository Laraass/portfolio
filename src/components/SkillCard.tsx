import React from "react";
import clsx from "clsx";

interface SkillCardProps {
  title: string;
  children: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, children }) => {
  return (
    <div
      className={clsx(
        "p-4 border-2 rounded-md transition-all duration-300",
        "hover:shadow-[0_0_20px_5px_#836AED]",
        "bg-shade-800 border-shade-600",
        "w-full max-w-full"
      )}
    >
      <div className="flex flex-col gap-4 px-2">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <div className="flex flex-row gap-5 overflow-x-auto w-full p-2 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
