import { SelectProps } from "../../../types/Select";
import "./Select.css";

export function Select({
  name,
  options,
  value,
  placeholder,
  size = "medium",
  disabled = false,
  className = "",
  onChange,
}: SelectProps) {
  return (
    <div className="select-container">
      <select
        value={value}
        name={name}
        disabled={disabled}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
        className={`select-wrapped ${
          disabled ? "select-disabled" : ""
        } select-${size} ${className}`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
