import { useRef, useState } from "react";
import { CheckboxProps } from "../../../types/Checkbox";
import "./Checkbox.css";

export function Checkbox({
  name,
  checked = false,
  disabled = false,
  required = false,
  label,
  size = "medium",
  className = "",
  onChange,
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [check, setCheck] = useState(checked);

  const handleChange = () => {
    setCheck(!check);
    if (onChange) {
      onChange(check);
    }
  };

  return (
    <div>
      <div className={`checkbox-container ${className}`}>
        <div className="checkbox-input-container">
          <input
            ref={checkboxRef}
            type="checkbox"
            name={name}
            checked={check}
            disabled={disabled}
            required={required}
            onChange={handleChange}
            className={` checkbox-input checkbox-${size} ${
              disabled ? "checkbox-disabled" : ""
            }`}
          />
        </div>
        {label && (
          <div className="checkbox-label-container">
            <label
              className={`checkbox-label ${
                disabled ? "checkbox-label-disabled" : ""
              }`}
            >
              {label}
              {required && <span className="checkbox-required">*</span>}
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
