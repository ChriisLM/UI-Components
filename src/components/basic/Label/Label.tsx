import { LabelProps } from "../../../types/Label";
import "./Label.css"

export function Label({
  text,
  htmlFor,
  size = "medium",
  color = "primary",
  className = "",
}: LabelProps) {
  const labelClassName = `
    label 
    label-${size} 
    label-${color} 
    ${className}
  `.trim();

  return (
    <label htmlFor={htmlFor} className={labelClassName}>
      {text}
    </label>
  );
}
