import React from "react";
import { Icon } from "@iconify/react";

interface SkillProps {
  skillIcon: string;
  ariaLabel?: string;
  size?: string;
  color?: string;
}

const Skill: React.FC<SkillProps> = ({
  skillIcon,
  ariaLabel,
  size = "size-20",
  color,
}) => {
  return (
    <div
      className="size-28 flex items-center justify-center rounded-full border-2 border-primary 
                 bg-shade-900 shadow-[0_0_20px_1px_#836AED]"
      aria-label={ariaLabel}
    >
      <Icon icon={skillIcon} className={`${size} ${color ?? ""}`} />
    </div>
  );
};

export default Skill;
