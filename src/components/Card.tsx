import React, { useState } from "react";
import clsx from "clsx";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className={clsx(
        "p-6 border-2 rounded-md transition-all duration-300",
        "hover:shadow-[0_0_20px_5px_#836AED] cursor-pointer",
        isClicked
          ? "bg-shade-100 border-shade-600"
          : "bg-shade-800 border-shade-600"
      )}
    >
      <div className="flex flex-col gap-2">
        <h3
          className={clsx(
            "text-lg font-semibold",
            isClicked ? "text-shade-900" : "text-primary"
          )}
        >
          {title}
        </h3>
        <p className={clsx(isClicked ? "text-shade-900" : "text-white")}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
