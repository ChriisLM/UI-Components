import { LabelProps } from "../../../types/Label";
import "./Label.css";

export function Label({
  htmlFor,
  size = "medium",
  weight = "normal",
  disabled,
  className = "",
  children,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`label label-${size} label-font-${weight} ${
        disabled ? "label-disabled" : ""
      } ${className}`}
    >
      {children}
    </label>
  );
}
