import "./Button.css";
import { ButtonProps } from "../../../types/Button";

export function Button({
  variant = "filled",
  size = "medium",
  color = "primary",
  font = "roboto",
  disabled = false,
  onClick,
  className = "",
  children,
}: ButtonProps) {
  const buttonClassName = `
    button 
    button-${variant} 
    button-${size} 
    button-${color} 
    button-${font}
    ${disabled ? "button-disabled" : ""} 
    ${className}
  `.trim();

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
