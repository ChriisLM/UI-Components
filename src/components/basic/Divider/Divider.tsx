import { DividerProps } from "../../../types/Divider";
import "./Divider.css";

export function Divider({
  orientation = "horizontal",
  variant = "solid",
  thickness = 1,
  spacing = "small",
  className = "",
}: DividerProps) {
  return orientation === "horizontal" ? (
    <div
      className={`divider divider-horizontal divider-${variant} divider-horizontal-${spacing} ${className}`}
      style={{ borderTopWidth: `${thickness}px` }}
    />
  ) : (
    <div
      className={`divider divider-vertical divider-${variant} divider-vertical-${spacing} ${className}`}
      style={{ borderLeftWidth: `${thickness}px` }}
    />
  );
}
