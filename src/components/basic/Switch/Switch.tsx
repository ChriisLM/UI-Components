import { useRef, useState } from "react";
import { SwitchProps } from "../../../types/Switch";
import "./Switch.css";

export function Switch({
  checked = false,
  disabled = false,
  loading = false,
  size = "medium",
  className = "",
  onChange,
}: SwitchProps) {
  const switchRef = useRef<HTMLButtonElement>(null);
  const [check, setCheck] = useState(checked);

  const handleChange = () => {
    setCheck(!check);
    if (onChange) {
      onChange(check);
    }
  };

  return (
    <button
      role="switch"
      ref={switchRef}
      aria-checked={check}
      disabled={disabled}
      onClick={handleChange}
      onChange={handleChange}
      className={`switch-input switch-${size} ${
        check ? "switch-checked" : ""
      } ${disabled ? "switch-disabled" : ""} ${className}`}
    >
      <span
        className={`switch-slider switch-slider-${size} ${
          check ? "switch-slider-checked" : ""
        } `}
      >
        <span
          className={`${loading ? "switch-slider-loading" : "spin-none"}`}
        />
      </span>
    </button>
  );
}
