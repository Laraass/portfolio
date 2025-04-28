import React from "react";
import { Icon } from "@iconify/react";

interface SkillProps {
  skillIcon: string;
  ariaLabel?: string;
  size?: string;
  color?: string;
  label: string;
}

const Skill: React.FC<SkillProps> = ({
  skillIcon,
  ariaLabel,
  size = "size-20",
  color,
  label,
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="size-28 flex items-center justify-center rounded-full border-2 border-primary 
                 bg-shade-900 shadow-[0_0_10px_1px_#836AED]"
        aria-label={ariaLabel}
      >
        <Icon icon={skillIcon} className={size} style={{ color: color ?? "inherit" }} />
      </div>
      <p className="text-base text-shade-100 text-center">{label}</p>
    </div>
  );
};

export default Skill;
