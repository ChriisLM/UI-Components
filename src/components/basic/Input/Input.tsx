import { useState } from "react";
import { InputProps } from "../../../types/Input";
import "./Input.css";

export function Input({
  name,
  value = "",
  type = "text",
  size = "medium",
  placeholder,
  fullWidth = false,
  className = "",
  onChange,
}: InputProps) {
  const [valueText, setValueText] = useState(value);

  const handleValue = (value: string) => {
    setValueText(value);
    if (onChange) {
      onChange(valueText);
    }
  };

  return (
    <div className={`input-container ${fullWidth ? "input-fullWidth" : ""}`}>
      <div className="input-wrapper">
        {/* Add prefix soon*/}
        <input
          type={type}
          name={name}
          value={valueText}
          placeholder={placeholder}
          onChange={(e) => handleValue(e.target.value)}
          className={`input-field input-${size} ${
            fullWidth ? "input-fullWidth" : ""
          } ${className}`}
        />
        {/* Add suffix soon */}
      </div>
    </div>
  );
}
