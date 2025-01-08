import "./Typography.css";
import { TypographyProps } from "../../../types/Typography";

export function Typography({
  variant = "body",
  weight = "normal",
  color = "default",
  align = "left",
  font = "roboto",
  transform = "none",
  className = "",
  children,
}: TypographyProps) {
  const Tag =
    variant === "body"
      ? "p"
      : variant === "caption" || variant === "overline"
      ? "span"
      : variant;

  return (
    <Tag
      className={`typography typography-${variant} typography-${weight} typography-${color} typography-${align} typography-${font} ${
        transform !== "none" ? `typography-${transform}` : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
