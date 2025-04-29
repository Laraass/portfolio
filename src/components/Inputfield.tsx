import React from "react";
import clsx from "clsx";

interface InputFieldProps {
  label?: string;
  name?: string;
  placeholder: string;
  type?: "text" | "textarea";
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  const inputClasses = clsx(
    "w-full rounded-md p-2 bg-shade-600 text-shade-100 placeholder-shade-200",
    "text-base focus:outline-none",
    value.length === 0 ? "italic" : "not-italic"
  );

  const textareaClasses = clsx(
    "w-full rounded-md p-2 bg-shade-600 text-shade-100 placeholder-shade-200",
    "text-base min-h-16 max-h-64 resize-y focus:outline-none",
    value.length === 0 ? "italic" : "not-italic"
  );

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="font-bold text-neutral-100">{label}</label>}
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={textareaClasses}
          rows={5}
        />
      ) : (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClasses}
        />
      )}
    </div>
  );
};

export default InputField;
