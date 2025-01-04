import { BadgeProps } from "../../../types/Badge";
import "./Badge.css";

export function Badge({
  variant = "default",
  content,
  size = "medium",
  position = "top-right",
  isVisible = true,
  className = "",
  children,
}: BadgeProps) {
  return (
    <div className="badge-container">
      {children}
      {isVisible && (
        <span
          className={`badge badge-${variant} badge-${size} badge-${position} ${className}
        `}
        >
          {content}
        </span>
      )}
    </div>
  );
}
