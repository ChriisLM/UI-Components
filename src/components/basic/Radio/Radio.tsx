import { useRef, useState } from "react";
import { RadioProps } from "../../../types/Radio";
import { Label } from "../Label/Label";
import "./Radio.css";

export function Radio({
  name,
  label,
  size = "medium",
  checked = false,
  disabled = false,
  required = false,
  className = "",
  onChange,
}: RadioProps) {
  const radioRef = useRef<HTMLInputElement>(null);
  const [check, setCheck] = useState(checked);

  const handleChange = () => {
    setCheck(!check);
    if (onChange) {
      onChange(check);
    }
  };
  return (
    <div className={`radio-container ${className}`}>
      <div className="radio-wrapper">
        <input
          ref={radioRef}
          type="radio"
          name={name}
          checked={check}
          disabled={disabled}
          required={required}
          onClick={handleChange}
          className={`radio-input radio-${size} ${
            disabled ? "radio-disabled" : ""
          }`}
        />
        {label && (
          <Label disabled={disabled} size={size} className="radio-label">
            {label}
            {required && <span className="radio-required">*</span>}
          </Label>
        )}
      </div>
    </div>
  );
}
