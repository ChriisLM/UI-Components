import "./Button.css";
import { ButtonProps } from "../../../types/Button";

export function Button({
  variant = "filled",
  size = "medium",
  color = "default",
  font = "roboto",
  disabled = false,
  loading = false,
  fullWidth = false,
  className = "",
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`button button-${variant} button-${size} button-${color} button-${font} ${
        disabled ? "button-disabled" : ""
      } ${fullWidth ? "button-fullWidth" : ""} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {/* {add loading} */}
      {children}
    </button>
  );
}
