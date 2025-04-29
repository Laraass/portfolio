import React from "react";

type SocialProps = {
  children: React.ReactNode;
  link: string;
  ariaLabel: string;
};

const Social: React.FC<SocialProps> = ({ children, link, ariaLabel }) => {
  return (
    <a
      href={link}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        size-12 rounded-full border-2 border-primary 
        flex items-center justify-center 
        transition-all duration-300
        group
        hover:bg-shade-900 
        hover:shadow-[0_0_20px_5px_#836AED]
        active:bg-shade-900 
        active:shadow-[0_0_20px_5px_#836AED]
        cursor-pointer
      `}
    >
      <div className="text-shade-100">{children}</div>
    </a>
  );
};

export default Social;