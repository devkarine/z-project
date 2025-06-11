"use client";

import { useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

type InputProps = {
  placeholder: string;
  value?: string;
  onChange?: (newValue: string) => void;
  password?: boolean;
  filled?: boolean;
  icon?: IconDefinition;
};

export const Input = ({
  placeholder,
  value,
  onChange,
  password,
  filled,
  icon,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${
        filled && "bg-gray-700"
      }`}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className=" ml-4 size-6 text-gray-700" />
      )}
      <input
        className="flex-1 outline-none bg-transparent h-full px-4"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        type={password && !showPassword ? "password" : "text"}
      />
      {password && (
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          className=" cursor-pointer mr-4 size-6 text-gray-700"
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </div>
  );
};
