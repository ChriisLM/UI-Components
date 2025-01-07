import { useState } from "react";
import { SliderProps } from "../../../types/Slider";
import "./Slider.css";

export function Slider({
  value,
  min = 0,
  max = 100,
  step = 1,
  size = "medium",
  marks,
  disabled,
  fullWidth,
  className = "",
  onChange,
}: SliderProps) {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      className={`slider-container slider-${size} ${
        fullWidth ? "slider-fullWidth" : ""
      } ${className}`}
    >
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        disabled={disabled}
        onChange={handleChange}
        className={`slider-input ${disabled ? "slider-disabled" : ""}`}
      />
      {marks && (
        <div className="slider-marks-container">
          {Object.entries(marks).map(([value, label]) => (
            <span key={value} className="slider-mark">
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
