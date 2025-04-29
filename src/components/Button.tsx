import React from "react";

type ButtonProps = {
  text: string;
  id?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  text,
  id,
  onClick,
  type = "button",
}) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className="w-full text-shade-900 font-bold p-2 rounded-md bg-primary
                 cursor-pointer
                 hover:shadow-[inset_0_0_20px_5px_#2933806B]
                 active:shadow-[inset_0_0_20px_5px_#2933806B]
                 transition-all duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
