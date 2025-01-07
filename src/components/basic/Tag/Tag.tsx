import { TagProps } from "../../../types/Tag";
import "./Tag.css";

export function Tag({
  variant = "default",
  closable = false,
  size = "medium",
  className = "",
  children,
  onClose,
}: TagProps) {
  return (
    <span className={`tag-container tag-${variant} tag-${size} ${className}`}>
      {children}
      {closable && (
        <button
          type="button"
          onClick={onClose}
          className="tag-closed ml-1 hover:opacity-80 focus:outline-none"
        >
          <span className="sr-only">Remove</span>×
        </button>
      )}
    </span>
  );
}
